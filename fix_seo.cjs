const fs = require('fs');
let content = fs.readFileSync('src/components/SEO.tsx', 'utf8');

content = content.replace(
  "import { Helmet } from 'react-helmet-async';",
  "import { Helmet } from 'react-helmet-async';\nimport { useLocation } from 'react-router-dom';"
);

content = content.replace(
  "const SEO: React.FC<SEOProps> = ({ title, description, keywords, url, schemas }) => {",
  "const SEO: React.FC<SEOProps> = ({ title, description, keywords, url, schemas }) => {\n  const location = useLocation();"
);

content = content.replace(
  "  const siteUrl = \"https://organicmushroomfarm.shop\";\n  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;",
  `  const siteUrl = "https://organicmushroomfarm.shop";
  
  // Use explicit url if provided, otherwise fallback to current pathname
  const activePath = url || location.pathname;
  
  // Ensure path starts with a slash
  const formattedPath = activePath.startsWith('/') ? activePath : '/' + activePath;
  
  // Construct clean canonical URL (ignoring trailing slash for root to match siteUrl exactly)
  const fullUrl = \`\${siteUrl}\${formattedPath === '/' ? '' : formattedPath}\`;`
);

fs.writeFileSync('src/components/SEO.tsx', content);
console.log("Updated SEO.tsx");
