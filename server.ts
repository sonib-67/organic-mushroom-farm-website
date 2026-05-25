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
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_SECRET || "";
const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || process.env.WEBHOOK_SECRET || "";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(SUPABASE_URL || "https://placeholder-url.supabase.co", SUPABASE_KEY || "placeholder-key");

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
    } else if (productType === "consultation") {
      amount = 5900;
      purpose = "Expert 1-on-1 Business Consultation Slot";
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
        // Save to Supabase (Customers)
        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            const { data: customer } = await supabase.from('customers').select('*').eq('email', customerEmail).single();
            if (!customer) {
                await supabase.from('customers').insert([{ name: customerName, email: customerEmail, phone: customerPhone }]);
            }
            
            // Save Payment
            await supabase.from('payments').insert([{
                payment_id: payment.id,
                order_id: payment.order_id || '',
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                payment_status: 'success',
                amount: payment.amount,
            }]);

            // Save specific booking/order
            if (productType === "consultation") {
                await supabase.from('consultant_bookings').insert([{
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    preferred_date: notes.preferredDate || "",
                    status: 'success',
                    order_id: payment.order_id
                }]);
            } else if (productType === "training") {
                await supabase.from('training_orders').insert([{
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    status: 'success',
                    order_id: payment.order_id
                }]);
            }
        }

        // Send Success Email
        await sendEmail(customerEmail, productType, 'done', placeholders);
        // Notify Admin
        await notifyAdmin(`New Payment Collected: ${productType}`, `Order ${payment.order_id} was paid successfully for ${amountStr}`);

    } else if (event.event === 'payment.failed') {
        if (SUPABASE_URL !== "https://placeholder-url.supabase.co") {
            await supabase.from('payments').insert([{
                payment_id: payment.id,
                order_id: payment.order_id || '',
                customer_name: customerName,
                customer_email: customerEmail,
                customer_phone: customerPhone,
                payment_status: 'failed',
                amount: payment.amount,
            }]);
        }
        await sendEmail(customerEmail, productType, 'failed', placeholders);
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error("Webhook processing error:", error);
    res.status(500).send('Internal Server Error');
  }
});

import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';

app.post('/api/send-ai-email', async (req, res) => {
  try {
    const { userEmail, userRequest } = req.body;

    if (!userEmail || !userRequest) {
      return res.status(400).json({ success: false, message: 'userEmail and userRequest are required' });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const systemPrompt = `
You are an expert AI assistant for an online Mushroom Farming Training website. Your job is to help users and automatically draft professional emails based on their requests (like course registration, payment confirmation, or query replies).

When the user asks to send an email or when a specific trigger happens, you must ALWAYS generate the output in a strict JSON format so the backend server can read it and send it via Nodemailer. Do not include any conversational text outside the JSON block if an email needs to be sent.

JSON Format to follow:
{
  "emailSubject": "Clear and professional subject line",
  "emailBodyHTML": "<p>Professional email content in HTML format. Use proper tags like <br>, <b>, etc.</p>"
}

Context for your website:
- Website Name: Organic Mushroom Farm (organicmushroomfarm.shop)
- Main Product: Online Mushroom Farming Masterclass
- Price: ₹299
- Key Varieties Taught: Button, Milky, and Lion's Mane mushrooms.
- Webinar Timing: Daily Simulated Live training at 4:00 PM IST.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${systemPrompt}\n\nGenerate an email for this request: "${userRequest}". Respond ONLY with the strict JSON format specified in system instructions.`,
    });

    let aiResponseText = response.text || "";
    aiResponseText = aiResponseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    let emailData;
    try {
      emailData = JSON.parse(aiResponseText);
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", aiResponseText);
      return res.status(500).json({ success: false, message: "AI response was not valid JSON" });
    }

    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER || "training@mushroomtraining.online";
    const pass = process.env.SMTP_PASS || "Sonib491@.";

    let transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, 
      auth: { user, pass },
    });

    let mailOptions = {
      from: '"Organic Mushroom Farm" <' + user + '>',
      to: userEmail,
      subject: emailData.emailSubject,
      html: emailData.emailBodyHTML,
    };

    let info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "AI Generated Email Sent Successfully!",
      messageId: info.messageId,
      preview: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error("Error in AI Email System:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
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
