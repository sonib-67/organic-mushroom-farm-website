const fs = require('fs');
let file = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

// Update generatePDF to return base64
file = file.replace(
  /doc\.save\(`Invoice_\$\{formData\.name\.replace\(\/\\\\s\+\/g, '_'\)\}_\$\{paymentId\}\.pdf`\);\s*};\s*const handleSubmit = async/g,
  `doc.save(\`Invoice_\${formData.name.replace(/\\s+/g, '_')}_\${paymentId}.pdf\`);
    return doc.output('datauristring');
  };

  const handleSubmit = async`
);

// Update fetch to include pdfBase64 and point to new endpoint
file = file.replace(
  /const res = await fetch\("\/api\/registration-mail", \{[\s\S]*?body: JSON\.stringify\(\{[\s\S]*?\.\.\.formData,[\s\S]*?trainingType: trainingName,[\s\S]*?price: price,[\s\S]*?paymentId: paymentId[\s\S]*?\}\)[\s\S]*?\}\);/g,
  `// Generate PDF Base64 FIRST
      const pdfBase64 = generatePDF();

      const res = await fetch("/api/training-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: 'DONE',
          data: {
            ...formData,
            trainingName: trainingName,
            price: price,
            paymentId: paymentId
          },
          pdfBase64: pdfBase64
        })
      });`
);

// Remove the separate generatePDF call since it's already done
file = file.replace(
  /\/\/\s*Generate PDF\s*generatePDF\(\);\s*\/\/\s*Show success/g,
  `// Show success`
);

fs.writeFileSync('app/training/register/RegistrationClient.tsx', file);
