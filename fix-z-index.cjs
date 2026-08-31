const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  '<MyceliumBackground />\n        <Navbar />',
  '<MyceliumBackground />\n        <div className="relative z-10">\n        <Navbar />'
);

content = content.replace(
  '<FloatingButtons />\n      </div>',
  '<FloatingButtons />\n        </div>\n      </div>'
);

fs.writeFileSync('src/App.tsx', content);
console.log('Fixed wrapper!');
