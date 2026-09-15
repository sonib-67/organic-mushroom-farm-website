import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendTrainingEmailService } from '@/lib/trainingMailService';

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get('x-razorpay-signature');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!secret || !signature) {
      return NextResponse.json({ error: 'Missing webhook configuration' }, { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(bodyText)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(bodyText);
    const payment = event.payload?.payment?.entity || {};
    
    // Extract customer details from notes or payload
    const customerEmail = payment.notes?.customerEmail || payment.email || '';
    const customerName = payment.notes?.customerName || payment.notes?.name || 'Mushroom Grower';
    const customerPhone = payment.notes?.customerPhone || payment.contact || '';
    const amount = (payment.amount / 100).toString(); // convert back to rupees (e.g. 299 or 699)
    const currency = payment.currency || 'INR';
    const paymentId = payment.id || '';
    const orderId = payment.order_id || '';

    if (event.event === 'payment.captured' || event.event === 'order.paid') {
      await sendTrainingEmailService({
        type: 'SUCCESS',
        customerEmail,
        customerName,
        customerPhone,
        amount,
        currency,
        paymentId,
        orderId,
      });
    } else if (event.event === 'payment.failed') {
      await sendTrainingEmailService({
        type: 'CANCELLED',
        customerEmail,
        customerName,
        customerPhone,
        amount,
        currency,
        paymentId,
        orderId,
      });
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook processing failed:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
