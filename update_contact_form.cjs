const fs = require('fs');
let content = fs.readFileSync('src/pages/ContactForm.tsx', 'utf8');

if (!content.includes('onChange={setCaptchaToken}')) {
  // Add imports
  content = content.replace(
    "import React, { useState } from 'react';",
    "import React, { useState, useRef } from 'react';\nimport ReCaptchaWrapper, { ReCaptchaWrapperRef } from '../components/ReCaptchaWrapper';"
  );
  
  // Add state
  content = content.replace(
    "const [submitting, setSubmitting] = useState(false);",
    "const [submitting, setSubmitting] = useState(false);\n  const [captchaToken, setCaptchaToken] = useState<string | null>(null);\n  const recaptchaRef = useRef<ReCaptchaWrapperRef>(null);"
  );

  // Add validation
  content = content.replace(
    "const form = e.currentTarget;",
    "if (!captchaToken) {\n      alert('Please verify that you are human by checking the Captcha box.');\n      setSubmitting(false);\n      return;\n    }\n    const form = e.currentTarget;"
  );

  // Add captchaToken to submit data
  content = content.replace(
    "phone: formData.get(\"phone\"),",
    "phone: formData.get(\"phone\"),\n      captchaToken: captchaToken,"
  );

  // Reset captcha on success
  content = content.replace(
    "setSubmitted(true);",
    "setSubmitted(true);\n        recaptchaRef.current?.reset();\n        setCaptchaToken(null);"
  );

  // Inject ReCaptchaWrapper
  content = content.replace(
    '              <button\n                type="submit"',
    `              <div className="flex justify-center -mt-1 mb-2 scale-90 sm:scale-100 origin-left">\n                <ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />\n              </div>\n              <button\n                type="submit"`
  );

  fs.writeFileSync('src/pages/ContactForm.tsx', content);
  console.log("Patched ContactForm.tsx");
} else {
  console.log("Already patched ContactForm.tsx");
}
