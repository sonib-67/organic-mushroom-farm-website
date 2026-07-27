const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Insert import
content = content.replace(
  'import ContactFormPage from "./pages/ContactForm";',
  'import ContactFormPage from "./pages/ContactForm";\nimport EnquiryPage from "./pages/EnquiryPage";'
);

// Insert route
content = content.replace(
  '<Route path="/contact-form" element={<ContactFormPage />} />',
  '<Route path="/contact-form" element={<ContactFormPage />} />\n          <Route path="/enquiry" element={<EnquiryPage />} />'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Patched App.tsx route');
