const fs = require('fs');

const simulateFunction = `
  const simulatePayment = async (orderId, amount, currency, title) => {
    const isSuccess = window.confirm(\`SIMULATION: Do you want to approve this payment of \${currency} \${amount/100}?\\n\\nOK = Success\\nCancel = Failed/Cancelled\`);
    
    if (isSuccess) {
      try {
        await fetch('/api/payment-success', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId })
        });
        
        window.location.href = \`/payment-success?id=sim_\${orderId}&name=\${encodeURIComponent(formData.name)}&phone=\${encodeURIComponent(formData.phone || formData.mobile)}&email=\${encodeURIComponent(formData.email)}&type=\${encodeURIComponent(title)}\`;
      } catch (err) {
        alert('Simulation Success Error');
        setLoading(false);
      }
    } else {
      try {
        await fetch('/api/payment-cancel', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId })
        });
        
        setLoading(false);
        setPaymentStatus('cancelled');
      } catch (err) {
        alert('Simulation Cancel Error');
        setLoading(false);
      }
    }
  };
`;

function patchFile(filepath) {
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, 'utf8');

  // Replace old handlePayment or handleSubmit
  // We'll just replace the body of handlePayment
  
  if (content.includes('const handlePayment = async')) {
      const startIdx = content.indexOf('const handlePayment = async');
      const tryIdx = content.indexOf('try {', startIdx);
      if (tryIdx > -1) {
          const catchIdx = content.indexOf('catch (error)', tryIdx);
          const endBlockIdx = content.indexOf('};', catchIdx) + 2;
          
          let newSubmitBody = `
    try {
      const response = await fetch('/api/payment-initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           name: formData.name,
           email: formData.email,
           phone: formData.phone || formData.mobile,
           productType: (typeof selectedPackage !== 'undefined' ? selectedPackage.title : '') || 'Consultation',
           amount: (typeof selectedPackage !== 'undefined' ? selectedPackage.price : 500)
        })
      });
      
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.error || 'Failed to initiate');

      simulatePayment(payload.orderId, parseInt(typeof selectedPackage !== 'undefined' ? selectedPackage.price : 500) * 100, 'INR', 'Consultation');

    } catch (error) {
      console.error(error);
      alert('Error initiating checkout. Please try again.');
      setLoading(false);
    }
  };
`;
          content = simulateFunction + '\n' + content.substring(0, tryIdx) + newSubmitBody + '\n' + content.substring(endBlockIdx);
      }
  }

  // Remove formspree imports
  content = content.replace("import { sendPaymentNotificationToFormspree } from '../utils/formspree';", "");

  fs.writeFileSync(filepath, content);
}

patchFile('src/pages/WorkshopPage.tsx');
patchFile('src/pages/SiteVisitConsultationPage.tsx');
patchFile('src/pages/BookConsultantPage.tsx');
