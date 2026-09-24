import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { recordPaymentInit, completeRegistration } from '@/lib/registrationStore';
import { isDuplicateUserEmail } from '@/lib/userSimpleMailService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, data, pdfBase64 } = body;

    const user =
      process.env.EMAIL_USER ||
      process.env.SMTP_EMAIL ||
      "organicmushroomsfarms@gmail.com";
    const pass =
      process.env.EMAIL_PASS ||
      process.env.SMTP_PASSWORD ||
      "jzqqntulcifrfyul";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'gamingbuddyzone@gmail.com';
    const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'short', timeStyle: 'medium' });

    // CSS Styling for beautiful Admin emails (dark/light mode compatible)
    const adminHtmlStyle = (headerTitle: string, headerColor: string, headerSubtitle: string, contentRows: string) => `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #1a1a1a; padding: 20px; color: #e5e5e5; max-width: 600px; margin: 0 auto; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
        <div style="background-color: ${headerColor}; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">${headerTitle}</h2>
          <p style="margin: 5px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">${headerSubtitle}</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
          ${contentRows}
        </table>
        
        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #888;">
          Organic Mushrooms Farm • Real-time Training Checkout Tracker
        </div>
      </div>
    `;

    const rowStyle = `border-bottom: 1px solid #333; padding: 12px 5px;`;
    const labelStyle = `font-weight: 600; color: #b3b3b3; width: 35%;`;
    const valueStyle = `font-weight: 500; color: #ffffff;`;
    const highlightStyle = `font-weight: 700; color: #f59e0b;`;

    // 1. INITIATED (Admin Only)
    if (action === 'INITIATED') {
      const rows = `
        <tr><td style="${rowStyle} ${labelStyle}">Customer Name:</td><td style="${rowStyle} ${valueStyle}">${data.name}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Email:</td><td style="${rowStyle} ${valueStyle}"><a href="mailto:${data.email}" style="color: #60a5fa;">${data.email}</a></td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Mobile / Phone:</td><td style="${rowStyle} ${valueStyle}">${data.phone}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Training Plan:</td><td style="${rowStyle} ${valueStyle} color: #c084fc;">${data.trainingName}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Amount:</td><td style="${rowStyle} ${highlightStyle}">${data.price}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Time (IST):</td><td style="${rowStyle} ${valueStyle}">${currentTime}</td></tr>
      `;

      const mailOptions = {
        from: `"Training Alert" <${user}>`,
        to: adminEmail,
        subject: `⚡ [Initiated] Training Payment - ${data.name}`,
        html: adminHtmlStyle('⚡ Training Payment Initiated', '#f59e0b', `User opened checkout for ${data.trainingName}`, rows),
      };
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true });
    }

    // 2. CANCELLED / FAILED (Admin + Customer)
    if (action === 'CANCELLED' || action === 'FAILED') {
      const isFailed = action === 'FAILED';
      
      // Admin Mail
      const rows = `
        <tr><td style="${rowStyle} ${labelStyle}">Customer Name:</td><td style="${rowStyle} ${valueStyle}">${data.name}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Email:</td><td style="${rowStyle} ${valueStyle}"><a href="mailto:${data.email}" style="color: #60a5fa;">${data.email}</a></td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Mobile / Phone:</td><td style="${rowStyle} ${valueStyle}">${data.phone}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Training Plan:</td><td style="${rowStyle} ${valueStyle} color: #c084fc;">${data.trainingName}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Amount:</td><td style="${rowStyle} ${highlightStyle}">${data.price}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Time (IST):</td><td style="${rowStyle} ${valueStyle}">${currentTime}</td></tr>
      `;

      const adminMailOptions = {
        from: `"Training Alert" <${user}>`,
        to: adminEmail,
        subject: `❌ [${action}] Training Payment - ${data.name}`,
        html: adminHtmlStyle(
          isFailed ? '❌ Payment Failed' : '⚠️ Payment Cancelled/Dropped', 
          isFailed ? '#dc2626' : '#ea580c', 
          `User did not complete payment for ${data.trainingName}`, 
          rows
        ),
      };
      
      // Customer Mail
      const customerMailOptions = {
        from: `"Organic Mushroom Farm" <${user}>`,
        replyTo: "support@organicmushroomsfarm.com",
        to: data.email,
        subject: `Incomplete Payment - Organic Mushroom Farm`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h3 style="color: #ea580c;">Hello ${data.name},</h3>
            <p>We noticed you tried to enroll in the <strong>${data.trainingName}</strong> but the payment was not completed.</p>
            <p>If you faced any issues during checkout or need help, please let us know by replying to this email or contacting our support on WhatsApp at <strong>+91 9203544140</strong>.</p>
            <br/>
            <p>Regards,<br/><strong>Organic Mushroom Farm Team</strong></p>
          </div>
        `,
      };

      await transporter.sendMail(adminMailOptions);
      if (data.email && !isDuplicateUserEmail(`training_email_incomplete:${data.email}:${data.trainingName}`)) {
        await transporter.sendMail(customerMailOptions);
      }
      return NextResponse.json({ success: true });
    }

    // 3. DONE (Registration Complete) (Admin + Customer + PDF)
    if (action === 'DONE') {
      if (data.paymentId) {
        const result = completeRegistration(data.paymentId, data);
        if (!result.success && result.error === 'ALREADY_COMPLETED') {
          return NextResponse.json({
            success: false,
            error: 'ALREADY_COMPLETED',
            message: 'This registration has already been submitted for this Payment ID.',
          }, { status: 400 });
        }
      }

      // Admin Mail (Detailed Registration Form)
      const rows = `
        <tr><td style="${rowStyle} ${labelStyle}">Customer Name:</td><td style="${rowStyle} ${valueStyle}">${data.name}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Email:</td><td style="${rowStyle} ${valueStyle}"><a href="mailto:${data.email}" style="color: #60a5fa;">${data.email}</a></td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Mobile / Phone:</td><td style="${rowStyle} ${valueStyle}">${data.phone}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Training Plan:</td><td style="${rowStyle} ${valueStyle} color: #c084fc;">${data.trainingName}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Amount:</td><td style="${rowStyle} ${highlightStyle}">${data.price}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Payment ID:</td><td style="${rowStyle} ${valueStyle} color: #10b981;">${data.paymentId}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">City & State:</td><td style="${rowStyle} ${valueStyle}">${data.city}, ${data.state}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Experience:</td><td style="${rowStyle} ${valueStyle}">${data.experience}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Interest:</td><td style="${rowStyle} ${valueStyle}">${data.interest?.join(', ')}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Goal:</td><td style="${rowStyle} ${valueStyle}">${data.goal}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Plan Time/Space:</td><td style="${rowStyle} ${valueStyle}">${data.planTime} | ${data.planSpace}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Investment:</td><td style="${rowStyle} ${valueStyle}">${data.investment}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Support Req:</td><td style="${rowStyle} ${valueStyle}">${data.support?.join(', ')}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Source:</td><td style="${rowStyle} ${valueStyle}">${data.source}</td></tr>
      `;

      const adminMailOptions = {
        from: `"Training Alert" <${user}>`,
        to: adminEmail,
        subject: `✅ [SUCCESS] New Training Registration - ${data.name}`,
        html: adminHtmlStyle('✅ Registration Successful', '#16a34a', `New enrollment for ${data.trainingName}`, rows),
      };

      // Customer Mail with PDF Attachment
      let attachments: any[] = [];
      if (pdfBase64) {
        // Strip the data:application/pdf;filename=generated.pdf;base64, part if present
        const base64Data = pdfBase64.split('base64,')[1] || pdfBase64;
        attachments = [{
          filename: `Invoice_${data.name.replace(/\s+/g, '_')}_${data.paymentId}.pdf`,
          content: base64Data,
          encoding: 'base64'
        }];
      }

      const customerMailOptions = {
        from: `"Organic Mushroom Farm" <${user}>`,
        replyTo: "support@organicmushroomsfarm.com",
        to: data.email,
        subject: `Registration Successful & Invoice - Organic Mushroom Farm`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <h2 style="color: #16a34a;">Hello ${data.name},</h2>
            <p>Thank you for registering for the <strong>${data.trainingName}</strong> (${data.price}).</p>
            <p>Your payment (ID: ${data.paymentId}) was successful. We have attached your <strong>invoice PDF</strong> with this email for your records.</p>
            <p>Our team will share the training schedule, joining instructions, and other important updates with you through WhatsApp and/or email shortly.</p>
            <br/>
            <p>Regards,<br/><strong>Organic Mushroom Farm Team</strong></p>
          </div>
        `,
        attachments
      };

      await transporter.sendMail(adminMailOptions);
      if (data.email && !isDuplicateUserEmail(`training_email_done:${data.email}:${data.paymentId || data.trainingName}`)) {
        await transporter.sendMail(customerMailOptions);
      }
      
      return NextResponse.json({ success: true });
    }

    
    // 4. PAYMENT_COMPLETED (Admin Only) - When Razorpay is successful before registration form
    if (action === 'PAYMENT_COMPLETED') {
      const numericPrice = Number(String(data.price).replace(/[^0-9]/g, '')) || 299;
      const regRecord = recordPaymentInit({
        paymentId: data.paymentId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        amount: numericPrice,
      });

      const baseUrl = process.env.APP_URL || "https://organicmushroomsfarm.com";
      const registrationUrl = `${baseUrl}/training/register?id=${data.paymentId}&name=${encodeURIComponent(data.name)}&phone=${encodeURIComponent(data.phone)}&email=${encodeURIComponent(data.email)}&type=${regRecord.courseType}`;

      const rows = `
        <tr><td style="${rowStyle} ${labelStyle}">Customer Name:</td><td style="${rowStyle} ${valueStyle}">${data.name}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Email:</td><td style="${rowStyle} ${valueStyle}"><a href="mailto:${data.email}" style="color: #60a5fa;">${data.email}</a></td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Mobile / Phone:</td><td style="${rowStyle} ${valueStyle}">${data.phone}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Training Plan:</td><td style="${rowStyle} ${valueStyle} color: #c084fc;">${data.trainingName}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Amount:</td><td style="${rowStyle} ${highlightStyle}">${data.price}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Payment ID:</td><td style="${rowStyle} ${valueStyle} color: #10b981;">${data.paymentId}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Time (IST):</td><td style="${rowStyle} ${valueStyle}">${currentTime}</td></tr>
        <tr>
          <td colspan="2" style="padding: 16px 5px 6px 5px;">
            <div style="background: #1e293b; border: 1px solid #3b82f6; border-radius: 8px; padding: 12px;">
              <div style="font-size: 13px; font-weight: 700; color: #60a5fa; margin-bottom: 6px;">🔗 User Registration Form Link (Admin Copy):</div>
              <a href="${registrationUrl}" style="color: #38bdf8; font-size: 12.5px; word-break: break-all; text-decoration: underline;">${registrationUrl}</a>
              <div style="margin-top: 8px; font-size: 11.5px; color: #94a3b8;">💡 If the user has not completed the form, you can share this direct pre-filled registration link with the student via WhatsApp or Email.</div>
            </div>
          </td>
        </tr>
      `;

      const adminMailOptions = {
        from: `"Training Alert" <${user}>`,
        to: adminEmail,
        subject: `💳 [PAID] Payment Received - ${data.name}`,
        html: adminHtmlStyle('💳 Payment Completed!', '#3b82f6', `User successfully paid for ${data.trainingName}. Form link generated below.`, rows),
      };

      await transporter.sendMail(adminMailOptions);
      return NextResponse.json({ success: true, registrationUrl });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('Training Email API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
