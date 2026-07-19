import fs from 'fs';

const content = fs.readFileSync('src/App.tsx', 'utf8');
const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<([^ \/>]+)([^>]*)>\}\s*\/>/g;

let match;
const componentRoutes = {};

while ((match = routeRegex.exec(content)) !== null) {
  const path = match[1];
  const component = match[2];
  const props = match[3];
  
  if (!componentRoutes[component]) {
    componentRoutes[component] = [];
  }
  componentRoutes[component].push({ path, props });
}

const redirects = [];
const excluded = [];

for (const [component, paths] of Object.entries(componentRoutes)) {
  if (paths.length > 1) {
    // If it's a dynamic route, skip it (like /:slug)
    if (paths.some(p => p.path.includes(':'))) {
      excluded.push({ component, reason: 'Contains dynamic routes', paths: paths.map(p => p.path) });
      continue;
    }

    // Check if props are different
    const firstProps = paths[0].props;
    const propsDiffer = paths.some(p => p.props !== firstProps);
    
    if (propsDiffer) {
      excluded.push({ component, reason: 'Props differ (e.g. defaultSlug, metaDesc)', paths: paths.map(p => p.path) });
      continue;
    }

    // Otherwise, they are true duplicates. Determine primary.
    // Let's prefer /cities/ over /mushroom-farming- for cities.
    const primary = paths.find(p => p.path.startsWith('/cities/'))?.path || paths.find(p => !p.path.includes('mushroom-farming-') && !p.path.includes('training/'))?.path || paths[0].path;
    const aliases = paths.filter(p => p.path !== primary).map(p => p.path);
    
    if (aliases.length > 0) {
      redirects.push({ primary, aliases, component });
    }
  }
}

console.log(JSON.stringify({ redirects, excluded }, null, 2));
