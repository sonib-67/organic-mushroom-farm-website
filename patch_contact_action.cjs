const fs = require('fs');

let content = fs.readFileSync('src/pages/ContactForm.tsx', 'utf8');
content = content.replace(
  /action="https:\/\/formspree\.io\/f\/xykldqdy"/g,
  `action="/api/contact"`
);

fs.writeFileSync('src/pages/ContactForm.tsx', content);
console.log('Patched ContactForm.tsx action');
