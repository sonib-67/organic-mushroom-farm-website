const fs = require('fs');
const content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
const patched = content.replace('window.scrollTo(0, 0);', 'setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);');
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', patched);
