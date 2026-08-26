
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
