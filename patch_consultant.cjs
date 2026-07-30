const fs = require('fs');
let content = fs.readFileSync('src/pages/BookConsultantPage.tsx', 'utf8');
content = content.replace(
/Proceed to Pay ₹59/g,
`<span>Proceed to Pay ₹59</span>`
);
content = content.replace(
/<Zap size=\{18\} \/> Try Again/g,
`<Zap size={18} /> <span>Try Again</span>`
);
content = content.replace(
/>\s*Back to Home\s*<\/Link>/g,
`><span>Back to Home</span></Link>`
);
content = content.replace(
/<MessageCircle size=\{20\} \/> Chat on WhatsApp/g,
`<MessageCircle size={20} /> <span>Chat on WhatsApp</span>`
);
fs.writeFileSync('src/pages/BookConsultantPage.tsx', content);
