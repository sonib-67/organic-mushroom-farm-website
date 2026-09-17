import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get('type') || 'training_basic';
  const name = url.searchParams.get('name') || 'Test User';
  const phone = url.searchParams.get('phone') || '9999999999';
  const email = url.searchParams.get('email') || 'test@example.com';
  
  // Fake payment ID for testing
  const paymentId = 'pay_TEST' + Math.floor(Math.random() * 1000000);
  
  // Create the redirect URL to the registration page exactly as it would happen after real payment
  const redirectUrl = new URL('/training/register', url.origin);
  redirectUrl.searchParams.set('id', paymentId);
  redirectUrl.searchParams.set('name', name);
  redirectUrl.searchParams.set('phone', phone);
  redirectUrl.searchParams.set('email', email);
  redirectUrl.searchParams.set('type', type);
  
  return NextResponse.redirect(redirectUrl);
}