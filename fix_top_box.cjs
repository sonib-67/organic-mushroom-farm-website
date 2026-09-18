const fs = require('fs');
let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

const topBoxStart = code.indexOf('<div className="bg-transparent border-b border-indigo-500');
if (topBoxStart !== -1) {
  const topBoxEnd = code.indexOf('</div>', topBoxStart) + 6;
  code = code.substring(0, topBoxStart) + code.substring(topBoxEnd);
  fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
  console.log('Removed top box');
}
