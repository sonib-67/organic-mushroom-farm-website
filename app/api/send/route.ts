export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, email, orderId, amount, productType, status } = body;

    let subject = 'Update from Organic Mushroom Farm';

    if (productType === 'training') {
      subject = status === 'done' 
        ? 'Order Confirmed: Mushroom Training Enrollment' 
        : 'Transaction Unsuccessful: Training Failed';
    } else if (productType.includes('consultant') || productType.includes('consultation')) {
      subject = status === 'done' 
        ? 'Confirmation: Consultation Session Booked' 
        : 'Booking Failed: Consultation Declined';
    } else if (productType.includes('spawn')) {
      subject = status === 'done' 
        ? 'Order Verified: Spawn Material Dispatched' 
        : 'Order Voided: Spawn Unsuccessful';
    } else if (productType.includes('mushroom')) {
      subject = status === 'done' 
        ? 'Order Confirmed: Organic Produce Secured' 
        : 'Transaction Refused: Produce Cancelled';
    }

    const data = await resend.emails.send({
      from: 'training@mushroomtraining.online',
      to: [email],
      subject,
      react: EmailTemplate({
        customerName,
        orderId,
        amount,
        productType,
        status
      }) as React.ReactElement,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
