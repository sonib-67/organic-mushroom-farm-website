import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { sendTrainingEmail } from '@/lib/email';
import { trainingContent } from '@/lib/training-content';

// Trusted server-side plan pricing lookup derived from trainingContent
function resolveRazorpayPlan(planIdentifier?: string | null): { price: number; name: string } | null {
  if (!planIdentifier) return null;
  const id = planIdentifier.toLowerCase().trim();

  // Check online plans (INR)
  const onlinePlan = trainingContent.in.online.find(
    p => p.id.toLowerCase() === id || p.title.toLowerCase() === id
  );
  if (onlinePlan) return { price: onlinePlan.price, name: onlinePlan.title };

  // Check offline plans (INR)
  const offlinePlan = trainingContent.in.offline.find(
    p => p.id.toLowerCase() === id || p.title.toLowerCase() === id
  );
  if (offlinePlan) return { price: offlinePlan.price, name: offlinePlan.title };

  // Handle common product/plan aliases used across the project
  if (id === 'training_basic' || id === 'basic_training' || id === 'basic-training' || id === 'basic mushroom farming') {
    const p = trainingContent.in.online.find(item => item.id === 'basic');
    if (p) return { price: p.price, name: p.title };
  }

  if (id === 'training_advanced' || id === 'advanced_training' || id === 'advanced-training' || id === 'commercial' || id === 'advanced commercial cultivation') {
    const p = trainingContent.in.online.find(item => item.id === 'advanced');
    if (p) return { price: p.price, name: p.title };
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { planId, productId, courseId, type, email, name, phone, currency } = body;

    // Resolve plan identifier sent by the client
    const requestedPlan = planId || productId || courseId || type;
    const resolvedPlan = resolveRazorpayPlan(requestedPlan);

    if (!resolvedPlan) {
      return NextResponse.json(
        { error: 'Invalid or missing plan/product identifier' },
        { status: 400 }
      );
    }

    // Strictly enforce server-resolved price — ignore any client-supplied amount
    const trustedAmount = resolvedPlan.price;

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { error: 'Razorpay credentials missing on server' },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: Math.round(trustedAmount * 100), // convert to paise
      currency: currency || 'INR',
      receipt: `rcpt_${Date.now()}`,
      notes: {
        planName: resolvedPlan.name,
        customerName: name || '',
        customerEmail: email || '',
        customerPhone: phone || '',
      }
    };

    const order = await razorpay.orders.create(options);

    // Send Payment Initiated Email
    await sendTrainingEmail({
      type: 'INITIATED',
      customerEmail: email,
      customerName: name,
      amount: trustedAmount.toString(),
      currency: currency || 'INR',
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
