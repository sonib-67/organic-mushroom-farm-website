const fs = require('fs');
let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

// 1. Add pdfUrl state
code = code.replace(
  /const \[isSubmitted, setIsSubmitted\] = useState\(false\);/,
  "const [isSubmitted, setIsSubmitted] = useState(false);\n  const [pdfUrl, setPdfUrl] = useState<string | null>(null);"
);

// 2. Change 4000 to 7000 in timeout
code = code.replace(
  /setTimeout\(\(\) => \{\n        window\.location\.href = whatsappUrl;\n      \}, 4000\);/g,
  "setTimeout(() => {\n        window.location.href = whatsappUrl;\n      }, 7000);"
);

// 3. Add auto-download effect
code = code.replace(
  /useEffect\(\(\) => \{\n    if \(isSubmitted\) \{/,
  `useEffect(() => {\n    if (isSubmitted && pdfUrl) {\n      const link = document.createElement("a");\n      link.href = pdfUrl;\n      link.download = \`Invoice_\${formData.name.replace(/\\s+/g, '_')}_\${paymentId}.pdf\`;\n      document.body.appendChild(link);\n      link.click();\n      document.body.removeChild(link);\n    }\n  }, [isSubmitted, pdfUrl, formData.name, paymentId]);\n\n  useEffect(() => {\n    if (isSubmitted) {`
);

// 4. Remove doc.save from generatePDF
code = code.replace(
  /doc\.save\(\`Invoice_\$\{formData\.name\.replace\(\/\\s\+\/g, '_'\)\}_\$\{paymentId\}\.pdf\`\);\n    return doc\.output\('datauristring'\);/,
  "// doc.save is removed so it doesn't download immediately\n    return doc.output('datauristring');"
);

// 5. Wrap handleSubmit in setTimeout to fix animation lag
code = code.replace(
  /setLoading\(true\);\n\n    try \{\n      \/\/ Generate PDF Base64 FIRST\n      const pdfBase64 = generatePDF\(\);/,
  `setLoading(true);\n\n    // Use setTimeout to allow UI to render loading state before heavy PDF generation blocks thread\n    setTimeout(async () => {\n      try {\n        // Generate PDF Base64 FIRST\n        const pdfBase64 = generatePDF();\n        setPdfUrl(pdfBase64);`
);

// 6. Close the setTimeout block properly in handleSubmit
code = code.replace(
  /      alert\("Something went wrong while submitting the form\. Please try again\."\);\n    \} finally \{\n      setLoading\(false\);\n    \}\n  \};\n\n  if \(isSubmitted\)/,
  `      alert("Something went wrong while submitting the form. Please try again.");\n      } finally {\n        setLoading(false);\n      }\n    }, 100);\n  };\n\n  if (isSubmitted)`
);

// 7. Add Download Invoice button in the Success UI
code = code.replace(
  /Chat with us on WhatsApp\n            <\/a>\n            <p className="text-xs text-slate-500 dark:text-slate-400">/,
  `Chat with us on WhatsApp\n            </a>\n            \n            {pdfUrl && (\n              <button \n                onClick={() => {\n                  const link = document.createElement("a");\n                  link.href = pdfUrl;\n                  link.download = \`Invoice_\${formData.name.replace(/\\s+/g, '_')}_\${paymentId}.pdf\`;\n                  document.body.appendChild(link);\n                  link.click();\n                  document.body.removeChild(link);\n                }}\n                className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-xl transition-all mb-3"\n              >\n                <Download className="w-5 h-5" />\n                Download Invoice Again\n              </button>\n            )}\n            \n            <p className="text-xs text-slate-500 dark:text-slate-400">`
);

fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
