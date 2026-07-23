const fs = require('fs');
let createOrder = fs.readFileSync('api/create-order.ts', 'utf8');
createOrder = createOrder.replace(/import \* as RazorpayLib from 'razorpay';\nconst Razorpay = \(RazorpayLib as any\)\.default \|\| RazorpayLib;/, "import Razorpay from 'razorpay';");
createOrder = createOrder.replace("import * as crypto from 'crypto';", "import crypto from 'crypto';");
fs.writeFileSync('api/create-order.ts', createOrder);

let repayOrder = fs.readFileSync('api/repay-order.ts', 'utf8');
repayOrder = repayOrder.replace(/import \* as RazorpayLib from 'razorpay';\nconst Razorpay = \(RazorpayLib as any\)\.default \|\| RazorpayLib;/, "import Razorpay from 'razorpay';");
fs.writeFileSync('api/repay-order.ts', repayOrder);

let webhook = fs.readFileSync('api/razorpay-webhook.ts', 'utf8');
webhook = webhook.replace("import * as crypto from 'crypto';", "import crypto from 'crypto';");
fs.writeFileSync('api/razorpay-webhook.ts', webhook);
