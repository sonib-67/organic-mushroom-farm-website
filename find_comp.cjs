const fs = require('fs');
const lines = fs.readFileSync('src/App.tsx', 'utf8').split('\n');
for(let i=3831; i>=0; i--) {
  if (lines[i].includes('const ') && lines[i].includes(' = () => {')) {
    console.log("Component starts at:", i, lines[i]);
    break;
  }
}
