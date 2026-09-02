import { Metadata } from 'next';
import { BlogButtonVsOysterMushroomContent } from '../../components/blog/BlogButtonVsOysterMushroomContent';

export const metadata: Metadata = {
  title: 'Button Mushroom vs Oyster Mushroom: Which is Better? Complete Guide (Preview)',
  description:
    'Detailed comparison of button mushroom and oyster mushroom cultivation, including temperature, humidity, growing period, substrate, yield and farming requirements.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Button Mushroom vs Oyster Mushroom: Which is Better? Complete Guide',
    description:
      'Detailed comparison of button mushroom and oyster mushroom cultivation, including temperature, humidity, growing period, substrate, yield and farming requirements.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newblog/button-mushroom-vs-oyster-mushroom',
  },
};

export default function NewBlogButtonVsOysterMushroomPage() {
  return <BlogButtonVsOysterMushroomContent />;
}
