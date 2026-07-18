const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let descs = {};

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    let match = content.match(/<SEO[^>]*description=["']([^"']*)["']/);
    if (match) {
        let desc = match[1];
        if (!descs[desc]) {
            descs[desc] = [];
        }
        descs[desc].push(file);
    }
});

let duplicates = 0;
for (let desc in descs) {
    if (descs[desc].length > 1) {
        // Auto-fix by appending city/file name to the description
        descs[desc].forEach((file, index) => {
            if (index > 0) { // Keep the first one as is, modify others
                const filePath = path.join(pagesDir, file);
                let content = fs.readFileSync(filePath, 'utf-8');
                let baseName = file.replace('.tsx', '').replace('Article', '').replace('Page', '');
                
                content = content.replace(/(<SEO[^>]*description=["'])([^"']*)(["'])/, (m, p1, p2, p3) => {
                    let newDesc = p2;
                    if (newDesc.length + baseName.length + 15 > 155) {
                        newDesc = newDesc.substring(0, 150 - baseName.length - 15) + "...";
                    }
                    return p1 + newDesc + " Read more about " + baseName + "." + p3;
                });
                fs.writeFileSync(filePath, content);
                duplicates++;
            }
        });
    }
}
console.log(`Fixed ${duplicates} duplicate descriptions.`);
