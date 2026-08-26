const fs = require('fs');

let content = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');

// 1. Remove PhoneInput import
content = content.replace("import PhoneInput from 'react-phone-number-input';", "");
content = content.replace("import 'react-phone-number-input/style.css';", "");
content = content.replace("import { Country } from 'react-phone-number-input';", "");

// 2. Add PayPalScriptProvider import
content = content.replace(
  'import { PayPalButtons } from "@paypal/react-paypal-js";', 
  'import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";'
);

// 3. Remove useEffect block completely
const hookStart = content.indexOf('  useEffect(() => {');
if (hookStart !== -1) {
    const hookEnd = content.indexOf('  }, []);') + 9;
    content = content.substring(0, hookStart) + content.substring(hookEnd);
}

// 4. Remove userCountry state
content = content.replace("  const [userCountry, setUserCountry] = useState<Country>('US');\n", "");

// 5. Replace PhoneInput component with standard HTML input
const phoneInputStart = content.indexOf('<div className="phone-input-wrapper');
if (phoneInputStart !== -1) {
    const phoneInputEnd = content.indexOf('</div>', phoneInputStart) + 6;
    
    const standardInput = `<input 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  placeholder="+1 234 567 8900"
                />`;
                
    content = content.substring(0, phoneInputStart) + standardInput + content.substring(phoneInputEnd);
}

// 6. Wrap PayPalButtons with PayPalScriptProvider
const buttonsStart = content.indexOf('<PayPalButtons');
if (buttonsStart !== -1) {
    const buttonsEndStr = '/>';
    const buttonsEnd = content.indexOf(buttonsEndStr, buttonsStart) + buttonsEndStr.length;
    
    const clientID = "import.meta.env.VITE_PAYPAL_CLIENT_ID || 'BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg'";
    const wrapperStart = `<PayPalScriptProvider options={{ "client-id": ${clientID}, currency: "USD" }}>\n                `;
    const wrapperEnd = `\n                </PayPalScriptProvider>`;
    
    content = content.substring(0, buttonsStart) + wrapperStart + content.substring(buttonsStart, buttonsEnd) + wrapperEnd + content.substring(buttonsEnd);
}

fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', content);
console.log("Patched PhoneInput and added PayPalScriptProvider");
