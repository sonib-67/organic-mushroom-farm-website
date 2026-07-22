import * as nodemailer from 'nodemailer';
import { collection, onSnapshot, query, where, doc, updateDoc, Firestore } from "firebase/firestore";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com',
    pass: process.env.SMTP_PASS || 'jzqqntulcifrfyul' // the user provided password in the prompt
  }
});

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'tanmaysomi@gmail.com';
const BASE_URL = process.env.FRONTEND_URL || 'https://www.organicmushroomsfarm.com'; // Change to actual production URL

const formatProductType = (productType: string) => {
  if (productType?.includes('training_basic')) return 'Training (₹299)';
  if (productType?.includes('training_advanced')) return 'Training (₹699)';
  if (productType?.includes('training')) return 'Training';
  if (productType === 'workshop') return 'Workshop';
  if (productType === 'consultation') return 'Book Consultant';
  if (productType === 'site_visit_consultation') return 'Site Visit Consultant';
  if (productType?.includes('spawn')) return 'Spawn Purchase';
  if (productType?.includes('mushroom')) return 'Fresh / Dry Mushroom Purchase';
  return productType || 'Service';
};

const getEmails = (data: any) => {
  const { name, email, mobile, orderId, paymentId, amount, paymentStatus, createdAt, productType, repaymentEmailSent } = data;
  const dateStr = new Date(createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const companyName = "Organic Mushrooms Farm";
  const serviceName = formatProductType(productType);

  let userSubject = "";
  let userHtml = "";
  let needsUserEmail = false;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SUCCESS': return { bg: '#dcfce7', text: '#166534', label: '✅ Successful' };
      case 'INITIATED': return { bg: '#fef3c7', text: '#92400e', label: '🟡 Initiated' };
      case 'CANCELLED': return { bg: '#fee2e2', text: '#991b1b', label: '🔴 Cancelled' };
      case 'FAILED': return { bg: '#fee2e2', text: '#991b1b', label: '❌ Failed' };
      default: return { bg: '#f3f4f6', text: '#374151', label: status };
    }
  };

  const statusObj = getStatusColor(paymentStatus);
  const accentColor = paymentStatus === 'SUCCESS' ? '#10b981' : paymentStatus === 'CANCELLED' || paymentStatus === 'FAILED' ? '#ef4444' : '#7E22CE';

  const baseUserHtml = (title: string, content: string) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background-color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 3px solid ${accentColor};">
          <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" alt="Organic Mushrooms Farm Logo" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%; border: 1px solid #e5e7eb; margin-bottom: 15px;" />
          <h2 style="color: #1f2937; margin: 0; font-size: 22px; font-weight: 700;">${companyName}</h2>
          <p style="color: ${accentColor}; margin: 5px 0 0 0; font-weight: 600; font-size: 18px;">${title}</p>
        </div>

        <!-- Body -->
        <div style="padding: 30px; color: #4b5563; font-size: 16px; line-height: 1.6;">
          ${content}
        </div>

        <!-- Support Section -->
        <div style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #f3f4f6;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">Need help? Contact our support team</p>
          <a href="mailto:organicmushroomsfarms@gmail.com" style="color: #7E22CE; text-decoration: none; font-weight: 600; font-size: 14px;">organicmushroomsfarms@gmail.com</a>
        </div>

        <!-- Footer -->
        <div style="background-color: #1f2937; padding: 20px; text-align: center;">
          <p style="margin: 0; color: #9ca3af; font-size: 13px;">
            &copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.<br/>
            This is an automated email. Please do not reply.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  if (paymentStatus === 'SUCCESS') {
    needsUserEmail = true;
    if (productType?.includes('training')) {
      userSubject = 'Payment Confirmed – Your Training Registration is Successful';
      userHtml = baseUserHtml('Training Registration Confirmed', `<p>Hi ${name},</p>
<p>Thank you for registering with ${companyName}.</p>
<p>We have successfully received your payment.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 25px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
<h4 style="margin-top: 0; color: #1f2937; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Payment Details</h4>
<table style="width: 100%; border-collapse: collapse; font-size: 15px;">
  <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Status:</td><td style="padding: 8px 0; font-weight: 600;"><span style="background: ${statusObj.bg}; color: ${statusObj.text}; padding: 4px 10px; border-radius: 6px; font-size: 14px;">${statusObj.label}</span></td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Amount:</td><td style="padding: 8px 0; font-weight: 600; color: #1f2937;">₹${amount}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Order ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${orderId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Payment ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${paymentId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Date:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${dateStr}</td></tr>
</table>
</div>
<p>Your registration has been confirmed successfully.</p>
<p>Our team will contact you shortly with the next steps.</p>
<p>Thank you for choosing ${companyName}.</p>
<p>Regards,<br/>${companyName}</p>`);
    } else if (productType === 'workshop') {
      userSubject = 'Workshop Registration Confirmed';
      userHtml = baseUserHtml('Workshop Registration Confirmed', `<p>Hi ${name},</p>
<p>Your payment has been received successfully.</p>
<p>Your workshop registration is now confirmed.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 25px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
<h4 style="margin-top: 0; color: #1f2937; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Payment Details</h4>
<table style="width: 100%; border-collapse: collapse; font-size: 15px;">
  <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Amount:</td><td style="padding: 8px 0; font-weight: 600; color: #1f2937;">₹${amount}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Order ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${orderId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Payment ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${paymentId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Status:</td><td style="padding: 8px 0; font-weight: 600;"><span style="background: ${statusObj.bg}; color: ${statusObj.text}; padding: 4px 10px; border-radius: 6px; font-size: 14px;">${statusObj.label}</span></td></tr>
</table>
</div>
<p>Thank you for registering with ${companyName}.</p>
<p>Regards,<br/>${companyName}</p>`);
    } else if (productType === 'consultation') {
      userSubject = 'Consultation Booking Confirmed';
      userHtml = baseUserHtml('Consultation Booking Confirmed', `<p>Hi ${name},</p>
<p>Thank you for booking a consultation with ${companyName}.</p>
<p>Your payment has been successfully received.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 25px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
<h4 style="margin-top: 0; color: #1f2937; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Booking Details</h4>
<table style="width: 100%; border-collapse: collapse; font-size: 15px;">
  <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Amount:</td><td style="padding: 8px 0; font-weight: 600; color: #1f2937;">₹${amount}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Order ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${orderId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Payment ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${paymentId}</td></tr>
</table>
</div>
<p>Our team will contact you shortly to schedule your consultation.</p>
<p>Regards,<br/>${companyName}</p>`);
    } else if (productType === 'site_visit_consultation') {
      userSubject = 'Site Visit Booking Confirmed';
      userHtml = baseUserHtml('Site Visit Booking Confirmed', `<p>Hi ${name},</p>
<p>Thank you for booking a Site Visit Consultation.</p>
<p>Your payment has been received successfully.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 25px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
<h4 style="margin-top: 0; color: #1f2937; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Booking Details</h4>
<table style="width: 100%; border-collapse: collapse; font-size: 15px;">
  <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Amount:</td><td style="padding: 8px 0; font-weight: 600; color: #1f2937;">₹${amount}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Order ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${orderId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Payment ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${paymentId}</td></tr>
</table>
</div>
<p>Our team will contact you soon to confirm the visit schedule.</p>
<p>Regards,<br/>${companyName}</p>`);
    } else {
      userSubject = `Payment Successful - ${companyName}`;
      userHtml = baseUserHtml('Payment Successful', `<p>Hi ${name},</p>
<p>Thank you for your order with ${companyName}.</p>
<p>Your payment has been successfully received.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 25px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
<h4 style="margin-top: 0; color: #1f2937; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Payment Details</h4>
<table style="width: 100%; border-collapse: collapse; font-size: 15px;">
  <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Amount:</td><td style="padding: 8px 0; font-weight: 600; color: #1f2937;">₹${amount}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Order ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${orderId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Payment ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${paymentId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Status:</td><td style="padding: 8px 0; font-weight: 600;"><span style="background: ${statusObj.bg}; color: ${statusObj.text}; padding: 4px 10px; border-radius: 6px; font-size: 14px;">${statusObj.label}</span></td></tr>
</table>
</div>
<p>Regards,<br/>${companyName}</p>`);
    }
  } else if (paymentStatus === 'CANCELLED' || paymentStatus === 'FAILED') {
    if (!repaymentEmailSent) {
      needsUserEmail = true;
      userSubject = 'Payment Cancelled - Action Required';
      userHtml = baseUserHtml('Payment Incomplete', `<p>Hi ${name},</p>
<p>Your payment process has been cancelled or left incomplete.</p>
<p>No amount has been charged.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 25px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.02);">
<h4 style="margin-top: 0; color: #1f2937; font-size: 18px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Payment Details : (${serviceName})</h4>
<table style="width: 100%; border-collapse: collapse; font-size: 15px;">
  <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Amount:</td><td style="padding: 8px 0; font-weight: 600; color: #1f2937;">₹${amount}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Order ID:</td><td style="padding: 8px 0; font-weight: 500; color: #374151;">${orderId}</td></tr>
  <tr><td style="padding: 8px 0; color: #6b7280;">Status:</td><td style="padding: 8px 0; font-weight: 600;"><span style="background: ${statusObj.bg}; color: ${statusObj.text}; padding: 4px 10px; border-radius: 6px; font-size: 14px;">${statusObj.label}</span></td></tr>
</table>
</div>
<p>If this was accidental, you can securely complete your booking right now by clicking the button below:</p>
<div style="text-align: center; margin: 35px 0;">
  <a href="${BASE_URL}/repay/${orderId}" style="background-color: #7E22CE; color: #ffffff; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(126, 34, 206, 0.3);">
    Complete Payment
  </a>
</div>
<p>If you experienced any issues during payment, please contact our support team.</p>
<p>Regards,<br/>${companyName}</p>`);
    }
  }

  // Admin Email is for ALL statuses
  const adminSubject = `Admin Alert: Payment ${paymentStatus} (${serviceName})`;
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
        <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Payment ${paymentStatus}</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Mobile:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${mobile}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Amount:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">₹${amount}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${serviceName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Order ID:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${orderId}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Payment ID:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${paymentId || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Status:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${paymentStatus}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date & Time:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${dateStr}</td></tr>
        </table>
      </div>
    </body>
    </html>
  `;

  return {
    userEmail: needsUserEmail && email ? {
      subject: userSubject,
      html: userHtml
    } : null,
    adminEmail: {
      subject: adminSubject,
      html: adminHtml
    }
  };
};

export const setupEmailListener = (db: Firestore) => {
  const registrationsRef = collection(db, 'registrations');
  const q = query(registrationsRef, where('notificationSent', '==', false));

  console.log("Setting up Firestore email listener for registrations...");

  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === 'added' || change.type === 'modified') {
        const data = change.doc.data();
        const docId = change.doc.id;

        const emails = getEmails(data);

        try {
          // Send to Admin
          if (emails.adminEmail) {
            await transporter.sendMail({
              from: `Organic Mushrooms Farm <${process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com'}>`,
              to: ADMIN_EMAIL,
              subject: emails.adminEmail.subject,
              html: emails.adminEmail.html
            });
            console.log(`Admin email sent successfully for Order: ${docId}, Status: ${data.paymentStatus}`);
          }

          // Send to User
          if (emails.userEmail && data.email) {
            await transporter.sendMail({
              from: `Organic Mushrooms Farm <${process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com'}>`,
              to: data.email,
              subject: emails.userEmail.subject,
              html: emails.userEmail.html
            });
            console.log(`User email sent successfully for Order: ${docId}, Status: ${data.paymentStatus}`);
          }

          const updates: any = { notificationSent: true };
          if (data.paymentStatus === 'CANCELLED' || data.paymentStatus === 'FAILED') {
            updates.repaymentEmailSent = true;
          }

          // Mark as sent
          await updateDoc(doc(db, 'registrations', docId), updates);
        } catch (error) {
          console.error(`Error processing email for doc ${docId}:`, error);
          // In production, we don't mark it as sent so it retries
        }
      }
    });
  }, (error) => {
    console.error("Firestore listener error:", error);
  });
};

