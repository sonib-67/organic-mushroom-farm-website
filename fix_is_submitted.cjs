const fs = require('fs');

let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

const isSubmittedRender = `
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-transparent relative z-[99] pt-12 pb-6 px-4 flex flex-col items-center justify-center">
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-2xl text-center max-w-sm w-full space-y-4 shadow-xl">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-xl font-bold dark:text-white text-slate-900">Registration Complete!</h2>
          <p className="text-sm dark:text-slate-300 text-slate-700">Your invoice is downloading...</p>
          <p className="text-xs text-indigo-500 font-medium">Redirecting to WhatsApp for course access...</p>
          <Loader2 className="w-6 h-6 animate-spin text-indigo-500 mx-auto mt-4" />
        </div>
      </div>
    );
  }

  return (
`;

code = code.replace('return (', isSubmittedRender);

fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
