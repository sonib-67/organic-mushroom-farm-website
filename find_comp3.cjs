const fs = require('fs');
const lines = fs.readFileSync('src/App.tsx', 'utf8').split('\n');
for(let i=3831; i>=3700; i--) {
  if (lines[i].includes('export function') || lines[i].includes('function ') || (lines[i].includes('const ') && lines[i].includes('='))) {
    console.log(i, lines[i]);
  }
}
