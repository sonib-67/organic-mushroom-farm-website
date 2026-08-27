const fs = require('fs');

let content = fs.readFileSync('api/intl.ts', 'utf8');

content = content.replace(/const text = await response\.text\(\);/g, `
  const text = await response.text();
  if (!response.ok) {
    console.error("PayPal API Error. Status:", response.status, "Body:", text.substring(0, 500));
    throw new Error("PayPal API error: " + response.status);
  }
`);

fs.writeFileSync('api/intl.ts', content);
console.log("Updated api/intl.ts with response.ok checks");
