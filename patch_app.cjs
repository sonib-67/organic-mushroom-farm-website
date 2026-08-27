const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const importStatement = `import UsaTrainingPage from "./pages/UsaTrainingPage";
import UsaSuccessBasic from "./pages/UsaSuccessBasic";
import UsaSuccessAdvanced from "./pages/UsaSuccessAdvanced";`;
content = content.replace('import UsaTrainingPage from "./pages/UsaTrainingPage";', importStatement);

const routeStatement = `<Route path="/usatraining" element={<UsaTrainingPage />} />
          <Route path="/usatraining/success/basic" element={<UsaSuccessBasic />} />
          <Route path="/usatraining/success/advanced" element={<UsaSuccessAdvanced />} />`;
content = content.replace('<Route path="/usatraining" element={<UsaTrainingPage />} />', routeStatement);

fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx");
