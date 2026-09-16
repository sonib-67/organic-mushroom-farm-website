import { Suspense } from "react";
import { Metadata } from "next";
import TrainingCancelClient from "./TrainingCancelClient";

export const metadata: Metadata = {
  title: "Training Registration Cancelled | Organic Mushroom Farm",
  description: "Your mushroom farming training registration process was cancelled.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://organicmushroomsfarm.com/training/cancel",
  },
};

export default function TrainingCancelPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrainingCancelClient />
    </Suspense>
  );
}
