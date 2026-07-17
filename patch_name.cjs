const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  '<label htmlFor="mushroomType" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                          Full Name *\n                        </label>\n                        <input\n                          type="text"\n                          name="name"',
  '<label htmlFor="name" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                          Full Name *\n                        </label>\n                        <input\n                          id="name"\n                          type="text"\n                          name="name"'
);

fs.writeFileSync('src/App.tsx', code);
