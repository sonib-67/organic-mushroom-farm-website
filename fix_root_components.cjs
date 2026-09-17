const fs = require('fs');
const path = require('path');

const componentsDir = 'components';
if (fs.existsSync(componentsDir)) {
  const files = fs.readdirSync(componentsDir);

  files.forEach(file => {
    if (file.endsWith('.tsx')) {
      const filePath = path.join(componentsDir, file);
      let code = fs.readFileSync(filePath, 'utf8');
      
      if ((code.includes('motion') || code.includes('useState') || code.includes('useEffect') || code.includes('useContext')) && !code.includes('"use client"') && !code.includes("'use client'")) {
        fs.writeFileSync(filePath, '"use client";\n' + code);
        console.log('Added use client to', filePath);
      }
    }
  });
}
