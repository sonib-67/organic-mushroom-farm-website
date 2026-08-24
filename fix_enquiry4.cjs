const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

content = content.replace(
  '              <button\n                type="submit"',
  `              <div className="flex justify-center md:justify-start -mt-1 mb-2 scale-90 sm:scale-100 origin-left">\n                <ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />\n              </div>\n              <button\n                type="submit"`
);

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log("Injected");
