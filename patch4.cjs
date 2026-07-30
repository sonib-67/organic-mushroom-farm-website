const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
content = content.replace(/  useEffect\(\(\) => \{\n/g, '  useEffect(() => {\n    setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 10);\n');
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content);
