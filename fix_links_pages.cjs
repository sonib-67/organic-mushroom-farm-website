const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let changed = 0;
files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    
    content = content.replace(/<a\s+([^>]*?)href="(http[^"]+)"([^>]*)>/gi, (match, p1, p2, p3) => {
        let cleanP1 = p1.replace(/rel="[^"]*"\s*/i, '');
        let cleanP3 = p3.replace(/rel="[^"]*"\s*/i, '');
        return `<a rel="nofollow noopener noreferrer" ${cleanP1}href="${p2}"${cleanP3}>`;
    });
    
    if (content !== original) {
        fs.writeFileSync(filePath, content);
        changed++;
    }
});

console.log(`Fixed external links in ${changed} pages`);
