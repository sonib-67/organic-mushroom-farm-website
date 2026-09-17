const fs = require('fs');
let code = fs.readFileSync('components/TrainingLanding.tsx', 'utf8');

// Change items-start to items-stretch to make columns equal height
code = code.replace(
  /<div className="mt-3 flex justify-between items-start gap-4 md:gap-5 mb-2">/,
  '<div className="mt-3 flex justify-between items-stretch gap-4 md:gap-5 mb-2">'
);

// Ensure the button is right aligned and size is same
code = code.replace(
  /className={`w-full py-2.5 px-4 rounded-lg text-center/g,
  'className={`inline-block py-2.5 px-6 rounded-lg text-center'
);

fs.writeFileSync('components/TrainingLanding.tsx', code);
