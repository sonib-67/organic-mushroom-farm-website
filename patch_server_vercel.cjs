const fs = require('fs');

let serverCode = fs.readFileSync('server.ts', 'utf8');

// 1. Change import
serverCode = serverCode.replace(
  "import { setupEmailListener } from './src/emailService';",
  "import { processEmailNotification } from './src/emailService';"
);

// 2. Remove setupEmailListener call
serverCode = serverCode.replace("setupEmailListener(db);", "// setupEmailListener removed for Vercel compatibility");

// 3. Inject processEmailNotification in /api/create-order
// After setting doc in registrations
serverCode = serverCode.replace(
  /await setDoc\(doc\(db, 'registrations', order\.id\), \{([\s\S]*?)\}\);/,
  (match, p1) => {
    return 'const regData = {' + p1 + '};\n' +
           '      await setDoc(doc(db, \'registrations\', order.id), regData);\n' +
           '      // Vercel fix: send email synchronously\n' +
           '      processEmailNotification(db, order.id, regData).catch(err => console.error("Email send error:", err));';
  }
);

// 4. Inject processEmailNotification in /api/razorpay-webhook
// We need to fetch the existing doc, merge the update, and send email.
serverCode = serverCode.replace(
  /await setDoc\(doc\(db, 'registrations', targetOrderId\), \{([\s\S]*?)\}, \{ merge: true \}\);/g,
  (match, p1) => {
    return 'await setDoc(doc(db, \'registrations\', targetOrderId), {' + p1 + '}, { merge: true });\n' +
           '                // Vercel fix: Fetch doc and send email synchronously\n' +
           '                try {\n' +
           '                  const updatedDocSnap = await getDoc(doc(db, \'registrations\', targetOrderId));\n' +
           '                  if (updatedDocSnap.exists()) {\n' +
           '                    await processEmailNotification(db, targetOrderId, updatedDocSnap.data());\n' +
           '                  }\n' +
           '                } catch(e) {\n' +
           '                  console.error("Failed to send webhook email:", e);\n' +
           '                }';
  }
);

fs.writeFileSync('server.ts', serverCode);
console.log("Server patched for Vercel.");
