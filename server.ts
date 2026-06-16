import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import geoip from 'geoip-lite';
import { sendEmail, notifyAdmin } from './server/email.js';
import { parseSEOPathname } from './src/utils/seoPathParser.js';
import { generateLocationSEOArticle } from './src/data/locationSEOContent.js';

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

// Ahrefs Verification Endpoint
app.get('/ahrefs_d48267d7b8ee00a28f8051d5992c2cfd9373b8971e22a50f65b1829eae808130', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('d48267d7b8ee00a28f8051d5992c2cfd9373b8971e22a50f65b1829eae808130');
});

// Webhook endpoint needs raw body for signature verification
app.use('/api/razorpay-webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

// Secrets 
// Safe default initialization or env logic
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_live_Ssg7Eepps3J0ch";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "97qz8ls18Y1M4Vzuj1TCX9Ss";
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "Sonib491@";

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

    if (productType === "training") {
      amount = 29900;
      purpose = "Mushroom Farming Masterclass Training";
    } else if (productType === "workshop") {
      amount = 19900; // 199 INR
      purpose = "Organic Mushroom Farming Workshop";
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
      name: "Organic Mushroom Farm",
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

        // Send Success Email
        await sendEmail(customerEmail, productType, 'done', placeholders);
        // Notify Admin
        await notifyAdmin(`New Payment Collected: ${productType}`, `Order ${payment.order_id} was paid successfully for ${amountStr}`);

    } else if (event.event === 'payment.failed') {
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
        await sendEmail(customerEmail, productType, 'failed', placeholders);
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
    // Set index to false to prevent serving index.html automatically without dynamic processing
    app.use(express.static(distPath, { index: false }));
    
    app.get('*', (req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      fs.readFile(indexPath, 'utf8', (err, html) => {
        if (err) {
          console.error("Error reading index.html:", err);
          return res.status(500).send("Internal Server Error");
        }

        try {
          const parsed = parseSEOPathname(req.path);
          if (parsed) {
            const { locationSlug, keywordInfo } = parsed;
            const seoData = generateLocationSEOArticle(locationSlug, keywordInfo.category.toLowerCase(), keywordInfo);
            
            if (seoData) {
              let modifiedHtml = html;
              
              // 1. Replace title
              modifiedHtml = modifiedHtml.replace(
                /<title>.*?<\/title>/i,
                `<title>${seoData.title}</title>`
              );
              
              // 2. Replace description
              // Match description tag inside index.html head
              modifiedHtml = modifiedHtml.replace(
                /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
                `<meta name="description" content="${seoData.metaDesc.replace(/"/g, '&quot;')}" />`
              );
              
              // 3. Replace keywords
              modifiedHtml = modifiedHtml.replace(
                /<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>/i,
                `<meta name="keywords" content="${seoData.keywords.replace(/"/g, '&quot;')}" />`
              );
              
              // 4. Replace canonical URL
              modifiedHtml = modifiedHtml.replace(
                /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
                `<link rel="canonical" href="https://organicmushroomfarm.shop${req.path}" />`
              );
              
              return res.send(modifiedHtml);
            }
          }
        } catch (parseErr) {
          console.error("Error inject dynamic meta tags:", parseErr);
        }

        // Fallback: send index.html but with request-specific canonical URL
        let fallbackHtml = html;
        fallbackHtml = fallbackHtml.replace(
          /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
          `<link rel="canonical" href="https://organicmushroomfarm.shop${req.path}" />`
        );
        res.send(fallbackHtml);
      });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
