const fs = require('fs');

let content = fs.readFileSync('src/pages/WorkshopPage.tsx', 'utf8');

// Find simulatePayment at the top
const simStart = content.indexOf('  const simulatePayment = async');
const simEndStr = '  };\nimport React';
const simEnd = content.indexOf(simEndStr, simStart);

if (simStart > -1 && simStart < 500) { // character offset
   const simFunc = content.substring(simStart, simEnd + 4); 
   
   content = content.replace(simFunc, '');
   content = content.replace('import React', 'import React'); 
   
   const handlePaymentIdx = content.indexOf('const handlePayment = async (e');
   if (handlePaymentIdx > -1) {
       content = content.substring(0, handlePaymentIdx) + simFunc + '\n  ' + content.substring(handlePaymentIdx);
   }
}

// Fix selectedPackage -> It's a static price 199 for workshop
content = content.replace(/typeof selectedPackage !== 'undefined' \? selectedPackage\.title : ''/g, "'Workshop'");
content = content.replace(/typeof selectedPackage !== 'undefined' \? selectedPackage\.price : 500/g, "199");

fs.writeFileSync('src/pages/WorkshopPage.tsx', content);

