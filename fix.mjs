import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('./src/pages/BookConsultantPage.tsx', 'utf-8');
content = content.replace(
  /href={\`https:\\/\\/wa\\.me\\/919203544140\\?text=\\$\\{encodeURIComponent\\(\\\`New Consultant Booking[^}]*\\}\\`/,
  \`href={'https://wa.me/919203544140?text=' + encodeURIComponent('New Consultant Booking 🎉\\n\\nName: ' + formData.name + '\\nMobile: ' + formData.phone + '\\nEmail: ' + formData.email + '\\nDate: ' + formData.preferredDate + '\\n\\nPayment Status: Paid ₹59')}\`
);
writeFileSync('./src/pages/BookConsultantPage.tsx', content, 'utf-8');
