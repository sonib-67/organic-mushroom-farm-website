import nodemailer, { SendMailOptions } from 'nodemailer';
import PDFDocument from 'pdfkit';

// Gmail transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || process.env.SMTP_EMAIL || 'organicmushroomsfarms@gmail.com',
    pass: process.env.EMAIL_PASS || process.env.SMTP_PASSWORD || 'jzqqntulcifrfyul',
  },
});

// Admin recipient list (sends to both the farm inbox and tanmaysomi@gmail.com)
export function getAdminRecipients(): string[] {
  const list = [
    'organicmushroomsfarms@gmail.com',
    'tanmaysomi@gmail.com',
    process.env.OWNER_EMAIL,
  ].filter((email): email is string => Boolean(email && email.trim()));
  // Return unique emails
  return Array.from(new Set(list));
}

export interface PaymentNotificationPayload {
  name: string;
  phone: string;
  email: string;
  preferredDate?: string;
  productType: string;
  amount: string; // e.g., '₹59' or '₹500'
  status: 'INITIATED' | 'DONE' | 'CANCELLED' | 'FAILED';
  orderId?: string;
  paymentId?: string;
  notes?: string;
}

// In-memory deduplication cache (prevents duplicate emails within 2 minutes)
const sentCache = new Map<string, number>();

function isDuplicate(key: string): boolean {
  const now = Date.now();
  const last = sentCache.get(key);
  if (last && now - last < 120000) {
    return true;
  }
  sentCache.set(key, now);
  // Clean up old entries
  if (sentCache.size > 200) {
    for (const [k, time] of sentCache.entries()) {
      if (now - time > 300000) sentCache.delete(k);
    }
  }
  return false;
}

/**
 * Main function to send emails for INITIATED, CANCELLED, and DONE
 */
