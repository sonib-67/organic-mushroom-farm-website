const fs = require('fs');

const betterWay = `function getAppRoutes(): string[] {
  const content = fs.readFileSync(path.resolve('./src/App.tsx'), 'utf-8');
  // Match full <Route ... /> elements
  const routeRegex = /<Route[\\s\\S]*?path="([^"]+)"[\\s\\S]*?(?:>|\\/>)/g;
  let match;
  const routes: string[] = [];
  while ((match = routeRegex.exec(content)) !== null) {
    const fullTag = match[0];
    if (!fullTag.includes('<Navigate ')) {
      if (match[1] !== '*' && match[1] !== '/') {
        routes.push(match[1]);
      }
    }
  }
  return routes;
}`;

const betterWayPrerender = `function getAppRoutes(): string[] {
  const content = fs.readFileSync(path.resolve(__dirname, '../src/App.tsx'), 'utf-8');
  const routeRegex = /<Route[\\s\\S]*?path="([^"]+)"[\\s\\S]*?(?:>|\\/>)/g;
  let match;
  const routes: string[] = [];
  while ((match = routeRegex.exec(content)) !== null) {
    const fullTag = match[0];
    if (!fullTag.includes('<Navigate ')) {
      if (match[1] !== '*' && match[1] !== '/') {
        routes.push(match[1]);
      }
    }
  }
  return routes;
}`;

let crawlContent = fs.readFileSync('scripts/crawl.ts', 'utf-8');
crawlContent = crawlContent.replace(/function getAppRoutes\(\): string\[\] \{[\s\S]*?return routes;\n\}/, betterWay);
fs.writeFileSync('scripts/crawl.ts', crawlContent);

let prerenderContent = fs.readFileSync('scripts/prerender.ts', 'utf-8');
prerenderContent = prerenderContent.replace(/function getAppRoutes\(\): string\[\] \{[\s\S]*?return routes;\n\}/, betterWayPrerender);
fs.writeFileSync('scripts/prerender.ts', prerenderContent);
