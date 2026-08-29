const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// A simple regex approach to fix <h3 ...> ... </h2> to <h3 ...> ... </h3>
// Since we only replaced </h3> with </h2>, we just need to find <h3 matched with </h2>
// Actually we can just do:
code = code.replace(/(<h3[^>]*>[\s\S]*?)<\/h2>/g, "$1</h3>");

fs.writeFileSync('src/App.tsx', code);
