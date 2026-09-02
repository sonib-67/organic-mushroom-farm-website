import { Metadata } from 'next';
import { BlogOysterMushroomCultivationIndiaContent } from '../../components/blog/BlogOysterMushroomCultivationIndiaContent';

export const metadata: Metadata = {
  title: 'The Rise of Oyster Mushroom Cultivation in India: A High-Profit, Low-Cost Agri-Business (Preview)',
  description:
    'Discover why Oyster mushroom cultivation is transforming small-scale farmers and urban youth into successful business owners in India with its high-profit and low-cost model.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'The Rise of Oyster Mushroom Cultivation in India: A High-Profit, Low-Cost Agri-Business',
    description:
      'Discover why Oyster mushroom cultivation is transforming small-scale farmers and urban youth into successful business owners in India with its high-profit and low-cost model.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newblog/oyster-mushroom-cultivation-india',
  },
};

export default function NewBlogOysterMushroomCultivationIndiaPage() {
  return <BlogOysterMushroomCultivationIndiaContent />;
}
