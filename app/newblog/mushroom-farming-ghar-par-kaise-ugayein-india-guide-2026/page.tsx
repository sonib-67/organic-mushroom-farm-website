import { Metadata } from 'next';
import { HomeMushroomFarmingGuideContent } from '../../components/blog/HomeMushroomFarmingGuideContent';

export const metadata: Metadata = {
  title: 'How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide (Preview)',
  description:
    'Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'How to Grow Mushrooms at Home in India: The Ultimate 2026 Guide (Preview)',
    description:
      'Learn how to cultivate mushrooms at home (ghar par mushroom kaise ugayein) with this beginner-friendly 2026 guide for zero-land organic farming.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newblog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026',
  },
};

export default function NewHomeMushroomFarmingPage() {
  return <HomeMushroomFarmingGuideContent />;
}
