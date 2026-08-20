const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match initial={{ ... }} and replace opacity: 0 with nothing or opacity: 1
  content = content.replace(/initial=\{\{([^}]+)\}\}/g, (match, p1) => {
    // If it has opacity: 0, change it to opacity: 1 (so bots see it)
    let newP1 = p1.replace(/opacity:\s*0/g, 'opacity: 1');
    return `initial={{${newP1}}}`;
  });
  fs.writeFileSync(file, content);
});
