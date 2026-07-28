const fs = require('fs');
let content = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

// Add import PDFDocument
if (!content.includes('import PDFDocument')) {
  content = content.replace(
    /import \* as nodemailer from 'nodemailer';/,
    "import * as nodemailer from 'nodemailer';\nimport PDFDocument from 'pdfkit';"
  );
}

const pdfFunc = `
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
`;

if (!content.includes('function createInvoicePDF')) {
  content = content.replace(
    /async function sendUserEmail/,
    pdfFunc + "\nasync function sendUserEmail"
  );
}

content = content.replace(
  /const mailOptions = \{([\s\S]*?)\};/,
  `const mailOptions: any = {
      from: \`"Organic Mushroom Farm" <\${process.env.EMAIL_USER || "organicmushroomsfarms@gmail.com"}>\`,
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
          filename: \`Invoice_\${orderId}.pdf\`,
          content: invoiceBuffer,
          contentType: 'application/pdf'
        }
      ];
    } catch (pdfErr) {
      console.error("Error generating PDF:", pdfErr);
    }`
);

fs.writeFileSync('api/razorpay-webhook.ts', content);
console.log("Patched pdf to webhook");
