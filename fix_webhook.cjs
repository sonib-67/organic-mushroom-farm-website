const fs = require('fs');
let code = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

// The failed injection was placed at line 292 which is inside the catch of payment.captured.
// We need to remove the first occurrence of the failed injection.
const failedInjection = `
                const targetOrderId = notes.repayForOrderId || payment.order_id;
                if (targetOrderId) {
                    await setDoc(doc(db, 'registrations', targetOrderId), {
                        paymentStatus: 'FAILED',
                        paymentId: payment.id,
                        notificationSent: false
                    }, { merge: true });
                    
                    try {
                      const updatedDocSnap = await getDoc(doc(db, 'registrations', targetOrderId));
                      if (updatedDocSnap.exists()) {
                        await processEmailNotification(db, targetOrderId, updatedDocSnap.data());
                      }
                    } catch(e) {
                      console.error("Failed to send webhook email:", e);
                    }
                }
`;

// It might be easier to just remove all `targetOrderId` stuff and re-apply correctly.
code = code.replace(/const targetOrderId =[\s\S]*?console\.error\("Failed to send webhook email:", e\);\n\s*\}\n\s*\}/g, "");

// Re-apply in the correct places.
// In payment.captured:
const capturedInjection = `
                const targetOrderId = notes.repayForOrderId || payment.order_id;
                if (targetOrderId) {
                    await setDoc(doc(db, 'registrations', targetOrderId), {
                        paymentStatus: 'SUCCESS',
                        paymentId: payment.id,
                        notificationSent: false
                    }, { merge: true });
                    try {
                      const updatedDocSnap = await getDoc(doc(db, 'registrations', targetOrderId));
                      if (updatedDocSnap.exists()) {
                        await processEmailNotification(db, targetOrderId, updatedDocSnap.data());
                      }
                    } catch(e) {
                      console.error("Failed to send webhook email:", e);
                    }
                }
`;

code = code.replace('if (productType === "consultation") {', capturedInjection + '                if (productType === "consultation") {');

// For payment.failed, let's find the 'payment_status: 'failed'' in setDoc.
code = code.replace(
  "payment_status: 'failed',",
  "payment_status: 'failed',"
);

// We'll inject after the setDoc of 'payments'.
code = code.replace(
  /await setDoc\(doc\(db, 'payments', payment\.id\), \{[\s\S]*?\}, \{ merge: true \}\);/,
  (match) => {
    return match + `
                const targetOrderId = notes.repayForOrderId || payment.order_id;
                if (targetOrderId) {
                    await setDoc(doc(db, 'registrations', targetOrderId), {
                        paymentStatus: 'FAILED',
                        paymentId: payment.id,
                        notificationSent: false
                    }, { merge: true });
                    try {
                      const updatedDocSnap = await getDoc(doc(db, 'registrations', targetOrderId));
                      if (updatedDocSnap.exists()) {
                        await processEmailNotification(db, targetOrderId, updatedDocSnap.data());
                      }
                    } catch(e) {
                      console.error("Failed to send webhook email:", e);
                    }
                }
`;
  }
);

// Also need to fix import crypto and import Razorpay.
// TS error: Module '"crypto"' has no default export. -> import * as crypto from 'crypto';
code = code.replace("import crypto from 'crypto';", "import * as crypto from 'crypto';");

fs.writeFileSync('api/razorpay-webhook.ts', code);

// Fix create-order.ts and repay-order.ts
let createOrder = fs.readFileSync('api/create-order.ts', 'utf8');
createOrder = createOrder.replace("import Razorpay from 'razorpay';", "import * as RazorpayLib from 'razorpay';\nconst Razorpay = (RazorpayLib as any).default || RazorpayLib;");
createOrder = createOrder.replace("import crypto from 'crypto';", "import * as crypto from 'crypto';");
fs.writeFileSync('api/create-order.ts', createOrder);

let repayOrder = fs.readFileSync('api/repay-order.ts', 'utf8');
repayOrder = repayOrder.replace("import Razorpay from 'razorpay';", "import * as RazorpayLib from 'razorpay';\nconst Razorpay = (RazorpayLib as any).default || RazorpayLib;");
fs.writeFileSync('api/repay-order.ts', repayOrder);

console.log("All files fixed.");
