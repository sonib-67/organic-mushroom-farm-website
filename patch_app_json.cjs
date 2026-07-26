const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/body:\s*formData,\s*headers:\s*\{\s*Accept:\s*"application\/json",\s*\}/g, 
  `body: JSON.stringify(Object.fromEntries(formData.entries())),\n          headers: {\n            "Content-Type": "application/json",\n            Accept: "application/json",\n          }`);

// Also fix form.submit() in App.tsx if any
content = content.replace(/form\.submit\(\)/g, "form.reset()");

fs.writeFileSync('src/App.tsx', content);