export const processEmailsForRegistration = async (docId: string, data: any, db: Firestore) => {
  const emails = getEmails(data);
  if (!emails) return;

  try {
    // Send to Admin
    if (emails.adminEmail) {
      await transporter.sendMail({
        from: `Organic Mushrooms Farm <${process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com'}>`,
        to: ADMIN_EMAIL,
        subject: emails.adminEmail.subject,
        html: emails.adminEmail.html
      });
      console.log(`Admin email sent successfully for Order: ${docId}, Status: ${data.paymentStatus}`);
    }

    // Send to User
    if (emails.userEmail && data.email) {
      await transporter.sendMail({
        from: `Organic Mushrooms Farm <${process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com'}>`,
        to: data.email,
        subject: emails.userEmail.subject,
        html: emails.userEmail.html
      });
      console.log(`User email sent successfully for Order: ${docId}, Status: ${data.paymentStatus}`);
    }

    const updates: any = { notificationSent: true };
    if (data.paymentStatus === 'CANCELLED' || data.paymentStatus === 'FAILED') {
      updates.repaymentEmailSent = true;
    }

    // Mark as sent
    await updateDoc(doc(db, 'registrations', docId), updates);
  } catch (error) {
    console.error(`Error processing email for doc ${docId}:`, error);
  }
};
