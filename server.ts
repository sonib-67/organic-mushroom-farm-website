import express from 'express';
import cors from 'cors';
import path from 'path';
import crypto from 'crypto';
import rateLimit from 'express-rate-limit';
import { createServer as createViteServer } from 'vite';
import { sendSuccessEmail, sendFailedEmail, sendPendingEmail, sendAbandonedEmail } from './server/services/emailService';
import { dbService, TransactionData } from './server/services/dbService';
import { sheetsService } from './server/services/sheetsService';
import { getProduct } from './server/config/products';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
app.set("trust proxy", 1);

// Security: Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window`
  message: 'Too many requests from this IP, please try again later.',
  keyGenerator: (req) => {
    return (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.ip || 'unknown';
  }
});


app.use(cors());
app.use(express.json({
  verify: (req, res, buf) => {
    (req as any).rawBody = buf.toString();
  }
}));

// Apply rate limiting to API routes
app.use('/api/', apiLimiter);

// API Keys
const key_id = process.env.RAZORPAY_KEY_ID || "rzp_live_Ssg7Eepps3J0ch";
const key_secret = process.env.RAZORPAY_KEY_SECRET || "97qz8ls18Y1M4Vzuj1TCX9Ss"; 
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || "organic_secret_123";

// Optional: Background cron alternative for pending recheck using setInterval
setInterval(async () => {
  try {
    const pendingTransactions = await dbService.getPendingTransactions();
    if (pendingTransactions && pendingTransactions.length > 0) {
      console.log(`[Cron] Checking ${pendingTransactions.length} pending transactions...`);
      // In a real scenario, this would call Razorpay API to check status:
      // const rzp = new Razorpay({ key_id, key_secret });
      // rzp.payments.fetch(tx.paymentId)
      // Then if successful, update DB and send success email.
    }
  } catch(e) {
    console.error('[Cron] Error checking pending transactions:', e);
  }
}, 5 * 60 * 1000); // 5 minutes

// JSON API Endpoint requested by the user
app.post('/api/checkout-payload', (req, res) => {
  const { name, mobile, email, productType } = req.body;

  const product = getProduct(productType);

  // Generate exact payload structure
  const payload = {
    key_id: key_id,
    amount: product.pricePaise,
    currency: "INR",
    name: "Organic Mushroom Farm",
    description: product.description,
    prefill: {
      name: name || "",
      email: email || "",
      contact: mobile || ""
    },
    notes: {
      product: product.name,
      customerName: name || "",
      mobile: mobile || "",
      email: email || ""
    },
    theme: {
      color: "#25D366"
    }
  };

  res.json(payload);
});

