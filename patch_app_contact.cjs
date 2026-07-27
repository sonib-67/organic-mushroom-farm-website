const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// We need to patch the fetch call inside ContactPage's handleSubmit
content = content.replace(
  `      const response = await fetch(
        "https://formspree.io/f/xykldqdy",
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
            "Content-Type": "application/json",
          },
        },
      );`
);

// We should also remove action="https://formspree.io/f/xykldqdy" in the form tag to prevent fallback or just replace it
content = content.replace(
  /action="https:\/\/formspree\.io\/f\/xykldqdy"/g,
  `action="/api/contact"`
);

fs.writeFileSync('src/App.tsx', content);
console.log('Patched App.tsx');
