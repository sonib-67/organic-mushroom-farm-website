const fs = require('fs');
let content = fs.readFileSync('api/contact.ts', 'utf8');

if (!content.includes('verifyRecaptcha')) {
  content = "import { verifyRecaptcha } from '../src/utils/verifyRecaptcha';\n" + content;
  
  content = content.replace(
    "const { name, email, phone, subject, message, service, trainingMode, mushroomVariety, setupType, productForm, otherSubject } = req.body;",
    "const { name, email, phone, subject, message, service, trainingMode, mushroomVariety, setupType, productForm, otherSubject, captchaToken } = req.body;\n\n    const isHuman = await verifyRecaptcha(captchaToken);\n    if (!isHuman) {\n      console.log('Spam blocked! Captcha failed.');\n      return res.status(400).json({ error: 'Captcha verification failed. Spam detected!' });\n    }"
  );
  
  fs.writeFileSync('api/contact.ts', content);
  console.log("Patched api/contact.ts");
} else {
  console.log("Already patched api/contact.ts");
}
