const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

if (!code.includes('import SafeNavigate')) {
  code = code.replace(
    'import {',
    'import SafeNavigate from "./components/SafeNavigate";\nimport {'
  );
  fs.writeFileSync('src/App.tsx', code);
}
