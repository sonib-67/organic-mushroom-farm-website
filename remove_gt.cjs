const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/import GoogleTranslate from "\.\/components\/GoogleTranslate";\n/g, '');
content = content.replace(/\s*<GoogleTranslate \/>/g, '');

fs.writeFileSync('src/App.tsx', content);
console.log("Success");
