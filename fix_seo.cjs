const fs = require('fs');

function addSeoH2(filePath, componentName, seoText) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Try to find the h1 and insert after it
  const regex = new RegExp(`(const ${componentName} =.*?<h1[^>]*>.*?</h1>)`, 's');
  
  if (regex.test(content)) {
    content = content.replace(regex, `$1\n          <h2 className="sr-only">${seoText}</h2>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added to ${componentName} in ${filePath} (after H1)`);
    return;
  }
  
  // If no H1 found, insert at the beginning of the return statement or top wrapper
  const regexReturn = new RegExp(`(const ${componentName} =.*?return\\s*\\(\\s*<(?:>|[a-zA-Z]+[^>]*>))`, 's');
  if (regexReturn.test(content)) {
    content = content.replace(regexReturn, `$1\n        <h2 className="sr-only">${seoText}</h2>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added to ${componentName} in ${filePath} (after return)`);
    return;
  }
  
  console.log(`Could not add to ${componentName} in ${filePath}`);
}

addSeoH2('src/App.tsx', 'TrainingPage', 'Master Commercial Mushroom Farming: Comprehensive Training Programs');