// Razorpay Webhook Endpoint
app.post('/api/razorpay-webhook', async (req, res) => {
  try {
    const signature = req.headers['x-razorpay-signature'] as string;
    const rawBody = (req as any).rawBody;

    if (!signature || !rawBody) {
      return res.status(400).send('Webhook signature or body missing');
    }

    // Verify signature
    const expectedSignature = crypto
      .createHmac('sha256', WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error("Webhook signature mismatch");
      return res.status(400).send('Invalid signature');
    }

    const eventId = req.body.id || req.headers['x-razorpay-event-id'] as string;

    const eventType = req.body.event;
    const paymentEntity = req.body.payload?.payment?.entity || req.body.payload?.order?.entity;
    
    if (!paymentEntity) {
      return res.status(200).send('No payment entity');
    }

    // Extract Data
    const notes = paymentEntity.notes || {};
    const transactionData: TransactionData = {
      productType: notes.product || paymentEntity.description || "Website Purchase",
      amount: paymentEntity.amount,
      paymentId: paymentEntity.id || 'N/A', // Orders might not have paymentId immediately
      orderId: paymentEntity.order_id || paymentEntity.id, 
      customerName: notes.customerName || paymentEntity.notes?.name || paymentEntity.email || "Customer",
      email: paymentEntity.email || notes.email || "",
      phone: paymentEntity.contact || notes.mobile || "",
      status: paymentEntity.status,
      eventType: eventType
    };

    // Check database for processed webhook to prevent duplicates
    const isProcessed = await dbService.isWebhookProcessed(transactionData.paymentId, eventType);
    if (isProcessed) {
      console.log(`Webhook for payment ${transactionData.paymentId} and event ${eventType} already processed, skipping.`);
      return res.status(200).send('Already processed');
    }

    // 1. Save to Database
    await dbService.saveTransaction(transactionData, eventId);

    // 2. Automate Google Sheets
    await sheetsService.saveToSheet(transactionData);

    const adminEmail = process.env.ADMIN_EMAIL || "training@mushroomtraining.online";

    console.log(`[Webhook] Event: ${eventType} received for Payment ID: ${transactionData.paymentId}`);
    console.log(`[Webhook] Triggering email routines for product: ${transactionData.productType}`);

    if (eventType === 'payment.captured' || eventType === 'payment.authorized' || eventType === 'order.paid') {
      console.log(`Payment SUCCESS for ${transactionData.paymentId}. Sending emails...`);
      if (transactionData.email) await sendSuccessEmail(transactionData, transactionData.email, false).then(() => console.log('User Success email sent')).catch(e => console.error('User Email failed:', e));
      await sendSuccessEmail(transactionData, adminEmail, true).then(() => console.log('Admin Success email sent')).catch(e => console.error('Admin Email failed:', e));
    } else if (eventType === 'payment.failed') {
      console.log(`Payment FAILED for ${transactionData.paymentId}. Sending emails...`);
      if (transactionData.email) await sendFailedEmail(transactionData, transactionData.email, false).then(() => console.log('User Failed email sent')).catch(e => console.error('User Email failed:', e));
      await sendFailedEmail(transactionData, adminEmail, true).then(() => console.log('Admin Failed email sent')).catch(e => console.error('Admin Email failed:', e));
    } else if (eventType === 'payment.pending' || eventType === 'payment.created') {
      console.log(`Payment PENDING for ${transactionData.paymentId}. Sending emails...`);
      if (transactionData.email) await sendPendingEmail(transactionData, transactionData.email, false).then(() => console.log('User Pending email sent')).catch(e => console.error('User Email failed:', e));
      await sendPendingEmail(transactionData, adminEmail, true).then(() => console.log('Admin Pending email sent')).catch(e => console.error('Admin Email failed:', e));
    }

    console.log(`[Webhook] Event ${eventType} for ${transactionData.paymentId} fully processed.`);
    res.status(200).send('OK');
  } catch (error) {
    console.error("Error processing webhook:", error);
    res.status(500).send('Webhook Processing Error');
  }
});

// Abandoned Checkout Endpoint
app.post('/api/abandoned-checkout', async (req, res) => {
  try {
    const { name, email, phone, productType, amount, orderId } = req.body;
    
    const transactionData = {
      productType: productType || "Website Purchase",
      amount: amount || 0,
      paymentId: 'abandoned_' + Date.now(),
      orderId: orderId || 'N/A',
      customerName: name || "Customer",
      email: email || "",
      phone: phone || "",
      status: 'abandoned',
      eventType: 'checkout.abandoned'
    };

    // Save to Database
    await dbService.saveTransaction(transactionData, `event_abandoned_${Date.now()}`);

    // Save to Google Sheets
    await sheetsService.saveToSheet(transactionData);

    console.log(`[Webhook] Event: abandoned_checkout received for Order ID: ${orderId}`);
    console.log(`[Webhook] Triggering email routines for product: ${transactionData.productType}`);

    // Send Abandoned Checkout Emails
    const adminEmail = process.env.ADMIN_EMAIL || "training@mushroomtraining.online";
    if (transactionData.email) {
      await sendAbandonedEmail(transactionData, transactionData.email, false).then(() => console.log('User Abandoned email sent')).catch(e => console.error('User Email failed:', e));
    }
    await sendAbandonedEmail(transactionData, adminEmail, true).then(() => console.log('Admin Abandoned email sent')).catch(e => console.error('Admin Email failed:', e));

    console.log(`[Webhook] Event abandoned_checkout for ${orderId} fully processed.`);
    res.status(200).send({ success: true });
  } catch (error) {
    console.error("Error processing abandoned checkout:", error);
    res.status(500).send('Abandoned Checkout Processing Error');
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === "production" || process.env.VERCEL === "1" || process.env.VERCEL_ENV === "production";
  
  if (!isProd) {
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
    console.log(`Server running on port ${PORT} in ${isProd ? 'production' : 'development'} mode`);
  });
}

// Only start the server natively if we're not running as a Vercel serverless function
if (!process.env.VERCEL) {
  startServer();
}

export default app;
