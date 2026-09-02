import { Metadata } from 'next';
import { ContactPageContent } from '../components/contact/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Organic Mushroom Farm | Mushroom Training & Project Consultation',
  description:
    'Contact Organic Mushroom Farm in Katangi, Jabalpur, Madhya Pradesh for mushroom training, farm setup, turnkey projects, spawn, compost and project consultation.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewContractPage() {
  return <ContactPageContent />;
}
