const fs = require('fs');

function removeCalls(filepath) {
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, 'utf8');
  
  // A regex to match sendPaymentNotificationToFormspree({ ... })
  // Since it can span multiple lines, we can use regex /sendPaymentNotificationToFormspree\(\{[\s\S]*?\}\);/g
  content = content.replace(/sendPaymentNotificationToFormspree\(\{[\s\S]*?\}\);/g, '');
  
  fs.writeFileSync(filepath, content);
}

removeCalls('src/pages/SiteVisitConsultationPage.tsx');
removeCalls('src/pages/BookConsultantPage.tsx');
removeCalls('src/pages/TrainingCheckoutPage.tsx');
