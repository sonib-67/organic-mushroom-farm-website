const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let changedFiles = 0;

function trimText(text, maxLen) {
    if (!text || text.length <= maxLen) return text;
    // try to trim at a word boundary
    let trimmed = text.substring(0, maxLen - 3);
    let lastSpace = trimmed.lastIndexOf(' ');
    if (lastSpace > maxLen - 15) {
        trimmed = trimmed.substring(0, lastSpace);
    }
    return trimmed + '...';
}

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Fix SEO title
    content = content.replace(/title="([^"]+)"/, (match, p1) => {
        let newTitle = p1;
        // removing year, e.g. " | 2026 Guide" or "2026"
        newTitle = newTitle.replace(/\s*\|\s*2026 Guide/, '').replace(/\s*2026\s*/, '');
        if (newTitle.length > 58) {
            let parts = newTitle.split('|');
            if (parts.length > 1 && parts[0].trim().length > 10) {
                 newTitle = parts[0].trim();
            }
            if (newTitle.length > 58) {
                newTitle = trimText(newTitle, 58);
            }
        }
        return `title="${newTitle}"`;
    });

    // Fix SEO description
    content = content.replace(/description="([^"]+)"/, (match, p1) => {
        let newDesc = p1;
        if (newDesc.length < 70) {
            newDesc = newDesc + " Learn more about our specialized mushroom farming techniques, training, and setup.";
        }
        if (newDesc.length > 150) {
            newDesc = trimText(newDesc, 150);
        }
        return `description="${newDesc}"`;
    });

    // Fix H1 length
    content = content.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/gi, (match, p1, p2) => {
        let innerText = p2.replace(/<[^>]+>/g, '').trim();
        // Just trim the inner html content if it's too long and plain text
        if (innerText.length > 70 && !p2.includes('<')) {
            let newH1 = trimText(innerText, 65);
            return `<h1${p1}>\n${newH1}\n</h1>`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        changedFiles++;
    }
});

console.log(`Updated ${changedFiles} files in src/pages`);
