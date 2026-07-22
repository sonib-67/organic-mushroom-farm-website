const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');

// Add /api/repay-order endpoint before // Cancelled payment endpoint
if (!serverCode.includes('/api/repay-order')) {
  const repayEndpoint = `
// Repay Order API
app.post('/api/repay-order', async (req, res) => {
  try {
    const { oldOrderId } = req.body;
    if (!oldOrderId) {
      return res.status(400).json({ error: 'Missing oldOrderId' });
    }

    const docRef = doc(db, 'registrations', oldOrderId);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    const data = docSnap.data();
    if (data.paymentStatus === 'SUCCESS') {
      return res.status(400).json({ error: 'Payment already completed' });
    }

    const { name, mobile, email, productType, amount } = data;
    
    const options = {
      amount: Math.round(Number(amount) * 100), // convert rupees back to paise
      currency: "INR",
      receipt: \`rct_repay_\${Date.now()}\`,
      notes: {
        productType: productType || "",
        customerName: name || "",
        customerEmail: email || "",
        customerPhone: mobile || "",
        repayForOrderId: oldOrderId
      }
    };

    const order = await razorpay.orders.create(options);
    
    res.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: RAZORPAY_KEY_ID,
      name: "Organic Mushrooms Farm",
      description: "Complete your payment",
      prefill: {
        name: name || "",
        email: email || "",
        contact: mobile || ""
      },
      notes: options.notes,
      theme: { color: "#7E22CE" }
    });
  } catch (error) {
    console.error("Repay API Error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Cancelled payment endpoint`;

  serverCode = serverCode.replace('// Cancelled payment endpoint', repayEndpoint);
}

// Update webhook to handle repayForOrderId
if (serverCode.includes('if (payment.order_id) {') && !serverCode.includes('const targetOrderId = notes.repayForOrderId || payment.order_id;')) {
  serverCode = serverCode.replace(
    /if \(payment\.order_id\) \{\s*await setDoc\(doc\(db, 'registrations', payment\.order_id\), \{/g,
    `const targetOrderId = notes.repayForOrderId || payment.order_id;
            if (targetOrderId) {
                await setDoc(doc(db, 'registrations', targetOrderId), {`
  );
  
  // also need to update the training/consultant additions to use targetOrderId if needed,
  // but it's fine if they use payment.order_id because they just store the new order id as reference.
}

fs.writeFileSync('server.ts', serverCode);
console.log("Server patched.");
