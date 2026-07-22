const fs = require('fs');

let code = fs.readFileSync('server.ts', 'utf8');

// 1. replace import
code = code.replace(
  "import { setupEmailListener } from './src/emailService';",
  "import { processEmailsForRegistration } from './src/emailService';"
);

// 2. remove setupEmailListener(db);
code = code.replace("setupEmailListener(db);", "");

// 3. Add to /api/create-order
code = code.replace(
  `        paymentId: "",
        orderId: order.id,
        createdAt: new Date().toISOString(),
        notificationSent: false
      });
    } catch (e) {`,
  `        paymentId: "",
        orderId: order.id,
        createdAt: new Date().toISOString(),
        notificationSent: false
      });
      // Send INITIATED email
      processEmailsForRegistration(order.id, {
        name: name || "",
        email: email || "",
        mobile: mobile || "",
        amount: amount / 100,
        productType: productType || "",
        paymentStatus: "INITIATED",
        paymentId: "",
        orderId: order.id,
        createdAt: new Date().toISOString(),
        notificationSent: false
      }, db);
    } catch (e) {`
);

// 4. Add to /api/payment-cancelled
code = code.replace(
  `        paymentStatus: 'CANCELLED',
        notificationSent: false
      }, { merge: true });
    }`,
  `        paymentStatus: 'CANCELLED',
        notificationSent: false
      }, { merge: true });
      
      const docSnap = await getDoc(doc(db, 'registrations', orderId));
      if (docSnap.exists()) {
         processEmailsForRegistration(orderId, docSnap.data(), db);
      }
    }`
);

// 5. Add to Webhook SUCCESS
code = code.replace(
  `                await setDoc(doc(db, 'registrations', targetOrderId), {
                    paymentStatus: 'SUCCESS',
                    paymentId: payment.id,
                    notificationSent: false
                }, { merge: true });
            }`,
  `                await setDoc(doc(db, 'registrations', targetOrderId), {
                    paymentStatus: 'SUCCESS',
                    paymentId: payment.id,
                    notificationSent: false
                }, { merge: true });
                const docSnap = await getDoc(doc(db, 'registrations', targetOrderId));
                if (docSnap.exists()) {
                    processEmailsForRegistration(targetOrderId, docSnap.data(), db);
                }
            }`
);

// 6. Add to Webhook FAILED
code = code.replace(
  `                await setDoc(doc(db, 'registrations', targetOrderId), {
                    paymentStatus: 'FAILED',
                    paymentId: payment.id,
                    notificationSent: false
                }, { merge: true });
            }`,
  `                await setDoc(doc(db, 'registrations', targetOrderId), {
                    paymentStatus: 'FAILED',
                    paymentId: payment.id,
                    notificationSent: false
                }, { merge: true });
                const docSnap = await getDoc(doc(db, 'registrations', targetOrderId));
                if (docSnap.exists()) {
                    processEmailsForRegistration(targetOrderId, docSnap.data(), db);
                }
            }`
);

fs.writeFileSync('server.ts', code);
console.log("Emails patched.");
