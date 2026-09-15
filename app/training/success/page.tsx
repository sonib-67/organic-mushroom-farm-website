import { Suspense } from "react";
import { Metadata } from "next";
import TrainingSuccessClient from "./TrainingSuccessClient";

export const metadata: Metadata = {
  title: "Training Registration Successful | Organic Mushroom Farm",
  description: "Your mushroom farming training registration has been confirmed.",
  robots: { index: false, follow: false },
};

export default function TrainingSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrainingSuccessClient />
    </Suspense>
  );
}
