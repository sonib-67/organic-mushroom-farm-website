const fs = require('fs');

let content = fs.readFileSync('src/pages/UsaTrainingPage.tsx', 'utf8');

// Replace the top imports
content = content.replace(
  'import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";',
  'import InternationalCheckoutForm from "../components/InternationalCheckoutForm";'
);

// Add checkout state
content = content.replace(
  'const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);',
  'const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);\n  const [checkoutPlan, setCheckoutPlan] = useState<{name: string, price: string} | null>(null);'
);

// Replace the PayPalScriptProvider and Buttons with simple buttons opening the modal
const newPlanContent = `          {checkoutPlan && (
            <InternationalCheckoutForm 
              planName={checkoutPlan.name}
              price={checkoutPlan.price}
              onSuccess={(id) => {
                setCheckoutPlan(null);
                setPaymentSuccess(id);
              }}
              onClose={() => setCheckoutPlan(null)}
            />
          )}
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              
              {/* Plan 1 */}
              <div className="glass border dark:border-white/10 border-black/10 rounded-3xl p-6 flex flex-col relative transition-transform hover:-translate-y-1">
                <div className="mb-3">
                  <h3 className="text-base font-bold dark:text-white text-slate-900 leading-tight">Basic Cultivation Mushroom Training</h3>
                  <p className="text-[10px] md:text-xs dark:text-slate-400 text-slate-600 font-medium mt-0.5">(Home Scale)</p>
                </div>
                <div className="mb-3">
                  <span className="text-2xl md:text-3xl font-black dark:text-white text-slate-900">$39</span>
                  <span className="text-[10px] md:text-xs text-slate-500 ml-1">(One-Time)</span>
                </div>
                <p className="text-[10px] md:text-xs font-semibold text-blue-500 mb-3 flex items-center gap-1">
                  <Home size={12} /> Ideal For: Beginners & Hobbyists
                </p>
                <div className="flex-grow">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Learnings:</p>
                  <ul className="space-y-1.5 mb-5">
                    {['Oyster & Button mushroom home setup.', 'Substrate boiling & basic sterilization.', 'Simple temperature/humidity control.'].map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs dark:text-slate-300 text-slate-700">
                        <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => setCheckoutPlan({ name: "Basic Cultivation Mushroom Training", price: "39.00" })}
                  className="w-full mt-auto bg-white/10 hover:bg-white/20 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold py-3 rounded-xl text-sm transition-all"
                >
                  Enroll Now
                </button>
              </div>

              {/* Plan 2 */}
              <div className="glass border-2 border-blue-500/50 rounded-3xl p-6 flex flex-col relative transition-transform hover:-translate-y-1 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  ⭐ Best Value
                </div>
                <div className="mb-3">
                  <h3 className="text-base font-bold dark:text-white text-slate-900 leading-tight">Advanced Commercial Mushroom Training</h3>
                  <p className="text-[10px] md:text-xs dark:text-slate-400 text-slate-600 font-medium mt-0.5">(Business Scale)</p>
                </div>
                <div className="mb-3">
                  <span className="text-2xl md:text-3xl font-black dark:text-white text-slate-900">$97</span>
                  <span className="text-[10px] md:text-xs text-slate-500 ml-1">(One-Time)</span>
                </div>
                <p className="text-[10px] md:text-xs font-semibold text-blue-500 mb-3 flex items-center gap-1">
                  <TrendingUp size={12} /> Ideal For: Entrepreneurs & Commercial Growers
                </p>
                <div className="flex-grow">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Learnings:</p>
                  <ul className="space-y-1.5 mb-5">
                    {[
                      'Farm layout, vertical racks & HVAC setup.', 
                      'High-yield varieties + Pest management.', 
                      'Sales strategies for US Farmer\\'s Markets & local stores.',
                      'Certificate & Private Community Access.'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs dark:text-slate-300 text-slate-700">
                        <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => setCheckoutPlan({ name: "Advanced Commercial Mushroom Training", price: "97.00" })}
                  className="w-full mt-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25"
                >
                  Enroll Now
                </button>
              </div>

            </div>`;

// We need to carefully slice the string between the end of the payment success block and the end of the pricing section.
const successBlockEnd = '          ) : (';
const providerEndIndex = content.indexOf('</PayPalScriptProvider>');

if (providerEndIndex !== -1) {
    const successBlockIndex = content.indexOf(successBlockEnd);
    const firstPart = content.substring(0, successBlockIndex + successBlockEnd.length);
    const restPart = content.substring(providerEndIndex + '</PayPalScriptProvider>'.length);
    
    // Replace ') : (' with the new component setup, removing the wrapping ) : ( structure.
    // Wait, let's just make it simpler.
    
    const blockStart = content.indexOf('{paymentSuccess ?');
    const part1 = content.substring(0, blockStart);
    
    const successBox = content.substring(blockStart, content.indexOf(') : ('));
    const finalContent = part1 + 
    `{paymentSuccess && (
            <div className="max-w-xl mx-auto glass border border-green-500/50 rounded-3xl p-8 text-center bg-green-500/5">
              <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Payment Successful!</h3>
              <p className="text-sm dark:text-slate-300 text-slate-700 mb-4">
                Welcome to Organic Mushroom Farm Training. Your transaction ID is <strong>{paymentSuccess}</strong>.
              </p>
              <p className="text-sm text-green-500 font-semibold mb-6">We have received your enrollment and will email you the next steps shortly.</p>
              <button 
                onClick={() => setPaymentSuccess(null)}
                className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm hover:scale-105 transition-transform"
              >
                Back to Plans
              </button>
            </div>
          )}
          
          {!paymentSuccess && (
            <>
${newPlanContent}
            </>
          )}` + restPart;

    fs.writeFileSync('src/pages/UsaTrainingPage.tsx', finalContent);
    console.log("Updated UsaTrainingPage.tsx successfully");
} else {
    console.log("Could not find PayPalScriptProvider");
}

