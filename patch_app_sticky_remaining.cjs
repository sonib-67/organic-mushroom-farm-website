const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace the remaining two navigate("/enquiry"); calls inside usa_plans
// We can just find them and replace them.
let count = 0;
content = content.replace(/navigate\("\/enquiry"\);/g, (match) => {
  count++;
  if (count === 1) { // 3rd overall originally, but the first 2 were already replaced
    return 'navigate("/usatraining", { state: { autoOpenPlan: { name: "Basic Cultivation Mushroom Training", price: "39.00" } } });';
  } else if (count === 2) {
    return 'navigate("/usatraining", { state: { autoOpenPlan: { name: "Advanced Commercial Mushroom Training", price: "97.00" } } });';
  }
  return match;
});

fs.writeFileSync('src/App.tsx', content);
console.log("Patched remaining sticky buttons in App.tsx");
