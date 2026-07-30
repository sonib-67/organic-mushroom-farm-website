const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
content = content.replace(
/\{loading \? <Loader2 size=\{18\} className="animate-spin sm:w-5 sm:h-5" \/> : \(\n                      <>\n                        Complete Payment <ArrowLeft size=\{14\} className="rotate-180 sm:w-4 sm:h-4" \/>\n                      <\/>\n                    \)\}/g,
`{loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={18} className="animate-spin sm:w-5 sm:h-5" /> Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Complete Payment <ArrowLeft size={14} className="rotate-180 sm:w-4 sm:h-4" />
                      </span>
                    )}`
);
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content);
