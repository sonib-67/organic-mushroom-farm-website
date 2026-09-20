import fs from "fs";
import path from "path";
import crypto from "crypto";

export interface MushroomReceiptRecord {
  registrationId: string;
  fullName: string;
  phone: string;
  email: string;
  amount: number;
  utr?: string;
  paymentApp?: string;
  receiptHash: string;
  fileName?: string;
  verifiedAt: string;
  ip?: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "mushroom_training_receipts.json");

// In-memory cache for fast O(1) checks
const hashSet = new Set<string>();
const utrSet = new Set<string>();
const phoneMap = new Map<string, MushroomReceiptRecord>();
const allReceipts: MushroomReceiptRecord[] = [];

let isInitialized = false;

export function initReceiptStore() {
  if (isInitialized) return;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      if (content) {
        const records: MushroomReceiptRecord[] = JSON.parse(content);
        if (Array.isArray(records)) {
          hashSet.clear();
          utrSet.clear();
          phoneMap.clear();
          allReceipts.length = 0;

          for (const rec of records) {
            if (rec && rec.receiptHash) {
              hashSet.add(rec.receiptHash.toLowerCase());
              if (rec.utr) {
                utrSet.add(rec.utr.trim().toLowerCase());
              }
              if (rec.phone) {
                const normPhone = rec.phone.replace(/\D/g, "").slice(-10);
                phoneMap.set(normPhone, rec);
              }
              allReceipts.push(rec);
            }
          }
        }
      }
    }
    isInitialized = true;
  } catch (err) {
    console.error("[ReceiptStore] Storage init error:", err);
  }
}

export function computeReceiptHash(base64OrBuffer: string | Buffer): string {
  let buffer: Buffer;
  if (Buffer.isBuffer(base64OrBuffer)) {
    buffer = base64OrBuffer;
  } else {
    // Strip data URL prefix if present
    const cleanBase64 = base64OrBuffer.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/, "");
    buffer = Buffer.from(cleanBase64, "base64");
  }
  return crypto.createHash("sha256").update(buffer).digest("hex").toLowerCase();
}

/**
 * Check if the receipt, UTR, or phone is already registered (duplicate protection)
 */
export function checkDuplicateReceipt(params: {
  receiptHash: string;
  utr?: string;
  phone?: string;
}): { isDuplicate: boolean; reason?: string } {
  initReceiptStore();

  const cleanHash = params.receiptHash?.toLowerCase().trim();
  if (cleanHash && hashSet.has(cleanHash)) {
    return {
      isDuplicate: true,
      reason:
        "Duplicate Receipt: Yeh payment screenshot pehle se use kiya ja chuka hai. Kripya apna original payment screenshot upload karein.",
    };
  }

  const cleanUtr = params.utr?.trim().toLowerCase();
  if (cleanUtr && cleanUtr.length >= 8 && utrSet.has(cleanUtr)) {
    return {
      isDuplicate: true,
      reason: `Duplicate Transaction ID: Yeh UPI UTR / Transaction No. (${params.utr}) pehle se darj ho chuka hai. Kripya apna naya payment screenshot upload karein.`,
    };
  }

  if (params.phone) {
    const normPhone = params.phone.replace(/\D/g, "").slice(-10);
    if (normPhone && normPhone.length === 10 && phoneMap.has(normPhone)) {
      const existing = phoneMap.get(normPhone);
      return {
        isDuplicate: true,
        reason: `Duplicate Phone: Is mobile number (+91 ${normPhone}) se pehle se ek confirmed training registration (ID: ${existing?.registrationId || "OMF"}) darj hai. Ek number se ek hi registration maanya hai. Agar koi change karna hai toh helpline par call karein.`,
      };
    }
  }

  return { isDuplicate: false };
}

/**
 * Save confirmed receipt record
 */
export function recordReceipt(record: MushroomReceiptRecord) {
  initReceiptStore();

  const cleanHash = record.receiptHash.toLowerCase().trim();
  hashSet.add(cleanHash);

  if (record.utr) {
    utrSet.add(record.utr.trim().toLowerCase());
  }

  const normPhone = record.phone.replace(/\D/g, "").slice(-10);
  if (normPhone) {
    phoneMap.set(normPhone, record);
  }

  allReceipts.push(record);

  // Persist to disk
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(allReceipts, null, 2), "utf-8");
  } catch (err) {
    console.error("[ReceiptStore] Persist error:", err);
  }

  return record;
}

export function getAllReceipts(): MushroomReceiptRecord[] {
  initReceiptStore();
  return [...allReceipts];
}
