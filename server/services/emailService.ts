import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  pool: false, // Ensure pool is false for Serverless environments (Vercel)
  auth: {
    user: process.env.SMTP_USER || "training@mushroomtraining.online",
    pass: process.env.SMTP_PASS || "Sonib491@",
  },
  tls: {
    rejectUnauthorized: false
  }
});

console.log("[EmailService] Nodemailer transporter initialized with secure:true (Port 465)");

transporter.verify().then(() => {
  console.log("[EmailService] Transporter verification successful. Ready to send emails.");
}).catch(err => {
  console.error("[EmailService] Transporter verification failed:", err);
});

const APP_NAME = "Organic Mushroom Farm";
const TAGLINE = "Mushroom Farming Ecosystem";
const SUPPORT_EMAIL = "training@mushroomtraining.online";
const WHATSAPP_NUMBER = "9203544140";
const WEBSITE_DOMAIN = "organicmushroomfarm.shop";

const getBaseStyles = () => `
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #1f2937;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f3f4f6;
    -webkit-font-smoothing: antialiased;
  }
  .wrapper {
    width: 100%;
    table-layout: fixed;
    background-color: #f3f4f6;
    padding-bottom: 60px;
  }
  .main-container {
    max-width: 620px;
    margin: 40px auto 0 auto;
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  }
  .header {
    background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
    padding: 45px 30px;
    text-align: center;
    color: #ffffff;
  }
  .header-icon {
    font-size: 32px;
    margin-bottom: 10px;
    display: inline-block;
  }
  .header h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .header p {
    margin: 8px 0 0 0;
    font-size: 15px;
    color: #d1fae5;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .content {
    padding: 45px 35px;
    background-color: #ffffff;
  }
  .greeting {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 24px;
  }
  .message-text {
    font-size: 16px;
    color: #4b5563;
    margin-bottom: 30px;
    line-height: 1.7;
  }
  .highlight-phrase {
    color: #047857;
    font-weight: 600;
  }
  .details-box {
    background: #f8fafc;
    border-radius: 16px;
    padding: 30px;
    margin: 35px 0;
    border: 1px solid #e2e8f0;
  }
  .details-header {
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    color: #64748b;
    margin-top: 0;
    margin-bottom: 20px;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 12px;
  }
  .details-row {
    margin-bottom: 16px;
    font-size: 15px;
    display: table;
    width: 100%;
  }
  .details-row:last-child {
    margin-bottom: 0;
  }
  .details-label {
    display: table-cell;
    color: #64748b;
    font-weight: 600;
    width: 150px;
  }
  .details-value {
    display: table-cell;
    color: #0f172a;
    font-weight: 600;
  }
  .status-success { color: #059669; }
  .status-pending { color: #d97706; }
  .status-failed { color: #dc2626; }
  
  .next-steps {
    background-color: #f0fdf4;
    border-left: 4px solid #10b981;
    padding: 25px;
    border-radius: 0 12px 12px 0;
    margin: 35px 0;
  }
  .next-steps strong {
    display: block;
    color: #047857;
    margin-bottom: 10px;
    font-size: 16px;
  }
  .next-steps p {
    margin: 0;
    color: #1f2937;
    font-size: 15px;
  }
  
  .btn-container {
    text-align: center;
    margin: 40px 0;
  }
  .btn-premium {
    display: inline-block;
    padding: 16px 36px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: #ffffff;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.5px;
    box-shadow: 0 8px 20px rgba(5, 150, 105, 0.25);
    transition: all 0.3s ease;
  }
  .trust-marks {
    background-color: #f8fafc;
    border-radius: 16px;
    padding: 25px 35px;
    margin-top: 40px;
    border: 1px solid #e2e8f0;
  }
  .trust-marks p {
    margin: 8px 0;
    font-size: 14px;
    color: #475569;
    font-weight: 500;
  }
  .trust-marks p span {
    color: #10b981;
    margin-right: 8px;
    font-weight: bold;
  }
  .footer {
    background-color: #111827;
    padding: 40px 35px;
    text-align: center;
    color: #9ca3af;
    font-size: 14px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .footer a {
    color: #34d399;
    text-decoration: none;
    font-weight: 500;
  }
  .footer-logo {
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 15px;
    display: block;
    letter-spacing: -0.5px;
  }
  .admin-badge {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    display: inline-block;
    margin-bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  @media only screen and (max-width: 600px) {
    .main-container { margin: 20px 15px 0 15px; border-radius: 16px; }
    .header { padding: 35px 20px; }
    .content { padding: 35px 25px; }
    .details-box { padding: 20px; }
    .details-label { display: block; width: 100%; margin-bottom: 4px; font-size: 13px; }
    .details-value { display: block; }
    .trust-marks { padding: 20px; }
    .footer { padding: 30px 20px; }
    .btn-premium { width: 100%; box-sizing: border-box; }
  }
`;

