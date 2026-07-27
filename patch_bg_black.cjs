const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace hardcoded bg-black to support light mode
content = content.replace(/className="section-padding bg-black\/40"/g, 'className="section-padding dark:bg-black/40 bg-slate-100/40"');
content = content.replace(/className="min-h-screen bg-black /g, 'className="min-h-screen dark:bg-[#0A0A0A] bg-slate-50 ');
content = content.replace(/className="section-padding bg-black relative overflow-hidden"/g, 'className="section-padding dark:bg-[#0A0A0A] bg-slate-50 relative overflow-hidden"');

fs.writeFileSync('src/App.tsx', content);
console.log("Patched bg-black in App.tsx");
