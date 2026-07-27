const fs = require('fs');
let content = fs.readFileSync('api/contact.ts', 'utf8');

const targetStr1 = `function getUserMessageHtml(name: string, subject: string, service: string, trainingMode?: string, mushroomVariety?: string) {`;
const newStr1 = `function getUserMessageHtml(name: string, subject: string, service: string, trainingMode?: string, mushroomVariety?: string, setupType?: string) {`;

const targetStr2 = `  // Default for other services
  return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding \${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
}`;

const newStr2 = `  if (service === 'SETUP (TURNKEY)') {
    if (setupType === 'AC Commercial Farm') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for an AC Commercial Farm Setup (Button/Oyster).<br/><br/>Setting up a climate-controlled commercial farm is a smart step towards consistent, year-round mushroom production and high commercial yields. Our experts specialize in providing end-to-end turnkey solutions to make your project a success.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to discuss your commercial farm setup needs.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (setupType === 'Non-AC Seasonal Hut') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for a Non-AC Seasonal Hut Structure.<br/><br/>Seasonal hut structures are a highly cost-effective and natural way to start your mushroom farming journey. Our experts will help you design a setup that maximizes your seasonal yield while keeping your investment optimized.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to discuss your farm setup needs.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (setupType === 'PUF Panel Setup') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for a High-Tech PUF Panel Setup.<br/><br/>A PUF panel structure ensures premium insulation, energy efficiency, and long-term durability for advanced mushroom cultivation. Our turnkey solutions provide you with top-of-the-line infrastructure for a world-class farming experience.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to discuss your high-tech setup requirements.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (setupType === 'Consultancy Only') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Farm Setup Consultancy.<br/><br/>Whether you are planning a new farm from scratch, upgrading your existing setup, or looking for expert business guidance, we are here to help you make the right technical and financial decisions.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to schedule your consultation.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Farm Setup.<br/><br/>Our team is reviewing your request and will get back to you as soon as possible to discuss your requirements.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    }
  }

  // Default for other services
  return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding \${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
}`;

const targetStr3 = `const { name, email, phone, subject, message, service, trainingMode, mushroomVariety } = req.body;`;
const newStr3 = `const { name, email, phone, subject, message, service, trainingMode, mushroomVariety, setupType } = req.body;`;

const targetStr4 = `\${getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety)}`;
const newStr4 = `\${getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety, setupType)}`;

if (content.includes(targetStr1) && content.includes(targetStr2) && content.includes(targetStr3) && content.includes(targetStr4)) {
  content = content.replace(targetStr1, newStr1).replace(targetStr2, newStr2).replace(targetStr3, newStr3).replace(targetStr4, newStr4);
  fs.writeFileSync('api/contact.ts', content);
  console.log("Patched api/contact.ts successfully");
} else {
  console.log("Failed to find some target strings in api/contact.ts");
}
