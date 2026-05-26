import express from 'express';
import cors from 'cors';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import Razorpay from 'razorpay';
import { sendEmail, notifyAdmin } from './server/email.js';

const app = express();
const PORT = 3000;

app.use(cors());

// Webhook endpoint needs raw body for signature verification
app.use('/api/razorpay-webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

// Secrets 
// Safe default initialization or env logic
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_live_Ssg7Eepps3J0ch";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "97qz8ls18Y1M4Vzuj1TCX9Ss";
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "Sonib491@";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://placeholder-url.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-key";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

// Create Order API
app.post('/api/create-order', async (req, res) => {
  try {
    const { name, mobile, email, productType, preferredDate, amount: bodyAmount, productName: bodyProductName } = req.body;

    let amount = bodyAmount;
    let purpose = bodyProductName || "Order";

    // Fallback if not supplied in body
    if (!amount) {
      if (productType === "training") {
        amount = 299900; // ₹2999
        purpose = "Mushroom Farming Masterclass Training";
      } else if (productType === "consultation") {
        amount = 5900;
        purpose = "Expert 1-on-1 Business Consultation Slot";
      } else if (productType.includes("spawn")) {
        amount = 20000; // ₹200 for 1kg
        purpose = "Spawn Purchase";
      } else if (productType.includes("mushroom")) {
        amount = 12000; // ₹120 for 1kg
        purpose = "Fresh / Dry Mushroom Purchase";
      } else {
        amount = 5900;
        purpose = "Order";
      }
    }

    const clientIp = ((req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string).split(',')[0].trim();
    const userAgent = req.headers['user-agent'] || '';

    const options = {
      amount: amount, // amount in smallest currency unit
      currency: "INR",
      receipt: `rct_${Date.now()}`,
      notes: {
        productType: productType || "unknown",
        customerName: name || "",
        customerEmail: email || "",
        customerPhone: mobile || "",
        preferredDate: preferredDate || "",
        clientIp: clientIp,
        userAgent: userAgent.substring(0, 200)
      }
    };

    const order = await razorpay.orders.create(options);

    // Save initial pending order to Supabase
    if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
      try {
        await supabase.from('orders').insert([{
          customer_name: name || '',
          customer_email: email || '',
          customer_phone: mobile || '',
          product_name: purpose,
          amount: Math.round(amount / 100), // store as clean integer
          status: 'pending',
          razorpay_order_id: order.id,
          created_at: new Date().toISOString()
        }]);

        // Log payment attempts
        await supabase.from('payment_attempts').insert([{
          order_id: order.id,
          customer_name: name || '',
          customer_email: email || '',
          customer_phone: mobile || '',
          product_name: purpose,
          amount: amount,
          status: 'pending',
          client_ip: clientIp,
          user_agent: userAgent,
          created_at: new Date().toISOString()
        }]);
      } catch (dbErr) {
        console.error("Database Order pre-saves warning:", dbErr);
      }
    }

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
      theme: { color: "#2e7d32" }
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
    
    // Fallbacks for non-payment event objects
    const payment = event.payload.payment?.entity || {};
    const orderEntity = event.payload.order?.entity || {};
    const refund = event.payload.refund?.entity || {};

    const orderId = payment.order_id || orderEntity.id || refund.order_id || '';
    const paymentId = payment.id || refund.payment_id || '';

    const notes = payment.notes || orderEntity.notes || refund.notes || {};
    const productType = notes.productType || "unknown";
    const customerName = notes.customerName || payment.email || "Customer";
    const customerEmail = payment.email || notes.customerEmail || "orders@mushroomtraining.online";
    const customerPhone = payment.contact || notes.customerPhone || "";
    
    const rawValAmount = payment.amount || orderEntity.amount || refund.amount || 0;
    const amountStr = "INR " + (rawValAmount / 100).toString();

    const placeholders = {
      customerName,
      customerEmail,
      customerPhone,
      orderId: orderId || paymentId,
      amount: amountStr
    };

    if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
        // Log webhook payload
        await supabase.from('analytics_events').insert([{
            event_name: `webhook_${event.event}`,
            event_data: { payload: event.payload, account_id: event.account_id },
            session_id: paymentId || orderId,
            url: '/api/razorpay-webhook',
            user_agent: req.headers['user-agent'] || '',
            client_ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0],
            created_at: new Date().toISOString()
        }]);

        // Prevent duplicate processing
        if (paymentId && (event.event === 'payment.captured' || event.event === 'payment.failed')) {
            const { data: existingPayment } = await supabase
                .from('payments')
                .select('id, payment_status')
                .eq('payment_id', paymentId)
                .single();
            
            if (existingPayment) {
                if (existingPayment.payment_status === 'success' || existingPayment.payment_status === event.event.split('.')[1]) {
                    console.log(`Duplicate webhook or already processed: ${paymentId}`);
                    return res.status(200).send('Already processed');
                }
            }
        }
    }

    if (event.event === 'payment.captured' || event.event === 'order.paid') {
        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            const { data: customer } = await supabase.from('customers').select('*').eq('email', customerEmail).single();
            if (!customer) {
                await supabase.from('customers').insert([{ name: customerName, email: customerEmail, phone: customerPhone }]);
            }
            
            if (paymentId) {
                await supabase.from('payments').upsert([{
                    payment_id: paymentId,
                    order_id: orderId,
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    payment_status: 'success',
                    amount: rawValAmount,
                }], { onConflict: 'payment_id' });
            }

            // Sync the e-commerce orders table as requested
            if (orderId) {
                await supabase.from('orders')
                    .update({ status: 'paid', updated_at: new Date().toISOString() })
                    .eq('razorpay_order_id', orderId);
            }

            if (productType === "consultation") {
                await supabase.from('consultant_bookings').insert([{
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    preferred_date: notes.preferredDate || "",
                    status: 'success',
                    order_id: orderId
                }]);
            } else if (productType === "training") {
                await supabase.from('training_orders').insert([{
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    status: 'success',
                    order_id: orderId
                }]);
            }
        }

        await sendEmail(customerEmail, productType, 'done', placeholders);
        await notifyAdmin(`New Payment Collected: ${productType}`, `Order ${orderId || paymentId} was paid successfully for ${amountStr}`);

    } else if (event.event === 'payment.failed') {
        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            await supabase.from('payments').upsert([{
                payment_id: paymentId,
                order_id: orderId,
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                payment_status: 'failed',
                amount: rawValAmount,
                notes: payment.error_description ? { error: payment.error_description } : {}
            }], { onConflict: 'payment_id' });

            if (orderId) {
                await supabase.from('orders')
                    .update({ status: 'failed', updated_at: new Date().toISOString() })
                    .eq('razorpay_order_id', orderId);
            }
        }
        await sendEmail(customerEmail, productType, 'failed', placeholders);

    } else if (event.event === 'refund.created' || event.event === 'refund.processed') {
        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            if (orderId) {
                await supabase.from('orders')
                    .update({ status: 'refunded', updated_at: new Date().toISOString() })
                    .eq('razorpay_order_id', orderId);
            }
            if (paymentId) {
                await supabase.from('payments')
                    .update({ payment_status: 'refunded' })
                    .eq('payment_id', paymentId);
            }

            // Record into a refunds log
            await supabase.from('refunds').insert([{
                refund_id: refund.id,
                payment_id: paymentId,
                order_id: orderId,
                amount: rawValAmount,
                status: refund.status || 'processed',
                created_at: new Date().toISOString()
            }]);
        }
        
        await sendEmail(customerEmail, productType, 'refunded', placeholders);
        await notifyAdmin(`Payment Refunded: ${amountStr}`, `A refund of ${amountStr} has been successfully initiated for ${customerName} (Order: ${orderId})`);
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
    const geoip = (await import('geoip-lite')).default;
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

    if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
      const { error } = await supabase.from('analytics_events').insert([{
        event_name: event_name || 'unknown_event',
        event_data: event_data || {},
        session_id: session_id || '',
        url: url || '',
        user_agent: user_agent || req.headers['user-agent'] || '',
        user_id: user_id || null, // null if not logged in / identified
        utm_params: utm_params || {},
        client_ip: client_ip,
        created_at: new Date().toISOString()
      }]);

      if (error) {
        console.error("Error inserting analytics event:", error);
      }
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
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
