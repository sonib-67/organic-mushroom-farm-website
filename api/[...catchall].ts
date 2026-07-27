import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const path = req.query.catchall ? (Array.isArray(req.query.catchall) ? req.query.catchall.join('/') : req.query.catchall) : '';
  res.status(404).send(`Cannot ${req.method} /api/${path}`);
}
