import fs from 'fs';
import path from 'path';

// Import locations from central locationsData file
import { STATES, CITIES, VILLAGES } from '../src/data/locationsData.ts';

const ALL_LOCATIONS = [
  ...STATES,
  ...CITIES,
  ...VILLAGES
].map(l => l.toLowerCase().replace(/_/g, '-'));

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
  
  // Sitemaps
  { path: '/sitemap', priority: '0.50', changefreq: 'weekly' },
  { path: '/site-directory', priority: '0.50', changefreq: 'weekly' }
];

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

  // 1. Core / Static routes
  for (const route of staticRoutes) {
    xml += `
  <url>
    <loc>https://www.organicmushroomfarm.shop${route.path}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }

  // 2. Add 10 dummy/sample blog posts to represent research papers dynamically
  for (let i = 1; i <= 10; i++) {
    xml += `
  <url>
    <loc>https://www.organicmushroomfarm.shop/blog/${i}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.50</priority>
  </url>`;
  }

  // 3. Dynamic Location pages (All 900+ cities/states/villages)
  console.log(`Generating sitemap entries for ${ALL_LOCATIONS.length} locations...`);
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

  const sitemapPath = path.resolve('./public/sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`Sitemap successfully updated! Total entries written to ${sitemapPath}.`);
}

generate().catch(console.error);