const buildEmail = (bodyContent: string, isAdmin: boolean) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${APP_NAME}</title>
  <style>${getBaseStyles()}</style>
</head>
<body>
  <div class="wrapper">
    <div class="main-container">
      <div class="header">
        ${isAdmin ? '<div class="admin-badge">Admin Notification</div>' : ''}
        <div class="header-icon">🌱</div>
        <h1>${APP_NAME}</h1>
        <p>${TAGLINE}</p>
      </div>
      <div class="content">
        ${bodyContent}
        
        <div class="trust-marks">
          <p><span>✔</span> Secure Razorpay Payments</p>
          <p><span>✔</span> Trusted by Mushroom Growers Across India</p>
          <p><span>✔</span> Dedicated Expert Support</p>
          <p><span>✔</span> Safe & Encrypted Experience</p>
        </div>
      </div>
      <div class="footer">
        <span class="footer-logo">🌱 ${APP_NAME}</span>
        <p style="margin: 5px 0;">Support: <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p>
        <p style="margin: 5px 0;">Website: <a href="https://${WEBSITE_DOMAIN}" target="_blank">${WEBSITE_DOMAIN}</a></p>
        <p style="margin: 15px 0 0 0; padding-top: 15px; border-top: 1px solid #374151;">
          WhatsApp Support: <strong>${WHATSAPP_NUMBER}</strong>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`;

export const sendSuccessEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const currTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const custName = data.customerName || "Customer";
  
  let nextStepsHtml = "";
  const prodMatch = data.productType?.toLowerCase() || '';
  const isConsultation = prodMatch.includes("consultation");
  
  if (prodMatch.includes("training")) {
    nextStepsHtml = "Training access details and webinar links will be shared with you shortly.";
  } else if (prodMatch.includes("consultation")) {
    nextStepsHtml = "Our expert team will review your request and contact you soon on your registered details.";
  } else if (prodMatch.includes("spawn")) {
    nextStepsHtml = "Your high-quality mushroom spawn order is confirmed and our farm team has started preparing your batch.";
  } else if (prodMatch.includes("fresh")) {
    nextStepsHtml = "Your fresh mushrooms are being carefully harvested and prepared for dispatch.";
  } else if (prodMatch.includes("dry")) {
    nextStepsHtml = "Your dry mushrooms are currently being packed securely and dispatch updates will follow soon.";
  } else {
    nextStepsHtml = "Your order has been confirmed successfully and we will be in touch shortly.";
  }

  const content = `
    <div class="greeting">Dear ${custName},</div>
    <div class="message-text">
      Thank you for your order! We are happy to inform you that your payment for <span class="highlight-phrase">${data.productType}</span> has been successfully processed. 
      <br/><br/>
      Thank you for choosing Organic Mushroom Farm. We are excited to assist you on your mushroom farming and wellness journey.
    </div>

    <div class="details-box">
      <div class="details-header">:${isConsultation ? 'Booking Summary' : 'Order Summary'}</div>
      <div class="details-row">
        <span class="details-label">${isConsultation ? 'Name' : 'Product'}</span>
        <span class="details-value">${isConsultation ? custName : data.productType}</span>
      </div>
      ${!isConsultation ? `
      <div class="details-row">
        <span class="details-label">Amount Paid</span>
        <span class="details-value">₹${amount}</span>
      </div>
      ` : ''}
      <div class="details-row">
        <span class="details-label">Status</span>
        <span class="details-value status-success">${isConsultation ? 'Confirmed' : 'Payment Successful'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Payment ID</span>
        <span class="details-value">${data.paymentId}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Order ID</span>
        <span class="details-value">${data.orderId || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Mobile</span>
        <span class="details-value">${data.phone || 'N/A'}</span>
      </div>
      ${isConsultation ? `
      <div class="details-row">
        <span class="details-label">Email Address</span>
        <span class="details-value">${data.email || 'N/A'}</span>
      </div>
      ` : `
      <div class="details-row">
        <span class="details-label">Date & Time</span>
        <span class="details-value">${currTime}</span>
      </div>
      `}
    </div>

    <div class="next-steps">
      <strong>What Happens Next?</strong>
      <p>${nextStepsHtml}</p>
    </div>
    
    <div class="message-text" style="text-align: center; margin-top: 40px; margin-bottom: 10px;">
      If you need any assistance, our dedicated farm support team is always here to help you.
    </div>

    <div class="btn-container">
      <a href="https://wa.me/91${WHATSAPP_NUMBER}?text=Hello,%20I%20have%20an%20inquiry%20regarding%20my%20confirmed%20Order%20${data.orderId}" class="btn-premium">
        Join WhatsApp Support
      </a>
    </div>
  `;
  
  console.log(`[EmailService] Sending Success email to ${toEmail}...`);
  try {
    await transporter.sendMail({
      from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
      to: toEmail,
      subject: isAdmin 
        ? `New Sale Confirmed: ${data.productType} – ${APP_NAME}`
        : (isConsultation 
          ? `Consultation Booking Confirmed 🌱 – ${APP_NAME}` 
          : `Your Order Has Been Confirmed 🌱 – ${APP_NAME}`),
      html: buildEmail(content, isAdmin)
    });
    console.log(`[EmailService] Success email sent to ${toEmail} successfully.`);
  } catch (err) {
    console.error(`[EmailService] Failed to send Success email to ${toEmail}:`, err);
    throw err;
  }
};

export const sendPendingEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const currTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const custName = data.customerName || "Customer";

  const content = `
    <div class="greeting">Dear ${custName},</div>
    <div class="message-text">
      We are currently verifying your payment for <span class="highlight-phrase">${data.productType}</span>.
      <br/><br/>
      Please don't worry, this is a standard verification process that usually gets cleared within a few minutes depending on your bank network. 
      <br/><br/>
      <strong>Kindly avoid making another transaction right now.</strong> As soon as the payment status is updated by your bank, we will send you a confirmation email immediately.
    </div>

    <div class="details-box">
      <div class="details-header">Payment Verification Details</div>
      <div class="details-row">
        <span class="details-label">Product</span>
        <span class="details-value">${data.productType}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Amount</span>
        <span class="details-value">₹${amount}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Status</span>
        <span class="details-value status-pending">Under Verification</span>
      </div>
      <div class="details-row">
        <span class="details-label">Payment ID</span>
        <span class="details-value">${data.paymentId}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Order ID</span>
        <span class="details-value">${data.orderId || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Mobile</span>
        <span class="details-value">${data.phone || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Date & Time</span>
        <span class="details-value">${currTime}</span>
      </div>
    </div>

    <div class="message-text" style="text-align: center; margin-top: 40px; margin-bottom: 10px;">
      Our support team is active and monitoring this. If you have any questions, feel free to connect with us.
    </div>

    <div class="btn-container">
      <a href="https://wa.me/91${WHATSAPP_NUMBER}?text=Hello,%20my%20payment%20is%20pending%20verification%20for%20Order%20${data.orderId}" class="btn-premium">
        Connect With Support
      </a>
    </div>
  `;

  console.log(`[EmailService] Sending Pending email to ${toEmail}...`);
  try {
    await transporter.sendMail({
      from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
      to: toEmail,
      subject: `Payment Under Verification 🌱 – ${APP_NAME}`,
      html: buildEmail(content, isAdmin)
    });
    console.log(`[EmailService] Pending email sent to ${toEmail} successfully.`);
  } catch (err) {
    console.error(`[EmailService] Failed to send Pending email to ${toEmail}:`, err);
    throw err;
  }
};

export const sendFailedEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const currTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const custName = data.customerName || "Customer";

  const content = `
    <div class="greeting">Dear ${custName},</div>
    <div class="message-text">
      We noticed that your recent payment attempt for <span class="highlight-phrase">${data.productType}</span> could not be completed successfully.
      <br/><br/>
      Sometimes network drops or UPI timeouts can interrupt the transaction. Please rest assured that if any amount was deducted, it will be automatically refunded by your bank within a few working days.
    </div>

    <div class="details-box">
      <div class="details-header">Transaction Overview</div>
      <div class="details-row">
        <span class="details-label">Product</span>
        <span class="details-value">${data.productType}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Amount</span>
        <span class="details-value">₹${amount}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Status</span>
        <span class="details-value status-failed">Process Incomplete</span>
      </div>
      <div class="details-row">
        <span class="details-label">Payment ID</span>
        <span class="details-value">${data.paymentId}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Order ID</span>
        <span class="details-value">${data.orderId || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Mobile</span>
        <span class="details-value">${data.phone || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Date & Time</span>
        <span class="details-value">${currTime}</span>
      </div>
    </div>

    <div class="message-text" style="text-align: center; margin-top: 40px; margin-bottom: 10px;">
      We are here to help you complete your order smoothly. You can reach out to us directly on WhatsApp.
    </div>

    <div class="btn-container">
      <a href="https://wa.me/91${WHATSAPP_NUMBER}?text=Hello,%20my%20payment%20encountered%20an%20interruption%20for%20Order%20${data.orderId}.%20Kindly%20assist." class="btn-premium">
        Assistance via WhatsApp
      </a>
    </div>
  `;

  console.log(`[EmailService] Sending Failed email to ${toEmail}...`);
  try {
    await transporter.sendMail({
      from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
      to: toEmail,
      subject: `Payment Interrupted 🌱 – ${APP_NAME}`,
      html: buildEmail(content, isAdmin)
    });
    console.log(`[EmailService] Failed email sent to ${toEmail} successfully.`);
  } catch (err) {
    console.error(`[EmailService] Failed to send Failed email to ${toEmail}:`, err);
    throw err;
  }
};

export const sendAbandonedEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const currTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const custName = data.customerName || "Customer";
  
  const content = `
    <div class="greeting">Dear ${custName},</div>
    <div class="message-text">
      We noticed that you left your checkout page for <span class="highlight-phrase">${data.productType}</span> before completing the setup.
      <br/><br/>
      We understand you might have busy schedules or unresolved questions about mushroom farming. Your selection has been saved in our farm system so you can easily resume when ready.
    </div>

    <div class="details-box">
      <div class="details-header">Reservation Overview</div>
      <div class="details-row">
        <span class="details-label">Product</span>
        <span class="details-value">${data.productType}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Amount</span>
        <span class="details-value">₹${amount}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Mobile</span>
        <span class="details-value">${data.phone || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Date & Time</span>
        <span class="details-value">${currTime}</span>
      </div>
    </div>
    
    <div class="message-text" style="text-align: center; margin-top: 40px; margin-bottom: 10px;">
      Our team is available to guide you and clear any doubts you may have regarding mushroom farming.
    </div>

    <div class="btn-container">
      <a href="https://wa.me/91${WHATSAPP_NUMBER}?text=Hello,%20I%20have%20an%20inquiry%20regarding%20my%20reservation%20for%20${encodeURIComponent(data.productType)}." class="btn-premium">
        Connect With Our Team
      </a>
    </div>
  `;

  console.log(`[EmailService] Sending Abandoned email to ${toEmail}...`);
  try {
    await transporter.sendMail({
      from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
      to: toEmail,
      subject: `Your Saved Selection 🌱 – ${APP_NAME}`,
      html: buildEmail(content, isAdmin)
    });
    console.log(`[EmailService] Abandoned email sent to ${toEmail} successfully.`);
  } catch (err) {
    console.error(`[EmailService] Failed to send Abandoned email to ${toEmail}:`, err);
    throw err;
  }
};