import { doc, setDoc, updateDoc, deleteDoc, getDocs, collection, query, Firestore } from "firebase/firestore";
import { getDb } from "./firebase";
import nodemailer from "nodemailer";

export interface PendingRegistrationDoc {
  paymentId: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  courseType: string;
  courseTitle: string;
  status: "PENDING" | "COMPLETED";
  reminderSent: boolean;
  createdAt: number; // timestamp in milliseconds
  createdAtIso: string;
}

const COLLECTION_NAME = "training_pending_registrations";

/**
 * 1. Save payment record to Firebase Firestore on payment success
 */
export async function savePendingToFirebase(data: {
  paymentId: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  courseType: string;
  courseTitle: string;
}): Promise<void> {
  try {
    const db: Firestore | null = getDb();
    if (!db || !data.paymentId) return;

    const docRef = doc(db, COLLECTION_NAME, data.paymentId);
    const payload: PendingRegistrationDoc = {
      paymentId: data.paymentId,
      name: data.name || "Student",
      email: data.email || "",
      phone: data.phone || "",
      amount: data.amount,
      courseType: data.courseType,
      courseTitle: data.courseTitle,
      status: "PENDING",
      reminderSent: false,
      createdAt: Date.now(),
      createdAtIso: new Date().toISOString(),
    };

    await setDoc(docRef, payload, { merge: true });
    console.log(`[PendingRegistration] Saved pending record in Firebase for ${data.paymentId}`);
  } catch (error) {
    console.error("[PendingRegistration] Error saving to Firebase:", error);
  }
}

/**
 * 2. Mark registration as COMPLETED in Firebase when form is filled
 */
export async function markRegistrationCompletedInFirebase(paymentId: string): Promise<void> {
  try {
    const db: Firestore | null = getDb();
    if (!db || !paymentId) return;

    const docRef = doc(db, COLLECTION_NAME, paymentId);
    await updateDoc(docRef, {
      status: "COMPLETED",
      completedAt: Date.now(),
      completedAtIso: new Date().toISOString(),
      reminderSent: true, // Prevent reminder even if timer check overlaps
    });
    console.log(`[PendingRegistration] Marked ${paymentId} as COMPLETED in Firebase`);
  } catch (error) {
    // If doc didn't exist or update error, non-fatal
    console.warn("[PendingRegistration] Note updating completion in Firebase:", error);
  }
}

/**
 * 3. 5-Min Reminder & 10-Min Auto-Purge Worker
 * - If status is COMPLETED: DO NOT send email!
 * - If status is PENDING and age >= 5 mins (and < 10 mins): Send Nodemailer reminder email!
 * - If age >= 10 mins: DELETE document from Firebase to keep storage 100% clean & 0 KB waste!
 */
export async function checkAndSendPendingRemindersAndCleanup(): Promise<{
  scanned: number;
  remindersSent: number;
  deletedAfter10Min: number;
  alreadyCompleted: number;
}> {
  const stats = {
    scanned: 0,
    remindersSent: 0,
    deletedAfter10Min: 0,
    alreadyCompleted: 0,
  };

  try {
    const db: Firestore | null = getDb();
    if (!db) {
      console.warn("[PendingRegistration] Firestore unavailable for cron check");
      return stats;
    }

    const colRef = collection(db, COLLECTION_NAME);
    const snapshot = await getDocs(colRef);
    const now = Date.now();

    const FIVE_MINS_MS = 5 * 60 * 1000;
    const TEN_MINS_MS = 10 * 60 * 1000;

    for (const document of snapshot.docs) {
      stats.scanned++;
      const data = document.data() as PendingRegistrationDoc;
      const createdAt = typeof data.createdAt === "number" ? data.createdAt : Date.parse(data.createdAtIso || "") || now;
      const ageMs = now - createdAt;

      // ─── 🗑️ RULE A: If record is older than 10 minutes ➔ DELETE permanently ───
      if (ageMs >= TEN_MINS_MS) {
        await deleteDoc(document.ref);
        stats.deletedAfter10Min++;
        console.log(`[PendingRegistration] 🗑️ Deleted 10-min expired record: ${data.paymentId} (${data.email})`);
        continue;
      }

      // ─── 🛑 RULE B: If user ALREADY filled form ➔ NO EMAIL SENT! ───
      if (data.status === "COMPLETED") {
        stats.alreadyCompleted++;
        continue;
      }

      // ─── ✉️ RULE C: If age is between 5 and 10 minutes AND still PENDING ➔ Send Reminder ───
      if (ageMs >= FIVE_MINS_MS && data.status === "PENDING" && !data.reminderSent && data.email && data.email.includes("@")) {
        console.log(`[PendingRegistration] ✉️ Sending 5-min reminder to ${data.email} (${data.paymentId})`);
        const sent = await dispatchReminderMail(data);
        if (sent) {
          stats.remindersSent++;
          await updateDoc(document.ref, { reminderSent: true });
        }
      }
    }
  } catch (error) {
    console.error("[PendingRegistration] Error in cron execution:", error);
  }

  return stats;
}

