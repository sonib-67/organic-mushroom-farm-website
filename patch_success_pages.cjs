const fs = require('fs');

function patchFile(file, titleStr) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import SEO')) {
    content = content.replace(
      "import { useSearchParams, Link } from 'react-router-dom';",
      "import { useSearchParams, Link } from 'react-router-dom';\nimport SEO from '../components/SEO';"
    );
  }
  
  if (!content.includes('<SEO')) {
    content = content.replace(
      '<div className="min-h-screen pt-32 pb-20 text-center px-4">',
      `<div className="min-h-screen pt-32 pb-20 text-center px-4">\n      <SEO title="${titleStr}" description="Payment successful." noindex={true} />`
    );
  }
  fs.writeFileSync(file, content);
  console.log("Patched", file);
}

patchFile('src/pages/UsaSuccessBasic.tsx', 'Payment Successful - Basic Plan');
patchFile('src/pages/UsaSuccessAdvanced.tsx', 'Payment Successful - Advanced Plan');

