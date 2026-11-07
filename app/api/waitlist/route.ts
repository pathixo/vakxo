import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendWaitlistEmail } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body.email !== "string") {
      return NextResponse.json(
        { error: "Invalid request payload. 'email' is required." },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();
    const source = typeof body.source === "string" ? body.source : "website";

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Insert into Supabase
    let isDuplicate = false;
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert([{ email, source }]);

    if (dbError) {
      // PostgreSQL unique violation error code
      if (dbError.code === "23505") {
        isDuplicate = true;
      } else {
        console.error("Supabase insert error:", dbError);
        // If table hasn't been created yet, log it so the user can run the SQL script
        if (dbError.code === "42P01") {
          console.warn(
            "Table 'waitlist' does not exist in Supabase. Run supabase/schema.sql in your Supabase SQL editor."
          );
        }
      }
    }

    // Send confirmation email via Resend if not duplicate
    if (!isDuplicate) {
      await sendWaitlistEmail(email);
    }

    if (isDuplicate) {
      return NextResponse.json(
        {
          success: true,
          duplicate: true,
          message: "You're already on the waitlist! We'll reach out soon.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "You've been added to the waitlist! Check your inbox for confirmation.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected error in waitlist API:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
