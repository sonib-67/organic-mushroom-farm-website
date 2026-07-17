const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  "const isServer = typeof window === 'undefined';",
  ""
);
code = code.replace(
  "{!isServer && <MetaPixelTracker />}\n      {!isServer && <ScrollToTop />}",
  "<MetaPixelTracker />\n      <ScrollToTop />"
);

fs.writeFileSync('src/App.tsx', code);
