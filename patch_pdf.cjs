const fs = require('fs');
let code = fs.readFileSync('api/payment-notification.ts', 'utf8');

const newFunc = `async function generateInvoicePDF(payload: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 0, size: 'A4' });
      const buffers: Buffer[] = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));
      doc.on('error', reject);

      const accentColor = '#6b21a8'; // Purple 800
      const lightBg = '#f3e8ff'; // Purple 100 (light organic purple)
      const textColor = '#333333';
      
      // Top Header Background (Liquid Glass vibe using soft purple)
      doc.rect(0, 0, 595, 130).fill(lightBg);

      // Logo/Company Name
      doc.fillColor(accentColor).fontSize(28).font('Helvetica-Bold').text('INVOICE', 50, 40, { align: 'right', width: 495 });
      
      doc.fillColor(accentColor).fontSize(20).text('Organic Mushroom Farm', 50, 40);
      doc.fillColor('#666666').fontSize(10).font('Helvetica')
         .text('Jabalpur, Madhya Pradesh', 50, 70)
         .text('Phone: +91 9203544140', 50, 85);
         
      // Invoice Info (Right aligned)
      const invoiceNo = 'INV-' + Math.floor(100000 + Math.random() * 900000);
      doc.fillColor('#666666').fontSize(10)
         .text('Invoice No:', 400, 70)
         .text('Date:', 400, 85);
      
      doc.fillColor(textColor).font('Helvetica-Bold')
         .text(invoiceNo, 470, 70)
         .text(new Date().toLocaleDateString(), 470, 85);

      // Invoice To
      doc.fillColor(accentColor).fontSize(12).font('Helvetica-Bold').text('INVOICE TO:', 50, 160);
      doc.fillColor(textColor).fontSize(11).font('Helvetica')
         .text(payload.name || 'Customer', 50, 180)
         .text(payload.email || 'N/A', 50, 195)
         .text(payload.phone || 'N/A', 50, 210);

      // Table Header
      const tableTop = 260;
      doc.rect(50, tableTop, 495, 30).fill(accentColor);
      doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(11)
         .text('Item Description', 70, tableTop + 10)
         .text('Price', 300, tableTop + 10, { width: 100, align: 'right' })
         .text('Total', 420, tableTop + 10, { width: 100, align: 'right' });

      // Table Row
      const rowTop = tableTop + 40;
      doc.fillColor(textColor).font('Helvetica').fontSize(11)
         .text(payload.productType || 'N/A', 70, rowTop)
         .text(payload.amount || 'N/A', 300, rowTop, { width: 100, align: 'right' })
         .text(payload.amount || 'N/A', 420, rowTop, { width: 100, align: 'right' });
         
      // Divider
      doc.moveTo(50, rowTop + 30).lineTo(545, rowTop + 30).strokeColor('#e5e7eb').stroke();

      // Total Section
      const totalTop = rowTop + 50;
      doc.rect(350, totalTop - 10, 195, 40).fill(lightBg);
      doc.fillColor(accentColor).font('Helvetica-Bold').fontSize(12)
         .text('Grand Total:', 370, totalTop)
         .text(payload.amount || '0', 420, totalTop, { width: 100, align: 'right' });

      // Footer message
      doc.fillColor(textColor).font('Helvetica-Oblique').fontSize(11).text(
        'Welcome to the Organic Mushroom Farm family! We are dedicated to supporting your mushroom cultivation journey with the highest quality products and training.', 
        50, totalTop + 80, { width: 300, align: 'left', lineGap: 4 }
      );
      
      // Signature
      doc.fillColor('#666666').font('Helvetica').fontSize(10).text('Authorized Signatory', 350, totalTop + 80, { width: 195, align: 'right' });
      // Cursive signature for Rakesh Soni
      doc.fillColor(accentColor).font('Times-Italic').fontSize(26).text('Rakesh Soni', 350, totalTop + 100, { width: 195, align: 'right' });

      // Website Link at bottom
      const bottomY = 750;
      doc.rect(0, bottomY, 595, 100).fill(lightBg);
      doc.fillColor(accentColor).font('Helvetica-Bold').fontSize(12)
         .text('Visit our website:', 0, bottomY + 25, { align: 'center', width: 595 });
      doc.fillColor('#2563eb').font('Helvetica').fontSize(11)
         .text('https://organicmushroomsfarm.com', 0, bottomY + 45, { align: 'center', width: 595, link: 'https://organicmushroomsfarm.com', underline: true });

      doc.end();
    } catch (e) {
      reject(e);
    }
  });
}
`;

const startIndex = code.indexOf('async function generateInvoicePDF');
if (startIndex !== -1) {
  code = code.substring(0, startIndex) + newFunc;
  fs.writeFileSync('api/payment-notification.ts', code);
}
