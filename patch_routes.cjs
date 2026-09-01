const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const importStatement = `import BlogButtonMushroomFarming from "./pages/BlogButtonMushroomFarming";`;
if (!code.includes(importStatement)) {
  code = importStatement + '\n' + code;
}

const routeStatement = `          <Route path="/blog/button-mushroom-farming-guide" element={<BlogButtonMushroomFarming />} />`;
const searchPoint = `<Route path="/blog/mushroom-farming-business-plan-india" element={<ArticleMushroomBusinessPlanIndia />} />`;

if (!code.includes(routeStatement)) {
  code = code.replace(searchPoint, searchPoint + '\n' + routeStatement);
}

fs.writeFileSync('src/App.tsx', code);
console.log('Routes patched.');
