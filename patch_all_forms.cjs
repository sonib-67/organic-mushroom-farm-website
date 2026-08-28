const fs = require('fs');
const glob = require('glob'); // Or just simple recursive read if we want

const files = [
  'src/pages/MushroomTypeDetails.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/ContactForm.tsx',
  'src/pages/EnquiryPage.tsx',
  'src/pages/SpawnSeed.tsx',
  'src/App.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // We will replace the fetch call block.
    // Instead of regex replacing the multiline fetch, 
    // it's easier to inject the redirect right at the beginning of the `try {` block 
    // where the fetch is, or just replace the string `await fetch('/api/contact'` 
    // and `await fetch("/api/contact"` with the redirect.
    // Wait, if I replace `await fetch(...)`, there might be variable assignment:
    // `const response = await fetch(...)` -> `const response = window.location.href = '/under-maintenance'; return;`
    // This will cause a syntax error if it's inside an async function like `const response = ...`
    
    // Let's replace the whole `try {` block for the fetch, or just insert at `handleSubmit` definition
    content = content.replace(/const handleSubmit = async \((.*?)\) => {/g, 'const handleSubmit = async ($1) => {\n    window.location.href = "/under-maintenance";\n    return;');
    
    // Some might not use `const handleSubmit`, but rather `onSubmit={async (e) => {`
    // Or we can just find `"/api/contact"` and replace the `try {` block above it, but that's hard to parse.
    fs.writeFileSync(file, content, 'utf8');
    console.log('Patched', file);
  }
}
