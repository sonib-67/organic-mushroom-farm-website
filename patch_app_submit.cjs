const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldCode = `          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || "N/A",
            mushroomType: formData.mushroomType,
            projectSize: formData.projectSize,
            message: formData.message,
            _subject: \`New Home Page Inquiry from \${formData.name} (\${formData.mushroomType})\`,
          }),`;

const newCode = `          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || "N/A",
            mushroomType: formData.mushroomType,
            projectSize: formData.projectSize,
            message: formData.message,
            _subject: \`New Home Page Inquiry from \${formData.name} (\${formData.mushroomType})\`,
            middleName: (e.target as HTMLFormElement).middleName?.value || "",
          }),`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx handleSubmit");
