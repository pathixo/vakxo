import { describe, it, expect, vi, beforeEach } from "vitest";
import { POST } from "./route";

// Mock Supabase
vi.mock("@/lib/supabase", () => {
  return {
    supabase: {
      from: vi.fn(),
    },
  };
});

// Mock Resend
vi.mock("@/lib/resend", () => {
  return {
    sendWaitlistEmail: vi.fn().mockResolvedValue({ success: true }),
  };
});

import { supabase } from "@/lib/supabase";
import { sendWaitlistEmail } from "@/lib/resend";

describe("Waitlist API Route - POST /api/waitlist", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 400 if payload is missing or not JSON", async () => {
    const req = new Request("http://localhost/api/waitlist", {
      method: "POST",
      body: "invalid-json",
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json.error).toContain("'email' is required");
  });

  it("returns 400 for invalid email format", async () => {
    const req = new Request("http://localhost/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "not-an-email" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);

    const json = await res.json();
    expect(json.error).toBe("Please enter a valid email address.");
  });

  it("successfully registers valid email and triggers welcome email", async () => {
    const mockInsert = vi.fn().mockResolvedValue({ error: null });
    vi.mocked(supabase.from).mockReturnValue({
      insert: mockInsert,
    } as unknown as ReturnType<typeof supabase.from>);

    const req = new Request("http://localhost/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "Dev@Example.com", source: "hero" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.success).toBe(true);
    expect(sendWaitlistEmail).toHaveBeenCalledWith("dev@example.com");
  });

  it("handles duplicate email without sending duplicate welcome email", async () => {
    const mockInsert = vi.fn().mockResolvedValue({
      error: { code: "23505", message: "duplicate key value" },
    });
    vi.mocked(supabase.from).mockReturnValue({
      insert: mockInsert,
    } as unknown as ReturnType<typeof supabase.from>);

    const req = new Request("http://localhost/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "existing@example.com", source: "waitlist" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.duplicate).toBe(true);
    expect(sendWaitlistEmail).not.toHaveBeenCalled();
  });
});
