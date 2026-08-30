const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticleSanDiegoMushroomFarming.tsx', 'utf8');

content = content.replace(
  'className="mb-10 max-w-xs md:max-w-md mx-auto"',
  'className="mb-10 w-1/2 md:w-1/3 max-w-[200px] md:max-w-[300px] mx-auto"'
);

fs.writeFileSync('src/pages/ArticleSanDiegoMushroomFarming.tsx', content);
console.log("Image size patched again");
