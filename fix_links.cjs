const fs = require('fs');
const path = require('path');

let appTsxPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appTsxPath, 'utf-8');

// replace <a href="http..." with <a rel="nofollow noopener noreferrer" href="http..."
content = content.replace(/<a\s+([^>]*?)href="(http[^"]+)"([^>]*)>/gi, (match, p1, p2, p3) => {
    // If it already has rel, remove it to avoid duplicates
    let cleanP1 = p1.replace(/rel="[^"]*"\s*/i, '');
    let cleanP3 = p3.replace(/rel="[^"]*"\s*/i, '');
    return `<a rel="nofollow noopener noreferrer" ${cleanP1}href="${p2}"${cleanP3}>`;
});

fs.writeFileSync(appTsxPath, content);
console.log("Fixed external links in App.tsx");
