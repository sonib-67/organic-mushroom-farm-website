const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const targetStr = `{f.link ? (
                  <Link to={f.link} className="text-[13px] md:text-sm font-bold text-slate-700 dark:text-slate-200 tracking-tight hover:text-primary-start transition-colors">
                    {f.text}
                  </Link>
                ) : (
                  <span className="text-[13px] md:text-sm font-bold text-slate-700 dark:text-slate-200 tracking-tight">
                    {f.text}
                  </span>
                )}`;

const newStr = `{f.link ? (
                  <Link to={f.link} className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white tracking-tight hover:text-primary-start transition-colors">
                    {f.text}
                  </Link>
                ) : (
                  <span className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    {f.text}
                  </span>
                )}`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync('src/App.tsx', content);
  console.log("Patched Hero successfully");
} else {
  console.log("Target string not found in Hero");
}
