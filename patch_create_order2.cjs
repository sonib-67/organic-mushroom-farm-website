const fs = require('fs');
let code = fs.readFileSync('api/create-order.ts', 'utf8');

// Remove processEmailNotification call
code = code.replace(
  /await processEmailNotification\(db, order\.id, regData\);/g,
  "// Email for INITIATED status is not required."
);
code = code.replace(
  /import \{ processEmailNotification \} from '\.\.\/src\/emailService';\n/g,
  ""
);

fs.writeFileSync('api/create-order.ts', code);
console.log("Patched create-order.ts");
