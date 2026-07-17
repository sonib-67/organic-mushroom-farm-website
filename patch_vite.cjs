const fs = require('fs');
let code = fs.readFileSync('vite.config.ts', 'utf-8');

code = code.replace(
  "chunkSizeWarningLimit: 1000,",
  "chunkSizeWarningLimit: 1000,\n    rollupOptions: {\n      output: {\n        manualChunks(id) {\n          if (id.includes('node_modules')) {\n            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'vendor-react';\n            if (id.includes('lucide-react')) return 'vendor-icons';\n            return 'vendor';\n          }\n          if (id.includes('src/pages/Article')) return 'articles';\n          if (id.includes('src/pages/')) return 'pages';\n          if (id.includes('src/data/')) return 'data';\n        }\n      }\n    },"
);

fs.writeFileSync('vite.config.ts', code);
