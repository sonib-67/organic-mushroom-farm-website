import type { Metadata } from 'next';
import { SuccessStoriesPageContent } from '../components/stories/SuccessStoriesPageContent';

export const metadata: Metadata = {
  title: 'Success Stories | Mushroom Farming Training Results',
  description:
    'Read how our students and clients across India have built profitable mushroom farming businesses. From small balconies to 5-ton industrial units.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function NewSuccessStoriesPage() {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <SuccessStoriesPageContent />
    </>
  );
}
