const fs = require('fs');
const file = 'sitemap.xml';
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    '<loc>https://organicmushroomsfarm.com/mushroom-farming-usa-guide</loc>',
    '<loc>https://organicmushroomsfarm.com/how-to-start-indoor-mushroom-farm-california</loc>'
  );
  fs.writeFileSync(file, content);
  console.log("sitemap.xml patched");
} else {
  console.log("sitemap.xml not found");
}
