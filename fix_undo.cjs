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
const exactStr1 = `>\n                                {/* HONEYPOT FIELD - DO NOT REMOVE */}\n                                <input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />\n`;
const exactStr2 = `\n                                {/* HONEYPOT FIELD - DO NOT REMOVE */}\n                                <input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />\n`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // First, let's remove exactStr1 and exactStr2
    let newContent = content.split(exactStr1).join('');
    newContent = newContent.split(exactStr2).join('');
    
    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Reverted", file);
    }
});
