const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

if (!code.includes('productType === "test_1_rupee"')) {
    code = code.replace(
        '} else if (productType === "workshop") {',
        '} else if (productType === "test_1_rupee") {\n      amount = 100;\n      purpose = "Testing 1 Rupee Checkout";\n    } else if (productType === "workshop") {'
    );
    fs.writeFileSync('server.ts', code, 'utf8');
    console.log("server.ts patched");
}
