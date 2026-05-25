import type { VercelRequest, VercelResponse } from '@vercel/node';
import Razorpay from 'razorpay';
import crypto from 'crypto';

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

    const { name, mobile, email, productType, preferredDate } = req.body;

    let amount = 5900;
    let purpose = "Order";

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
    }

    const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string;
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
        clientIp: clientIp.split(',')[0],
        userAgent: userAgent.substring(0, 200)
      }
    };

    const order = await razorpay.orders.create(options);

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
      theme: { color: "#25D366" }
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res.status(500).json({ error: "Failed to create order" });
  }
}
