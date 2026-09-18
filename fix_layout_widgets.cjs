const fs = require('fs');
let code = fs.readFileSync('app/layout.tsx', 'utf8');
code = code.replace(/<ConditionalWidgets \/>/g, '{/* <ConditionalWidgets /> */}');
code = code.replace(/<Navbar \/>/g, '{/* <Navbar /> */}');
fs.writeFileSync('app/layout.tsx', code);
console.log('Commented out Navbar and ConditionalWidgets');
