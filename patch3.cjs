const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
content = content.replace(/    setTimeout\(\(\) => window\.scrollTo\(\{ top: 0, behavior: "smooth" \}\), 100\);\n/g, '');
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content);
