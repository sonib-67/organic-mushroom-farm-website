const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const ctaRegex = /<form onSubmit=\{handleSubmit\}[^>]*>[\s\S]*?<\/form>/;
const newCta = `<div className="space-y-6 text-center">
                    <h3 className="text-2xl font-bold dark:text-white text-slate-900">
                      Send Instant Inquiry
                    </h3>
                    <p className="text-slate-500 text-sm font-semibold mb-6">
                      Have questions about Mushroom Farming, Spawn, or Turnkey Projects? 
                      Submit your detailed requirements via our dedicated enquiry form and our experts will get back to you!
                    </p>
                    <Link
                      to="/enquiry"
                      className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all text-lg"
                    >
                      Enquiry Now
                    </Link>
                  </div>`;

// Replace the first match in CTASection
content = content.replace(ctaRegex, newCta);

fs.writeFileSync('src/App.tsx', content);
console.log('Patched CTASection in App.tsx');
