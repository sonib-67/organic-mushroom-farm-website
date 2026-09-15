import { NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, name, phone, amount } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET || 'dummy_secret';

    const generatedSignature = crypto
      .createHmac('sha256', secret)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Send "Payment Success" Email
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST || 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // To Admin
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Admin email
          subject: `✅ Payment SUCCESS: Workshop joined by ${name}`,
          text: `A user has successfully paid for the Workshop.\n\nName: ${name}\nPhone: ${phone}\nAmount: ₹${amount || 199}\nPayment ID: ${razorpay_payment_id}\nOrder ID: ${razorpay_order_id}\nTime: ${new Date().toLocaleString()}\n\nPlease reach out to them on WhatsApp to provide access.`,
        });
      }
    } catch (emailError) {
      console.error('Nodemailer Error (Success):', emailError);
    }

    return NextResponse.json({ success: true, message: 'Payment verified successfully' });
  } catch (error: any) {
    console.error('Verification Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
