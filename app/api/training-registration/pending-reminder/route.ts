import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  getPendingRegistrationsForReminder,
  markReminderSent,
  getRegistrationRecord,
  generateRegistrationToken
} from '@/lib/training-security';

export async function GET(req: NextRequest) {
  return processPendingReminders();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    if (body.paymentId && body.scheduleTimer) {
      // Schedule background check for this specific payment in 5 minutes (300,000 ms)
      const paymentId = body.paymentId;
      console.log(`[5-MIN REMINDER] Scheduled timer for payment ${paymentId}`);
      
      setTimeout(async () => {
        try {
          const record = await getRegistrationRecord(paymentId);
          if (record && record.status === 'PENDING_REGISTRATION' && !record.reminderSent) {
            console.log(`[5-MIN REMINDER] Triggering reminder for ${paymentId} (${record.customerEmail})`);
            await sendSingleReminder(record);
          }
        } catch (timerErr) {
          console.error(`[5-MIN REMINDER ERROR] for ${paymentId}:`, timerErr);
        }
      }, 5 * 60 * 1000); // 5 minutes

      return NextResponse.json({ success: true, scheduled: true, paymentId });
    }

    return processPendingReminders();
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

async function sendSingleReminder(record: any) {
  if (!record.customerEmail) return;

  const user =
    process.env.EMAIL_USER ||
    process.env.SMTP_EMAIL ||
    "organicmushroomsfarms@gmail.com";
  const pass =
    process.env.EMAIL_PASS ||
    process.env.SMTP_PASSWORD ||
    "jzqqntulcifrfyul";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://organicmushroomsfarm.com";
  const token = record.registrationToken || generateRegistrationToken({
    paymentId: record.paymentId,
    amount: record.amount,
    plan: record.plan,
    email: record.customerEmail,
    phone: record.customerPhone,
    name: record.customerName
  });

  const registerUrl = `${baseUrl}/training/register?token=${token}&id=${record.paymentId}&type=${record.plan}&name=${encodeURIComponent(record.customerName || '')}&email=${encodeURIComponent(record.customerEmail || '')}&phone=${encodeURIComponent(record.customerPhone || '')}`;

  const mailOptions = {
    from: `"Organic Mushroom Farm" <${user}>`,
    replyTo: "support@organicmushroomsfarm.com",
    to: record.customerEmail,
    subject: `Action Required: Complete Your Mushroom Training Registration 🍄`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; color: #1e293b;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="color: #16a34a; margin: 0 0 8px 0; font-size: 24px;">Complete Your Registration</h2>
          <p style="color: #64748b; margin: 0; font-size: 14px;">Organic Mushroom Cultivation Training</p>
        </div>

        <p style="font-size: 15px; line-height: 1.6;">Hello <strong>${record.customerName || 'Valued Learner'}</strong>,</p>

        <p style="font-size: 15px; line-height: 1.6;">We noticed that you have successfully paid <strong>₹${record.amount}</strong> for the <strong>${record.planName}</strong> (Payment ID: <code>${record.paymentId}</code>), but your registration form has not been submitted yet.</p>

        <p style="font-size: 15px; line-height: 1.6;">To assign your batch, schedule your live training, and add you to the exclusive farmer WhatsApp support group, please click the button below to complete your registration:</p>

        <div style="text-align: center; margin: 32px 0;">
          <a href="${registerUrl}" style="background-color: #16a34a; color: #ffffff; padding: 14px 28px; font-weight: 600; text-decoration: none; border-radius: 8px; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(22, 163, 74, 0.3);">
            👉 Complete Registration Now
          </a>
        </div>

        <p style="font-size: 13px; color: #64748b; line-height: 1.5;">Or copy and paste this secure link in your browser:<br/>
        <a href="${registerUrl}" style="color: #2563eb; word-break: break-all;">${registerUrl}</a></p>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

        <p style="font-size: 13px; color: #64748b; margin: 0;">If you need any help, reply to this email or chat with our team on WhatsApp: <strong>+91 9203544140</strong>.</p>
        <p style="font-size: 13px; color: #64748b; margin-top: 8px;">Organic Mushroom Farm Team</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
  await markReminderSent(record.paymentId);
  console.log(`[5-MIN REMINDER] Sent successfully to ${record.customerEmail} for payment ${record.paymentId}`);
}

async function processPendingReminders() {
  try {
    const pendingList = await getPendingRegistrationsForReminder(5 * 60 * 1000);
    let sentCount = 0;

    for (const record of pendingList) {
      try {
        await sendSingleReminder(record);
        sentCount++;
      } catch (e) {
        console.error(`Error sending reminder to ${record.customerEmail}:`, e);
      }
    }

    return NextResponse.json({
      success: true,
      pendingCount: pendingList.length,
      sentCount
    });
  } catch (error: any) {
    console.error("Pending reminders check failed:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
