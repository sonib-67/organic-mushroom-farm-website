import * as nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'organicmushroomsfarms@gmail.com',
    pass: process.env.EMAIL_PASS || 'jzqqntulcifrfyul'
  }
});

export const MAIL_FROM = '"Organic Mushroom Farm" <organicmushroomsfarms@gmail.com>';
export const REPLY_TO = 'no-reply@organicmushroomsfarm.com';

const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #fcebe5 0%, #f3e8fc 100%);
    color: #333;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    padding: 30px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 
      0 10px 30px rgba(180, 150, 200, 0.2), 
      inset 0 1px 0 rgba(255, 255, 255, 0.8),
      inset 0 -2px 10px rgba(255, 180, 140, 0.1);
    position: relative;
    overflow: hidden;
  }
  .container::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle at center, rgba(255,150,100,0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  .content {
    position: relative;
    z-index: 1;
  }
  .header {
    text-align: center;
    margin-bottom: 30px;
  }
  .logo {
    font-weight: 800;
    font-size: 28px;
    background: linear-gradient(90deg, #ff8c42, #9b51e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 10px rgba(155, 81, 224, 0.2);
  }
  .ticket-id {
    display: inline-block;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    font-weight: 600;
    color: #5a3d7c;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    margin: 15px 0;
  }
  .btn {
    display: inline-block;
    padding: 14px 28px;
    margin-top: 25px;
    background: linear-gradient(135deg, #ff8c42 0%, #9b51e0 100%);
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    border-radius: 30px;
    box-shadow: 0 6px 20px rgba(155, 81, 224, 0.4), inset 0 -2px 5px rgba(0,0,0,0.2), inset 0 2px 5px rgba(255,255,255,0.4);
    transition: transform 0.2s ease;
  }
  .details-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  .details-table td {
    padding: 12px;
    border-bottom: 1px solid rgba(155, 81, 224, 0.1);
  }
  .details-table td:first-child {
    font-weight: 600;
    color: #5a3d7c;
    width: 40%;
  }
`;

export const getLiquidTemplate = (title: string, body: string, ticketId: string, extraHtml: string = '') => `
<!DOCTYPE html>
<html>
<head>
<style>${baseStyles}</style>
</head>
<body>
  <div class="container">
    <div class="content">
      <div class="header">
        <div class="logo">Organic Mushroom Farm</div>
        <div class="ticket-id">ID: ${ticketId}</div>
      </div>
      <h2 style="color: #4a2b6c; margin-top: 0;">${title}</h2>
      <p style="font-size: 16px; line-height: 1.6; color: #444;">${body}</p>
      ${extraHtml}
      <div style="text-align: center;">
        <a href="https://organicmushroomfarms.com" class="btn">Visit Us</a>
      </div>
      <p style="font-size: 12px; color: #888; text-align: center; margin-top: 40px;">
        &copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
`;
