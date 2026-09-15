import { Metadata } from "next";
import RegistrationFormClient from "./RegistrationFormClient";

export const metadata: Metadata = {
  title: "Workshop Registration Form | Organic Mushroom Farm",
  description: "Complete your mushroom farming workshop attendee details.",
  robots: { index: false, follow: false },
};

export default function RegistrationPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const type = searchParams.type === "advanced" ? "advanced" : "basic";
  return <RegistrationFormClient type={type} searchParams={searchParams} />;
}
