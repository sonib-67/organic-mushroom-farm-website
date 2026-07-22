const fs = require('fs');
let code = fs.readFileSync('src/emailService.ts', 'utf8');

// We will add an exported function processEmailsForRegistration
const newFunc = `
export const processEmailsForRegistration = async (docId: string, data: any, db: Firestore) => {
  const emails = getEmails(data);
  if (!emails) return;

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
  }
};
`;

if (!code.includes('processEmailsForRegistration')) {
    code += newFunc;
    fs.writeFileSync('src/emailService.ts', code);
    console.log("processEmailsForRegistration added.");
}
