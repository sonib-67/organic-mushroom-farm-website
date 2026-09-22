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
  baseUrl: string = "https://organicmushroomsfarm.com",
  geoInfo?: {
    language?: "hi" | "en";
    city?: string;
    state?: string;
  }
): Promise<SendResult> {
  const mailer = getMailTransporter();
  const html = renderWelcomeEmailHtml(toEmail, baseUrl, geoInfo);
  const fromAddress =
    process.env.SMTP_FROM ||
    process.env.EMAIL_FROM ||
    DEFAULT_SENDER;

  const isHindi = geoInfo?.language !== "en";
  const subject = isHindi
    ? "🍄 Organic Mushrooms Farm में आपका स्वागत है! 2-डे फार्मिंग डाइजेस्ट सक्रिय"
    : "🍄 Welcome to Organic Mushrooms Farm! Your 2-Day Farming Digest is Active";

  try {
    const info = await mailer.sendMail({
      from: fromAddress,
      to: toEmail,
      subject,
      text: isHindi
        ? `Organic Mushrooms Farm में आपका स्वागत है!\n\n2-डे फार्मिंग डाइजेस्ट सब्सक्राइब करने के लिए धन्यवाद। आपको हर 48 घंटे में उच्च पैदावार वाले देसी नुस्खे, ताज़ा मंडी भाव और ट्रेनिंग अपडेट्स मिलेंगे।\n\nवेबसाइट: ${baseUrl}`
        : `Welcome to Organic Mushrooms Farm!\n\nThank you for subscribing to our 2-Day Farming Digest. You'll receive high-yield cultivation hacks, live Mandi rates, and training updates every 48 hours.\n\nVisit our farm portal: ${baseUrl}`,
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
      city?: string;
      state?: string;
      country?: string;
      language?: "hi" | "en";
      source?: string;
      subscribedAt?: string;
    };
    allSubscribers: Array<{
      email: string;
      city?: string;
      state?: string;
      country?: string;
      language?: "hi" | "en";
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

  // GUARANTEE: Never let the CSV have 0 subscribers! Always ensure newSubscriber is merged!
  const mapByEmail = new Map<string, {
    email: string;
    city?: string;
    state?: string;
    country?: string;
    language?: "hi" | "en";
    source?: string;
    subscribedAt?: string;
  }>();

  for (const s of data.allSubscribers) {
    if (s.email) {
      mapByEmail.set(s.email.toLowerCase(), s);
    }
  }

  // Always ensure current new subscriber is in the map
  if (data.newSubscriber && data.newSubscriber.email) {
    mapByEmail.set(data.newSubscriber.email.toLowerCase(), {
      ...data.newSubscriber,
      subscribedAt: data.newSubscriber.subscribedAt || nowIst
    });
  }

  const finalExportList = Array.from(mapByEmail.values());

  const html = renderAdminSubscriberAlertHtml(
    {
      email: data.newSubscriber.email,
      subscribedAt: data.newSubscriber.subscribedAt || nowIst,
      city: data.newSubscriber.city,
      state: data.newSubscriber.state || "All India",
      country: data.newSubscriber.country || "India",
      language: data.newSubscriber.language || "hi",
      source: data.newSubscriber.source || "Website Stay Updated Form",
      totalSubscribers: finalExportList.length
    },
    baseUrl
  );

  // Generate complete CSV file content with guaranteed non-zero rows
  const csvHeader = "Subscribed Date (IST),Email Address,City,State,Country,Language,Source\n";
  const csvRows = finalExportList
    .map(
      (s) =>
        `"${(s.subscribedAt || nowIst).replace(/"/g, '""')}","${s.email.replace(/"/g, '""')}","${(s.city || "Auto-detected").replace(/"/g, '""')}","${(s.state || "All India").replace(/"/g, '""')}","${(s.country || "India").replace(/"/g, '""')}","${((s.language || "hi") === "hi" ? "HINDI" : "ENGLISH")}","${(s.source || "Website").replace(/"/g, '""')}"`
    )
    .join("\n");
  const csvContent = csvHeader + csvRows;

  const dateFileTag = new Date().toISOString().slice(0, 10);
  const csvFilename = `subscribers_list_${dateFileTag}.csv`;

  try {
    const info = await mailer.sendMail({
      from: fromAddress,
      to: adminRecipients,
      subject: `🎉 New Subscriber Alert: ${data.newSubscriber.email} joined (${data.newSubscriber.city || data.newSubscriber.state || "India"})`,
      text: `New subscriber joined: ${data.newSubscriber.email}\nLocation: ${data.newSubscriber.city || ""}, ${data.newSubscriber.state || ""}\nDate: ${nowIst}\nTotal subscribers: ${finalExportList.length}\nSee attached CSV for complete updated list.`,
      html,
      attachments: [
        {
          filename: csvFilename,
          content: csvContent,
          contentType: "text/csv; charset=utf-8"
        }
      ]
    });

    console.log(`[NewsletterMail] Admin alert dispatched to: ${adminRecipients.join(", ")} with attachment ${csvFilename} (${finalExportList.length} rows)`);
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

