const fs = require('fs');
let content = fs.readFileSync('src/pages/SpawnSeed.tsx', 'utf8');

content = content.replace(/btn-primary text-\[9px\] font-black uppercase tracking-widest dark:text-white text-slate-900 shadow-xl/g, 'btn-primary text-[9px] font-black uppercase tracking-widest text-white shadow-xl');
content = content.replace(/bg-gradient-to-r from-primary-start to-primary-end dark:text-white text-slate-900/g, 'bg-gradient-to-r from-primary-start to-primary-end text-white');

fs.writeFileSync('src/pages/SpawnSeed.tsx', content);
