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

    // Normalize product type checking
    const normalizedProductType = productType ? productType.toLowerCase() : "";
    
    // Always fall back to a good default if it's undefined or unknown
    let isBasic = normalizedProductType.includes("basic") || productType === "training" || productType === "training_basic";
    let isAdvanced = normalizedProductType.includes("advanced") || productType === "training_advanced";
    let isWorkshop = normalizedProductType.includes("workshop");
    let isConsultation = normalizedProductType.includes("1-on-1") || productType === "consultation" || normalizedProductType.includes("expert");
    let isSiteVisit = normalizedProductType.includes("site visit") || productType === "site_visit_consultation";
    let isSpawn = normalizedProductType.includes("spawn");
    let isFreshDry = normalizedProductType.includes("mushroom") && !isBasic && !isAdvanced && !isWorkshop;

    // If it's literally just 'training' or 'unknown' and the amount is 699, it's advanced
    if (amount.includes("699")) isAdvanced = true;
    if (amount.includes("299")) isBasic = true;
    if (amount.includes("199")) isWorkshop = true;
    if (amount.includes("59")) isConsultation = true;
    if (amount.includes("500")) isSiteVisit = true;
    
    if (isBasic) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Successful! Thank you for your payment of ₹299.<br/><br/>Your enrollment for the Basic Mushroom Cultivation Training is successfully confirmed. We are excited to help you start your mushroom farming journey. Our team will share the training link and schedule with you shortly.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>We noticed that your payment of ₹299 for the Basic Mushroom Cultivation Training was cancelled or could not be completed.<br/><br/>Don't let this pause your learning journey! If you faced any technical issues during checkout, please try again or contact our support team for assistance. We would love to have you in our training.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (isAdvanced) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Confirmed! Thank you for your payment of ₹699.<br/><br/>Your seat for the Advanced Commercial Cultivation Training is reserved. You have taken a great step towards mastering commercial farming. Our team will send you the access details and next steps very soon.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>It looks like your payment of ₹699 for the Advanced Commercial Cultivation Training was not processed successfully.<br/><br/>Commercial farming requires the right guidance, and we don't want you to miss out! Please attempt the payment again to secure your spot. Let us know if you need any help.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (isWorkshop) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Received! Thank you for your payment of ₹199.<br/><br/>You are officially registered for our Organic Mushroom Farming Workshop. We are thrilled to share our premium organic farming secrets with you. Stay tuned for the workshop details!<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>We noticed that your payment attempt of ₹199 for the Organic Mushroom Farming Workshop was cancelled.<br/><br/>Your seat is still waiting for you! If you encountered an error, please try completing the transaction again. Feel free to reach out if you need any support.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (isConsultation) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Successful! Thank you for your payment of ₹59.<br/><br/>Your Expert 1-on-1 Business Consultation is confirmed. Our team will contact you shortly to schedule a convenient date and time for your personalized guidance session.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Your payment of ₹59 for the Expert 1-on-1 Business Consultation could not be completed.<br/><br/>To get personalized, expert guidance for your mushroom business, please try completing your payment again. We are here to help if you face any issues!<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (isSiteVisit) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Confirmed! Thank you for your payment of ₹500 for the On-Site Visit Consultation.<br/><br/>We are looking forward to visiting your farm location to provide a highly optimized setup strategy. Our team will get in touch with you to fix the date and time for the visit.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>We noticed your payment of ₹500 for the On-Site Visit Consultation was cancelled.<br/><br/>An on-ground evaluation is the best way to plan a successful farm. Please retry your payment to book the visit, or contact us directly if you are facing any technical difficulties.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (isSpawn) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Payment Received! Your payment for the Mushroom Spawn Purchase has been successfully processed.<br/><br/>We are preparing your high-quality, high-yielding spawn for dispatch. Our dispatch team will share the shipping and tracking details with you shortly.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = \`Hi \${customerName},<br/><br/>Your payment for the Mushroom Spawn Purchase was cancelled or declined.<br/><br/>To ensure your farm gets the highest quality seeds on time without any delay, please try checking out again. Let us know if you need any assistance with the transaction!<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else {
      // Completely new fallback message so user knows it's the NEW code
      if (paymentStatus === 'DONE') {
        subject = \`Payment Received - Organic Mushroom Farm\`;
        htmlBody = \`
          <h2>Payment Received!</h2>
          <p>Hi \${customerName},</p>
          <p>Great news! Your payment for <strong>\${productType}</strong> was successfully processed.</p>
          <p><strong>Amount Paid:</strong> \${amount}</p>
          <p><strong>Transaction ID:</strong> \${orderId}</p>
          <p>We are processing your order and will contact you shortly with the next steps.</p>
          <br/>
          <p>Warm regards,<br/>Organic Mushroom Farm Team</p>
        \`;
      } else {
        subject = \`Payment Cancelled/Failed - Organic Mushroom Farm\`;
        htmlBody = \`
          <h2>Payment Action Required</h2>
          <p>Hi \${customerName},</p>
          <p>We noticed your payment for <strong>\${productType}</strong> (Amount: \${amount}) could not be completed.</p>
          <p><strong>Transaction ID:</strong> \${orderId}</p>
          <p>If you faced any technical issues, please try checking out again on our website. Any deducted amount will be refunded by your bank automatically.</p>
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
console.log("Patched api/razorpay-webhook.ts again successfully");
