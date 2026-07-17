const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace('<Routes location={location}>', '<Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-[#09090b]"></div>}><Routes location={location}>');
code = code.replace('</Routes>', '</Routes></Suspense>');

fs.writeFileSync('src/App.tsx', code);
