const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  '<div className="selection:bg-primary-start/30 selection:dark:text-white text-slate-900 bg-black">',
  '<div className="selection:bg-primary-start/30 selection:dark:text-white text-slate-900 dark:text-white bg-slate-50 dark:bg-[#0A0A0A] min-h-screen">'
);

fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx wrapper");
