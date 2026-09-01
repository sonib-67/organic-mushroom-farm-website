const fs = require('fs');

function fix(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\.\.\/\.\.\/src\//g, '../../');
  content = content.replace(/\.\.\/src\//g, '../');
  fs.writeFileSync(file, content);
}

fix('src/app/layout.next.tsx');
fix('src/app/components/NextNavbar.tsx');
fix('src/app/components/NextFooter.tsx');
fix('src/app/components/NextFloatingButtons.tsx');

console.log('Fixed imports!');
