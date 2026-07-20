const fs = require('fs');

function insertH2(filePath, h2Text) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Some pages have <SEO ... />
    // Let's insert right before <SEO
    if (content.includes('<SEO')) {
      content = content.replace(/<SEO/g, `<h2 className="sr-only">${h2Text}</h2>\n      <SEO`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    } else {
      console.log(`No <SEO found in ${filePath}`);
    }
  } catch (e) {
    console.error(`Error processing ${filePath}:`, e);
  }
}

insertH2('src/pages/SiteVisitConsultationPage.tsx', 'Expert On-Site Consultation for Your Mushroom Farm Setup');
insertH2('src/pages/CompostUnitSpecs.tsx', 'Standard Specifications for High-Yield Mushroom Compost Units');
insertH2('src/pages/ModelDetails.tsx', 'Profitable Mushroom Farming Business Models & Shed Details');
insertH2('src/pages/ROICalculatorPage.tsx', 'Calculate Your Mushroom Cultivation Profit & ROI');
insertH2('src/pages/TrainingCheckoutPage.tsx', 'Secure Your Spot: Complete Your Training Registration');
insertH2('src/pages/BookConsultantPage.tsx', 'Schedule a Session with Our Mushroom Cultivation Experts');
insertH2('src/pages/ContactForm.tsx', 'Get in Touch for Mushroom Farming Support & Inquiries');

