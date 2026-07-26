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
    await updateDoc(orderRef, { status: 'CANCELLED', updatedAt: Date.now() });

    // Generate PDF
    const pdfBuffer = await generateInvoicePDF(orderData, 'CANCELLED');

    const extraHtml = `
      <table class="details-table">
        <tr><td>Order ID:</td><td>${orderId}</td></tr>
        <tr><td>Customer Name:</td><td>${orderData.name || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. ${orderData.amount || 0}</td></tr>
        <tr><td>Status:</td><td><strong style="color:#d32f2f;">CANCELLED</strong></td></tr>
      </table>
    `;

    const emailHtml = getLiquidTemplate(
      'Payment Cancelled',
      'The payment for the following order was cancelled. Please find the cancelled invoice attached.',
      orderId,
      extraHtml
    );

    const attachments = [{
      filename: `Cancelled_Invoice_${orderId}.pdf`,
      content: pdfBuffer,
      contentType: 'application/pdf'
    }];

    // Email Admin
    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: `Payment Cancelled [${orderId}]`,
      html: emailHtml,
      attachments
    });

    // Email Customer
    if (orderData.email) {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: orderData.email,
        replyTo: REPLY_TO,
        subject: `Payment Cancelled - Order ${orderId}`,
        html: emailHtml,
        attachments
      });
    }

    return res.status(200).json({ success: true, orderId });
  } catch (error) {
    console.error('Payment Cancel Error:', error);
    return res.status(500).json({ error: 'Failed to process cancellation' });
  }
}
