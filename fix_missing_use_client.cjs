const fs = require('fs');

const filesToFix = [
  'app/loading.tsx',
  'app/success-story/amit-singhal/ClientPage.tsx',
  'app/success-story/sneha-sharma/ClientPage.tsx',
  'app/success-story/rajesh-kumar/ClientPage.tsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('"use client"') && !content.includes("'use client'")) {
      fs.writeFileSync(file, '"use client";\n' + content);
      console.log('Fixed', file);
    }
  }
});

