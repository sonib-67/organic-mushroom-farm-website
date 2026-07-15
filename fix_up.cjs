const fs = require('fs');
let content = fs.readFileSync('src/pages/UttarPradeshPage.tsx', 'utf8');

const replacement = `<Link
            to="/cities/uttar-pradesh/kanpur"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Kanpur
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Mushroom training, food processing, and commercial setups in Kanpur.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Resources <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/cities/uttar-pradesh/agra"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Agra
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Mushroom Farming for Export & International Markets in Agra | Complete Guide 2026.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Resources <ChevronRight size={16} />
            </div>
          </Link>`;

content = content.replace(/<Link\s+to="\/cities\/uttar-pradesh\/kanpur"[\s\S]*?<\/Link>/, replacement);

fs.writeFileSync('src/pages/UttarPradeshPage.tsx', content);
console.log("Updated UP page");
