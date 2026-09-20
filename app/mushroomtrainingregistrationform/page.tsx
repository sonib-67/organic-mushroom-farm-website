import { Metadata } from "next";
import { RegistrationFormClient } from "./RegistrationFormClient";

export const metadata: Metadata = {
  title: "Button Mushroom Farming Training Registration | Organic Mushroom Farm",
  description:
    "Register online for certified button mushroom cultivation training. Step-by-step practical guidance, compost formula, raw material sourcing, climate control SOPs & lifetime support.",
  keywords: [
    "mushroom training registration form",
    "button mushroom cultivation training",
    "commercial mushroom farming admission",
    "mushroom farming course registration 2026",
    "organic mushroom farm training",
    "mushroom training fees Jabalpur",
    "online mushroom farming course admission",
    "practical mushroom farming training",
  ],
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroomtrainingregistrationform",
  },
  openGraph: {
    title: "Button Mushroom Farming Training Registration | Organic Mushroom Farm",
    description:
      "Register online for certified commercial button mushroom farming training. 100% practical guidance, compost formula, climate control rooms & lifetime handholding.",
    url: "https://organicmushroomsfarm.com/mushroomtrainingregistrationform",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788594243/mushroomtraining_yftrft.png",
        width: 1200,
        height: 630,
        alt: "Button Mushroom Farming Training Registration - Organic Mushroom Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Button Mushroom Training Registration | Organic Mushroom Farm",
    description:
      "Register online for commercial button mushroom training. Complete SOPs, compost calculations, farm setup & lifetime guidance.",
    images: [
      "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788594243/mushroomtraining_yftrft.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function MushroomTrainingRegistrationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://organicmushroomsfarm.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mushroom Training",
        item: "https://organicmushroomsfarm.com/training",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Registration Form",
        item: "https://organicmushroomsfarm.com/mushroomtrainingregistrationform",
      },
    ],
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Commercial Button Mushroom Cultivation Training Program",
    description:
      "Hands-on commercial button mushroom cultivation training covering bunker composting, climate control parameters, spawning, casing sterilisation, pest management, and marketing linkages.",
    provider: {
      "@type": "EducationalOrganization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
      telephone: "+91-9203544140",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Katangi Bypass, Karmeta",
        addressLocality: "Jabalpur",
        addressRegion: "Madhya Pradesh",
        postalCode: "482002",
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "Offer",
      price: "500",
      priceCurrency: "INR",
      category: "Advance Seat Booking",
      availability: "https://schema.org/InStock",
      url: "https://organicmushroomsfarm.com/mushroomtrainingregistrationform",
    },
    educationalCredentialAwarded:
      "Certificate of Completion in Commercial Mushroom Cultivation",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "onsite"],
      courseWorkload: "PT7D",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {/* Background is translucent so that the animated background mycelium canvas & glowing auras are prominently visible */}
      <main className="min-h-screen bg-transparent pb-20 pt-4 sm:pt-6 relative z-10">
        <RegistrationFormClient />
      </main>
    </>
  );
}
