import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as nodemailer from 'nodemailer';

const PDFDocument = require('pdfkit');

function createInvoicePDF(invoiceData: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
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
      
      doc.fontSize(20).text('CANCELLED', 50, 130);
      
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
         .text(invoiceData.amount, 150, customerInformationTop + 30)
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
      doc.text('CANCELLED', 300, 310);
      doc.text(invoiceData.amount, 450, 310, { align: 'right' });
      generateHr(330);
      
      doc.fontSize(10).text(
          'Looking forward to serving you next time!',
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  
  try {
    const { name, email, productType, amount, orderId } = req.body;
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com",
        pass: process.env.EMAIL_PASS || "jzqqntulcifrfyul",
      },
    });

    const htmlBody = `
      <h2>Payment Cancelled</h2>
      <p>Hi ${name},</p>
      <p>We noticed that your checkout for <strong>${productType}</strong> was cancelled.</p>
      <p>If you faced any technical issues, please try again or contact our support team. We'd love to help!</p>
      <br/><br/><a href="https://organicmushroomsfarm.com" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Retry Payment / Visit Website</a><br/>
      <p>Warm regards,<br/>Organic Mushroom Farm Team</p>
    `;

    const mailOptions: any = {
      from: `"Organic Mushroom Farm" <${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>`,
      to: email,
      subject: `Payment Cancelled - ${productType}`,
      html: htmlBody,
    };

    try {
      const invoiceBuffer = await createInvoicePDF({
         customerName: name, customerEmail: email, orderId, paymentStatus: 'CANCELLED', productType, amount
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
    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error("Error sending cancellation email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
