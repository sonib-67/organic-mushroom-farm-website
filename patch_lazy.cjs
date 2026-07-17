const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace all imports for pages in articles and other heavy pages
const importsToReplace = [
  'ArticlePage', 'ArticleBeginnerGuide', 'ArticleOysterMushroomCultivation',
  'ArticleMushroomSpawn', 'ArticleBusinessPlanHindi', 'ArticleTrainingGuideHindi',
  'ArticleMushroomTrainingAffordable', 'ArticleGharParMushroomFarming',
  'ArticleUltimateGuideHinglish', 'ArticleUSAProfitGuide', 'ArticleTurnkeyMushroomFarm',
  'ArticlePuneMushroomFarming', 'ArticleUltimateGuideIndia',
  'ArticleAhmedabadTraining', 'ArticleBhopalTraining', 'ArticleBhubaneswarTraining',
  'ArticleBikanerTraining', 'ArticleChandigarhTraining', 'ArticleDehradunTraining',
  'ArticleFaridabadTraining', 'ArticleGuwahatiTraining', 'ArticleIndoreTraining',
  'ArticleJaipurTraining', 'ArticleKanpurTraining', 'ArticleKochiTraining',
  'ArticleLucknowTraining', 'ArticleLudhianaTraining', 'ArticleMaduraiTraining',
  'ArticleMysuruTraining', 'ArticleNagpurTraining', 'ArticleNashikTraining',
  'ArticlePatnaTraining', 'ArticleRaipurTraining', 'ArticleRanchiTraining',
  'ArticleSiliguriTraining', 'ArticleSuratTraining', 'ArticleThiruvananthapuramTraining',
  'ArticleVadodaraTraining', 'ArticleVaranasiTraining', 'ArticleVisakhapatnamTraining'
];

let addedSuspense = false;
if (!code.includes('import { Suspense } from "react";')) {
  code = 'import { Suspense } from "react";\n' + code;
}

importsToReplace.forEach(component => {
  const regex = new RegExp(`import ${component} from "\\./pages/${component}";`, 'g');
  if (regex.test(code)) {
    code = code.replace(regex, `const ${component} = React.lazy(() => import("./pages/${component}"));`);
  }
});

// Wrap <Routes> with <Suspense>
if (!code.includes('<Suspense fallback={null}>')) {
  code = code.replace('<Routes>', '<Suspense fallback={null}><Routes>');
  code = code.replace('</Routes>', '</Routes></Suspense>');
}

fs.writeFileSync('src/App.tsx', code);
