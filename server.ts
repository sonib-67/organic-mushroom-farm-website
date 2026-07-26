import express from 'express';
import cors from 'cors';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import geoip from 'geoip-lite';

import { transporter, MAIL_FROM, REPLY_TO, getLiquidTemplate } from './api/_utils/mailer';
import { generateInvoicePDF } from './api/_utils/pdf';


// Firebase imports for backend writes
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-xRGrHfCUi1BGxE1ewXbmEwuvn54UDH4",
  authDomain: "nic-mushrooom-farm.firebaseapp.com",
  projectId: "nic-mushrooom-farm",
  storageBucket: "nic-mushrooom-farm.firebasestorage.app",
  messagingSenderId: "541611352556",
  appId: "1:541611352556:web:597e7c729a169decbda0c9"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const app = express();
const PORT = 3000;

app.use(cors());

// Global SEO Header
app.use((req, res, next) => {
  if (req.path.startsWith('/payment-cancelled') || req.path.startsWith('/payment-success')) {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  } else {
    res.setHeader('X-Robots-Tag', 'index, follow');
  }
  next();
});

// Ahrefs Verification Endpoint
app.get('/ahrefs_d48267d7b8ee00a28f8051d5992c2cfd9373b8971e22a50f65b1829eae808130', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('d48267d7b8ee00a28f8051d5992c2cfd9373b8971e22a50f65b1829eae808130');
});

// Google AdSense ads.txt Endpoint
app.get('/ads.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('google.com, pub-8976157136173429, DIRECT, f08c47fec0942fa0');
});

// Webhook endpoint needs raw body for signature verification
app.use('/api/razorpay-webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

// Secrets 
// Safe default initialization or env logic
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_live_Ssg7Eepps3J0ch";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "97qz8ls18Y1M4Vzuj1TCX9Ss";
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "Sonib491@";

async function sendToFormspree(payload: {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderId: string;
  paymentId: string;
  amount: string;
  productType: string;
  paymentStatus: 'DONE' | 'FAILED';
}) {
  try {
    const response = await fetch('https://formspree.io/f/mwvazwnl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        subject: `Payment ${payload.paymentStatus}: ${payload.productType} (${payload.amount})`,
        name: payload.customerName,
        email: payload.customerEmail,
        phone: payload.customerPhone,
        orderId: payload.orderId,
        paymentId: payload.paymentId,
        amount: payload.amount,
        productType: payload.productType,
        paymentStatus: payload.paymentStatus,
        dateTime: new Date().toLocaleString()
      })
    });
    if (!response.ok) {
      console.error("[Formspree] Error:", await response.text());
    } else {
      console.log("[Formspree] Notification sent successfully");
    }
  } catch (err) {
    console.error("[Formspree] Failed to send:", err);
  }
}

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

// Create Order API

