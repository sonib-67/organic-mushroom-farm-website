import { transporter, MAIL_FROM, getLiquidTemplate } from './api/_utils/mailer.ts';

async function test() {
  try {
    console.log("Sending email to gamingbuddyzone@gmail.com...");
    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: 'gamingbuddyzone@gmail.com',
      subject: 'Test Email 2',
      html: getLiquidTemplate('Test', 'This is a test email', 'TEST-123')
    });
    console.log("Sent successfully:", info.messageId);
  } catch (e) {
    console.error("Error:", e);
  }
}
test();
