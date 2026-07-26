import type { VercelRequest, VercelResponse } from '@vercel/node';
import { transporter, MAIL_FROM, REPLY_TO, getLiquidTemplate } from './_utils/mailer';
import crypto from 'crypto';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, phone, message, subject } = req.body;
    const ticketId = 'TKT-' + crypto.randomBytes(4).toString('hex').toUpperCase();

    const extraHtml = `
      <table class="details-table">
        <tr><td>Name:</td><td>${name || 'N/A'}</td></tr>
        <tr><td>Email:</td><td>${email || 'N/A'}</td></tr>
        <tr><td>Phone:</td><td>${phone || 'N/A'}</td></tr>
        <tr><td>Subject:</td><td>${subject || 'General Enquiry'}</td></tr>
        <tr><td>Message:</td><td>${message || 'N/A'}</td></tr>
      </table>
    `;

    // 1. Email to Admin
    const adminHtml = getLiquidTemplate(
      'New Enquiry Received',
      'A new enquiry has been submitted on the website.',
      ticketId,
      extraHtml
    );

    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: `New Enquiry [${ticketId}] - ${subject || 'Website'}`,
      html: adminHtml
    });

    // 2. Email to Customer
    if (email) {
      const customerHtml = getLiquidTemplate(
        'Thank You for Your Enquiry',
        `Dear ${name || 'Customer'},<br/><br/>We have received your enquiry and our team will get back to you shortly. Below is a copy of your submitted details for your reference.`,
        ticketId,
        extraHtml
      );

      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        replyTo: REPLY_TO,
        subject: `Enquiry Received - Ticket ${ticketId}`,
        html: customerHtml
      });
    }

    return res.status(200).json({ success: true, ticketId });
  } catch (error) {
    console.error('Enquiry Error:', error);
    return res.status(500).json({ error: 'Failed to submit enquiry' });
  }
}
