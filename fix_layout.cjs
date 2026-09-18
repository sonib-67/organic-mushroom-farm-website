const fs = require('fs');

let code = fs.readFileSync('app/layout.tsx', 'utf8');

// The scripts are currently in <head>. We will move them to <body>.
// We have to extract them.
const headStart = code.indexOf('<head>');
const headEnd = code.indexOf('</head>');

let headContent = code.substring(headStart + 6, headEnd);

// Extract all <Script ...> ... </Script> or <Script ... />
const scriptRegex = /<Script[\s\S]*?(?:<\/Script>|\/>)/g;
const scripts = [];
let match;
while ((match = scriptRegex.exec(headContent)) !== null) {
  scripts.push(match[0]);
}

// Remove scripts from headContent
let newHeadContent = headContent.replace(/<Script[\s\S]*?(?:<\/Script>|\/>)/g, '');

// Put scripts in body
const bodyStart = code.indexOf('<body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">') + '<body className="antialiased min-h-screen flex flex-col relative overflow-x-hidden">'.length;

let newCode = code.substring(0, headStart + 6) + newHeadContent + code.substring(headEnd, bodyStart) + '\n' + scripts.join('\n') + '\n' + code.substring(bodyStart);

fs.writeFileSync('app/layout.tsx', newCode);
