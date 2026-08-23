const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');

const regex = /\.\.\.\(customMethod \? \{[\s\S]*?\}\) :\s*\{\}\),/g;
let matches = content.match(regex);
if (matches && matches.length > 1) {
    // replace all occurrences
    content = content.replace(regex, '');
    
    // insert it back once
    const insert = `        ...(customMethod ? {
            config: {
                display: {
                    blocks: {
                        upi: {
                            name: "Pay using UPI",
                            instruments: [
                                {
                                    method: "upi",
                                    ...(customMethod !== 'upi' ? { wallets: [customMethod] } : {})
                                }
                            ]
                        }
                    },
                    sequence: ["block.upi"],
                    preferences: {
                        show_default_blocks: false
                    }
                }
            }
        } : {}),
`;
    content = content.replace('handler: function (response: any) {', insert + '        handler: function (response: any) {');
}

fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content, 'utf8');
console.log("Fixed duplicates");
