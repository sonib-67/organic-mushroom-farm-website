const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Remove the incorrect H2 that was added
content = content.replace(/<h2 className="sr-only">Master Commercial Mushroom Farming: Comprehensive Training Programs<\/h2>/g, '');

fs.writeFileSync('src/App.tsx', content, 'utf8');

