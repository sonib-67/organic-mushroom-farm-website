export const getLiquidTemplate = (title: string, message: string, orderId: string = '', extraHtml: string = '') => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #fff3e0 0%, #f3e5f5 50%, #e1bee7 100%);
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 15px 35px rgba(156, 39, 176, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .container::before {
          content: "";
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle at top left, rgba(255, 183, 77, 0.25), transparent 40%),
                      radial-gradient(circle at bottom right, rgba(186, 104, 200, 0.25), transparent 40%);
          z-index: 0;
          pointer-events: none;
        }
        .content {
          position: relative;
          z-index: 1;
        }
        h1 {
          color: #9c27b0;
          font-size: 28px;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(255,255,255,0.9);
          font-weight: 800;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          color: #4a4a4a;
        }
        .ticket-id {
          display: inline-block;
          margin: 20px 0;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          font-weight: bold;
          color: #f57c00;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 10px rgba(245, 124, 0, 0.1), inset 0 2px 5px rgba(255,255,255,1);
          letter-spacing: 1px;
        }
        .btn {
          display: inline-block;
          margin-top: 30px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #ff9800 0%, #ab47bc 100%);
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
          border-radius: 30px;
          box-shadow: 0 8px 25px rgba(171, 71, 188, 0.4), inset 0 2px 4px rgba(255,255,255,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(171, 71, 188, 0.6);
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #888;
        }
        table {
          width: 100%;
          text-align: left;
          border-collapse: collapse;
          margin-top: 25px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 12px;
          overflow: hidden;
        }
        table td {
          padding: 12px 15px;
          border-bottom: 1px solid rgba(255,255,255,0.6);
        }
        table tr:last-child td {
          border-bottom: none;
        }
        table td:first-child {
          font-weight: bold;
          color: #7b1fa2;
          width: 35%;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="content">
          <h1>Organic Mushroom Farm</h1>
          <h2>${title}</h2>
          ${orderId ? `<div class="ticket-id">ID: ${orderId}</div>` : ''}
          <p>${message}</p>
          ${extraHtml}
          <a href="https://organicmushroomsfarm.com" class="btn">Visit Us</a>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;
};
