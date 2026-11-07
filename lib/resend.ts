import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";
export const resend = new Resend(resendApiKey);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Vakxo <onboarding@resend.dev>";

export async function sendWaitlistEmail(to: string) {
  if (!resendApiKey) {
    console.warn("RESEND_API_KEY is not defined. Skipping email dispatch.");
    return { success: false, error: "Missing API key" };
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to Vakxo Waitlist</title>
</head>
<body style="margin: 0; padding: 0; background-color: #121212; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #121212; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="580px" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #18181b; border: 3px solid #CCFF00; padding: 40px; text-align: left;">
          <tr>
            <td>
              <div style="display: inline-block; background-color: #CCFF00; color: #000000; font-weight: 800; font-size: 11px; padding: 4px 10px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">
                ✦ FIRST BETA INCOMING
              </div>
              <h1 style="color: #ffffff; font-size: 32px; font-weight: 900; margin: 0 0 16px 0; text-transform: uppercase; line-height: 1.1;">
                You're On The List.<br>
                <span style="color: #CCFF00;">JARVIS Is Real Now.</span>
              </h1>
              <p style="color: #a1a1aa; font-size: 15px; line-height: 1.6; margin: 0 0 24px 0;">
                Thanks for securing your early access to <strong>Vakxo</strong> — the world's first voice-native autonomous dev agent.
              </p>
              <div style="background-color: #000000; border-left: 4px solid #CCFF00; padding: 16px 20px; margin-bottom: 28px;">
                <p style="color: #ffffff; font-size: 14px; margin: 0; font-style: italic;">
                  "Just say it. It happens."
                </p>
                <p style="color: #71717a; font-size: 12px; margin: 8px 0 0 0;">
                  Speak your intent — Vakxo writes the code, controls your desktop, runs your terminal, and ships.
                </p>
              </div>
              <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin: 0 0 28px 0;">
                We are onboarding developers in waves leading up to our private beta. You will receive an exclusive invite token as soon as your spot opens.
              </p>
              <div style="border-top: 1px solid #27272a; padding-top: 20px; font-size: 12px; color: #52525b;">
                © 2026 Pathixo Inc. — Building Vakxo<br>
                <a href="https://vakxo.vercel.app" style="color: #CCFF00; text-decoration: none;">vakxo.vercel.app</a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject: "You're on the Vakxo Waitlist ✦ First Beta Access",
      html,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to send welcome email via Resend:", error);
    return { success: false, error };
  }
}

