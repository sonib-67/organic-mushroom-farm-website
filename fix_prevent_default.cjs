const fs = require('fs');

const files = [
  'src/pages/MushroomTypeDetails.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/ContactForm.tsx',
  'src/pages/EnquiryPage.tsx',
  'src/pages/SpawnSeed.tsx',
  'src/App.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace:
    // window.location.href = "/under-maintenance";
    // return;
    // e.preventDefault();
    // with:
    // e.preventDefault();
    // window.location.href = "/under-maintenance";
    // return;
    
    content = content.replace(/window\.location\.href = "\/under-maintenance";\s*return;\s*e\.preventDefault\(\);/g, 'e.preventDefault();\n    window.location.href = "/under-maintenance";\n    return;');
    
    // Some might not have e.preventDefault() right after return; because e.preventDefault() was not immediately next to it.
    // Let's replace `const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {\n    window.location.href = "/under-maintenance";\n    return;`
    // with `const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    window.location.href = "/under-maintenance";\n    return;`
    
    // Actually let's just do a blanket replacement:
    content = content.replace(/const handleSubmit = async \((.*?)\) => {\s*window\.location\.href = "\/under-maintenance";\s*return;/g, 'const handleSubmit = async ($1) => {\n    if ($1 && $1.preventDefault) $1.preventDefault();\n    window.location.href = "/under-maintenance";\n    return;');
    
    // Same for handleFormSubmit and handleLeadSubmit
    content = content.replace(/const handleFormSubmit = async \((.*?)\) => {\s*window\.location\.href = "\/under-maintenance";\s*return;/g, 'const handleFormSubmit = async ($1) => {\n    if ($1 && $1.preventDefault) $1.preventDefault();\n    window.location.href = "/under-maintenance";\n    return;');
    
    content = content.replace(/const handleLeadSubmit = async \((.*?)\) => {\s*window\.location\.href = "\/under-maintenance";\s*return;/g, 'const handleLeadSubmit = async ($1) => {\n    if ($1 && $1.preventDefault) $1.preventDefault();\n    window.location.href = "/under-maintenance";\n    return;');

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
}
