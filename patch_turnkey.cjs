const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const regex1 = /<form\s*action="\/api\/contact"\s*method="POST"\s*onSubmit=\{handleSubmit\}\s*className="space-y-5"[\s\S]*?<\/form>/;
const replacement1 = `<div className="space-y-6 text-center py-4">
                <h3 className="text-xl font-bold dark:text-white text-slate-900">Get Expert Setup Advice</h3>
                <p className="text-slate-500 text-sm">
                  Click below to submit your location and requirements in our main enquiry form.
                </p>
                <Link
                  to="/enquiry"
                  className="inline-block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-lg transition-all"
                >
                  Enquiry Now
                </Link>
              </div>`;

const regex2 = /<form onSubmit=\{handleFormSubmit\} className="space-y-6">[\s\S]*?<\/form>/;
const replacement2 = `<div className="space-y-6 text-center py-6">
                <h3 className="text-2xl font-bold dark:text-white text-slate-900">Request Turnkey Details</h3>
                <p className="text-slate-500 text-sm mb-4">
                  For large scale and commercial setups, please provide your exact needs in our enquiry form.
                </p>
                <Link
                  to="/enquiry"
                  className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all text-lg"
                >
                  Enquiry Now
                </Link>
              </div>`;

content = content.replace(regex1, replacement1);
content = content.replace(regex2, replacement2);

fs.writeFileSync('src/App.tsx', content);
console.log('Patched App.tsx Turnkey forms');
