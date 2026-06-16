import fs from 'fs';
import path from 'path';

// Import locations from central locationsData file
import { STATES, CITIES, VILLAGES } from '../src/data/locationsData.ts';

const ALL_LOCATIONS = [
  ...STATES,
  ...CITIES,
  ...VILLAGES
].map(l => l.toLowerCase().replace(/_/g, '-'));

const dynamicPrefixes = [
  '/careers-',
  '/mushroom-training-',
  '/mushroom-farming-',
  '/mushroom-franchise-'
];

async function generate() {
  const dateInfo = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  console.log(`Generating separate locations sitemap for ${ALL_LOCATIONS.length} locations...`);
  
  // Add static landing pages representation if needed, but here we focus on the location pages
  for (const loc of ALL_LOCATIONS) {
    for (const prefix of dynamicPrefixes) {
      xml += `
  <url>
    <loc>https://www.organicmushroomfarm.shop${prefix}${loc}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.60</priority>
  </url>`;
    }
  }

  xml += `\n</urlset>`;

  // Write to public directory
  const sitemapPublicPath = path.resolve('./public/sitemap-locations.xml');
  fs.writeFileSync(sitemapPublicPath, xml, 'utf8');
  console.log(`Locations sitemap successfully written to ${sitemapPublicPath}.`);

  // Also write to dist if it exists
  const distDir = path.resolve('./dist');
  if (fs.existsSync(distDir)) {
    const sitemapDistPath = path.join(distDir, 'sitemap-locations.xml');
    fs.writeFileSync(sitemapDistPath, xml, 'utf8');
    console.log(`Locations sitemap also copied/written to ${sitemapDistPath}.`);
  }
}

generate().catch(console.error);
