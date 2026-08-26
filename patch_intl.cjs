const fs = require('fs');

let content = fs.readFileSync('api/intl.ts', 'utf8');

// Replace the getPayPalAccessToken logic to be safer
const oldGetToken = `const getPayPalAccessToken = async () => {  const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg";  const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "ED-9zp54Zlm8uSN7ylvtiM7V1Cr8us3eq4fsJHV_8cjuTo-uD4NT2md7CN3eS0nBXbivmep5IgIW5-mW";  const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || "https://api-m.paypal.com";    const auth = Buffer.from(\`\${PAYPAL_CLIENT_ID}:\${PAYPAL_CLIENT_SECRET}\`).toString("base64");  const response = await fetch(\`\${PAYPAL_API_BASE}/v1/oauth2/token\`, {    method: "POST",    body: "grant_type=client_credentials",    headers: { Authorization: \`Basic \${auth}\` },  });  const data = await response.json();  return { accessToken: data.access_token, apiBase: PAYPAL_API_BASE };};`;

const newGetToken = `const getPayPalAccessToken = async () => {
  const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID || "BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg";
  const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "ED-9zp54Zlm8uSN7ylvtiM7V1Cr8us3eq4fsJHV_8cjuTo-uD4NT2md7CN3eS0nBXbivmep5IgIW5-mW";
  let PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || "https://api-m.paypal.com";
  
  // Remove trailing slash if present
  if (PAYPAL_API_BASE.endsWith('/')) PAYPAL_API_BASE = PAYPAL_API_BASE.slice(0, -1);
  
  const auth = Buffer.from(\`\${PAYPAL_CLIENT_ID}:\${PAYPAL_CLIENT_SECRET}\`).toString("base64");
  const response = await fetch(\`\${PAYPAL_API_BASE}/v1/oauth2/token\`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: { 
      Authorization: \`Basic \${auth}\`,
      Accept: "application/json"
    },
  });
  
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    console.error("PayPal Auth Failed. Status:", response.status, "Response:", text);
    throw new Error("Invalid response from PayPal Auth API");
  }
  
  if (!data.access_token) {
     throw new Error("No access_token returned from PayPal API");
  }
  
  return { accessToken: data.access_token, apiBase: PAYPAL_API_BASE };
};`;

// Replace fetch orders logic in createIntlOrder
const createOrderFetchOld = `    const response = await fetch(\`\${apiBase}/v2/checkout/orders\`, {      method: "POST",      headers: {        "Content-Type": "application/json",        Authorization: \`Bearer \${accessToken}\`,      },      body: JSON.stringify({        intent: "CAPTURE",        purchase_units: [{ amount: { currency_code: "USD", value: amount.toString() } }],      }),    });    const data = await response.json();`;

const createOrderFetchNew = `    const response = await fetch(\`\${apiBase}/v2/checkout/orders\`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": \`Bearer \${accessToken}\`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{ amount: { currency_code: "USD", value: amount.toString() } }],
      }),
    });
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch(e) {
      console.error("PayPal Create Order Failed. Status:", response.status, "Response:", text);
      throw new Error("Invalid response from PayPal Create Order API");
    }`;

// Replace fetch orders logic in captureIntlOrder
const captureOrderFetchOld = `    const response = await fetch(\`\${apiBase}/v2/checkout/orders/\${orderID}/capture\`, {      method: "POST",      headers: {        "Content-Type": "application/json",        Authorization: \`Bearer \${accessToken}\`,      },    });    const data = await response.json();`;

const captureOrderFetchNew = `    const response = await fetch(\`\${apiBase}/v2/checkout/orders/\${orderID}/capture\`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": \`Bearer \${accessToken}\`,
      },
    });
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch(e) {
      console.error("PayPal Capture Order Failed. Status:", response.status, "Response:", text);
      throw new Error("Invalid response from PayPal Capture Order API");
    }`;

// Do the string replacements
content = content.replace(/const getPayPalAccessToken = async \(\) => {[\s\S]*?return \{ accessToken: data\.access_token, apiBase: PAYPAL_API_BASE \};\n};/m, newGetToken);
content = content.replace(createOrderFetchOld.replace(/\s+/g, ''), createOrderFetchNew.replace(/\s+/g, ''));
// Wait, regex replacing strings with whitespace is tricky. Let's do exact match or careful replace.
