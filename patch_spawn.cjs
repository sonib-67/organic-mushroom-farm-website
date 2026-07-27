const fs = require('fs');
let content = fs.readFileSync('src/pages/SpawnSeed.tsx', 'utf8');

const regex = /<form action="\/api\/contact" method="POST" onSubmit=\{handleSubmit\} className="relative z-10 space-y-6">[\s\S]*?<\/form>/;
const replacement = `<div className="space-y-6 text-center py-6 relative z-10">
                              <h3 className="text-2xl font-bold text-white">Need Spawn/Seed?</h3>
                              <p className="text-slate-300 mb-6">
                                Click the button below to specify your spawn variety and order quantity via our master enquiry form.
                              </p>
                              <Link
                                to="/enquiry"
                                className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all text-lg"
                              >
                                Enquiry Now
                              </Link>
                          </div>`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/SpawnSeed.tsx', content);
console.log('Patched SpawnSeed.tsx');
