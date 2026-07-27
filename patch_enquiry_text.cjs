const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

content = content.replace(
  /<h1 className="font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">/g,
  '<h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">'
);

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log('Patched EnquiryPage.tsx text size');
