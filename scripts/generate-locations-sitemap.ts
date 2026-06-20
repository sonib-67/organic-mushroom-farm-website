import fs from 'fs';
import path from 'path';

// Import datasets
import { STATES, CITIES, VILLAGES } from '../src/data/locationsData.ts';
import { SEO_KEYWORDS } from '../src/data/seoKeywordsData.ts';
import { ALLOWED_JABALPUR_SLUGS } from '../src/data/customPages/jabalpur.ts';

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
      stateUrls.push(`https://organicmushroomfarm.shop/${stateSlug}/${kwSlug}`);
    }
  }
  const stateXml = generateSitemapXml(stateUrls);
  writeSitemapFile('sitemap-locations-states.xml', stateXml);
  console.log(`Generated States Sitemap containing ${stateUrls.length} links.`);

  // 2. Generate Cities Sitemaps (Split into parts where each contains ~5,000 URLs max)
  const maxUrlsPerSitemap = 5000;
  const maxCitiesPerSitemap = Math.floor(maxUrlsPerSitemap / SEO_KEYWORDS.length);
  const totalCities = CITIES.length;
  const numParts = Math.ceil(totalCities / maxCitiesPerSitemap);

  for (let partIdx = 0; partIdx < numParts; partIdx++) {
    const startIdx = partIdx * maxCitiesPerSitemap;
    const endIdx = Math.min((partIdx + 1) * maxCitiesPerSitemap, totalCities);
    const citiesChunk = CITIES.slice(startIdx, endIdx);
    
    if (citiesChunk.length === 0) continue;

    const cityUrls: string[] = [];
    for (const city of citiesChunk) {
      if (city.toLowerCase() === 'jabalpur') {
        continue; // Skip Jabalpur standard 4 URLs/combinations to prevent duplicates/unwanted pages
      }
      const citySlug = city.toLowerCase().replace(/_/g, '-');
      for (const kw of SEO_KEYWORDS) {
        const kwSlug = kw.url.replace(/^\/+/, '');
        cityUrls.push(`https://organicmushroomfarm.shop/${citySlug}/${kwSlug}`);
      }
    }

    const cityXml = generateSitemapXml(cityUrls);
    const filename = `sitemap-locations-cities-${partIdx + 1}.xml`;
    writeSitemapFile(filename, cityXml);
    console.log(`Generated Cities Sitemap (Part ${partIdx + 1}) containing ${cityUrls.length} links (Cities range: ${startIdx} to ${endIdx}).`);
  }

  // 3. Generate Villages Sitemap (~24 Villages * 193 URL combinations = ~4,600 URLs)
  const villageUrls: string[] = [];
  for (const village of VILLAGES) {
    const villageSlug = village.toLowerCase().replace(/_/g, '-');
    for (const kw of SEO_KEYWORDS) {
      const kwSlug = kw.url.replace(/^\/+/, '');
      villageUrls.push(`https://organicmushroomfarm.shop/${villageSlug}/${kwSlug}`);
    }
  }
  const villageXml = generateSitemapXml(villageUrls);
  writeSitemapFile('sitemap-locations-villages.xml', villageXml);
  console.log(`Generated Villages Sitemap containing ${villageUrls.length} links.`);

  // 4. Generate Jabalpur Unique Custom Pages Sitemap (exactly 93 URLs)
  const jabalpurUrls = ALLOWED_JABALPUR_SLUGS.map(slug => `https://organicmushroomfarm.shop/locations/jabalpur/${slug}`);
  const jabalpurXml = generateSitemapXml(jabalpurUrls);
  writeSitemapFile('sitemap-locations-jabalpur.xml', jabalpurXml);
  console.log(`Generated Jabalpur Dedicated Sitemap containing ${jabalpurUrls.length} links.`);

  console.log("All sub-sitemaps completed successfully!");
}

run().catch(console.error);
