const fs = require('fs');
let content = fs.readFileSync('api/contact.ts', 'utf8');

const targetStr = `  // Default for other services
  return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding \${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
}`;

const newStr = `  if (service === 'SPAWN') {
    let varietyName = mushroomVariety || 'All Varieties Combined';
    
    if (varietyName.includes('Button')) {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Button Mushroom Spawn (Seed).<br/><br/>Button mushrooms are highly in demand, and we ensure the highest quality, first-generation spawn for a premium commercial yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (varietyName.includes('Oyster')) {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Oyster Mushroom Spawn (Seed).<br/><br/>Known for their fast growth and excellent yield, our Oyster spawn is prepared under strict sterile conditions to give you the best results on your farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (varietyName.includes('Milky')) {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Milky Mushroom Spawn (Seed).<br/><br/>Milky mushrooms are perfect for warmer climates, and we provide robust, high-yielding spawn to ensure a heavy harvest. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (varietyName.includes('Shiitake')) {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Shiitake Mushroom Spawn (Seed).<br/><br/>Shiitake is a premium gourmet variety loved for its flavor. We provide vigorous, contamination-free spawn to help you grow the best quality mushrooms. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (varietyName.includes("Lion's Mane")) {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Lion's Mane Mushroom Spawn (Seed).<br/><br/>Cultivating this unique and highly medicinal mushroom requires premium genetics. We ensure the highest quality spawn to support your specialized farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (varietyName.includes('Cordyceps')) {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Cordyceps Mushroom Spawn (Culture/Seed).<br/><br/>Cordyceps cultivation is highly specialized, and we take pride in offering strong, pure commercial-grade cultures for maximum potency and yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a new enquiry for Multiple Varieties of Mushroom Spawn (Seed).<br/><br/>Whether you are setting up a diverse farm or experimenting, we ensure the highest quality spawn across all varieties for the best overall yield. Our team is reviewing your bulk requirements and will get back to you as soon as possible with pricing and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    }
  }

  // Default for other services
  return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding \${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
}`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr);
  fs.writeFileSync('api/contact.ts', content);
  console.log("Patched api/contact.ts successfully");
} else {
  console.log("Target string not found in api/contact.ts");
}
