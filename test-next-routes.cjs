const fs = require('fs');

const appsDir = fs.readdirSync('src/app').filter(d => fs.statSync(`src/app/${d}`).isDirectory() && d !== 'components');
console.log('Next.js Pages extracted so far:');
appsDir.forEach(d => {
  const hasPage = fs.existsSync(`src/app/${d}/page.next.tsx`);
  console.log(`- /${d} [${hasPage ? 'OK' : 'MISSING'}]`);
});

const legacyLines = fs.readFileSync('src/App.tsx', 'utf8').split('\n').length;
console.log(`\nLegacy App.tsx still intact (lines: ${legacyLines})`);
