const fs = require('fs');

let content = fs.readFileSync('src/pages/BookConsultantPage.tsx', 'utf8');
content = content.replace(
  /ondismiss: function\(\) \{\s*\/\/ Notify Formspree/m,
  `ondismiss: function() {
            // Send Cancellation Email to User
            fetch('/api/send-cancellation-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                productType: 'Expert 1-on-1 Business Consultation Slot',
                amount: '₹59',
                orderId: payload.order_id
              })
            }).catch(console.error);
            // Notify Formspree`
);
fs.writeFileSync('src/pages/BookConsultantPage.tsx', content);

let training = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');
training = training.replace(
  /fetch\('\/api\/send-cancellation-email'[\s\S]*?\.catch\(console\.error\);/m,
  `fetch('/api/send-cancellation-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                productType: \`\${selectedTitle} Training\`,
                amount: selectedPrice,
                orderId: payload.order_id
              })
            }).catch(console.error);`
);
fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', training);
