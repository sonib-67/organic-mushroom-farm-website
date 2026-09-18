const fs = require('fs');
let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');
code = code.replace(/}\s*}$/, '}');
fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
