const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The TurnkeyProjectsPage handles form submit at line 5422
content = content.replace(
  `      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );`,
  `      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
        },
      );`
);

fs.writeFileSync('src/App.tsx', content);
console.log('Fixed formData in App.tsx');
