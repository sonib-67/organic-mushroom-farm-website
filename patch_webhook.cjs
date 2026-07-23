const fs = require('fs');
let code = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

code = code.replace("import { getFirestore, collection, addDoc, setDoc, doc, getDocs, query, where } from \"firebase/firestore\";", "import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc, query, where } from \"firebase/firestore\";\nimport { processEmailNotification } from '../src/emailService';");

// find "await setDoc(doc(db, 'payments', payment.id)" and we also need to update 'registrations' table.
// In the 'payment.captured' block, let's inject registrations update.
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

// Insert it into payment.captured block. We can put it right before "if (productType === "consultation") {"
code = code.replace('if (productType === "consultation") {', capturedInjection + '\n                if (productType === "consultation") {');

// Now for 'payment.failed'
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

code = code.replace('} catch (firestoreError) {', failedInjection + '\n            } catch (firestoreError) {');

fs.writeFileSync('api/razorpay-webhook.ts', code);
console.log("api/razorpay-webhook.ts updated");
