import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';
import PDFDocument from 'pdfkit';

// In-memory store for tracking initiated payments (works well in long-running processes)
const pendingPayments = new Map<string, NodeJS.Timeout>();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;
    await handlePaymentNotification(payload);
    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Error in payment notification:', err);
    return res.status(500).json({ error: err.message });
  }
}

export async function handlePaymentNotification(payload: any) {
  const { name, phone, email, preferredDate, productType, amount, status, paymentId, orderId } = payload;
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
      pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
    },
  });

  const adminEmail = process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com";
  const customerEmail = email || "no-reply@organicmushroomsfarm.com";
  const trackingKey = customerEmail + '-' + productType;

  if (status === 'INITIATED') {
    // 1. Send Admin Email
    const adminHtml = `
      <h2>Payment Initiated</h2>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${customerEmail}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Product/Training:</strong> ${productType}</p>
      <p><strong>Amount:</strong> ${amount}</p>
      <p><strong>Status:</strong> ${status}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `;
    await transporter.sendMail({
      from: adminEmail,
      to: adminEmail,
      subject: `Payment Initiated: ${productType} by ${name || 'Customer'}`,
      html: adminHtml,
    });

    // 2. Set timeout for 10 minutes to send repayment email if abandoned
    if (!pendingPayments.has(trackingKey)) {
      const timeout = setTimeout(async () => {
        try {
          const repaymentHtml = getCustomerEmailTemplate(
            'Complete Your Payment',
            `Hi ${name || 'Customer'},<br/><br/>We noticed you started a payment for <strong>${productType}</strong> but didn't complete it. Don't worry, you can easily pick up right where you left off.<br/><br/>If you faced any issues, please reply to this email and our support team will help you immediately.`
          );
          await transporter.sendMail({
            from: '"Organic Mushroom Farm" <' + adminEmail + '>',
            to: customerEmail,
            subject: 'Complete Your Organic Mushroom Farm Payment',
            html: repaymentHtml
          });
        } catch(e) {
          console.error("Failed to send repayment email", e);
        } finally {
          pendingPayments.delete(trackingKey);
        }
      }, 10 * 60 * 1000);
      pendingPayments.set(trackingKey, timeout);
    }
    
    // Customer does NOT get initiated email immediately.
    return;
  }

  // If DONE or CANCELLED, clear any pending timeout
  if (pendingPayments.has(trackingKey)) {
    clearTimeout(pendingPayments.get(trackingKey)!);
    pendingPayments.delete(trackingKey);
  }

  // 1. Send Admin Email for DONE / CANCELLED
  const adminHtml = `
    <h2>Payment ${status}</h2>
    <p><strong>Name:</strong> ${name || 'N/A'}</p>
    <p><strong>Email:</strong> ${customerEmail}</p>
    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    <p><strong>Product/Training:</strong> ${productType}</p>
    <p><strong>Amount:</strong> ${amount}</p>
    <p><strong>Status:</strong> ${status}</p>
    <p><strong>Payment ID:</strong> ${paymentId || 'N/A'}</p>
    <p><strong>Order ID:</strong> ${orderId || 'N/A'}</p>
    <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
  `;
  await transporter.sendMail({
    from: adminEmail,
    to: adminEmail,
    subject: `Payment ${status}: ${productType} by ${name || 'Customer'}`,
    html: adminHtml,
  });

  // 2. Send Customer Email with Invoice
  let customerSubject = '';
  let customerMessage = '';
  
  if (status === 'DONE') {
    customerSubject = `Payment Successful - ${productType}`;
    customerMessage = `Hi ${name || 'Customer'},<br/><br/>Great news! Your payment of <strong>${amount}</strong> for <strong>${productType}</strong> was successful.<br/><br/>Thank you for choosing Organic Mushroom Farm. Your support means the world to us. Please find your invoice attached.<br/><br/>If you have any questions, feel free to reply to this email.`;
  } else if (status === 'CANCELLED' || status === 'FAILED') {
    customerSubject = `Payment Cancelled - ${productType}`;
    customerMessage = `Hi ${name || 'Customer'},<br/><br/>Your payment of <strong>${amount}</strong> for <strong>${productType}</strong> was cancelled or failed.<br/><br/><strong>Reason:</strong> User cancelled or transaction declined.<br/><br/>You can try making the payment again on our website. Please let us know if you need any assistance.<br/>We have attached an invoice reflecting the cancelled transaction for your records.`;
  }

  if (customerMessage && customerEmail !== 'no-reply@organicmushroomsfarm.com') {
    const pdfBuffer = await generateInvoicePDF(payload);
    
    await transporter.sendMail({
      from: '"Organic Mushroom Farm" <' + adminEmail + '>',
      to: customerEmail,
      subject: customerSubject,
      html: getCustomerEmailTemplate(customerSubject, customerMessage),
      attachments: [
        {
          filename: 'Invoice_' + (orderId || 'Payment') + '.pdf',
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ]
    });
  }
}

