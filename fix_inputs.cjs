const fs = require('fs');

let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

// I also want to remove the top box completely to save vertical space.
code = code.replace(
  '<div className="bg-transparent border-b border-indigo-500/50 pb-2 mb-1">\n          <h1 className="text-lg sm:text-xl font-black dark:text-white text-slate-900 tracking-tight mb-1">{trainingName}</h1>\n          <h2 className="text-sm font-bold text-indigo-600 mb-1">Registration Form</h2>\n          <p className="dark:text-slate-300 text-slate-600 text-xs">Please fill in the details below to complete your enrollment.</p>\n        </div>',
  ''
);

// Reduce top padding on the page from pt-24 to pt-16
code = code.replace('pt-24 pb-12 px-4 sm:px-6 lg:px-8', 'pt-12 pb-6 px-4');

// Make inputs smaller
code = code.replace(/py-2\.5/g, 'py-1 text-xs');
code = code.replace(/h-16/g, 'h-12 text-xs');

fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
