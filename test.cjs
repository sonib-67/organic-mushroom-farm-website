const fs = require('fs');
console.log(fs.readFileSync('src/App.tsx', 'utf8').substring(1230, 1300));
