import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../_utils/firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { transporter, MAIL_FROM, REPLY_TO, getLiquidTemplate } from '../_utils/mailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow GET for Vercel Cron
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const tenMinutesAgo = Date.now() - (10 * 60 * 1000);

    const ordersRef = collection(db, 'orders');
    const q = query(
      ordersRef, 
      where('status', '==', 'PENDING')
    );

    const querySnapshot = await getDocs(q);
    let reminderCount = 0;

    const emailPromises = querySnapshot.docs.map(async (orderDoc) => {
      const data = orderDoc.data();
      
      if (data.reminderSent === false && data.createdAt && data.createdAt <= tenMinutesAgo) {
        if (data.email) {
          const extraHtml = `
            <table class="details-table">
              <tr><td>Order ID:</td><td>${data.orderId}</td></tr>
              <tr><td>Amount Due:</td><td>Rs. ${data.amount || 0}</td></tr>
              <tr><td>Product:</td><td>${data.productType || 'N/A'}</td></tr>
            </table>
            <div style="margin-top: 20px; font-size: 14px; color: #666;">
              Please click the Visit Us button below to return to the website and complete your payment.
            </div>
          `;

          const customerHtml = getLiquidTemplate(
            'Action Required: Payment Pending',
            `Dear ${data.name || 'Customer'},<br/><br/>We noticed you started an order but haven't completed the payment. Don't miss out on securing your spot or product!`,
            data.orderId,
            extraHtml
          );

          await transporter.sendMail({
            from: MAIL_FROM,
            to: data.email,
            replyTo: REPLY_TO,
            subject: `Action Required: Payment Pending for Order ${data.orderId}`,
            html: customerHtml
          });
        }

        // Update document
        await updateDoc(doc(db, 'orders', orderDoc.id), {
          reminderSent: true,
          reminderSentAt: Date.now()
        });

        reminderCount++;
      }
    });

    await Promise.all(emailPromises);

    return res.status(200).json({ success: true, remindersSent: reminderCount });
  } catch (error) {
    console.error('Cron Error:', error);
    return res.status(500).json({ error: 'Failed to run cron job' });
  }
}
