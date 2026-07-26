import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db } from '../lib/firebase-config';
import { collection, doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { transporter, MAIL_FROM, REPLY_TO } from '../lib/email-transporter';
import { getLiquidTemplate } from '../lib/email-templates';

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
    const { action, orderId, name, email, amount, productType, base64Pdf } = body;
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    if (action === 'INITIATE') {
      // Create Pending Order in Firebase
      const orderRef = doc(collection(db, 'orders'), orderId);
      await setDoc(orderRef, {
        orderId,
        name: name || 'Customer',
        email: email || '',
        amount,
        productType,
        status: 'PENDING',
        createdAt: Date.now(),
        reminderSent: false
      });

      // Notify Admin of Payment Initiation
      if (adminEmail) {
        try {
          const adminHtml = getLiquidTemplate(
            'Payment Initiated',
            `A customer has initiated a payment process. Status is currently PENDING.`,
            orderId,
            `
              <table>
                <tr><td>Customer Name:</td><td>${name}</td></tr>
                <tr><td>Customer Email:</td><td>${email}</td></tr>
                <tr><td>Amount:</td><td>Rs. ${amount}</td></tr>
                <tr><td>Product:</td><td>${productType}</td></tr>
              </table>
            `
          );
          await transporter.sendMail({
            from: MAIL_FROM,
            to: adminEmail,
            subject: `Payment Initiated - ${orderId}`,
            html: adminHtml
          });
        } catch (e) {
          console.warn('Initiate email failed (order saved to Firestore):', e);
        }
      }

      // Schedule 10-minute repayment reminder check
      setTimeout(async () => {
        try {
          const docRef = doc(collection(db, 'orders'), orderId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.status === 'PENDING' && !data.reminderSent && data.email && data.email.includes('@')) {
              const extraHtml = `
                <table>
                  <tr><td>Order ID:</td><td>${data.orderId}</td></tr>
                  <tr><td>Amount Due:</td><td>Rs. ${data.amount || 0}</td></tr>
                  <tr><td>Product:</td><td>${data.productType || 'N/A'}</td></tr>
                </table>
                <div style="margin-top: 20px; font-size: 14px; text-align: center;">
                  <a href="https://organicmushroomsfarms.com/training-checkout" style="background-color: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Complete Payment Now</a>
                </div>
              `;
              const customerHtml = getLiquidTemplate(
                'Complete Your Payment - Organic Mushroom Farm',
                `Dear ${data.name || 'Customer'},<br/><br/>We noticed you started your payment for <strong>${data.productType}</strong> but haven't completed it. You can complete your order now using the link below:`,
                data.orderId,
                extraHtml
              );
              await transporter.sendMail({
                from: MAIL_FROM,
                to: data.email,
                replyTo: REPLY_TO,
                subject: `Complete Your Order - ${data.productType}`,
                html: customerHtml
              });
              await updateDoc(docRef, { reminderSent: true, reminderSentAt: Date.now() });
            }
          }
        } catch (err) {
          console.warn('10-min reminder error:', err);
        }
      }, 10 * 60 * 1000);

      return res.status(200).json({ success: true, message: 'Order initiated' });
    } 
    
    else if (action === 'SUCCESS') {
      // Update Firebase
      const orderRef = doc(collection(db, 'orders'), orderId);
      await updateDoc(orderRef, {
        status: 'SUCCESS',
        completedAt: Date.now()
      });

      const extraHtml = `
        <table>
          <tr><td>Customer Name:</td><td>${name}</td></tr>
          <tr><td>Amount Paid:</td><td>Rs. ${amount}</td></tr>
          <tr><td>Product:</td><td>${productType}</td></tr>
          <tr><td>Status:</td><td><strong style="color: green;">SUCCESS</strong></td></tr>
        </table>
      `;

      const attachments = base64Pdf ? [{
        filename: `Invoice-${orderId}.pdf`,
        content: base64Pdf.split('base64,').pop() || base64Pdf,
        encoding: 'base64'
      }] : [];

      // Email Admin & Customer
      try {
        if (adminEmail) {
          await transporter.sendMail({
            from: MAIL_FROM,
            to: adminEmail,
            subject: `Payment Success - ${orderId}`,
            html: getLiquidTemplate('Payment Received Successfully', 'A payment has been successfully captured.', orderId, extraHtml),
            attachments
          });
        }

        if (email && email.includes('@')) {
          await transporter.sendMail({
            from: MAIL_FROM,
            to: email,
            replyTo: REPLY_TO,
            subject: `Payment Receipt - ${orderId}`,
            html: getLiquidTemplate('Thank You for Your Payment', `Hi ${name},<br/><br/>Your payment was successful. Please find your receipt attached.`, orderId, extraHtml),
            attachments
          });
        }
      } catch (e) {
        console.warn('Success email failed (Firestore updated):', e);
      }

      return res.status(200).json({ success: true });
    }

    else if (action === 'CANCELLED') {
      // Update Firebase
      const orderRef = doc(collection(db, 'orders'), orderId);
      await updateDoc(orderRef, {
        status: 'CANCELLED',
        cancelledAt: Date.now()
      });

      const extraHtml = `
        <table>
          <tr><td>Customer Name:</td><td>${name}</td></tr>
          <tr><td>Amount:</td><td>Rs. ${amount}</td></tr>
          <tr><td>Product:</td><td>${productType}</td></tr>
          <tr><td>Status:</td><td><strong style="color: red;">CANCELLED</strong></td></tr>
        </table>
      `;

      const attachments = base64Pdf ? [{
        filename: `Cancellation-${orderId}.pdf`,
        content: base64Pdf.split('base64,').pop() || base64Pdf,
        encoding: 'base64'
      }] : [];

      // Email Admin & Customer
      try {
        if (adminEmail) {
          await transporter.sendMail({
            from: MAIL_FROM,
            to: adminEmail,
            subject: `Payment Cancelled - ${orderId}`,
            html: getLiquidTemplate('Payment Cancelled', 'A customer has cancelled their payment.', orderId, extraHtml),
            attachments
          });
        }

        if (email && email.includes('@')) {
          await transporter.sendMail({
            from: MAIL_FROM,
            to: email,
            replyTo: REPLY_TO,
            subject: `Payment Cancelled - ${orderId}`,
            html: getLiquidTemplate('Payment Cancelled', `Hi ${name},<br/><br/>Your payment process was cancelled. If you need any help, please contact us.`, orderId, extraHtml),
            attachments
          });
        }
      } catch (e) {
        console.warn('Cancelled email failed (Firestore updated):', e);
      }

      return res.status(200).json({ success: true });
    }

    return res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    console.error('Error in simulate-payment:', error);
    return res.status(500).json({ error: 'Failed to process simulated payment' });
  }
}
