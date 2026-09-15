import { NextResponse } from 'next/server';
import paypal from '@paypal/checkout-server-sdk';
import client from '@/lib/paypal';
import { sendTrainingEmailService } from '@/lib/trainingMailService';
import { trainingContent } from '@/lib/training-content';

// Trusted server-side plan pricing lookup derived from trainingContent
function resolvePayPalPlan(planIdentifier?: string | null): { price: number; name: string } | null {
  if (!planIdentifier) return null;
  const id = planIdentifier.toLowerCase().trim();

  // Check US online plans
  const usPlan = trainingContent.us.online.find(
    p => p.id.toLowerCase() === id || p.title.toLowerCase() === id
  );
  if (usPlan) return { price: usPlan.price, name: usPlan.title };

  // Common aliases
  if (id === 'basic-us' || id === 'basic' || id === 'hobbyist' || id.includes('basic cultivation') || id === '39') {
    const p = trainingContent.us.online.find(item => item.id === 'basic-us');
    if (p) return { price: p.price, name: p.title };
  }

  if (id === 'advanced-us' || id === 'advanced' || id === 'commercial' || id.includes('commercial farm advisory') || id.includes('advanced commercial') || id === '97') {
    const p = trainingContent.us.online.find(item => item.id === 'advanced-us');
    if (p) return { price: p.price, name: p.title };
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { planId, productId, courseId, type, planName, currency, email, name, phone } = body;

    const requestedPlan = planId || productId || courseId || type || planName;
    const resolvedPlan = resolvePayPalPlan(requestedPlan);

    if (!resolvedPlan) {
      return NextResponse.json(
        { error: 'Invalid or missing plan identifier' },
        { status: 400 }
      );
    }

    // Strictly enforce server-resolved price — ignore any client-supplied amount
    const trustedAmount = resolvedPlan.price;

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          description: resolvedPlan.name,
          amount: {
            currency_code: currency || 'USD',
            value: trustedAmount.toFixed(2),
          },
        },
      ],
    });

    const response = await client.execute(request);

    // Send Payment Initiated Email via trainingMailService
    await sendTrainingEmailService({
      type: 'INITIATED',
      customerEmail: email,
      customerName: name,
      customerPhone: phone,
      amount: trustedAmount.toString(),
      currency: currency || 'USD',
      planTitle: resolvedPlan.name,
      orderId: response.result?.id,
    });

    return NextResponse.json({ id: response.result.id });
  } catch (error: any) {
    console.error('PayPal Order creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
