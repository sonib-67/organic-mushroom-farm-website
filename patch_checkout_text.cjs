const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
content = content.replace(
/<Loader2 size=\{18\} className="animate-spin sm:w-5 sm:h-5" \/> Processing\.\.\./g,
'<Loader2 size={18} className="animate-spin sm:w-5 sm:h-5" /> <span>Processing...</span>'
);
content = content.replace(
/Complete Payment <ArrowLeft size=\{14\} className="rotate-180 sm:w-4 sm:h-4" \/>/g,
'<span>Complete Payment</span> <ArrowLeft size={14} className="rotate-180 sm:w-4 sm:h-4" />'
);
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content);
