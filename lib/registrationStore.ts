import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

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

  // Schedule 5-minute reminder if email is present
  scheduleAbandonedReminder(payment.paymentId);

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

/**
 * Schedule automated 5-minute dropout reminder email
 * If the user has NOT completed the registration form within 5 minutes of payment
 */
export function scheduleAbandonedReminder(paymentId: string) {
  // 5 minutes in ms (300,000 ms)
  const FIVE_MINUTES_MS = 5 * 60 * 1000;

  setTimeout(async () => {
    try {
      initStorage();
      const record = inMemoryStore.get(paymentId);
      if (!record) return;

      // Only send if still PENDING_FORM and reminder hasn't been sent yet
      if (record.status === 'PENDING_FORM' && !record.reminderSent && record.email && record.email.includes('@')) {
        console.log(`[RegistrationReminder] 5-minute reminder triggering for ${paymentId} (${record.email})`);
        
        await sendReminderEmail(record);
        record.reminderSent = true;
        inMemoryStore.set(paymentId, record);
        persistToFile();
      }
    } catch (err) {
      console.error('[RegistrationReminder] Error in 5-minute reminder task:', err);
    }
  }, FIVE_MINUTES_MS);
}

/**
 * Send the 5-minute reminder email to user & notify admin
 */
async function sendReminderEmail(record: RegistrationRecord) {
  const user = process.env.EMAIL_USER || process.env.SMTP_EMAIL || "organicmushroomsfarms@gmail.com";
  const pass = process.env.EMAIL_PASS || process.env.SMTP_PASSWORD || "jzqqntulcifrfyul";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const baseUrl = process.env.APP_URL || "https://organicmushroomsfarm.com";
  const registrationUrl = `${baseUrl}/training/register?id=${record.paymentId}&name=${encodeURIComponent(record.name)}&phone=${encodeURIComponent(record.phone)}&email=${encodeURIComponent(record.email)}&type=${record.courseType}`;

  const customerHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff; color: #1e293b;">
      <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 20px; border-radius: 12px; color: #ffffff; text-align: center;">
        <h2 style="margin: 0; font-size: 22px; font-weight: 800;">Action Required: Complete Your Training Registration</h2>
        <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.95;">Payment Verified (₹${record.amount}) • Final Step Pending</p>
      </div>

      <div style="padding: 24px 0; font-size: 14px; line-height: 1.6;">
        <p style="font-size: 16px; font-weight: 700; margin-top: 0;">Dear ${record.name},</p>
        <p>Thank you for your payment of <strong>₹${record.amount}</strong> for the <strong>${record.courseTitle}</strong> (Payment ID: <code>${record.paymentId}</code>).</p>
        <p>We noticed that you haven't completed your <strong>Training Registration Form</strong> yet. Filling this form is mandatory so that our agronomy team can assign your batch schedule, generate your GST invoice, and add you to the private training WhatsApp group.</p>

        <div style="text-align: center; margin: 28px 0;">
          <a href="${registrationUrl}" style="background: #059669; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 16px; display: inline-block; box-shadow: 0 4px 14px rgba(5,150,105,0.4);">
            👉 Click Here to Fill Registration Form
          </a>
        </div>

        <p style="font-size: 13px; color: #64748b; background: #f8fafc; padding: 12px; border-radius: 8px; border-left: 4px solid #059669;">
          ℹ️ <strong>Note:</strong> This registration link is uniquely locked to your verified Payment ID (<code>${record.paymentId}</code>) and can only be submitted once.
        </p>

        <p style="margin-top: 20px; font-size: 14px;">If you face any difficulty, our senior coordinators are available 24/7 on WhatsApp:</p>
        <a href="https://wa.me/919203544140?text=Hi%20Organic%20Mushrooms%20Farm,%20I%20paid%20₹${record.amount}%20(Payment%20ID:%20${record.paymentId})%20and%20need%20help%20completing%20my%20registration%20form." style="color: #059669; font-weight: bold; text-decoration: underline;">
          💬 Chat on WhatsApp (+91 9203544140)
        </a>
      </div>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
        Organic Mushrooms Farm • Katangi Road, Jabalpur, Madhya Pradesh - 483105<br/>
        Helpline: +91 9203544140 | Email: support@organicmushroomsfarm.com
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Organic Mushrooms Farm" <${user}>`,
    replyTo: "support@organicmushroomsfarm.com",
    to: record.email,
    subject: `[Action Required] Complete Your Mushroom Training Registration (₹${record.amount})`,
    html: customerHtml,
  });

  // Also notify admin that the 5-min dropout reminder was sent
  const adminEmail = process.env.ADMIN_EMAIL || "gamingbuddyzone@gmail.com";
  await transporter.sendMail({
    from: `"Training Alert" <${user}>`,
    to: adminEmail,
    subject: `⏰ [5-Min Followup Sent] Pending Registration for ${record.name} (₹${record.amount})`,
    html: `
      <div style="font-family: sans-serif; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px;">
        <h3 style="color: #d97706; margin-top: 0;">⏰ 5-Minute Followup Sent</h3>
        <p>User paid ₹${record.amount} but did not submit registration form after 5 minutes.</p>
        <p><strong>Customer:</strong> ${record.name} (${record.phone})<br/>
        <strong>Email:</strong> ${record.email}<br/>
        <strong>Payment ID:</strong> ${record.paymentId}</p>
        <p><strong>Direct Form Link:</strong><br/><a href="${registrationUrl}">${registrationUrl}</a></p>
      </div>
    `,
  });
}
