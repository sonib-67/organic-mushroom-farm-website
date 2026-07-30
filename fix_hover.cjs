const fs = require('fs');
let content = fs.readFileSync('src/pages/SpawnSeed.tsx', 'utf8');

content = content.replace(/hover:dark:bg-white\/5 bg-black\/5/g, 'hover:dark:bg-white/5 hover:bg-black/5');

fs.writeFileSync('src/pages/SpawnSeed.tsx', content);
