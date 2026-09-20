import { Metadata } from "next";
import Forbidden from "../forbidden";

export const metadata: Metadata = {
  title: "403 - Access Restricted | Organic Mushroom Farm",
  description: "Access to this page or action is restricted. Organic Mushroom Farm.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ForbiddenPage() {
  return <Forbidden />;
}
