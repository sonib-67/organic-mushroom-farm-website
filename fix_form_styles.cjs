const fs = require('fs');

let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

// 1. Remove the large background boxes (top box and form box)
code = code.replace(
  'className="dark:bg-black/30 bg-white/40 backdrop-blur-xl border-x border-t dark:border-white/10 border-black/10 rounded-t-3xl p-6 sm:p-10 shadow-sm border-b-4 border-indigo-500"',
  'className="bg-transparent border-b border-indigo-500/50 pb-2 mb-3"'
);

code = code.replace(
  'className="dark:bg-black/30 bg-white/40 backdrop-blur-xl border-x border-b dark:border-white/10 border-black/10 rounded-b-3xl shadow-lg p-6 sm:p-10 space-y-6"',
  'className="bg-transparent space-y-2"'
);

// 2. Reduce font sizes and paddings in the headers
code = code.replace('text-2xl sm:text-3xl font-black', 'text-lg sm:text-xl font-black');
code = code.replace('text-xl font-bold text-indigo-600 mb-4', 'text-sm font-bold text-indigo-600 mb-1');
code = code.replace('text-sm">Please fill in the details', 'text-xs">Please fill in the details');

// 3. Make the Accordions much smaller
// Global replacements
code = code.replace(/p-4 sm:p-5/g, 'p-2');
code = code.replace(/space-y-6/g, 'space-y-3');
code = code.replace(/space-y-4/g, 'space-y-2');
code = code.replace(/rounded-2xl/g, 'rounded-lg');
code = code.replace(/rounded-xl/g, 'rounded-md');
code = code.replace(/py-3/g, 'py-1.5');
code = code.replace(/px-4/g, 'px-2');
code = code.replace(/w-6 h-6/g, 'w-5 h-5 text-[10px]');
code = code.replace(/text-sm font-semibold/g, 'text-xs font-semibold');
code = code.replace(/text-sm dark:text-slate-300/g, 'text-xs dark:text-slate-300');
code = code.replace(/<span className="text-sm dark:text-slate-300 text-slate-700">{opt}<\/span>/g, '<span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>');
code = code.replace(/w-4 h-4/g, 'w-3 h-3'); // Checkboxes and radios
code = code.replace(/w-5 h-5/g, 'w-4 h-4'); // Icons
code = code.replace(/flex items-center gap-3 p-3/g, 'flex items-center gap-2 p-1.5');
code = code.replace(/flex items-center gap-3 p-3 border/g, 'flex items-center gap-2 p-1.5 border');
code = code.replace(/h-24/g, 'h-16');

// Adjust submit button
code = code.replace('py-4 rounded-2xl text-lg', 'py-2 rounded-lg text-sm');

// Additional adjustments to make labels and inputs smaller
code = code.replace(/text-sm text-slate-900/g, 'text-xs text-slate-900');
code = code.replace(/placeholder:text-slate-400 text-sm/g, 'placeholder:text-slate-400 text-xs');
code = code.replace(/<p className="text-xs text-green-300\/70/g, '<p className="text-[10px] text-green-300/70');
code = code.replace(/text-xs text-green-600/g, 'text-[10px] text-green-600');
code = code.replace(/mb-3/g, 'mb-1');
code = code.replace(/mb-2/g, 'mb-1');

// Make accordions background transparent as well so the GIF is completely visible through everything
code = code.replace(/border dark:border-white\/10 border-black\/10/g, 'border dark:border-white/10 border-black/10 bg-white/5 dark:bg-black/5 backdrop-blur-sm');
// Remove the inner hover background that could be dark, or make it subtle
code = code.replace(/dark:bg-white\/5 bg-black\/5/g, 'bg-transparent');
code = code.replace(/hover:dark:bg-white\/10 hover:bg-black\/10/g, 'hover:bg-black/5 dark:hover:bg-white/5');

fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
