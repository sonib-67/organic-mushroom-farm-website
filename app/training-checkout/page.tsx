import { Suspense } from "react";
import { Metadata } from "next";
import TrainingCheckoutClient from "./TrainingCheckoutClient";

export const metadata: Metadata = {
  title: "Training Checkout & Secure Enrollment | Organic Mushroom Farm",
  description: "Secure online enrollment and registration for organic mushroom farming workshops.",
  robots: { index: false, follow: false },
};

export default function TrainingCheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrainingCheckoutClient />
    </Suspense>
  );
}
