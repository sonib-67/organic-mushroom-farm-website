
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createIntlOrder } from '../src/api/internationalPayment';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    return createIntlOrder(req, res);
  }
  res.status(405).json({ error: 'Method Not Allowed' });
}
