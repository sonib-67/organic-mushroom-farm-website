const fs = require('fs');
const path = require('path');
let content = fs.readFileSync('server.ts', 'utf8');

// Also try to find if there's any server side verification using the old key
if (content.includes('6Ld_npUtAAAAAPPmFk-tH8x6N')) {
  // We don't have the old secret key visible, but if it was hardcoded we should replace it
  // But wait, the secret key in the image is: 6LfRrJUtAAAAAGX9ih6jtHTNTB6-jZ6RvNOsERC4
  content = content.replace(
    /process\.env\.RECAPTCHA_SECRET_KEY \|\| ".*?"/g,
    'process.env.RECAPTCHA_SECRET_KEY || "6LfRrJUtAAAAAGX9ih6jtHTNTB6-jZ6RvNOsERC4"'
  );
  fs.writeFileSync('server.ts', content);
  console.log("Updated server.ts with new ReCaptcha secret key fallback");
} else {
  console.log("No hardcoded ReCaptcha secret key found in server.ts");
}
