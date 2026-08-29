const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'import HowToStartIndoorMushroomFarmCalifornia from "./pages/HowToStartIndoorMushroomFarmCalifornia";',
  'import HowToStartIndoorMushroomFarmCalifornia from "./pages/HowToStartIndoorMushroomFarmCalifornia";\nimport MushroomFarmingUsaGuide from "./pages/MushroomFarmingUsaGuide";'
);

content = content.replace(
  '<Route path="/how-to-start-indoor-mushroom-farm-california" element={<HowToStartIndoorMushroomFarmCalifornia />} />',
  '<Route path="/how-to-start-indoor-mushroom-farm-california" element={<HowToStartIndoorMushroomFarmCalifornia />} />\n          <Route path="/mushroom-farming-usa-guide" element={<MushroomFarmingUsaGuide />} />'
);

content = content.replace(
  '{ name: "Indoor Mushroom Farm California", href: "/how-to-start-indoor-mushroom-farm-california" },',
  '{ name: "Mushroom Farming USA Guide", href: "/mushroom-farming-usa-guide" },'
);

fs.writeFileSync(file, content);
console.log("App.tsx patched back");
