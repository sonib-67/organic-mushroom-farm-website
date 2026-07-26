const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const importsToAdd = `
import { transporter, MAIL_FROM, REPLY_TO, getLiquidTemplate } from './api/_utils/mailer';
import { generateInvoicePDF } from './api/_utils/pdf';
`;

content = content.replace("import geoip from 'geoip-lite';", "import geoip from 'geoip-lite';\n" + importsToAdd);

const enquiryRoute = `
app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, email, phone, message, subject } = req.body;
    const ticketId = 'TKT-' + crypto.randomBytes(4).toString('hex').toUpperCase();

    const extraHtml = \`
      <table class="details-table">
        <tr><td>Name:</td><td>\${name || 'N/A'}</td></tr>
        <tr><td>Email:</td><td>\${email || 'N/A'}</td></tr>
        <tr><td>Phone:</td><td>\${phone || 'N/A'}</td></tr>
        <tr><td>Subject:</td><td>\${subject || 'General Enquiry'}</td></tr>
        <tr><td>Message:</td><td>\${message || 'N/A'}</td></tr>
      </table>
    \`;

    const adminHtml = getLiquidTemplate(
      'New Enquiry Received',
      'A new enquiry has been submitted on the website.',
      ticketId,
      extraHtml
    );

    await transporter.sendMail({
      from: MAIL_FROM,
      to: 'organicmushroomsfarms@gmail.com',
      replyTo: REPLY_TO,
      subject: \`New Enquiry [\${ticketId}] - \${subject || 'Website'}\`,
      html: adminHtml
    });

    if (email) {
      const customerHtml = getLiquidTemplate(
        'Thank You for Your Enquiry',
        \`Dear \${name || 'Customer'},<br/><br/>We have received your enquiry and our team will get back to you shortly. Below is a copy of your submitted details for your reference.\`,
        ticketId,
        extraHtml
      );

      await transporter.sendMail({
        from: MAIL_FROM,
        to: email,
        replyTo: REPLY_TO,
        subject: \`Enquiry Received - Ticket \${ticketId}\`,
        html: customerHtml
      });
    }

    res.status(200).json({ success: true, ticketId });
  } catch (error) {
    console.error('Enquiry Error:', error);
    res.status(500).json({ error: 'Failed to submit enquiry' });
  }
});
`;

content = content.replace("app.post('/api/create-order', async (req, res) => {", enquiryRoute + "\napp.post('/api/create-order', async (req, res) => {");

fs.writeFileSync('server.ts', content);
