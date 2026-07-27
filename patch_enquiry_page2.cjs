const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

const targetStr = `      message: messageBody,
      trainingMode: formData.get("training_mode") || null,
      mushroomVariety: formData.get("mushroom_variety") || null,
    };`;

const newStr = `      message: messageBody,
      trainingMode: formData.get("training_mode") || null,
      mushroomVariety: formData.get("mushroom_variety") || null,
      setupType: formData.get("setup_type") || null,
    };`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
  console.log("Patched EnquiryPage successfully");
} else {
  console.log("Target string not found in EnquiryPage");
}
