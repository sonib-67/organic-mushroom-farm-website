const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');

const simulateFunction = `
  const simulatePayment = async (orderId, amount, currency) => {
    // Show a simple confirm dialog for simulation
    const isSuccess = window.confirm(\`SIMULATION: Do you want to approve this payment of \${currency} \${amount/100}?\\n\\nOK = Success\\nCancel = Failed/Cancelled\`);
    
    if (isSuccess) {
      try {
        await fetch('/api/payment-success', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId })
        });
        
        // redirect to success
        navigate(\`/payment-success?id=sim_\${orderId}&name=\${encodeURIComponent(formData.name)}&phone=\${encodeURIComponent(formData.mobile)}&email=\${encodeURIComponent(formData.email)}&type=\${selectedProductType}\`);
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
        // navigate('/payment-cancelled', ...);
      } catch (err) {
        alert('Simulation Cancel Error');
        setLoading(false);
      }
    }
  };
`;

content = content.replace("const handleSubmit = async (e?: React.FormEvent) => {", simulateFunction + "\n\n  const handleSubmit = async (e?: React.FormEvent) => {");

const oldSubmitBody = content.substring(content.indexOf('try {', content.indexOf('const handleSubmit')), content.indexOf('return ('));

// We need to replace the entire try block inside handleSubmit
let newSubmitBody = `
    try {
      const response = await fetch('/api/payment-initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           name: formData.name,
           email: formData.email,
           phone: formData.mobile,
           productType: selectedTitle + ' Training',
           amount: selectedPrice.replace(/[^0-9]/g, '')
        })
      });
      
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.error || 'Failed to initiate');

      // Call simulation
      simulatePayment(payload.orderId, parseInt(selectedPrice.replace(/[^0-9]/g, '')) * 100, 'INR');

    } catch (error) {
      console.error(error);
      alert('Error initiating checkout. Please try again.');
      setLoading(false);
    }
  };
`;

content = content.substring(0, content.indexOf('try {', content.indexOf('const handleSubmit'))) + newSubmitBody + "\n  " + content.substring(content.indexOf('return ('));

fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content);
