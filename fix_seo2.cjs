const fs = require('fs');
let content = fs.readFileSync('src/components/SEO.tsx', 'utf8');

// Replace any trailing strings separated by comma on the same line
content = content.replace(/",\s*"[^"]+"/g, '",');

fs.writeFileSync('src/components/SEO.tsx', content, 'utf8');
