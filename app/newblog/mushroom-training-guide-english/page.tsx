import { Metadata } from 'next';
import { MushroomTrainingGuideEnglishContent } from '../../components/blog/MushroomTrainingGuideEnglishContent';

export const metadata: Metadata = {
  title: 'Master Commercial Mushroom Cultivation: Step-by-Step Training Guide in English (Preview)',
  description:
    'Discover the ultimate step-by-step mushroom farming training guide in English. Master substrate science, climate management, and contamination control.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Master Commercial Mushroom Cultivation: Step-by-Step Training Guide in English (Preview)',
    description:
      'Discover the ultimate step-by-step mushroom farming training guide in English. Master substrate science, climate management, and contamination control.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newblog/mushroom-training-guide-english',
  },
};

export default function NewBlogMushroomTrainingGuideEnglishPage() {
  return <MushroomTrainingGuideEnglishContent />;
}
