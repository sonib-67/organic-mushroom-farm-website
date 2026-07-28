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
            replyTo: 'no-reply@organicmushroomsfarm.com',
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
      replyTo: 'no-reply@organicmushroomsfarm.com',
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
  let signatureBuffer: Buffer | null = null;
  try {
    const res = await fetch('https://res.cloudinary.com/dnw4fpk2y/image/upload/v1785228588/Screenshot_2026-07-28-14-18-02-618-edit_com.android.chrome-removebg-preview_qk40by.png');
    signatureBuffer = Buffer.from(await res.arrayBuffer());
  } catch (e) {
    console.error('Failed to fetch signature image', e);
  }

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 0, size: 'A4' });
      const buffers: Buffer[] = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', reject);

      const primary = '#1f2937'; // Luxury dark charcoal
      const accent = '#bca87f';  // Luxury muted gold
      const textDark = '#111827';
      const textMuted = '#6b7280';
      const textLight = '#9ca3af';
      
      // Luxury background - soft warm white
      doc.rect(0, 0, 595, 842).fill('#fdfbf7');

      // Top Header Line
      doc.rect(0, 0, 595, 6).fill(accent);

      // INVOICE Title (Top)
      doc.fillColor(accent).fontSize(36).font('Helvetica-Bold').text('INVOICE', 50, 40);

      // Company Header (Below INVOICE)
      doc.fillColor(primary).fontSize(20).font('Helvetica-Bold').text('Organic Mushroom Farm', 50, 85);
      doc.fillColor(textMuted).fontSize(10).font('Helvetica')
         .text('Jabalpur, Madhya Pradesh', 50, 110);

      // Invoice Details (Right)
      const invoiceNo = 'INV-' + Math.floor(100000 + Math.random() * 900000);
      const invoiceDate = new Date();
      
      let statusText = 'Pending';
      let statusColor = textMuted;
      if (payload.status === 'DONE' || payload.status === 'SUCCESS') {
         statusText = 'Paid / Done';
         statusColor = '#15803d'; // Green
      } else if (payload.status === 'CANCELLED' || payload.status === 'FAILED') {
         statusText = 'Cancelled / Failed';
         statusColor = '#b91c1c'; // Red
      }

      doc.fillColor(textDark).fontSize(10).font('Helvetica-Bold')
         .text('Invoice No:', 350, 50)
         .text('Invoice Date:', 350, 65)
         .text('Payment Mode:', 350, 80)
         .text('Status:', 350, 95);
         
      doc.fillColor(textMuted).font('Helvetica')
         .text(invoiceNo, 450, 50, { align: 'right', width: 95 })
         .text(invoiceDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }), 450, 65, { align: 'right', width: 95 })
         .text(payload.paymentMode || 'Online Payment', 450, 80, { align: 'right', width: 95 });
         
      doc.fillColor(statusColor).font('Helvetica-Bold')
         .text(statusText, 450, 95, { align: 'right', width: 95 });

      // Clean divider
      doc.moveTo(50, 125).lineTo(545, 125).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Billed To Section
      doc.fillColor(textLight).fontSize(9).font('Helvetica-Bold').text('BILLED TO', 50, 145, { characterSpacing: 1.5 });
      doc.fillColor(textDark).fontSize(14).font('Helvetica-Bold').text(payload.name || 'Customer', 50, 160);
      
      doc.fillColor(textMuted).fontSize(10).font('Helvetica')
         .text(payload.email || '', 50, 180)
         .text('Phone: ' + (payload.phone || 'N/A'), 50, 195);

      // Table styling (Minimalist Luxury)
      const tableTop = 240;
      doc.moveTo(50, tableTop).lineTo(545, tableTop).lineWidth(1).strokeColor(primary).stroke();
      
      doc.fillColor(primary).font('Helvetica-Bold').fontSize(9)
         .text('DESCRIPTION', 50, tableTop + 15, { characterSpacing: 1 })
         .text('AMOUNT', 0, tableTop + 15, { align: 'right', width: 545, characterSpacing: 1 });
         
      doc.moveTo(50, tableTop + 35).lineTo(545, tableTop + 35).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Cleanup amount to avoid strange characters or currency symbols rendering incorrectly
      let amountDisplay = String(payload.amount || '0');
      amountDisplay = amountDisplay.replace(/[^0-9.,]/g, '').trim();

      // Table Row
      const rowTop = tableTop + 55;
      doc.fillColor(textDark).font('Helvetica').fontSize(11)
         .text(payload.productType || 'N/A', 50, rowTop)
         .text('Rs. ' + amountDisplay, 0, rowTop, { align: 'right', width: 545 });
         
      // Divider
      doc.moveTo(50, rowTop + 30).lineTo(545, rowTop + 30).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Total Section
      const totalTop = rowTop + 60;

      doc.fillColor(textDark).font('Helvetica-Bold').fontSize(12)
         .text('TOTAL', 370, totalTop, { characterSpacing: 1 })
      doc.fillColor(accent).fontSize(18)
         .text('Rs. ' + amountDisplay, 0, totalTop - 2, { align: 'right', width: 545 });

      // Signatory Section (Right Side)
      if (signatureBuffer) {
        try {
          doc.image(signatureBuffer, 380, totalTop + 60, { height: 60 });
        } catch(imgErr) {
          console.error('Failed to embed signature', imgErr);
        }
      }
      doc.moveTo(370, totalTop + 125).lineTo(545, totalTop + 125).lineWidth(0.5).strokeColor('#e5e7eb').stroke();
      doc.fillColor(textLight).font('Helvetica').fontSize(9).text('Authorized Signatory', 370, totalTop + 135, { align: 'right', width: 175 });

      doc.end();
    } catch (e) {
      reject(e);
    }
  });
}
