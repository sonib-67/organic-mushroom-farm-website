const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

// Replace varietyName line to add Mushroom if missing
content = content.replace(
  /const varietyName = mushroomVariety \|\| 'All Varieties Combined';/,
  `let varietyName = mushroomVariety || 'All Varieties Combined';
    if (varietyName !== 'All Varieties Combined' && !varietyName.includes('All Varieties') && !varietyName.toLowerCase().includes('mushroom')) {
      varietyName += ' Mushroom';
    }`
);

fs.writeFileSync('server.ts', content);
console.log('Patched server.ts mushroom word');
