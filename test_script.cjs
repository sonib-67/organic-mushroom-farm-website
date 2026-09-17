const fs = require('fs');
let code = fs.readFileSync('components/TrainingLanding.tsx', 'utf8');

// Change items-start to items-stretch to make columns equal height
code = code.replace(
  /<div className="mt-3 flex justify-between items-start gap-4 md:gap-5 mb-2">/g,
  '<div className="mt-3 flex justify-between items-stretch gap-4 md:gap-5 mb-2">'
);

// We need to make sure the right column takes the remaining space if needed, 
// and the button is right aligned.
// Previous button className had `w-full`, which makes it fill the right column. 
// User said "button size and vaise he rhe", so w-full inside the right column 
// is probably fine (since the right column is constrained by the image width).

fs.writeFileSync('components/TrainingLanding.tsx', code);
