import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { userEmail, userRequest } = req.body;

    if (!userEmail || !userRequest) {
      return res.status(400).json({ success: false, message: 'userEmail and userRequest are required' });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const systemPrompt = `
You are an expert AI assistant for an online Mushroom Farming Training website. Your job is to help users and automatically draft professional emails based on their requests (like course registration, payment confirmation, or query replies).

When the user asks to send an email or when a specific trigger happens, you must ALWAYS generate the output in a strict JSON format so the backend server can read it and send it via Nodemailer. Do not include any conversational text outside the JSON block if an email needs to be sent.

JSON Format to follow:
{
  "emailSubject": "Clear and professional subject line",
  "emailBodyHTML": "<p>Professional email content in HTML format. Use proper tags like <br>, <b>, etc.</p>"
}

Context for your website:
- Website Name: Organic Mushroom Farm (organicmushroomfarm.shop)
- Main Product: Online Mushroom Farming Masterclass
- Price: ₹299
- Key Varieties Taught: Button, Milky, and Lion's Mane mushrooms.
- Webinar Timing: Daily Simulated Live training at 4:00 PM IST.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${systemPrompt}\n\nGenerate an email for this request: "${userRequest}". Respond ONLY with the strict JSON format specified in system instructions.`,
    });

    let aiResponseText = response.text || "";
    // Clean up potential markdown formatting from the response
    aiResponseText = aiResponseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    let emailData;
    try {
      emailData = JSON.parse(aiResponseText);
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", aiResponseText);
      return res.status(500).json({ success: false, message: "AI response was not valid JSON" });
    }

    // Nodemailer configuration
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER || "training@mushroomtraining.online";
    const pass = process.env.SMTP_PASS || "Sonib491@.";

    let transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: { user, pass },
    });

    let mailOptions = {
      from: `"Organic Mushroom Farm" <${user}>`,
      to: userEmail,
      subject: emailData.emailSubject,
      html: emailData.emailBodyHTML,
    };

    let info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "AI Generated Email Sent Successfully!",
      messageId: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error("Error in AI Email System:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
