import type { VercelRequest, VercelResponse } from '@vercel/node';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-xRGrHfCUi1BGxE1ewXbmEwuvn54UDH4",
  authDomain: "nic-mushrooom-farm.firebaseapp.com",
  projectId: "nic-mushrooom-farm",
  storageBucket: "nic-mushrooom-farm.firebasestorage.app",
  messagingSenderId: "541611352556",
  appId: "1:541611352556:web:597e7c729a169decbda0c9"
};
let db: any;
try {
  const firebaseApp = initializeApp(firebaseConfig);
  db = getFirestore(firebaseApp);
} catch (error) {
  console.error("Firebase init error:", error);
}


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

    if (productType === "training" || productType === "training_basic") {
      amount = 29900;
      purpose = "Basic Mushroom Cultivation Training";
    } else if (productType === "training_advanced") {
      amount = 69900;
      purpose = "Advanced Commercial Cultivation Training";
    } else if (productType === "workshop") {
      amount = 19900;
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

    try {
      if (db) {
        const regData = {
          name: name || "",
          email: email || "",
          mobile: mobile || "",
          amount: amount / 100,
          productType: productType || "",
          paymentStatus: "INITIATED",
          paymentId: "",
          orderId: order.id,
          createdAt: new Date().toISOString(),
          notificationSent: false
        };
        await setDoc(doc(db, 'registrations', order.id), regData);
        // We don't necessarily send an email on INITIATED, but processEmailNotification handles this
        // Email for INITIATED status is not required.
      }
    } catch (e) {
      console.error("Error saving to registrations", e);
    }


    return res.status(200).json({
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
    return res.status(500).json({ error: "Failed to create order", details: error instanceof Error ? error.message : String(error) });
  }
}
