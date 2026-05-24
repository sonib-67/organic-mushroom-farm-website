import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT, GoogleAuth } from 'google-auth-library';
import { TransactionData } from './dbService';

export const sheetsService = {
  async saveToSheet(data: TransactionData) {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!sheetId) {
      console.log('[Mock Sheets] Would save to sheets:', data.paymentId);
      return { success: true, mock: true };
    }

    try {
      let auth;
      if (clientEmail && privateKey) {
        auth = new JWT({
          email: clientEmail,
          key: privateKey,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
      } else {
        // Fallback to Application Default Credentials
        auth = new GoogleAuth({
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
      }

      const doc = new GoogleSpreadsheet(sheetId, auth);
      await doc.loadInfo(); 
      
      const sheet = doc.sheetsByIndex[0]; // Assuming first sheet is the target
      
      // Load recent rows to check for duplicates
      const rows = await sheet.getRows({ limit: 100, offset: Math.max(0, sheet.rowCount - 100) });
      const isDuplicate = rows.some(row => row.get('Payment ID') === data.paymentId && row.get('Event Type') === data.eventType);
      
      if (isDuplicate) {
        console.log(`[Google Sheets] Skip duplicate entry for payment: ${data.paymentId} with event ${data.eventType}`);
        return { success: true, duplicate: true };
      }
      
      // We assume headers are already set: 
      // Name, Phone, Email, Product, Amount, Payment Status, Payment ID, Order ID, Event Type, Date & Time
      await sheet.addRow({
        'Name': data.customerName || 'N/A',
        'Phone': data.phone || 'N/A',
        'Email': data.email || 'N/A',
        'Product': data.productType || 'N/A',
        'Amount': (data.amount / 100).toString(), // Usually Razorpay is in paise
        'Payment Status': data.status,
        'Payment ID': data.paymentId,
        'Order ID': data.orderId || 'N/A',
        'Event Type': data.eventType || 'N/A',
        'Date & Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });

      console.log(`[Google Sheets] Appended transaction: ${data.paymentId}`);
      return { success: true };
    } catch (error) {
      console.error('[Google Sheets Error]:', error);
      // We shouldn't throw error to prevent webhook failure
      return { success: false, error }; 
    }
  }
};
