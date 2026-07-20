const fs = require('fs');

// 1. App.tsx - TrainingPage
let appContent = fs.readFileSync('src/App.tsx', 'utf8');
const trainingSeoRegex = /(const TrainingPage = \({ metaDesc }: \{ metaDesc\?: string \}\) => \{.*?<SEO[^>]*>)/s;
if (trainingSeoRegex.test(appContent)) {
  appContent = appContent.replace(trainingSeoRegex, `$1\n      <h2 className="sr-only">\n        {location.pathname === "/training/online" ? "Learn Anywhere: Advanced Online Mushroom Farming Course" :\n         location.pathname === "/training/offline" ? "Hands-On Offline Mushroom Cultivation Workshops" :\n         "Master Commercial Mushroom Farming: Comprehensive Training Programs"}\n      </h2>`);
  fs.writeFileSync('src/App.tsx', appContent, 'utf8');
  console.log("Updated App.tsx (TrainingPage)");
}

// 2. ProjectSpecs.tsx
let projectSpecsContent = fs.readFileSync('src/pages/ProjectSpecs.tsx', 'utf8');
if (projectSpecsContent.includes('<SEO')) {
  projectSpecsContent = projectSpecsContent.replace(/<SEO/g, `<h2 className="sr-only">\n        {id === "sneha-sharma" ? "Success Story: Building a Highly Profitable Mushroom Farm" :\n         id === "amit-singhal" ? "A Journey to Commercial Mushroom Cultivation Success" :\n         id === "rajesh-kumar" ? "Inspiring Results in Large-Scale Mushroom Production" : ""}\n      </h2>\n      <SEO`);
  fs.writeFileSync('src/pages/ProjectSpecs.tsx', projectSpecsContent, 'utf8');
  console.log("Updated ProjectSpecs.tsx");
}

// 3. ArticlePage.tsx
let articlePageContent = fs.readFileSync('src/pages/ArticlePage.tsx', 'utf8');
if (articlePageContent.includes('<SEO')) {
  articlePageContent = articlePageContent.replace(/<SEO/g, `<h2 className="sr-only">\n        {id === "1" ? "Step-by-Step Guide to Commercial Oyster Mushroom Cultivation" :\n         id === "2" ? "Best Practices for Growing High-Quality Button Mushrooms" :\n         id === "3" ? "Milky Mushroom Farming: Temperature Control and Yield Tips" :\n         id === "4" ? "Understanding the Initial Setup Costs for a Mushroom Farm" :\n         id === "5" ? "Preparing the Perfect Compost for Maximum Mushroom Yield" :\n         id === "6" ? "Common Mushroom Diseases and Effective Organic Treatments" :\n         id === "7" ? "How to Market and Sell Your Fresh Mushrooms Locally" :\n         id === "8" ? "Selecting the Best Quality Spawn for Your Cultivation Unit" :\n         id === "9" ? "Seasonal Mushroom Farming Tips for Consistent Harvests" : ""}\n      </h2>\n      <SEO`);
  fs.writeFileSync('src/pages/ArticlePage.tsx', articlePageContent, 'utf8');
  console.log("Updated ArticlePage.tsx");
}
