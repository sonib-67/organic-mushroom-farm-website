const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(/(<h3[^>]*>[\s\S]*?)<\/h2>/g, "$1</h3>");
fs.writeFileSync('src/App.tsx', code);
