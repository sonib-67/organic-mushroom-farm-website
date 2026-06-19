import fs from 'fs';
import path from 'path';

const dateInfo = new Date().toISOString().split('T')[0];

function generateSitemapXml(urls: string[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const url of urls) {
    xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`;
  }

  xml += `\n</urlset>`;
  return xml;
}

function writeSitemapFile(filename: string, content: string) {
  const publicPath = path.resolve(`./public/${filename}`);
  fs.writeFileSync(publicPath, content, 'utf8');
  console.log(`Saved sitemap file to: ${publicPath}`);

  const distDir = path.resolve('./dist');
  if (fs.existsSync(distDir)) {
    const distPath = path.join(distDir, filename);
    fs.writeFileSync(distPath, content, 'utf8');
    console.log(`Copied sitemap file to: ${distPath}`);
  }
}

// Helpers for reading from the central cities.tsx database
import { StatesData, CitiesData, VillagesData } from '../src/data/cities';

async function run() {
  console.log("Analyzing compiled central TypeScript database to generate Google Sitemaps...");

  const states = StatesData;
  const cities = CitiesData;
  const villages = VillagesData;

  console.log(`Loaded ${states.length} States, ${cities.length} Cities, and ${villages.length} Villages.`);

  // 1. Generate States Sitemap
  const stateUrls: string[] = [];
  for (const state of states) {
    stateUrls.push(`https://www.organicmushroomfarm.shop/${state.slug}`);
  }
  const stateXml = generateSitemapXml(stateUrls);
  writeSitemapFile('sitemap-locations-states.xml', stateXml);
  console.log(`Generated States Sitemap containing ${stateUrls.length} clean links.`);

  // 2. Generate Cities Sitemap
  const cityUrls: string[] = [];
  for (const city of cities) {
    const parentState = states.find(s => s.state.toLowerCase() === city.state.toLowerCase() || s.cities.includes(city.slug));
    const parentStateSlug = parentState ? parentState.slug : city.state.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-');
    cityUrls.push(`https://www.organicmushroomfarm.shop/${parentStateSlug}/${city.slug}`);
  }
  const cityXml = generateSitemapXml(cityUrls);
  writeSitemapFile('sitemap-locations-cities-1.xml', cityXml); // Since lists are compact, keeping in cities-1 index for maximum crawlability
  console.log(`Generated Cities Sitemap containing ${cityUrls.length} clean links.`);

  // 3. Generate Villages Sitemap
  const villageUrls: string[] = [];
  for (const village of villages) {
    const parentCity = cities.find(c => c.city.toLowerCase() === village.city.toLowerCase());
    const citySlug = parentCity ? parentCity.slug : village.city.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-');
    
    const parentState = states.find(s => s.state.toLowerCase() === village.state.toLowerCase());
    const parentStateSlug = parentState ? parentState.slug : village.state.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-');

    villageUrls.push(`https://www.organicmushroomfarm.shop/${parentStateSlug}/${citySlug}/${village.slug}`);
  }
  const villageXml = generateSitemapXml(villageUrls);
  writeSitemapFile('sitemap-locations-villages.xml', villageXml);
  console.log(`Generated Villages Sitemap containing ${villageUrls.length} clean links.`);

  console.log("Structured sub-sitemaps dynamically synced to JSON directories!");
}

run().catch(console.error);
