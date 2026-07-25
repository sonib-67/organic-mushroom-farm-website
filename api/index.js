import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'organicmushroomsfarms@gmail.com',
        pass: process.env.EMAIL_PASS || 'jzqqntulcifrfyul'
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, location, farmSize, budget, message, _subject } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_USER || 'organicmushroomsfarms@gmail.com',
            to: process.env.EMAIL_USER || 'organicmushroomsfarms@gmail.com',
            subject: _subject || `New Contact from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location || 'N/A'}
Farm Size: ${farmSize || 'N/A'}
Budget: ${budget || 'N/A'}

Message:
${message}
            `
        };

        const autoReplyOptions = {
            from: process.env.EMAIL_USER || 'organicmushroomsfarms@gmail.com',
            to: email,
            subject: 'Thank you for contacting Organic Mushrooms Farm!',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, rgba(255,167,38,0.15), rgba(156,39,176,0.15), rgba(76,175,80,0.15)); padding: 40px; border-radius: 20px; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);">
                    <div style="background: rgba(255, 255, 255, 0.6); padding: 30px; border-radius: 15px;">
                        <h2 style="color: #333; margin-top: 0;">Hi ${name},</h2>
                        <p style="color: #444; line-height: 1.6;">Thank you for getting in touch with <strong>Organic Mushrooms Farm</strong>.</p>
                        <p style="color: #444; line-height: 1.6;">We have received your message and our team will get back to you shortly.</p>
                        <p style="color: #444; line-height: 1.6;">Here is a copy of your message:</p>
                        <blockquote style="background: rgba(255,255,255,0.5); padding: 15px; border-left: 4px solid #4CAF50; margin: 20px 0; border-radius: 4px;">
                            ${message}
                        </blockquote>
                        <p style="color: #444; line-height: 1.6; margin-bottom: 0;">Best regards,<br><strong>Organic Mushrooms Farm Team</strong></p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoReplyOptions);

        res.status(200).json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

export default app;
