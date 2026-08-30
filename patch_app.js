const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Add import
const importStr = "import ArticleSanDiegoMushroomFarming from './pages/ArticleSanDiegoMushroomFarming';\n";
content = content.replace("import HowToStartIndoorMushroomFarmCalifornia from './pages/HowToStartIndoorMushroomFarmCalifornia';", importStr + "import HowToStartIndoorMushroomFarmCalifornia from './pages/HowToStartIndoorMushroomFarmCalifornia';");

// Add route
const routeStr = "          <Route path=\"/mushroom-farming-san-diego\" element={<ArticleSanDiegoMushroomFarming />} />\n";
content = content.replace("<Route path=\"/how-to-start-indoor-mushroom-farm-california\"", routeStr + "          <Route path=\"/how-to-start-indoor-mushroom-farm-california\"");

fs.writeFileSync('src/App.tsx', content);
