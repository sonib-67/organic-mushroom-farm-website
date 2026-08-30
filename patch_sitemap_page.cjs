const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

const newLink = `    { name: "Starting an Indoor Mushroom Farm in San Diego", path: "/mushroom-farming-san-diego", desc: "Learn how to set up a low-cost, high-yield indoor mushroom grow room tailored to Southern California's unique climate." },
`;

content = content.replace("    { name: \"Mushroom Training Profit Guide (USA)\"", newLink + "    { name: \"Mushroom Training Profit Guide (USA)\"");

fs.writeFileSync('src/pages/SitemapPage.tsx', content);
