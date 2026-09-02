import { Metadata } from 'next';
import { BlogButtonVsOysterMushroomContent } from '../../components/blog/BlogButtonVsOysterMushroomContent';

export const metadata: Metadata = {
  title: 'Button Mushroom vs Oyster Mushroom: Which is Better? Complete Guide',
  description:
    'Detailed commercial comparison of Button Mushroom vs Oyster Mushroom cultivation in India: temperature, humidity, substrate, startup costs, market demand, and ROI.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog/button-mushroom-vs-oyster-mushroom',
  },
  openGraph: {
    title: 'Button Mushroom vs Oyster Mushroom: Which is Better? Complete Guide',
    description:
      'Explore the pros and cons of Button vs Oyster mushroom farming in India. Compare investment costs, climate control needs, and profit margins.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/blog/button-mushroom-vs-oyster-mushroom',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Button Mushroom vs Oyster Mushroom Cultivation Guide',
      },
    ],
  },
};

export default function BlogButtonVsOysterMushroomPage() {
  return <BlogButtonVsOysterMushroomContent />;
}
