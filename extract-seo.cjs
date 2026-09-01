const fs = require('fs');
const path = require('path');

const appCode = fs.readFileSync('src/App.tsx', 'utf8');

// Find all imports
const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]\.\/pages\/([^'"]+)['"]/g;
const imports = {};
let match;
while ((match = importRegex.exec(appCode)) !== null) {
  imports[match[1]] = match[2];
}

// Find all routes
const routes = [...appCode.matchAll(/<Route path="([^"]+)"\s+element={<([A-Za-z0-9_]+)[^>]*>}/g)];

const migrated = [
  '/', '/about', '/contact', '/services', '/turnkey-projects',
  '/gallery', '/faq', '/terms', '/privacy', '/refund', '/shipping', '/support',
  '/book-consultant', '/payment-success', '/payment-cancelled', '/mushroom-training'
];

const remaining = routes.filter(r => !migrated.includes(r[1]) && !r[1].includes(':') && r[1] !== '*');

function convertPage(sourceFile, destDir, depth) {
  let content = fs.readFileSync(sourceFile, 'utf8');
  
  // Replace react-router-dom imports
  content = content.replace(/import\s+{([^}]*)}\s+from\s+['"]react-router-dom['"];/, (match, p1) => {
    let nextImports = [];
    let navImports = [];
    
    if (p1.includes('Link')) nextImports.push('Link');
    if (p1.includes('useNavigate')) navImports.push('useRouter');
    if (p1.includes('useLocation')) {
      navImports.push('usePathname');
      navImports.push('useSearchParams');
    }
    
    let result = '';
    if (nextImports.length > 0) result += `import Link from 'next/link';\n`;
    if (navImports.length > 0) result += `import { ${navImports.join(', ')} } from 'next/navigation';\n`;
    
    return result;
  });

  content = content.replace(/<Link\s+to=/g, '<Link href=');
  content = content.replace(/const\s+(\w+)\s*=\s*useNavigate\(\);/g, 'const $1 = useRouter();');
  content = content.replace(/const\s+(\w+)\s*=\s*useLocation\(\);/g, 'const pathname = usePathname();\n  const searchParams = useSearchParams();');
  
  // Fix imports relative paths based on depth
  // depth = destDir path segments count. e.g. src/app/locations/pune => depth = 2 (locations, pune)
  // Vite source was in src/pages/ -> relative imports were `../something`. 
  // Now from src/app/... it needs to be `../../something` for depth 2.
  let prefix = '';
  for(let i = 0; i <= depth; i++) {
    prefix += '../';
  }
  content = content.replace(/from\s+['"]\.\.\//g, `from '${prefix}`);
  content = content.replace(/from\s+['"]\.\//g, `from '${prefix}pages/`); // For local components inside pages directory

  // Ensure 'use client' is at the top
  if (!content.includes("'use client'")) {
    content = `'use client';\n` + content;
  }
  
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, 'page.next.tsx'), content);
}

let count = 0;
for (const r of remaining) {
  const routePath = r[1];
  const compName = r[2];
  
  if (imports[compName]) {
    const sourceFile = `src/pages/${imports[compName]}.tsx`;
    if (fs.existsSync(sourceFile)) {
      // Strip starting slash and calculate depth
      const cleanPath = routePath.replace(/^\//, '');
      const depth = cleanPath.split('/').length;
      const destDir = `src/app/${cleanPath}`;
      convertPage(sourceFile, destDir, depth);
      count++;
    } else {
      console.log(`Missing file: ${sourceFile} for ${compName}`);
    }
  } else {
    // Maybe it's defined in App.tsx? We can skip those for now.
  }
}

console.log(`Converted ${count} SEO pages!`);
