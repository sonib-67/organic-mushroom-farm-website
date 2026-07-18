const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

// Fix the slugs
appContent = appContent.replace(
  "<Route path=\"/services/oyster-mushroom\" element={<MushroomTypeDetails defaultSlug='oyster-mushroom' />} />",
  "<Route path=\"/services/oyster-mushroom\" element={<MushroomTypeDetails defaultSlug='oyster' />} />"
);
appContent = appContent.replace(
  "<Route path=\"/services/button-mushroom\" element={<MushroomTypeDetails defaultSlug='button-mushroom' />} />",
  "<Route path=\"/services/button-mushroom\" element={<MushroomTypeDetails defaultSlug='white-button' />} />"
);

// Remove the redirect for spawn-supply
appContent = appContent.replace(
  /<Route\s*path="\/services\/spawn-supply"\s*element=\{<Navigate[^>]+>\}\s*\/>/,
  ""
);

fs.writeFileSync('src/App.tsx', appContent);
