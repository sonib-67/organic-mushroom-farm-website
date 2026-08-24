import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Allow OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { captchaToken } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ error: 'Captcha token is missing' });
  }

  // Use the secret key from Vercel environment variables, or fallback to the provided key
  const secretKey =
    process.env.RECAPTCHA_SECRET_KEY ||
    '6Ld_npUtAAAAAPOGE8uQu33ieNiOsFzPap7xTlOf';

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  try {
    const googleRes = await fetch(verifyUrl, { method: 'POST' });
    const googleData = await googleRes.json();

    if (!googleData.success) {
      console.error('Captcha verification failed:', googleData);
      return res
        .status(400)
        .json({ success: false, error: 'Captcha verification failed' });
    }

    // Captcha is valid
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error verifying captcha:', error);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}
