const fs = require('fs');
let content = fs.readFileSync('src/components/SEO.tsx', 'utf8');
content = content.replace(/ infrastructure\.", "Discover expert insights/g, ' infrastructure."');
fs.writeFileSync('src/components/SEO.tsx', content, 'utf8');
