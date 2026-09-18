const fs = require('fs');

let code = fs.readFileSync('app/not-found.tsx', 'utf8');

// I need to remove the <title> and <meta> and <script> tags from inside the <div> in not-found.tsx
// because they are likely causing the hydration mismatch or keys warning which is somehow failing Next.js 16 build.

code = code.replace(/<title>.*?<\/title>/s, '');
code = code.replace(/<meta name="robots".*?\/>/s, '');
code = code.replace(/<script[\s\S]*?<\/script>/s, '');

fs.writeFileSync('app/not-found.tsx', code);
