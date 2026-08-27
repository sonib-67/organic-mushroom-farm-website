const fs = require('fs');
let content = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');

content = content.replace(
  /currency:\s*"USD",\s*\}\}/,
  'currency: "USD",\n                    components: "buttons,funding-eligibility,googlepay,applepay",\n                    "enable-funding": "venmo,paylater",\n                  }}'
);

content = content.replace(
  /shape:\s*"pill",/,
  'shape: "rect",'
);

fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', content);
console.log("Patched PayPal config");
