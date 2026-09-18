import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  getRegistrationRecord,
  markRegistrationCompleted,
  fetchVerifiedRazorpayPayment,
  verifyRegistrationToken
} from '@/lib/training-security';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { paymentId, token, data, pdfBase64 } = body;

    if (!paymentId) {
      return NextResponse.json(
        { success: false, error: 'Payment ID is required.' },
        { status: 400 }
      );
    }

    // 1. Check if already completed (Prevent Replay / Duplicate Submission)
    const existing = await getRegistrationRecord(paymentId);
    if (existing && existing.status === 'COMPLETED') {
      return NextResponse.json(
        {
          success: false,
          alreadySubmitted: true,
          message: 'This registration has already been completed earlier. Multiple submissions are not allowed for a single payment.',
          record: existing
        },
        { status: 409 }
      );
    }

    // 2. Enforce ground-truth amount & plan directly from Razorpay / Verified Token
    let verifiedAmount = existing?.amount || 299;
    let verifiedPlan = existing?.plan || 'training_basic';
    let verifiedPlanName = existing?.planName || 'Basic Mushroom Farming Training';

    try {
      const razorpayData = await fetchVerifiedRazorpayPayment(paymentId);
      if (razorpayData.verified) {
        verifiedAmount = razorpayData.amount;
        verifiedPlan = razorpayData.plan;
        verifiedPlanName = razorpayData.planName;
      }
    } catch (e) {
      // If Razorpay API call fails, check token
      if (token) {
        const tokenResult = verifyRegistrationToken(token);
        if (tokenResult.valid && tokenResult.payload) {
          verifiedAmount = tokenResult.payload.amount;
          verifiedPlan = tokenResult.payload.plan;
          verifiedPlanName = verifiedPlan === 'training_advanced' 
            ? 'Advanced Mushroom Farming Training' 
            : 'Basic Mushroom Farming Training';
        }
      }
    }

    // Override any client-supplied price or plan name with verified values
    const safeData = {
      ...data,
      paymentId,
      price: `Rs. ${verifiedAmount}`,
      trainingName: verifiedPlanName
    };

    // 3. Atomically lock the registration in DB
    const lockResult = await markRegistrationCompleted(paymentId, safeData);
    if (lockResult.alreadyCompleted) {
      return NextResponse.json(
        {
          success: false,
          alreadySubmitted: true,
          message: 'Registration was already completed in another session.',
          record: lockResult.record
        },
        { status: 409 }
      );
    }

    // 4. Send Emails via Nodemailer
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
      auth: { user, pass },
    });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'gamingbuddyzone@gmail.com';
    const currentTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'short', timeStyle: 'medium' });

    const rowStyle = `border-bottom: 1px solid #333; padding: 12px 5px;`;
    const labelStyle = `font-weight: 600; color: #b3b3b3; width: 35%;`;
    const valueStyle = `font-weight: 500; color: #ffffff;`;
    const highlightStyle = `font-weight: 700; color: #10b981;`;

    // Admin email HTML
    const adminRows = `
      <tr><td style="${rowStyle} ${labelStyle}">Customer Name:</td><td style="${rowStyle} ${valueStyle}">${safeData.name}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Email:</td><td style="${rowStyle} ${valueStyle}"><a href="mailto:${safeData.email}" style="color: #60a5fa;">${safeData.email}</a></td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Mobile / Phone:</td><td style="${rowStyle} ${valueStyle}">${safeData.phone}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Training Plan:</td><td style="${rowStyle} ${valueStyle} color: #c084fc;">${verifiedPlanName}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Amount:</td><td style="${rowStyle} ${highlightStyle}">₹${verifiedAmount} (Verified)</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Payment ID:</td><td style="${rowStyle} ${valueStyle} color: #10b981;">${paymentId}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">City & State:</td><td style="${rowStyle} ${valueStyle}">${safeData.city || ''}, ${safeData.state || ''}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Experience:</td><td style="${rowStyle} ${valueStyle}">${safeData.experience || 'Not specified'}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Interest:</td><td style="${rowStyle} ${valueStyle}">${Array.isArray(safeData.interest) ? safeData.interest.join(', ') : (safeData.interest || '')}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Goal:</td><td style="${rowStyle} ${valueStyle}">${safeData.goal || ''}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Plan Time/Space:</td><td style="${rowStyle} ${valueStyle}">${safeData.planTime || ''} | ${safeData.planSpace || ''}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Investment:</td><td style="${rowStyle} ${valueStyle}">${safeData.investment || ''}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Support Req:</td><td style="${rowStyle} ${valueStyle}">${Array.isArray(safeData.support) ? safeData.support.join(', ') : (safeData.support || '')}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Source:</td><td style="${rowStyle} ${valueStyle}">${safeData.source || ''}</td></tr>
      <tr><td style="${rowStyle} ${labelStyle}">Completed At:</td><td style="${rowStyle} ${valueStyle}">${currentTime}</td></tr>
    `;

    const adminMailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #1a1a1a; padding: 20px; color: #e5e5e5; max-width: 600px; margin: 0 auto; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
        <div style="background-color: #16a34a; padding: 20px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">✅ Registration Completed (One-Time Verified)</h2>
          <p style="margin: 5px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">${verifiedPlanName} • ₹${verifiedAmount}</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
          ${adminRows}
        </table>
        
        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #888;">
          Organic Mushrooms Farm • Real-time Security Verification
        </div>
      </div>
    `;

    // Customer PDF attachment
    let attachments: any[] = [];
    if (pdfBase64) {
      const base64Data = pdfBase64.split('base64,')[1] || pdfBase64;
      attachments = [{
        filename: `Invoice_${(safeData.name || 'Customer').replace(/\s+/g, '_')}_${paymentId}.pdf`,
        content: base64Data,
        encoding: 'base64'
      }];
    }

    const customerMailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
        <h2 style="color: #16a34a;">Hello ${safeData.name},</h2>
        <p>Congratulations! Your registration for <strong>${verifiedPlanName}</strong> (₹${verifiedAmount}) has been successfully confirmed.</p>
        <p>Your payment (ID: <strong>${paymentId}</strong>) has been verified. We have attached your <strong>official tax invoice PDF</strong> with this email.</p>
        
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 15px; margin: 20px 0;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #166534;">Next Steps for Your Training:</p>
          <ul style="margin: 0; padding-left: 20px; color: #166534;">
            <li>Our team will contact you via WhatsApp for your batch allocation.</li>
            <li>Training materials and study PDF notes will be shared before the session.</li>
            <li>For any immediate assistance, connect with our team on WhatsApp: <strong>+91 9203544140</strong>.</li>
          </ul>
        </div>
        
        <p>Regards,<br/><strong>Organic Mushroom Farm Team</strong></p>
      </div>
    `;

    // Send emails asynchronously
    try {
      await transporter.sendMail({
        from: `"Training Alert" <${user}>`,
        to: adminEmail,
        subject: `✅ [VERIFIED] Training Registration - ${safeData.name} (₹${verifiedAmount})`,
        html: adminMailHtml
      });

      if (safeData.email) {
        await transporter.sendMail({
          from: `"Organic Mushroom Farm" <${user}>`,
          replyTo: "support@organicmushroomsfarm.com",
          to: safeData.email,
          subject: `Training Registration Confirmed & Invoice - Organic Mushroom Farm`,
          html: customerMailHtml,
          attachments
        });
      }
    } catch (mailError) {
      console.error("Nodemailer dispatch error in submit:", mailError);
    }

    return NextResponse.json({
      success: true,
      alreadySubmitted: false,
      paymentId,
      amount: verifiedAmount,
      plan: verifiedPlan,
      planName: verifiedPlanName,
      message: 'Registration completed successfully.'
    });
  } catch (error: any) {
    console.error("Submit API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal submission error' },
      { status: 500 }
    );
  }
}
