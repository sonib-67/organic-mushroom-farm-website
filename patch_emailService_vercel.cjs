const fs = require('fs');

let code = fs.readFileSync('src/emailService.ts', 'utf8');

const processEmailCode = `
export const processEmailNotification = async (db: Firestore, docId: string, data: any) => {
  const emails = getEmails(data);

  try {
    // Send to Admin
    if (emails.adminEmail) {
      await transporter.sendMail({
        from: \`Organic Mushrooms Farm <\${process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com'}>\`,
        to: ADMIN_EMAIL,
        subject: emails.adminEmail.subject,
        html: emails.adminEmail.html
      });
      console.log(\`Admin email sent successfully for Order: \${docId}, Status: \${data.paymentStatus}\`);
    }

    // Send to User
    if (emails.userEmail && data.email) {
      await transporter.sendMail({
        from: \`Organic Mushrooms Farm <\${process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com'}>\`,
        to: data.email,
        subject: emails.userEmail.subject,
        html: emails.userEmail.html
      });
      console.log(\`User email sent successfully for Order: \${docId}, Status: \${data.paymentStatus}\`);
    }

    const updates: any = { notificationSent: true };
    if (data.paymentStatus === 'CANCELLED' || data.paymentStatus === 'FAILED') {
      updates.repaymentEmailSent = true;
    }

    // Mark as sent
    await updateDoc(doc(db, 'registrations', docId), updates);
  } catch (error) {
    console.error(\`Error processing email for doc \${docId}:\`, error);
    // In production, we don't mark it as sent so it retries (though on Vercel retries would need a cron or queue, but logging is fine for now)
  }
};
`;

code = code + '\n' + processEmailCode;

fs.writeFileSync('src/emailService.ts', code);
console.log("emailService patched.");
