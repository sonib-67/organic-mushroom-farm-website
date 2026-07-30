const fs = require('fs');
let content = fs.readFileSync('src/pages/SiteVisitConsultationPage.tsx', 'utf8');
content = content.replace(
/                    Processing\.\.\.\n                  <\/>\n                \) : \(\n                  <>\n                    <CheckCircle className="w-5 h-5" \/>\n                    Pay ₹500 & Confirm Visit\n                  <\/>\n                \)\}/g,
`                    <span>Processing...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Pay ₹500 & Confirm Visit</span>
                  </span>
                )}`
);
content = content.replace(
/                \{loading \? \(\n                  <>\n                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"/g,
`                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"`
);
fs.writeFileSync('src/pages/SiteVisitConsultationPage.tsx', content);
