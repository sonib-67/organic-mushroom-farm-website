const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
content = content.replace(
/>\s*Try Again - \{selectedPrice\}\s*<\/button>/g,
`><span>Try Again - {selectedPrice}</span></button>`
);
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content);
