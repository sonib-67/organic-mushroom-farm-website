const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetStr = `                  })}
                </div>
              </div>`;

const newStr = `                  })}
                </div>

                {/* Mobile Social Links */}
                <div className="mt-6 mb-2 flex justify-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                  {[
                    { label: "Facebook", href: "https://www.facebook.com/organic.mushroom.farm0", icon: Facebook },
                    { label: "Instagram", href: "https://www.instagram.com/organic_mushroom_farm_jabalpur", icon: Instagram },
                    { label: "Twitter", href: "https://x.com/mushroomfarmjbp", icon: Twitter },
                    { label: "YouTube", href: "https://www.youtube.com/@organicmushroomfarm", icon: Youtube }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all active:scale-95"
                      aria-label={social.label}
                    >
                      <social.icon size={18} strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>`;

if(code.includes(targetStr)) {
  code = code.replace(targetStr, newStr);
  fs.writeFileSync('src/App.tsx', code);
  console.log("Mobile social links patched successfully.");
} else {
  console.log("Could not find the target string.");
}
