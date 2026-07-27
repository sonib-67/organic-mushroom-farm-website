const fs = require('fs');
let content = fs.readFileSync('api/create-order.ts', 'utf8');

if (!content.includes("import nodemailer")) {
  content = content.replace("import crypto from 'crypto';", "import crypto from 'crypto';\nimport nodemailer from 'nodemailer';");
}

const sendMailLogic = `
    const options = {
      amount: amount, 
      currency: "INR",
      receipt: \`rct_\${Date.now()}\`,
      notes: {
        productType: productType || "unknown",
        customerName: name || "",
        customerEmail: email || "",
        customerPhone: mobile || "",
        preferredDate: preferredDate || "",
        clientIp: clientIp.split(',')[0],
        userAgent: userAgent.substring(0, 200)
      }
    };
    const order = await razorpay.orders.create(options);

    // Send initiated email to admin only
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
          pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        to: "organicmushroomsfarms@gmail.com",
        subject: \`Payment Initiated: \${purpose} (\${amount / 100} INR)\`,
        html: \`
          <h2>Payment Initiated</h2>
          <p><strong>Name:</strong> \${name || "N/A"}</p>
          <p><strong>Email:</strong> \${email || "N/A"}</p>
          <p><strong>Phone:</strong> \${mobile || "N/A"}</p>
          <p><strong>Purpose:</strong> \${purpose}</p>
          <p><strong>Amount:</strong> \${amount / 100} INR</p>
          <p><strong>Order ID:</strong> \${order.id}</p>
          <p><strong>Time:</strong> \${new Date().toLocaleString()}</p>
        \`,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Failed to send initiation email to admin:", emailError);
    }
`;

content = content.replace(/    const options = \{[\s\S]*?const order = await razorpay\.orders\.create\(options\);/, sendMailLogic);

fs.writeFileSync('api/create-order.ts', content);
console.log("Patched api/create-order.ts successfully");
