const fs = require('fs');
let code = fs.readFileSync('app/components/home/MushroomSEOSections.tsx', 'utf-8');
code = '"use client";\n' + code;
code = code.replace(/<Link\s+to=/g, '<Link href=');
fs.writeFileSync('app/components/home/MushroomSEOSections.tsx', code);
