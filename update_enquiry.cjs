const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

// Imports
if (!content.includes('ReCaptchaWrapper')) {
  content = content.replace(
    "import SEO from '../components/SEO';",
    "import SEO from '../components/SEO';\nimport ReCaptchaWrapper, { ReCaptchaWrapperRef } from '../components/ReCaptchaWrapper';"
  );
}

// State and Ref
if (!content.includes('captchaToken')) {
  content = content.replace(
    "const [submitted, setSubmitted] = useState(false);",
    "const [submitted, setSubmitted] = useState(false);\n  const [captchaToken, setCaptchaToken] = useState<string | null>(null);\n  const recaptchaRef = React.useRef<ReCaptchaWrapperRef>(null);"
  );
}

// Validation
if (!content.includes('Please verify that you are human')) {
  content = content.replace(
    "const form = e.currentTarget;",
    "if (!captchaToken) {\n      alert('Please verify that you are human by checking the Captcha box.');\n      setSubmitting(false);\n      return;\n    }\n    const form = e.currentTarget;"
  );
}

// Append captchaToken to submitData
if (!content.includes('submitData = {')) {
  console.log("Could not find submitData");
} else {
  content = content.replace(
    "otherSubject: formData.get(\"other_subject\") || null,",
    "otherSubject: formData.get(\"other_subject\") || null,\n      captchaToken: captchaToken,"
  );
}

// Reset Captcha on success
if (!content.includes('recaptchaRef.current?.reset()')) {
  content = content.replace(
    "setSubmitted(true);",
    "setSubmitted(true);\n        recaptchaRef.current?.reset();\n        setCaptchaToken(null);"
  );
}

// Add Captcha Component just above the button
if (!content.includes('<ReCaptchaWrapper')) {
  content = content.replace(
    "<button\n                type=\"submit\"",
    "<ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />\n              <button\n                type=\"submit\""
  );
}

// COMPACT STYLING
// Main container padding
content = content.replace('pt-24 pb-16', 'pt-20 pb-8');
content = content.replace('mb-10', 'mb-6');
content = content.replace('text-3xl md:text-4xl', 'text-2xl md:text-3xl');

// Form container padding
content = content.replace(/p-6 md:p-8/g, 'p-4 md:p-6');
// Top selector padding
content = content.replace('p-4 rounded-2xl', 'p-3 rounded-xl');
content = content.replace('w-8 h-8 mb-2', 'w-6 h-6 mb-1');
content = content.replace('w-32', 'w-28');

// Spacing between form sections
content = content.replace(/space-y-6/g, 'space-y-4');
content = content.replace(/gap-6/g, 'gap-4');

// Input paddings
content = content.replace(/py-3/g, 'py-2');
// Because pl-12 is used with left-4 and w-5 h-5
content = content.replace(/pl-12/g, 'pl-10');
content = content.replace(/left-4/g, 'left-3');
content = content.replace(/w-5 h-5/g, 'w-4 h-4');

// Text sizes
content = content.replace(/text-sm font-semibold/g, 'text-xs font-semibold');
content = content.replace(/text-lg font-bold/g, 'text-base font-bold');

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log("Done updating EnquiryPage");
