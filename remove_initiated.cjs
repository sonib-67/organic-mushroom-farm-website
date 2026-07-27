const fs = require('fs');
let content = fs.readFileSync('api/create-order.ts', 'utf8');

const regex = /\/\/ Send initiated email to admin only[\s\S]*?\} catch \(emailError\) \{\s*console\.error\("Failed to send initiation email to admin:", emailError\);\s*\}/;

if (regex.test(content)) {
  content = content.replace(regex, '');
  fs.writeFileSync('api/create-order.ts', content);
  console.log('Removed initiated email logic.');
} else {
  console.log('Could not find initiated email logic.');
}
