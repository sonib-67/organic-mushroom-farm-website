const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

const securityHeaders = `
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: wss: data: blob:; frame-ancestors 'self';");
  next();
});
`;

if (!code.includes('X-Content-Type-Options')) {
  code = code.replace('app.use(cors());', 'app.use(cors());\n' + securityHeaders);
  fs.writeFileSync('server.ts', code, 'utf8');
  console.log("Added security headers");
} else {
  console.log("Headers already exist");
}
