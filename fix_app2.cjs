const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Undo all the `</tag }` to `</tag>}`
code = code.replace(/<\/([a-zA-Z0-9_-]+) \}/g, '</$1>}');
code = code.replace(/\/ \}/g, '/>}');
code = code.replace(/metaDesc="[^"]+"\s*\/>\}/g, match => {
  return match.replace('/>}', '/>}'); // Wait, if the previous line was `/>}` it's fine.
});
fs.writeFileSync('src/App.tsx', code, 'utf8');
