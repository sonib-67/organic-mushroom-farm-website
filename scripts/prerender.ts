import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extract paths dynamically using the same logic as crawl.ts
function getAppRoutes(): string[] {
  const content = fs.readFileSync(path.resolve(__dirname, '../src/App.tsx'), 'utf-8');
  const lines = content.split('\n');
  const routes: string[] = [];
  for (const line of lines) {
     if (line.includes('<Route ') && line.includes('path="') && !line.includes('<Navigate ')) {
        const match = line.match(/path="([^"]+)"/);
        if (match && match[1] !== '*' && match[1] !== '/') {
           routes.push(match[1]);
        }
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

function getAllPaths(): string[] {
  const allPaths = new Set<string>();
  const staticPaths = getAppRoutes();

  const servicesIds = extractMatches(path.resolve(__dirname, '../src/data/services.ts'), /id:\s*'([^']+)'/g);
  const processesIds = extractMatches(path.resolve(__dirname, '../src/data/processes.ts'), /id:\s*'([^']+)'/g);
  const successStoryIds = extractMatches(path.resolve(__dirname, '../src/pages/ProjectSpecs.tsx'), /"([^"]+)":\s*{\s*name:/g);
  const mushroomTypesSlugs = extractMatches(path.resolve(__dirname, '../src/data/mushroomDetailData.ts'), /slug:\s*"([^"]+)"/g);
  const blogIds = extractMatches(path.resolve(__dirname, '../src/pages/ArticlePage.tsx'), /"(\d+)":\s*{/g);
  const jabalpurSlugs = extractMatches(path.resolve(__dirname, '../src/data/jabalpurBlogsData.ts'), /slug:\s*"([^"]+)"/g);
  const puneSlugs = extractMatches(path.resolve(__dirname, '../src/data/puneBlogsData.ts'), /slug:\s*"([^"]+)"/g);

  allPaths.add('/');

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

  console.log("ALL PATHS LENGTH:", allPaths.size);
  return Array.from(allPaths);
}

async function prerender() {
  const vite = await import('vite').then(m => m.createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    build: {
      ssr: true
    }
  }));

  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  
  // Read template from dist (built SPA HTML)
  const templatePath = path.resolve(__dirname, '../dist/index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Please build the SPA first.');
    process.exit(1);
  }
  let template = fs.readFileSync(templatePath, 'utf-8');

  // Strip hardcoded SEO tags from the template so they don't duplicate
  // We'll remove <title>, <meta name="description">, <link rel="canonical">, <meta property="og:">, <meta name="twitter:">
  template = template.replace(/<title>.*?<\/title>/gi, '<!--title-placeholder-->');
  template = template.replace(/<meta\s+name="description".*?>/gi, '');
  template = template.replace(/<link\s+rel="canonical".*?>/gi, '');
  template = template.replace(/<meta\s+property="og:.*?".*?>/gi, '');
  template = template.replace(/<meta\s+name="twitter:.*?".*?>/gi, '');
  template = template.replace(/<meta\s+name="keywords".*?>/gi, '');

  const paths = getAllPaths();
  console.log(`Prerendering ${paths.length} pages...`);

  for (const url of paths) {
    try {
      const { html, seoData } = render(url);

      let appHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
      
      const schemasHtml = seoData?.finalSchemas 
        ? seoData.finalSchemas.map((s: any) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')
        : '';

      const helmetContent = seoData ? `
        <title>${seoData.title}</title>
        <meta name="description" content="${seoData.description}" />
        <meta name="keywords" content="${seoData.keywords}" />
        <link rel="canonical" href="${seoData.fullUrl}" />
        <meta property="og:title" content="${seoData.title}" />
        <meta property="og:description" content="${seoData.description}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${seoData.fullUrl}" />
        <meta property="og:image" content="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="${seoData.title}" />
        <meta name="twitter:description" content="${seoData.description}" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
        ${schemasHtml}
      ` : '';
      
      // Inject helmet content right after <head> or replace the placeholder
      appHtml = appHtml.replace('<!--title-placeholder-->', helmetContent);

      const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
      const filePath = path.join(__dirname, '../dist', url === '/' ? 'index.html' : `${cleanUrl}/index.html`);
      const dirPath = path.dirname(filePath);

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFileSync(filePath, appHtml, 'utf-8');
      console.log(`✓ Prerendered ${url}`);
    } catch (err) {
      console.error(`x Failed to prerender ${url}:`, err);
    }
  }

  await vite.close();
  console.log('Prerendering completed.');
}

prerender();
