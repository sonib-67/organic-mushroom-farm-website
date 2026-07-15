const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

// The error shows:
// subsidies { name: "Lucknow ...

// Let's just fix the whole array entry
// I will find the broken Lucknow line and replace it with proper Lucknow and Kanpur lines

const brokenRegex = /{ name: "Lucknow Mushroom Farming Training Center", path: "\/cities\/uttar-pradesh\/lucknow".* marketing support in Uttar Pradesh\." },/g;

const replacement = `{ name: "Lucknow Mushroom Farming Training Center", path: "/cities/uttar-pradesh/lucknow", desc: "Complete guide on Lucknow Mushroom Farming. Learn mushroom farm setup, high-yield spawn supply, commercial plans, subsidies & marketing support in Uttar Pradesh." },
    { name: "Kanpur Food Processing and Mushroom Business", path: "/cities/uttar-pradesh/kanpur", desc: "Kanpur में Food Processing और Mushroom Business की नई संभावनाएँ 2026. Start your scalable mushroom farming and food processing business in Kanpur." },`;

content = content.replace(brokenRegex, replacement);

fs.writeFileSync('src/pages/SitemapPage.tsx', content);
