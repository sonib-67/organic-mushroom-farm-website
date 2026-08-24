const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

if (!content.includes('<ReCaptchaWrapper')) {
  content = content.replace(
    /<\/div>\s*<button\s*type="submit"/,
    `</div>
              <div className="flex justify-center md:justify-start -mt-1 mb-2 scale-90 sm:scale-100 origin-left">
                <ReCaptchaWrapper ref={recaptchaRef} onChange={setCaptchaToken} />
              </div>
              <button
                type="submit"`
  );
}

// Make text smaller and form more compact
content = content.replace(/text-2xl md:text-3xl/g, 'text-xl md:text-2xl');
content = content.replace(/pt-20 pb-8/g, 'pt-16 pb-4');
content = content.replace(/p-4 md:p-6/g, 'p-3 md:p-5');
content = content.replace(/space-y-4/g, 'space-y-3');
content = content.replace(/gap-4/g, 'gap-3');
content = content.replace(/py-2/g, 'py-1.5');
content = content.replace(/text-xs font-semibold/g, 'text-[11px] font-semibold text-slate-500 uppercase tracking-wider');
content = content.replace(/text-base font-bold/g, 'text-sm font-bold');
content = content.replace(/mb-6/g, 'mb-4');
content = content.replace(/mb-8/g, 'mb-5');

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log("Fixed EnquiryPage JSX and compact styling");
