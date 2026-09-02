import { Metadata } from 'next';
import { MushroomTrainingGuideEnglishContent } from '../../components/blog/MushroomTrainingGuideEnglishContent';

export const metadata: Metadata = {
  title: 'Master Commercial Mushroom Cultivation: Step-by-Step Training Guide in English | Organic Mushrooms Farm',
  description:
    'Discover the ultimate step-by-step mushroom farming training guide in English. Master substrate science, climate management, and contamination control.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog/mushroom-training-guide-english',
  },
  openGraph: {
    title: 'Master Commercial Mushroom Cultivation: Step-by-Step Training Guide in English',
    description:
      'Discover the ultimate step-by-step mushroom farming training guide in English. Master substrate science, climate management, and contamination control.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/blog/mushroom-training-guide-english',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Master Commercial Mushroom Cultivation Step-by-Step Training Guide in English',
      },
    ],
  },
};

export default function BlogMushroomTrainingGuideEnglishPage() {
  return <MushroomTrainingGuideEnglishContent />;
}
