import fs from 'fs';
import path from 'path';

function getAppRoutes(): string[] {
  const content = fs.readFileSync(path.resolve('./src/App.tsx'), 'utf-8');
  const routeRegex = /<Route\s+path="([^"]+)"/g;
  let match;
  const routes: string[] = [];
  while ((match = routeRegex.exec(content)) !== null) {
    if (match[1] !== '*' && match[1] !== '/') {
      routes.push(match[1]);
    }
  }
  return routes;
}

function extractMatches(filePath: string, regex: RegExp): string[] {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  let match;
  const matches: string[] = [];
  while ((match = regex.exec(content)) !== null) {
    matches.push(match[1]);
  }
  return [...new Set(matches)];
}

const allPaths = new Set<string>();
const staticPaths = getAppRoutes();

const servicesIds = extractMatches(path.resolve('./src/data/services.ts'), /id:\s*'([^']+)'/g);
const processesIds = extractMatches(path.resolve('./src/data/processes.ts'), /id:\s*'([^']+)'/g);
const successStoryIds = extractMatches(path.resolve('./src/pages/ProjectSpecs.tsx'), /"([^"]+)":\s*{\s*name:/g);
const mushroomTypesSlugs = extractMatches(path.resolve('./src/data/mushroomDetailData.ts'), /slug:\s*"([^"]+)"/g);
const blogIds = extractMatches(path.resolve('./src/pages/ArticlePage.tsx'), /"(\d+)":\s*{/g);
const jabalpurSlugs = extractMatches(path.resolve('./src/data/jabalpurBlogsData.ts'), /slug:\s*"([^"]+)"/g);
const puneSlugs = extractMatches(path.resolve('./src/data/puneBlogsData.ts'), /slug:\s*"([^"]+)"/g);

allPaths.add(''); // home

for (const p of staticPaths) {
  if (p.includes(':')) {
    if (p === '/services/:id') servicesIds.forEach(id => allPaths.add(`/services/${id}`));
    else if (p === '/process/:id') processesIds.forEach(id => allPaths.add(`/process/${id}`));
    else if (p === '/success-story/:id') successStoryIds.forEach(id => allPaths.add(`/success-story/${id}`));
    else if (p === '/mushroom-types/:slug') mushroomTypesSlugs.forEach(slug => allPaths.add(`/mushroom-types/${slug}`));
    else if (p === '/blog/:id') blogIds.forEach(id => allPaths.add(`/blog/${id}`));
    else if (p === '/locations/jabalpur/:slug') jabalpurSlugs.forEach(slug => allPaths.add(`/locations/jabalpur/${slug}`));
    else if (p === '/locations/pune/:slug') puneSlugs.forEach(slug => allPaths.add(`/locations/pune/${slug}`));
  } else {
    allPaths.add(p);
  }
}

// Write to sitemap
const dateInfo = new Date().toISOString();
let mainXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const urlPath of allPaths) {
  let priority = "0.80";
  let changefreq = "monthly";
  
  if (urlPath === '') { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/locations/')) { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/articles/')) { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/states')) { priority = "1.00"; changefreq = "daily"; }
  else if (urlPath.startsWith('/mushroom-types')) { priority = "0.90"; }
  else if (urlPath.startsWith('/services') || urlPath.startsWith('/process')) { priority = "0.90"; }

  mainXml += `  <url>
    <loc>https://organicmushroomfarm.shop${urlPath}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

mainXml += `</urlset>`;

fs.writeFileSync(path.resolve('./public/sitemap-main.xml'), mainXml, 'utf8');

const distDir = path.resolve('./dist');
if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap-main.xml'), mainXml, 'utf8');
}

console.log(`Total URLs found and added to sitemap: ${allPaths.size}`);

let indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://organicmushroomfarm.shop/sitemap-main.xml</loc>
  </sitemap>
</sitemapindex>`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), indexXml, 'utf8');
fs.writeFileSync(path.resolve('./sitemap.xml'), indexXml, 'utf8');
if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), indexXml, 'utf8');
}
