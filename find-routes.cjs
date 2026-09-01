const fs = require('fs');
const code = fs.readFileSync('src/App.tsx', 'utf8');
const routes = [...code.matchAll(/<Route path="([^"]+)"\s+element={<([A-Za-z0-9_]+)[^>]*>}/g)];
const migrated = [
  '/', '/about', '/contact', '/services', '/turnkey-projects',
  '/gallery', '/faq', '/terms', '/privacy', '/refund', '/shipping', '/support',
  '/book-consultant', '/payment-success', '/payment-cancelled', '/mushroom-training'
];
const remaining = routes.filter(r => !migrated.includes(r[1]) && !r[1].includes(':'));
console.log('Found ' + remaining.length + ' routes');
console.log(remaining.map(r => r[1] + '|' + r[2]).join('\n'));
