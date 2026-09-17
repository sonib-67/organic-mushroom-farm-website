const fs = require('fs');

let code = fs.readFileSync('app/training-checkout/TrainingCheckoutClient.tsx', 'utf8');

const replacement = `
          // Notify Admin immediately about the completed payment
          fetch('/api/training-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'PAYMENT_COMPLETED',
              data: {
                name: formData.name,
                phone: formData.mobile,
                email: formData.email,
                price: selectedPrice,
                trainingName: selectedTitle + ' Training',
                paymentId: response.razorpay_payment_id
              }
            })
          }).catch(console.error);

          trackPaymentStep('PaymentSuccess',`;

code = code.replace("trackPaymentStep('PaymentSuccess',", replacement);

fs.writeFileSync('app/training-checkout/TrainingCheckoutClient.tsx', code);
