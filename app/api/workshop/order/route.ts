import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, amount } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy',
      key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret',
    });

    const options = {
      amount: (amount || 199) * 100, // in paisa
      currency: 'INR',
      receipt: `receipt_workshop_${Date.now()}`,
      notes: {
        customerName: name,
        customerPhone: phone,
        productType: 'Mushroom Farming Workshop',
      },
    };

    const order = await razorpay.orders.create(options);

    // Send "Payment Initiated" Email to Admin
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

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to admin
          subject: `⚠️ Payment Initiated: Workshop by ${name}`,
          text: `A user has initiated payment for the Workshop.\n\nName: ${name}\nPhone: ${phone}\nAmount: ₹${amount || 199}\nOrder ID: ${order.id}\nTime: ${new Date().toLocaleString()}`,
        });
      }
    } catch (emailError) {
      console.error('Nodemailer Error (Initiated):', emailError);
      // Don't block order creation if email fails
    }

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy',
    });
  } catch (error: any) {
    console.error('Order Creation Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
