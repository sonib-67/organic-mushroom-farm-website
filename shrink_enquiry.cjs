const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

// Title size
content = content.replace(/text-xl md:text-2xl/g, 'text-lg md:text-xl');

// Input padding and text size
content = content.replace(/py-1\.5 px-4/g, 'py-1 px-3 text-sm');
content = content.replace(/py-2 pl-10 pr-4/g, 'py-1 pl-9 pr-3 text-sm');

// Form section gap
content = content.replace(/space-y-3/g, 'space-y-2');
content = content.replace(/gap-3/g, 'gap-2');

// Icon sizes
content = content.replace(/w-6 h-6 mb-1/g, 'w-5 h-5 mb-0.5');

// Box padding
content = content.replace(/p-3 rounded-xl/g, 'p-2 rounded-lg');
content = content.replace(/p-3 md:p-5/g, 'p-3 md:p-4');
content = content.replace(/p-4 md:p-6/g, 'p-3 md:p-4');

// Decrease line heights
content = content.replace(/text-slate-800 dark:text-white/g, 'text-slate-800 dark:text-white leading-tight');

// Labels
content = content.replace(/text-\[11px\]/g, 'text-[10px]');

// Text area height
content = content.replace(/rows={4}/g, 'rows={2}');

// Main spacing
content = content.replace(/mb-4/g, 'mb-2');
content = content.replace(/mb-5/g, 'mb-3');
content = content.replace(/pt-16 pb-4/g, 'pt-14 pb-2');

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log("Shrunk EnquiryPage further");
