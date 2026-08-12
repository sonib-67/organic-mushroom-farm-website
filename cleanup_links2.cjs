const fs = require('fs');
const path = require('path');

const targetUrls = [
  '/articles/oyster-mushroom-cultivation-india',
  '/blog/mushroom-farming-business-plan-india',
  '/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026',
  '/blog/mushroom-training-guide-english',
  '/cities/karnataka/mysuru',
  '/blog/oyster-mushroom-cultivation-india',
  '/blog/turnkey-commercial-setup',
  '/cities',
  '/cities/kerala/thiruvananthapuram',
  '/mushroom-farming-guwahati-assam',
  '/cities/rajasthan/bikaner',
  '/cities/rajasthan/udaipur',
  '/cities/west-bengal/siliguri',
  '/mushroom-farming-mangalore-karnataka',
  '/services/turnkey-setup',
  '/spawn-seed'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const url of targetUrls) {
    // 1. Unwrap multiline <Link> tags
    const linkRegex = new RegExp(`<Link[^>]*to=["']${url}["'][^>]*>([\\s\\S]*?)<\\/Link>`, 'g');
    content = content.replace(linkRegex, '$1');
    
    // 2. Unwrap multiline <a> tags
    const aRegex = new RegExp(`<a[^>]*href=["']${url}["'][^>]*>([\\s\\S]*?)<\\/a>`, 'g');
    content = content.replace(aRegex, '$1');

    // 3. Any leftover `to="/spawn-seed"` inside custom elements (e.g., buttons, ActionButton)
    // We should probably just remove the `to="/url"` property
    const propRegex = new RegExp(`\\s*to=["']${url}["']`, 'g');
    content = content.replace(propRegex, '');

    // 4. href="/url"
    const hrefRegex = new RegExp(`\\s*href=["']${url}["']`, 'g');
    content = content.replace(hrefRegex, '');
    
    // 5. In App.tsx remove Route
    if (filePath.endsWith('App.tsx')) {
      const routeRegex = new RegExp(`\\s*<Route[^>]*path=["']${url}["'][^>]*\\/>\\s*`, 'g');
      content = content.replace(routeRegex, '\n');
    }
  }

  // Double check Blog.tsx array leftover elements with empty spaces
  // Double check PromoModal empty objects
  const emptyObj = /\{\s*(icon:\s*<[^>]+>,\s*)?label:\s*'.*?',\s*sub:\s*'.*?',\s*color:\s*'.*?'\s*\},?/g; // just in case properties were left over but `path` was removed?
  // Wait, in my previous script I removed `{ ... path: "/url" ... }` entirely.
  // Let's check PromoModal manually if it's fine.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

traverseDir('./src');
console.log('Cleanup 2 complete.');
