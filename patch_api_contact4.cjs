const fs = require('fs');
let content = fs.readFileSync('api/contact.ts', 'utf8');

const targetStr1 = `function getUserMessageHtml(name: string, subject: string, service: string, trainingMode?: string, mushroomVariety?: string, setupType?: string) {`;
const newStr1 = `function getUserMessageHtml(name: string, subject: string, service: string, trainingMode?: string, mushroomVariety?: string, setupType?: string, productForm?: string, otherSubject?: string) {`;

const targetStr2 = `  // Default for other services
  return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding \${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
}`;

const newStr2 = `  if (service === 'BUY MUSHROOMS') {
    let varietyName = mushroomVariety || '';
    
    if (productForm === 'Fresh Mushroom') {
      if (varietyName.includes('Button')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Button Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Button mushrooms that guarantee premium taste and top-tier quality for your culinary or commercial needs.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Oyster')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Oyster Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Oyster mushrooms, known for their delicate texture and rich flavor. We ensure the best harvest reaches you.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Milky')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Milky Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Milky mushrooms, valued for their long shelf life and meaty texture. We ensure the best harvest reaches you.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Shiitake')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Shiitake Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Shiitake mushrooms, perfect for gourmet dishes. We ensure this premium harvest reaches you in top condition.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes("Lion's Mane")) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Lion's Mane Mushrooms.<br/><br/>We take pride in delivering farm-to-table, organically grown fresh Lion's Mane mushrooms, celebrated for their unique appearance and health benefits. We ensure the best harvest reaches you.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Cordyceps')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Fresh Cordyceps Mushrooms.<br/><br/>We take pride in cultivating and delivering premium, organically grown fresh Cordyceps, known for their powerful medicinal properties. We ensure the best quality reaches you.<br/><br/>Our team is reviewing your quantity requirements and will get back to you shortly with pricing and delivery details.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (productForm === 'Dry Mushroom') {
      if (varietyName.includes('Button')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Button Mushrooms.<br/><br/>Our naturally dehydrated Button mushrooms retain their classic flavor and nutritional value while offering a long shelf life. They are perfect for culinary and commercial use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Oyster')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Oyster Mushrooms.<br/><br/>Our naturally dehydrated Oyster mushrooms retain their rich flavor, aroma, and nutritional value while offering a long shelf life. They are perfect for culinary, medicinal, and commercial use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Milky')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Milky Mushrooms.<br/><br/>Our naturally dehydrated Milky mushrooms retain their robust texture and nutritional value while offering an excellent shelf life. They are perfect for various culinary applications.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Shiitake')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Shiitake Mushrooms.<br/><br/>Our naturally dehydrated Shiitake mushrooms concentrate their famous umami flavor and nutritional value while offering a long shelf life. They are essential for premium culinary use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes("Lion's Mane")) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Lion's Mane Mushrooms.<br/><br/>Our carefully dehydrated Lion's Mane mushrooms retain their neuro-supportive properties and nutritional value while offering a long shelf life. They are perfect for health and culinary use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Cordyceps')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for Dry Cordyceps Mushrooms.<br/><br/>Our carefully dehydrated Cordyceps retain their potent medicinal properties and nutritional value while offering a long shelf life. They are highly sought after for health and commercial use.<br/><br/>Our team is reviewing your requirements and will get back to you shortly with the quotation and availability.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    } else if (productForm === 'Mushroom Powder') {
      if (varietyName.includes('Button')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our Button Mushroom Powder.<br/><br/>Packed with essential nutrients and a versatile flavor profile, our concentrated Button mushroom powder is perfect for soups, sauces, and daily culinary use.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Oyster')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our nutrient-rich Oyster Mushroom Powder.<br/><br/>Packed with immunity-boosting properties and essential nutrients, our highly concentrated Oyster mushroom powder is perfect for health supplements, daily consumption, and value-added products.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Milky')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our Milky Mushroom Powder.<br/><br/>Packed with essential nutrients and protein, our concentrated Milky mushroom powder is an excellent addition to health supplements and protein-rich diets.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Shiitake')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our premium Shiitake Mushroom Powder.<br/><br/>Packed with immunity-boosting properties and rich umami flavor, our highly concentrated Shiitake mushroom powder is perfect for gourmet cooking, health supplements, and daily consumption.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes("Lion's Mane")) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our specialized Lion's Mane Mushroom Powder.<br/><br/>Renowned for cognitive support, our highly concentrated Lion's Mane mushroom powder is perfect for premium health supplements, daily consumption, and wellness products.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      } else if (varietyName.includes('Cordyceps')) {
        return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your order enquiry for our potent Cordyceps Mushroom Powder.<br/><br/>Highly valued for its energy and stamina-boosting properties, our concentrated Cordyceps mushroom powder is essential for premium health and sports supplements.<br/><br/>Our team is reviewing your bulk or retail request and will get back to you shortly to process your order.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
      }
    }
  }

  if (service === 'OTHER SERVICES') {
    if (otherSubject === 'Machinery & Equipment') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your enquiry regarding Machinery & Equipment.<br/><br/>Using the right tools is the secret to a high-yielding farm. We provide reliable, commercial-grade farming equipment and machinery tailored to optimize your mushroom production.<br/><br/>Our technical team is reviewing your request and will get back to you soon with customized solutions and pricing.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (otherSubject === 'Site Visit Consultation') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your request for a Site Visit Consultation.<br/><br/>An on-ground evaluation is the best way to plan a successful farm. Our experts will thoroughly assess your location, climate, and resources to provide a highly optimized cultivation strategy.<br/><br/>Our team will contact you shortly to schedule the visit at your convenience.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (otherSubject === 'Marketing & Buyback Support') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your enquiry regarding Marketing & Buyback Support.<br/><br/>Growing mushrooms is just the first step; selling them at the right price is where the profit lies. We are committed to helping you scale your business through guaranteed buyback options and strategic market linkage.<br/><br/>Our team is reviewing your farm capacity details and will connect with you soon to discuss our buyback policies.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (otherSubject === 'Subsidies & Bank Loans') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your enquiry regarding Subsidies & Bank Loans.<br/><br/>Securing funding shouldn't be a hurdle in your farming journey. From preparing detailed project reports (DPR) to navigating government schemes, our experts are here to simplify the financial process for you.<br/><br/>Our team is reviewing your profile and will get back to you shortly to guide you through the next steps.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    } else if (otherSubject === 'Other') {
      return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding a General Query/Other Service.<br/><br/>Whether you need specialized farming advice, customized solutions, or just have a few questions about the mushroom industry, we are always here to support your journey.<br/><br/>Our team is reviewing your message and will get back to you as soon as possible with the right information.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
    }
  }

  // Default for other services
  return \`Hi \${name},<br/><br/>Thank you for reaching out to us! We have received your message regarding \${subject || 'your enquiry'}.<br/><br/>Our team is reviewing it and will get back to you as soon as possible.<br/><br/>Warm regards,<br/>The Organic Mushroom Farm Team\`;
}`;

const targetStr3 = `const { name, email, phone, subject, message, service, trainingMode, mushroomVariety, setupType } = req.body;`;
const newStr3 = `const { name, email, phone, subject, message, service, trainingMode, mushroomVariety, setupType, productForm, otherSubject } = req.body;`;

const targetStr4 = `\${getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety, setupType)}`;
const newStr4 = `\${getUserMessageHtml(name, subject, service, trainingMode, mushroomVariety, setupType, productForm, otherSubject)}`;

if (content.includes(targetStr1) && content.includes(targetStr2) && content.includes(targetStr3) && content.includes(targetStr4)) {
  content = content.replace(targetStr1, newStr1).replace(targetStr2, newStr2).replace(targetStr3, newStr3).replace(targetStr4, newStr4);
  fs.writeFileSync('api/contact.ts', content);
  console.log("Patched api/contact.ts successfully");
} else {
  console.log("Failed to find some target strings in api/contact.ts");
}
