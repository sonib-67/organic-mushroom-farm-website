export const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // If the script is already loaded
    if (document.getElementById('razorpay-js') && (window as any).Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "razorpay-js";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