export async function processPaymentEmail(payload: PaymentNotificationPayload) {
  const {
    name = 'Valued Customer',
    phone = 'N/A',
    email,
    preferredDate = 'N/A',
    productType = 'Consultation',
    amount = '',
    status,
    orderId = 'N/A',
    paymentId = 'N/A',
  } = payload;

  const dedupKey = `${orderId}_${status}_${email}`;
  if (isDuplicate(dedupKey)) {
    console.log(`[EmailService] Skipping duplicate email for ${dedupKey}`);
    return { success: true, duplicate: true };
  }

  const adminList = getAdminRecipients();
  const customerEmail = email && email.includes('@') && !email.includes('no-reply') ? email.trim() : null;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  console.log(`[EmailService] Processing ${status} for ${productType} | Customer: ${name} (${email})`);

  // ==========================================
  // 1. PAYMENT INITIATED
  // ==========================================
  if (status === 'INITIATED') {
    // Admin Email for INITIATED
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 16px; border-radius: 8px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">⚡ New Payment Initiated</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">A user has opened the checkout for ${productType}</p>
        </div>
        
        <div style="padding: 16px 0; font-size: 14px; color: #334155; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; width: 140px;">Customer Name:</td><td>${name}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Mobile / WhatsApp:</td><td><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email || 'Not provided'}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Service / Product:</td><td><strong style="color: #0f172a;">${productType}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Slot / Preferred Date:</td><td>${preferredDate}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Amount:</td><td><span style="font-size: 16px; font-weight: bold; color: #d97706;">${amount}</span></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Razorpay Order ID:</td><td><code>${orderId}</code></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Date & Time:</td><td>${timestamp} (IST)</td></tr>
          </table>
        </div>
        <div style="border-top: 1px solid #e2e8f0; padding-top: 12px; font-size: 12px; color: #64748b; text-align: center;">
          Organic Mushrooms Farm • Automated Real-time Alert
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
        to: adminList,
        subject: `[Payment Initiated] ${amount} - ${productType} by ${name}`,
        html: adminHtml,
      });
      console.log(`[EmailService] Admin initiated mail sent to: ${adminList.join(', ')}`);
    } catch (err) {
      console.error('[EmailService] Error sending admin initiated mail:', err);
    }

    return { success: true };
  }

  // ==========================================
  // 2. PAYMENT CANCELLED / FAILED
  // ==========================================
  if (status === 'CANCELLED' || status === 'FAILED') {
    // 2.1 Admin Email for CANCELLED
    const adminCancelHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #fecaca; border-radius: 12px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #ef4444, #dc2626); padding: 16px; border-radius: 8px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">⚠️ Payment Cancelled / Abandoned</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">User did not complete checkout for ${productType}</p>
        </div>
        
        <div style="padding: 16px 0; font-size: 14px; color: #334155; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; width: 140px;">Customer Name:</td><td>${name}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Mobile / WhatsApp:</td><td><a href="tel:${phone}" style="color: #dc2626; font-weight: bold; text-decoration: none;">${phone}</a> (Call for Follow-up)</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email || 'Not provided'}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Service / Product:</td><td>${productType}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Slot Date:</td><td>${preferredDate}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Amount:</td><td>${amount}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Order ID:</td><td><code>${orderId}</code></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Date & Time:</td><td>${timestamp} (IST)</td></tr>
          </table>
        </div>
        <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: 8px; padding: 12px; font-size: 12.5px; color: #991b1b;">
          💡 <strong>Suggested Action:</strong> You can WhatsApp or call <strong>${name}</strong> at <strong>${phone}</strong> to offer technical assistance or alternative payment options.
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
        to: adminList,
        subject: `[Payment Cancelled] ${amount} - ${productType} by ${name}`,
        html: adminCancelHtml,
      });
      console.log(`[EmailService] Admin cancel mail sent to: ${adminList.join(', ')}`);
    } catch (err) {
      console.error('[EmailService] Error sending admin cancel mail:', err);
    }

    // 2.2 Customer Email for CANCELLED
    if (customerEmail) {
      const retryUrl = productType.toLowerCase().includes('site')
        ? 'https://organicmushroomsfarm.com/on-site-consultation'
        : 'https://organicmushroomsfarm.com/book-consultant';

      const customerCancelHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <div style="text-align: center; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;">
            <h1 style="color: #0f172a; font-size: 22px; margin: 0;">Organic Mushrooms Farm</h1>
            <p style="color: #64748b; font-size: 12px; margin: 4px 0 0 0;">Katangi Road, Jabalpur, Madhya Pradesh - 483105</p>
          </div>

          <div style="padding: 20px 0; font-size: 14px; color: #334155; line-height: 1.6;">
            <p style="font-size: 16px; font-weight: bold; color: #0f172a; margin-top: 0;">Hi ${name},</p>
            <p>We noticed that your booking payment for <strong>${productType}</strong> (${amount}) was cancelled or could not be completed.</p>
            <p style="background: #f8fafc; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 4px; font-size: 13px; color: #475569;">
              ℹ️ <strong>Please note:</strong> No amount was deducted from your account. If any balance was debited, your bank will refund it automatically within 24-48 hours.
            </p>
            
            <p>If you faced any technical glitch or have questions regarding farm setup, DPR, or subsidy, we are here to help you:</p>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="${retryUrl}" style="background: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                Retry & Complete Booking (${amount})
              </a>
            </div>

            <p style="font-size: 13px; color: #64748b;">
              Need help? Call or WhatsApp our senior agronomy team directly at <a href="https://wa.me/919203544140" style="color: #16a34a; font-weight: bold; text-decoration: none;">+91 9203544140</a>.
            </p>
          </div>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
            Organic Mushrooms Farm • Katangi, Jabalpur (M.P.) • Helpline: +91 9203544140
          </div>
        </div>
      `;

      try {
        await transporter.sendMail({
          from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
          replyTo: 'support@organicmushroomsfarm.com',
          to: customerEmail,
          subject: `Payment Incomplete - ${productType} | Organic Mushrooms Farm`,
          html: customerCancelHtml,
        });
        console.log(`[EmailService] Customer cancel mail sent to: ${customerEmail}`);
      } catch (err) {
        console.error('[EmailService] Error sending customer cancel mail:', err);
      }
    }

    return { success: true };
  }

  // ==========================================
  // 3. PAYMENT DONE / SUCCESS
  // ==========================================
  if (status === 'DONE') {
    // 3.1 Admin Email for DONE
    const adminSuccessHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #bbf7d0; border-radius: 12px; background: #ffffff;">
        <div style="background: linear-gradient(135deg, #16a34a, #15803d); padding: 16px; border-radius: 8px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px;">🎉 Payment Successful & Slot Confirmed!</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">New confirmed booking for ${productType}</p>
        </div>
        
        <div style="padding: 16px 0; font-size: 14px; color: #334155; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold; width: 140px;">Customer Name:</td><td><strong style="color: #0f172a; font-size: 15px;">${name}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Mobile / WhatsApp:</td><td><a href="https://wa.me/91${phone.replace(/\D/g, '').slice(-10)}" style="color: #16a34a; font-weight: bold; text-decoration: none;">+91 ${phone}</a> (Chat on WhatsApp)</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email || 'Not provided'}</td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Service Booked:</td><td><strong style="color: #16a34a;">${productType}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Preferred / Slot Date:</td><td><strong style="color: #0f172a;">${preferredDate}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Amount Paid:</td><td><strong style="color: #15803d; font-size: 16px;">${amount}</strong></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Payment ID:</td><td><code>${paymentId}</code></td></tr>
            <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 8px 0; font-weight: bold;">Order ID:</td><td><code>${orderId}</code></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Date & Time:</td><td>${timestamp} (IST)</td></tr>
          </table>
        </div>
        <div style="background: #f0fdf4; border: 1px solid #dcfce7; border-radius: 8px; padding: 12px; font-size: 12.5px; color: #166534;">
          ✅ <strong>Next Step:</strong> Digital GST invoice has been generated and dispatched to customer at <strong>${email}</strong>. Please reach out to confirm the schedule.
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
        to: adminList,
        subject: `[CONFIRMED BOOKING] ${amount} - ${productType} from ${name}`,
        html: adminSuccessHtml,
      });
      console.log(`[EmailService] Admin success mail sent to: ${adminList.join(', ')}`);
    } catch (err) {
      console.error('[EmailService] Error sending admin success mail:', err);
    }

    // 3.2 Customer Email for DONE with GST Invoice PDF
    if (customerEmail) {
      let pdfBuffer: Buffer | null = null;
      try {
        pdfBuffer = await generateInvoicePDF(payload);
      } catch (pdfErr) {
        console.error('[EmailService] Warning: Failed to generate PDF, sending email without PDF:', pdfErr);
      }

      const isSiteVisit = productType.toLowerCase().includes('site');

      const customerSuccessHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 20px; border-radius: 8px; color: #ffffff; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">Booking Confirmed!</h1>
            <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.95;">Thank you, ${name}! Your slot is officially reserved.</p>
          </div>

          <div style="padding: 20px 0; font-size: 14px; color: #334155; line-height: 1.6;">
            <p style="font-size: 15px; margin-top: 0;">We have received your payment of <strong>${amount}</strong> for <strong>${productType}</strong>.</p>
            
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">Booking Details:</h3>
              <p style="margin: 4px 0;"><strong>Service:</strong> ${productType}</p>
              <p style="margin: 4px 0;"><strong>Scheduled Date:</strong> ${preferredDate}</p>
              <p style="margin: 4px 0;"><strong>Transaction ID:</strong> <code>${paymentId}</code></p>
              <p style="margin: 4px 0;"><strong>Amount Paid:</strong> ${amount}</p>
              ${
                isSiteVisit
                  ? `<p style="margin: 4px 0; color: #059669; font-weight: bold;"><strong>Location:</strong> Organic Mushrooms Farm, Katangi Road, Jabalpur, Madhya Pradesh - 483105</p>`
                  : `<p style="margin: 4px 0; color: #2563eb; font-weight: bold;"><strong>Format:</strong> 1-on-1 Direct Business Phone / WhatsApp Call</p>`
              }
            </div>

            <p>Your official <strong>GST Tax Invoice & Pass</strong> is attached with this email for your accounting records.</p>
            
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://wa.me/919203544140?text=Hi%20Organic%20Mushrooms%20Farm,%20I%20have%20completed%20booking%20for%20${encodeURIComponent(productType)}%20(Payment%20ID:%20${paymentId})." style="background: #25d366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">
                💬 Connect with Farm Team on WhatsApp
              </a>
            </div>

            <p style="font-size: 13px; color: #64748b;">
              Our senior agronomy consultant will connect with you on your booked date. If you have any urgent query, feel free to call our direct helpline: <strong>+91 9203544140</strong>.
            </p>
          </div>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
            Organic Mushrooms Farm • Jabalpur (M.P.) - 483105 • support@organicmushroomsfarm.com
          </div>
        </div>
      `;

      const mailOptions: SendMailOptions = {
        from: '"Organic Mushrooms Farm" <organicmushroomsfarms@gmail.com>',
        replyTo: 'support@organicmushroomsfarm.com',
        to: customerEmail,
        subject: `Booking Confirmed & Tax Invoice - ${productType} | Organic Mushrooms Farm`,
        html: customerSuccessHtml,
      };

      if (pdfBuffer) {
        mailOptions.attachments = [
          {
            filename: `Invoice_${orderId || 'Booking'}.pdf`,
            content: pdfBuffer,
            contentType: 'application/pdf',
          },
        ];
      }

      try {
        await transporter.sendMail(mailOptions);
        console.log(`[EmailService] Customer success mail sent to: ${customerEmail}`);
      } catch (err) {
        console.error('[EmailService] Error sending customer success mail:', err);
      }
    }

    return { success: true };
  }

  return { success: true };
}

