import type { VercelRequest, VercelResponse } from '@vercel/node';
import { transporter, MAIL_FROM, REPLY_TO } from '../lib/email-transporter';
import { getLiquidTemplate } from '../lib/email-templates';
import { db } from '../lib/firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    let body = req.body || {};
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }
    }
    const { name, email, phone, location, farmSize, budget, message, _subject } = body;
    
    // Generate a Unique Ticket ID
    const ticketId = `TKT-${Math.random().toString(36).substr(2, 6).toUpperCase()}-${Date.now().toString().slice(-4)}`;

    // 1. Save to Firebase DB first as persistent record
    try {
      await addDoc(collection(db, 'enquiries'), {
        ticketId,
        name: name || 'N/A',
        email: email || 'N/A',
        phone: phone || 'N/A',
        location: location || 'N/A',
        farmSize: farmSize || 'N/A',
        budget: budget || 'N/A',
        message: message || 'N/A',
        subject: _subject || 'Enquiry',
        created_at: new Date().toISOString()
      });
    } catch (dbErr) {
      console.error('Firebase save error in send-enquiry:', dbErr);
    }

    const extraHtml = `
      <table>
        <tr><td>Name:</td><td>${name || 'N/A'}</td></tr>
        <tr><td>Email:</td><td>${email || 'N/A'}</td></tr>
        <tr><td>Phone:</td><td>${phone || 'N/A'}</td></tr>
        <tr><td>Location:</td><td>${location || 'N/A'}</td></tr>
        <tr><td>Farm Size:</td><td>${farmSize || 'N/A'}</td></tr>
        <tr><td>Budget:</td><td>${budget || 'N/A'}</td></tr>
        <tr><td>Message:</td><td>${message || 'N/A'}</td></tr>
      </table>
    `;

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com';
    
    // Send Email to Admin & Customer with graceful catch
    try {
      console.log("[send-enquiry] Diagnostics:");
      console.log(`EMAIL_USER present: ${!!process.env.EMAIL_USER}`);
      console.log(`EMAIL_PASS present: ${!!process.env.EMAIL_PASS}`);
      console.log(`SMTP_HOST: ${process.env.SMTP_HOST || 'smtp.gmail.com (default)'}`);
      console.log(`SMTP_PORT: ${process.env.SMTP_PORT || '465 (default)'}`);
      console.log(`secure: ${process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) === 465 : true}`);

      console.log("[send-enquiry] Verifying transporter...");
      await transporter.verify();
      console.log("[send-enquiry] Transporter verified successfully.");

      const adminSubject = _subject || `New Enquiry from ${name || 'User'}`;
      const adminHtml = getLiquidTemplate(
        'New Enquiry Received',
        'A new consultation request has been submitted. Here are the details:',
        ticketId,
        extraHtml
      );

      if (adminEmail) {
        console.log("[send-enquiry] Sending admin email...");
        await transporter.sendMail({
          from: MAIL_FROM,
          to: adminEmail,
          replyTo: email || REPLY_TO,
          subject: adminSubject,
          html: adminHtml,
        });
        console.log("[send-enquiry] Admin email sent.");
      }

      if (email && email.includes('@')) {
        const customerHtml = getLiquidTemplate(
          'Thank You for Your Enquiry',
          `Hi ${name || 'Customer'},<br/><br/>Thank you for reaching out to Organic Mushroom Farm. We have received your consultation request and our experts will get back to you shortly.`,
          ticketId,
          ''
        );

        console.log("[send-enquiry] Sending customer email...");
        await transporter.sendMail({
          from: MAIL_FROM,
          to: email,
          replyTo: REPLY_TO,
          subject: `Your Enquiry is Received - ${ticketId}`,
          html: customerHtml,
        });
        console.log("[send-enquiry] Customer email sent.");
      }
    } catch (emailErr) {
      console.error('[send-enquiry] Error sending email:', emailErr);
      return res.status(500).json({ success: false, error: String(emailErr) });
    }

    return res.status(200).json({ success: true, ticketId });
  } catch (error) {
    console.error('Error in send-enquiry:', error);
    return res.status(500).json({ success: false, error: String(error) });
  }
}

