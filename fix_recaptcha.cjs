const fs = require('fs');
let content = fs.readFileSync('src/components/ReCaptchaWrapper.tsx', 'utf8');

// Fix TypeScript error by using process.env safely instead of import.meta.env
content = content.replace(
  "import.meta.env?.VITE_RECAPTCHA_SITE_KEY ||",
  "(typeof import !== 'undefined' && (import as any).meta?.env?.VITE_RECAPTCHA_SITE_KEY) ||"
);

fs.writeFileSync('src/components/ReCaptchaWrapper.tsx', content);
console.log("Fixed ReCaptchaWrapper TS error");
