const fs = require('fs');
let content = fs.readFileSync('src/pages/ContactForm.tsx', 'utf8');
content = content.replace('form.submit();', 'form.reset();');
content = content.replace('action="https://formspree.io/f/xykldqdy"', '');
content = content.replace('method="POST"', '');
fs.writeFileSync('src/pages/ContactForm.tsx', content);
