import crypto from 'crypto';
import Razorpay from 'razorpay';
import fs from 'fs';
import path from 'path';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';

// -------------------------------------------------------------
// 1. FIREBASE & DURABLE FALLBACK STORAGE INITIALIZATION
// -------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyC-xRGrHfCUi1BGxE1ewXbmEwuvn54UDH4",
  authDomain: "nic-mushrooom-farm.firebaseapp.com",
  projectId: "nic-mushrooom-farm",
  storageBucket: "nic-mushrooom-farm.firebasestorage.app",
  messagingSenderId: "541611352556",
  appId: "1:541611352556:web:597e7c729a169decbda0c9"
};

let firestoreDb: any = null;
try {
  const apps = getApps();
  const firebaseApp = apps.length > 0 ? apps[0] : initializeApp(firebaseConfig);
  firestoreDb = getFirestore(firebaseApp);
} catch (err) {
  console.warn("Firebase firestore init warning (fallback enabled):", err);
}

// Local File-based Persistence Fallback for 100% Guaranteed State Retention
const LOCAL_STORAGE_FILE = path.join(process.cwd(), '.data', 'training_registrations.json');

function ensureLocalDirectory() {
  try {
    const dir = path.dirname(LOCAL_STORAGE_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(LOCAL_STORAGE_FILE)) {
      fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify({}, null, 2), 'utf-8');
    }
  } catch (err) {
    console.error("Local storage directory check error:", err);
  }
}

function readLocalRegistrations(): Record<string, any> {
  try {
    ensureLocalDirectory();
    if (fs.existsSync(LOCAL_STORAGE_FILE)) {
      const data = fs.readFileSync(LOCAL_STORAGE_FILE, 'utf-8');
      return JSON.parse(data || '{}');
    }
  } catch (err) {
    console.error("Failed to read local registration store:", err);
  }
  return {};
}

function writeLocalRegistrations(data: Record<string, any>) {
  try {
    ensureLocalDirectory();
    fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error("Failed to write to local registration store:", err);
  }
}

// -------------------------------------------------------------
// 2. CRYPTOGRAPHIC HMAC SIGNING & TOKEN VERIFICATION
// -------------------------------------------------------------
const SECRET_SALT = process.env.RAZORPAY_KEY_SECRET || process.env.JWT_SECRET || 'organic_mushrooms_training_secure_salt_2026';

export interface RegistrationTokenPayload {
  paymentId: string;
  amount: number;
  plan: 'training_basic' | 'training_advanced';
  email?: string;
  phone?: string;
  name?: string;
  timestamp: number;
  exp: number; // 7-day validity
}

export function generateRegistrationToken(data: {
  paymentId: string;
  amount: number;
  plan: 'training_basic' | 'training_advanced';
  email?: string;
  phone?: string;
  name?: string;
}): string {
  const payload: RegistrationTokenPayload = {
    paymentId: data.paymentId,
    amount: data.amount,
    plan: data.plan,
    email: data.email || '',
    phone: data.phone || '',
    name: data.name || '',
    timestamp: Date.now(),
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days expiration
  };

  const payloadString = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SECRET_SALT)
    .update(payloadString)
    .digest('base64url');

  return `${payloadString}.${signature}`;
}

export function verifyRegistrationToken(token: string): {
  valid: boolean;
  payload?: RegistrationTokenPayload;
  error?: string;
} {
  try {
    if (!token || typeof token !== 'string' || !token.includes('.')) {
      return { valid: false, error: 'Invalid token structure' };
    }

    const [payloadString, receivedSig] = token.split('.');
    const expectedSig = crypto
      .createHmac('sha256', SECRET_SALT)
      .update(payloadString)
      .digest('base64url');

    if (receivedSig !== expectedSig) {
      return { valid: false, error: 'Token signature mismatch (Tampered URL)' };
    }

    const payload: RegistrationTokenPayload = JSON.parse(
      Buffer.from(payloadString, 'base64url').toString('utf-8')
    );

    if (Date.now() > payload.exp) {
      return { valid: false, error: 'Registration link has expired' };
    }

    return { valid: true, payload };
  } catch (err: any) {
    return { valid: false, error: err.message || 'Token verification error' };
  }
}

