const fs = require('fs');

let content = fs.readFileSync('src/utils/formspree.ts', 'utf8');
content = content.replace(
  `body: JSON.stringify({
        _subject: \`Payment \${payload.status}: \${payload.productType} (\${payload.amount})\`,
        customerName: payload.name,
        customerPhone: payload.phone,
        customerEmail: payload.email || 'N/A',
        preferredDate: payload.preferredDate || 'N/A',
        productType: payload.productType,
        amount: payload.amount,
        status: payload.status,
        paymentId: payload.paymentId || 'N/A',
        orderId: payload.orderId || 'N/A',
        timestamp: new Date().toLocaleString()
      })`,
  `body: JSON.stringify({
        subject: \`Payment \${payload.status}: \${payload.productType} (\${payload.amount})\`,
        name: payload.name || "Customer",
        phone: payload.phone,
        email: payload.email || 'no-reply@organicmushroomsfarm.com',
        service: payload.productType,
        message: \`
Payment Status: \${payload.status}
Amount: \${payload.amount}
Payment ID: \${payload.paymentId || 'N/A'}
Order ID: \${payload.orderId || 'N/A'}
Preferred Date: \${payload.preferredDate || 'N/A'}
Timestamp: \${new Date().toLocaleString()}
        \`
      })`
);

fs.writeFileSync('src/utils/formspree.ts', content);
console.log('Patched formspree.ts');
