const fs = require('fs');
const path = require('path');

function convertPage(sourceFile, destDir) {
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

  // Replace component usages
  content = content.replace(/<Link\s+to=/g, '<Link href=');
  content = content.replace(/const\s+(\w+)\s*=\s*useNavigate\(\);/g, 'const $1 = useRouter();');
  content = content.replace(/const\s+(\w+)\s*=\s*useLocation\(\);/g, 'const pathname = usePathname();\n  const searchParams = useSearchParams();');
  
  // Fix location.state usage in PaymentSuccessPage
  content = content.replace(/location\.state\?.(\w+)/g, 'searchParams.get(\'$1\')');
  content = content.replace(/location\.state/g, 'searchParams');

  // Fix relative imports (since they are moving from src/pages/ to src/app/folder/)
  content = content.replace(/from\s+['"]\.\.\//g, 'from \'../../');
  
  // Ensure 'use client' is at the top
  content = `'use client';\n` + content;
  
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, 'page.next.tsx'), content);
}

convertPage('src/pages/BookConsultantPage.tsx', 'src/app/book-consultant');
convertPage('src/pages/PaymentSuccessPage.tsx', 'src/app/payment-success');
convertPage('src/pages/PaymentCancelledPage.tsx', 'src/app/payment-cancelled');

console.log('Payment pages converted!');
