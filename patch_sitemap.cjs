const fs = require('fs');
const date = new Date().toISOString();
let content = fs.readFileSync('public/sitemap-main.xml', 'utf8');

const newUrl = `  <url>
    <loc>https://organicmushroomsfarm.com/mushroom-farming-san-diego</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
`;

content = content.replace("</urlset>", newUrl + "</urlset>");
fs.writeFileSync('public/sitemap-main.xml', content);
