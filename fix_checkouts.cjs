const fs = require('fs');

function fixFile(filepath, compNameSearch) {
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, 'utf8');

  // Extract simulateFunction
  const simStart = content.indexOf('  const simulatePayment = async (orderId, amount, currency, title) => {');
  if (simStart === -1) return; // Already fixed or not found
  
  const simEndStr = '  };\nimport';
  const simEnd = content.indexOf(simEndStr, simStart);
  if (simEnd === -1) return;
  
  const simulateFunction = content.substring(simStart, simEnd + 4); // Include '  };'
  
  // Remove from top
  content = content.replace(simulateFunction + '\n', '');
  // Because import might have been attached, let's fix any broken imports if they were joined
  content = content.replace('};\nimport', 'import'); // Cleanup if needed

  // Find component start
  const compStart = content.indexOf(compNameSearch);
  if (compStart === -1) {
     console.log("Component start not found in " + filepath);
     return;
  }
  
  const handlePaymentIdx = content.indexOf('const handlePayment = async');
  if (handlePaymentIdx > -1) {
     content = content.substring(0, handlePaymentIdx) + simulateFunction + '\n\n  ' + content.substring(handlePaymentIdx);
  }

  // Fix formspree import removal that might have left an empty line
  // Fix the missing selectedPackage if it doesn't exist
  if (filepath.includes('BookConsultantPage')) {
     content = content.replace(/typeof selectedPackage !== 'undefined' \? selectedPackage\.title : ''/g, "selectedPackage ? selectedPackage.title : 'Consultation'");
     content = content.replace(/typeof selectedPackage !== 'undefined' \? selectedPackage\.price : 500/g, "selectedPackage ? selectedPackage.price : 500");
     // BookConsultant uses handleCheckout probably, let's check
  }
  
  fs.writeFileSync(filepath, content);
}

fixFile('src/pages/WorkshopPage.tsx', 'const WorkshopPage = () => {');
fixFile('src/pages/SiteVisitConsultationPage.tsx', 'export default function SiteVisitConsultationPage() {');
fixFile('src/pages/BookConsultantPage.tsx', 'export default function BookConsultantPage() {');

