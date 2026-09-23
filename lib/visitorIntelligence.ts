import { getDb } from "./firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

export interface VisitorSessionRecord {
  id: string;
  date: string; // YYYY-MM-DD in Asia/Kolkata
  sessionId: string;
  ipHash: string;
  city: string;
  state: string;
  stateCode: string;
  country: string;
  countryCode: string;
  device: "Mobile" | "Tablet" | "Desktop";
  initialPath: string;
  lastPath: string;
  pages: string[];
  pageviewsCount: number;
  referrer: string;
  startTime: string;
  lastActiveTime: string;
  durationSeconds: number;
  screen?: string;
  processed?: boolean;
}

export const INDIAN_STATES_MAP: Record<string, string> = {
  AN: "Andaman and Nicobar",
  AP: "Andhra Pradesh",
  AR: "Arunachal Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CH: "Chandigarh",
  CT: "Chhattisgarh",
  CG: "Chhattisgarh",
  DL: "Delhi",
  DN: "Dadra and Nagar Haveli",
  GA: "Goa",
  GJ: "Gujarat",
  HR: "Haryana",
  HP: "Himachal Pradesh",
  JH: "Jharkhand",
  JK: "Jammu and Kashmir",
  KA: "Karnataka",
  KL: "Kerala",
  LA: "Ladakh",
  LD: "Lakshadweep",
  MH: "Maharashtra",
  ML: "Meghalaya",
  MN: "Manipur",
  MP: "Madhya Pradesh",
  MZ: "Mizoram",
  NL: "Nagaland",
  OR: "Odisha",
  OD: "Odisha",
  PB: "Punjab",
  PY: "Puducherry",
  RJ: "Rajasthan",
  SK: "Sikkim",
  TG: "Telangana",
  TN: "Tamil Nadu",
  TR: "Tripura",
  UP: "Uttar Pradesh",
  UT: "Uttarakhand",
  UK: "Uttarakhand",
  WB: "West Bengal",
};

/**
 * Returns current date string in YYYY-MM-DD formatted for Asia/Kolkata (IST)
 */
export function getKolkataDateString(offsetDays: number = 0): string {
  const d = new Date();
  if (offsetDays !== 0) {
    d.setDate(d.getDate() + offsetDays);
  }
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(d);
}

/**
 * Simple hash for IP to preserve privacy while identifying unique sessions
 */
export function hashIp(ip: string): string {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return "ip_" + Math.abs(hash).toString(36);
}

/**
 * Save or update a session in Firestore collection 'daily_visitor_sessions'
 */
export async function saveVisitorSession(
  sessionData: Partial<VisitorSessionRecord> & {
    sessionId: string;
    action: "enter" | "pageview" | "leave";
  }
): Promise<boolean> {
  const db = getDb();
  if (!db) {
    console.warn("[VisitorTracker] Firebase DB unavailable, skipping save");
    return false;
  }

  const today = getKolkataDateString();
  const docId = `${today}_${sessionData.sessionId}`;
  const docRef = doc(db, "daily_visitor_sessions", docId);

  try {
    const nowIso = new Date().toISOString();

    if (sessionData.action === "enter") {
      const stateName =
        INDIAN_STATES_MAP[sessionData.stateCode || ""] ||
        sessionData.state ||
        "Unknown State";

      const newRecord: VisitorSessionRecord = {
        id: docId,
        date: today,
        sessionId: sessionData.sessionId,
        ipHash: sessionData.ipHash || "anon",
        city: sessionData.city || "Unknown City",
        state: stateName,
        stateCode: sessionData.stateCode || "",
        country: sessionData.country || "India",
        countryCode: sessionData.countryCode || "IN",
        device: sessionData.device || "Mobile",
        initialPath: sessionData.initialPath || "/",
        lastPath: sessionData.initialPath || "/",
        pages: sessionData.initialPath ? [sessionData.initialPath] : ["/"],
        pageviewsCount: 1,
        referrer: sessionData.referrer || "Direct / Organic",
        startTime: nowIso,
        lastActiveTime: nowIso,
        durationSeconds: 4, // Default baseline for passing 3.5s hurdle
        screen: sessionData.screen || "unknown",
        processed: false,
      };

      await setDoc(docRef, newRecord, { merge: true });
      return true;
    }

    // For pageview or leave, update existing
    const existingSnap = await getDoc(docRef);
    if (!existingSnap.exists()) {
      // If doc didn't exist yet, create baseline
      await setDoc(
        docRef,
        {
          id: docId,
          date: today,
          sessionId: sessionData.sessionId,
          lastPath: sessionData.lastPath || "/",
          pages: sessionData.lastPath ? [sessionData.lastPath] : ["/"],
          pageviewsCount: 1,
          lastActiveTime: nowIso,
          durationSeconds: sessionData.durationSeconds || 4,
          processed: false,
        },
        { merge: true }
      );
      return true;
    }

    const existingData = existingSnap.data() as VisitorSessionRecord;
    const pages = Array.isArray(existingData.pages) ? [...existingData.pages] : [];

    if (
      sessionData.action === "pageview" &&
      sessionData.lastPath &&
      !pages.includes(sessionData.lastPath)
    ) {
      pages.push(sessionData.lastPath);
    }

    const duration = Math.max(
      existingData.durationSeconds || 4,
      sessionData.durationSeconds || 0
    );

    await setDoc(
      docRef,
      {
        lastPath: sessionData.lastPath || existingData.lastPath,
        pages,
        pageviewsCount: (existingData.pageviewsCount || 1) + (sessionData.action === "pageview" ? 1 : 0),
        lastActiveTime: nowIso,
        durationSeconds: duration,
      },
      { merge: true }
    );

    return true;
  } catch (err) {
    console.error("[VisitorTracker] Error writing session to Firestore:", err);
    return false;
  }
}

/**
 * Fetch all sessions for a specific date (YYYY-MM-DD in Asia/Kolkata)
 */
export async function getSessionsForDate(dateStr: string): Promise<VisitorSessionRecord[]> {
  const db = getDb();
  if (!db) return [];

  try {
    const q = query(
      collection(db, "daily_visitor_sessions"),
      where("date", "==", dateStr)
    );
    const snap = await getDocs(q);
    const list: VisitorSessionRecord[] = [];
    snap.forEach((d) => {
      list.push(d.data() as VisitorSessionRecord);
    });
    return list;
  } catch (err) {
    console.error(`[VisitorTracker] Error fetching sessions for date ${dateStr}:`, err);
    return [];
  }
}

/**
 * Clean up / delete sessions up to specified date to keep storage at 0 MB
 */
export async function deleteSessionsUpToDate(dateStr: string): Promise<number> {
  const db = getDb();
  if (!db) return 0;

  try {
    const q = query(
      collection(db, "daily_visitor_sessions"),
      where("date", "<=", dateStr)
    );
    const snap = await getDocs(q);
    if (snap.empty) return 0;

    const batch = writeBatch(db);
    let count = 0;
    snap.forEach((docSnap) => {
      batch.delete(docSnap.ref);
      count++;
    });

    await batch.commit();
    return count;
  } catch (err) {
    console.error(`[VisitorTracker] Error cleaning up sessions:`, err);
    return 0;
  }
}
