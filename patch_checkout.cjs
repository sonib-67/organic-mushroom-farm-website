const fs = require('fs');

let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');

// 1. Update handleSubmit signature
content = content.replace(
  'const handleSubmit = async (e?: React.FormEvent) => {',
  'const handleSubmit = async (e?: React.FormEvent, customMethod?: string) => {'
);

// 2. Add options configuration for customMethod
const optionsOriginal = `      const options = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.order_id,
        name: payload.name,
        description: payload.description,
        prefill: payload.prefill,
        notes: payload.notes,
        theme: payload.theme,`;

const optionsPatched = `      const options: any = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.order_id,
        name: payload.name,
        description: payload.description,
        prefill: payload.prefill,
        notes: payload.notes,
        theme: payload.theme,`;

content = content.replace(optionsOriginal, optionsPatched);

// 3. Insert config injection after options definition but before handler
const handlerIndex = content.indexOf('handler: function (response: any) {');
if (handlerIndex > -1) {
  const insertBeforeHandler = `
        ...(customMethod ? {
            config: {
                display: {
                    blocks: {
                        upi: {
                            name: "Pay using UPI",
                            instruments: [
                                {
                                    method: "upi",
                                    ...(customMethod !== 'upi_any' ? { wallets: [customMethod] } : {})
                                }
                            ]
                        }
                    },
                    sequence: ["block.upi"],
                    preferences: {
                        show_default_blocks: false
                    }
                }
            }
        } : {}),
        handler: function (response: any) {`;
  content = content.replace('handler: function (response: any) {', insertBeforeHandler);
}

// 4. Find standard button and replace
const standardBtnBlock = `<button
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
                  </button>`;

const newBtnBlock = `{selectedProductType === 'test_1_rupee' ? (
                    <div className="mt-4 sm:mt-6 space-y-4">
                      <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-slate-200 dark:border-white/10"></div>
                        <span className="flex-shrink-0 mx-4 text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Pay Directly Via</span>
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
                        <div className="flex items-center justify-center gap-2 text-primary-start font-semibold text-sm mt-4">
                           <Loader2 size={18} className="animate-spin" /> Processing Securely...
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

// Normalizing whitespace and searching
const origClean = standardBtnBlock.replace(/\s+/g, ' ').trim();
const srcClean = content.replace(/\s+/g, ' ');

if (!srcClean.includes(origClean)) {
    console.error("Could not find button block to replace.");
} else {
    // Escape regex
    function escapeRegExp(string) {
        return string.replace(/[.*+?^$\{\}\(\)\|\[\]\\]/g, '\\$&');
    }
    const searchPattern = escapeRegExp(standardBtnBlock).replace(/\\\s+/g, '\\s+');
    content = content.replace(new RegExp(searchPattern, 'g'), newBtnBlock);
}

fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content, 'utf8');
console.log('TrainingCheckoutPage.tsx patched successfully');
