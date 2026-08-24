const fs = require('fs');
let content = fs.readFileSync('src/components/ReCaptchaWrapper.tsx', 'utf8');

// Update the fallback key to the new working one provided in the image
content = content.replace(
  '"6Ld_npUtAAAAADMGmXkEFN6fDG_cO5Z655IaOR7j"',
  '"6LfRrJUtAAAAANYz3gMiacdqVCl2-qs9pR7O1ox9"'
);

fs.writeFileSync('src/components/ReCaptchaWrapper.tsx', content);
console.log("Updated ReCaptcha fallback key");
