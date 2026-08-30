const fs = require('fs');

const usaGuidePath = 'src/pages/MushroomFarmingUsaGuide.tsx';
let usaGuideContent = fs.readFileSync(usaGuidePath, 'utf8');
usaGuideContent = usaGuideContent.replace(
  "Starting an Indoor Mushroom Farm in San Diego",
  "San Diego Indoor Mushroom Farming: A Practical Guide to Building Your Own Farm"
);
fs.writeFileSync(usaGuidePath, usaGuideContent);

const sitemapPath = 'src/pages/SitemapPage.tsx';
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
sitemapContent = sitemapContent.replace(
  "Starting an Indoor Mushroom Farm in San Diego",
  "San Diego Indoor Mushroom Farming: A Practical Guide to Building Your Own Farm"
);
fs.writeFileSync(sitemapPath, sitemapContent);

const articlePath = 'src/pages/ArticleSanDiegoMushroomFarming.tsx';
let articleContent = fs.readFileSync(articlePath, 'utf8');
articleContent = articleContent.replace(
  "Starting an Indoor Mushroom Farm in San Diego (and Surrounding Areas)",
  "San Diego Indoor Mushroom Farming: A Practical Guide to Building Your Own Farm"
);
fs.writeFileSync(articlePath, articleContent);

console.log("Titles updated successfully!");
