import type { VercelRequest, VercelResponse } from '@vercel/node';
import Razorpay from 'razorpay';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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

    const { oldOrderId } = req.body;
    if (!oldOrderId) {
      return res.status(400).json({ error: 'Missing oldOrderId' });
    }

    if (!db) {
      return res.status(500).json({ error: 'Database unavailable' });
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
      receipt: `rct_repay_${Date.now()}`,
      notes: {
        productType: productType || "",
        customerName: name || "",
        customerEmail: email || "",
        customerPhone: mobile || "",
        repayForOrderId: oldOrderId
      }
    };

    const order = await razorpay.orders.create(options);
    
    return res.status(200).json({
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
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
