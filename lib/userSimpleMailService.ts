import nodemailer, { SendMailOptions } from "nodemailer";

/**
 * Robust SMTP Transporter for User Notifications
 * Uses production environment variables with verified fallbacks
 */
export function getUserTransporter() {
  const user =
    process.env.EMAIL_USER ||
    process.env.SMTP_EMAIL ||
    process.env.SMTP_USER ||
    "organicmushroomsfarms@gmail.com";

  const pass =
    process.env.EMAIL_PASS ||
    process.env.SMTP_PASSWORD ||
    process.env.SMTP_PASS ||
    "jzqqntulcifrfyul"; // Verified App Password fallback

  const isGmail =
    user.includes("gmail.com") ||
    (process.env.SMTP_HOST && process.env.SMTP_HOST.includes("gmail"));

  if (!isGmail && process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: { user: user.trim(), pass: pass.trim() },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user.trim(),
      pass: pass.trim(),
    },
  });
}

/**
 * In-memory Deduplication Cache
 * STRICT SAFETY: Guarantees that a user will NEVER receive duplicate emails
 * within a 2-minute time window for the same action/registration/enquiry.
 */
const recentUserEmails = new Map<string, number>();

export function isDuplicateUserEmail(cacheKey: string, windowMs: number = 120000): boolean {
  const now = Date.now();
  const lastSent = recentUserEmails.get(cacheKey);

  if (lastSent && now - lastSent < windowMs) {
    console.warn(`[SimpleUserMail] Duplicate suppressed for key: ${cacheKey} (sent ${Math.round((now - lastSent) / 1000)}s ago)`);
    return true;
  }

  recentUserEmails.set(cacheKey, now);

  // Auto-clean old entries to prevent memory leaks
  if (recentUserEmails.size > 300) {
    for (const [k, time] of recentUserEmails.entries()) {
      if (now - time > 300000) {
        recentUserEmails.delete(k);
      }
    }
  }

  return false;
}

export interface SimpleUserMessagePayload {
  toEmail: string;
  customerName: string;
  subject: string;
  headline?: string;
  shortMessage: string;
  details?: { label: string; value: string }[];
  actionButtonText?: string;
  actionButtonUrl?: string;
  dedupKey?: string;
  customTransporter?: any;
  fromAddress?: string;
}

/**
 * Generic Clean & Simple User Email Sender
 */
