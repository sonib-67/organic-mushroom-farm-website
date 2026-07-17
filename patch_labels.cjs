const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// For projectSize
code = code.replace(
  '<label htmlFor="mushroomType" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                          Planned Scale *',
  '<label htmlFor="projectSize" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                          Planned Scale *'
);
code = code.replace(
  '<select\n                          name="projectSize"',
  '<select\n                          id="projectSize"\n                          name="projectSize"'
);

// For email
code = code.replace(
  '<label htmlFor="mushroomType" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                        Email Address (Optional)',
  '<label htmlFor="email" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                        Email Address (Optional)'
);
code = code.replace(
  '<input\n                        type="email"\n                        name="email"',
  '<input\n                        id="email"\n                        type="email"\n                        name="email"'
);

// For message
code = code.replace(
  '<label htmlFor="mushroomType" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                        Message / Requirements *',
  '<label htmlFor="message" className="text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1">\n                        Message / Requirements *'
);
code = code.replace(
  '<textarea\n                        name="message"',
  '<textarea\n                        id="message"\n                        name="message"'
);

fs.writeFileSync('src/App.tsx', code);
