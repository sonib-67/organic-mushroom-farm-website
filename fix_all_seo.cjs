const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let changedFiles = 0;

function trimText(text, maxLen) {
    if (!text || text.length <= maxLen) return text;
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

    // 1. Fix SEO Titles (> 60 chars)
    content = content.replace(/(<SEO[^>]*title=["'])([^"']*)(["'])/g, (match, p1, p2, p3) => {
        let newTitle = p2.replace(/\s*\|\s*2026 Guide/, '').replace(/\s*2026\s*/, '');
        if (newTitle.length > 58) {
            let parts = newTitle.split('|');
            if (parts.length > 1 && parts[0].trim().length > 10) {
                 newTitle = parts[0].trim();
            }
            if (newTitle.length > 58) {
                newTitle = trimText(newTitle, 58);
            }
        }
        return p1 + newTitle + p3;
    });

    // 2. Fix SEO Descriptions (> 155 or < 70)
    content = content.replace(/(<SEO[^>]*description=["'])([^"']*)(["'])/g, (match, p1, p2, p3) => {
        let newDesc = p2;
        if (newDesc.length < 70) {
            newDesc = newDesc + " Learn about professional mushroom farming, training, and setup.";
        }
        if (newDesc.length > 150) {
            newDesc = trimText(newDesc, 150);
        }
        return p1 + newDesc + p3;
    });

    // 3. Fix H1s (> 70 chars) - simple regex matching inner text for single-line H1
    content = content.replace(/(<h1[^>]*>)([^<]*)(<\/h1>)/g, (match, p1, p2, p3) => {
        let innerText = p2.trim();
        if (innerText.length > 70) {
            return p1 + trimText(innerText, 65) + p3;
        }
        return match;
    });
    // For multiline H1s
    content = content.replace(/(<h1[^>]*>)(\s*)([^<]+?)(\s*)(<\/h1>)/g, (match, p1, p2, p3, p4, p5) => {
        let innerText = p3.trim();
        if (innerText.length > 70) {
            return p1 + p2 + trimText(innerText, 65) + p4 + p5;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        changedFiles++;
    }
});

console.log(`Updated ${changedFiles} files in src/pages`);
