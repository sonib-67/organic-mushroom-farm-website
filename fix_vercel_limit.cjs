const fs = require('fs');

// 1. Create single API file
const intlContent = `
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createIntlOrder, captureIntlOrder, failIntlOrder } from '../src/api/internationalPayment';

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
fs.writeFileSync('api/intl.ts', intlContent);

// 2. Remove the 3 separate files
try { fs.unlinkSync('api/intl-create-order.ts'); } catch(e){}
try { fs.unlinkSync('api/intl-capture-order.ts'); } catch(e){}
try { fs.unlinkSync('api/intl-fail-order.ts'); } catch(e){}

// 3. Update Frontend to use query params
let checkoutContent = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');
checkoutContent = checkoutContent.replace(/\/api\/intl-create-order/g, '/api/intl?action=create');
checkoutContent = checkoutContent.replace(/\/api\/intl-capture-order/g, '/api/intl?action=capture');
checkoutContent = checkoutContent.replace(/\/api\/intl-fail-order/g, '/api/intl?action=fail');
fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', checkoutContent);

console.log("Vercel limit fixed: Consolidated to 1 file");
