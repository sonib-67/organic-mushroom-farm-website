const fs = require('fs');
let content = fs.readFileSync('src/pages/ContactPage.tsx', 'utf8');

if (!content.includes('onChange={setCaptchaToken}')) {
  // Add imports
  content = content.replace(
    "import React, { useState } from 'react';",
    "import React, { useState, useRef } from 'react';\nimport ReCaptchaWrapper, { ReCaptchaWrapperRef } from '../components/ReCaptchaWrapper';"
  );
  
  // Add state
  content = content.replace(
    "const [submitted, setSubmitted] = useState(false);",
    "const [submitted, setSubmitted] = useState(false);\n  const [captchaToken, setCaptchaToken] = useState<string | null>(null);\n  const recaptchaRef = useRef<ReCaptchaWrapperRef>(null);"
  );

  // Add validation
  content = content.replace(
    "const form = e.target as HTMLFormElement;",
    "if (!captchaToken) {\n      alert('Please verify that you are human by checking the Captcha box.');\n      return;\n    }\n    const form = e.target as HTMLFormElement;"
  );

  // Add captchaToken to submit data
  content = content.replace(
    "body: JSON.stringify(Object.fromEntries(formData)),",
    "body: JSON.stringify({ ...Object.fromEntries(formData), captchaToken }),"
  );

  // Reset captcha on success
  content = content.replace(
    "setSubmitted(true);",
    "setSubmitted(true);\n            recaptchaRef.current?.reset();\n            setCaptchaToken(null);"
  );

  // Inject ReCaptchaWrapper
  content = content.replace(
    '                                    <button',
    `                                    <div className="flex justify-center md:justify-start -mt-1 mb-2 scale-90 sm:scale-100 origin-left">\n                                        <ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />\n                                    </div>\n                                    <button`
  );

  fs.writeFileSync('src/pages/ContactPage.tsx', content);
  console.log("Patched ContactPage.tsx");
} else {
  console.log("Already patched ContactPage.tsx");
}
