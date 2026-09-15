import { Metadata } from "next";
import UsaTrainingClient from "./UsaTrainingClient";
import { organizationSchema } from "@/lib/schema/organization-schema";
import { websiteSchema } from "@/lib/schema/website-schema";
import { trainingCourseSchema } from "@/lib/schema/training-course-schema";
import { trainingBreadcrumbSchema } from "@/lib/schema/training-breadcrumb-schema";
import { trainingWebPageSchema } from "@/lib/schema/training-webpage-schema";

export const metadata: Metadata = {
  title: "Mushroom Cultivation Training USA",
  description: "Learn highly profitable organic mushroom farming for the US market. Turnkey solutions, climate control strategies, and business models for commercial growers.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/usatraining",
  },
  openGraph: {
    title: "Mushroom Cultivation Training USA",
    description: "Learn highly profitable organic mushroom farming for the US market. Turnkey solutions, climate control strategies, and business models for commercial growers.",
    url: "https://organicmushroomsfarm.com/usatraining",
    siteName: "Organic Mushroom Farm",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
        alt: "Organic Mushrooms Farm",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mushroom Cultivation Training USA",
    description: "Learn highly profitable organic mushroom farming for the US market. Turnkey solutions, climate control strategies, and business models for commercial growers.",
    images: ["https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"],
  },
};

export default function UsaTrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingCourseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingWebPageSchema) }} />
      <UsaTrainingClient />
    </>
  );
}
