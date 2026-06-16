import fs from 'fs';
import path from 'path';

const dateInfo = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '', priority: '1.00', changefreq: 'daily' },
  { path: '/about', priority: '0.80', changefreq: 'monthly' },
  { path: '/contact', priority: '0.80', changefreq: 'monthly' },
  { path: '/gallery', priority: '0.70', changefreq: 'weekly' },
  { path: '/faq', priority: '0.60', changefreq: 'monthly' },
  { path: '/locations', priority: '0.60', changefreq: 'monthly' },
  { path: '/success-stories', priority: '0.70', changefreq: 'weekly' },
  { path: '/workshop', priority: '0.80', changefreq: 'weekly' },
  { path: '/training', priority: '0.80', changefreq: 'weekly' },
  { path: '/turnkey-projects', priority: '0.80', changefreq: 'monthly' },
  { path: '/spawn-seed', priority: '0.80', changefreq: 'monthly' },
  { path: '/equipment', priority: '0.80', changefreq: 'monthly' },
  { path: '/subsidy', priority: '0.80', changefreq: 'monthly' },
  { path: '/business-plan', priority: '0.80', changefreq: 'monthly' },
  { path: '/mushroom-types', priority: '0.80', changefreq: 'monthly' },
  { path: '/roi-calculator', priority: '0.80', changefreq: 'monthly' },
  { path: '/careers', priority: '0.80', changefreq: 'weekly' },
  { path: '/mushroom-price-today', priority: '0.80', changefreq: 'daily' },
  { path: '/mushroom-franchise', priority: '0.80', changefreq: 'weekly' },
  { path: '/sops', priority: '0.70', changefreq: 'monthly' },
  { path: '/model-details', priority: '0.70', changefreq: 'monthly' },
  { path: '/compost-unit-specs', priority: '0.70', changefreq: 'monthly' },
  { path: '/expertise-details', priority: '0.70', changefreq: 'monthly' },
  { path: '/book-consultant', priority: '0.70', changefreq: 'monthly' },
  { path: '/on-site-consultation', priority: '0.70', changefreq: 'monthly' },
  
  // Articles
  { path: '/articles/mushroom-farming-beginner-guide-india-2026-2027', priority: '0.80', changefreq: 'monthly' },
  { path: '/articles/oyster-mushroom-cultivation-india', priority: '0.80', changefreq: 'monthly' },
  { path: '/articles/what-is-mushroom-spawn-beginner-guide-india', priority: '0.80', changefreq: 'monthly' },
  { path: '/articles/mushroom-farming-business-plan-hindi-2026', priority: '0.80', changefreq: 'monthly' },
  { path: '/articles/mushroom-farming-training-hindi-india', priority: '0.80', changefreq: 'monthly' },
  { path: '/articles/mushroom-farming-training-online-offline-certificate', priority: '0.80', changefreq: 'monthly' },
  { path: '/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026', priority: '0.80', changefreq: 'monthly' },
  
  // Services & Processes
  { path: '/services/compost-production', priority: '0.75', changefreq: 'monthly' },
  { path: '/services/consultancy', priority: '0.75', changefreq: 'monthly' },
  { path: '/services/marketing-support', priority: '0.75', changefreq: 'monthly' },
  { path: '/services/cold-chain', priority: '0.75', changefreq: 'monthly' },
  { path: '/process/raw-material', priority: '0.70', changefreq: 'monthly' },
  { path: '/process/compost-preparation', priority: '0.70', changefreq: 'monthly' },
  { path: '/process/production-room', priority: '0.70', changefreq: 'monthly' },
  { path: '/process/precision-harvest', priority: '0.70', changefreq: 'monthly' },
  { path: '/process/cold-chain', priority: '0.70', changefreq: 'monthly' },
  { path: '/process/market-linkage', priority: '0.70', changefreq: 'monthly' },
  
  // Policies & Legal
  { path: '/terms', priority: '0.50', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.50', changefreq: 'monthly' },
  { path: '/refund-policy', priority: '0.50', changefreq: 'monthly' },
  { path: '/shipping-policy', priority: '0.50', changefreq: 'monthly' },
  { path: '/support', priority: '0.50', changefreq: 'monthly' },
  { path: '/sitemap', priority: '0.50', changefreq: 'weekly' },
  { path: '/site-directory', priority: '0.50', changefreq: 'weekly' }
];

async function generate() {
  console.log("Generating primary static sitemap (sitemap-main.xml)...");

  let mainXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 1. Static Routes
  for (const route of staticRoutes) {
    mainXml += `
  <url>
    <loc>https://www.organicmushroomfarm.shop${route.path}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }

  // 2. Sample research/blogs entries for link weight
  for (let i = 1; i <= 10; i++) {
    mainXml += `
  <url>
    <loc>https://www.organicmushroomfarm.shop/blog/${i}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.50</priority>
  </url>`;
  }

  mainXml += `\n</urlset>`;

  const mainSitemapPath = path.resolve('./public/sitemap-main.xml');
  fs.writeFileSync(mainSitemapPath, mainXml, 'utf8');
  console.log(`Saved main sitemap to ${mainSitemapPath}`);

  // Copy to dist if it exists
  const distDir = path.resolve('./dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap-main.xml'), mainXml, 'utf8');
  }

  // 3. Generate the top level sitemap.xml which represents a Sitemap Index
  console.log("Generating central Google sitemap index (sitemap.xml)...");
  
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.organicmushroomfarm.shop/sitemap-main.xml</loc>
    <lastmod>${dateInfo}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.organicmushroomfarm.shop/sitemap-locations-states.xml</loc>
    <lastmod>${dateInfo}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.organicmushroomfarm.shop/sitemap-locations-cities-1.xml</loc>
    <lastmod>${dateInfo}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.organicmushroomfarm.shop/sitemap-locations-cities-2.xml</loc>
    <lastmod>${dateInfo}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.organicmushroomfarm.shop/sitemap-locations-villages.xml</loc>
    <lastmod>${dateInfo}</lastmod>
  </sitemap>
</sitemapindex>`;

  const indexSitemapPath = path.resolve('./public/sitemap.xml');
  fs.writeFileSync(indexSitemapPath, indexXml, 'utf8');
  console.log(`Saved sitemap index file to ${indexSitemapPath}`);

  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), indexXml, 'utf8');
  }

  console.log("Primary sitemaps configuration successfully finalized!");
}

generate().catch(console.error);
