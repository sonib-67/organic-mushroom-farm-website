import type { VercelRequest, VercelResponse } from '@vercel/node';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL || "https://placeholder-url.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-key";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const RAZORPAY_KEY_ID = process.env.VITE_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID;
    const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error("Razorpay API keys are missing in environment variables.");
      return res.status(500).json({ error: "Server configuration error. Payment gateway unavailable." });
    }

    const razorpay = new Razorpay({
      key_id: RAZORPAY_KEY_ID,
      key_secret: RAZORPAY_KEY_SECRET,
    });

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
      amount: amount, 
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

    return res.status(200).json({
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
    return res.status(500).json({ error: "Failed to create order" });
  }
}
