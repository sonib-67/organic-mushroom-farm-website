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

      const accent = '#7e22ce'; // Purple 700
      const accentLight = '#f3e8ff'; // Purple 100
      const textDark = '#1f2937';
      const textMuted = '#6b7280';
      
      // 1. Light organic purple liquid glass background
      const grad = doc.linearGradient(0, 0, 595, 842);
      grad.stop(0, '#faf5ff');
      grad.stop(0.5, '#ffffff');
      grad.stop(1, '#f3e8ff');
      doc.rect(0, 0, 595, 842).fill(grad);

      // Decorative glass-like overlay at the top
      doc.rect(0, 0, 595, 180).fill('#ffffff', 'even-odd');
      doc.fillOpacity(0.4);
      const topGrad = doc.linearGradient(0, 0, 0, 180);
      topGrad.stop(0, '#e9d5ff');
      topGrad.stop(1, '#faf5ff');
      doc.rect(0, 0, 595, 180).fill(topGrad);
      doc.fillOpacity(1);

      // Company Header (Left)
      doc.fillColor(accent).fontSize(24).font('Helvetica-Bold').text('Organic Mushroom Farm', 50, 50);
      doc.fillColor(textMuted).fontSize(10).font('Helvetica')
         .text('Katangi, Jabalpur, Madhya Pradesh 483105', 50, 80);

      // Invoice Title (Right)
      doc.fillColor(accent).fontSize(32).font('Helvetica-Bold').text('INVOICE', 0, 45, { align: 'right', width: 545 });
      
      const invoiceNo = 'INV-' + Math.floor(100000 + Math.random() * 900000);
      doc.fillColor(textMuted).fontSize(10).font('Helvetica-Bold')
         .text(invoiceNo, 0, 80, { align: 'right', width: 545 })
         .text(new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }), 0, 95, { align: 'right', width: 545 });

      // Glassmorphism card for INVOICE TO
      doc.roundedRect(50, 140, 495, 90, 8).fill('#ffffff');
      doc.roundedRect(50, 140, 495, 90, 8).lineWidth(1).strokeColor('#e9d5ff').stroke();

      doc.fillColor(accent).fontSize(10).font('Helvetica-Bold').text('BILLED TO', 70, 155);
      doc.fillColor(textDark).fontSize(12).font('Helvetica-Bold').text(payload.name || 'Customer', 70, 175);
      
      doc.fillColor(textMuted).fontSize(10).font('Helvetica')
         .text(payload.email || '', 70, 195)
         .text('Phone: ' + (payload.phone || 'N/A'), 70, 210); // Customer phone correctly placed here

      // Table styling
      const tableTop = 260;
      doc.roundedRect(50, tableTop, 495, 35, 6).fill(accent);
      
      doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(10)
         .text('DESCRIPTION', 70, tableTop + 12)
         .text('AMOUNT', 0, tableTop + 12, { align: 'right', width: 525 });

      // Table Row
      const rowTop = tableTop + 50;
      doc.fillColor(textDark).font('Helvetica').fontSize(11)
         .text(payload.productType || 'N/A', 70, rowTop)
         .text('₹' + (payload.amount || '0'), 0, rowTop, { align: 'right', width: 525 });
         
      // Divider
      doc.moveTo(50, rowTop + 30).lineTo(545, rowTop + 30).lineWidth(1).strokeColor('#e5e7eb').stroke();

      // Total Section
      const totalTop = rowTop + 50;
      doc.roundedRect(350, totalTop, 195, 45, 6).fill('#ffffff');
      doc.roundedRect(350, totalTop, 195, 45, 6).lineWidth(1).strokeColor('#e9d5ff').stroke();

      doc.fillColor(textDark).font('Helvetica-Bold').fontSize(12)
         .text('Total', 370, totalTop + 16)
      doc.fillColor(accent).fontSize(14)
         .text('₹' + (payload.amount || '0'), 0, totalTop + 15, { align: 'right', width: 525 });

      // Authorized Signatory
      doc.fillColor(textMuted).font('Helvetica').fontSize(9).text('Authorized Signatory', 50, totalTop + 20);
      doc.fillColor(accent).font('Times-Italic').fontSize(22).text('Rakesh Soni', 50, totalTop - 5);

      // Footer - Visit us made smaller and right side
      doc.fillColor(textMuted).font('Helvetica').fontSize(9)
         .text('Visit us: ', 0, 800, { align: 'right', width: 420, continued: true })
         .fillColor(accent).text('organicmushroomsfarm.com', { link: 'https://organicmushroomsfarm.com', underline: true });

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
