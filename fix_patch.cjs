const fs = require('fs');

let content = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');

// Replace the bad patch with a good one
content = content.replace(
  `if (!response.ok) {
                        const err = await response.json().catch(() => ({}));
                        throw new Error(err.error || "Payment creation failed");
                      }
                      const orderData = await response.json();`,
  `const textData = await response.text();
                      let orderData;
                      try { orderData = JSON.parse(textData); } catch(e) { throw new Error("Invalid server response"); }
                      if (!response.ok) throw new Error(orderData.error || "Payment creation failed");`
);

content = content.replace(
  `if (!response.ok) {
                        const err = await response.json().catch(() => ({}));
                        throw new Error(err.error || "Payment capture failed");
                      }
                      const captureData = await response.json();`,
  `const textData = await response.text();
                      let captureData;
                      try { captureData = JSON.parse(textData); } catch(e) { throw new Error("Invalid server response"); }
                      if (!response.ok) throw new Error(captureData.error || "Payment capture failed");`
);

fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', content);
console.log("Fixed checkout form");
