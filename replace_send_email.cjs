const fs = require('fs');
let content = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

const newSendUserEmailFunc = `async function sendUserEmail(customerEmail: string, customerName: string, productType: string, amount: string, orderId: string, paymentStatus: 'DONE' | 'FAILED') {
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

    if (productType === "training" || productType === "training_basic") {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Successful! Thank you for your payment of ₹299.<br/><br/>Your enrollment for the Basic Mushroom Cultivation Training is successfully confirmed. We are excited to help you start your mushroom farming journey. Our team will share the training link and schedule with you shortly.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>We noticed that your payment of ₹299 for the Basic Mushroom Cultivation Training was cancelled or could not be completed.<br/><br/>Don't let this pause your learning journey! If you faced any technical issues during checkout, please try again or contact our support team for assistance. We would love to have you in our training.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (productType === "training_advanced") {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Confirmed! Thank you for your payment of ₹699.<br/><br/>Your seat for the Advanced Commercial Cultivation Training is reserved. You have taken a great step towards mastering commercial farming. Our team will send you the access details and next steps very soon.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>It looks like your payment of ₹699 for the Advanced Commercial Cultivation Training was not processed successfully.<br/><br/>Commercial farming requires the right guidance, and we don't want you to miss out! Please attempt the payment again to secure your spot. Let us know if you need any help.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (productType === "workshop") {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Received! Thank you for your payment of ₹199.<br/><br/>You are officially registered for our Organic Mushroom Farming Workshop. We are thrilled to share our premium organic farming secrets with you. Stay tuned for the workshop details!<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>We noticed that your payment attempt of ₹199 for the Organic Mushroom Farming Workshop was cancelled.<br/><br/>Your seat is still waiting for you! If you encountered an error, please try completing the transaction again. Feel free to reach out if you need any support.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (productType === "consultation") {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Successful! Thank you for your payment of ₹59.<br/><br/>Your Expert 1-on-1 Business Consultation is confirmed. Our team will contact you shortly to schedule a convenient date and time for your personalized guidance session.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Your payment of ₹59 for the Expert 1-on-1 Business Consultation could not be completed.<br/><br/>To get personalized, expert guidance for your mushroom business, please try completing your payment again. We are here to help if you face any issues!<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (productType === "site_visit_consultation") {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Confirmed! Thank you for your payment of ₹500 for the On-Site Visit Consultation.<br/><br/>We are looking forward to visiting your farm location to provide a highly optimized setup strategy. Our team will get in touch with you to fix the date and time for the visit.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>We noticed your payment of ₹500 for the On-Site Visit Consultation was cancelled.<br/><br/>An on-ground evaluation is the best way to plan a successful farm. Please retry your payment to book the visit, or contact us directly if you are facing any technical difficulties.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (productType.includes("spawn")) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Received! Your payment for the Mushroom Spawn Purchase has been successfully processed.<br/><br/>We are preparing your high-quality, high-yielding spawn for dispatch. Our dispatch team will share the shipping and tracking details with you shortly.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Your payment for the Mushroom Spawn Purchase was cancelled or declined.<br/><br/>To ensure your farm gets the highest quality seeds on time without any delay, please try checking out again. Let us know if you need any assistance with the transaction!<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (productType.includes("mushroom")) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Successful! Thank you for your payment. Your order for Premium Mushrooms (Fresh/Dry) is confirmed!<br/><br/>We are carefully packing your farm-fresh, organic products. Our team will share the delivery updates and tracking information with you very soon.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>We noticed that your payment for the Fresh/Dry Mushroom Purchase was cancelled.<br/><br/>Your premium organic mushrooms are waiting in the cart! Please retry the payment to complete your order. If you are facing any technical issues, we are just a message away.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else {
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
}`;

content = content.replace(/async function sendUserEmail[\s\S]*?async function sendToFormspree/, newSendUserEmailFunc + "\n\nasync function sendToFormspree");

fs.writeFileSync('api/razorpay-webhook.ts', content);
console.log("Patched sendUserEmail successfully");
