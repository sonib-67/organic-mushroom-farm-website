import { NextResponse } from 'next/server';
import { sendTrainingEmailService } from '@/lib/trainingMailService';

export async function POST(req: Request) {
  try {
    const { amount, currency, email, name, phone, orderId } = await req.json();

    await sendTrainingEmailService({
      type: 'CANCELLED',
      customerEmail: email,
      customerName: name,
      customerPhone: phone,
      amount: amount ? amount.toString() : "39",
      currency: currency || 'USD',
      orderId: orderId,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Cancel email failed:', error);
    return NextResponse.json(
      { error: 'Failed to send cancel notification' },
      { status: 500 }
    );
  }
}
