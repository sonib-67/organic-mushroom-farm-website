import { Metadata } from "next";
import { RegistrationFormClient } from "./RegistrationFormClient";

export const metadata: Metadata = {
  title: "Mushroom Training Registration | Organic Mushroom Farm",
  description:
    "Please enter your accurate details below to confirm your training registration. You will receive practical guidance on button mushroom cultivation, complete SOPs, compost preparation and calculations, raw material sourcing, and live Q&A support.",
};

export default function MushroomTrainingRegistrationPage() {
  return (
    <main className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-20 pt-6">
      <RegistrationFormClient />
    </main>
  );
}
