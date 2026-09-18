const fs = require('fs');

let code = fs.readFileSync('app/layout.tsx', 'utf8');
code = code.replace(/<Script[\s\S]*?<\/Script>/g, '');
code = code.replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
fs.writeFileSync('app/layout.tsx', code);
