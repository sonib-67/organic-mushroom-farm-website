const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

// We'll just add it to the end of the predefined items
const insertionPoint = "];\n\n  // Convert our manual";
const newEntry = `    { name: "Tiruchirappalli Mushroom Farming Business for Young Entrepreneurs", path: "/cities/tamil-nadu/tiruchirappalli", desc: "Smart Mushroom Farming for Young Entrepreneurs in Tiruchirappalli | திருச்சிராப்பள்ளியில் இளைஞர்களுக்கான ஸ்மார்ட் மஷ்ரூம் பிசினஸ் வழிகாட்டி 2026" },\n`;

content = content.replace("];\n\n  // Convert our manual", newEntry + "  ];\n\n  // Convert our manual");

fs.writeFileSync('src/pages/SitemapPage.tsx', content);
