import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from './_utils/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { transporter, MAIL_FROM, REPLY_TO, getLiquidTemplate } from './_utils/mailer';
import crypto from 'crypto';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, phone, productType, amount, preferredDate } = req.body;
    const orderId = 'ORD-' + crypto.randomBytes(5).toString('hex').toUpperCase();

    // 1. Save to Firebase
    const orderRef = doc(collection(db, 'orders'), orderId);
    await setDoc(orderRef, {
      orderId,
      name: name || '',
      email: email || '',
      phone: phone || '',
      productType: productType || '',
      amount: amount || 0,
      preferredDate: preferredDate || '',
      status: 'PENDING',
      reminderSent: false,
      createdAt: Date.now()
    });

    // 2. Email Admin
    const extraHtml = `
      <table class="details-table">
        <tr><td>Customer Name:</td><td>${name || 'N/A'}</td></tr>
        <tr><td>Email:</td><td>${email || 'N/A'}</td></tr>
        <tr><td>Phone:</td><td>${phone || 'N/A'}</td></tr>
        <tr><td>Product/Service:</td><td>${productType || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. ${amount || 0}</td></tr>
        <tr><td>Status:</td><td>PENDING</td></tr>
      </table>
    `;

    const adminHtml = getLiquidTemplate(
      'New Payment Initiated (Pending)',
      'A customer has initiated a payment on the website. Status is currently PENDING.',
      orderId,
      extraHtml
    );

    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: `Payment Initiated [${orderId}]`,
      html: adminHtml
    });

    return res.status(200).json({ success: true, orderId });
  } catch (error) {
    console.error('Payment Initiate Error:', error);
    return res.status(500).json({ error: 'Failed to initiate payment simulation' });
  }
}
