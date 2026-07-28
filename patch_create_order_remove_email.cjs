const fs = require('fs');
let content = fs.readFileSync('api/create-order.ts', 'utf8');

content = content.replace(
  /\/\/ Send initiated email to admin only[\s\S]*?console\.error\("Failed to send initiation email to admin:", emailError\);\s*\}\s*/,
  ""
);

content = content.replace(/import \* as nodemailer from 'nodemailer';\n?/, "");

fs.writeFileSync('api/create-order.ts', content);
console.log("Removed nodemailer from create-order.ts");
