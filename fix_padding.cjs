const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

// The main wrapper padding
content = content.replace(
  'className="min-h-screen bg-slate-50 dark:bg-[#0A0A0A] pt-14 pb-2"',
  'className="min-h-screen bg-slate-50 dark:bg-[#0A0A0A] pt-24 md:pt-32 pb-4"'
);

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log("Fixed EnquiryPage padding");
