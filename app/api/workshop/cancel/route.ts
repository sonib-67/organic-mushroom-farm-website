import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, reason } = await req.json();

    // Send "Payment Cancelled" Email to Admin
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
          subject: `❌ Payment CANCELLED: Workshop by ${name}`,
          text: `A user has cancelled or failed their payment for the Workshop.\n\nName: ${name}\nPhone: ${phone}\nReason: ${reason || 'User closed the checkout window or payment failed'}\nTime: ${new Date().toLocaleString()}\n\nYou may want to follow up with them.`,
        });
      }
    } catch (emailError) {
      console.error('Nodemailer Error (Cancelled):', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Cancellation Email Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
