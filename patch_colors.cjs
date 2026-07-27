const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/group-hover:bg-primary-start group-hover:dark:text-white text-slate-900/g, 'group-hover:bg-primary-start group-hover:text-white');
content = content.replace(/group-hover:dark:text-white text-slate-900 transition-colors/g, 'group-hover:text-slate-900 dark:group-hover:text-white transition-colors');
// Let's also check hover:dark:text-white text-slate-900
content = content.replace(/hover:dark:text-white text-slate-900/g, 'hover:text-slate-900 dark:hover:text-white');

fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx hover colors");
