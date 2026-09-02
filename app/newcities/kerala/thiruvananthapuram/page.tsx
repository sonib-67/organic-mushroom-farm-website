import { Metadata } from 'next';
import { ThiruvananthapuramPageContent } from '../../../components/cities/ThiruvananthapuramPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming in Thiruvananthapuram: Kerala Cash Crop Setup (Preview)',
  description:
    'Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Mushroom Farming in Thiruvananthapuram: Kerala Cash Crop Setup (Preview)',
    description:
      'Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newcities/kerala/thiruvananthapuram',
  },
};

export default function NewCitiesKeralaThiruvananthapuramPage() {
  return <ThiruvananthapuramPageContent />;
}
