const fs = require('fs');
let content = fs.readFileSync('src/pages/SpawnSeed.tsx', 'utf8');

// Colors
content = content.replace(/text-white/g, 'dark:text-white text-slate-900');
content = content.replace(/text-slate-400/g, 'dark:text-slate-400 text-slate-600');
content = content.replace(/text-slate-300/g, 'dark:text-slate-300 text-slate-700');
content = content.replace(/bg-white\/5/g, 'dark:bg-white/5 bg-black/5');
content = content.replace(/bg-white\/2/g, 'dark:bg-white/2 bg-black/2');
content = content.replace(/border-white\/5/g, 'dark:border-white/5 border-black/5');
content = content.replace(/border-white\/10/g, 'dark:border-white/10 border-black/10');
content = content.replace(/border-white\/20/g, 'dark:border-white/20 border-black/10');
content = content.replace(/hover:bg-white\/5/g, 'hover:dark:bg-white/5 hover:bg-black/5');

// Cleanup any double dark: (if it was already there)
content = content.replace(/dark:dark:/g, 'dark:');
content = content.replace(/dark:text-white text-slate-900 text-slate-900/g, 'dark:text-white text-slate-900');

fs.writeFileSync('src/pages/SpawnSeed.tsx', content);
