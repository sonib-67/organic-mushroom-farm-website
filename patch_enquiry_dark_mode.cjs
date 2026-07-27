const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

content = content.replace(
  'className="min-h-screen bg-slate-50 pt-24 pb-16"',
  'className="min-h-screen bg-slate-50 dark:bg-[#0A0A0A] pt-24 pb-16"'
);

content = content.replace(
  'className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight"',
  'className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"'
);

content = content.replace(
  'className="text-lg text-slate-600 max-w-2xl mx-auto"',
  'className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"'
);

content = content.replace(
  'className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100 text-center"',
  'className="bg-white dark:bg-[#111] rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100 dark:border-white/10 text-center"'
);

content = content.replace(
  'className="text-3xl font-bold text-slate-900 mb-4"',
  'className="text-3xl font-bold text-slate-900 dark:text-white mb-4"'
);

content = content.replace(
  'className="text-slate-600 text-lg mb-8 max-w-md mx-auto"',
  'className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md mx-auto"'
);

content = content.replace(
  'className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"',
  'className="bg-white dark:bg-[#111] rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-white/10"'
);

content = content.replace(
  'className="p-6 md:p-8 bg-slate-50/50 border-b border-slate-100 overflow-x-auto hide-scrollbar"',
  'className="p-6 md:p-8 bg-slate-50/50 dark:bg-white/5 border-b border-slate-100 dark:border-white/10 overflow-x-auto hide-scrollbar"'
);

content = content.replace(
  /border-slate-100 bg-white text-slate-500 hover:border-slate-200 hover:bg-slate-50/g,
  'border-slate-100 dark:border-white/10 bg-white dark:bg-[#111] text-slate-500 dark:text-slate-400 hover:border-slate-200 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5'
);

// Labels
content = content.replace(
  /className="text-sm font-semibold text-slate-700 ml-1"/g,
  'className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1"'
);

// Icons
content = content.replace(
  /className="absolute left-4 top-1\/2 -translate-y-1\/2 text-slate-400 w-5 h-5"/g,
  'className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-5 h-5"'
);

// Inputs
content = content.replace(
  /className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-start\/20 focus:border-primary-start transition-all"/g,
  'className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all"'
);

// Selects
content = content.replace(
  /className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-start\/20 focus:border-primary-start"/g,
  'className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start"'
);

// Non-icon inputs
content = content.replace(
  /className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-start\/20 focus:border-primary-start"/g,
  'className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start"'
);

// Textarea
content = content.replace(
  /className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-start\/20 focus:border-primary-start transition-all resize-none"/g,
  'className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start transition-all resize-none"'
);

// Group container
content = content.replace(
  /className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-6"/g,
  'className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/10 space-y-6"'
);

// Subheadings
content = content.replace(
  /className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2"/g,
  'className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2"'
);

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log('Patched dark mode in EnquiryPage.tsx');
