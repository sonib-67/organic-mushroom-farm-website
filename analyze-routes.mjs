import fs from 'fs';

const content = fs.readFileSync('src/App.tsx', 'utf8');
const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<([^ \/>]+)[^>]*>\}\s*\/>/g;

let match;
const componentRoutes = {};

while ((match = routeRegex.exec(content)) !== null) {
  const path = match[1];
  const component = match[2];
  
  if (!componentRoutes[component]) {
    componentRoutes[component] = [];
  }
  componentRoutes[component].push(path);
}

const aliases = [];

for (const [component, paths] of Object.entries(componentRoutes)) {
  if (paths.length > 1) {
    // Determine primary path: usually the one starting with /cities/ or the more structured one
    const primary = paths.find(p => p.startsWith('/cities/')) || paths[0];
    const secondary = paths.filter(p => p !== primary);
    
    secondary.forEach(alias => {
      aliases.push({ alias, primary, component });
    });
  }
}

console.log(JSON.stringify(aliases, null, 2));
