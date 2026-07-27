const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

// Reduce container width and padding
content = content.replace('max-w-4xl mx-auto', 'max-w-3xl mx-auto');
content = content.replace('p-10 md:p-16', 'p-8 md:p-12');
content = content.replace('p-6 md:p-10 space-y-8', 'p-6 md:p-8 space-y-6');

// Reduce text sizes
content = content.replace('text-4xl md:text-5xl', 'text-3xl md:text-4xl');
content = content.replace('text-lg text-slate-600', 'text-base text-slate-600');
content = content.replace('text-3xl font-bold', 'text-2xl font-bold');
content = content.replace('text-lg font-bold text-slate-900', 'text-base font-bold text-slate-900');

// Add smooth scroll to top on mount
content = content.replace('window.scrollTo(0, 0);', 'window.scrollTo({ top: 0, behavior: "smooth" });');

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log('Patched EnquiryPage sizes and scroll');
