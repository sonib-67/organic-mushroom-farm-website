const fs = require('fs');
let content = fs.readFileSync('api/intl.ts', 'utf8');

const targetStr = `return { accessToken: data.access_token, apiBase: PAYPAL_API_BASE };`;
const replacementStr = `
  if (!data.access_token) {
    console.error("PayPal Auth Failed. No access_token. Data:", data);
    throw new Error("Failed to get PayPal access token. Check your CLIENT_ID and CLIENT_SECRET.");
  }
  return { accessToken: data.access_token, apiBase: PAYPAL_API_BASE };
`;

content = content.replace(targetStr, replacementStr);
fs.writeFileSync('api/intl.ts', content);
console.log("Added auth check");
