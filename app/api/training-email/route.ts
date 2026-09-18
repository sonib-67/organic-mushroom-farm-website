import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  generateRegistrationToken,
  saveOrUpdatePendingPayment,
  markRegistrationCompleted,
  getRegistrationRecord,
  markReminderSent
} from '@/lib/training-security';

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
      if (data.email) await transporter.sendMail(customerMailOptions);
      return NextResponse.json({ success: true });
    }

    // 3. DONE (Registration Complete) (Admin + Customer + PDF)
    if (action === 'DONE') {
      // Check if already completed to block duplicate submissions
      if (data.paymentId) {
        const existing = await getRegistrationRecord(data.paymentId);
        if (existing && existing.status === 'COMPLETED') {
          return NextResponse.json({
            success: false,
            alreadySubmitted: true,
            message: 'Registration already submitted for this payment.'
          }, { status: 409 });
        }
        await markRegistrationCompleted(data.paymentId, data);
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
      if (data.email) await transporter.sendMail(customerMailOptions);
      
      return NextResponse.json({ success: true });
    }

    
    // 4. PAYMENT_COMPLETED (Admin + DB + Token + 5-min Auto Reminder)
    if (action === 'PAYMENT_COMPLETED') {
      const numericPrice = typeof data.price === 'number' 
        ? data.price 
        : (parseInt(String(data.price || '').replace(/\D/g, ''), 10) || 299);
      
      const plan: 'training_basic' | 'training_advanced' = (numericPrice >= 600 || String(data.trainingName || '').includes('Advanced')) 
        ? 'training_advanced' 
        : 'training_basic';

      const planName = plan === 'training_advanced'
        ? 'Advanced Mushroom Farming Training'
        : 'Basic Mushroom Farming Training';

      // Generate cryptographically signed one-time token
      const token = generateRegistrationToken({
        paymentId: data.paymentId,
        amount: numericPrice,
        plan,
        name: data.name,
        email: data.email,
        phone: data.phone
      });

      // Save as pending in database
      await saveOrUpdatePendingPayment({
        paymentId: data.paymentId,
        amount: numericPrice,
        plan,
        planName,
        customerName: data.name || '',
        customerEmail: data.email || '',
        customerPhone: data.phone || '',
        token
      });

      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://organicmushroomsfarm.com";
      const registrationUrl = `${baseUrl}/training/register?token=${token}&id=${data.paymentId}&type=${plan}&name=${encodeURIComponent(data.name || '')}&email=${encodeURIComponent(data.email || '')}&phone=${encodeURIComponent(data.phone || '')}`;

      const rows = `
        <tr><td style="${rowStyle} ${labelStyle}">Customer Name:</td><td style="${rowStyle} ${valueStyle}">${data.name}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Email:</td><td style="${rowStyle} ${valueStyle}"><a href="mailto:${data.email}" style="color: #60a5fa;">${data.email}</a></td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Mobile / Phone:</td><td style="${rowStyle} ${valueStyle}">${data.phone}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Training Plan:</td><td style="${rowStyle} ${valueStyle} color: #c084fc;">${planName}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Amount:</td><td style="${rowStyle} ${highlightStyle}">₹${numericPrice} (Verified)</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Payment ID:</td><td style="${rowStyle} ${valueStyle} color: #10b981;">${data.paymentId}</td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Registration Link:</td><td style="${rowStyle} ${valueStyle}">
          <a href="${registrationUrl}" style="color: #38bdf8; font-weight: bold; word-break: break-all; display: inline-block; margin-bottom: 4px;">${registrationUrl}</a>
          <div style="font-size: 11px; color: #94a3b8;">(One-time secure link. If customer did not submit form, forward this link on WhatsApp)</div>
        </td></tr>
        <tr><td style="${rowStyle} ${labelStyle}">Time (IST):</td><td style="${rowStyle} ${valueStyle}">${currentTime}</td></tr>
      `;

      const adminMailOptions = {
        from: `"Training Alert" <${user}>`,
        to: adminEmail,
        subject: `💳 [PAID] Payment Received - ${data.name} (₹${numericPrice})`,
        html: adminHtmlStyle('💳 Payment Completed!', '#3b82f6', `User successfully paid ₹${numericPrice} for ${planName}. Direct registration link generated.`, rows),
      };

      await transporter.sendMail(adminMailOptions);

      // Trigger 5-minute automated reminder in background
      if (data.email) {
        setTimeout(async () => {
          try {
            const rec = await getRegistrationRecord(data.paymentId);
            if (rec && rec.status === 'PENDING_REGISTRATION' && !rec.reminderSent && rec.customerEmail) {
              const reminderOptions = {
                from: `"Organic Mushroom Farm" <${user}>`,
                replyTo: "support@organicmushroomsfarm.com",
                to: rec.customerEmail,
                subject: `Action Required: Complete Your Training Registration 🍄`,
                html: `
                  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 10px;">
                    <h3 style="color: #16a34a; margin-top: 0;">Hello ${rec.customerName || 'Valued Learner'},</h3>
                    <p>We received your successful payment of <strong>₹${rec.amount}</strong> for the <strong>${rec.planName}</strong> (Payment ID: <code>${rec.paymentId}</code>).</p>
                    <p>We noticed you haven't completed your batch registration form yet. To ensure your batch allocation and access to the WhatsApp group, please complete your details using your secure link below:</p>
                    <div style="margin: 24px 0; text-align: center;">
                      <a href="${registrationUrl}" style="background-color: #16a34a; color: #ffffff; padding: 12px 26px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 15px; display: inline-block;">👉 Complete Registration Form</a>
                    </div>
                    <p style="font-size: 12px; color: #64748b;">Or open directly: <a href="${registrationUrl}" style="color: #2563eb; word-break: break-all;">${registrationUrl}</a></p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 12px; color: #64748b; margin: 0;">Need assistance? WhatsApp us at <strong>+91 9203544140</strong>.<br/>Organic Mushroom Farm Team</p>
                  </div>
                `
              };
              await transporter.sendMail(reminderOptions);
              await markReminderSent(rec.paymentId);
            }
          } catch (err) {
            console.error("5-minute reminder error:", err);
          }
        }, 5 * 60 * 1000);
      }

      return NextResponse.json({
        success: true,
        token,
        registrationUrl,
        plan,
        amount: numericPrice
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('Training Email API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
