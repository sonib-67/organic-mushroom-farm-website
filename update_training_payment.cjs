const fs = require('fs');

let code = fs.readFileSync('components/TrainingPayment.tsx', 'utf8');

const replacement = `
        handler: async function (response: any) {
          // Notify Admin immediately about the completed payment
          fetch('/api/training-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'PAYMENT_COMPLETED',
              data: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                price: amount === 699 ? '₹699' : '₹299',
                trainingName: title + ' Training',
                paymentId: response.razorpay_payment_id
              }
            })
          }).catch(console.error);

          // Send verification request to our backend (optional, webhook handles emails)`;

code = code.replace(`
        handler: async function (response: any) {
          // Send verification request to our backend (optional, webhook handles emails)`, replacement);

fs.writeFileSync('components/TrainingPayment.tsx', code);
