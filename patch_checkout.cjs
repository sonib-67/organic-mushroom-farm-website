const fs = require('fs');

let content = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');

content = content.replace(
  'const orderData = await response.json();',
  `if (!response.ok) {
                        const err = await response.json().catch(() => ({}));
                        throw new Error(err.error || "Payment creation failed");
                      }
                      const orderData = await response.json();`
);

content = content.replace(
  'const captureData = await response.json();',
  `if (!response.ok) {
                        const err = await response.json().catch(() => ({}));
                        throw new Error(err.error || "Payment capture failed");
                      }
                      const captureData = await response.json();`
);

fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', content);
console.log("Patched checkout form");
