import nodemailer from 'nodemailer';

const user = process.env.EMAIL_USER || process.env.SMTP_USER || 'organicmushroomsfarms@gmail.com';
const pass = process.env.EMAIL_PASS || process.env.SMTP_PASS || 'jzqqntulcifrfyul';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user,
    pass,
  },
});

export const MAIL_FROM = `"Organic Mushroom Farm" <${user}>`;
export const REPLY_TO = 'no-reply@organicmushroomsfarm.com';

