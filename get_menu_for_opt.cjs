const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target1 = '<AnimatePresence>\n        {mobileMenuOpen && (';
const target2 = '    </>\n  );\n};\n\nconst Hero = () => {';

const idx1 = content.lastIndexOf(target1, content.indexOf('Hero = () =>'));
const idx2 = content.indexOf(target2);

if (idx1 !== -1 && idx2 !== -1) {
  console.log(content.substring(idx1, idx1 + 4500)); // Just need the start of the menu to replace the background
} else {
  console.log("NOT FOUND");
}
