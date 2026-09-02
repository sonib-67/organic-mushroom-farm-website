import { Metadata } from 'next';
import { BlogOysterMushroomCultivationIndiaContent } from '../../components/blog/BlogOysterMushroomCultivationIndiaContent';

export const metadata: Metadata = {
  title: 'The Rise of Oyster Mushroom Cultivation in India: A High-Profit, Low-Cost Agri-Business',
  description:
    'Discover why Oyster mushroom cultivation is transforming small-scale farmers and urban youth into successful business owners in India with its high-profit, low-cost model, step-by-step SOP, and pure spawn supply.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog/oyster-mushroom-cultivation-india',
  },
  openGraph: {
    title: 'The Rise of Oyster Mushroom Cultivation in India: A High-Profit, Low-Cost Agri-Business',
    description:
      'Master the commercial cultivation of Oyster Mushroom (Dhingri ki Kheti) in India. Learn about temperature, humidity, substrate pasteurization, and profit projections.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/blog/oyster-mushroom-cultivation-india',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Oyster Mushroom Cultivation in India',
      },
    ],
  },
};

export default function BlogOysterMushroomCultivationIndiaPage() {
  return <BlogOysterMushroomCultivationIndiaContent />;
}
