const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<Route path="\/contact-form" element=\{<ContactFormPage \/>\} \/>/,
  '<Route path="/contact-form" element={<EnquiryPage />} />'
);

content = content.replace(
  /<Route path="\/contact" element=\{<ContactPage \/>\} \/>/,
  '<Route path="/contact" element={<EnquiryPage />} />'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Patched contact routes to point to EnquiryPage');
