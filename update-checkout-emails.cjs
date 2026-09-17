const fs = require('fs');
let file = fs.readFileSync('app/training-checkout/TrainingCheckoutClient.tsx', 'utf8');

// Replace Formspree INITIATED
file = file.replace(/sendPaymentNotificationToFormspree\(\{\s*name: formData\.name,\s*phone: formData\.mobile,\s*email: formData\.email,\s*productType: `\$\{selectedTitle\} Training`,\s*amount: selectedPrice,\s*status: 'INITIATED',\s*orderId: payload\.id\s*\}\);/g, 
`fetch('/api/training-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'INITIATED',
          data: {
            name: formData.name,
            phone: formData.mobile,
            email: formData.email,
            price: selectedPrice,
            trainingName: selectedTitle + ' Training',
          }
        })
      }).catch(console.error);`);

// Replace Formspree CANCELLED
file = file.replace(/sendPaymentNotificationToFormspree\(\{\s*name: formData\.name,\s*phone: formData\.mobile,\s*email: formData\.email,\s*productType: `\$\{selectedTitle\} Training`,\s*amount: selectedPrice,\s*status: 'CANCELLED',\s*orderId: payload\.id\s*\}\);/g, 
`fetch('/api/training-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                action: 'CANCELLED',
                data: {
                  name: formData.name,
                  phone: formData.mobile,
                  email: formData.email,
                  price: selectedPrice,
                  trainingName: selectedTitle + ' Training',
                }
              })
            }).catch(console.error);`);

// Replace Formspree DONE
file = file.replace(/sendPaymentNotificationToFormspree\(\{\s*name: formData\.name,\s*phone: formData\.mobile,\s*email: formData\.email,\s*productType: `\$\{selectedTitle\} Training`,\s*amount: selectedPrice,\s*status: 'DONE',\s*orderId: payload\.id,\s*paymentId: response\.razorpay_payment_id\s*\}\);/g, 
`// We no longer send DONE from here, we will send it from Registration form submission.`);

// Replace Formspree FAILED
file = file.replace(/sendPaymentNotificationToFormspree\(\{\s*name: formData\.name,\s*phone: formData\.mobile,\s*email: formData\.email,\s*productType: `\$\{selectedTitle\} Training`,\s*amount: selectedPrice,\s*status: 'FAILED',\s*orderId: payload\.id,\s*paymentId: response\.error\?\.metadata\?\.payment_id\s*\}\);/g, 
`fetch('/api/training-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'FAILED',
              data: {
                name: formData.name,
                phone: formData.mobile,
                email: formData.email,
                price: selectedPrice,
                trainingName: selectedTitle + ' Training',
              }
            })
          }).catch(console.error);`);

fs.writeFileSync('app/training-checkout/TrainingCheckoutClient.tsx', file);
