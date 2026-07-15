const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

if (!content.includes('ArticleFaridabadTraining')) {
  content = content.replace(
    "import ArticleGurugramTraining from './pages/ArticleGurugramTraining';",
    "import ArticleGurugramTraining from './pages/ArticleGurugramTraining';\nimport ArticleFaridabadTraining from './pages/ArticleFaridabadTraining';"
  );
  
  content = content.replace(
    '<Route path="/cities/haryana/gurugram" element={<ArticleGurugramTraining />} />',
    '<Route path="/cities/haryana/gurugram" element={<ArticleGurugramTraining />} />\n          <Route path="/cities/haryana/faridabad" element={<ArticleFaridabadTraining />} />'
  );

  fs.writeFileSync('src/App.tsx', content);
  console.log("Updated App.tsx");
} else {
  console.log("App.tsx already updated");
}
