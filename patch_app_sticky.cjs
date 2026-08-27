const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// The $39 button in usa_plans has navigate("/enquiry"); 
// we will replace the first one with basic and second with advanced.
let replacedCount = 0;
content = content.replace(/navigate\("\/enquiry"\);/g, (match) => {
  replacedCount++;
  if (replacedCount === 1) {
    return 'navigate("/usatraining", { state: { autoOpenPlan: { name: "Basic Cultivation Mushroom Training", price: "39.00" } } });';
  } else if (replacedCount === 2) {
    return 'navigate("/usatraining", { state: { autoOpenPlan: { name: "Advanced Commercial Mushroom Training", price: "97.00" } } });';
  }
  return match;
});

fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx for sticky button routing");
