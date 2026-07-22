const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('import RepayPage')) {
  code = code.replace(
    'import SiteVisitConsultationPage from "./pages/SiteVisitConsultationPage";',
    'import SiteVisitConsultationPage from "./pages/SiteVisitConsultationPage";\nimport RepayPage from "./pages/RepayPage";'
  );
  
  code = code.replace(
    '<Route path="/site-visit-consultation" element={<SiteVisitConsultationPage />} />',
    '<Route path="/site-visit-consultation" element={<SiteVisitConsultationPage />} />\n          <Route path="/repay/:orderId" element={<RepayPage />} />'
  );
  
  fs.writeFileSync('src/App.tsx', code);
  console.log("App.tsx patched.");
} else {
  console.log("RepayPage already imported.");
}
