import { transporter, MAIL_FROM, getLiquidTemplate } from './api/_utils/mailer.ts';
async function test() {
  try {
    console.log("Sending...");
    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      subject: 'Test Email',
      html: getLiquidTemplate('Test', 'This is a test email', 'TEST-123')
    });
    console.log("Sent successfully");
  } catch (e) {
    console.error("Error:", e);
  }
}
test();
