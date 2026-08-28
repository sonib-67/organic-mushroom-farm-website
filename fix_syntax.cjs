const fs = require('fs');
const glob = require('glob'); 
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');
const honeypotSnippet = `\n                                {/* HONEYPOT FIELD - DO NOT REMOVE */}\n                                <input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />\n`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (content.includes(honeypotSnippet)) {
        // Find if the honeypotSnippet is missing a preceding ">"
        // Let's just replace all honeypotSnippet with ">" + honeypotSnippet
        // BUT only if there isn't a ">" immediately preceding it.
        // Actually, since I removed the ">" in my replacement, ALL of them are missing the ">".
        
        let newContent = content.replace(new RegExp(honeypotSnippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), `>${honeypotSnippet}`);
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Fixed syntax in", file);
    }
});
