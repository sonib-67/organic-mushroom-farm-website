const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

content = content.replace(
  /How Can We <span className="text-primary-start">Help You\?<\/span>/,
  'How Can We <span className="text-primary-start gradient-text">Help You?</span>'
);

// Also remove text-4xl md:text-5xl and let the global h1 rule handle it to be truly consistent with the site
content = content.replace(
  /<h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">/,
  '<h1 className="font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">'
);

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log('Fixed H1 span in EnquiryPage.tsx');
