const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix the extra closing div
content = content.replace(
  /<\/div>\s*<\/div>\s*<div className="md:col-span-3 grid grid-cols-3 gap-2 sm:gap-4 md:gap-10">/,
  '</div>\n          <div className="md:col-span-3 grid grid-cols-3 gap-2 sm:gap-4 md:gap-10">'
);

// We still need to close the `md:col-span-3` wrapper at the end of the 3 columns, BEFORE the main wrapper is closed.
content = content.replace(
  /(\s*)<\/Link>\s*<\/li>\s*\)\)}\s*<\/ul>\s*<\/div>\s*<\/div>\s*<div className="flex flex-col md:flex-row items-center justify-between border-t/g,
  '$1</Link>\n                </li>\n              ))}\n            </ul>\n          </div>\n          </div>\n        </div>\n        <div className="flex flex-col md:flex-row items-center justify-between border-t'
);

fs.writeFileSync('src/App.tsx', content);
console.log("Fixed div wrappers");
