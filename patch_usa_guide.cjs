const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace import
content = content.replace(
  'import MushroomFarmingUsaGuide from "./pages/MushroomFarmingUsaGuide";',
  'import HowToStartIndoorMushroomFarmCalifornia from "./pages/HowToStartIndoorMushroomFarmCalifornia";'
);

// Replace route
content = content.replace(
  '<Route path="/mushroom-farming-usa-guide" element={<MushroomFarmingUsaGuide />} />',
  '<Route path="/how-to-start-indoor-mushroom-farm-california" element={<HowToStartIndoorMushroomFarmCalifornia />} />'
);

// Replace link in array
content = content.replace(
  '{ name: "Mushroom Farming Usa Guide", href: "/mushroom-farming-usa-guide" },',
  '{ name: "Indoor Mushroom Farm California", href: "/how-to-start-indoor-mushroom-farm-california" },'
);

fs.writeFileSync(file, content);
console.log("App.tsx patched");
