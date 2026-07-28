import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-xRGrHfCUi1BGxE1ewXbmEwuvn54UDH4",
  authDomain: "nic-mushrooom-farm.firebaseapp.com",
  projectId: "nic-mushrooom-farm",
  storageBucket: "nic-mushrooom-farm.firebasestorage.app",
  messagingSenderId: "541611352556",
  appId: "1:541611352556:web:597e7c729a169decbda0c9"
};

let db: any;
try {
  const firebaseApp = initializeApp(firebaseConfig);
  db = getFirestore(firebaseApp);
} catch (error) {
  console.error("Firebase init error:", error);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || "Sonib491@";
const META_PIXEL_ID = process.env.META_PIXEL_ID || "925374987123460";
const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN || "";

async function getRawBody(req: VercelRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(body);
    });
    req.on('error', (err) => {
      reject(err);
    });
  });
}

const hashMetaUserData = (str: string) => {
    if (!str) return "";
    return crypto.createHash('sha256').update(str.trim().toLowerCase()).digest('hex');
};

async function sendMetaCAPIEvent(eventName: string, paymentData: any, notes: any) {
    if (!META_CAPI_TOKEN) {
        console.warn("No META_CAPI_TOKEN provided. Skipping CAPI event.");
        return;
    }

    const customerEmail = paymentData.email || notes.customerEmail || "";
    const customerPhone = paymentData.contact || notes.customerPhone || "";
    const clientIp = notes.clientIp || "";
    const userAgent = notes.userAgent || "";
    const amount = paymentData.amount / 100;
    
    const payload = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                action_source: "website",
                user_data: {
                    client_ip_address: clientIp,
                    client_user_agent: userAgent,
                    em: customerEmail ? [hashMetaUserData(customerEmail)] : undefined,
                    ph: customerPhone ? [hashMetaUserData(customerPhone.replace(/\D/g, ''))] : undefined,
                },
                custom_data: {
                    currency: "INR",
                    value: amount,
                    content_name: notes.productType || "unknown_product",
                    order_id: paymentData.order_id || paymentData.id
                }
            }
        ]
    };

    try {
        const response = await fetch(`https://graph.facebook.com/v18.0/${META_PIXEL_ID}/events`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...payload, access_token: META_CAPI_TOKEN })
        });
        const result = await response.json();
        console.log(`[Meta CAPI] ${eventName} sent:`, result);
    } catch (e) {
        console.error(`[Meta CAPI] Error sending ${eventName}:`, e);
    }
}



function createInvoicePDF(invoiceData: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const PDFDocument = require('pdfkit');
      const doc = new PDFDocument({ margin: 50 });
      let buffers: Buffer[] = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        let pdfData = Buffer.concat(buffers);
        resolve(pdfData);
      });

      doc.fillColor('#444444')
         .fontSize(20)
         .text('Organic Mushroom Farm', 50, 57)
         .fontSize(10)
         .text('123 Farming Street', 200, 50, { align: 'right' })
         .text('Jabalpur, MP, India', 200, 65, { align: 'right' })
         .text('Phone: +91 9999999999', 200, 80, { align: 'right' })
         .moveDown();

      const generateHr = (y: number) => {
          doc.strokeColor('#aaaaaa').lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
      };
      
      generateHr(110);
      
      const invoiceStatus = invoiceData.paymentStatus === 'DONE' ? 'RECEIPT' : 'CANCELLED / FAILED';
      doc.fontSize(20).text(invoiceStatus, 50, 130);
      
      generateHr(165);
      
      const customerInformationTop = 180;
      doc.fontSize(10)
         .text('Invoice Number:', 50, customerInformationTop)
         .font('Helvetica-Bold')
         .text(invoiceData.orderId, 150, customerInformationTop)
         .font('Helvetica')
         .text('Invoice Date:', 50, customerInformationTop + 15)
         .text(new Date().toLocaleDateString(), 150, customerInformationTop + 15)
         .text('Amount Due:', 50, customerInformationTop + 30)
         .text(invoiceData.paymentStatus === 'DONE' ? '0.00' : invoiceData.amount, 150, customerInformationTop + 30)

         .font('Helvetica-Bold')
         .text(invoiceData.customerName, 300, customerInformationTop)
         .font('Helvetica')
         .text(invoiceData.customerEmail, 300, customerInformationTop + 15)
         .moveDown();
         
      generateHr(237);
      
      const invoiceTableTop = 280;
      doc.font('Helvetica-Bold');
      doc.text('Item', 50, invoiceTableTop);
      doc.text('Status', 300, invoiceTableTop);
      doc.text('Total', 450, invoiceTableTop, { align: 'right' });
      generateHr(300);
      
      doc.font('Helvetica');
      doc.text(invoiceData.productType, 50, 310);
      doc.text(invoiceData.paymentStatus, 300, 310);
      doc.text(invoiceData.amount, 450, 310, { align: 'right' });
      generateHr(330);
      
      doc.fontSize(10).text(
          'Thank you for your business!',
          50,
          700,
          { align: 'center', width: 500 }
      );
      
      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

