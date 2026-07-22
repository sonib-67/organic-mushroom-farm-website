const fs = require('fs');
let code = fs.readFileSync('src/pages/RepayPage.tsx', 'utf8');

code = code.replace(/import Navbar from '\.\.\/components\/Navbar';\n/g, '');
code = code.replace(/import Footer from '\.\.\/components\/Footer';\n/g, '');
code = code.replace(/<Navbar \/>\n/g, '');
code = code.replace(/<Footer \/>\n/g, '');

fs.writeFileSync('src/pages/RepayPage.tsx', code);
console.log("RepayPage patched.");
