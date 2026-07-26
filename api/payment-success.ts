import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from './_utils/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { transporter, MAIL_FROM, REPLY_TO, getLiquidTemplate } from './_utils/mailer';
import { generateInvoicePDF } from './_utils/pdf';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { orderId } = req.body;
    if (!orderId) return res.status(400).json({ error: 'orderId is required' });

    const orderRef = doc(db, 'orders', orderId);
    const orderSnap = await getDoc(orderRef);

    if (!orderSnap.exists()) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const orderData = orderSnap.data();

    // Update status
    await updateDoc(orderRef, { status: 'SUCCESS', updatedAt: Date.now() });

    // Generate PDF
    const pdfBuffer = await generateInvoicePDF(orderData, 'SUCCESS');

    const extraHtml = `
      <table class="details-table">
        <tr><td>Order ID:</td><td>${orderId}</td></tr>
        <tr><td>Customer Name:</td><td>${orderData.name || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. ${orderData.amount || 0}</td></tr>
        <tr><td>Status:</td><td><strong style="color:#2e7d32;">SUCCESS</strong></td></tr>
      </table>
    `;

    const adminHtml = getLiquidTemplate(
      'Payment Successful',
      'A payment has been successfully received. Please find the tax invoice attached.',
      orderId,
      extraHtml
    );

    const customerHtml = getLiquidTemplate(
      'Payment Successful - Thank You',
      `Dear ${orderData.name || 'Customer'},<br/><br/>Your payment has been successfully processed. Please find your official tax invoice attached to this email.`,
      orderId,
      extraHtml
    );

    const attachments = [{
      filename: `Tax_Invoice_${orderId}.pdf`,
      content: pdfBuffer,
      contentType: 'application/pdf'
    }];

    // Email Admin
    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: `Payment Success [${orderId}]`,
      html: adminHtml,
      attachments
    });

    // Email Customer
    if (orderData.email) {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: orderData.email,
        replyTo: REPLY_TO,
        subject: `Payment Receipt & Invoice - Order ${orderId}`,
        html: customerHtml,
        attachments
      });
    }

    return res.status(200).json({ success: true, orderId });
  } catch (error) {
    console.error('Payment Success Error:', error);
    return res.status(500).json({ error: 'Failed to process successful payment' });
  }
}
