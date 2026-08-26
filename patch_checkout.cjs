const fs = require('fs');
let content = fs.readFileSync('src/components/InternationalCheckoutForm.tsx', 'utf8');

// Add useEffect import
content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';\nimport { Country } from 'react-phone-number-input';");

// Add userCountry state and effect
const hookInjection = `  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userCountry, setUserCountry] = useState<Country>('US');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code) {
          setUserCountry(data.country_code);
        }
      })
      .catch(err => console.error('Failed to fetch IP', err));
  }, []);`;

content = content.replace("  const [isLoading, setIsLoading] = useState(false);\n  const [error, setError] = useState('');", hookInjection);

// Replace defaultCountry
content = content.replace('defaultCountry="US"', 'defaultCountry={userCountry}');

fs.writeFileSync('src/components/InternationalCheckoutForm.tsx', content);
console.log("Patched component successfully");