async function sendUserEmail(customerEmail: string, customerName: string, productType: string, amount: string, orderId: string, paymentStatus: 'DONE' | 'FAILED') {
  if (!customerEmail) return;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
      },
    });

    let subject = "";
    let htmlBody = "";

    // Normalize product type checking
    const normalizedProductType = productType ? productType.toLowerCase() : "";
    
    // Always fall back to a good default if it's undefined or unknown
    let isBasic = normalizedProductType.includes("basic") || productType === "training" || productType === "training_basic";
    let isAdvanced = normalizedProductType.includes("advanced") || productType === "training_advanced";
    let isWorkshop = normalizedProductType.includes("workshop");
    let isConsultation = normalizedProductType.includes("1-on-1") || productType === "consultation" || normalizedProductType.includes("expert");
    let isSiteVisit = normalizedProductType.includes("site visit") || productType === "site_visit_consultation";
    let isSpawn = normalizedProductType.includes("spawn");
    let isFreshDry = normalizedProductType.includes("mushroom") && !isBasic && !isAdvanced && !isWorkshop;

    // If it's literally just 'training' or 'unknown' and the amount is 699, it's advanced
    if (amount.includes("699")) isAdvanced = true;
    if (amount.includes("299")) isBasic = true;
    if (amount.includes("199")) isWorkshop = true;
    if (amount.includes("59")) isConsultation = true;
    if (amount.includes("500")) isSiteVisit = true;
    
    if (isBasic) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>Payment Successful! Thank you for your payment of ₹299.<br/><br/>Your enrollment for the Basic Mushroom Cultivation Training is successfully confirmed. We are excited to help you start your mushroom farming journey. Our team will share the training link and schedule with you shortly.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>We noticed that your payment of ₹299 for the Basic Mushroom Cultivation Training was cancelled or could not be completed.<br/><br/>Don't let this pause your learning journey! If you faced any technical issues during checkout, please try again or contact our support team for assistance. We would love to have you in our training.<br/><br/><br/><a href="https://organicmushroomsfarm.com/training" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Retry Payment / Secure Your Seat</a><br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else if (isAdvanced) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>Payment Confirmed! Thank you for your payment of ₹699.<br/><br/>Your seat for the Advanced Commercial Cultivation Training is reserved. You have taken a great step towards mastering commercial farming. Our team will send you the access details and next steps very soon.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>It looks like your payment of ₹699 for the Advanced Commercial Cultivation Training was not processed successfully.<br/><br/>Commercial farming requires the right guidance, and we don't want you to miss out! Please attempt the payment again to secure your spot. Let us know if you need any help.<br/><br/><br/><a href="https://organicmushroomsfarm.com/training" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Retry Payment / Secure Your Seat</a><br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else if (isWorkshop) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>Payment Received! Thank you for your payment of ₹199.<br/><br/>You are officially registered for our Organic Mushroom Farming Workshop. We are thrilled to share our premium organic farming secrets with you. Stay tuned for the workshop details!<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>We noticed that your payment attempt of ₹199 for the Organic Mushroom Farming Workshop was cancelled.<br/><br/>Your seat is still waiting for you! If you encountered an error, please try completing the transaction again. Feel free to reach out if you need any support.<br/><br/><br/><a href="https://organicmushroomsfarm.com/training" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Retry Payment / Secure Your Seat</a><br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else if (isConsultation) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>Payment Successful! Thank you for your payment of ₹59.<br/><br/>Your Expert 1-on-1 Business Consultation is confirmed. Our team will contact you shortly to schedule a convenient date and time for your personalized guidance session.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>Your payment of ₹59 for the Expert 1-on-1 Business Consultation could not be completed.<br/><br/>To get personalized, expert guidance for your mushroom business, please try completing your payment again. We are here to help if you face any issues!<br/><br/><br/><a href="https://organicmushroomsfarm.com/training" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Retry Payment / Secure Your Seat</a><br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else if (isSiteVisit) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>Payment Confirmed! Thank you for your payment of ₹500 for the On-Site Visit Consultation.<br/><br/>We are looking forward to visiting your farm location to provide a highly optimized setup strategy. Our team will get in touch with you to fix the date and time for the visit.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>We noticed your payment of ₹500 for the On-Site Visit Consultation was cancelled.<br/><br/>An on-ground evaluation is the best way to plan a successful farm. Please retry your payment to book the visit, or contact us directly if you are facing any technical difficulties.<br/><br/><br/><a href="https://organicmushroomsfarm.com/training" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Retry Payment / Secure Your Seat</a><br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else if (isSpawn) {
      if (paymentStatus === 'DONE') {
        subject = "Payment Successful - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>Payment Received! Your payment for the Mushroom Spawn Purchase has been successfully processed.<br/><br/>We are preparing your high-quality, high-yielding spawn for dispatch. Our dispatch team will share the shipping and tracking details with you shortly.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      } else {
        subject = "Payment Failed/Cancelled - Organic Mushroom Farm";
        htmlBody = `Hi ${customerName},<br/><br/>Your payment for the Mushroom Spawn Purchase was cancelled or declined.<br/><br/>To ensure your farm gets the highest quality seeds on time without any delay, please try checking out again. Let us know if you need any assistance with the transaction!<br/><br/><br/><a href="https://organicmushroomsfarm.com/training" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Retry Payment / Secure Your Seat</a><br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team`;
      }
    } else {
      // Completely new fallback message so user knows it's the NEW code
      if (paymentStatus === 'DONE') {
        subject = `Payment Received - Organic Mushroom Farm`;
        htmlBody = `
          <h2>Payment Received!</h2>
          <p>Hi ${customerName},</p>
          <p>Great news! Your payment for <strong>${productType}</strong> was successfully processed.</p>
          <p><strong>Amount Paid:</strong> ${amount}</p>
          <p><strong>Transaction ID:</strong> ${orderId}</p>
          <p>We are processing your order and will contact you shortly with the next steps.</p>
          <br/>
          <p>Warm regards,<br/>Organic Mushroom Farm Team</p>
        `;
      } else {
        subject = `Payment Cancelled/Failed - Organic Mushroom Farm`;
        htmlBody = `
          <h2>Payment Action Required</h2>
          <p>Hi ${customerName},</p>
          <p>We noticed your payment for <strong>${productType}</strong> (Amount: ${amount}) could not be completed.</p>
          <p><strong>Transaction ID:</strong> ${orderId}</p>
          <p>If you faced any technical issues, please try checking out again on our website. Any deducted amount will be refunded by your bank automatically.</p>
          <br/>
          <p>Warm regards,<br/>Organic Mushroom Farm Team</p>
        `;
      }
    }

    const mailOptions: any = {
      from: `"Organic Mushroom Farm" <${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>`,
      to: customerEmail,
      subject: subject,
      html: htmlBody,
    };

    try {
      const invoiceBuffer = await createInvoicePDF({
         customerName, customerEmail, orderId, paymentStatus, productType, amount
      });
      mailOptions.attachments = [
        {
          filename: `Invoice_${orderId}.pdf`,
          content: invoiceBuffer,
          contentType: 'application/pdf'
        }
      ];
    } catch (pdfErr) {
      console.error("Error generating PDF:", pdfErr);
    }

    await transporter.sendMail(mailOptions);
    console.log(`[Nodemailer] User email sent for ${paymentStatus}`);
  } catch (err) {
    console.error("[Nodemailer] Failed to send user email:", err);
  }
}

