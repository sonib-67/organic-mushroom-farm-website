import { Metadata } from "next";
import UsaSuccessBasicClient from "./UsaSuccessBasicClient";

export const metadata: Metadata = {
  title: "Payment Successful - USA Basic Plan",
  description: "Enrollment confirmed for USA Basic Mushroom Cultivation Training Program.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://organicmushroomsfarm.com/usatraining/success/basic",
  },
};

export default function BasicSuccessPage() {
  return <UsaSuccessBasicClient />;
}
