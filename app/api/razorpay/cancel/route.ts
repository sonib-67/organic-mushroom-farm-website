import { NextResponse } from 'next/server';
import { sendTrainingEmailService } from '@/lib/trainingMailService';

export async function POST(req: Request) {
  try {
    const { amount, currency, email, name, phone, orderId } = await req.json();

    // Send Payment Cancelled Email explicitly when user closes the modal (Admin + Customer)
    await sendTrainingEmailService({
      type: 'CANCELLED',
      customerEmail: email,
      customerName: name,
      customerPhone: phone,
      amount: amount ? amount.toString() : "299",
      currency: currency || "INR",
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
