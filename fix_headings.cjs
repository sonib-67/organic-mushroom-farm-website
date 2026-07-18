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

    // Fix multiple H1s -> change 2nd+ to H2
    let h1Count = 0;
    content = content.replace(/<h1(.*?)>(.*?)<\/h1>/gs, (match, p1, p2) => {
        h1Count++;
        if (h1Count > 1) {
            // Check if p1 has text-3xl, etc, replace to smaller if needed, but simple H2 is fine
            return `<h2${p1}>${p2}</h2>`;
        }
        return match;
    });

    // If 0 H1s, let's change the first H2 to H1
    if (h1Count === 0) {
        let h2Count = 0;
        content = content.replace(/<h2(.*?)>(.*?)<\/h2>/s, (match, p1, p2) => {
            h2Count++;
            if (h2Count === 1) {
                return `<h1${p1}>${p2}</h1>`;
            }
            return match;
        });
    }

    // Fix H2s (> 70 chars)
    content = content.replace(/(<h2[^>]*>)(\s*)([^<]+?)(\s*)(<\/h2>)/gs, (match, p1, p2, p3, p4, p5) => {
        let innerText = p3.trim();
        // ignore if it contains other tags like span/br inside p3. The regex [^<]+ ensures no tags inside, but just in case
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

console.log(`Updated ${changedFiles} files for headings`);