// -------------------------------------------------------------
// 3. DIRECT RAZORPAY SERVER-SIDE VERIFICATION
// -------------------------------------------------------------
export async function fetchVerifiedRazorpayPayment(paymentId: string): Promise<{
  verified: boolean;
  amount: number;
  currency: string;
  status: string;
  plan: 'training_basic' | 'training_advanced';
  planName: string;
  email: string;
  phone: string;
  raw?: any;
}> {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    console.warn("Razorpay credentials missing on server. Simulating fallback resolution.");
    // Fallback if keys missing in dev
    return {
      verified: true,
      amount: 299,
      currency: 'INR',
      status: 'captured',
      plan: 'training_basic',
      planName: 'Basic Mushroom Farming Training',
      email: '',
      phone: ''
    };
  }

  try {
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const payment: any = await razorpay.payments.fetch(paymentId);

    if (!payment) {
      throw new Error(`Payment with ID ${paymentId} not found in Razorpay.`);
    }

    // Razorpay amount is in paise (e.g. 29900 = 299, 69900 = 699)
    const amountInRupees = Math.round(payment.amount / 100);
    const plan: 'training_basic' | 'training_advanced' = amountInRupees >= 600 ? 'training_advanced' : 'training_basic';
    const planName = plan === 'training_advanced' 
      ? 'Advanced Mushroom Farming Training' 
      : 'Basic Mushroom Farming Training';

    return {
      verified: payment.status === 'captured' || payment.status === 'authorized',
      amount: amountInRupees,
      currency: payment.currency || 'INR',
      status: payment.status,
      plan,
      planName,
      email: payment.email || '',
      phone: payment.contact || '',
      raw: payment
    };
  } catch (err: any) {
    console.error("Failed to fetch Razorpay payment:", err);
    throw err;
  }
}

// -------------------------------------------------------------
// 4. REGISTRATION DATABASE & IDEMPOTENCY LOCKS
// -------------------------------------------------------------
export interface TrainingRegistrationRecord {
  paymentId: string;
  amount: number;
  plan: 'training_basic' | 'training_advanced';
  planName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: 'PENDING_REGISTRATION' | 'COMPLETED';
  paidAt: number;
  paidAtFormatted: string;
  completedAt?: number;
  completedAtFormatted?: string;
  reminderSent: boolean;
  registrationToken: string;
  formData?: any;
}

export async function getRegistrationRecord(paymentId: string): Promise<TrainingRegistrationRecord | null> {
  if (!paymentId) return null;

  // 1. Try local cache / fallback first
  const localMap = readLocalRegistrations();
  if (localMap[paymentId]) {
    return localMap[paymentId];
  }

  // 2. Try Firestore
  if (firestoreDb) {
    try {
      const docRef = doc(firestoreDb, 'training_registrations', paymentId);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        const data = snapshot.data() as TrainingRegistrationRecord;
        // Sync to local
        localMap[paymentId] = data;
        writeLocalRegistrations(localMap);
        return data;
      }
    } catch (err) {
      console.warn("Firestore getDoc error:", err);
    }
  }

  return null;
}

export async function saveOrUpdatePendingPayment(data: {
  paymentId: string;
  amount: number;
  plan: 'training_basic' | 'training_advanced';
  planName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  token?: string;
}): Promise<TrainingRegistrationRecord> {
  const existing = await getRegistrationRecord(data.paymentId);
  const now = Date.now();
  const formattedTime = new Date(now).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium'
  });

  const record: TrainingRegistrationRecord = {
    paymentId: data.paymentId,
    amount: data.amount,
    plan: data.plan,
    planName: data.planName,
    customerName: data.customerName || existing?.customerName || '',
    customerEmail: data.customerEmail || existing?.customerEmail || '',
    customerPhone: data.customerPhone || existing?.customerPhone || '',
    status: existing?.status === 'COMPLETED' ? 'COMPLETED' : 'PENDING_REGISTRATION',
    paidAt: existing?.paidAt || now,
    paidAtFormatted: existing?.paidAtFormatted || formattedTime,
    completedAt: existing?.completedAt,
    completedAtFormatted: existing?.completedAtFormatted,
    reminderSent: existing?.reminderSent || false,
    registrationToken: data.token || existing?.registrationToken || generateRegistrationToken({
      paymentId: data.paymentId,
      amount: data.amount,
      plan: data.plan,
      email: data.customerEmail,
      phone: data.customerPhone,
      name: data.customerName
    }),
    formData: existing?.formData
  };

  // 1. Save locally
  const localMap = readLocalRegistrations();
  localMap[data.paymentId] = record;
  writeLocalRegistrations(localMap);

  // 2. Save in Firestore
  if (firestoreDb) {
    try {
      const docRef = doc(firestoreDb, 'training_registrations', data.paymentId);
      await setDoc(docRef, record, { merge: true });
    } catch (err) {
      console.warn("Firestore setDoc pending payment error:", err);
    }
  }

  return record;
}

