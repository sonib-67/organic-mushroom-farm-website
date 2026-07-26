import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyC-xRGrHfCUi1BGxE1ewXbmEwuvn54UDH4",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "nic-mushrooom-farm.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "nic-mushrooom-farm",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "nic-mushrooom-farm.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "541611352556",
  appId: process.env.FIREBASE_APP_ID || "1:541611352556:web:597e7c729a169decbda0c9"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
