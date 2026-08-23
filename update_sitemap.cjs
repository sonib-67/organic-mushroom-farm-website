const fs = require('fs');

const urls = [
  '/equipment/complete-list/machinery',
  '/equipment/complete-list/equipment',
  '/equipment/complete-list/safety',
  '/equipment/complete-list/infrastructure',
  '/equipment/complete-list/raw-material',
  '/equipment/complete-list/substrate-preparation',
  '/equipment/complete-list/compost-unit',
  '/equipment/complete-list/spawn-production',
  '/equipment/complete-list/laboratory',
  '/equipment/complete-list/climate-control',
  '/equipment/complete-list/ventilation',
  '/equipment/complete-list/water-management',
  '/equipment/complete-list/harvest-post-harvest',
  '/equipment/complete-list/cold-chain',
  '/equipment/complete-list/processing',
  '/equipment/complete-list/material-handling',
  '/equipment/complete-list/electrical-power',
  '/equipment/complete-list/cleaning-biosecurity',
  '/equipment/complete-list/quality-control',
  '/equipment/complete-list/safety-additional',
  '/equipment/complete-list/waste-management'
];

const sitemapPath = 'public/sitemap-main.xml';
let content = fs.readFileSync(sitemapPath, 'utf8');

const lastmod = new Date().toISOString();
let newUrlsXml = '';

urls.forEach(url => {
  newUrlsXml += `  <url>\n    <loc>https://organicmushroomsfarm.com${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.80</priority>\n  </url>\n`;
});

content = content.replace('</urlset>', newUrlsXml + '</urlset>');

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log('sitemap updated!');
