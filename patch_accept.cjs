const fs = require('fs');
let content = fs.readFileSync('api/intl.ts', 'utf8');

content = content.replace(
  'headers: { Authorization: \`Basic \${auth}\` },', 
  'headers: { Authorization: \`Basic \${auth}\`, Accept: "application/json" },'
);

content = content.replace(
  '        "Content-Type": "application/json",\n        Authorization: \`Bearer \${accessToken}\`,',
  '        "Content-Type": "application/json",\n        Accept: "application/json",\n        Authorization: \`Bearer \${accessToken}\`,'
);

fs.writeFileSync('api/intl.ts', content);
console.log("Added Accept headers");
