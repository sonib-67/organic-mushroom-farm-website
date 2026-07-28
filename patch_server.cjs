const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

if (!code.includes('/api/payment-notification')) {
  const insertCode = `
import { handlePaymentNotification } from './api/payment-notification';

app.post('/api/payment-notification', express.json(), async (req, res) => {
  try {
    await handlePaymentNotification(req.body);
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Payment notification error:", error);
    return res.status(500).json({ error: error.message });
  }
});
`;

  // Find a good place to insert it (after contact API route)
  code = code.replace("app.post('/api/contact', express.json(), async (req, res) => {", insertCode + "\napp.post('/api/contact', express.json(), async (req, res) => {");
  fs.writeFileSync('server.ts', code);
}
