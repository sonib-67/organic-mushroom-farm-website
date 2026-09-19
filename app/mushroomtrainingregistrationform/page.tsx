import { Metadata } from "next";
import { RegistrationFormClient } from "./RegistrationFormClient";

export const metadata: Metadata = {
  title: "1-Day Button Mushroom Training Registration Form | Organic Mushroom Farm",
  description:
    "Register for the 1-Day Button Mushroom Commercial Cultivation Training. Master compost preparation, climate control, spawn management, and disease prevention.",
};

export default function MushroomTrainingRegistrationPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-20 pt-6">
      <RegistrationFormClient />
    </main>
  );
}
