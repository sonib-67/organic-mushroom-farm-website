const fs = require('fs');
const glob = require('glob'); // Note: we might not have glob, but we can use simple recursion
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

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if the file contains the honeypot snippet multiple times
    const honeypotMarker = "{/* HONEYPOT FIELD - DO NOT REMOVE */}";
    const honeypotCount = (content.match(new RegExp(honeypotMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    
    if (honeypotCount > 1) {
        // If there are multiple, keep only the first one
        let newContent = content;
        
        const firstIndex = newContent.indexOf(honeypotMarker) + honeypotMarker.length;
        const beforeFirst = newContent.substring(0, firstIndex);
        const afterFirst = newContent.substring(firstIndex);
        
        // Remove all subsequent honeypot fields
        // Since my previous injection was:
        // {/* HONEYPOT FIELD - DO NOT REMOVE */}
        // <input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
        
        // Let's just remove everything matching the injection exactly, except for the first one.
        const regexStr = "\\n*\\s*\\{\\/\\* HONEYPOT FIELD - DO NOT REMOVE \\*\\/\\}\\n*\\s*<input type=\"text\" name=\"middleName\" className=\"hidden\" style=\\{\\{ display: 'none' \\}\\} tabIndex=\\{-1\\} autoComplete=\"off\" \\/>\\n*";
        const exactMatchRegex = new RegExp(regexStr, 'g');
        
        // Count total matches of the exact regex
        const totalMatches = (newContent.match(exactMatchRegex) || []).length;
        
        if (totalMatches > 0) {
            // Replace all with empty, then put one back at the first place it was found
            const cleaned = newContent.replace(exactMatchRegex, '');
            // Let's re-inject at the end of the <form ... > tag
            const finalContent = cleaned.replace(/<form\b([^>]*)>/g, `<form$1>\n                                {/* HONEYPOT FIELD - DO NOT REMOVE */}\n                                <input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />\n`);
            
            fs.writeFileSync(file, finalContent, 'utf8');
            console.log("Fixed duplicates in", file);
        }
    }
});
