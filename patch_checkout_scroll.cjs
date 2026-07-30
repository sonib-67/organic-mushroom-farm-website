const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
content = content.replace(
/    window\.scrollTo\(0, 0\);/g,
`    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);`
);
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content);
