const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

if (!content.includes('onChange={setCaptchaToken}')) {
  content = content.replace(
    '</textarea>\n              </div>\n              <button',
    `</textarea>
              </div>
              <div className="flex justify-center md:justify-start -mt-1 mb-2 scale-90 sm:scale-100 origin-left">
                <ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />
              </div>
              <button`
  );
  fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
  console.log("Injected ReCaptchaWrapper into JSX.");
} else {
  console.log("Already has ReCaptchaWrapper in JSX.");
}
