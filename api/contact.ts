import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, phone, subject, message, service } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
      to: "organicmushroomsfarms@gmail.com",
      subject: `New Enquiry: ${subject || "Website Contact Form"}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Service/Product:</strong> ${service || "N/A"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    const userMailOptions = {
      from: `"Organic Mushroom Farm" <${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>`,
      replyTo: 'no-reply@organicmushroomsfarm.com',
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f6;
          margin: 0;
          padding: 20px;
        }
        .glass-container {
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(255, 167, 38, 0.15) 0%, rgba(156, 39, 176, 0.15) 50%, rgba(76, 175, 80, 0.15) 100%);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        .header h1 {
          background: -webkit-linear-gradient(45deg, #FF9800, #9C27B0, #4CAF50);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          margin-top: 0;
          font-size: 26px;
        }
        .content {
          color: #333;
          line-height: 1.6;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 15px;
          padding: 20px;
          box-shadow: inset 0 0 10px rgba(255,255,255,0.7), 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        .footer {
          text-align: center;
          font-size: 13px;
          color: #666;
          margin-top: 25px;
        }
        @media only screen and (max-width: 600px) {
          body { padding: 10px; }
          .glass-container { padding: 20px; }
        }
      </style>
      </head>
      <body>
        <div class="glass-container">
          <div class="header">
            <h1>Organic Mushroom Farm</h1>
          </div>
          <div class="content">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out to us! We have received your message regarding <strong>${subject || 'your enquiry'}</strong>.</p>
            <p>Our team is reviewing it and will get back to you as soon as possible.</p>
            <p style="margin-top: 25px;">Warm regards,<br/><strong>The Organic Mushroom Farm Team</strong></p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({ error: "Failed to send message." });
  }
}
