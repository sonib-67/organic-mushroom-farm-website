const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

appContent = appContent.replace(/ArticleOysterCultivation/g, 'ArticleOysterMushroomCultivation');
appContent = appContent.replace(/ArticleTrainingOnlineOffline/g, 'ArticleMushroomTrainingGuide');

const imports = [
  'import ArticleOysterMushroomCultivation from "./pages/ArticleOysterMushroomCultivation";',
  'import ArticleGharParMushroomFarming from "./pages/ArticleGharParMushroomFarming";',
  'import ArticleTurnkeyCommercialSetup from "./pages/ArticleTurnkeyCommercialSetup";',
  'import ArticleBusinessPlanIndia from "./pages/ArticleBusinessPlanIndia";'
];

for (const imp of imports) {
  if (!appContent.includes(imp)) {
    appContent = appContent.replace('import SEO from "./components/SEO";', 'import SEO from "./components/SEO";\n' + imp);
  }
}

fs.writeFileSync('src/App.tsx', appContent);
