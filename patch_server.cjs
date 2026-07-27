const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const regexBody = /const \{ name, email, phone, subject, message, service \} = req\.body;/;
content = content.replace(regexBody, 'const { name, email, phone, subject, message, service, trainingMode, mushroomVariety } = req.body;');

const regexEmailTemplate = /<div class="content">\s*<p>Hi <strong>\$\{name\}<\/strong>,<\/p>\s*<p>Thank you for reaching out to us! We have received your message regarding <strong>\$\{subject \|\| 'your enquiry'\}<\/strong>\.<\/p>\s*<p>Our team is reviewing it and will get back to you as soon as possible\.<\/p>\s*<p style="margin-top: 25px;">Warm regards,<br\/><strong>The Organic Mushroom Farm Team<\/strong><\/p>\s*<\/div>/;

const newEmailTemplate = `<div class="content">\n            \${getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety)}\n          </div>`;

content = content.replace(regexEmailTemplate, newEmailTemplate);

const userMessageFunc = `
function getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety) {
  if (service === 'TRAINING') {
    const isOnline = trainingMode && trainingMode.toLowerCase().includes('online');
    const varietyName = mushroomVariety || 'All Varieties Combined';
    
    if (isOnline) {
      if (varietyName.includes('All Varieties')) {
        return \`
          <p>Hi <strong>\${name}</strong>,</p>
          <p>Thank you for reaching out to us! We have received your message regarding a new enquiry for Online Mushroom Training.</p>
          <p>We are thrilled to see your interest in mastering All Major Mushroom Varieties from the comfort of your home. Our comprehensive online program will cover everything you need to succeed.</p>
          <p>Our team is reviewing your details and will get back to you shortly with the complete syllabus, schedule, and next steps.</p>
          <p style="margin-top: 25px;">Warm regards,<br/><strong>The Organic Mushroom Farm Team</strong></p>
        \`;
      } else {
        return \`
          <p>Hi <strong>\${name}</strong>,</p>
          <p>Thank you for reaching out to us! We have received your message regarding a new enquiry for Online Mushroom Training.</p>
          <p>We are excited to help you learn \${varietyName} cultivation from the comfort of your home. Our expert-led online sessions are designed to give you step-by-step guidance.</p>
          <p>Our team is reviewing your details and will get back to you shortly with the online training schedule and next steps.</p>
          <p style="margin-top: 25px;">Warm regards,<br/><strong>The Organic Mushroom Farm Team</strong></p>
        \`;
      }
    } else {
      // Offline
      if (varietyName.includes('All Varieties')) {
        return \`
          <p>Hi <strong>\${name}</strong>,</p>
          <p>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.</p>
          <p>We are thrilled to see your interest in mastering All Major Mushroom Varieties. Our comprehensive offline training at the farm will give you the complete hands-on experience you need to start your own business.</p>
          <p>Our team is reviewing your details and will get back to you shortly with upcoming batch dates, location details, and the next steps.</p>
          <p style="margin-top: 25px;">Warm regards,<br/><strong>The Organic Mushroom Farm Team</strong></p>
        \`;
      } else {
        return \`
          <p>Hi <strong>\${name}</strong>,</p>
          <p>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.</p>
          <p>We are excited to provide you with hands-on, practical experience in \${varietyName} cultivation directly at our farm. Our expert-led sessions will give you ground-level skills.</p>
          <p>Our team is reviewing your details and will get back to you shortly with upcoming batch dates and location details.</p>
          <p style="margin-top: 25px;">Warm regards,<br/><strong>The Organic Mushroom Farm Team</strong></p>
        \`;
      }
    }
  }

  // Default for other services
  return \`
    <p>Hi <strong>\${name}</strong>,</p>
    <p>Thank you for reaching out to us! We have received your message regarding <strong>\${subject || 'your enquiry'}</strong>.</p>
    <p>Our team is reviewing it and will get back to you as soon as possible.</p>
    <p style="margin-top: 25px;">Warm regards,<br/><strong>The Organic Mushroom Farm Team</strong></p>
  \`;
}

// Contact API route
app.post('/api/contact'`;

content = content.replace(/\/\/ Contact API route\napp\.post\('\/api\/contact'/g, userMessageFunc);

fs.writeFileSync('server.ts', content);
console.log('Patched server.ts email logic');
