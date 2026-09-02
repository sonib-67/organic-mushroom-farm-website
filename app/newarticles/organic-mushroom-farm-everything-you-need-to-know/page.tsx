import { Metadata } from 'next';
import { OrganicMushroomFarmGuideContent } from '../../components/articles/OrganicMushroomFarmGuideContent';

export const metadata: Metadata = {
  title: 'Organic Mushroom Farm: Everything You Need to Know | Ultimate Guide (Preview)',
  description:
    'Discover everything about organic mushroom farming in India. Learn about cultivation, health benefits, spawn sourcing, and government subsidies.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Organic Mushroom Farm: Everything You Need to Know | Ultimate Guide (Preview)',
    description:
      'Discover everything about organic mushroom farming in India. Learn about cultivation, health benefits, spawn sourcing, and government subsidies.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newarticles/organic-mushroom-farm-everything-you-need-to-know',
  },
};

export default function NewOrganicMushroomFarmGuidePage() {
  return <OrganicMushroomFarmGuideContent />;
}
