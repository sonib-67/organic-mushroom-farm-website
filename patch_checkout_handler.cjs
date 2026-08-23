const fs = require('fs');
let content = fs.readFileSync('src/pages/TrainingCheckoutPage.tsx', 'utf8');

// Update handleSubmit signature
content = content.replace(
  'const handleSubmit = async (e?: React.FormEvent) => {',
  'const handleSubmit = async (e?: React.FormEvent, customMethod?: string) => {'
);

const optionsOriginal = `      const options = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.order_id,
        name: payload.name,
        description: payload.description,
        prefill: payload.prefill,
        notes: payload.notes,
        theme: payload.theme,`;

const optionsPatched = `      const options: any = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.order_id,
        name: payload.name,
        description: payload.description,
        prefill: payload.prefill,
        notes: payload.notes,
        theme: payload.theme,`;

content = content.replace(optionsOriginal, optionsPatched);

const handlerOriginal = `        handler: function (response: any) {`;

const handlerPatched = `        ...(customMethod ? {
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
        handler: function (response: any) {`;

content = content.replace(handlerOriginal, handlerPatched);

fs.writeFileSync('src/pages/TrainingCheckoutPage.tsx', content, 'utf8');
console.log("Patched handler in TrainingCheckoutPage.tsx");