/**
 * Generate a luxury digital GST Tax Invoice PDF using pdfkit
 */
async function generateInvoicePDF(payload: PaymentNotificationPayload): Promise<Buffer> {
  let signatureBuffer: Buffer | null = null;
  try {
    // 2-second timeout to fetch signature, fallback safely if unavailable
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(
      'https://res.cloudinary.com/dnw4fpk2y/image/upload/v1785228588/Screenshot_2026-07-28-14-18-02-618-edit_com.android.chrome-removebg-preview_qk40by.png',
      { signal: controller.signal }
    );
    clearTimeout(timer);
    if (res.ok) {
      signatureBuffer = Buffer.from(await res.arrayBuffer());
    }
  } catch (e) {
    // Silently proceed without signature image if fetch times out
  }

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 0, size: 'A4' });
      const buffers: Buffer[] = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', reject);

      const primary = '#1f2937';
      const accent = '#059669'; // Emerald accent
      const textDark = '#111827';
      const textMuted = '#6b7280';
      const textLight = '#9ca3af';

      // Background
      doc.rect(0, 0, 595, 842).fill('#fcfcfc');

      // Top Header Accent Bar
      doc.rect(0, 0, 595, 6).fill(accent);

      // INVOICE Title
      doc.fillColor(accent).fontSize(32).font('Helvetica-Bold').text('TAX INVOICE', 50, 40);

      // Company Header
      doc.fillColor(primary).fontSize(18).font('Helvetica-Bold').text('Organic Mushrooms Farm', 50, 80);
      doc
        .fillColor(textMuted)
        .fontSize(9.5)
        .font('Helvetica')
        .text('Katangi Road, Jabalpur, Madhya Pradesh - 483105, India', 50, 102)
        .text('Helpline: +91 9203544140 | Web: organicmushroomsfarm.com', 50, 116);

      // Invoice Meta (Right side)
      const invoiceNo = 'INV-' + Math.floor(100000 + Math.random() * 900000);
      const invoiceDate = new Date();

      doc
        .fillColor(textDark)
        .fontSize(9.5)
        .font('Helvetica-Bold')
        .text('Invoice No:', 350, 45)
        .text('Date:', 350, 60)
        .text('Order ID:', 350, 75)
        .text('Payment ID:', 350, 90)
        .text('Status:', 350, 105);

      doc
        .fillColor(textMuted)
        .font('Helvetica')
        .text(invoiceNo, 440, 45, { align: 'right', width: 105 })
        .text(
          invoiceDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
          440,
          60,
          { align: 'right', width: 105 }
        )
        .text(payload.orderId || 'N/A', 440, 75, { align: 'right', width: 105 })
        .text(payload.paymentId || 'Online', 440, 90, { align: 'right', width: 105 });

      doc
        .fillColor('#15803d')
        .font('Helvetica-Bold')
        .text('PAID / CONFIRMED', 440, 105, { align: 'right', width: 105 });

      // Divider
      doc.moveTo(50, 135).lineTo(545, 135).lineWidth(0.5).strokeColor('#e2e8f0').stroke();

      // Billed To Section
      doc
        .fillColor(textLight)
        .fontSize(8.5)
        .font('Helvetica-Bold')
        .text('BILLED TO (CUSTOMER)', 50, 150, { characterSpacing: 1.5 });
      doc.fillColor(textDark).fontSize(13).font('Helvetica-Bold').text(payload.name || 'Customer', 50, 165);

      doc
        .fillColor(textMuted)
        .fontSize(9.5)
        .font('Helvetica')
        .text(payload.email || 'Email: N/A', 50, 183)
        .text('Phone / WhatsApp: ' + (payload.phone || 'N/A'), 50, 197)
        .text('Scheduled Slot: ' + (payload.preferredDate || 'Confirmed'), 50, 211);

      // Table Header
      const tableTop = 240;
      doc.rect(50, tableTop, 495, 24).fill('#f1f5f9');
      doc
        .fillColor(primary)
        .font('Helvetica-Bold')
        .fontSize(9)
        .text('DESCRIPTION / SERVICE', 60, tableTop + 7, { characterSpacing: 0.5 })
        .text('AMOUNT (INR)', 0, tableTop + 7, { align: 'right', width: 535, characterSpacing: 0.5 });

      // Table Row
      let cleanAmount = String(payload.amount || '0').replace(/[^0-9.,]/g, '').trim();
      const rowTop = tableTop + 35;
      doc
        .fillColor(textDark)
        .font('Helvetica')
        .fontSize(10.5)
        .text(payload.productType || 'Consultation Service', 60, rowTop)
        .text('Rs. ' + cleanAmount, 0, rowTop, { align: 'right', width: 535 });

      doc.moveTo(50, rowTop + 25).lineTo(545, rowTop + 25).lineWidth(0.5).strokeColor('#e2e8f0').stroke();

      // Total Box
      const totalTop = rowTop + 45;
      doc
        .fillColor(textDark)
        .font('Helvetica-Bold')
        .fontSize(11)
        .text('TOTAL PAID (NET)', 350, totalTop, { characterSpacing: 1 });
      doc
        .fillColor(accent)
        .fontSize(16)
        .font('Helvetica-Bold')
        .text('Rs. ' + cleanAmount, 0, totalTop - 2, { align: 'right', width: 535 });

      // Signatory
      if (signatureBuffer) {
        try {
          doc.image(signatureBuffer, 390, totalTop + 45, { height: 50 });
        } catch (_) {}
      }
      doc.moveTo(380, totalTop + 105).lineTo(535, totalTop + 105).lineWidth(0.5).strokeColor('#cbd5e1').stroke();
      doc
        .fillColor(textLight)
        .font('Helvetica')
        .fontSize(8.5)
        .text('Authorized Signatory', 380, totalTop + 112, { align: 'center', width: 155 });

      // Footer
      doc
        .fillColor(textMuted)
        .font('Helvetica')
        .fontSize(9)
        .text(
          'This is a computer-generated tax invoice and booking pass issued by Organic Mushrooms Farm. No physical signature required.',
          50,
          totalTop + 140,
          { align: 'center', width: 495 }
        );

      doc.end();
    } catch (e) {
      reject(e);
    }
  });
}
