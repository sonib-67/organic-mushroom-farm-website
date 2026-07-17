const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  '<select\n                          name="mushroomType"',
  '<select\n                          id="mushroomType"\n                          name="mushroomType"'
);

code = code.replace(
  '<label className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                          Project Size *\n                        </label>\n                        <select\n                          name="projectSize"',
  '<label htmlFor="projectSize" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                          Project Size *\n                        </label>\n                        <select\n                          id="projectSize"\n                          name="projectSize"'
);

fs.writeFileSync('src/App.tsx', code);
