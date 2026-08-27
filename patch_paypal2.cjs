const fs = require('fs');
let content = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');

content = content.replace(
  /components: "buttons,funding-eligibility,googlepay,applepay",/,
  'components: "buttons",'
);

content = content.replace(
  /"enable-funding": "venmo,paylater",/,
  '"enable-funding": "venmo,paylater,card",'
);

fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', content);
console.log("Patched PayPal config again");
