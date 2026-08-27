const fs = require('fs');
let content = fs.readFileSync('src/components/SEO.tsx', 'utf8');

// I will just use regex to add noindex to the destructuring
content = content.replace(
  /schemas\s*\}\)\s*=>\s*\{/g,
  "schemas, noindex }) => {"
);

fs.writeFileSync('src/components/SEO.tsx', content);
console.log("Patched SEO destructuring");
