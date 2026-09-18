const fs = require('fs');

let code = fs.readFileSync('app/training-checkout/TrainingCheckoutClient.tsx', 'utf8');

code = code.replace(/dark:bg-black\/40 bg-white\/5/g, 'dark:bg-transparent bg-transparent');
code = code.replace(/border dark:border-white\/10 border-black\/10/g, 'border-0 border-b border-black/10 dark:border-white/10 rounded-none');

fs.writeFileSync('app/training-checkout/TrainingCheckoutClient.tsx', code);
console.log('Fixed input backgrounds in TrainingCheckoutClient');
