const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldFooterStart = `<div className="flex gap-6 flex-wrap justify-center">`;
const newFooter = `<div className="flex gap-4 flex-wrap justify-center items-center">
            {[
              { label: "Facebook", href: "https://www.facebook.com/organic.mushroom.farm0", icon: Facebook },
              { label: "Instagram", href: "https://www.instagram.com/organic_mushroom_farm_jabalpur", icon: Instagram },
              { label: "Twitter", href: "https://x.com/mushroomfarmjbp", icon: Twitter },
              { label: "YouTube", href: "https://www.youtube.com/@organicmushroomfarm", icon: Youtube },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/organic-mushroom-farm-29b970282?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:hover:bg-slate-700 transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>`;

// We have to replace the whole block.
// Since the block spans multiple lines and has varying spaces, we can use regex or substring.
const startIndex = code.indexOf(oldFooterStart);
if (startIndex !== -1) {
  // find the end of this div
  const nextDivEnd = code.indexOf('</div>', startIndex);
  // Actually, the loop contains `</div>`? No, it contains `</a>`.
  // The outer div ends at `</div>` followed by `</div>` `</div>` `</footer>`.
  const endingString = `</a>
            ))}
          </div>`;
  const endIndex = code.indexOf(endingString, startIndex) + endingString.length;
  
  if(endIndex > endingString.length) {
    code = code.substring(0, startIndex) + newFooter + code.substring(endIndex);
    fs.writeFileSync('src/App.tsx', code);
    console.log('Footer updated successfully.');
  } else {
    console.log('Ending string not found.');
  }
} else {
  console.log('Old footer start not found.');
}
