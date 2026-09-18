const fs = require('fs');

let code = fs.readFileSync('app/training-checkout/TrainingCheckoutClient.tsx', 'utf8');

// Remove background blur and heavy boxes
code = code.replace(/backdrop-blur-xl/g, '');
code = code.replace(/dark:bg-black\/30/g, 'dark:bg-transparent');
code = code.replace(/bg-white\/40/g, 'bg-transparent');
code = code.replace(/dark:bg-white\/5/g, 'dark:bg-transparent');
code = code.replace(/bg-white\/60/g, 'bg-transparent');
code = code.replace(/shadow-2xl/g, 'shadow-none');
code = code.replace(/border-black\/10/g, 'border-transparent');
code = code.replace(/border-white\/10/g, 'border-transparent');

// Stop infinite animations
code = code.replace(/repeat: Infinity,/g, '');
code = code.replace(/animate={{ y: \[0, -10, 0\], scale: \[1, 1.05, 1\] }}/g, 'animate={{ opacity: 1 }}');
code = code.replace(/animate={{ y: \[0, -15, 0\], scale: \[1, 1.05, 1\] }}/g, 'animate={{ opacity: 1 }}');

// Decrease text sizes
code = code.replace(/text-xl sm:text-2xl/g, 'text-lg sm:text-xl');
code = code.replace(/text-xs sm:text-sm/g, 'text-[11px] sm:text-xs');
code = code.replace(/text-sm sm:pl-12/g, 'text-xs sm:pl-10');
code = code.replace(/text-\[10px\] sm:text-\[11px\]/g, 'text-[9px] sm:text-[10px]');
code = code.replace(/py-3 pl-10 pr-4/g, 'py-2 pl-9 pr-3');

fs.writeFileSync('app/training-checkout/TrainingCheckoutClient.tsx', code);
console.log('Optimized TrainingCheckoutClient.tsx');
