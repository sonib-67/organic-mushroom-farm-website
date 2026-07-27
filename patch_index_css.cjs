const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');

// Replace the bad !important color overrides
content = content.replace(/color: var\(--text-heading\) !important;/g, '');
content = content.replace(/color: var\(--text-body\) !important;/g, '');

// Also remove the entire block matching .text-white:not(...)
content = content.replace(/\/\* Force override all text colors[\s\S]*?var\(--text-body\).*\}/, '');

// Save it
fs.writeFileSync('src/index.css', content);
console.log("Patched index.css");
