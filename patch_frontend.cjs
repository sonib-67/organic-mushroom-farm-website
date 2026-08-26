const fs = require('fs');
let content = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');

content = content.replace(/\/api\/intl\/create-order/g, '/api/intl-create-order');
content = content.replace(/\/api\/intl\/capture-order/g, '/api/intl-capture-order');
content = content.replace(/\/api\/intl\/fail-order/g, '/api/intl-fail-order');

fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', content);

// Also need to patch server.ts just in case they run it locally
let serverContent = fs.readFileSync('server.ts', 'utf8');
serverContent = serverContent.replace(/\/api\/intl\/create-order/g, '/api/intl-create-order');
serverContent = serverContent.replace(/\/api\/intl\/capture-order/g, '/api/intl-capture-order');
serverContent = serverContent.replace(/\/api\/intl\/fail-order/g, '/api/intl-fail-order');
fs.writeFileSync('server.ts', serverContent);
console.log("Patched API endpoints");
