import { Metadata } from "next";

const SITE_URL = "https://organicmushroomsfarm.com";

export const metadata: Metadata = {
  title: "Mushroom Farming Gallery | Mushroom Farm Images",
  description:
    "Explore commercial mushroom farming images, indoor growing rooms, farm infrastructure, mushroom cultivation, harvesting, training and turnkey mushroom farm projects.",
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
  openGraph: {
    title: "Mushroom Farming Gallery | Organic Mushroom Farm",
    description:
      "Explore commercial mushroom farming, cultivation, growing rooms, harvesting, training and mushroom farm infrastructure.",
    url: `${SITE_URL}/gallery`,
    siteName: "Organic Mushroom Farm",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/mushroom360viewimage.jpeg`,
        width: 1000,
        height: 562,
        alt: "Commercial mushroom growing room with cultivation racks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mushroom Farming Gallery | Organic Mushroom Farm",
    description:
      "Commercial mushroom farming, cultivation, growing rooms, harvesting and farm infrastructure images.",
    images: [`${SITE_URL}/images/mushroom360viewimage.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
