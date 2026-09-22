import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyC-xRGrHfCUi1BGxE1ewXbmEwuvn54UDH4",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "nic-mushrooom-farm.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "nic-mushrooom-farm",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "nic-mushrooom-farm.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "541611352556",
  appId: process.env.FIREBASE_APP_ID || "1:541611352556:web:597e7c729a169decbda0c9"
};

let firestoreDb: Firestore | null = null;

export function getDb(): Firestore | null {
  if (firestoreDb) return firestoreDb;
  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    firestoreDb = getFirestore(app);
    return firestoreDb;
  } catch (error) {
    console.warn("Firebase Firestore initialization note:", error);
    return null;
  }
}

export const db = getDb();
export default getDb;
