const fs = require('fs');

let code = fs.readFileSync('app/training-checkout/TrainingCheckoutClient.tsx', 'utf8');

const fastInputCode = `
import React, { memo } from 'react';
const FastInput = memo(({ value, onChange, ...props }: any) => {
  const [val, setVal] = React.useState(value);
  React.useEffect(() => { setVal(value); }, [value]);
  return <input {...props} value={val} onChange={e => setVal(e.target.value)} onBlur={() => onChange(val)} />
});
`;

if (!code.includes('FastInput')) {
  code = code.replace('import { useState } from "react";', 'import { useState } from "react";\n' + fastInputCode);
}

// Replace in checkout client
code = code.replace(/<input\s+type="text"([^>]*?)onChange=\{e => setFormData\(\{ \.\.\.formData, name: e\.target\.value \}\)\}([^>]*?)\/>/g,
  '<FastInput type="text"$1onChange={(val: string) => setFormData({ ...formData, name: val })}$2/>'
);

code = code.replace(/<input\s+type="tel"([^>]*?)onChange=\{e => \{[^}]*\}\}([^>]*?)\/>/g,
  '<FastInput type="tel"$1onChange={(val: string) => { const value = val.replace(/\\D/g, ""); if (value.length <= 10) setFormData({ ...formData, mobile: value }); }}$2/>'
);

code = code.replace(/<input\s+type="email"([^>]*?)onChange=\{e => setFormData\(\{ \.\.\.formData, email: e\.target\.value \}\)\}([^>]*?)\/>/g,
  '<FastInput type="email"$1onChange={(val: string) => setFormData({ ...formData, email: val })}$2/>'
);

fs.writeFileSync('app/training-checkout/TrainingCheckoutClient.tsx', code);
console.log('Fixed lag in TrainingCheckoutClient.tsx');
