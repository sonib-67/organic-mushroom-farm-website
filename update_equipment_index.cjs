const fs = require('fs');
let content = fs.readFileSync('src/pages/EquipmentCompleteListPage.tsx', 'utf8');

// replace helmet with SEO
content = content.replace("import { Helmet } from 'react-helmet-async';", "import SEO from '../components/SEO';");

content = content.replace(
  /<Helmet>[\s\S]*?<\/Helmet>/m, 
  `<SEO \n        title="Mushroom Farming Equipment Directory | Organic Mushrooms Farm"\n        description="Complete directory for mushroom farming equipment, machinery, safety material, lab tools, and climate control systems."\n      />`
);

// remove Master Directory div
content = content.replace(
  /<div className="inline-block bg-primary-start\/10 text-primary-start px-4 py-1\.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">\s*Master Directory\s*<\/div>/g,
  ''
);

// reduce padding main
content = content.replace(
  'className="max-w-7xl mx-auto px-4 py-12 md:py-24 mt-16"',
  'className="max-w-7xl mx-auto px-4 py-8 md:py-12 mt-16"'
);

// reduce margin bottom of headers
content = content.replace(
  'className="text-center mb-16"',
  'className="text-center mb-10"'
);

content = content.replace(
  'className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24"',
  'className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 md:mb-16"'
);

// make 3 boxes more compact
content = content.replace(
  'className="group bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"',
  'className="group bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"'
);

content = content.replace(
  'className="w-14 h-14 bg-slate-100 dark:bg-slate-700/50 text-primary-start rounded-xl flex items-center justify-center mb-6"',
  'className="w-12 h-12 bg-slate-100 dark:bg-slate-700/50 text-primary-start rounded-xl flex items-center justify-center mb-4"'
);

content = content.replace(
  'className="text-2xl font-bold text-slate-900 dark:text-white mb-3"',
  'className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2"'
);

content = content.replace(
  'className="text-slate-600 dark:text-slate-400 mb-6"',
  'className="text-sm text-slate-600 dark:text-slate-400 mb-4"'
);

// add arrow to the 18 boxes
content = content.replace(
  '</h3>',
  '  <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />\n                </h3>'
);

content = content.replace(
  'className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary-start transition-colors leading-tight"',
  'className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary-start transition-colors leading-tight flex items-center justify-between"'
);

// reduce padding of 18 boxes to make more compact
content = content.replace(
  'className="group flex flex-col bg-white dark:bg-slate-800 rounded-lg p-5 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:border-primary-start/50"',
  'className="group flex flex-col bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:border-primary-start/50"'
);
content = content.replace(
  'className="text-slate-400 group-hover:text-primary-start transition-colors mb-4"',
  'className="text-slate-400 group-hover:text-primary-start transition-colors mb-3"'
);

fs.writeFileSync('src/pages/EquipmentCompleteListPage.tsx', content, 'utf8');
