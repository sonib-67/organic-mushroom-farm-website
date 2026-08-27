const fs = require('fs');
let content = fs.readFileSync('src/components/SEO.tsx', 'utf8');

content = content.replace(
  "schemas?: object[];",
  "schemas?: object[];\n  noindex?: boolean;"
);

content = content.replace(
  "const SEO: React.FC<SEOProps> = ({\n  title, description, keywords, url, schemas }) => {",
  "const SEO: React.FC<SEOProps> = ({\n  title, description, keywords, url, schemas, noindex }) => {"
);

// add to Helmet
content = content.replace(
  "{/* Canonical */}",
  "{noindex && <meta name=\"robots\" content=\"noindex, nofollow\" />}\n      {/* Canonical */}"
);

fs.writeFileSync('src/components/SEO.tsx', content);
console.log("Patched SEO.tsx");
