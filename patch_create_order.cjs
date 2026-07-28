const fs = require('fs');
let content = fs.readFileSync('api/create-order.ts', 'utf8');

// Add back admin notification for initiated orders
const adminInitiateFunc = `
    // Send initiated email to admin only
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
          pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
        },
      });
      await transporter.sendMail({
        from: \`"Organic Mushroom Farm" <\${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>\`,
        to: "organicmushroomsfarms@gmail.com",
        subject: \`Payment INITIATED: \${purpose}\`,
        html: \`
          <h2>Checkout Initiated</h2>
          <p><strong>Customer:</strong> \${name || 'N/A'}</p>
          <p><strong>Email:</strong> \${email || 'N/A'}</p>
          <p><strong>Phone:</strong> \${mobile || 'N/A'}</p>
          <p><strong>Product:</strong> \${purpose}</p>
          <p><strong>Amount:</strong> ₹\${amount / 100}</p>
          <p><strong>Order ID:</strong> \${order.id}</p>
          <p>The user has reached the Razorpay popup. Waiting for capture.</p>
        \`
      });
      console.log("Admin initiation email sent.");
    } catch (emailError) {
      console.error("Failed to send initiation email to admin:", emailError);
    }
`;

if (!content.includes('// Send initiated email to admin only')) {
  content = content.replace(
    /const order = await razorpay\.orders\.create\(options\);/,
    "const order = await razorpay.orders.create(options);\n" + adminInitiateFunc
  );
  fs.writeFileSync('api/create-order.ts', content);
  console.log("Added admin initiation email back.");
} else {
  console.log("Admin initiation email already exists.");
}
