const fs = require('fs');
let code = fs.readFileSync('src/emailService.ts', 'utf8');

const targetHeader = `        <!-- Header -->
        <div style="background-color: \${accentColor}; padding: 30px 20px; text-align: center;">
          <div style="display: inline-block; background: white; padding: 10px 20px; border-radius: 50px; font-weight: bold; color: \${accentColor}; font-size: 20px; letter-spacing: 1px; margin-bottom: 10px;">
            🍄 ORGANIC MUSHROOMS
          </div>
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">\${title}</h2>
        </div>`;

const newHeader = `        <!-- Header -->
        <div style="background-color: \${accentColor}; padding: 30px 20px; text-align: center;">
          <div style="margin-bottom: 15px;">
            <img src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" alt="Organic Mushrooms Farm Logo" style="width: 80px; height: 80px; object-fit: cover; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" />
          </div>
          <div style="display: inline-block; background: white; padding: 6px 16px; border-radius: 50px; font-weight: bold; color: \${accentColor}; font-size: 14px; letter-spacing: 1px; margin-bottom: 15px; text-transform: uppercase;">
            Organic Mushrooms
          </div>
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">\${title}</h2>
        </div>`;

if (code.includes(targetHeader)) {
    code = code.replace(targetHeader, newHeader);
    fs.writeFileSync('src/emailService.ts', code);
    console.log("Success");
} else {
    console.log("Target header not found.");
}
