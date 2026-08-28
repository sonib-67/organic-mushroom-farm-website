const fs = require('fs');
const glob = require('glob');

const pages = glob.sync('src/pages/**/*.tsx');
pages.push('src/App.tsx');

const honeypotHtml = `
              {/* HONEYPOT FIELD - DO NOT REMOVE */}
              <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="middleName" tabIndex={-1} autoComplete="off" />
              </div>
`;

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Inject right before </form>
    if (content.includes('</form>')) {
        content = content.replace(/(<\/form>)/g, `${honeypotHtml}$1`);
    }
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log("Patched", file);
    }
});
