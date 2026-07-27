const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const regex = /  \/\/ Default for other services[\s\S]*?\}\n\n\/\/ Contact API route/;
const replacement = `// Contact API route`;

content = content.replace(regex, replacement);

fs.writeFileSync('server.ts', content);
console.log("Fixed server.ts duplication");
