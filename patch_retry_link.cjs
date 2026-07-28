const fs = require('fs');
let content = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');

const retryLinkHtml = `<br/><br/><a href="https://organicmushroomsfarm.com/training" style="background-color: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Retry Payment / Secure Your Seat</a>`;

content = content.replace(
  /We would love to have you in our training\.<br\/>/g,
  `We would love to have you in our training.<br/>${retryLinkHtml}<br/>`
);

content = content.replace(
  /Please attempt the payment again to secure your spot\. Let us know if you need any help\.<br\/>/g,
  `Please attempt the payment again to secure your spot. Let us know if you need any help.<br/>${retryLinkHtml}<br/>`
);

content = content.replace(
  /Feel free to reach out if you need any support\.<br\/>/g,
  `Feel free to reach out if you need any support.<br/>${retryLinkHtml}<br/>`
);

content = content.replace(
  /We are here to help if you face any issues!<br\/>/g,
  `We are here to help if you face any issues!<br/>${retryLinkHtml}<br/>`
);

content = content.replace(
  /contact us directly if you are facing any technical difficulties\.<br\/>/g,
  `contact us directly if you are facing any technical difficulties.<br/>${retryLinkHtml}<br/>`
);

content = content.replace(
  /Let us know if you need any assistance with the transaction!<br\/>/g,
  `Let us know if you need any assistance with the transaction!<br/>${retryLinkHtml}<br/>`
);

content = content.replace(
  /Any deducted amount will be refunded by your bank automatically\.<br\/>/g,
  `Any deducted amount will be refunded by your bank automatically.<br/>${retryLinkHtml}<br/>`
);

fs.writeFileSync('api/razorpay-webhook.ts', content);
console.log("Patched retry links");
