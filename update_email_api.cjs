const fs = require('fs');

let code = fs.readFileSync('app/api/training-email/route.ts', 'utf8');

const newAction = `
    // 4. PAYMENT_COMPLETED (Admin Only) - When Razorpay is successful before registration form
    if (action === 'PAYMENT_COMPLETED') {
      const rows = \`
        <tr><td style="\${rowStyle} \${labelStyle}">Customer Name:</td><td style="\${rowStyle} \${valueStyle}">\${data.name}</td></tr>
        <tr><td style="\${rowStyle} \${labelStyle}">Email:</td><td style="\${rowStyle} \${valueStyle}"><a href="mailto:\${data.email}" style="color: #60a5fa;">\${data.email}</a></td></tr>
        <tr><td style="\${rowStyle} \${labelStyle}">Mobile / Phone:</td><td style="\${rowStyle} \${valueStyle}">\${data.phone}</td></tr>
        <tr><td style="\${rowStyle} \${labelStyle}">Training Plan:</td><td style="\${rowStyle} \${valueStyle} color: #c084fc;">\${data.trainingName}</td></tr>
        <tr><td style="\${rowStyle} \${labelStyle}">Amount:</td><td style="\${rowStyle} \${highlightStyle}">\${data.price}</td></tr>
        <tr><td style="\${rowStyle} \${labelStyle}">Payment ID:</td><td style="\${rowStyle} \${valueStyle} color: #10b981;">\${data.paymentId}</td></tr>
        <tr><td style="\${rowStyle} \${labelStyle}">Time (IST):</td><td style="\${rowStyle} \${valueStyle}">\${currentTime}</td></tr>
      \`;

      const adminMailOptions = {
        from: \`"Training Alert" <\${user}>\`,
        to: adminEmail,
        subject: \`💳 [PAID] Payment Received - \${data.name}\`,
        html: adminHtmlStyle('💳 Payment Completed!', '#3b82f6', \`User successfully paid for \${data.trainingName}, pending registration form submission.\`, rows),
      };

      await transporter.sendMail(adminMailOptions);
      return NextResponse.json({ success: true });
    }
`;

// Insert it just before `return NextResponse.json({ error: 'Invalid action' }, { status: 400 });`
code = code.replace(
  "return NextResponse.json({ error: 'Invalid action' }, { status: 400 });",
  newAction + "\n    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });"
);

fs.writeFileSync('app/api/training-email/route.ts', code);
