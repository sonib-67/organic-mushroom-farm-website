import * as React from 'react';

interface EmailTemplateProps {
  customerName: string;
  orderId: string;
  amount: string;
  productType: string;
  status: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  customerName,
  orderId,
  amount,
  productType,
  status,
}) => {
  const isDone = status?.toLowerCase() === 'done';
  const borderLeftColor = isDone ? '#0F5132' : '#DC3545';
  
  // Normalize productType
  const type = (productType || '').toLowerCase();
  const isTraining = type === 'training';
  const isConsultant = type === 'consultant' || type === 'consultation';
  const isSpawn = type.startsWith('spawn') || type === 'spawn';
  const isMushroom = type.includes('mushroom');

  let title = '';
  let message = '';
  let specialNote = '';

  if (isTraining) {
    if (isDone) {
      title = 'Enrollment Confirmed!';
      message = 'Your enrollment in the Commercial Mushroom Training Program has been successfully confirmed. Your digital learning dashboard is now fully activated.';
      specialNote = 'Important: Live sessions run from 4:00 PM to 5:30 PM IST daily.';
    } else {
      title = 'Payment Unsuccessful';
      message = 'Your payment for training could not be processed. Any funds deducted will be reverted within 3-5 business days. Please retry.';
    }
  } else if (isConsultant) {
    if (isDone) {
      title = 'Consultation Session Confirmed';
      message = 'Your 1-on-1 consultation session has been confirmed. Our expert advisory team will contact you shortly to coordinate your schedule.';
    } else {
      title = 'Booking Failed';
      message = 'Your consultation booking failed. Your session reservation has been released. Please review your payment details and retry.';
    }
  } else if (isSpawn) {
    if (isDone) {
      title = 'Order Verified & Spawn Packaged';
      message = `Your spawn order for has been authenticated and packaging initiated under controlled temperature parameters (Batch Product: ${productType}). Tracking details will follow as soon as the logistics partner scans the parcel.`;
    } else {
      title = 'Order Voided (Spawn)';
      message = 'Your spawn order was terminated due to payment failure. Stock reservations have been cancelled. Please retry.';
    }
  } else if (isMushroom) {
    if (isDone) {
      title = 'Organic Produce Secured';
      message = 'Your organic mushroom order is confirmed. Our harvesting unit has prepared your fresh allocation for courier pickup.';
    } else {
      title = 'Produce Allocation Cancelled';
      message = 'Your mushroom purchase failed due to payment issues. Your inventory allocation has been released back to stock. Please retry.';
    }
  } else {
    // Fallback Product type
    if (isDone) {
      title = 'Order Confirmed';
      message = 'Your purchase transaction has been successfully completed. Thank you for choosing us!';
    } else {
      title = 'Transaction Failed';
      message = 'Your transaction was unsuccessful. Please check your payment details and try again.';
    }
  }

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      background: '#F9F9F9',
      padding: '30px',
      color: '#111111',
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '28px',
        borderRadius: '8px',
        borderLeft: `4px solid ${borderLeftColor}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
        <h2 style={{ 
          marginTop: 0, 
          fontSize: '20px', 
          fontWeight: 600, 
          color: isDone ? '#0F5132' : '#DC3545',
          borderBottom: '1px solid #EEEEEE',
          paddingBottom: '12px'
        }}>
          {title}
        </h2>
        
        <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '16px 0 20px 0' }}>
          Dear <strong>{customerName}</strong>,
        </p>

        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333333' }}>
          {message}
        </p>
        
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          margin: '24px 0',
          fontSize: '14px',
          backgroundColor: '#FAFAFA',
          borderRadius: '4px',
          border: '1px solid #EEEEEE'
        }}>
          <tbody>
            <tr>
              <td style={{ padding: '12px', borderBottom: '1px solid #EEEEEE', fontWeight: 'bold', color: '#555555' }}>Order ID:</td>
              <td style={{ padding: '12px', borderBottom: '1px solid #EEEEEE', fontFamily: 'monospace', color: '#111111' }}>{orderId}</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', fontWeight: 'bold', color: '#555555' }}>Amount Paid:</td>
              <td style={{ padding: '12px', fontWeight: 'bold', color: isDone ? '#0F5132' : '#DC3545' }}>INR {amount}</td>
            </tr>
          </tbody>
        </table>

        {specialNote && (
          <p style={{
            background: '#FFF3CD',
            padding: '12px 16px',
            borderRadius: '6px',
            color: '#664D03',
            fontSize: '14px',
            lineHeight: '1.5',
            fontWeight: 500,
            margin: '20px 0',
            borderLeft: '3-px solid #FFC107'
          }}>
            {specialNote}
          </p>
        )}

        <p style={{ margin: '24px 0 0 0', fontSize: '15px', lineHeight: '1.5' }}>
          Sincerely,<br />
          <strong>Organic Mushroom Farm Team</strong>
        </p>
        
        <hr style={{ border: 'none', borderTop: '1px solid #EEEEEE', margin: '24px 0' }} />
        
        <div style={{ fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
          <strong>Support:</strong> <a href="mailto:support@mushroomtraining.online" style={{ color: '#0F5132', textDecoration: 'none', fontWeight: 500 }}>support@mushroomtraining.online</a> | <strong>Call/WhatsApp support:</strong> <span style={{ color: '#333333', fontWeight: 500 }}>9203544140</span>
        </div>
      </div>
    </div>
  );
};
