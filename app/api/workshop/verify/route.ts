import { NextResponse } from 'next/server';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, name, phone, email, amount, interest } = body;

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
          text: `A user has successfully paid for the Workshop.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nInterest: ${interest || 'General'}\nAmount: ₹${amount || 199}\nPayment ID: ${razorpay_payment_id}\nOrder ID: ${razorpay_order_id}\nTime: ${new Date().toLocaleString()}\n\nPlease reach out to them on WhatsApp/Email to provide webinar access and bonus materials.`,
        });

        // Also send confirmation to user if email is provided
        if (email) {
          try {
            await transporter.sendMail({
              from: process.env.EMAIL_USER,
              to: email,
              subject: `🎉 Registration Confirmed: Mushroom Farming Live Workshop - Organic Mushroom Farm`,
              html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; rounded: 16px;">
                  <h2 style="color: #059669;">Welcome to the Mushroom Farming Workshop!</h2>
                  <p>Dear <strong>${name}</strong>,</p>
                  <p>Congratulations! Your seat for the upcoming <strong>Live Commercial Mushroom Farming Workshop</strong> has been successfully confirmed.</p>
                  
                  <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 16px; margin: 20px 0; border-radius: 8px;">
                    <p style="margin: 0 0 8px 0;"><strong>Amount Paid:</strong> ₹${amount || 199}</p>
                    <p style="margin: 0 0 8px 0;"><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
                    <p style="margin: 0;"><strong>Registered WhatsApp:</strong> ${phone}</p>
                  </div>

                  <p>The webinar link, calendar invite, and access to the Bonus PDF Handbook will be sent to your WhatsApp number (<strong>${phone}</strong>) and this email before the session.</p>
                  
                  <p>For any instant queries, feel free to reply to this email or message our support team on WhatsApp at <strong>+91 9203544140</strong>.</p>
                  
                  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
                  <p style="font-size: 12px; color: #64748b;">Warm regards,<br><strong>Organic Mushroom Farm Team</strong><br><a href="https://organicmushroomsfarm.com" style="color: #059669;">organicmushroomsfarm.com</a></p>
                </div>
              `,
            });
          } catch (userMailErr) {
            console.error('User confirmation email error:', userMailErr);
          }
        }
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
