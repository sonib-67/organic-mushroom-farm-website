const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let titles = {};

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    let match = content.match(/<SEO[^>]*title=["']([^"']*)["']/);
    if (match) {
        let title = match[1];
        if (!titles[title]) {
            titles[title] = [];
        }
        titles[title].push(file);
    }
});

let duplicates = 0;
for (let title in titles) {
    if (titles[title].length > 1) {
        console.log(`Duplicate Title: "${title}" in files: ${titles[title].join(', ')}`);
        
        // Auto-fix by appending city/file name to the title
        titles[title].forEach((file, index) => {
            if (index > 0) { // Keep the first one as is, modify others
                const filePath = path.join(pagesDir, file);
                let content = fs.readFileSync(filePath, 'utf-8');
                let baseName = file.replace('.tsx', '').replace('Article', '').replace('Page', '');
                
                content = content.replace(/(<SEO[^>]*title=["'])([^"']*)(["'])/, (m, p1, p2, p3) => {
                    let newTitle = p2;
                    // if it's already max length, truncate further before appending
                    if (newTitle.length + baseName.length + 3 > 60) {
                        newTitle = newTitle.substring(0, 56 - baseName.length) + "...";
                    }
                    return p1 + newTitle + " - " + baseName + p3;
                });
                fs.writeFileSync(filePath, content);
                duplicates++;
            }
        });
    }
}
console.log(`Fixed ${duplicates} duplicate titles.`);