/**
 * 4. High-converting, professional Nodemailer Reminder Email
 */
async function dispatchReminderMail(data: PendingRegistrationDoc): Promise<boolean> {
  try {
    const user = process.env.EMAIL_USER || process.env.SMTP_EMAIL || "organicmushroomsfarms@gmail.com";
    const pass = process.env.EMAIL_PASS || process.env.SMTP_PASSWORD || "jzqqntulcifrfyul";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const baseUrl = process.env.APP_URL || "https://organicmushroomsfarm.com";
    const regUrl = `${baseUrl}/training/register?id=${data.paymentId}&name=${encodeURIComponent(data.name)}&phone=${encodeURIComponent(data.phone)}&email=${encodeURIComponent(data.email)}&type=${data.courseType}`;

    const mailOptions = {
      from: `"Organic Mushroom Farm" <${user}>`,
      to: data.email,
      subject: `⚠️ Action Required: Complete Your Training Registration - Organic Mushrooms Farm`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; padding: 25px; color: #f1f5f9; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid #1e293b; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 22px; border-radius: 12px; text-align: center; margin-bottom: 24px; box-shadow: 0 4px 14px rgba(16,185,129,0.3);">
            <div style="font-size: 28px; margin-bottom: 6px;">🍄</div>
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">Complete Your Training Registration</h1>
            <p style="margin: 6px 0 0 0; color: #e6fffa; font-size: 13px; font-weight: 500;">Payment Successful (ID: ${data.paymentId})</p>
          </div>

          <!-- Body Content -->
          <div style="padding: 0 8px; line-height: 1.6; font-size: 14.5px; color: #cbd5e1;">
            <p style="margin-top: 0;">Dear <strong>${data.name}</strong>,</p>
            <p>Thank you for enrolling in our <strong>${data.courseTitle}</strong>! We noticed that your payment was completed successfully, but you have <strong>not submitted your participant registration form yet</strong>.</p>
            
            <p style="margin-bottom: 24px;">Please complete the form so we can generate your <strong>Official Training Admission Pass</strong> and dispatch your preparation kit details.</p>

            <!-- Big Call to Action Button -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="${regUrl}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; font-size: 15px; font-weight: 700; border-radius: 12px; box-shadow: 0 4px 16px rgba(16,185,129,0.4); text-transform: uppercase; letter-spacing: 0.5px;">
                👉 Fill Registration Form Now
              </a>
            </div>

            <!-- Pre-filled Link Box -->
            <div style="background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 14px; margin: 24px 0;">
              <div style="font-size: 12px; font-weight: 600; color: #94a3b8; margin-bottom: 6px;">Direct Form Link:</div>
              <a href="${regUrl}" style="color: #38bdf8; font-size: 12.5px; word-break: break-all; text-decoration: underline;">${regUrl}</a>
            </div>

            <p style="font-size: 12.5px; color: #94a3b8; margin-top: 24px;">
              Need help? Feel free to reply to this email or contact our support team at <a href="https://wa.me/919203544140" style="color: #34d399;">+91 92035 44140</a>.
            </p>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #334155; margin-top: 24px; padding-top: 16px; text-align: center; font-size: 11.5px; color: #64748b;">
            Organic Mushrooms Farm • Training Support Desk • All Rights Reserved
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.error("[PendingRegistration] Error sending reminder email:", err);
    return false;
  }
}
