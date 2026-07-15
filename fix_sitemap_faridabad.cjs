const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

const newLink = `    { name: "Faridabad Industrial Mushroom Farming", path: "/cities/haryana/faridabad", desc: "फरीदाबाद के इंडस्ट्रियल एरिया में Mushroom Farming Business कैसे शुरू करें? (2026 गाइड) Complete guide to mushroom farm setup in Faridabad." },`;

if (!content.includes('faridabad", desc:')) {
  // Add it after the latest cities
  content = content.replace(
    '    { name: "Agra Mushroom Farming for Export", path: "/cities/uttar-pradesh/agra", desc: "Mushroom Farming for Export & International Markets in Agra | आगरा से मशरूम एक्सपोर्ट बिजनेस कैसे शुरू करें? Complete Guide 2026" },',
    '    { name: "Agra Mushroom Farming for Export", path: "/cities/uttar-pradesh/agra", desc: "Mushroom Farming for Export & International Markets in Agra | आगरा से मशरूम एक्सपोर्ट बिजनेस कैसे शुरू करें? Complete Guide 2026" },\n' + newLink
  );
  fs.writeFileSync('src/pages/SitemapPage.tsx', content);
  console.log("SitemapPage.tsx updated with Faridabad");
} else {
  console.log("Already updated");
}
