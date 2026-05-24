import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: "training@mushroomtraining.online",
    pass: process.env.SMTP_PASS || "Sonib491@",
  },
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
  .btn-primary {
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
    .btn-primary { width: 100%; box-sizing: border-box; }
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
  
  const prodMatch = data.productType?.toLowerCase() || '';
  const isTraining = prodMatch.includes("training");
  const isConsultation = prodMatch.includes("consultation");
  
  let subject = `Your Order Has Been Confirmed 🌱`;
  if (isAdmin) {
    subject = `New Sale Confirmed: ${data.productType} – ${APP_NAME}`;
  } else if (isTraining) {
    subject = `Training Enrollment Confirmed 🌱`;
  } else if (isConsultation) {
    subject = `Consultation Booking Confirmed 🌱`;
  }

  let preamble = ``;
  let postamble = ``;
  let detailsHeader = `Order Details`;

  if (isTraining) {
    detailsHeader = `Enrollment Details`;
    preamble = `
      Thank you for joining Organic Mushroom Farm 🌱
      <br/><br/>
      Your training enrollment has been successfully confirmed.
      <br/><br/>
      Our team will soon share your training access details, webinar link, or joining instructions on your registered email or WhatsApp number.
    `;
    postamble = `
      If you need any help before the session starts, feel free to contact our support team anytime.
    `;
  } else if (isConsultation) {
    detailsHeader = `Booking Details`;
    preamble = `
      Your consultation request has been successfully confirmed.
      <br/><br/>
      Our expert team will contact you shortly using your registered mobile number or email address.
    `;
    postamble = `
      Thank you for choosing Organic Mushroom Farm.
    `;
  } else {
    preamble = `
      Thank you for placing your order with Organic Mushroom Farm.
      <br/><br/>
      Your payment has been received successfully and your order is now confirmed.
    `;
    postamble = `
      Our team will soon begin processing your order and further updates will be shared shortly.
    `;
  }

  const content = `
    <div class="greeting">Hello ${custName},</div>
    <div class="message-text">
      ${preamble}
    </div>

    <div class="details-box">
      <div class="details-header">${detailsHeader}</div>
      <div class="details-row">
        <span class="details-label">Name</span>
        <span class="details-value">${custName}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Phone Number</span>
        <span class="details-value">${data.phone || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Product</span>
        <span class="details-value">${data.productType}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Amount Paid</span>
        <span class="details-value">₹${amount}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Payment Status</span>
        <span class="details-value status-success">Successful</span>
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
        <span class="details-label">Date & Time</span>
        <span class="details-value">${currTime}</span>
      </div>
    </div>
    
    <div class="message-text">
      ${postamble}
    </div>

    <div class="message-text" style="margin-top: 30px;">
      Regards,<br/>
      <strong>Organic Mushroom Farm Team</strong>
    </div>
  `;
  
  await transporter.sendMail({
    from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
    to: toEmail,
    subject: subject,
    html: buildEmail(content, isAdmin)
  });
};

export const sendPendingEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const currTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const custName = data.customerName || "Customer";

  const content = `
    <div class="greeting">Hello ${custName},</div>
    <div class="message-text">
      Your payment is currently under verification.
      <br/><br/>
      Sometimes banks or UPI providers may take a few minutes to confirm the transaction status.
      <br/><br/>
      Please avoid making another payment until the current status is updated.
    </div>

    <div class="details-box">
      <div class="details-header">Payment Details</div>
      <div class="details-row">
        <span class="details-label">Name</span>
        <span class="details-value">${custName}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Phone Number</span>
        <span class="details-value">${data.phone || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Product</span>
        <span class="details-value">${data.productType}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Amount</span>
        <span class="details-value">₹${amount}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Payment Status</span>
        <span class="details-value status-pending">Pending</span>
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
        <span class="details-label">Date & Time</span>
        <span class="details-value">${currTime}</span>
      </div>
    </div>

    <div class="message-text">
      Once verification is completed, you will automatically receive another update from us.
    </div>

    <div class="message-text" style="margin-top: 30px;">
      Regards,<br/>
      <strong>Organic Mushroom Farm Team</strong>
    </div>

    <div class="btn-container">
      <a href="https://wa.me/91${WHATSAPP_NUMBER}?text=Hello,%20my%20payment%20is%20pending%20verification%20for%20Order%20${data.orderId}" class="btn-primary">
        WhatsApp Support
      </a>
    </div>
  `;

  await transporter.sendMail({
    from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
    to: toEmail,
    subject: `Payment Verification In Progress 🌱`,
    html: buildEmail(content, isAdmin)
  });
};

