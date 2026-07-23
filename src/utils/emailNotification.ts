export const sendEmailNotification = async (payload: any) => {
  const apiKey = import.meta.env.VITE_EMAIL_API_KEY;
  if (!apiKey) {
    console.warn("Email API Key is not defined");
    return;
  }

  try {
    await fetch("https://ais-pre-hrvwiu6bx64zzphnza72oq-583298446277.asia-east1.run.app/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error("Failed to send email notification", err);
  }
};
