const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(/<ScrollToTop \/>\n/g, '');
content = content.replace(/const ScrollToTop = \(\) => \{\n  const \{ pathname \} = useLocation\(\);\n  useEffect\(\(\) => \{\n    window\.scrollTo\(0, 0\);\n  \}, \[pathname\]\);\n  return null;\n\};\n/g, '');
fs.writeFileSync('src/App.tsx', content);
