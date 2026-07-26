const fs = require('fs');
let content = fs.readFileSync('src/pages/WorkshopPage.tsx', 'utf8');

content = content.replace("email: formData.email,", "email: 'N/A',");
content = content.replace("phone: formData.phone || formData.mobile,", "phone: formData.phone,");
content = content.replace("&email=${encodeURIComponent(formData.email)}", "&email=N%2FA");
content = content.replace("phone=${encodeURIComponent(formData.phone || formData.mobile)}", "phone=${encodeURIComponent(formData.phone)}");

fs.writeFileSync('src/pages/WorkshopPage.tsx', content);