export const sendFailedEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const currTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const custName = data.customerName || "Customer";

  const prodMatch = data.productType?.toLowerCase() || '';
  const isTraining = prodMatch.includes("training");
  const isConsultation = prodMatch.includes("consultation");

  let subject = `Your Order Payment Could Not Be Completed 🌱`;
  let preamble = ``;
  let postamble = ``;
  let detailsHeader = `Order Details`;

  if (isTraining) {
    subject = `Your Training Enrollment Is Still Pending 🌱`;
    detailsHeader = `Enrollment Details`;
    preamble = `
      We noticed your training enrollment process could not be completed successfully.
      <br/><br/>
      If the payment was interrupted due to network issues, bank timeout, or accidental cancellation, there is no need to worry.
      <br/><br/>
      Your details are safely saved in our system.
    `;
    postamble = `
      If you still wish to join the training session, our support team will gladly assist you.
    `;
  } else if (isConsultation) {
    subject = `Your Consultation Request Is Incomplete 🌱`;
    detailsHeader = `Booking Details`;
    preamble = `
      Your consultation booking process was interrupted before confirmation.
      <br/><br/>
      If you experienced any issue during payment, our support team is available to assist you personally.
    `;
    postamble = `
      For assistance with your booking, feel free to contact us.
    `;
  } else {
    preamble = `
      Your payment for ${data.productType} could not be completed successfully.
      <br/><br/>
      Possible reasons may include:
      <ul>
        <li>Payment interruption</li>
        <li>Bank timeout</li>
        <li>UPI issue</li>
        <li>Network issue</li>
      </ul>
      <br/>
      Your order request is still safely recorded in our system.
    `;
    postamble = `
      For any help, feel free to contact our support team.
    `;
  }

  const content = `
    <div class="greeting">Hello ${custName},</div>
    <div class="message-text">
      ${preamble}
    </div>

    <div class="details-box">
      <div class="details-header">${detailsHeader}</div>
      <div class="details-row">
        <span class="details-label">Name</span>
        <span class="details-value">${custName}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Phone Number</span>
        <span class="details-value">${data.phone || 'N/A'}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Product</span>
        <span class="details-value">${data.productType}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Amount</span>
        <span class="details-value">₹${amount}</span>
      </div>
      <div class="details-row">
        <span class="details-label">Payment Status</span>
        <span class="details-value status-failed">Failed / Cancelled</span>
      </div>
      <div class="details-row">
        <span class="details-label">Date & Time</span>
        <span class="details-value">${currTime}</span>
      </div>
    </div>

    <div class="message-text">
      ${postamble}
    </div>

    <div class="message-text" style="margin-top: 30px;">
      Regards,<br/>
      <strong>Organic Mushroom Farm Team</strong>
    </div>

    <div class="btn-container">
      <a href="https://wa.me/91${WHATSAPP_NUMBER}?text=Hello,%20I%20need%20help%20with%20my%20incomplete%20payment%20for%20${encodeURIComponent(data.productType)}." class="btn-primary">
        WhatsApp Support
      </a>
    </div>
  `;

  await transporter.sendMail({
    from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
    to: toEmail,
    subject: subject,
    html: buildEmail(content, isAdmin)
  });
};

export const sendAbandonedEmail = async (data: any, toEmail: string, isAdmin = false) => {
  return sendFailedEmail(data, toEmail, isAdmin);
};
