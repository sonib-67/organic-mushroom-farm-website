const fs = require('fs');
let code = fs.readFileSync('lib/blog-data.ts', 'utf8');
code = code.replace(
  'export interface BlogPost {\n  slug: string;',
  'export interface BlogPost {\n  slug: string;\n  date?: string;'
);
fs.writeFileSync('lib/blog-data.ts', code);
console.log('Fixed BlogPost interface');
