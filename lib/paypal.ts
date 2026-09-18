import paypal from '@paypal/checkout-server-sdk';

const clientId =
  process.env.PAYPAL_CLIENT_ID ||
  process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ||
  'BAA9F1mTzMfsLuGY3cUMK_5-Q4cAq5DMmAbRenFGQs7AtoUEMY27wT_xYSvxh2sbUU8_wZRleyx7M4qMjg';

const clientSecret =
  process.env.PAYPAL_CLIENT_SECRET ||
  'ED-9zp54Zlm8uSN7ylvtiM7V1Cr8us3eq4fsJHV_8cjuTo-uD4NT2md7CN3eS0nBXbivmep5IgIW5-mW';

// Select Live or Sandbox based on configuration
const isSandbox =
  process.env.PAYPAL_ENV === 'sandbox' ||
  clientId.toLowerCase().startsWith('sb') ||
  process.env.PAYPAL_API_BASE?.includes('sandbox');

const environment = isSandbox
  ? new paypal.core.SandboxEnvironment(clientId, clientSecret)
  : new paypal.core.LiveEnvironment(clientId, clientSecret);

const client = new paypal.core.PayPalHttpClient(environment);

export default client;
