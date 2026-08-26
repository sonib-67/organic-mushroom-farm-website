const fs = require('fs');

const createContent = `
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createIntlOrder } from '../src/api/internationalPayment';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    return createIntlOrder(req, res);
  }
  res.status(405).json({ error: 'Method Not Allowed' });
}
`;

const captureContent = `
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { captureIntlOrder } from '../src/api/internationalPayment';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    return captureIntlOrder(req, res);
  }
  res.status(405).json({ error: 'Method Not Allowed' });
}
`;

const failContent = `
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { failIntlOrder } from '../src/api/internationalPayment';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    return failIntlOrder(req, res);
  }
  res.status(405).json({ error: 'Method Not Allowed' });
}
`;

fs.writeFileSync('api/intl-create-order.ts', createContent);
fs.writeFileSync('api/intl-capture-order.ts', captureContent);
fs.writeFileSync('api/intl-fail-order.ts', failContent);
console.log("Created API files");
