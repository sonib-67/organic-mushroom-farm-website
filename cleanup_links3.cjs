const fs = require('fs');
const path = require('path');

const targetUrls = [
  '/cities/karnataka/mysuru',
  '/cities/kerala/thiruvananthapuram',
  '/mushroom-farming-guwahati-assam',
  '/cities/rajasthan/bikaner',
  '/cities/rajasthan/udaipur',
  '/cities/west-bengal/siliguri',
  '/mushroom-farming-mangalore-karnataka'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const url of targetUrls) {
    const fullUrlRegex = new RegExp(`https://organicmushroomsfarm.com${url}`, 'g');
    content = content.replace(fullUrlRegex, 'https://organicmushroomsfarm.com');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

traverseDir('./src');
console.log('Cleanup 3 complete.');
