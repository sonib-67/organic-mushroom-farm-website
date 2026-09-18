const fs = require('fs');
let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');
const lastIndex = code.lastIndexOf('}');
if (lastIndex !== -1) {
  // Check if there is another '}' right before it
  let secondLastIndex = code.lastIndexOf('}', lastIndex - 1);
  // Just trim any trailing whitespace and `}` characters until only one `}` remains after the return statement.
  
  // A safe way is to find `);` which is the end of the return statement, and then ensure exactly one `}` follows it.
  const returnEndIndex = code.lastIndexOf(');');
  if (returnEndIndex !== -1) {
    code = code.substring(0, returnEndIndex + 2) + '\n}\n';
  }
}
fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
