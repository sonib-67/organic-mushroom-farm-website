const fs = require('fs');

let content = fs.readFileSync('src/components/SEO.tsx', 'utf8');

// Find start and end of metaMap
const startIdx = content.indexOf('const metaMap: Record<string, string> = {');
const endIdx = content.indexOf('};', startIdx) + 2;

if (startIdx !== -1 && endIdx !== -1) {
  content = content.slice(0, startIdx) + 'const metaMap: Record<string, string> = {};' + content.slice(endIdx);
  fs.writeFileSync('src/components/SEO.tsx', content, 'utf8');
}
