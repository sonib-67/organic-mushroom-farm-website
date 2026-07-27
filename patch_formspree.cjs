const fs = require('fs');
let content = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

content = content.replace(/email: payload\.customerEmail,/g, "User_Email: payload.customerEmail,");

fs.writeFileSync('api/razorpay-webhook.ts', content);
console.log("Patched Formspree to prevent auto-reply");
