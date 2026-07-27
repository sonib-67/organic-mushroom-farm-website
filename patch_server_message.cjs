const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const regex = /function getUserMessageHtml\([\s\S]*?\}\n\n/m;

const newFunc = `function getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety) {
  if (service === 'TRAINING') {
    const isOnline = trainingMode && trainingMode.toLowerCase().includes('online');
    let varietyName = mushroomVariety || 'All Varieties Combined';
    if (varietyName !== 'All Varieties Combined' && !varietyName.includes('All Varieties') && !varietyName.toLowerCase().includes('mushroom')) {
      varietyName += ' Mushroom';
    }
    
    if (isOnline) {
      if (varietyName.includes('All Varieties')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Online Mushroom Training.<br/><br/>We are thrilled to see your interest in mastering All Major Mushroom Varieties from the comfort of your home. Our comprehensive online program will cover everything you need to succeed.<br/><br/>Our team is reviewing your details and will get back to you shortly with the complete syllabus, schedule, and next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Online Mushroom Training.<br/><br/>We are excited to help you learn \${varietyName} cultivation from the comfort of your home. Our expert-led online sessions are designed to give you step-by-step guidance.<br/><br/>Our team is reviewing your details and will get back to you shortly with the online training schedule and next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else {
      // Offline
      if (varietyName.includes('All Varieties')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.<br/><br/>We are thrilled to see your interest in mastering All Major Mushroom Varieties. Our comprehensive offline training at the farm will give you the complete hands-on experience you need to start your own business.<br/><br/>Our team is reviewing your details and will get back to you shortly with upcoming batch dates, location details, and the next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Offline Mushroom Training.<br/><br/>We are excited to provide you with hands-on, practical experience in \${varietyName} cultivation directly at our farm. Our expert-led sessions will give you ground-level skills.<br/><br/>Our team is reviewing your details and will get back to you shortly with upcoming batch dates and location details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    }
  }

  // Default for other services
  return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding \${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
}

`;

content = content.replace(regex, newFunc);
fs.writeFileSync('server.ts', content);
console.log("Patched getUserMessageHtml");
