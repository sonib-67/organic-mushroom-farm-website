const fs = require('fs');
let code = fs.readFileSync('src/components/SEO.tsx', 'utf8');
code = code.replace('description: finalDescription,', 'description,');
code = code.replace('const finalDescription = metaMap[path] || description;', 'const finalDescription = metaMap[path] || description;');
fs.writeFileSync('src/components/SEO.tsx', code, 'utf8');
