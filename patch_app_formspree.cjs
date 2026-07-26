const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// We need to replace all formspree fetches with /api/enquiry
content = content.replace(/"https:\/\/formspree\.io\/f\/xykldqdy"/g, "'/api/enquiry'");
content = content.replace(/action="https:\/\/formspree\.io\/f\/xykldqdy"/g, "");

// In App.tsx, the body is usually formData. We should stringify it.
// Actually, fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(Object.fromEntries(formData.entries())), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
// But since the code in App.tsx might just pass 'body: formData' or 'body: JSON.stringify(data)', let's check what it uses.

fs.writeFileSync('src/App.tsx', content);
