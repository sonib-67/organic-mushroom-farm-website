const fs = require('fs');
let content = fs.readFileSync('src/api/internationalPayment.ts', 'utf8');

// Replace transporter.sendMail(...) with await transporter.sendMail(...)
content = content.replace(/transporter\.sendMail/g, 'await transporter.sendMail');
// The catch handlers are already attached as .catch(console.error), so await will wait and catch properly.

fs.writeFileSync('src/api/internationalPayment.ts', content);
console.log("Added await to sendMail");
