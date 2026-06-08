const fs = require('fs');
let content = fs.readFileSync('src/pages/WorkshopPage.tsx', 'utf-8');

content = content.replace(/dark:dark:text-white text-slate-900 text-slate-900/g, 'dark:text-white text-slate-900');
content = content.replace(/dark:dark:border-white\/5 border-black\/5 border-black\/5/g, 'dark:border-white/5 border-black/5');
content = content.replace(/dark:dark:bg-white\/5 bg-black\/5 bg-black\/5/g, 'dark:bg-white/5 bg-black/5');
content = content.replace(/dark:dark:border-white\/10 border-black\/10 border-black\/10/g, 'dark:border-white/10 border-black/10');
content = content.replace(/dark:dark:bg-black bg-slate-100 bg-slate-100/g, 'dark:bg-black bg-slate-100');
content = content.replace(/dark:bg-\[#0a0f0d\] bg-white/g, 'dark:bg-[#0a0f0d] bg-slate-50');

fs.writeFileSync('src/pages/WorkshopPage.tsx', content);
