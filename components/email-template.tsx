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
  const isDone = status === 'done';
  const borderColor = isDone ? '#0F5132' : '#DC3545';
  
  let content = null;
  if (productType === 'training') {
    content = isDone ? (
      <>
        <p style={{ margin: '0 0 10px 0' }}>Your enrollment in the Commercial Mushroom Training Program has been successfully confirmed. Your digital learning dashboard is now fully activated.</p>
        <p style={{ margin: '0 0 10px 0', background: '#FFF3CD', padding: '12px', borderRadius: '4px', color: '#664D03' }}><b>Important:</b> Live sessions: 4:00 PM to 5:30 PM IST daily.</p>
      </>
    ) : (
      <p style={{ margin: '0 0 10px 0' }}>Your payment for training could not be processed. Any funds deducted will be reverted within 3-5 business days. Please retry.</p>
    );
  } else if (productType.includes('consultant') || productType.includes('consultation')) {
    content = isDone ? (
      <p style={{ margin: '0 0 10px 0' }}>Your 1-on-1 consultation has been confirmed. Our team will contact you shortly.</p>
    ) : (
      <p style={{ margin: '0 0 10px 0' }}>Your consultation booking failed. Reservation released. Please review your payment and retry.</p>
    );
  } else if (productType.includes('spawn')) {
    content = isDone ? (
      <>
        <p style={{ margin: '0 0 10px 0' }}>Your spawn order has been authenticated and packaging initiated under controlled temperature parameters.</p>
        <p style={{ margin: '0 0 10px 0' }}>Tracking info will follow via email.</p>
      </>
    ) : (
      <p style={{ margin: '0 0 10px 0' }}>Your spawn order was terminated due to payment failure. Stock reservations cancelled. Please retry.</p>
    );
  } else if (productType.includes('mushroom')) {
    content = isDone ? (
      <p style={{ margin: '0 0 10px 0' }}>Your organic mushroom order is confirmed. Harvesting unit has prepared your allocation for courier pickup.</p>
    ) : (
      <p style={{ margin: '0 0 10px 0' }}>Your mushroom purchase failed due to payment issues. Inventory allocation returned. Please retry.</p>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#F9F9F9', padding: '30px', color: '#111111' }}>
      <div style={{ backgroundColor: '#FFFFFF', padding: '25px', borderRadius: '8px', borderLeft: `4px solid ${borderColor}`, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 20px 0', fontSize: '24px', fontWeight: 'bold' }}>Organic Mushroom Farm</h1>
        <h2 style={{ margin: '0 0 15px 0', fontSize: '20px' }}>Dear {customerName},</h2>
        
        {content}

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #EEEEEE', fontWeight: 'bold' }}>Order ID:</td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #EEEEEE' }}>{orderId}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #EEEEEE', fontWeight: 'bold' }}>Amount:</td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #EEEEEE' }}>INR {amount}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #EEEEEE', fontWeight: 'bold' }}>Product:</td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #EEEEEE' }}>{productType}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #EEEEEE', fontWeight: 'bold' }}>Status:</td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #EEEEEE', color: borderColor, fontWeight: 'bold', textTransform: 'uppercase' }}>{status}</td>
            </tr>
          </tbody>
        </table>

        <p style={{ margin: '0 0 20px 0' }}>
          Sincerely,<br />
          Organic Mushroom Farm Team
        </p>
        
        <hr style={{ border: 'none', borderTop: '1px solid #EEEEEE', margin: '20px 0' }} />
        
        <p style={{ fontSize: '12px', color: '#555555', margin: 0 }}>
          Support: support@mushroomtraining.online | Phone: 9203544140
        </p>
      </div>
    </div>
  );
};
