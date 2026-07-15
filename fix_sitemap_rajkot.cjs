const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

const regex = /{ name: "Surat Mushroom Farming Training Center", path: "\/cities\/gujarat\/surat", desc: ".*" },/g;
content = content.replace(regex, '{ name: "Surat Mushroom Farming Training Center", path: "/cities/gujarat/surat", desc: "Surat Mushroom Farming complete guide. Learn mushroom farm setup, high-yield spawn supply, commercial plans, subsidies & marketing support in Gujarat." },\n    { name: "Rajkot Mushroom Farming Business for Supermarkets", path: "/cities/gujarat/rajkot", desc: "રાજકોટમાં સુપરમાર્કેટ અને રિટેલ ચેઇન માટે Mushroom Farming Business કેવી રીતે શરૂ કરવો? (2026 Guide)" },');

fs.writeFileSync('src/pages/SitemapPage.tsx', content);
console.log("Updated Sitemap");
