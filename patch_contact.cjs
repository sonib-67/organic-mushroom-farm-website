const fs = require('fs');

let content = fs.readFileSync('src/pages/ContactForm.tsx', 'utf8');
content = content.replace(
  "const resp = await fetch('https://formspree.io/f/xykldqdy', {",
  "const resp = await fetch('/api/contact', {"
);
content = content.replace(
  "body: formData,",
  "body: JSON.stringify(Object.fromEntries(formData)),"
);
content = content.replace(
  "'Accept': 'application/json'",
  "'Accept': 'application/json',\n                    'Content-Type': 'application/json'"
);
content = content.replace(
  "if (!resp.ok) throw new Error('Formspree response not OK');",
  "if (!resp.ok) throw new Error('Response not OK');"
);

fs.writeFileSync('src/pages/ContactForm.tsx', content);
console.log('Patched ContactForm.tsx');
