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

      // INVOICE Title (Absolute Top)
      doc.fillColor(accent).fontSize(36).font('Helvetica-Bold').text('INVOICE', 50, 40);

      // Company Header (Right under INVOICE)
      doc.fillColor(primary).fontSize(20).font('Helvetica-Bold').text('Organic Mushroom Farm', 50, 85);
      doc.fillColor(textMuted).fontSize(10).font('Helvetica')
         .text('Jabalpur, Madhya Pradesh', 50, 110);

      // Invoice Details (Right Side)
      const invoiceNo = 'INV-' + Math.floor(100000 + Math.random() * 900000);
      const invoiceDate = new Date();
      const dueDate = new Date();
      dueDate.setDate(invoiceDate.getDate() + 7); // Default due date 7 days later
      
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
         .text('Due Date:', 350, 95)
         .text('Status:', 350, 110);
         
      doc.fillColor(textMuted).font('Helvetica')
         .text(invoiceNo, 450, 50, { align: 'right', width: 95 })
         .text(invoiceDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }), 450, 65, { align: 'right', width: 95 })
         .text(payload.paymentMode || 'Online Payment', 450, 80, { align: 'right', width: 95 })
         .text(dueDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }), 450, 95, { align: 'right', width: 95 });
         
      doc.fillColor(statusColor).font('Helvetica-Bold')
         .text(statusText, 450, 110, { align: 'right', width: 95 });

      // Clean divider
      doc.moveTo(50, 145).lineTo(545, 145).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Billed To Section
      doc.fillColor(textLight).fontSize(9).font('Helvetica-Bold').text('BILLED TO', 50, 165, { characterSpacing: 1.5 });
      doc.fillColor(textDark).fontSize(14).font('Helvetica-Bold').text(payload.name || 'Customer', 50, 180);
      
      doc.fillColor(textMuted).fontSize(10).font('Helvetica')
         .text(payload.email || '', 50, 200)
         .text('Phone: ' + (payload.phone || 'N/A'), 50, 215);

      // Table styling (Minimalist Luxury)
      const tableTop = 270;
      doc.moveTo(50, tableTop).lineTo(545, tableTop).lineWidth(1).strokeColor(primary).stroke();
      
      doc.fillColor(primary).font('Helvetica-Bold').fontSize(9)
         .text('DESCRIPTION', 50, tableTop + 15, { characterSpacing: 1 })
         .text('AMOUNT', 0, tableTop + 15, { align: 'right', width: 545, characterSpacing: 1 });
         
      doc.moveTo(50, tableTop + 35).lineTo(545, tableTop + 35).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Cleanup amount
      let amountDisplay = String(payload.amount || '0');
      amountDisplay = amountDisplay.replace(/[^0-9.]/g, '').trim();

      // Table Row
      const rowTop = tableTop + 55;
      doc.fillColor(textDark).font('Helvetica').fontSize(11)
         .text(payload.productType || 'N/A', 50, rowTop)
         .text('INR ' + amountDisplay, 0, rowTop, { align: 'right', width: 545 });
         
      // Divider
      doc.moveTo(50, rowTop + 30).lineTo(545, rowTop + 30).lineWidth(0.5).strokeColor('#e5e7eb').stroke();

      // Total Section
      const totalTop = rowTop + 60;

      doc.fillColor(textDark).font('Helvetica-Bold').fontSize(12)
         .text('TOTAL', 370, totalTop, { characterSpacing: 1 })
      doc.fillColor(accent).fontSize(18)
         .text('INR ' + amountDisplay, 0, totalTop - 2, { align: 'right', width: 545 });

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
`;

const startIndex = code.indexOf('async function generateInvoicePDF');
if (startIndex !== -1) {
  code = code.substring(0, startIndex) + newFunc;
  fs.writeFileSync('api/payment-notification.ts', code);
  console.log('Successfully patched generateInvoicePDF');
} else {
  console.log('Could not find generateInvoicePDF');
}
