const fs = require('fs');
let content = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');

// add isCancelled state
content = content.replace(
  "const [error, setError] = useState(\"\");",
  "const [error, setError] = useState(\"\");\n  const [isCancelled, setIsCancelled] = useState(false);"
);

// modify onCancel
content = content.replace(
  /onCancel=\{\(\) => \{\s+handleFailure\("Payment was cancelled by the user."\);\s+\}\}/,
  "onCancel={() => { setIsCancelled(true); }}"
);

// update the layout to show retry button
const retryLayout = `{isCancelled ? (
                <div className="text-center p-4 border border-red-500/20 bg-red-500/5 rounded-xl">
                  <p className="text-red-500 font-bold mb-4">Payment was cancelled.</p>
                  <button
                    onClick={() => setIsCancelled(false)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition-all"
                  >
                    Retry Payment
                  </button>
                </div>
              ) : (
                <PayPalScriptProvider`;

content = content.replace("<PayPalScriptProvider", retryLayout);

const closeRetryLayout = `</PayPalScriptProvider>
              )}`;

content = content.replace("</PayPalScriptProvider>", closeRetryLayout);

fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', content);
console.log("Patched InternationalCheckoutForm");
