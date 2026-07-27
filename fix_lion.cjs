const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');
content = content.replace(/'Lion\\'s Mane'/g, '"Lion\'s Mane"');
content = content.replace(/'Lion\\\\'s Mane'/g, '"Lion\'s Mane"');
fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
