const fs = require('fs');
let content = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

if (!content.includes("import nodemailer")) {
  content = content.replace("import crypto from 'crypto';", "import crypto from 'crypto';\nimport nodemailer from 'nodemailer';");
}

const sendUserEmailFunc = `
async function sendUserEmail(customerEmail: string, customerName: string, productType: string, amount: string, orderId: string, paymentStatus: 'DONE' | 'FAILED') {
  if (!customerEmail) return;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
      },
    });

    let subject = "";
    let htmlBody = "";

    if (paymentStatus === 'DONE') {
      subject = \`Payment Successful - Organic Mushroom Farm\`;
      htmlBody = \`
        <h2>Payment Successful</h2>
        <p>Hi \${customerName},</p>
        <p>Your payment for <strong>\${productType}</strong> was successful.</p>
        <p><strong>Amount:</strong> \${amount}</p>
        <p><strong>Order ID:</strong> \${orderId}</p>
        <p>Thank you for choosing Organic Mushroom Farm. We will get in touch with you shortly.</p>
        <br/>
        <p>Warm regards,<br/>Organic Mushroom Farm Team</p>
      \`;
    } else {
      subject = \`Payment Failed/Cancelled - Organic Mushroom Farm\`;
      htmlBody = \`
        <h2>Payment Failed/Cancelled</h2>
        <p>Hi \${customerName},</p>
        <p>Your payment for <strong>\${productType}</strong> could not be completed or was cancelled.</p>
        <p><strong>Amount:</strong> \${amount}</p>
        <p><strong>Order ID:</strong> \${orderId}</p>
        <p>If money was deducted from your account, it will be automatically refunded by your bank.</p>
        <p>Please try again or contact us if you need help.</p>
        <br/>
        <p>Warm regards,<br/>Organic Mushroom Farm Team</p>
      \`;
    }

    const mailOptions = {
      from: \`"Organic Mushroom Farm" <\${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>\`,
      to: customerEmail,
      subject: subject,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);
    console.log(\`[Nodemailer] User email sent for \${paymentStatus}\`);
  } catch (err) {
    console.error("[Nodemailer] Failed to send user email:", err);
  }
}
`;

if (!content.includes("sendUserEmail(")) {
  content = content.replace("async function sendToFormspree", sendUserEmailFunc + "\nasync function sendToFormspree");
  
  content = content.replace(
    /await sendToFormspree\(\{([\s\S]*?)paymentStatus: 'DONE'([\s\S]*?)\}\);/,
    `await sendToFormspree({$1paymentStatus: 'DONE'$2});\n        await sendUserEmail(customerEmail, customerName, productType, amountStr, payment.order_id || '', 'DONE');`
  );

  content = content.replace(
    /await sendToFormspree\(\{([\s\S]*?)paymentStatus: 'FAILED'([\s\S]*?)\}\);/,
    `await sendToFormspree({$1paymentStatus: 'FAILED'$2});\n        await sendUserEmail(customerEmail, customerName, productType, amountStr, payment.order_id || '', 'FAILED');`
  );
  
  fs.writeFileSync('api/razorpay-webhook.ts', content);
  console.log("Patched api/razorpay-webhook.ts successfully");
} else {
  console.log("Already patched");
}
