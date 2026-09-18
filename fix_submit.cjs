const fs = require('fs');

let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

const generatePDF = `
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("Organic Mushroom Farm", 14, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text("Tax Invoice / Receipt", 14, 30);
    
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(\`Payment ID: \${paymentId}\`, 14, 36);
    doc.text(\`Date: \${new Date().toLocaleDateString()}\`, 14, 42);

    // Customer Details
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text("Customer Details", 14, 55);
    
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text(\`Full Name: \${formData.name}\`, 14, 63);
    doc.text(\`Mobile Number: \${formData.phone}\`, 14, 69);
    doc.text(\`Email Address: \${formData.email}\`, 14, 75);
    doc.text(\`City: \${formData.city}\`, 14, 81);
    doc.text(\`State: \${formData.state}\`, 14, 87);

    // Table
    autoTable(doc, {
      startY: 100,
      head: [['Description', 'Amount']],
      body: [
        [trainingName, \`Rs. \${price}\`],
        ['Tax (GST 18% included)', 'Included'],
        ['Total Paid', \`Rs. \${price}\`]
      ],
      theme: 'grid',
      headStyles: { fillColor: [126, 34, 206] }
    });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const finalY = (doc as any).lastAutoTable.finalY + 20;
    doc.text("Thank you for choosing Organic Mushroom Farm.", 14, finalY);
    doc.text("For support, contact: +91 9203544140", 14, finalY + 6);
    
    return doc;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const doc = generatePDF();
      const pdfBase64 = doc.output('datauristring');
      
      const res = await fetch('/api/training-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'DONE',
          data: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            state: formData.state,
            city: formData.city,
            experience: formData.experience,
            interest: formData.interest,
            goal: formData.goal,
            planTime: formData.planTime,
            planSpace: formData.planSpace,
            investment: formData.investment,
            support: formData.support,
            source: formData.source,
            price: \`Rs. \${price}\`,
            trainingName: trainingName,
            paymentId: paymentId,
          },
          pdfBase64: pdfBase64
        })
      });

      if (res.ok) {
        setPdfUrl(doc.output('bloburl'));
        setIsSubmitted(true);
      } else {
        alert("Failed to submit registration. Please try again or contact support.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please take a screenshot and send to WhatsApp: +91 9203544140");
    } finally {
      setLoading(false);
    }
  };
`;

// Inject before `  if (isSubmitted) {`
code = code.replace('  if (isSubmitted) {', generatePDF + '\n  if (isSubmitted) {');

// Fix closing bracket if missing
if (!code.endsWith('}')) {
  code += '\n}';
}

fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
