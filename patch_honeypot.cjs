const fs = require('fs');
const glob = require('glob'); // Need a quick way, I'll just hardcode paths since there are few

const files = [
    'src/pages/ContactForm.tsx',
    'src/pages/ContactPage.tsx',
    'src/pages/SpawnSeed.tsx',
    'src/pages/EnquiryPage.tsx',
    'src/pages/MushroomTypeDetails.tsx',
    'src/App.tsx' // If there are forms here
];

const honeypotHtml = `
                            {/* HONEYPOT FIELD - DO NOT REMOVE */}
                            <div style={{ display: 'none' }} aria-hidden="true">
                                <input type="text" name="middleName" tabIndex={-1} autoComplete="off" />
                            </div>`;

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Find </form> and insert honeypot before it, or find <button type="submit" and insert before it
        // Actually it's safer to just insert it right after <form ...>
        if (content.includes('<form ')) {
            content = content.replace(/(<form[^>]*>)/g, `$1${honeypotHtml}`);
            fs.writeFileSync(file, content);
            console.log(`Patched ${file}`);
        }
    }
});
