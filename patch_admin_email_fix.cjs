const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const oldAdminHtml = `html: \`
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Phone:</strong> \${phone || "N/A"}</p>
        <p><strong>Subject:</strong> \${subject || "N/A"}</p>
        <p><strong>Service/Product:</strong> \${service || "N/A"}</p>
        \${trainingMode ? \`<p><strong>Training Mode:</strong> \${trainingMode}</p>\` : ''}
        \${mushroomVariety ? \`<p><strong>Mushroom Variety:</strong> \${mushroomVariety}</p>\` : ''}
        <h3>Message:</h3>
        <p>\${message.replace(/\\n/g, "<br>")}</p>
      \`,`;

const newAdminHtml = `html: \`
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Phone:</strong> \${phone || "N/A"}</p>
        <p><strong>Subject:</strong> \${subject || "N/A"}</p>
        <p><strong>Service/Product:</strong> \${service || "N/A"}</p>
        <h3>Enquiry Details:</h3>
        <p>\${message.replace(/\\n/g, "<br>")}</p>
      \`,`;

content = content.replace(oldAdminHtml, newAdminHtml);
fs.writeFileSync('server.ts', content);
console.log('Fixed admin email in server.ts');
