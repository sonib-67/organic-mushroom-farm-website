const fs = require('fs');

let code = fs.readFileSync('app/layout.tsx', 'utf8');

// Remove the manual <head> content and just let Next.js handle it
code = code.replace(/<head>[\s\S]*?<\/head>/g, '');

// Also ensure <ConditionalWidgets /> is not imported
// Let's just remove ConditionalWidgets to see if it fixes the build
// code = code.replace(/import \{ ConditionalWidgets \} from "@\/components\/ConditionalWidgets";/, '');
// code = code.replace(/<ConditionalWidgets \/>/g, '');

fs.writeFileSync('app/layout.tsx', code);
console.log('Fixed layout');
