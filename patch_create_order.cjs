const fs = require('fs');
let code = fs.readFileSync('api/create-order.ts', 'utf8');

const imports = `import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
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
`;

code = code.replace("import crypto from 'crypto';", "import crypto from 'crypto';\n" + imports);

const injection = `
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
        processEmailNotification(db, order.id, regData).catch(err => console.error("Email send error:", err));
      }
    } catch (e) {
      console.error("Error saving to registrations", e);
    }
`;

code = code.replace("const order = await razorpay.orders.create(options);", injection);

fs.writeFileSync('api/create-order.ts', code);
console.log("api/create-order.ts updated");
