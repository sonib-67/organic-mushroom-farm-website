const fs = require('fs');

let code = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

// I will remove the two injected blocks from payment.captured
code = code.replace(/const targetOrderId =[\s\S]*?console\.error\("Failed to send webhook email:", e\);\n\s*\}\n\s*\}/g, "");

// Now inject cleanly.
// Inside payment.captured, right before "if (productType === "consultation") {"
const successInjection = `
                const capturedTargetOrderId = notes.repayForOrderId || payment.order_id;
                if (capturedTargetOrderId) {
                    await setDoc(doc(db, 'registrations', capturedTargetOrderId), {
                        paymentStatus: 'SUCCESS',
                        paymentId: payment.id,
                        notificationSent: false
                    }, { merge: true });
                    try {
                      const updatedDocSnap = await getDoc(doc(db, 'registrations', capturedTargetOrderId));
                      if (updatedDocSnap.exists()) {
                        await processEmailNotification(db, capturedTargetOrderId, updatedDocSnap.data());
                      }
                    } catch(e) {
                      console.error("Failed to send webhook email:", e);
                    }
                }
`;
code = code.replace('if (productType === "consultation") {', successInjection + '                if (productType === "consultation") {');

// Inside payment.failed, right after `created_at: new Date().toISOString()`
code = code.replace(/created_at: new Date\(\)\.toISOString\(\)\n\s*\}, \{ merge: true \}\);/, (match) => {
  return match + `
                const failedTargetOrderId = notes.repayForOrderId || payment.order_id;
                if (failedTargetOrderId) {
                    await setDoc(doc(db, 'registrations', failedTargetOrderId), {
                        paymentStatus: 'FAILED',
                        paymentId: payment.id,
                        notificationSent: false
                    }, { merge: true });
                    try {
                      const updatedDocSnap = await getDoc(doc(db, 'registrations', failedTargetOrderId));
                      if (updatedDocSnap.exists()) {
                        await processEmailNotification(db, failedTargetOrderId, updatedDocSnap.data());
                      }
                    } catch(e) {
                      console.error("Failed to send webhook email:", e);
                    }
                }
`;
});

fs.writeFileSync('api/razorpay-webhook.ts', code);
console.log("api/razorpay-webhook.ts fixed again.");
