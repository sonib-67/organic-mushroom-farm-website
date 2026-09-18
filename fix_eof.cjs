const fs = require('fs');

let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

const handleCheckboxChangeStr = `
  const handleCheckboxChange = (field: 'interest' | 'support', value: string) => {
    setFormData(prev => {
      const currentList = prev[field];
      if (currentList.includes(value)) {
        return { ...prev, [field]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...currentList, value] };
      }
    });
  };
`;

code = code.replace('const generatePDF = () => {', handleCheckboxChangeStr + '\n  const generatePDF = () => {');

if (code.endsWith('}}')) {
  code = code.slice(0, -1);
}

fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
