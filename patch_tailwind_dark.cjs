const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');

// Replace standard tailwindcss import with import + custom variant for dark mode
if (content.includes('@import "tailwindcss";') && !content.includes('@custom-variant dark')) {
  content = content.replace(
    '@import "tailwindcss";',
    `@import "tailwindcss";\n@custom-variant dark (&:is(.dark *));`
  );
  fs.writeFileSync('src/index.css', content);
  console.log('Patched index.css with custom dark variant');
} else {
  console.log('Already patched or not found');
}
