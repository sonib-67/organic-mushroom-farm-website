const fs = require('fs');
let content = fs.readFileSync('src/components/ReCaptchaWrapper.tsx', 'utf8');

content = content.replace(
  "(typeof import !== 'undefined' && (import as any).meta?.env?.VITE_RECAPTCHA_SITE_KEY) ||",
  "((import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY) ||"
);

fs.writeFileSync('src/components/ReCaptchaWrapper.tsx', content);
console.log("Fixed ReCaptchaWrapper TS error for Vite");
