const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  '<label htmlFor="mushroomType" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                          Phone Number *\n                        </label>\n                        <input\n                          type="tel"\n                          name="phone"',
  '<label htmlFor="phone" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                          Phone Number *\n                        </label>\n                        <input\n                          id="phone"\n                          type="tel"\n                          name="phone"'
);

fs.writeFileSync('src/App.tsx', code);
