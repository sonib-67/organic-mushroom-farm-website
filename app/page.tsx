import React from 'react';
import type { Metadata } from 'next';
import { HomePageContent } from './components/home/HomePageContent';

export const metadata: Metadata = {
  title: "Organic Mushrooms Farm | Setup, Spawn & Training",
  description: "Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.",
  openGraph: {
    title: "Organic Mushrooms Farm | Setup, Spawn & Training",
    description: "Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.",
    url: "https://organicmushroomsfarm.com",
    siteName: "Organic Mushrooms Farm",
    locale: "en_IN",
    type: "website",
  },
};

export default function NextHomePage() {
  return <HomePageContent />;
}

