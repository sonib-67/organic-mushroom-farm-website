/**
 * Utility to verify Google reCAPTCHA token in Vercel Serverless Functions.
 * 
 * Usage inside your API routes (e.g., api/contact.ts):
 * 
 * import { verifyRecaptcha } from '../src/utils/verifyRecaptcha';
 * 
 * // inside your handler:
 * const isHuman = await verifyRecaptcha(req.body.captchaToken);
 * if (!isHuman) {
 *    return res.status(400).json({ error: "Spam detected!" });
 * }
 */
export async function verifyRecaptcha(token: string | undefined | null): Promise<boolean> {
    if (!token) return false;

    // Use your Vercel secret key environment variable
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6Ld_npUtAAAAAPOGE8uQu33ieNiOsFzPap7xTlOf";
    
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    
    try {
        const response = await fetch(verifyUrl, { method: 'POST' });
        const data = await response.json();
        return data.success === true;
    } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        return false;
    }
}
