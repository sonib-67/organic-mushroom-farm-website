import { Metadata } from 'next';
import { ThiruvananthapuramPageContent } from '../../../components/cities/ThiruvananthapuramPageContent';

export const metadata: Metadata = {
  title: "Mushroom Farming in Thiruvananthapuram: Kerala's New Cash Crop | Organic Mushrooms Farm",
  description:
    'Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram',
  },
  openGraph: {
    title: "Mushroom Farming in Thiruvananthapuram: Kerala's New Cash Crop",
    description:
      'Discover why commercial mushroom farming is rapidly emerging as the ultimate high-profit, space-saving business model in Thiruvananthapuram, Kerala.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/cities/kerala/thiruvananthapuram',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Mushroom Farming in Thiruvananthapuram Kerala',
      },
    ],
  },
};

export default function CitiesKeralaThiruvananthapuramPage() {
  return <ThiruvananthapuramPageContent />;
}
