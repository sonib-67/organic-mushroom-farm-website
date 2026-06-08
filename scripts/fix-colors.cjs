const fs = require('fs');
let content = fs.readFileSync('src/pages/WorkshopPage.tsx', 'utf-8');

// Colors
content = content.replace(/text-white/g, 'dark:text-white text-slate-900');
content = content.replace(/text-slate-400/g, 'dark:text-slate-400 text-slate-600');
content = content.replace(/text-slate-300/g, 'dark:text-slate-300 text-slate-700');
content = content.replace(/bg-white\/5/g, 'dark:bg-white/5 bg-black/5');
content = content.replace(/bg-white\/10/g, 'dark:bg-white/10 bg-black/10');
content = content.replace(/bg-white\/\[0\.02\]/g, 'dark:bg-white/[0.02] bg-black/[0.02]');
content = content.replace(/bg-white\/\[0\.03\]/g, 'dark:bg-white/[0.03] bg-black/[0.03]');
content = content.replace(/bg-white\/\[0\.05\]/g, 'dark:bg-white/[0.05] bg-black/[0.05]');
content = content.replace(/border-white\/10/g, 'dark:border-white/10 border-black/10');
content = content.replace(/border-white\/5/g, 'dark:border-white/5 border-black/5');
content = content.replace(/border-white\/\[0\.05\]/g, 'dark:border-white/[0.05] border-black/[0.05]');
content = content.replace(/border-white\/20/g, 'dark:border-white/20 border-black/20');
content = content.replace(/bg-[#0a0f0d]/g, 'dark:bg-[#0a0f0d] bg-white');

// Some buttons and specific textual items that need to stay white
content = content.replace(/dark:text-white text-slate-900 px-6/g, 'text-white px-6');
content = content.replace(/dark:text-white text-slate-900 rounded-xl/g, 'text-white rounded-xl');
content = content.replace(/from-white\/10/g, 'dark:from-white/10 from-black/10');
content = content.replace(/to-white\/5/g, 'dark:to-white/5 to-black/5');
content = content.replace(/via-white\/10/g, 'dark:via-white/10 via-black/10');

// Fix the issue where dark:text-white is inserted multiple times
// Or fix text-white in specific elements
content = content.replace(/text-4xl md:text-6xl font-black dark:text-white text-slate-900/g, 'text-4xl md:text-6xl font-black text-white');
content = content.replace(/dark:text-white text-slate-900 ml-0.5/g, 'text-white ml-0.5'); // SVG arrow

fs.writeFileSync('src/pages/WorkshopPage.tsx', content);
