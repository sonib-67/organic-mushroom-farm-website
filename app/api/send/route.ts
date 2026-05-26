import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, email, orderId, amount, productType, status } = body;

    if (!customerName || !email || !orderId || !amount || !productType || !status) {
      return Response.json(
        { error: 'Missing required request body fields (customerName, email, orderId, amount, productType, status).' },
        { status: 400 }
      );
    }

    const type = productType.toLowerCase();
    const isDone = status.toLowerCase() === 'done';

    // Map subject line based on productType + status as specified by rules
    let subject = 'Order Update: Organic Mushroom Farm';

    if (type === 'training') {
      subject = isDone
        ? 'Order Confirmed: Mushroom Training Enrollment'
        : 'Transaction Unsuccessful: Training Failed';
    } else if (type === 'consultant' || type === 'consultation') {
      subject = isDone
        ? 'Confirmation: Consultation Session Booked'
        : 'Booking Failed: Consultation Declined';
    } else if (type === 'spawn_button' || type === 'spawn_oyster' || type === 'spawn_milky') {
      if (isDone) {
        subject = 'Order Verified: Spawn Material Dispatched';
      } else {
        subject = 'Order Voided: Spawn Unsuccessful';
      }
    } else if (type === 'spawn' && !isDone) {
      subject = 'Order Voided: Spawn Unsuccessful';
    } else if (type === 'dry_mushroom' || type === 'fresh_mushroom') {
      if (isDone) {
        subject = 'Order Confirmed: Organic Produce Secured';
      } else {
        subject = 'Transaction Refused: Produce Cancelled';
      }
    } else if (type === 'mushroom' && !isDone) {
      subject = 'Transaction Refused: Produce Cancelled';
    } else {
      // General fallbacks if type string differs slightly
      if (type.includes('spawn')) {
        subject = isDone ? 'Order Verified: Spawn Material Dispatched' : 'Order Voided: Spawn Unsuccessful';
      } else if (type.includes('mushroom')) {
        subject = isDone ? 'Order Confirmed: Organic Produce Secured' : 'Transaction Refused: Produce Cancelled';
      } else {
        subject = isDone ? `Order Confirmed: ${productType}` : `Transaction Failed: ${productType}`;
      }
    }

    // Call Resend with React-based layout component
    const { data, error } = await resend.emails.send({
      from: 'training@mushroomtraining.online',
      to: [email],
      subject: subject,
      react: EmailTemplate({
        customerName,
        orderId,
        amount,
        productType,
        status,
      }) as React.ReactElement,
    });

    if (error) {
      console.error('[Resend Error]:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error: any) {
    console.error('[API Send Error]:', error);
    return Response.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
