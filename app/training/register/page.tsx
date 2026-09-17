import { Suspense } from "react";
import { Metadata } from "next";
import RegistrationClient from "./RegistrationClient";

export const metadata: Metadata = {
  title: "Complete Your Registration | Organic Mushroom Farm",
  description: "Complete your training enrollment by filling out the final registration form.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegistrationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-transparent flex items-center justify-center text-white">Loading...</div>}>
      <RegistrationClient />
    </Suspense>
  );
}
