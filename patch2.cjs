const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'className="absolute inset-0 bg-slate-900/40 dark:bg-black/40 backdrop-blur-md"',
  'className="absolute inset-0 bg-slate-900/30 dark:bg-black/40 backdrop-blur-[12px]"'
);

code = code.replace(
  'className="relative w-full max-h-[85vh] flex flex-col  dark:bg-transparent rounded-t-[2rem] shadow-2xl pb-safe z-[9999] overflow-hidden"',
  'className="relative w-full max-h-[85vh] flex flex-col bg-white dark:bg-[#18181b] rounded-t-[2rem] shadow-2xl pb-safe z-[9999] overflow-hidden"'
);

fs.writeFileSync('src/App.tsx', code);
console.log('Mobile menu backdrop blur increased and drawer background restored.');
