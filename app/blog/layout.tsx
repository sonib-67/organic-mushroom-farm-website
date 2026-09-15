import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mushroom Farming Blog | Educational & Health Insights",
  description: "Read the latest articles on mushroom cultivation, health benefits of medicinal fungi, and market trends in the Indian agri-business sector.",
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog',
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
