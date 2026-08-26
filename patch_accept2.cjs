const fs = require('fs');
let content = fs.readFileSync('api/intl.ts', 'utf8');

// Use global regex
content = content.replace(
  /"Content-Type": "application\/json",\s*Authorization: `Bearer \${accessToken}`,/g,
  '"Content-Type": "application/json",\n        "Accept": "application/json",\n        Authorization: `Bearer ${accessToken}`,'
);

fs.writeFileSync('api/intl.ts', content);
console.log("Added Accept headers globally");
