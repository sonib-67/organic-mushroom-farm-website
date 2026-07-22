const fs = require('fs');

const code = `import * as nodemailer from 'nodemailer';
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

const formatProductType = (productType: string) => {
  if (productType?.includes('training')) return 'Training';
  if (productType === 'workshop') return 'Workshop';
  if (productType === 'consultation') return 'Book Consultant';
  if (productType === 'site_visit_consultation') return 'Site Visit Consultant';
  if (productType?.includes('spawn')) return 'Spawn Purchase';
  if (productType?.includes('mushroom')) return 'Fresh / Dry Mushroom Purchase';
  return productType || 'Service';
};

const getEmails = (data: any) => {
  const { name, email, mobile, orderId, paymentId, amount, paymentStatus, createdAt, productType } = data;
  const dateStr = new Date(createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const companyName = "Organic Mushrooms Farm";
  const serviceName = formatProductType(productType);

  let userSubject = "";
  let userHtml = "";

  const baseUserHtml = (content: string) => \`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background-color: #ffffff; padding: 20px; text-align: center; border-bottom: 1px solid #eee;">
          <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" alt="Organic Mushrooms Farm Logo" style="width: 80px; height: 80px; object-fit: cover; border-radius: 50%; border: 2px solid #3b82f6;" />
          <h2 style="color: #333; margin: 10px 0 0 0; font-size: 22px;">\${companyName}</h2>
        </div>

        <!-- Body -->
        <div style="padding: 30px; color: #4a5568; font-size: 16px; line-height: 1.6;">
          \${content}
        </div>

      </div>
    </body>
    </html>
  \`;

  if (paymentStatus === 'SUCCESS') {
    if (productType?.includes('training')) {
      userSubject = 'Payment Confirmed – Your Training Registration is Successful';
      userHtml = baseUserHtml(\`<p>Hi \${name},</p>
<p>Thank you for registering with \${companyName}.</p>
<p>We have successfully received your payment.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h4 style="margin-top: 0;">Payment Details</h4>
<p>Payment Status: ✅ Successful<br/>
Amount: ₹\${amount}<br/>
Order ID: \${orderId}<br/>
Payment ID: \${paymentId}<br/>
Date: \${dateStr}</p>
</div>
<p>Your registration has been confirmed successfully.</p>
<p>Our team will contact you shortly with the next steps.</p>
<p>Thank you for choosing \${companyName}.</p>
<p>Regards,<br/>\${companyName}<br/>📧 organicmushroomsfarms@gmail.com</p>\`);
    } else if (productType === 'workshop') {
      userSubject = 'Workshop Registration Confirmed';
      userHtml = baseUserHtml(\`<p>Hi \${name},</p>
<p>Your payment has been received successfully.</p>
<p>Your workshop registration is now confirmed.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h4 style="margin-top: 0;">Payment Details</h4>
<p>Amount: ₹\${amount}<br/>
Order ID: \${orderId}<br/>
Payment ID: \${paymentId}<br/>
Status: Successful</p>
</div>
<p>Thank you for registering with \${companyName}.</p>
<p>Regards,<br/>\${companyName}</p>\`);
    } else if (productType === 'consultation') {
      userSubject = 'Consultation Booking Confirmed';
      userHtml = baseUserHtml(\`<p>Hi \${name},</p>
<p>Thank you for booking a consultation with \${companyName}.</p>
<p>Your payment has been successfully received.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h4 style="margin-top: 0;">Booking Details</h4>
<p>Amount: ₹\${amount}<br/>
Order ID: \${orderId}<br/>
Payment ID: \${paymentId}</p>
</div>
<p>Our team will contact you shortly to schedule your consultation.</p>
<p>Regards,<br/>\${companyName}</p>\`);
    } else if (productType === 'site_visit_consultation') {
      userSubject = 'Site Visit Booking Confirmed';
      userHtml = baseUserHtml(\`<p>Hi \${name},</p>
<p>Thank you for booking a Site Visit Consultation.</p>
<p>Your payment has been received successfully.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h4 style="margin-top: 0;">Booking Details</h4>
<p>Amount: ₹\${amount}<br/>
Order ID: \${orderId}<br/>
Payment ID: \${paymentId}</p>
</div>
<p>Our team will contact you soon to confirm the visit schedule.</p>
<p>Regards,<br/>\${companyName}</p>\`);
    } else {
      userSubject = \`Payment Successful - \${companyName}\`;
      userHtml = baseUserHtml(\`<p>Hi \${name},</p>
<p>Thank you for your order with \${companyName}.</p>
<p>Your payment has been successfully received.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h4 style="margin-top: 0;">Payment Details</h4>
<p>Amount: ₹\${amount}<br/>
Order ID: \${orderId}<br/>
Payment ID: \${paymentId}<br/>
Status: Successful</p>
</div>
<p>Regards,<br/>\${companyName}</p>\`);
    }
  } else if (paymentStatus === 'CANCELLED') {
    userSubject = 'Payment Cancelled';
    userHtml = baseUserHtml(\`<p>Hi \${name},</p>
<p>Your payment process has been cancelled.</p>
<p>No amount has been charged.</p>
<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
<h4 style="margin-top: 0;">Payment Details : (\${serviceName})</h4>
<p>Amount: ₹\${amount}<br/>
Order ID: \${orderId}<br/>
Status: Cancelled</p>
</div>
<p>If this was accidental, you can complete your booking anytime by revisiting our website.</p>
<p>If you experienced any issues during payment, please contact our support team.</p>
<p>Regards,<br/>\${companyName}<br/>📧 organicmushroomsfarms@gmail.com</p>\`);
  }

  // Admin Email is for ALL statuses
  const adminSubject = \`Admin Alert: Payment \${paymentStatus} (\${serviceName})\`;
  const adminHtml = \`
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
        <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Payment \${paymentStatus}</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\${name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\${email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Mobile:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\${mobile}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Amount:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">₹\${amount}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\${serviceName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Order ID:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\${orderId}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Payment ID:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\${paymentId || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Status:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\${paymentStatus}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date & Time:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">\${dateStr}</td></tr>
        </table>
      </div>
    </body>
    </html>
  \`;

  return {
    userEmail: (paymentStatus === 'SUCCESS' || paymentStatus === 'CANCELLED') && email ? {
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
              from: \`Organic Mushrooms Farm <\${process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com'}>\`,
              to: ADMIN_EMAIL,
              subject: emails.adminEmail.subject,
              html: emails.adminEmail.html
            });
            console.log(\`Admin email sent successfully for Order: \${docId}, Status: \${data.paymentStatus}\`);
          }

          // Send to User
          if (emails.userEmail && data.email) {
            await transporter.sendMail({
              from: \`Organic Mushrooms Farm <\${process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com'}>\`,
              to: data.email,
              subject: emails.userEmail.subject,
              html: emails.userEmail.html
            });
            console.log(\`User email sent successfully for Order: \${docId}, Status: \${data.paymentStatus}\`);
          }

          // Mark as sent
          await updateDoc(doc(db, 'registrations', docId), {
            notificationSent: true
          });
        } catch (error) {
          console.error(\`Error processing email for doc \${docId}:\`, error);
          // In production, we don't mark it as sent so it retries
        }
      }
    });
  }, (error) => {
    console.error("Firestore listener error:", error);
  });
};
`
fs.writeFileSync('src/emailService.ts', code);
