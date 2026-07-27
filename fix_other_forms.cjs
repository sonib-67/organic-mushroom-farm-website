const fs = require('fs');

function fixFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /body:\s*formData,/g,
    'body: JSON.stringify(Object.fromEntries(formData)),'
  );
  content = content.replace(
    /'Accept': 'application\/json'/g,
    `'Accept': 'application/json',
          'Content-Type': 'application/json'`
  );
  fs.writeFileSync(file, content);
}

fixFile('src/pages/MushroomTypeDetails.tsx');
fixFile('src/pages/SpawnSeed.tsx');

console.log('Fixed formData in other forms');
