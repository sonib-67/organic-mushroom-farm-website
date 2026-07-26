import express from 'express';
import cors from 'cors';

import sendEmailHandler from './send-email';
import sendEnquiryHandler from './send-enquiry';
import simulatePaymentHandler from './simulate-payment';
import checkPaymentsHandler from './cron/check-payments';
import enquiryHandler from './enquiry';
import locationHandler from './location';
import trackHandler from './track';
import createOrderHandler from './create-order';
import razorpayWebhookHandler from './razorpay-webhook';

const app = express();

app.use(cors());

// Webhook raw body middleware for /api/razorpay-webhook
app.use('/api/razorpay-webhook', express.raw({ type: 'application/json' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Express route handlers
app.all('/api/send-email', (req, res) => sendEmailHandler(req as any, res as any));
app.all('/api/send-enquiry', (req, res) => sendEnquiryHandler(req as any, res as any));
app.all('/api/simulate-payment', (req, res) => simulatePaymentHandler(req as any, res as any));
app.all('/api/cron/check-payments', (req, res) => checkPaymentsHandler(req as any, res as any));
app.all('/api/enquiry', (req, res) => enquiryHandler(req as any, res as any));
app.all('/api/location', (req, res) => locationHandler(req as any, res as any));
app.all('/api/track', (req, res) => trackHandler(req as any, res as any));
app.all('/api/create-order', (req, res) => createOrderHandler(req as any, res as any));
app.all('/api/razorpay-webhook', (req, res) => razorpayWebhookHandler(req as any, res as any));

// Fallback route matching for Vercel rewrite
app.all('*', (req, res) => {
  const path = req.path || '';
  if (path.includes('send-email')) return sendEmailHandler(req as any, res as any);
  if (path.includes('send-enquiry')) return sendEnquiryHandler(req as any, res as any);
  if (path.includes('simulate-payment')) return simulatePaymentHandler(req as any, res as any);
  if (path.includes('check-payments')) return checkPaymentsHandler(req as any, res as any);
  if (path.includes('enquiry')) return enquiryHandler(req as any, res as any);
  if (path.includes('location')) return locationHandler(req as any, res as any);
  if (path.includes('track')) return trackHandler(req as any, res as any);
  if (path.includes('create-order')) return createOrderHandler(req as any, res as any);
  if (path.includes('razorpay-webhook')) return razorpayWebhookHandler(req as any, res as any);

  return res.status(404).json({ error: 'API route not found' });
});

export default app;
