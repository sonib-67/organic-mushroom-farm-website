const fs = require('fs');
let content = fs.readFileSync('src/pages/SpawnSeed.tsx', 'utf8');

const newSubmit = `
        try {
            const formDataObj = Object.fromEntries(formData.entries());
            
            const resp = await fetch('/api/enquiry', {
                method: 'POST',
                body: JSON.stringify({
                    name: formDataObj.name,
                    email: formDataObj.email,
                    phone: formDataObj.phone,
                    location: formDataObj.location,
                    message: formDataObj.message,
                    subject: 'Mushroom Spawn & Seeds Enquiry: ' + formDataObj.variety
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            if (!resp.ok) throw new Error('API Error');
            setSubmitted(true);
            form.reset();
        } catch (error) {
            console.error(error);
            alert("Failed to submit enquiry. Please try again.");
        }
    };
`;

content = content.replace(/try\s*\{\s*const resp = await fetch\([\s\S]*?\}\s*catch\s*\(error\)\s*\{\s*console\.error\(error\);\s*form\.submit\(\);\s*\}\s*\};\s*/, newSubmit + '\n');
content = content.replace('action="https://formspree.io/f/xykldqdy"', '');
content = content.replace('method="POST"', '');
fs.writeFileSync('src/pages/SpawnSeed.tsx', content);
