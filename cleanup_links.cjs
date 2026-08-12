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

  // 1. In SEO.tsx, remove the key-value pairs for these exact URLs
  if (filePath.endsWith('SEO.tsx')) {
    for (const url of targetUrls) {
      const regex = new RegExp(`\\s*["']${url}["']:.*?,?`, 'g');
      content = content.replace(regex, '');
    }
  }

  // 2. In SitemapPage.tsx, remove the array elements matching the path
  if (filePath.endsWith('SitemapPage.tsx')) {
    for (const url of targetUrls) {
      const regex = new RegExp(`\\s*\\{[^}]*path:\\s*["']${url}["'][^}]*\\},?`, 'g');
      content = content.replace(regex, '');
    }
  }

  // 3. In Blog.tsx, remove the objects matching the path/id
  if (filePath.endsWith('Blog.tsx')) {
    for (const url of targetUrls) {
      const id = url.split('/').pop(); // fallback id
      const regex1 = new RegExp(`\\s*\\{[^}]*(id:\\s*["']${id}["']|customPath:\\s*["']${url}["'])[^}]*\\},?`, 'g');
      content = content.replace(regex1, '');
      const regex2 = new RegExp(`\\s*<Link[^>]*to=["']${url}["'][^>]*>.*?<\\/Link>`, 'g');
      content = content.replace(regex2, '');
    }
  }

  // 4. In App.tsx or Layout files, remove links from nav arrays or direct JSX
  // E.g. { name: "...", href: "/url" } or { label: "...", href: "/url" }
  for (const url of targetUrls) {
    const navRegex = new RegExp(`\\s*\\{[^}]*(href|to):\\s*["']${url}["'][^}]*\\},?`, 'g');
    content = content.replace(navRegex, '');
    
    // For standalone React <Link to="/url">Text</Link>
    // We want to unwrap the text if it's inline in an article.
    const linkRegex = new RegExp(`<Link[^>]*to=["']${url}["'][^>]*>(.*?)<\\/Link>`, 'g');
    content = content.replace(linkRegex, '$1'); // replacing with just the inner text
    
    // Same for <a> tags if any
    const aRegex = new RegExp(`<a[^>]*href=["']${url}["'][^>]*>(.*?)<\\/a>`, 'g');
    content = content.replace(aRegex, '$1');

    // Sometimes the link wraps a button or div, unwrapping is fine.
  }

  // 5. In PromoModal.tsx
  if (filePath.endsWith('PromoModal.tsx')) {
    for (const url of targetUrls) {
      const promoRegex = new RegExp(`\\s*\\{[^}]*path:\\s*["']${url}["'][^}]*\\},?`, 'g');
      content = content.replace(promoRegex, '');
    }
  }

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
console.log('Cleanup complete.');
