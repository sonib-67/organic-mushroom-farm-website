import { Metadata } from 'next';
import { HomeMushroomFarmingGuideContent } from '../../components/blog/HomeMushroomFarmingGuideContent';

export const metadata: Metadata = {
  title: 'How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide | Organic Mushrooms Farm',
  description:
    'Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026',
  },
  openGraph: {
    title: 'How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide (Ghar Par Kaise Ugayein)',
    description:
      'Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'How to Grow Mushrooms at Home in India Guide',
      },
    ],
  },
};

export default function HomeMushroomFarmingPage() {
  return <HomeMushroomFarmingGuideContent />;
}