export async function sendSimpleUserEmail(payload: SimpleUserMessagePayload): Promise<{ success: boolean; duplicate?: boolean; error?: any }> {
  const {
    toEmail,
    customerName = "Customer",
    subject,
    headline = "Namaste & Welcome to Organic Mushrooms Farm",
    shortMessage,
    details = [],
    actionButtonText = "Chat on WhatsApp (+91 9203544140)",
    actionButtonUrl = "https://wa.me/919203544140",
    dedupKey,
  } = payload;

  const cleanEmail = toEmail?.trim().toLowerCase();
  if (!cleanEmail || !cleanEmail.includes("@") || cleanEmail.includes("no-reply")) {
    console.warn("[SimpleUserMail] Invalid or no-reply recipient email:", toEmail);
    return { success: false, error: "Invalid email" };
  }

  // Deduplication check
  const finalKey = dedupKey || `simple:${cleanEmail}:${subject.slice(0, 30)}`;
  if (isDuplicateUserEmail(finalKey)) {
    return { success: true, duplicate: true };
  }

  const detailsHtml =
    details.length > 0
      ? `
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; margin: 18px 0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13.5px;">
            ${details
              .map(
                (d) => `
                <tr style="border-bottom: 1px solid #edf2f7;">
                  <td style="padding: 7px 0; color: #64748b; width: 40%; font-weight: 500;">${d.label}:</td>
                  <td style="padding: 7px 0; color: #0f172a; font-weight: 600;">${d.value}</td>
                </tr>
              `
              )
              .join("")}
          </table>
        </div>
      `
      : "";

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #334155;">
        <div style="max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
          
          <!-- Farm Banner -->
          <div style="background: linear-gradient(135deg, #166534, #15803d); padding: 22px 20px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.3px;">Organic Mushrooms Farm</h2>
            <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.9;">Katangi Road, Jabalpur, Madhya Pradesh - 483105</p>
          </div>

          <!-- Body -->
          <div style="padding: 24px 22px; font-size: 14.5px; line-height: 1.6;">
            <p style="margin-top: 0; font-weight: 700; color: #0f172a; font-size: 16px;">
              Hi ${customerName},
            </p>

            <div style="color: #166534; font-weight: 700; font-size: 15.5px; margin: 10px 0 6px 0;">
              🌿 ${headline}
            </div>

            <p style="color: #475569; margin: 0 0 16px 0;">
              ${shortMessage}
            </p>

            ${detailsHtml}

            <!-- Friendly Reassurance -->
            <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 12px 14px; border-radius: 4px; font-size: 13px; color: #166534; margin: 18px 0;">
              ✓ <strong>Aapki request safe hai:</strong> Humare certified trainers details review karke aapse jaldi contact karenge.<br/>
              ✓ Kisi bhi query ke liye direct helpline par WhatsApp ya Call kar sakte hain.
            </div>

            <!-- WhatsApp Action Button -->
            ${
              actionButtonUrl
                ? `
            <div style="text-align: center; margin: 24px 0 16px 0;">
              <a href="${actionButtonUrl}" style="background-color: #16a34a; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 13.5px; display: inline-block;">
                💬 ${actionButtonText}
              </a>
            </div>
            `
                : ""
            }

            <p style="font-size: 12.5px; color: #64748b; margin-top: 22px; line-height: 1.5; border-top: 1px solid #f1f5f9; padding-top: 14px;">
              Direct Farm Helpline: <strong>+91 9203544140</strong><br/>
              Support Email: <strong>support@organicmushroomsfarm.com</strong>
            </p>
          </div>

          <!-- Minimal Footer -->
          <div style="background: #f8fafc; padding: 12px; text-align: center; font-size: 11.5px; color: #94a3b8; border-top: 1px solid #edf2f7;">
            &copy; ${new Date().getFullYear()} Organic Mushrooms Farm • All rights reserved
          </div>

        </div>
      </body>
    </html>
  `;

  try {
    const transporter = payload.customTransporter || getUserTransporter();
    const fromAddress =
      payload.fromAddress ||
      (process.env.EMAIL_USER
        ? `"Organic Mushrooms Farm" <${process.env.EMAIL_USER}>`
        : '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>');

    await transporter.sendMail({
      from: fromAddress,
      replyTo: "support@organicmushroomsfarm.com",
      to: cleanEmail,
      subject: subject,
      html: emailHtml,
    });
    console.log(`[SimpleUserMail] Clean confirmation email dispatched to: ${cleanEmail}`);
    return { success: true };
  } catch (err) {
    console.error("[SimpleUserMail] Error dispatching user email:", err);
    return { success: false, error: err };
  }
}

/**
 * Clean & Simple Training Registration Email for Candidate
 * Replaces the confusing internal admin table with a simple, pleasant confirmation.
 */
export async function sendSimpleRegistrationEmail(options: {
  toEmail: string;
  fullName: string;
  registrationId: string;
  trainingName: string;
  trainingDate?: string;
  trainingMode?: string;
  trainingTime?: string;
  isPaid?: boolean;
  customTransporter?: any;
  fromAddress?: string;
}) {
  const {
    toEmail,
    fullName,
    registrationId,
    trainingName,
    trainingDate = "Upcoming Batch",
    trainingMode = "Online Session",
    trainingTime = "10:00 AM – 4:00 PM IST",
    isPaid = false,
    customTransporter,
    fromAddress,
  } = options;

  const dedupKey = `registration:${toEmail.trim().toLowerCase()}:${registrationId}`;

  return sendSimpleUserEmail({
    toEmail,
    customerName: fullName,
    subject: `Registration Confirmed [${registrationId}] - Organic Mushrooms Farm`,
    headline: "Mushroom Training Registration Successfully Received!",
    shortMessage: `Organic Mushrooms Farm se judne ke liye dhanyawad. Aapka registration successfully record ho gaya hai. Humari agronomy team batch schedule aur WhatsApp group joining link aapse share karegi.`,
    details: [
      { label: "Registration ID", value: registrationId },
      { label: "Training Program", value: trainingName },
      { label: "Training Mode", value: trainingMode },
      { label: "Batch Timing", value: trainingTime },
      { label: "Booking Status", value: isPaid ? "✅ Advance Confirmed (₹500)" : "✅ Confirmed" },
    ],
    actionButtonText: "Join WhatsApp Support (+91 9203544140)",
    actionButtonUrl: `https://wa.me/919203544140?text=${encodeURIComponent(
      `Hi Organic Mushrooms Farm, I have registered for ${trainingName} (Reg ID: ${registrationId}, Name: ${fullName}).`
    )}`,
    dedupKey,
    customTransporter,
    fromAddress,
  });
}

/**
 * Clean & Simple Enquiry Acknowledgment Email for User
 * Replaces lengthy technical replies with a short, polite confirmation.
 */
export async function sendSimpleEnquiryEmail(options: {
  toEmail: string;
  fullName: string;
  serviceType: string;
  customMessage?: string;
}) {
  const { toEmail, fullName, serviceType, customMessage } = options;

  const dedupKey = `enquiry:${toEmail.trim().toLowerCase()}:${serviceType}`;

  const defaultMsg = customMessage || `Organic Mushrooms Farm se judne ke liye dhanyawad. Humne aapki "${serviceType}" enquiry note kar li hai. Humari technical team aapse agle 2 se 4 ghante me WhatsApp / Call par contact karegi.`;

  return sendSimpleUserEmail({
    toEmail,
    customerName: fullName,
    subject: `Enquiry Received (${serviceType}) | Organic Mushrooms Farm`,
    headline: `Aapki Enquiry Humare Paas Pahunch Gayi Hai!`,
    shortMessage: defaultMsg,
    details: [
      { label: "Service Requested", value: serviceType },
      { label: "Status", value: "Under Review by Technical Team" },
      { label: "Expected Response", value: "Within 2-4 business hours" },
    ],
    actionButtonText: "Chat on WhatsApp Helpline",
    actionButtonUrl: `https://wa.me/919203544140?text=${encodeURIComponent(
      `Hi Organic Mushrooms Farm, I have submitted an enquiry for ${serviceType} (Name: ${fullName}).`
    )}`,
    dedupKey,
  });
}
