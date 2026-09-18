const fs = require('fs');

let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

// 1. Add FastInput at the top
const fastInputCode = `
const FastInput = memo(({ value, onChange, ...props }: any) => {
  const [val, setVal] = React.useState(value);
  React.useEffect(() => { setVal(value); }, [value]);
  return <input {...props} value={val} onChange={e => setVal(e.target.value)} onBlur={() => onChange(val)} />
});
`;

if (!code.includes('FastInput')) {
  code = code.replace('export default function RegistrationClient() {', fastInputCode + '\nexport default function RegistrationClient() {');
}

// 2. Replace <input type="text|tel|email" ... onChange={e => handleTextChange(...)} /> with <FastInput ... onChange={val => handleTextChange(..., val)} />
// It's easier to do this with regex
code = code.replace(/<input\s+type="(text|tel|email)"([^>]*?)onChange=\{e => handleTextChange\('([^']+)', e.target.value\)\}([^>]*?)\/>/g, 
  '<FastInput type="$1"$2onChange={(val: string) => handleTextChange(\'$3\', val)}$4/>'
);

fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
console.log('Fixed lag in RegistrationClient.tsx');
