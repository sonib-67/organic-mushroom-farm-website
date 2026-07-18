const fs = require('fs');
let content = fs.readFileSync('scripts/prerender.ts', 'utf-8');

const betterWay = `function getAppRoutes(): string[] {
  const content = fs.readFileSync(path.resolve(__dirname, '../src/App.tsx'), 'utf-8');
  const lines = content.split('\\n');
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
}`;

content = content.replace(/function getAppRoutes\(\): string\[\] \{[\s\S]*?return routes;\n\}/, betterWay);
fs.writeFileSync('scripts/prerender.ts', content);
