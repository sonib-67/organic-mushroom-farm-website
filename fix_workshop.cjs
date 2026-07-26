const fs = require('fs');

function manualFix(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');

  // Find simulatePayment at the top
  const simStart = content.indexOf('  const simulatePayment = async');
  const simEndStr = '  };\nimport React';
  const simEnd = content.indexOf(simEndStr, simStart);
  
  if (simStart > -1 && simStart < 50) {
     const simFunc = content.substring(simStart, simEnd + 4); // '  };\n'
     
     // Remove from top
     content = content.replace(simFunc, '');
     content = content.replace('import React', 'import React'); // cleanup
     
     // Find the proper insert point
     const handlePaymentIdx = content.indexOf('const handlePayment = async (e');
     if (handlePaymentIdx > -1) {
         content = content.substring(0, handlePaymentIdx) + simFunc + '\n  ' + content.substring(handlePaymentIdx);
     }
  }

  // Also remove sendPaymentNotificationToFormspree({ ... })
  content = content.replace(/sendPaymentNotificationToFormspree\(\{[\s\S]*?\}\);/g, '');
  
  // Fix MushroomTypeDetails
  
  fs.writeFileSync(filepath, content);
}

manualFix('src/pages/WorkshopPage.tsx');

let mushroomContent = fs.readFileSync('src/pages/MushroomTypeDetails.tsx', 'utf8');
mushroomContent = mushroomContent.replace("subject: 'Enquiry for ' + mushroom.title", "subject: 'Enquiry for ' + info.name");
fs.writeFileSync('src/pages/MushroomTypeDetails.tsx', mushroomContent);

