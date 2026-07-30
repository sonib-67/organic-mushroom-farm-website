const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');
content = content.replace(
/                    Submitting\.\.\.\n                  <\/span>\n                \) : \(\n                  <>\n                    <Send className="w-5 h-5" \/> Submit Enquiry\n                  <\/>\n                \)\}/g,
`                    <span>Submitting...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" /> <span>Submit Enquiry</span>
                  </span>
                )}`
);
fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
