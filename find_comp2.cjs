const fs = require('fs');
const lines = fs.readFileSync('src/App.tsx', 'utf8').split('\n');
for(let i=3831; i>=3700; i--) {
  if (lines[i].match(/const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{/)) {
    console.log("Component starts at:", i, lines[i]);
    break;
  }
}
