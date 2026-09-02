import type { Metadata } from 'next';
import { AboutPageContent } from '../components/about/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Organic Mushrooms Farm | India & Global Mushroom Training Experts',
  description:
    'Learn about Organic Mushrooms Farm, India leading mushroom ecosystem architect. We provide pure spawn, expert training, and turnkey farming solutions India-wide and globally.',
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

export default function NewAboutPage() {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <AboutPageContent />
    </>
  );
}