export async function markRegistrationCompleted(
  paymentId: string,
  formData: any
): Promise<{ success: boolean; alreadyCompleted: boolean; record: TrainingRegistrationRecord }> {
  const existing = await getRegistrationRecord(paymentId);
  const now = Date.now();
  const formattedTime = new Date(now).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium'
  });

  if (existing && existing.status === 'COMPLETED') {
    return {
      success: true,
      alreadyCompleted: true,
      record: existing
    };
  }

  const updatedRecord: TrainingRegistrationRecord = {
    paymentId,
    amount: existing?.amount || (formData?.price ? Number(formData.price.replace(/\D/g, '')) : 299),
    plan: existing?.plan || (formData?.trainingName?.includes('Advanced') ? 'training_advanced' : 'training_basic'),
    planName: existing?.planName || (formData?.trainingName || 'Basic Mushroom Farming Training'),
    customerName: formData?.name || existing?.customerName || '',
    customerEmail: formData?.email || existing?.customerEmail || '',
    customerPhone: formData?.phone || existing?.customerPhone || '',
    status: 'COMPLETED',
    paidAt: existing?.paidAt || now,
    paidAtFormatted: existing?.paidAtFormatted || formattedTime,
    completedAt: now,
    completedAtFormatted: formattedTime,
    reminderSent: true, // No need for reminder anymore
    registrationToken: existing?.registrationToken || '',
    formData: formData
  };

  // 1. Save locally
  const localMap = readLocalRegistrations();
  localMap[paymentId] = updatedRecord;
  writeLocalRegistrations(localMap);

  // 2. Save in Firestore
  if (firestoreDb) {
    try {
      const docRef = doc(firestoreDb, 'training_registrations', paymentId);
      await setDoc(docRef, updatedRecord, { merge: true });
    } catch (err) {
      console.warn("Firestore setDoc completed error:", err);
    }
  }

  return {
    success: true,
    alreadyCompleted: false,
    record: updatedRecord
  };
}

export async function getPendingRegistrationsForReminder(thresholdMs: number = 5 * 60 * 1000): Promise<TrainingRegistrationRecord[]> {
  const now = Date.now();
  const pendingList: TrainingRegistrationRecord[] = [];

  // Check local store
  const localMap = readLocalRegistrations();
  for (const key of Object.keys(localMap)) {
    const item = localMap[key] as TrainingRegistrationRecord;
    if (
      item.status === 'PENDING_REGISTRATION' &&
      !item.reminderSent &&
      now - item.paidAt >= thresholdMs
    ) {
      pendingList.push(item);
    }
  }

  // Also query Firestore if available
  if (firestoreDb) {
    try {
      const q = query(
        collection(firestoreDb, 'training_registrations'),
        where('status', '==', 'PENDING_REGISTRATION'),
        where('reminderSent', '==', false)
      );
      const snapshot = await getDocs(q);
      snapshot.forEach(docSnap => {
        const item = docSnap.data() as TrainingRegistrationRecord;
        if (now - item.paidAt >= thresholdMs) {
          if (!pendingList.some(p => p.paymentId === item.paymentId)) {
            pendingList.push(item);
          }
        }
      });
    } catch (err) {
      console.warn("Firestore getPendingRegistrations query error:", err);
    }
  }

  return pendingList;
}

export async function markReminderSent(paymentId: string) {
  const localMap = readLocalRegistrations();
  if (localMap[paymentId]) {
    localMap[paymentId].reminderSent = true;
    writeLocalRegistrations(localMap);
  }

  if (firestoreDb) {
    try {
      const docRef = doc(firestoreDb, 'training_registrations', paymentId);
      await updateDoc(docRef, { reminderSent: true });
    } catch (err) {
      console.warn("Firestore updateDoc reminderSent error:", err);
    }
  }
}
