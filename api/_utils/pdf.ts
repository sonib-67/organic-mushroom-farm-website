import PDFDocument from 'pdfkit';

export async function generateInvoicePDF(orderDetails: any, status: 'SUCCESS' | 'CANCELLED'): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const buffers: Buffer[] = [];

      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));

      // Colors based on status
      const primaryColor = status === 'SUCCESS' ? '#9b51e0' : '#d32f2f';
      const secondaryColor = '#ff8c42';

      // Header
      doc
        .fontSize(24)
        .fillColor(primaryColor)
        .text('Organic Mushroom Farm', { align: 'center' })
        .moveDown(0.5);

      doc
        .fontSize(16)
        .fillColor('#555555')
        .text(status === 'SUCCESS' ? 'Tax Invoice' : 'Cancelled Invoice', { align: 'center' })
        .moveDown(2);

      // Order Details
      doc.fontSize(12).fillColor('#333333');
      const startY = doc.y;

      doc.text(`Order ID: ${orderDetails.orderId}`);
      doc.text(`Date: ${new Date().toLocaleString()}`);
      doc.text(`Status: ${status}`);
      
      doc.text(`Customer Name: ${orderDetails.name || 'N/A'}`, 300, startY);
      doc.text(`Email: ${orderDetails.email || 'N/A'}`);
      doc.text(`Phone: ${orderDetails.phone || 'N/A'}`);

      doc.moveDown(2);

      // Table Header
      const tableTop = doc.y;
      doc
        .fillColor(primaryColor)
        .rect(50, tableTop, 500, 25)
        .fill();

      doc
        .fillColor('#ffffff')
        .text('Description', 60, tableTop + 7)
        .text('Amount (INR)', 450, tableTop + 7, { width: 90, align: 'right' });

      // Table Row
      const rowTop = tableTop + 35;
      doc
        .fillColor('#333333')
        .text(orderDetails.productType || 'Mushroom Product/Service', 60, rowTop)
        .text(`Rs. ${orderDetails.amount || 0}`, 450, rowTop, { width: 90, align: 'right' });

      // Total
      doc.moveTo(50, rowTop + 25).lineTo(550, rowTop + 25).strokeColor('#eeeeee').stroke();
      doc
        .fontSize(14)
        .fillColor(primaryColor)
        .text('Total', 350, rowTop + 40, { width: 90, align: 'right' })
        .text(`Rs. ${orderDetails.amount || 0}`, 450, rowTop + 40, { width: 90, align: 'right' });

      // Footer
      doc
        .fontSize(10)
        .fillColor('#888888')
        .text(
          'This is a computer-generated invoice and requires no physical signature.',
          50,
          700,
          { align: 'center' }
        );

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}
