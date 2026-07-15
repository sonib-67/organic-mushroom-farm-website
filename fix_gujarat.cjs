const fs = require('fs');
let content = fs.readFileSync('src/pages/GujaratPage.tsx', 'utf8');

const replacement = `<Link
            to="/mushroom-farming-vadodara-gujarat"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Vadodara
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Mushroom training (online & offline), premium spawn supply, commercial farm setup, and consultancy services in Vadodara, Gujarat.
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Resources <ChevronRight size={16} />
            </div>
          </Link>
          <Link
            to="/cities/gujarat/rajkot"
            className="group glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
              Rajkot
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              રાજકોટમાં સુપરમાર્કેટ અને રિટેલ ચેઇન માટે Mushroom Farming Business કેવી રીતે શરૂ કરવો?
            </p>
            <div className="text-brand-blue font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform mt-auto">
              View Resources <ChevronRight size={16} />
            </div>
          </Link>`;

content = content.replace(/<Link\s+to="\/mushroom-farming-vadodara-gujarat"[\s\S]*?<\/Link>/, replacement);

fs.writeFileSync('src/pages/GujaratPage.tsx', content);
console.log("Updated Gujarat");
