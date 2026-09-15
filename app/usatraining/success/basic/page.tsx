import { Metadata } from "next";
import UsaSuccessBasicClient from "./UsaSuccessBasicClient";

export const metadata: Metadata = {
  title: "Payment Successful - USA Basic Plan",
  description: "Enrollment confirmed for USA Basic Mushroom Cultivation Training Program.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BasicSuccessPage() {
  return <UsaSuccessBasicClient />;
}
