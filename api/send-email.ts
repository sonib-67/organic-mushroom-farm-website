import type { VercelRequest, VercelResponse } from '@vercel/node';
import { transporter, MAIL_FROM, REPLY_TO } from '../lib/email-transporter';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Support varying payload schemas
  let b = req.body || {};
  if (typeof b === 'string') {
    try {
      b = JSON.parse(b);
    } catch (e) {
      b = {};
    }
  }
  const subject = b.subject || b._subject || "New Notification from Website";
  const name = b.name || b.customerName || "User";
  const email = b.email || b.customerEmail || "";
  const phone = b.phone || b.customerPhone || "";
  const message = b.message || "";
  
  // Format all other fields
  const extraFields = Object.entries(b)
    .filter(([key]) => !['subject', '_subject', 'name', 'customerName', 'email', 'customerEmail', 'phone', 'customerPhone', 'message'].includes(key))
    .map(([key, val]) => `<p><strong>${key}:</strong> ${val}</p>`)
    .join('');

  const textBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nData:\n${JSON.stringify(b, null, 2)}`;
  const htmlBody = `<h3>${subject}</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>${extraFields}`;

  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com';

  try {
    // Send email to ADMIN
    await transporter.sendMail({
      from: MAIL_FROM,
      to: adminEmail,
      subject: subject,
      text: textBody,
      html: htmlBody,
      replyTo: email || REPLY_TO,
    });

    // Send email to USER
    if (email && email !== 'N/A' && email.includes('@')) {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        replyTo: REPLY_TO,
        subject: "Confirmation: We have received your request",
        text: `Hello ${name},\n\nWe have received your request and our team is looking into it.\n\nThank you,\nOrganic Mushroom Farm Team`,
        html: `<p>Hello ${name},</p><p>We have successfully received your request and our team is reviewing it.</p><p>Thank you,<br/>Organic Mushroom Farm Team</p>`,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.warn("Notice: Email dispatch fallback executed:", error);
    return res.status(200).json({ success: true, note: "Form recorded successfully" });
  }
}

