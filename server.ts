import nodemailer from 'nodemailer';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import geoip from 'geoip-lite';

// Firebase imports for backend writes
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, query, where } from "firebase/firestore";

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



function getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety) {
  if (service === 'TRAINING') {
    const isOnline = trainingMode && trainingMode.toLowerCase().includes('online');
    let varietyName = mushroomVariety || 'All Varieties Combined';
    if (varietyName !== 'All Varieties Combined' && !varietyName.includes('All Varieties') && !varietyName.toLowerCase().includes('mushroom')) {
      varietyName += ' Mushroom';
    }
    
    if (isOnline) {
      if (varietyName.includes('All Varieties')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Online Mushroom Training.<br/><br/>We are thrilled to see your interest in mastering All Major Mushroom Varieties from the comfort of your home. Our comprehensive online program will cover everything you need to succeed.<br/><br/>Our team is reviewing your details and will get back to you shortly with the complete syllabus, schedule, and next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Online Mushroom Training.<br/><br/>We are excited to help you learn ${varietyName} cultivation from the comfort of your home. Our expert-led online sessions are designed to give you step-by-step guidance.<br/><br/>Our team is reviewing your details and will get back to you shortly with the online training schedule and next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else {
      // Offline
      if (varietyName.includes('All Varieties')) {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.<br/><br/>We are thrilled to see your interest in mastering All Major Mushroom Varieties. Our comprehensive offline training at the farm will give you the complete hands-on experience you need to start your own business.<br/><br/>Our team is reviewing your details and will get back to you shortly with upcoming batch dates, location details, and the next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.<br/><br/>We are excited to provide you with hands-on, practical experience in ${varietyName} cultivation directly at our farm. Our expert-led sessions will give you ground-level skills.<br/><br/>Our team is reviewing your details and will get back to you shortly with upcoming batch dates and location details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    }
  }

  // Default for other services
  return `Hi ${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding ${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
}

// Contact API route
app.post('/api/contact', express.json(), async (req, res) => {
  try {
    const { name, email, phone, subject, message, service, trainingMode, mushroomVariety } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

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
      subject: `New Enquiry: ${subject || "Website Contact Form"}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Service/Product:</strong> ${service || "N/A"}</p>
        <h3>Enquiry Details:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    const userMailOptions = {
      from: `"Organic Mushroom Farm" <${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>`,
      replyTo: 'no-reply@organicmushroomsfarm.com',
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f6;
          margin: 0;
          padding: 20px;
        }
        .glass-container {
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(255, 167, 38, 0.15) 0%, rgba(156, 39, 176, 0.15) 50%, rgba(76, 175, 80, 0.15) 100%);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        .header h1 {
          background: -webkit-linear-gradient(45deg, #FF9800, #9C27B0, #4CAF50);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
          margin-top: 0;
          font-size: 26px;
        }
        .content {
          color: #333;
          line-height: 1.6;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 15px;
          padding: 20px;
          box-shadow: inset 0 0 10px rgba(255,255,255,0.7), 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        .footer {
          text-align: center;
          font-size: 13px;
          color: #666;
          margin-top: 25px;
        }
        @media only screen and (max-width: 600px) {
          body { padding: 10px; }
          .glass-container { padding: 20px; }
        }
      </style>
      </head>
      <body>
        <div class="glass-container">
          <div class="header">
            <h1>Organic Mushroom Farm</h1>
          </div>
          <div class="content">
            ${getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety)}
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({ error: "Failed to send message." });
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
