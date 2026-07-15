const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

const regex = /{ name: "Kanpur Food Processing and Mushroom Business", path: "\/cities\/uttar-pradesh\/kanpur", desc: ".*" },/g;
content = content.replace(regex, '{ name: "Kanpur Food Processing and Mushroom Business", path: "/cities/uttar-pradesh/kanpur", desc: "Kanpur में Food Processing और Mushroom Business की नई संभावनाएँ 2026. Start your scalable mushroom farming and food processing business in Kanpur." },\n    { name: "Agra Mushroom Farming for Export", path: "/cities/uttar-pradesh/agra", desc: "Mushroom Farming for Export & International Markets in Agra | आगरा से मशरूम एक्सपोर्ट बिजनेस कैसे शुरू करें? Complete Guide 2026" },');

fs.writeFileSync('src/pages/SitemapPage.tsx', content);
console.log("Updated Sitemap for Agra");
