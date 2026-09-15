import { NextRequest, NextResponse } from 'next/server';
import { processPaymentEmail, PaymentNotificationPayload } from '@/lib/paymentMailService';

export async function POST(req: NextRequest) {
  try {
    const payload: PaymentNotificationPayload = await req.json();
    
    if (!payload || !payload.status) {
      return NextResponse.json({ error: 'Missing required status field' }, { status: 400 });
    }

    // Await email processing directly to ensure execution completes in Next.js runtime
    const result = await processPaymentEmail(payload);
    
    return NextResponse.json({ success: true, result });
  } catch (err: any) {
    console.error('[API payment-notification] Error processing notification:', err);
    return NextResponse.json({ error: err.message || 'Internal error' }, { status: 500 });
  }
}

// Backward compatibility export if imported anywhere
export async function handlePaymentNotification(payload: any) {
  return processPaymentEmail(payload);
}
