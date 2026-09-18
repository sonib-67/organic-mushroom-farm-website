const fs = require('fs');

const files = [
  'app/blog/BlogListClient.tsx',
  'app/book-consultant/BookConsultantClient.tsx',
  'app/on-site-consultation/SiteVisitClient.tsx',
  'app/payment-cancelled/PaymentCancelledClient.tsx',
  'app/payment-success/PaymentSuccessClient.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('"use client"') && !content.includes("'use client'")) {
      fs.writeFileSync(file, '"use client";\n' + content);
      console.log('Fixed', file);
    }
  }
});
