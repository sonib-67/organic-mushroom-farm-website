const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace('const handle = (e) => setMobileMenuOpen(e.detail);', 'const handle = (e: any) => setMobileMenuOpen(e.detail);');
fs.writeFileSync('src/App.tsx', content);
