const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

// replace startServer invocation with export
code = code.replace(
  "startServer();",
  `if (process.env.NODE_ENV !== 'production' || process.env.VITE_DEV_SERVER === 'true' || !process.env.VERCEL) {
  startServer();
}

export default app;`
);

fs.writeFileSync('server.ts', code);
