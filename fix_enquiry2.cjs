const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

if (!content.includes('<ReCaptchaWrapper')) {
  content = content.replace(
    '</textarea>\n              </div>\n              <button',
    `</textarea>
              </div>
              <div className="flex justify-center -mt-1 mb-2 scale-90 sm:scale-100 origin-left">
                <ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />
              </div>
              <button`
  );
  fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
  console.log("Injected ReCaptchaWrapper into JSX.");
} else {
  console.log("Already has ReCaptchaWrapper in JSX.");
}

// Ensure the label classes aren't duplicated like text-slate-700 dark:text-slate-300 and text-slate-500
content = content.replace(/text-\[11px\] font-semibold text-slate-500 uppercase tracking-wider text-slate-700 dark:text-slate-300/g, 'text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider');

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);

