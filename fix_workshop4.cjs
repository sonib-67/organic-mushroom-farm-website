const fs = require('fs');

let content = fs.readFileSync('src/pages/WorkshopPage.tsx', 'utf8');

// The simulatePayment block starts right at the beginning
const startStr = 'const simulatePayment = async (orderId, amount, currency, title) => {';
const simStart = content.indexOf(startStr);
if (simStart === 0) {
    const simEndStr = '  };\nimport React';
    const simEnd = content.indexOf(simEndStr, simStart);
    const simFunc = content.substring(simStart, simEnd + 4); 
   
    content = content.replace(simFunc, '');
    content = content.replace('import React', 'import React'); 
   
    const handlePaymentIdx = content.indexOf('const handlePayment = async (e');
    if (handlePaymentIdx > -1) {
        content = content.substring(0, handlePaymentIdx) + simFunc + '\n  ' + content.substring(handlePaymentIdx);
    }
}
fs.writeFileSync('src/pages/WorkshopPage.tsx', content);

