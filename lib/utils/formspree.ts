// Formspree payment notification
export const sendPaymentNotificationToFormspree = async (data: Record<string, any>) => {
  try {
    const res = await fetch('https://formspree.io/f/mqaejvyb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.ok;
  } catch (err) {
    console.error('Formspree notification error:', err);
    return false;
  }
};
