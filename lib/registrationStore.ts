import fs from 'fs';
import path from 'path';

export interface RegistrationRecord {
  paymentId: string;
  orderId?: string;
  name: string;
  email: string;
  phone: string;
  amount: number; // in Rupees, e.g. 299 or 699
  courseType: 'training_basic' | 'training_advanced';
  courseTitle: string;
  status: 'PENDING_FORM' | 'COMPLETED';
  createdAt: string;
  formSubmittedAt?: string;
  formData?: any;
  reminderSent?: boolean;
}

// In-memory cache for fast lookups
const inMemoryStore = new Map<string, RegistrationRecord>();

// File storage path for persistence
const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'registrations.json');

// Helper to ensure data directory and file exist
function initStorage() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, 'utf-8');
      if (content) {
        const data = JSON.parse(content);
        if (Array.isArray(data)) {
          for (const item of data) {
            if (item && item.paymentId) {
              inMemoryStore.set(item.paymentId, item);
            }
          }
        }
      }
    }
  } catch (err) {
    console.error('[RegistrationStore] Storage init error:', err);
  }
}

// Save memory store to file
function persistToFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const data = Array.from(inMemoryStore.values());
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('[RegistrationStore] File persist error:', err);
  }
}

// Initialize on module load
initStorage();

/**
 * Record payment completion (Initial state: PENDING_FORM)
 */
export function recordPaymentInit(payment: {
  paymentId: string;
  orderId?: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  courseType?: 'training_basic' | 'training_advanced';
}) {
  const existing = inMemoryStore.get(payment.paymentId);
  if (existing) {
    return existing;
  }

  // Force course type strictly based on amount
  const isAdvanced = payment.amount >= 499;
  const courseType = isAdvanced ? 'training_advanced' : 'training_basic';
  const courseTitle = isAdvanced
    ? 'Advanced Commercial Cultivation Training'
    : 'Basic Mushroom Farming Training';

  const record: RegistrationRecord = {
    paymentId: payment.paymentId,
    orderId: payment.orderId,
    name: payment.name || 'Student',
    email: payment.email || '',
    phone: payment.phone || '',
    amount: payment.amount,
    courseType,
    courseTitle,
    status: 'PENDING_FORM',
    createdAt: new Date().toISOString(),
    reminderSent: false,
  };

  inMemoryStore.set(payment.paymentId, record);
  persistToFile();

  return record;
}

/**
 * Get registration record by payment ID
 */
export function getRegistration(paymentId: string): RegistrationRecord | null {
  initStorage();
  return inMemoryStore.get(paymentId) || null;
}

/**
 * Mark registration as COMPLETED
 */
export function completeRegistration(paymentId: string, formData: any): { success: boolean; error?: string } {
  initStorage();
  const record = inMemoryStore.get(paymentId);

  if (!record) {
    // If record not created yet, create it as COMPLETED directly
    const amount = Number(formData.price) || 299;
    const isAdvanced = amount >= 499;
    const newRecord: RegistrationRecord = {
      paymentId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      amount,
      courseType: isAdvanced ? 'training_advanced' : 'training_basic',
      courseTitle: isAdvanced ? 'Advanced Commercial Cultivation Training' : 'Basic Mushroom Farming Training',
      status: 'COMPLETED',
      createdAt: new Date().toISOString(),
      formSubmittedAt: new Date().toISOString(),
      formData,
      reminderSent: true,
    };
    inMemoryStore.set(paymentId, newRecord);
    persistToFile();
    return { success: true };
  }

  if (record.status === 'COMPLETED') {
    return { success: false, error: 'ALREADY_COMPLETED' };
  }

  record.status = 'COMPLETED';
  record.formSubmittedAt = new Date().toISOString();
  record.formData = formData;
  record.reminderSent = true;

  inMemoryStore.set(paymentId, record);
  persistToFile();

  return { success: true };
}
