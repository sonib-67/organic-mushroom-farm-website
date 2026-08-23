const fs = require('fs');

let content = fs.readFileSync('src/pages/EquipmentCompleteListPage.tsx', 'utf8');

const oldTopBoxes = `<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 md:mb-16">
          {mainCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.route}
              className="group bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-start/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700/50 text-primary-start rounded-xl flex items-center justify-center mb-4">
                {cat.icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{cat.desc}</p>
              <div className="flex items-center text-primary-start font-semibold text-sm group-hover:gap-2 transition-all">
                View Full List <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>`;

const newTopBoxes = `<div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12">
          {mainCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.route}
              className="group bg-white dark:bg-slate-800 rounded-lg md:rounded-xl p-3 md:p-6 shadow-sm hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-start/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 hidden md:block" />
              <div className="w-8 h-8 md:w-12 md:h-12 bg-slate-100 dark:bg-slate-700/50 text-primary-start rounded-md md:rounded-xl flex items-center justify-center mb-2 md:mb-4 shrink-0">
                <div className="scale-75 md:scale-100 flex items-center justify-center">{cat.icon}</div>
              </div>
              <h2 className="text-[11px] md:text-2xl font-bold text-slate-900 dark:text-white mb-0 md:mb-2 leading-tight">{cat.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 hidden md:block">{cat.desc}</p>
              <div className="hidden md:flex items-center text-primary-start font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                View Full List <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>`;

const oldGrid = `<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subCategories.map((sub, idx) => (
              <Link 
                key={idx} 
                to={sub.route}
                className="group flex flex-col bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:border-primary-start/50"
              >
                <div className="text-slate-400 group-hover:text-primary-start transition-colors mb-3">
                  {sub.icon}
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary-start transition-colors leading-tight flex items-center justify-between">
                  {sub.title}
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </Link>
            ))}
          </div>`;

const newGrid = `<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {subCategories.map((sub, idx) => (
              <Link 
                key={idx} 
                to={sub.route}
                className="group flex flex-row items-center bg-white dark:bg-slate-800 rounded-lg p-2.5 md:p-4 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:border-primary-start/50"
              >
                <div className="text-slate-400 group-hover:text-primary-start transition-colors mr-2.5 md:mr-3 shrink-0 flex items-center justify-center">
                  <div className="scale-[0.8] md:scale-100 flex items-center justify-center">{sub.icon}</div>
                </div>
                <h3 className="text-xs md:text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary-start transition-colors leading-tight flex-1">
                  {sub.title}
                </h3>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 opacity-30 md:opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-slate-400" />
              </Link>
            ))}
          </div>`;

// Function to normalize whitespace to allow for flexible string replacement
function normalizeWhitespace(str) {
    return str.replace(/\s+/g, ' ').trim();
}

let contentNormalized = normalizeWhitespace(content);
let oldTopBoxesNormalized = normalizeWhitespace(oldTopBoxes);
let oldGridNormalized = normalizeWhitespace(oldGrid);

if (!contentNormalized.includes(oldTopBoxesNormalized)) {
    console.error("oldTopBoxes not found!");
}
if (!contentNormalized.includes(oldGridNormalized)) {
    console.error("oldGrid not found!");
}

// We'll just use simple regex or split/join if exact match fails due to spaces
function escapeRegExp(string) {
    return string.replace(/[.*+?^$\{\}\(\)\|\[\]\\]/g, '\\$&');
}

function replaceIgnoringWhitespace(source, search, replace) {
    const searchPattern = escapeRegExp(search).replace(/\\\s+/g, '\\s+');
    const regex = new RegExp(searchPattern, 'g');
    return source.replace(regex, replace);
}

content = replaceIgnoringWhitespace(content, oldTopBoxes, newTopBoxes);
content = replaceIgnoringWhitespace(content, oldGrid, newGrid);

// Also reduce header section padding for mobile
content = content.replace(
    'className="text-center mb-10"',
    'className="text-center mb-6 md:mb-10"'
);
content = content.replace(
    'className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6"',
    'className="text-2xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 md:mb-6"'
);
content = content.replace(
    'className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"',
    'className="text-sm md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"'
);
content = content.replace(
    'className="mb-8"',
    'className="mb-4 md:mb-8"'
);
content = content.replace(
    'className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2"',
    'className="text-lg md:text-3xl font-bold text-slate-900 dark:text-white mb-1 md:mb-2"'
);
content = content.replace(
    'className="text-slate-600 dark:text-slate-400"',
    'className="text-xs md:text-base text-slate-600 dark:text-slate-400"'
);


fs.writeFileSync('src/pages/EquipmentCompleteListPage.tsx', content, 'utf8');
console.log('Update script finished successfully.');
