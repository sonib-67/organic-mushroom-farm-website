const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(
/<AnimatePresence mode="wait">/g,
'<AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>'
);
fs.writeFileSync('src/App.tsx', content);

let checkout = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
checkout = checkout.replace(
/    window\.scrollTo\(\{ top: 0, behavior: "instant" \}\);\n    setTimeout\(\(\) => \{\n      window\.scrollTo\(\{ top: 0, behavior: "smooth" \}\);\n    \}, 100\);/g,
'    window.scrollTo(0, 0);'
);
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', checkout);

