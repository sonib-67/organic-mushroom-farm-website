import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: "training@mushroomtraining.online",
    pass: "Sonib491@",
  },
});

const APP_NAME = "Organic Mushroom Farm";
const SUPPORT_EMAIL = "training@mushroomtraining.online";

// Email configuration constants
const EMAIL_STYLES = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #1a1a1a;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }
  .header {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    padding: 30px;
    text-align: center;
    color: white;
  }
  .header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
  }
  .content {
    padding: 40px 30px;
  }
  .footer {
    background-color: #f8fafc;
    padding: 20px 30px;
    text-align: center;
    font-size: 13px;
    color: #64748b;
    border-top: 1px solid #e2e8f0;
  }
  .status-badge {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .status-success { background-color: #d1fae5; color: #065f46; }
  .status-failed { background-color: #fee2e2; color: #991b1b; }
  .status-pending { background-color: #fef3c7; color: #92400e; }
  .details-box {
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid #e2e8f0;
  }
  .details-row {
    margin-bottom: 10px;
  }
  .details-row strong {
    color: #475569;
    min-width: 120px;
    display: inline-block;
  }
  .additional-info {
    font-size: 14px;
    color: #334155;
    background-color: #f0fdf9;
    padding: 15px;
    border-left: 4px solid #10b981;
    margin-top: 20px;
  }
  .admin-badge {
    background-color: #475569;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    display: table;
    margin: 0 auto;
  }
`;

function buildHtmlTemplate(title: string, content: string, details: string, showAdditionalInfoForProduct?: string, isAdmin: boolean = false) {
  let additionalInfo = "";
  if (showAdditionalInfoForProduct) {
    if (showAdditionalInfoForProduct.toLowerCase().includes("training")) {
      additionalInfo = "<strong>Next Steps:</strong> Training access and webinar details will be shared shortly.";
    } else if (showAdditionalInfoForProduct.toLowerCase().includes("consultation")) {
      additionalInfo = "<strong>Next Steps:</strong> Our consultation team will contact you soon.";
    } else if (showAdditionalInfoForProduct.toLowerCase().includes("spawn")) {
      additionalInfo = "<strong>Next Steps:</strong> Your spawn order has been confirmed successfully.";
    } else if (showAdditionalInfoForProduct.toLowerCase().includes("fresh")) {
      additionalInfo = "<strong>Next Steps:</strong> Your order has been received and is being processed.";
    } else if (showAdditionalInfoForProduct.toLowerCase().includes("dry")) {
      additionalInfo = "<strong>Next Steps:</strong> Your order has been received and dispatch details will be shared shortly.";
    }
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${EMAIL_STYLES}</style>
    </head>
    <body style="background-color: #f1f5f9; padding: 40px 20px;">
      <div class="container">
        <div class="header">
          ${isAdmin ? '<div class="admin-badge">ADMIN ALERT</div><br/>' : ''}
          <h1>🌱 ${APP_NAME}</h1>
        </div>
        <div class="content">
          ${content}
          
          <div class="details-box">
            ${details}
          </div>
          
          ${additionalInfo ? `<div class="additional-info">${additionalInfo}</div>` : ''}

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://wa.me/919203544140?text=Hi,%20I%20need%20help%20with%20my%20order" style="display: inline-block; padding: 12px 24px; background-color: #25D366; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 15px;">Contact Support on WhatsApp</a>
          </div>
          
          <p style="margin-top: 30px; font-size: 14px; color: #64748b;">
            If you need any help, feel free to contact us.<br/><br/>
            Regards,<br/>
            ${APP_NAME} Team<br/>
            <a href="mailto:${SUPPORT_EMAIL}" style="color: #10b981; text-decoration: none;">${SUPPORT_EMAIL}</a>
          </p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} ${APP_NAME}. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
}

export const sendSuccessEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const content = `
    <div class="status-badge status-success">✅ Payment Successful</div>
    <p>Hello ${data.customerName || (isAdmin ? "Admin" : "Customer")},</p>
    ${!isAdmin ? `<p>Thank you for choosing ${APP_NAME} 🌱</p><p>Your payment has been successfully received.</p>` : `<p>A new payment has been successfully captured.</p>`}
  `;

  const details = `
    <div class="details-row"><strong>Product:</strong> ${data.productType}</div>
    <div class="details-row"><strong>Amount Paid:</strong> ₹${amount}</div>
    <div class="details-row"><strong>Payment Status:</strong> Successful</div>
    <div class="details-row"><strong>Payment ID:</strong> ${data.paymentId}</div>
    <div class="details-row"><strong>Order ID:</strong> ${data.orderId || 'N/A'}</div>
    ${data.invoiceId ? `<div class="details-row"><strong>Invoice ID:</strong> ${data.invoiceId}</div>` : ''}
    ${isAdmin ? `<div class="details-row"><strong>Customer Name:</strong> ${data.customerName}</div>
    <div class="details-row"><strong>Phone:</strong> ${data.phone || 'N/A'}</div>
    <div class="details-row"><strong>Email:</strong> ${data.email || 'N/A'}</div>` : ''}
  `;

  const html = buildHtmlTemplate(
    "Payment Successful",
    content,
    details,
    !isAdmin ? data.productType : undefined,
    isAdmin
  );

  const subject = isAdmin ? `[SUCCESS] Payment Received - ${data.productType} (₹${amount})` : `Payment Successful - ${APP_NAME}`;

  await transporter.sendMail({
    from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
    to: toEmail,
    subject: subject,
    html: html
  });
};

export const sendFailedEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const content = `
    <div class="status-badge status-failed">❌ Payment Failed</div>
    <p>Hello ${data.customerName || (isAdmin ? "Admin" : "Customer")},</p>
    ${!isAdmin ? `<p>We could not complete your payment for <strong>${data.productType}</strong>.</p><p>Please try again. If the issue continues, contact our support team.</p>` : `<p>A payment has failed for <strong>${data.productType}</strong>.</p>`}
  `;

  const details = `
    <div class="details-row"><strong>Product:</strong> ${data.productType}</div>
    <div class="details-row"><strong>Amount:</strong> ₹${amount}</div>
    <div class="details-row"><strong>Payment Status:</strong> Failed</div>
    <div class="details-row"><strong>Payment ID:</strong> ${data.paymentId}</div>
    <div class="details-row"><strong>Order ID:</strong> ${data.orderId || 'N/A'}</div>
    ${isAdmin ? `<div class="details-row"><strong>Customer Name:</strong> ${data.customerName}</div>
    <div class="details-row"><strong>Phone:</strong> ${data.phone || 'N/A'}</div>
    <div class="details-row"><strong>Email:</strong> ${data.email || 'N/A'}</div>` : ''}
  `;

  const html = buildHtmlTemplate(
    "Payment Failed",
    content,
    details,
    undefined,
    isAdmin
  );

  const subject = isAdmin ? `[FAILED] Payment Failure - ${data.productType} (₹${amount})` : `Payment Failed - ${APP_NAME}`;

  await transporter.sendMail({
    from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
    to: toEmail,
    subject: subject,
    html: html
  });
};

export const sendPendingEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  const content = `
    <div class="status-badge status-pending">⏳ Payment Pending Verification</div>
    <p>Hello ${data.customerName || (isAdmin ? "Admin" : "Customer")},</p>
    ${!isAdmin ? `<p>Your payment for <strong>${data.productType}</strong> is currently under verification.</p><p>Please wait a few minutes. Our system will automatically update once the payment is confirmed.</p>` : `<p>A payment is pending verification for <strong>${data.productType}</strong>.</p>`}
  `;

  const details = `
    <div class="details-row"><strong>Product:</strong> ${data.productType}</div>
    <div class="details-row"><strong>Amount:</strong> ₹${amount}</div>
    <div class="details-row"><strong>Payment Status:</strong> Pending</div>
    <div class="details-row"><strong>Payment ID:</strong> ${data.paymentId}</div>
    <div class="details-row"><strong>Order ID:</strong> ${data.orderId || 'N/A'}</div>
    ${isAdmin ? `<div class="details-row"><strong>Customer Name:</strong> ${data.customerName}</div>
    <div class="details-row"><strong>Phone:</strong> ${data.phone || 'N/A'}</div>
    <div class="details-row"><strong>Email:</strong> ${data.email || 'N/A'}</div>` : ''}
  `;

  const html = buildHtmlTemplate(
    "Payment Pending Verification",
    content,
    details,
    undefined,
    isAdmin
  );

  const subject = isAdmin ? `[PENDING] Payment Pending - ${data.productType} (₹${amount})` : `Payment Pending Verification - ${APP_NAME}`;

  await transporter.sendMail({
    from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
    to: toEmail,
    subject: subject,
    html: html
  });
};

export const sendAbandonedEmail = async (data: any, toEmail: string, isAdmin = false) => {
  const amount = data.amount / 100;
  
  if (isAdmin) {
    const content = `
      <div class="status-badge status-pending">⚠️ Checkout Abandoned</div>
      <p>Hello Admin,</p>
      <p>A customer started checkout for <strong>${data.productType}</strong> but didn't complete the payment.</p>
    `;

    const details = `
      <div class="details-row"><strong>Product:</strong> ${data.productType}</div>
      <div class="details-row"><strong>Amount:</strong> ₹${amount}</div>
      <div class="details-row"><strong>Customer Name:</strong> ${data.customerName}</div>
      <div class="details-row"><strong>Phone:</strong> ${data.phone || 'N/A'}</div>
      <div class="details-row"><strong>Email:</strong> ${data.email || 'N/A'}</div>
    `;

    const html = buildHtmlTemplate("Abandoned Checkout", content, details, undefined, true);

    await transporter.sendMail({
      from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
      to: toEmail,
      subject: `[ABANDONED] Checkout - ${data.productType}`,
      html: html
    });
  } else {
    const content = `
      <div class="status-badge status-pending">⚠️ Complete Your Purchase</div>
      <p>Hello ${data.customerName},</p>
      <p>We noticed you didn't complete your payment for <strong>${data.productType}</strong>.</p>
      <p>If you faced any issues during payment, please feel free to reach out to our support team.</p>
      <div style="text-align: center; margin-top: 30px;">
        <a href="https://wa.me/919203544140?text=Hi,%20I%20had%20trouble%20completing%20my%20payment%20for%20${encodeURIComponent(data.productType)}" style="display: inline-block; padding: 12px 24px; background-color: #25D366; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 15px;">Contact Support on WhatsApp</a>
      </div>
    `;

    const details = `
      <div class="details-row"><strong>Product:</strong> ${data.productType}</div>
      <div class="details-row"><strong>Amount:</strong> ₹${amount}</div>
    `;

    const html = buildHtmlTemplate("Complete Your Purchase", content, details, undefined, false);

    await transporter.sendMail({
      from: `"${APP_NAME}" <${SUPPORT_EMAIL}>`,
      to: toEmail,
      subject: `Complete your purchase - ${data.productType}`,
      html: html
    });
  }
};