app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, email, phone, message, subject } = req.body;
    const ticketId = 'TKT-' + crypto.randomBytes(4).toString('hex').toUpperCase();

    const extraHtml = `
      <table class="details-table">
        <tr><td>Name:</td><td>${name || 'N/A'}</td></tr>
        <tr><td>Email:</td><td>${email || 'N/A'}</td></tr>
        <tr><td>Phone:</td><td>${phone || 'N/A'}</td></tr>
        <tr><td>Subject:</td><td>${subject || 'General Enquiry'}</td></tr>
        <tr><td>Message:</td><td>${message || 'N/A'}</td></tr>
      </table>
    `;

    const adminHtml = getLiquidTemplate(
      'New Enquiry Received',
      'A new enquiry has been submitted on the website.',
      ticketId,
      extraHtml
    );

    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: `New Enquiry [${ticketId}] - ${subject || 'Website'}`,
      html: adminHtml
    });

    if (email) {
      const customerHtml = getLiquidTemplate(
        'Thank You for Your Enquiry',
        `Dear ${name || 'Customer'},<br/><br/>We have received your enquiry and our team will get back to you shortly. Below is a copy of your submitted details for your reference.`,
        ticketId,
        extraHtml
      );

      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        replyTo: REPLY_TO,
        subject: `Enquiry Received - Ticket ${ticketId}`,
        html: customerHtml
      });
    }

    res.status(200).json({ success: true, ticketId });
  } catch (error) {
    console.error('Enquiry Error:', error);
    res.status(500).json({ error: 'Failed to submit enquiry' });
  }
});


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
    const extraHtml = `
      <table class="details-table">
        <tr><td>Customer Name:</td><td>${name || 'N/A'}</td></tr>
        <tr><td>Email:</td><td>${email || 'N/A'}</td></tr>
        <tr><td>Phone:</td><td>${phone || 'N/A'}</td></tr>
        <tr><td>Product/Service:</td><td>${productType || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. ${amount || 0}</td></tr>
        <tr><td>Status:</td><td>PENDING</td></tr>
      </table>
    `;

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
      subject: `Payment Initiated [${orderId}]`,
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

    const extraHtml = `
      <table class="details-table">
        <tr><td>Order ID:</td><td>${orderId}</td></tr>
        <tr><td>Customer Name:</td><td>${orderData.name || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. ${orderData.amount || 0}</td></tr>
        <tr><td>Status:</td><td><strong style="color:#d32f2f;">CANCELLED</strong></td></tr>
      </table>
    `;

    const emailHtml = getLiquidTemplate(
      'Payment Cancelled',
      'The payment for the following order was cancelled. Please find the cancelled invoice attached.',
      orderId,
      extraHtml
    );

    const attachments = [{
      filename: `Cancelled_Invoice_${orderId}.pdf`,
      content: pdfBuffer,
      contentType: 'application/pdf'
    }];

    // Email Admin
    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: `Payment Cancelled [${orderId}]`,
      html: emailHtml,
      attachments
    });

    // Email Customer
    if (orderData.email) {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: orderData.email,
        replyTo: REPLY_TO,
        subject: `Payment Cancelled - Order ${orderId}`,
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

    const extraHtml = `
      <table class="details-table">
        <tr><td>Order ID:</td><td>${orderId}</td></tr>
        <tr><td>Customer Name:</td><td>${orderData.name || 'N/A'}</td></tr>
        <tr><td>Amount:</td><td>Rs. ${orderData.amount || 0}</td></tr>
        <tr><td>Status:</td><td><strong style="color:#2e7d32;">SUCCESS</strong></td></tr>
      </table>
    `;

    const adminHtml = getLiquidTemplate(
      'Payment Successful',
      'A payment has been successfully received. Please find the tax invoice attached.',
      orderId,
      extraHtml
    );

    const customerHtml = getLiquidTemplate(
      'Payment Successful - Thank You',
      `Dear ${orderData.name || 'Customer'},<br/><br/>Your payment has been successfully processed. Please find your official tax invoice attached to this email.`,
      orderId,
      extraHtml
    );

    const attachments = [{
      filename: `Tax_Invoice_${orderId}.pdf`,
      content: pdfBuffer,
      contentType: 'application/pdf'
    }];

    // Email Admin
    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: `Payment Success [${orderId}]`,
      html: adminHtml,
      attachments
    });

    // Email Customer
    if (orderData.email) {
      await transporter.sendMail({
        from: MAIL_FROM,
        to: orderData.email,
        replyTo: REPLY_TO,
        subject: `Payment Receipt & Invoice - Order ${orderId}`,
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

app.post('/api/create-order', async (req, res) => {
  try {
    const { name, mobile, email, productType, preferredDate } = req.body;

    let amount = 0;
    let purpose = "";

    if (productType === "training" || productType === "training_basic") {
      amount = 29900;
      purpose = "Basic Mushroom Cultivation Training";
    } else if (productType === "training_advanced") {
      amount = 69900;
      purpose = "Advanced Commercial Cultivation Training";
    } else if (productType === "workshop") {
      amount = 19900; // 199 INR
      purpose = "organic mushroom farming Workshop";
    } else if (productType === "consultation") {
      amount = 5900;
      purpose = "Expert 1-on-1 Business Consultation Slot";
    } else if (productType === "site_visit_consultation") {
      amount = 50000;
      purpose = "On Site Visit Consultation Slot";
    } else if (productType.includes("spawn")) {
      amount = 99900;
      purpose = "Spawn Purchase";
    } else if (productType.includes("mushroom")) {
      amount = 49900;
      purpose = "Fresh / Dry Mushroom Purchase";
    } else {
      amount = 5900;
      purpose = "Order";
    }

    const options = {
      amount: amount, // amount in smallest currency unit
      currency: "INR",
      receipt: `rct_${Date.now()}`,
      notes: {
        productType,
        customerName: name,
        customerEmail: email,
        customerPhone: mobile,
        preferredDate: preferredDate || ""
      }
    };

    const order = await razorpay.orders.create(options);

    res.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: RAZORPAY_KEY_ID,
      name: "Organic Mushrooms Farm",
      description: purpose,
      prefill: {
        name: name || "",
        email: email || "",
        contact: mobile || ""
      },
      notes: options.notes,
      theme: { color: "#25D366" }
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Webhook endpoint
app.post('/api/razorpay-webhook', async (req, res) => {
  const signature = req.headers['x-razorpay-signature'];

  if (!signature) {
    return res.status(400).send('Signature missing');
  }

  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(req.body.toString())
    .digest('hex');

  if (expectedSignature !== signature) {
    console.error("Invalid signature");
    return res.status(400).send('Invalid signature');
  }

  try {
    const event = JSON.parse(req.body.toString());
    const payment = event.payload.payment.entity;
    
    const notes = payment.notes || {};
    const productType = notes.productType || "unknown";
    const customerName = notes.customerName || payment.email;
    const customerEmail = payment.email || notes.customerEmail;
    const customerPhone = payment.contact || notes.customerPhone;
    
    const amountStr = "INR " + (payment.amount / 100).toString();

    const placeholders = {
      customerName,
      customerEmail,
      customerPhone,
      orderId: payment.order_id || 'N/A',
      amount: amountStr
    };

    if (event.event === 'payment.captured') {
        // Notify Formspree
        await sendToFormspree({
            customerName,
            customerEmail,
            customerPhone,
            orderId: payment.order_id || '',
            paymentId: payment.id,
            amount: amountStr,
            productType,
            paymentStatus: 'DONE'
        });

        // Save to Firebase (Customers)
        try {
            const customersRef = collection(db, 'customers');
            const q = query(customersRef, where('email', '==', customerEmail));
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                await addDoc(customersRef, { name: customerName, email: customerEmail, phone: customerPhone, created_at: new Date().toISOString() });
            }
            
            // Save Payment
            await addDoc(collection(db, 'payments'), {
                payment_id: payment.id,
                order_id: payment.order_id || '',
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                payment_status: 'success',
                amount: payment.amount,
                created_at: new Date().toISOString()
            });

            // Save specific booking/order
            if (productType === "consultation") {
                await addDoc(collection(db, 'consultant_bookings'), {
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    preferred_date: notes.preferredDate || "",
                    status: 'success',
                    order_id: payment.order_id,
                    created_at: new Date().toISOString()
                });
            } else if (productType === "training") {
                await addDoc(collection(db, 'training_orders'), {
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    status: 'success',
                    order_id: payment.order_id,
                    created_at: new Date().toISOString()
                });
            }
        } catch (dbError) {
             console.error("Firebase DB error:", dbError);
        }

    } else if (event.event === 'payment.failed') {
        // Notify Formspree
        await sendToFormspree({
            customerName,
            customerEmail,
            customerPhone,
            orderId: payment.order_id || '',
            paymentId: payment.id,
            amount: amountStr,
            productType,
            paymentStatus: 'FAILED'
        });

        try {
            await addDoc(collection(db, 'payments'), {
                payment_id: payment.id,
                order_id: payment.order_id || '',
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                payment_status: 'failed',
                amount: payment.amount,
                created_at: new Date().toISOString()
            });
        } catch (dbError) {
             console.error("Firebase DB error:", dbError);
        }
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error("Webhook processing error:", error);
    res.status(500).send('Internal Server Error');
  }
});

// Location API
app.get('/api/location', async (req, res) => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
    
    // Ignore localhost for GeoIP lookup, fallback to a dummy IP for testing if needed
    const geo = geoip.lookup(clientIp === '::1' || clientIp === '127.0.0.1' ? '8.8.8.8' : clientIp);

    
    if (geo) {
      return res.status(200).json({
        ip: clientIp,
        country: geo.country,
        region: geo.region,
        city: geo.city,
        timezone: geo.timezone,
        lat: geo.ll ? geo.ll[0] : null,
        lon: geo.ll ? geo.ll[1] : null,
        source: 'ip'
      });
    } else {
      return res.status(200).json({
        ip: clientIp,
        source: 'unknown',
        error: "GeoIP lookup failed"
      });
    }
  } catch (error) {
    console.error("Location API Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Analytics tracking API
app.post('/api/track', async (req, res) => {
  try {
    const { event_name, event_data, session_id, url, user_agent, user_id, utm_params } = req.body;
    const client_ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0];

    try {
      await addDoc(collection(db, 'analytics_events'), {
        event_name: event_name || 'unknown_event',
        event_data: event_data || {},
        session_id: session_id || '',
        url: url || '',
        user_agent: user_agent || req.headers['user-agent'] || '',
        user_id: user_id || null, // null if not logged in / identified
        utm_params: utm_params || {},
        client_ip: client_ip,
        created_at: new Date().toISOString()
      });
    } catch (dbError) {
      console.error("Error inserting analytics event:", dbError);
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Tracking API Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.status(404).sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