function getCustomerEmailTemplate(title: string, content: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      *, *::before, *::after {
        box-sizing: border-box;
      }
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f7f6;
        margin: 0;
        padding: 10px;
      }
      .glass-container {
        max-width: 600px;
        margin: 0 auto;
        background: linear-gradient(135deg, rgba(255, 167, 38, 0.15) 0%, rgba(156, 39, 176, 0.15) 50%, rgba(76, 175, 80, 0.15) 100%);
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        word-break: break-word;
      }
      .header h1 {
        background: -webkit-linear-gradient(45deg, #FF9800, #9C27B0, #4CAF50);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        margin-top: 0;
        font-size: 24px;
      }
      .content {
        color: #333;
        line-height: 1.6;
        font-size: 15px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 15px;
        padding: 15px;
        box-shadow: inset 0 0 10px rgba(255,255,255,0.7), 0 4px 15px rgba(0,0,0,0.05);
        border: 1px solid rgba(255, 255, 255, 0.8);
        word-break: break-word;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #666;
        margin-top: 20px;
      }
    </style>
    </head>
    <body>
      <div class="glass-container">
        <div class="header">
          <h1>Organic Mushroom Farm</h1>
        </div>
        <div class="content">
          ${content}
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

async function generateInvoicePDF(payload: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50, size: 'A4' });
      const buffers: Buffer[] = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', reject);

      // Header
      doc.fillColor('#4CAF50').fontSize(24).text('Organic Mushroom Farm', { align: 'center' });
      doc.moveDown(0.5);
      doc.fillColor('#666666').fontSize(10).text('123 Mushroom Lane, Farmville, IN 12345', { align: 'center' });
      doc.text('Email: info@organicmushroomsfarm.com | Phone: +91 9876543210', { align: 'center' });
      
      doc.moveDown(2);
      
      // Title
      doc.fillColor('#333333').fontSize(18).text(payload.status === 'DONE' ? 'TAX INVOICE' : 'PROFORMA INVOICE', { align: 'center' });
      doc.moveDown(1.5);
      
      // Invoice Details
      doc.fontSize(12).fillColor('#000000');
      doc.text('Order ID: ' + (payload.orderId || 'N/A'));
      doc.text('Date: ' + new Date().toLocaleDateString());
      doc.text('Payment Status: ' + payload.status);
      doc.moveDown();

      // Customer Details
      doc.fillColor('#4CAF50').fontSize(14).text('Billed To:');
      doc.fillColor('#000000').fontSize(12);
      doc.text('Name: ' + (payload.name || 'Customer'));
      doc.text('Email: ' + (payload.email || 'N/A'));
      doc.text('Phone: ' + (payload.phone || 'N/A'));
      
      doc.moveDown(2);

      // Table Header
      const tableTop = doc.y;
      doc.fillColor('#4CAF50').rect(50, tableTop, 500, 25).fill();
      doc.fillColor('#FFFFFF').fontSize(12).text('Description', 60, tableTop + 7);
      doc.text('Amount', 450, tableTop + 7, { width: 90, align: 'right' });
      
      // Table Row
      const rowTop = tableTop + 35;
      doc.fillColor('#000000');
      doc.text(payload.productType, 60, rowTop);
      doc.text(payload.amount, 450, rowTop, { width: 90, align: 'right' });

      // Line
      doc.moveTo(50, rowTop + 25).lineTo(550, rowTop + 25).strokeColor('#CCCCCC').stroke();

      // Total
      doc.fontSize(14).text('Total:', 350, rowTop + 40, { width: 90, align: 'right' });
      doc.fillColor('#4CAF50').text(payload.amount, 450, rowTop + 40, { width: 90, align: 'right' });

      doc.moveDown(4);
      
      // Footer
      doc.fillColor('#666666').fontSize(10).text('Thank you for your business!', { align: 'center' });

      doc.end();
    } catch (e) {
      reject(e);
    }
  });
}
