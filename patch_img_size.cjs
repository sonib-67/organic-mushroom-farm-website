const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticleSanDiegoMushroomFarming.tsx', 'utf8');

content = content.replace(
  'className="mb-10"',
  'className="mb-10 max-w-xs md:max-w-md mx-auto"'
);

fs.writeFileSync('src/pages/ArticleSanDiegoMushroomFarming.tsx', content);
console.log("Image size patched");
