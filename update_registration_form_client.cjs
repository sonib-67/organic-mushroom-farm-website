const fs = require('fs');

const reexportCode = `"use client";

import RegistrationClient from '@/app/training/register/RegistrationClient';

export default function RegistrationFormClient() {
  return <RegistrationClient />;
}
`;

fs.writeFileSync('app/training-checkout/registration/RegistrationFormClient.tsx', reexportCode);
console.log('Updated RegistrationFormClient.tsx to share RegistrationClient');
