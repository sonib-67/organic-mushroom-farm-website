const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const paymentRoutes = `
app.post('/api/payment-initiate', async (req, res) => {
  try {
    const { name, email, phone, productType, amount, preferredDate } = req.body;
    const orderId = 'ORD-' + crypto.randomBytes(5).toString('hex').toUpperCase();

    // 1. Save to Firebase
    const orderRef = doc(collection(db, 'orders'), orderId);
    await setDoc(orderRef, {
      orderId,
      name: name || '',
      email: email || '',
      phone: phone || '',
      productType: productType || '',
      amount: amount || 0,
      preferredDate: preferredDate || '',
      status: 'PENDING',
      reminderSent: false,
      createdAt: Date.now()
    });

    // 2. Email Admin
    const extraHtml = \`
      <table class="details-table">
        <tr><td>Customer Name:</td><td>\${name || 'N/A'}</td></tr>
        <tr><td>Email:</td><td>\${email || 'N/A'}</td></tr>
        <tr><td>Phone:</td><td>\${phone || 'N/A'}</td></tr>
        <tr><td>Product/Service:</td><td>\${productType || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. \${amount || 0}</td></tr>
        <tr><td>Status:</td><td>PENDING</td></tr>
      </table>
    \`;

    const adminHtml = getLiquidTemplate(
      'New Payment Initiated (Pending)',
      'A customer has initiated a payment on the website. Status is currently PENDING.',
      orderId,
      extraHtml
    );

    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: \`Payment Initiated [\${orderId}]\`,
      html: adminHtml
    });

    res.status(200).json({ success: true, orderId });
  } catch (error) {
    console.error('Payment Initiate Error:', error);
    res.status(500).json({ error: 'Failed to initiate payment simulation' });
  }
});

app.post('/api/payment-cancel', async (req, res) => {
  try {
    const { orderId } = req.body;
    if (!orderId) return res.status(400).json({ error: 'orderId is required' });

    const orderRef = doc(db, 'orders', orderId);
    const orderSnap = await getDoc(orderRef);

    if (!orderSnap.exists()) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const orderData = orderSnap.data();

    // Update status
    await setDoc(orderRef, { status: 'CANCELLED', updatedAt: Date.now() }, { merge: true });

    // Generate PDF
    const pdfBuffer = await generateInvoicePDF(orderData, 'CANCELLED');

    const extraHtml = \`
      <table class="details-table">
        <tr><td>Order ID:</td><td>\${orderId}</td></tr>
        <tr><td>Customer Name:</td><td>\${orderData.name || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. \${orderData.amount || 0}</td></tr>
        <tr><td>Status:</td><td><strong style="color:#d32f2f;">CANCELLED</strong></td></tr>
      </table>
    \`;

    const emailHtml = getLiquidTemplate(
      'Payment Cancelled',
      'The payment for the following order was cancelled. Please find the cancelled invoice attached.',
      orderId,
      extraHtml
    );

    const attachments = [{
      filename: \`Cancelled_Invoice_\${orderId}.pdf\`,
      content: pdfBuffer,
      contentType: 'application/pdf'
    }];

    // Email Admin
    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: \`Payment Cancelled [\${orderId}]\`,
      html: emailHtml,
      attachments
    });

    // Email Customer
    if (orderData.email) {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: orderData.email,
        replyTo: REPLY_TO,
        subject: \`Payment Cancelled - Order \${orderId}\`,
        html: emailHtml,
        attachments
      });
    }

    res.status(200).json({ success: true, orderId });
  } catch (error) {
    console.error('Payment Cancel Error:', error);
    res.status(500).json({ error: 'Failed to process cancellation' });
  }
});

app.post('/api/payment-success', async (req, res) => {
  try {
    const { orderId } = req.body;
    if (!orderId) return res.status(400).json({ error: 'orderId is required' });

    const orderRef = doc(db, 'orders', orderId);
    const orderSnap = await getDoc(orderRef);

    if (!orderSnap.exists()) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const orderData = orderSnap.data();

    // Update status
    await setDoc(orderRef, { status: 'SUCCESS', updatedAt: Date.now() }, { merge: true });

    // Generate PDF
    const pdfBuffer = await generateInvoicePDF(orderData, 'SUCCESS');

    const extraHtml = \`
      <table class="details-table">
        <tr><td>Order ID:</td><td>\${orderId}</td></tr>
        <tr><td>Customer Name:</td><td>\${orderData.name || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. \${orderData.amount || 0}</td></tr>
        <tr><td>Status:</td><td><strong style="color:#2e7d32;">SUCCESS</strong></td></tr>
      </table>
    \`;

    const adminHtml = getLiquidTemplate(
      'Payment Successful',
      'A payment has been successfully received. Please find the tax invoice attached.',
      orderId,
      extraHtml
    );

    const customerHtml = getLiquidTemplate(
      'Payment Successful - Thank You',
      \`Dear \${orderData.name || 'Customer'},<br/><br/>Your payment has been successfully processed. Please find your official tax invoice attached to this email.\`,
      orderId,
      extraHtml
    );

    const attachments = [{
      filename: \`Tax_Invoice_\${orderId}.pdf\`,
      content: pdfBuffer,
      contentType: 'application/pdf'
    }];

    // Email Admin
    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: \`Payment Success [\${orderId}]\`,
      html: adminHtml,
      attachments
    });

    // Email Customer
    if (orderData.email) {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: orderData.email,
        replyTo: REPLY_TO,
        subject: \`Payment Receipt & Invoice - Order \${orderId}\`,
        html: customerHtml,
        attachments
      });
    }

    res.status(200).json({ success: true, orderId });
  } catch (error) {
    console.error('Payment Success Error:', error);
    res.status(500).json({ error: 'Failed to process successful payment' });
  }
});
`;

content = content.replace("app.post('/api/create-order', async (req, res) => {", paymentRoutes + "\napp.post('/api/create-order', async (req, res) => {");

fs.writeFileSync('server.ts', content);
