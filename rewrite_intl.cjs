const fs = require('fs');

let content = fs.readFileSync('api/intl.ts', 'utf8');

// I will just use regex to replace all `await response.json()` with text() parsing
content = content.replace(/const data = await response\.json\(\);/g, `const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch(e) {
      console.error("PayPal API returned non-JSON. Status:", response.status, "Response text:", text);
      throw new Error("Invalid response from PayPal API");
    }`);

// Also fix PAYPAL_API_BASE trailing slash
content = content.replace(/const PAYPAL_API_BASE = process\.env\.PAYPAL_API_BASE \|\| "https:\/\/api-m\.paypal\.com";/, 
  `let PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || "https://api-m.paypal.com";
  if (PAYPAL_API_BASE.endsWith('/')) PAYPAL_API_BASE = PAYPAL_API_BASE.slice(0, -1);`);

fs.writeFileSync('api/intl.ts', content);
console.log("Rewrote intl.ts to handle JSON errors and trailing slashes");
