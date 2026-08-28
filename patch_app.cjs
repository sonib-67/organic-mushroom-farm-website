const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const honeypotHtml = `
              {/* HONEYPOT FIELD - DO NOT REMOVE */}
              <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="middleName" tabIndex={-1} autoComplete="off" />
              </div>`;

content = content.replace(/(<form[^>]*>)/g, `$1${honeypotHtml}`);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx HTML forms");
