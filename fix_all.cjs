const fs = require('fs');
const glob = require('glob');

// We will just read all .tsx files in src/pages and src/App.tsx
const pages = glob.sync('src/pages/**/*.tsx');
pages.push('src/App.tsx');

const badRegex1 = />\s*{\/\* HONEYPOT FIELD - DO NOT REMOVE \*\/}\s*<input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" \/>\s*>/g;
const badRegex2 = /\s*{\/\* HONEYPOT FIELD - DO NOT REMOVE \*\/}\s*<input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" \/>/g;
const myHoneypot = /\s*{\/\* HONEYPOT FIELD - DO NOT REMOVE \*\/}\s*<div style={{ display: 'none' }} aria-hidden="true">\s*<input type="text" name="middleName" tabIndex={-1} autoComplete="off" \/>\s*<\/div>/g;

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Remove all injected honeypots
    content = content.replace(badRegex1, '>');
    content = content.replace(badRegex2, '');
    content = content.replace(myHoneypot, '');
    
    // Let's also fix the broken onSubmit={(e) => }
    // Since badRegex2 just removes the injected stuff, the original code should be restored.
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log("Fixed", file);
    }
});
