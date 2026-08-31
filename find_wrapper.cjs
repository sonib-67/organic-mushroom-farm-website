const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf8');
const match = content.indexOf('floating-button-wrapper');
if (match !== -1) {
  // Find which component it is in by looking for "const XYZ = () => {" before it
  let lastComponent = "";
  const lines = content.substring(0, match).split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].includes('const ') && lines[i].includes(' = () => {')) {
      lastComponent = lines[i];
      break;
    }
    if (lines[i].includes('export default function')) {
      lastComponent = lines[i];
      break;
    }
  }
  console.log("Component:", lastComponent);
}
