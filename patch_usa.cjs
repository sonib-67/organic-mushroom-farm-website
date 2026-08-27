const fs = require('fs');
let content = fs.readFileSync('src/pages/UsaTrainingPage.tsx', 'utf8');

// 1. Add useNavigate to the imports
content = content.replace("import { Link } from 'react-router-dom';", "import { Link, useNavigate } from 'react-router-dom';");

// 2. Add navigate hook inside the component
content = content.replace("const UsaTrainingPage = () => {", "const UsaTrainingPage = () => {\n  const navigate = useNavigate();");

// 3. Update the onSuccess handler in InternationalCheckoutForm
const oldCheckoutForm = `<InternationalCheckoutForm 
              planName={checkoutPlan.name}
              price={checkoutPlan.price}
              onSuccess={(id) => {
                setCheckoutPlan(null);
                setPaymentSuccess(id);
              }}
              onClose={() => setCheckoutPlan(null)}
            />`;

const newCheckoutForm = `<InternationalCheckoutForm 
              planName={checkoutPlan.name}
              price={checkoutPlan.price}
              onSuccess={(id) => {
                setCheckoutPlan(null);
                if (checkoutPlan.price === "39.00") {
                  navigate(\`/usatraining/success/basic?id=\${id}\`);
                } else if (checkoutPlan.price === "97.00") {
                  navigate(\`/usatraining/success/advanced?id=\${id}\`);
                } else {
                  setPaymentSuccess(id);
                }
              }}
              onClose={() => setCheckoutPlan(null)}
            />`;

if (content.includes("setPaymentSuccess(id);")) {
  // Simple regex replace for the onSuccess block to be safe
  content = content.replace(
    /onSuccess=\{\(id\) => \{\s*setCheckoutPlan\(null\);\s*setPaymentSuccess\(id\);\s*\}\}/,
    `onSuccess={(id) => {
                setCheckoutPlan(null);
                if (checkoutPlan.price === "39.00") {
                  navigate(\`/usatraining/success/basic?id=\${id}\`);
                } else if (checkoutPlan.price === "97.00") {
                  navigate(\`/usatraining/success/advanced?id=\${id}\`);
                } else {
                  setPaymentSuccess(id);
                }
              }}`
  );
}

fs.writeFileSync('src/pages/UsaTrainingPage.tsx', content);
console.log("Patched UsaTrainingPage.tsx successfully");
