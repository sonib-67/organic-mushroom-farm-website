const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

const regex = /{ name: "Nagpur Mushroom Farming Training Center", path: "\/cities\/maharashtra\/nagpur", desc: ".*" },/g;
content = content.replace(regex, '{ name: "Nagpur Mushroom Farming Training Center", path: "/cities/maharashtra/nagpur", desc: "Nagpur Mushroom Farming complete guide in Marathi. Learn mushroom farm setup, high-yield spawn supply, commercial plans, subsidies & marketing support in Maharashtra." },\n    { name: "Aurangabad Mushroom Farming Business for Women SHGs", path: "/cities/maharashtra/aurangabad", desc: "Mushroom Farming Business for Women Self-Help Groups (SHGs) in Aurangabad | महिला बचत गटांसाठी मशरूम व्यवसाय 2026" },');

fs.writeFileSync('src/pages/SitemapPage.tsx', content);
