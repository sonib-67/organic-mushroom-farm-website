import type { VercelRequest, VercelResponse } from '@vercel/node';
import Razorpay from 'razorpay';
import * as nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const RAZORPAY_KEY_ID = process.env.VITE_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;
    const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error("Razorpay API keys are missing in environment variables.");
      return res.status(500).json({ error: "Server configuration error. Payment gateway unavailable." });
    }

    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });

    const { name, mobile, email, productType, amount, orderId } = req.body;

    // Use amount in paise
    let amountInPaise = amount ? parseInt(amount, 10) * 100 : 29900;

    // Set expiration based on due date (e.g. 7 days from now)
    const expireDays = 7;
    const expireBy = Math.floor(Date.now() / 1000) + (expireDays * 24 * 60 * 60);
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + expireDays);

    // Create Payment Link via Razorpay
    const paymentLinkRequest = {
      amount: amountInPaise,
      currency: "INR",
      accept_partial: false,
      description: `Repayment for ${productType || 'Order'}`,
      customer: {
        name: name || "Customer",
        email: email || "",
        contact: mobile || ""
      },
      notify: {
        sms: false,
        email: false
      },
      reminder_enable: true,
      expire_by: expireBy,
      notes: {
        orderId: orderId || `REP_${Date.now()}`,
        productType: productType || "unknown"
      }
    };

    const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);
    const shortUrl = paymentLink.short_url;

    // Send Email to Customer
    const adminEmail = process.env.GMAIL_USER || 'hello@organicmushroomfarm.com';
    const appPassword = process.env.GMAIL_APP_PASSWORD;

    if (adminEmail && appPassword && email) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: adminEmail,
          pass: appPassword
        }
      });

      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          h2 { color: #1f2937; margin-top: 0; }
          p { color: #4b5563; line-height: 1.6; font-size: 15px; }
          .btn { display: inline-block; padding: 12px 24px; background-color: #15803d; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 15px; margin-bottom: 15px; }
          .footer { margin-top: 30px; font-size: 12px; color: #9ca3af; text-align: center; }
          .warning { color: #b91c1c; font-size: 14px; margin-top: 10px; }
        </style>
        </head>
        <body>
          <div class="container">
            <h2>Complete Your Payment</h2>
            <p>Dear ${name || 'Customer'},</p>
            <p>We noticed your recent payment for <strong>${productType || 'your order'}</strong> was left pending or cancelled. You can easily complete your payment using the secure link below.</p>
            
            <a href="${shortUrl}" class="btn">Pay Now (Rs. ${amountInPaise / 100})</a>
            
            <p class="warning">Please note: This payment link will automatically expire on <strong>${dueDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</strong>.</p>
            
            <p>If you have any questions, feel free to reply to this email.</p>
            
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: '"Organic Mushroom Farm" <' + adminEmail + '>',
        to: email,
        subject: `Complete Your Payment - Organic Mushroom Farm`,
        html: emailHtml
      });
    }

    return res.status(200).json({ 
      success: true, 
      paymentLink: shortUrl,
      expireBy: expireBy,
      dueDate: dueDate.toISOString()
    });

  } catch (error) {
    console.error("Error creating repayment link:", error);
    return res.status(500).json({ error: "Failed to generate repayment link" });
  }
}
