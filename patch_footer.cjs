const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /<div className="grid md:grid-cols-5 gap-10 mb-16">\s*<div className="col-span-1 md:col-span-2">/,
  '<div className="flex flex-col gap-10 mb-16 md:grid md:grid-cols-5 md:gap-10">\n          <div className="md:col-span-2">'
);

content = content.replace(
  /<\/div>\s*<div>\s*<h4 className="dark:text-white text-slate-900 font-bold mb-6 uppercase tracking-widest text-\[9px\] border-l-2 border-primary-start pl-3">\s*Explore/g,
  '</div>\n          </div>\n          <div className="md:col-span-3 grid grid-cols-3 gap-2 sm:gap-4 md:gap-10">\n          <div>\n            <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">\n              Explore'
);

content = content.replace(
  /<h4 className="dark:text-white text-slate-900 font-bold mb-6 uppercase tracking-widest text-\[9px\] border-l-2 border-primary-start pl-3">\s*Resources/g,
  '<h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">\n              Resources'
);

content = content.replace(
  /<h4 className="dark:text-white text-slate-900 font-bold mb-6 uppercase tracking-widest text-\[9px\] border-l-2 border-primary-start pl-3">\s*Support & Legal/g,
  '<h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">\n              Support & Legal'
);

// find the end of the lists and close the wrapper
content = content.replace(
  /(\s*)<\/Link>\s*<\/li>\s*}\)\}\s*<\/ul>\s*<\/div>\s*<\/div>\s*<div className="flex flex-col md:flex-row items-center/g,
  '$1</Link>\n                </li>\n              ))}\n            </ul>\n          </div>\n          </div>\n        </div>\n        <div className="flex flex-col md:flex-row items-center'
);

fs.writeFileSync('src/App.tsx', content);
console.log("Patched footer layout");
