const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');

// Remove the custom dark variant override to restore media-query default
content = content.replace(/@custom-variant dark \(&:is\(\.dark \*\)\);\n?/g, '');

fs.writeFileSync('src/index.css', content);
console.log("Restored media query dark mode");
