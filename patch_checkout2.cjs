const fs = require('fs');

let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');

const regex = /<button\s*type="submit"\s*disabled=\{loading\}\s*className="w-full mt-4 sm:mt-6 shrink-0 bg-gradient-[^>]*>\s*\{loading \? \(\s*<span className="flex items-center justify-center gap-2">\s*<Loader2 size=\{18\} className="animate-spin sm:w-5 sm:h-5" \/> <span>Processing\.\.\.<\/span>\s*<\/span>\s*\) : \(\s*<span className="flex items-center justify-center gap-2">\s*Proceed to Payment <ArrowRight size=\{18\} className="sm:w-5 sm:h-5" \/>\s*<\/span>\s*\)\}\s*<\/button>/m;

const newBtnBlock = `{selectedProductType === 'test_1_rupee' ? (
                    <div className="mt-4 sm:mt-6 space-y-4">
                      <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                        <span className="flex-shrink-0 mx-4 text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Pay Directly Via (Test)</span>
                        <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <button
                          type="button"
                          disabled={loading}
                          onClick={(e) => handleSubmit(e, 'google_pay')}
                          className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all"
                        >
                          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-4 sm:h-5 object-contain" />
                          <span className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">GPay</span>
                        </button>

                        <button
                          type="button"
                          disabled={loading}
                          onClick={(e) => handleSubmit(e, 'phonepe')}
                          className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all"
                        >
                          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" alt="PhonePe" className="h-5 sm:h-6 object-contain" />
                          <span className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">PhonePe</span>
                        </button>
                        
                        <button
                          type="button"
                          disabled={loading}
                          onClick={(e) => handleSubmit(e, 'paytm')}
                          className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-sky-500 hover:shadow-lg transition-all"
                        >
                          <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="h-4 sm:h-5 object-contain" />
                          <span className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">Paytm</span>
                        </button>
                        
                        <button
                          type="button"
                          disabled={loading}
                          onClick={(e) => handleSubmit(e, 'upi_any')}
                          className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-green-500 hover:shadow-lg transition-all"
                        >
                          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-4 sm:h-5 object-contain" />
                          <span className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">Other UPI</span>
                        </button>
                      </div>
                      
                      {loading && (
                        <div className="flex items-center justify-center gap-2 text-indigo-500 font-semibold text-sm mt-4">
                           <Loader2 size={18} className="animate-spin" /> Proceeding securely...
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-4 sm:mt-6 shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] text-[14px] sm:text-[15px] text-white font-black tracking-wide py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 size={18} className="animate-spin sm:w-5 sm:h-5" /> <span>Processing...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Proceed to Payment <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                        </span>
                      )}
                    </button>
                  )}`;

if (regex.test(content)) {
    content = content.replace(regex, newBtnBlock);
    fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content, 'utf8');
    console.log("Replaced submit button");
} else {
    console.error("Could not find regex match!");
}
