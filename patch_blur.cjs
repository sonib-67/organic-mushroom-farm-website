const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'className="absolute inset-0 bg-slate-900/70 dark:bg-black/80"',
  'className="absolute inset-0 bg-slate-900/40 dark:bg-black/40 backdrop-blur-md"'
);

fs.writeFileSync('src/App.tsx', code);
console.log('Mobile menu backdrop blur applied.');
