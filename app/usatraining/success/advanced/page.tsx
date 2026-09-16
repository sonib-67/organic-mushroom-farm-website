import { Metadata } from "next";
import UsaSuccessAdvancedClient from "./UsaSuccessAdvancedClient";

export const metadata: Metadata = {
  title: "Payment Successful - USA Advanced Plan",
  description: "Enrollment confirmed for USA Advanced Commercial Mushroom Training Program.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://organicmushroomsfarm.com/usatraining/success/advanced",
  },
};

export default function AdvancedSuccessPage() {
  return <UsaSuccessAdvancedClient />;
}
