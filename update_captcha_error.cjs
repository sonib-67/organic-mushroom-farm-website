const fs = require('fs');

let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

// 1. Add state variable
if (!content.includes('const [captchaError')) {
  content = content.replace(
    'const [captchaToken, setCaptchaToken] = useState<string | null>(null);',
    'const [captchaToken, setCaptchaToken] = useState<string | null>(null);\n  const [captchaError, setCaptchaError] = useState(false);'
  );
}

// 2. Modify handleSubmit
content = content.replace(
  /if \(\!captchaToken\) \{\s+alert\('Please verify that you are human by checking the Captcha box\.'\);\s+setSubmitting\(false\);\s+return;\s+\}/,
  `if (!captchaToken) {
      setCaptchaError(true);
      setSubmitting(false);
      return;
    }`
);

// 3. Update ReCaptchaWrapper element
// We need to replace:
// <ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />
// with:
// <div className="flex flex-col"><ReCaptchaWrapper ref={recaptchaRef} onChange={(t) => { setCaptchaToken(t); if(t) setCaptchaError(false); }} />{captchaError && <span className="text-red-500 text-sm font-medium mt-1">⚠️ Please solve the math security check above to submit.</span>}</div>
content = content.replace(
  '<ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />',
  `<div className="flex flex-col items-start w-full">
                  <ReCaptchaWrapper ref={recaptchaRef} onChange={(token) => { setCaptchaToken(token); if (token) setCaptchaError(false); }} />
                  {captchaError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="text-red-500 text-sm font-medium mt-1 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Please solve the math security check above to submit.
                    </motion.p>
                  )}
                </div>`
);

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log("Updated EnquiryPage.tsx with inline CAPTCHA error.");
