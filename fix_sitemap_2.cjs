const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

const regex = /{ name: "Kanpur Food Processing and Mushroom Business", path: "\/cities\/uttar-pradesh\/kanpur".*\n\s*{ name: "Kanpur Food Processing and Mushroom Business", path: "\/cities\/uttar-pradesh\/kanpur".*/g;
content = content.replace(regex, '{ name: "Kanpur Food Processing and Mushroom Business", path: "/cities/uttar-pradesh/kanpur", desc: "Kanpur में Food Processing और Mushroom Business की नई संभावनाएँ 2026. Start your scalable mushroom farming and food processing business in Kanpur." },');

fs.writeFileSync('src/pages/SitemapPage.tsx', content);
