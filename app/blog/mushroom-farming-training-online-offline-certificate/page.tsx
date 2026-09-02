import { Metadata } from 'next';
import { MushroomTrainingGuideContent } from '../../components/articles/MushroomTrainingGuideContent';

export const metadata: Metadata = {
  title: 'Mushroom Farming Training Online/Offline Certificate',
  description: 'Get certified in mushroom cultivation! Compare online vs offline training, explore course fees, government schemes, and learn how to generate farm profits.',
  keywords: 'mushroom farming training online, mushroom farming certificate, online mushroom cultivation course, offline mushroom training, mushroom farming profit',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog/mushroom-farming-training-online-offline-certificate',
  },
  openGraph: {
    title: 'Mushroom Farming Training Online/Offline Certificate',
    description: 'Get certified in mushroom cultivation! Compare online vs offline training, explore course fees, government schemes, and learn how to generate farm profits.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/blog/mushroom-farming-training-online-offline-certificate',
  },
};

export default function MushroomFarmingTrainingCertificatePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Mushroom Farming Training Guide | Learn Online in English',
        description: 'Get certified in mushroom cultivation! Compare online vs offline training, explore course fees, government schemes, and learn how to generate farm profits.',
        author: {
          '@type': 'Organization',
          name: 'Organic Mushrooms Farm',
          url: 'https://organicmushroomsfarm.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Organic Mushrooms Farm',
          logo: {
            '@type': 'ImageObject',
            url: 'https://organicmushroomsfarm.com/logo.png', // Ensure a fallback logo is defined in schema
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://organicmushroomsfarm.com/blog/mushroom-farming-training-online-offline-certificate',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://organicmushroomsfarm.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://organicmushroomsfarm.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mushroom Farming Training Guide',
            item: 'https://organicmushroomsfarm.com/blog/mushroom-farming-training-online-offline-certificate',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MushroomTrainingGuideContent />
    </>
  );
}
