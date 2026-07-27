const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

const targetStr = `      setupType: formData.get("setup_type") || null,
    };`;

const newStr = `      setupType: formData.get("setup_type") || null,
      productForm: formData.get("product_form") || null,
      otherSubject: formData.get("other_subject") || null,
    };`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
  console.log("Patched EnquiryPage successfully");
} else {
  console.log("Target string not found in EnquiryPage");
}
