const fs = require('fs');

function patchSitemap(file) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // We previously replaced usa-guide with california.
    // Let's find california and add usa-guide back before it or just add it.
    if (!content.includes('/mushroom-farming-usa-guide')) {
      content = content.replace(
        '<loc>https://organicmushroomsfarm.com/how-to-start-indoor-mushroom-farm-california</loc>',
        '<loc>https://organicmushroomsfarm.com/how-to-start-indoor-mushroom-farm-california</loc>\n  <url>\n    <loc>https://organicmushroomsfarm.com/mushroom-farming-usa-guide</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>'
      );
      fs.writeFileSync(file, content);
      console.log(file + " patched");
    }
  }
}

patchSitemap('sitemap.xml');
patchSitemap('public/sitemap-main.xml');
