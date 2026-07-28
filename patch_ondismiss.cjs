const fs = require('fs');
const files = [
  'src/pages/BookConsultantPage.tsx',
  'src/pages/SiteVisitConsultationPage.tsx',
  'src/pages/TrainingCheckoutPage.tsx',
  'src/pages/WorkshopPage.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the ondismiss block
  const ondismissPattern = /ondismiss: function\(\) \{\s*setLoading\(false\);\s*\/\/ Notify Formspree/g;
  
  content = content.replace(
    ondismissPattern,
    `ondismiss: function() {
            setLoading(false);
            // Send Cancellation Email to User
            fetch('/api/send-cancellation-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                productType: selectedTitle || selectedProductType || 'Product',
                amount: selectedPrice || payload.amount / 100,
                orderId: payload.order_id
              })
            }).catch(console.error);
            // Notify Formspree`
  );
  
  fs.writeFileSync(file, content);
  console.log("Patched ondismiss in", file);
}
