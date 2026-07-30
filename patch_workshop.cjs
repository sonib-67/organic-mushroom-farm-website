const fs = require('fs');
let content = fs.readFileSync('src/pages/WorkshopPage.tsx', 'utf8');
content = content.replace(
/\{loading \? 'Processing\.\.\.' : 'Proceed to Pay ₹199'\}/g,
`{loading ? <span>Processing...</span> : <span>Proceed to Pay ₹199</span>}`
);
fs.writeFileSync('src/pages/WorkshopPage.tsx', content);
