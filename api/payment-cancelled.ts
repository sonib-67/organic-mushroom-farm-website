import type { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { processEmailNotification } from '../src/emailService';

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
    return res.status(405).end(`Method \${req.method} Not Allowed`);
  }

  try {
    const { orderId } = req.body;
    if (orderId && db) {
      await setDoc(doc(db, 'registrations', orderId), {
        paymentStatus: 'CANCELLED',
        notificationSent: false
      }, { merge: true });
      
      try {
        const updatedDocSnap = await getDoc(doc(db, 'registrations', orderId));
        if (updatedDocSnap.exists()) {
          await processEmailNotification(db, orderId, updatedDocSnap.data());
        }
      } catch (e) {
        console.error("Error sending cancellation email", e);
      }
    }
    return res.status(200).send('OK');
  } catch (error) {
    console.error("payment-cancelled error:", error);
    return res.status(500).send('Internal Server Error');
  }
}
