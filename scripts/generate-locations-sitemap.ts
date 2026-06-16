import fs from 'fs';
import path from 'path';

// Import datasets
import { STATES, CITIES, VILLAGES } from '../src/data/locationsData.ts';
import { SEO_KEYWORDS } from '../src/data/seoKeywordsData.ts';

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
    <changefreq>monthly</changefreq>
    <priority>0.60</priority>
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

async function run() {
  console.log("Preparing locations mapping for Google Sitemap Index...");

  // 1. Generate States Sitemap (~36 States * 193 URL combinations = ~6,900 URLs)
  const stateUrls: string[] = [];
  for (const state of STATES) {
    const stateSlug = state.toLowerCase().replace(/_/g, '-');
    for (const kw of SEO_KEYWORDS) {
      // standard directory mapping: /state/keyword-route
      const kwSlug = kw.url.replace(/^\/+/, '');
      stateUrls.push(`https://www.organicmushroomfarm.shop/${stateSlug}/${kwSlug}`);
    }
  }
  const stateXml = generateSitemapXml(stateUrls);
  writeSitemapFile('sitemap-locations-states.xml', stateXml);
  console.log(`Generated States Sitemap containing ${stateUrls.length} links.`);

  // 2. Generate Cities Sitemap Part 1 and Part 2 
  // ~200 Cities * 193 URL combinations = ~38,600 URLs (Split into 2 parts of ~19,300 for compliance with 50,000 sitemap limit)
  const halfLength = Math.ceil(CITIES.length / 2);
  const citiesPart1 = CITIES.slice(0, halfLength);
  const citiesPart2 = CITIES.slice(halfLength);

  const cityUrls1: string[] = [];
  for (const city of citiesPart1) {
    const citySlug = city.toLowerCase().replace(/_/g, '-');
    for (const kw of SEO_KEYWORDS) {
      const kwSlug = kw.url.replace(/^\/+/, '');
      cityUrls1.push(`https://www.organicmushroomfarm.shop/${citySlug}/${kwSlug}`);
    }
  }
  const cityXml1 = generateSitemapXml(cityUrls1);
  writeSitemapFile('sitemap-locations-cities-1.xml', cityXml1);
  console.log(`Generated Cities Sitemap (Part 1) containing ${cityUrls1.length} links.`);

  const cityUrls2: string[] = [];
  for (const city of citiesPart2) {
    const citySlug = city.toLowerCase().replace(/_/g, '-');
    for (const kw of SEO_KEYWORDS) {
      const kwSlug = kw.url.replace(/^\/+/, '');
      cityUrls2.push(`https://www.organicmushroomfarm.shop/${citySlug}/${kwSlug}`);
    }
  }
  const cityXml2 = generateSitemapXml(cityUrls2);
  writeSitemapFile('sitemap-locations-cities-2.xml', cityXml2);
  console.log(`Generated Cities Sitemap (Part 2) containing ${cityUrls2.length} links.`);

  // 3. Generate Villages Sitemap (~24 Villages * 193 URL combinations = ~4,600 URLs)
  const villageUrls: string[] = [];
  for (const village of VILLAGES) {
    const villageSlug = village.toLowerCase().replace(/_/g, '-');
    for (const kw of SEO_KEYWORDS) {
      const kwSlug = kw.url.replace(/^\/+/, '');
      villageUrls.push(`https://www.organicmushroomfarm.shop/${villageSlug}/${kwSlug}`);
    }
  }
  const villageXml = generateSitemapXml(villageUrls);
  writeSitemapFile('sitemap-locations-villages.xml', villageXml);
  console.log(`Generated Villages Sitemap containing ${villageUrls.length} links.`);

  console.log("All sub-sitemaps completed successfully!");
}

run().catch(console.error);
