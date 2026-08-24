const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

// Fix input padding and remove leading-tight
content = content.replace(/py-1\.5 pl-10 pr-4/g, 'py-3 pl-10 pr-4');
content = content.replace(/py-1\.5 px-4/g, 'py-3 px-4');
content = content.replace(/py-1 pl-9 pr-3/g, 'py-3 pl-10 pr-4'); // Just in case
content = content.replace(/py-1 px-3/g, 'py-3 px-4');

content = content.replace(/text-slate-800 dark:text-white leading-tight/g, 'text-slate-800 dark:text-white');

// Label spacing and size
content = content.replace(/text-\[10px\]/g, 'text-xs');
content = content.replace(/text-\[11px\]/g, 'text-xs');

// Restore some gap between fields so it doesn't look squished
content = content.replace(/space-y-2/g, 'space-y-3');

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log("Fixed inputs and labels");
