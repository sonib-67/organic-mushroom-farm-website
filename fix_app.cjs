const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const lines = content.split('\n');
const toRemove = [
  'import ArticleTurnkeySetup from "./pages/ArticleTurnkeySetup";',
  'import ArticleOperations from "./pages/ArticleOperations";',
  'import ArticleOysterCultivation from "./pages/ArticleOysterCultivation";',
  'import ArticleCompostUnit from "./pages/ArticleCompostUnit";',
  'import ArticleBusinessPlanHindi from "./pages/ArticleBusinessPlanHindi";',
  'import ArticleOrganicMushroomHealthBenefits from "./pages/ArticleOrganicMushroomHealthBenefits";'
];

let newLines = [];
let seen = new Set();

for (let line of lines) {
  if (toRemove.includes(line.trim())) {
    if (seen.has(line.trim())) {
      continue; // Skip duplicate
    }
    seen.add(line.trim());
  }
  newLines.push(line);
}

fs.writeFileSync('src/App.tsx', newLines.join('\n'));
console.log('Done!');
