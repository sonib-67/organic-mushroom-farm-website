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
const honeypotSnippet = `\n                                {/* HONEYPOT FIELD - DO NOT REMOVE */}\n                                <input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />\n`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Using a regex to find <form ... > and insert after it
    // Wait, regex for html tags can be tricky if it spans multiple lines.
    // Let's just find "onSubmit={" and the nearest ">"
    // Actually, `<form` is easier:
    
    // Simple replacement: replace `<form ` with `<form ` and if we find the closing bracket `>` of the form tag, we inject.
    // It's safer to just do a precise regex: /<form([^>]*)>/gi -> `<form$1>${honeypotSnippet}`
    // But what if it's self-closing? (forms are never self-closing).
    
    const newContent = content.replace(/<form\b([^>]*)>/g, `<form$1>${honeypotSnippet}`);
    
    if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Updated", file);
    }
});
