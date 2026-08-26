const fs = require('fs');

const intlPaymentCode = fs.readFileSync('src/api/internationalPayment.ts', 'utf8');

// Strip out the "export " from the functions so they become local functions
let localFunctions = intlPaymentCode.replace(/export const/g, 'const');

const newIntlCode = `
import type { VercelRequest, VercelResponse } from '@vercel/node';

${localFunctions}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const action = req.query.action;
  if (req.method === 'POST') {
    if (action === 'create') return createIntlOrder(req, res);
    if (action === 'capture') return captureIntlOrder(req, res);
    if (action === 'fail') return failIntlOrder(req, res);
  }
  return res.status(405).json({ error: 'Method Not Allowed or Invalid Action' });
}
`;

fs.writeFileSync('api/intl.ts', newIntlCode);
console.log("Merged logic directly into api/intl.ts");
