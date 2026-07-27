const fs = require('fs');
let content = fs.readFileSync('src/pages/MushroomTypeDetails.tsx', 'utf8');

const regex = /<form onSubmit=\{handleLeadSubmit\}[\s\S]*?<\/form>/;
const replacement = `<div className="space-y-6 text-center py-6">
                  <h3 className="text-xl font-bold text-slate-900">Interested in {info.name}?</h3>
                  <p className="text-slate-500 text-sm">
                    Click the button below to fill out our detailed enquiry form for Turnkey Setups, Spawn, and Training.
                  </p>
                  <Link
                    to="/enquiry"
                    className="inline-block px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold transition-all"
                  >
                    Enquiry Now
                  </Link>
                </div>`;

content = content.replace(regex, replacement);

fs.writeFileSync('src/pages/MushroomTypeDetails.tsx', content);
console.log('Patched MushroomTypeDetails.tsx');
