const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

// Make email mandatory
content = content.replace(
  'Email Address (Optional)',
  'Email Address *'
);
content = content.replace(
  '<input type="email" name="email" className=',
  '<input required type="email" name="email" className='
);

// Add trainingMode and mushroomVariety to submitData
content = content.replace(
  /subject: `New Enquiry for \$\{formType.replace\('_', ' '\)\.toUpperCase\(\)\} from \$\{formData\.get\("name"\)\}`,/g,
  `subject: \`New Enquiry for \${formType.replace('_', ' ').toUpperCase()} from \${formData.get("name")}\`,`
);

content = content.replace(
  /message: messageBody,\n    \};/,
  `message: messageBody,
      trainingMode: formData.get("training_mode") || null,
      mushroomVariety: formData.get("mushroom_variety") || null,
    };`
);

fs.writeFileSync('src/pages/EnquiryPage.tsx', content);
console.log('Patched EnquiryPage.tsx');