async function sendToFormspree(payload: {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderId: string;
  paymentId: string;
  amount: string;
  productType: string;
  paymentStatus: 'DONE' | 'FAILED';
}) {
  try {
    const response = await fetch('https://formspree.io/f/mwvazwnl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        subject: `Payment ${payload.paymentStatus}: ${payload.productType} (${payload.amount})`,
        name: payload.customerName,
        User_Email: payload.customerEmail,
        phone: payload.customerPhone,
        orderId: payload.orderId,
        paymentId: payload.paymentId,
        amount: payload.amount,
        productType: payload.productType,
        paymentStatus: payload.paymentStatus,
        dateTime: new Date().toLocaleString()
      })
    });
    if (!response.ok) {
      console.error("[Formspree] Error:", await response.text());
    } else {
      console.log("[Formspree] Notification sent successfully");
    }
  } catch (err) {
    console.error("[Formspree] Failed to send:", err);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers['x-razorpay-signature'] as string;

    if (!signature) {
      return res.status(400).send('Signature missing');
    }

    const expectedSignature = crypto
      .createHmac('sha256', WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error("Invalid signature");
      return res.status(400).send('Invalid signature');
    }

    const event = JSON.parse(rawBody);
    const payment = event.payload.payment.entity;
    
    const notes = payment.notes || {};
    const productType = notes.productType || "unknown";
    const customerName = notes.customerName || payment.email;
    const customerEmail = payment.email || notes.customerEmail;
    const customerPhone = payment.contact || notes.customerPhone;
    
    const amountStr = "INR " + (payment.amount / 100).toString();

    const placeholders = {
      customerName,
      customerEmail,
      customerPhone,
      orderId: payment.order_id || payment.id,
      amount: amountStr
    };

    if (db) {
        try {
            await addDoc(collection(db, 'analytics_events'), {
                event_name: `webhook_${event.event}`,
                event_data: { payload: event.payload, account_id: event.account_id },
                session_id: payment.id,
                url: '/api/razorpay-webhook',
                user_agent: req.headers['user-agent'] || '',
                client_ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0],
                created_at: new Date().toISOString()
            });

            if (event.event === 'payment.captured' || event.event === 'payment.failed') {
                const paymentsRef = collection(db, 'payments');
                const q = query(paymentsRef, where('payment_id', '==', payment.id));
                const querySnapshot = await getDocs(q);
                
                if (!querySnapshot.empty) {
                    const existingPayment = querySnapshot.docs[0].data();
                    if (existingPayment.payment_status === 'success' || existingPayment.payment_status === event.event.split('.')[1]) {
                        console.log(`Duplicate webhook or already processed: ${payment.id}`);
                        return res.status(200).send('Already processed');
                    }
                }
            }
        } catch(e) {
            console.error("Firebase analytics/duplicate check error:", e);
        }
    }

    if (event.event === 'payment.captured') {
        // Send Purchase to Meta CAPI
        await sendMetaCAPIEvent('Purchase', payment, notes);

        // Notify Formspree
        await sendToFormspree({
            customerName,
            customerEmail,
            customerPhone,
            orderId: payment.order_id || '',
            paymentId: payment.id,
            amount: amountStr,
            productType,
            paymentStatus: 'DONE'
        });
        await sendUserEmail(customerEmail, customerName, productType, amountStr, payment.order_id || '', 'DONE');

        if (db) {
            try {
                const customersRef = collection(db, 'customers');
                const cq = query(customersRef, where('email', '==', customerEmail));
                const customerSnapshot = await getDocs(cq);
                if (customerSnapshot.empty) {
                    await addDoc(customersRef, { name: customerName, email: customerEmail, phone: customerPhone, created_at: new Date().toISOString() });
                }
                
                // Using addDoc for simplicity mimicking upsert behaviour assuming duplication check handled it above mostly
                await setDoc(doc(db, 'payments', payment.id), {
                    payment_id: payment.id,
                    order_id: payment.order_id || '',
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    payment_status: 'success',
                    amount: payment.amount,
                    created_at: new Date().toISOString()
                }, { merge: true });

                if (productType === "consultation") {
                    await addDoc(collection(db, 'consultant_bookings'), {
                        customer_name: customerName,
                        customer_email: customerEmail,
                        customer_phone: customerPhone,
                        preferred_date: notes.preferredDate || "",
                        status: 'success',
                        order_id: payment.order_id,
                        created_at: new Date().toISOString()
                    });
                } else if (productType === "training") {
                    await addDoc(collection(db, 'training_orders'), {
                        customer_name: customerName,
                        customer_email: customerEmail,
                        customer_phone: customerPhone,
                        status: 'success',
                        order_id: payment.order_id,
                        created_at: new Date().toISOString()
                    });
                }
            } catch (firestoreError) {
                console.error("Firestore captured error:", firestoreError);
            }
        }

    } else if (event.event === 'payment.failed') {
        // Send PaymentFailed to Meta CAPI
        await sendMetaCAPIEvent('PaymentFailed', payment, notes);

        // Notify Formspree
        await sendToFormspree({
            customerName,
            customerEmail,
            customerPhone,
            orderId: payment.order_id || '',
            paymentId: payment.id,
            amount: amountStr,
            productType,
            paymentStatus: 'FAILED'
        });
        await sendUserEmail(customerEmail, customerName, productType, amountStr, payment.order_id || '', 'FAILED');

        if (db) {
            try {
                await setDoc(doc(db, 'payments', payment.id), {
                    payment_id: payment.id,
                    order_id: payment.order_id || '',
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    payment_status: 'failed',
                    amount: payment.amount,
                    notes: payment.error_description ? { error: payment.error_description } : {},
                    created_at: new Date().toISOString()
                }, { merge: true });
            } catch (firestoreError) {
                console.error("Firestore failed error:", firestoreError);
            }
        }
    }
    
    // Additional logic for pending could be mapped if needed via orders webhooks

    return res.status(200).send('OK');
  } catch (error) {
    console.error("Webhook processing error:", error);
    return res.status(500).send('Internal Server Error');
  }
}
