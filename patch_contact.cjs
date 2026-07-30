const fs = require('fs');
let content = fs.readFileSync('src/pages/ContactForm.tsx', 'utf8');
content = content.replace(
/Submit Form <Send size=\{18\} \/>/g,
`<span>Submit Form</span> <Send size={18} />`
);
content = content.replace(
/Submit Another Request/g,
`<span>Submit Another Request</span>`
);
content = content.replace(
/Chat on WhatsApp/g,
`<span>Chat on WhatsApp</span>`
);
fs.writeFileSync('src/pages/ContactForm.tsx', content);
