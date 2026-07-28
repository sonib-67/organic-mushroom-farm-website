const fs = require('fs');
let code = fs.readFileSync('api/payment-notification.ts', 'utf8');

const newFunc = `async function generateInvoicePDF(payload: any): Promise<Buffer> {
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

      // Company Header (Left)
      doc.fillColor(primary).fontSize(28).font('Helvetica-Bold').text('Organic Mushroom Farm', 50, 60);
      doc.fillColor(textMuted).fontSize(10).font('Helvetica')
         .text('Katangi, Jabalpur, Madhya Pradesh 483105', 50, 95);

      // Invoice Title (Right)
      doc.fillColor(accent).fontSize(36).font('Helvetica-Bold').text('INVOICE', 0, 55, { align: 'right', width: 545 });
      
      const invoiceNo = 'INV-' + Math.floor(100000 + Math.random() * 900000);
      doc.fillColor(textDark).fontSize(10).font('Helvetica-Bold')
         .text('Invoice No:', 380, 95)
         .text('Date:', 380, 110);
         
      doc.fillColor(textMuted).font('Helvetica')
         .text(invoiceNo, 450, 95, { align: 'right', width: 95 })
         .text(new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }), 450, 110, { align: 'right', width: 95 });

      // Clean divider
      doc.moveTo(50, 140).lineTo(545, 140).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Billed To Section
      doc.fillColor(textLight).fontSize(9).font('Helvetica-Bold').text('BILLED TO', 50, 160, { characterSpacing: 1.5 });
      doc.fillColor(textDark).fontSize(14).font('Helvetica-Bold').text(payload.name || 'Customer', 50, 175);
      
      doc.fillColor(textMuted).fontSize(10).font('Helvetica')
         .text(payload.email || '', 50, 195)
         .text('Phone: ' + (payload.phone || 'N/A'), 50, 210);

      // Table styling (Minimalist Luxury)
      const tableTop = 270;
      doc.moveTo(50, tableTop).lineTo(545, tableTop).lineWidth(1).strokeColor(primary).stroke();
      
      doc.fillColor(primary).font('Helvetica-Bold').fontSize(9)
         .text('DESCRIPTION', 50, tableTop + 15, { characterSpacing: 1 })
         .text('AMOUNT', 0, tableTop + 15, { align: 'right', width: 545, characterSpacing: 1 });
         
      doc.moveTo(50, tableTop + 35).lineTo(545, tableTop + 35).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Table Row
      const rowTop = tableTop + 55;
      doc.fillColor(textDark).font('Helvetica').fontSize(11)
         .text(payload.productType || 'N/A', 50, rowTop)
         .text('₹' + (payload.amount || '0'), 0, rowTop, { align: 'right', width: 545 });
         
      // Divider
      doc.moveTo(50, rowTop + 30).lineTo(545, rowTop + 30).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Total Section
      const totalTop = rowTop + 60;

      doc.fillColor(textDark).font('Helvetica-Bold').fontSize(12)
         .text('TOTAL', 370, totalTop, { characterSpacing: 1 })
      doc.fillColor(accent).fontSize(18)
         .text('₹' + (payload.amount || '0'), 0, totalTop - 2, { align: 'right', width: 545 });

      // Signatory Section
      if (signatureBuffer) {
        try {
          doc.image(signatureBuffer, 50, totalTop - 35, { height: 60 });
        } catch(imgErr) {
          console.error('Failed to embed signature', imgErr);
        }
      }
      doc.moveTo(50, totalTop + 35).lineTo(180, totalTop + 35).lineWidth(0.5).strokeColor('#e5e7eb').stroke();
      doc.fillColor(textLight).font('Helvetica').fontSize(9).text('Authorized Signatory', 50, totalTop + 45);

      // Footer - Minimal and elegant, placed on the right
      const bottomY = 780;
      doc.fillColor(textMuted).font('Helvetica').fontSize(9)
         .text('Visit us: ', 0, bottomY, { align: 'right', width: 440, continued: true })
         .fillColor(accent).text('organicmushroomsfarm.com', { link: 'https://organicmushroomsfarm.com' });

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
  console.log('Successfully patched generateInvoicePDF');
} else {
  console.log('Could not find generateInvoicePDF');
}
