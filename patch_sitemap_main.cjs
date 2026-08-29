const fs = require('fs');
const file = 'public/sitemap-main.xml';
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /\/mushroom-farming-usa-guide/g,
    '/how-to-start-indoor-mushroom-farm-california'
  );
  fs.writeFileSync(file, content);
  console.log("public/sitemap-main.xml patched");
} else {
  console.log("public/sitemap-main.xml not found");
}
