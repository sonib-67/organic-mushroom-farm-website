const fs = require('fs');
let content = fs.readFileSync('src/pages/MushroomTypeDetails.tsx', 'utf8');

content = content.replace("'https://formspree.io/f/xykldqdy'", "'/api/enquiry'");
content = content.replace(/body:\s*formData,\s*headers:\s*\{\s*'Accept':\s*'application\/json'\s*\}/g, 
  `body: JSON.stringify({ ...Object.fromEntries(formData.entries()), subject: 'Enquiry for ' + mushroom.title }),\n        headers: {\n          'Content-Type': 'application/json',\n          'Accept': 'application/json'\n        }`);

content = content.replace(/action="https:\/\/formspree\.io\/f\/xykldqdy"/g, "");
content = content.replace(/method="POST"/g, "");

fs.writeFileSync('src/pages/MushroomTypeDetails.tsx', content);
