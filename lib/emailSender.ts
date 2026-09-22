import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { DigestContent } from "./geminiDigestGenerator";
import {
  renderRedditStyleDigestHtml,
  renderWelcomeEmailHtml,
  renderAdminSubscriberAlertHtml
} from "./emailTemplate";
import {
  getMailTransporter,
  getEnquiryAdminRecipients
} from "./enquiryMailService";

export interface SendResult {
  email: string;
  success: boolean;
  messageId?: string;
  error?: string;
  simulated?: boolean;
}

const DEFAULT_SENDER = `"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>`;

/**
 * Sends a welcome confirmation email to the subscriber right upon subscribing
 * Uses the exact same Nodemailer transporter as /enquiry
 */
export async function sendWelcomeEmailToSubscriber(
  toEmail: string,
  baseUrl: string = "https://organicmushroomsfarm.com"
): Promise<SendResult> {
  const mailer = getMailTransporter();
  const html = renderWelcomeEmailHtml(toEmail, baseUrl);
  const fromAddress =
    process.env.SMTP_FROM ||
    process.env.EMAIL_FROM ||
    DEFAULT_SENDER;

  try {
    const info = await mailer.sendMail({
      from: fromAddress,
      to: toEmail,
      subject: "🍄 Welcome to Organic Mushrooms Farm! Your 2-Day Farming Digest is Active",
      text: `Welcome to Organic Mushrooms Farm!\n\nThank you for subscribing to our 2-Day Farming Digest. You'll receive high-yield cultivation hacks, live Mandi rates, and training updates every 48 hours.\n\nVisit our farm portal: ${baseUrl}`,
      html
    });

    console.log(`[NewsletterMail] Welcome email sent successfully to ${toEmail}. MessageId: ${info.messageId}`);
    return {
      email: toEmail,
      success: true,
      messageId: info.messageId
    };
  } catch (err: any) {
    console.error(`[NewsletterMail] Error sending welcome email to ${toEmail}:`, err);
    return {
      email: toEmail,
      success: false,
      error: err.message || "Failed to send welcome email"
    };
  }
}

/**
 * Sends an instant notification email to Admin (organicmushroomsfarms@gmail.com, etc.)
 * with the latest subscriber list attached as a CSV file.
 * Uses the exact same Nodemailer transporter and recipients as /enquiry
 */
export async function sendAdminNewSubscriberAlert(
  data: {
    newSubscriber: {
      email: string;
      state?: string;
      source?: string;
      subscribedAt?: string;
    };
    allSubscribers: Array<{
      email: string;
      state?: string;
      source?: string;
      subscribedAt?: string;
    }>;
  },
  baseUrl: string = "https://organicmushroomsfarm.com"
): Promise<SendResult> {
  const mailer = getMailTransporter();
  const adminRecipients = getEnquiryAdminRecipients();
  const fromAddress =
    process.env.SMTP_FROM ||
    process.env.EMAIL_FROM ||
    `"Organic Mushrooms Farm Notifications" <organicmushroomsfarms@gmail.com>`;

  const nowIst = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const html = renderAdminSubscriberAlertHtml(
    {
      email: data.newSubscriber.email,
      subscribedAt: data.newSubscriber.subscribedAt || nowIst,
      state: data.newSubscriber.state || "All India",
      source: data.newSubscriber.source || "Website Stay Updated Form",
      totalSubscribers: data.allSubscribers.length
    },
    baseUrl
  );

  // Generate complete CSV file content with all subscribers
  const csvHeader = "Subscribed Date (IST),Email Address,State,Source\n";
  const csvRows = data.allSubscribers
    .map(
      (s) =>
        `"${(s.subscribedAt || "").replace(/"/g, '""')}","${s.email.replace(/"/g, '""')}","${(s.state || "All India").replace(/"/g, '""')}","${(s.source || "Website").replace(/"/g, '""')}"`
    )
    .join("\n");
  const csvContent = csvHeader + csvRows;

  const dateFileTag = new Date().toISOString().slice(0, 10);
  const csvFilename = `subscribers_list_${dateFileTag}.csv`;

  try {
    const info = await mailer.sendMail({
      from: fromAddress,
      to: adminRecipients,
      subject: `🎉 New Subscriber Alert: ${data.newSubscriber.email} joined Organic Mushrooms Farm`,
      text: `New subscriber joined: ${data.newSubscriber.email}\nDate: ${nowIst}\nTotal subscribers: ${data.allSubscribers.length}\nSee attached CSV for updated list.`,
      html,
      attachments: [
        {
          filename: csvFilename,
          content: csvContent,
          contentType: "text/csv; charset=utf-8"
        }
      ]
    });

    console.log(`[NewsletterMail] Admin alert dispatched to: ${adminRecipients.join(", ")} with attachment ${csvFilename}`);
    return {
      email: adminRecipients[0] || "admin",
      success: true,
      messageId: info.messageId
    };
  } catch (err: any) {
    console.error(`[NewsletterMail] Error sending admin alert to ${adminRecipients.join(", ")}:`, err);
    return {
      email: adminRecipients[0] || "admin",
      success: false,
      error: err.message || "Failed to send admin alert"
    };
  }
}

/**
 * Sends a single digest email using Nodemailer
 */
export async function sendSingleDigestEmail(
  toEmail: string,
  content: DigestContent,
  baseUrl: string = "https://organicmushroomsfarm.com"
): Promise<SendResult> {
  const mailer = getMailTransporter();
  const html = renderRedditStyleDigestHtml(content, toEmail, baseUrl);
  const fromAddress =
    process.env.SMTP_FROM ||
    process.env.EMAIL_FROM ||
    DEFAULT_SENDER;

  try {
    const info = await mailer.sendMail({
      from: fromAddress,
      to: toEmail,
      subject: content.subject,
      text: `${content.topicTitle}\n\n${content.tagline}\n\n${content.keyTakeaways.join("\n")}\n\nपूरी जानकारी वेबसाइट पर देखें: ${baseUrl}/blog`,
      html
    });

    return {
      email: toEmail,
      success: true,
      messageId: info.messageId
    };
  } catch (err: any) {
    console.error(`[NewsletterMail] Error sending digest to ${toEmail}:`, err);
    return {
      email: toEmail,
      success: false,
      error: err.message || "Failed to send email"
    };
  }
}

/**
 * Sends batch emails with rate-limiting delay between recipients
 */
export async function sendBatchDigestEmails(
  subscribers: Array<{ email: string }>,
  content: DigestContent,
  baseUrl: string = "https://organicmushroomsfarm.com"
): Promise<SendResult[]> {
  const results: SendResult[] = [];

  for (let i = 0; i < subscribers.length; i++) {
    const sub = subscribers[i];
    const res = await sendSingleDigestEmail(sub.email, content, baseUrl);
    results.push(res);

    // Rate limiting: 100ms pause between emails to protect sender reputation
    if (i < subscribers.length - 1) {
      await new Promise((r) => setTimeout(r, 100));
    }
  }

  return results;
}

