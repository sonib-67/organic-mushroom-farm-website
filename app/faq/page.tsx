import React from 'react';
import type { Metadata } from 'next';
import FAQClientPage from './FAQClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farm Setup FAQs: आपके सभी सवालों के जवाब",
  description: "मशरूम फार्मिंग से जुड़े सभी सवालों के जवाब पाएँ। Oyster, Button और Milky मशरूम के Setup cost, training, और मुनाफे की पूरी जानकारी यहाँ मौजूद है।",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farm Setup FAQs: आपके सभी सवालों के जवाब",
    description: "मशरूम फार्मिंग से जुड़े सभी सवालों के जवाब पाएँ। Oyster, Button और Milky मशरूम के Setup cost, training, और मुनाफे की पूरी जानकारी यहाँ मौजूद है।",
    url: "https://organicmushroomsfarm.com/faq",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farm Setup FAQs: आपके सभी सवालों के जवाब",
    description: "मशरूम फार्मिंग से जुड़े सभी सवालों के जवाब पाएँ। Oyster, Button और Milky मशरूम के Setup cost, training, और मुनाफे की पूरी जानकारी यहाँ मौजूद है।",
  },
};

const faqsForSchema = [
  {
    q: "What is commercial mushroom farming and how to start?",
    a: "Mushroom farming is the white revolution in Indian agriculture. To start commercially, you need a controlled indoor space, quality spawn, and standardized substrate. We provide a complete commercial button mushroom farming course to help you start from scratch.",
  },
  {
    q: "What government subsidies are available?",
    a: "Various state governments and the National Horticulture Board (NHB) provide 40-50% subsidies for industrial mushroom units. We provide full documentation support for your subsidy application.",
  },
  {
    q: "Where can I sell my commercial harvested mushrooms?",
    a: "We provide global and domestic market linkage support. You can sell to local wholesale markets, hotels, supermarkets, or through our network of verified commercial B2B buyers across India and abroad.",
  },
  {
    q: "पुण्यामध्ये मशरूम शेती सुरू करण्यासाठी किती गुंतवणूक लागते?",
    a: "पुण्यात मशरूम शेती सुरू करण्यासाठी लागणारी गुंतवणूक तुमच्या स्तरावर (scale) अवलंबून असते. घरगुती स्तरावर (Small scale) तुम्ही फक्त ₹10,000 ते ₹25,000 मध्ये ऑयस्टर मशरूम कल्टिव्हेशन सुरू करू शकता. व्यावसायिक स्तरावर (Commercial Unit Setup) हे सुरू करण्यासाठी ₹1.5 लाख ते ₹5 लाख किंवा त्याहून अधिक गुंतवणूक लागते.",
  },
  {
    q: "Pune mushroom farming training center near me?",
    a: "जर तुम्ही पुणे, पिंपरी-चिंचवड किंवा आसपासच्या भागात उत्कृष्ट प्रशिक्षण केंद्र शोधत असाल, तर 'Organic Mushrooms Farm' हे सर्वात विश्वसनीय नाव आहे. आम्ही संपूर्ण कल्टिव्हेशन, स्पॉन बनवणे, मार्केटिंग आणि बँक सबसिडी कन्सल्टन्सीचे ऑनलाईन व ऑफलाईन प्रॅक्टिकल ट्रेनिंग देतो.",
  },
  {
    q: "ऑनलाईन मशरूम प्रशिक्षण उपलब्ध आहे का?",
    a: "होय! आमचे अतिशय सविस्तर डिजिटल ऑनलाईन मशरूम प्रशिक्षण पुण्यात घरबसल्या उपलब्ध आहे. अवघ्या ₹399 मध्ये लाईफटाईम व्हिडिओ ॲक्सेस, ट्रेनिंग सर्टिफिकेट आणि तज्ज्ञ टीमचा व्हॉट्सॲप सपोर्ट दिला जातो.",
  },
  {
    q: "ऑफलाइन प्रॅक्टिकल प्रशिक्षण दिले जाते का?",
    a: "होय, थेट प्रॅक्टिकल आणि हाताने काम करून शिकण्यासाठी आमचे मुख्य कल्टिव्हेशन फार्म उपलब्ध आहे, जिथे राहण्याची आणि जेवणाची सर्व सोयींयुक्त व्यवस्था केली जाते.",
  },
  {
    q: "Oyster Mushroom Farming in Pune profitable आहे का?",
    a: "होय, पुण्यात ऑयस्टर मशरूम शेती अत्यंत फायदेशीर (highly profitable) आहे. पुण्यात असणाऱ्या मोठ्या हॉटेल्स, रेस्टॉरंट्स आणि आरोग्याविषयी जागरूक लोकांच्या वाढत्या संख्येमुळे ताज्या आणि सुक्या ऑयस्टर मशरूमला खूप चांगला बाजारभाव मिळतो.",
  },
  {
    q: "Mushroom Spawn Supplier in Pune कुठे मिळेल?",
    a: "Organic Mushrooms Farm पुणे आणि आसपासच्या सर्व जिल्ह्यांमध्ये उच्च प्रतीचे, लॅब-सर्टिफाइड आणि दर्जेदार मशरूम स्पॉन (Oyster, Milky, Button & Medicinal F1 Spawn) घरपोच डिलिव्हरी द्वारे सुरक्षितपणे पुरवते.",
  },
  {
    q: "Button Mushroom Farming Pune मध्ये करता येते का?",
    a: "होय, पुण्यात बटन मशरूम कल्टिव्हेशन सहज शक्य आहे. उन्हाळ्यात यासाठी एसी किंवा तापमान नियंत्रित करण्यासाठी खास इन्सुलेशन रूमची आवश्यकता असते, तर हिवाळ्याच्या मोसमात हे अगदी नैसर्गिक वातावरणातही उत्तम प्रकारे घेता येते.",
  },
  {
    q: "Milky Mushroom cultivation Maharashtra साठी योग्य आहे का?",
    a: "होय, मिल्की मशरूम उष्ण हवामानामध्ये वेगाने वाढणारे असल्यामुळे महाराष्ट्रातील आणि पुण्याच्या उन्हाळ्याच्या हवामानासाठी हे कल्टिव्हेशन अत्यंत उत्तम आणि फायदेशीर मानले जाते.",
  },
  {
    q: "Medicinal Mushroom Training उपलब्ध आहे का?",
    a: "होय, आम्ही Cordyceps Militaris (किडा जडी), Reishi (गॅनोडर्मा), Lion's Mane, आणि Turkey Tail सारख्या अत्यंत मौल्यवान मेडिसिनल मशरूमचे हाय-टेक कल्टिव्हेशन प्रशिक्षण आणि प्रॅक्टिकल मार्गदर्शन देतो.",
  },
  {
    q: "Lion’s Mane Mushroom cultivation कसे सुरू करावे?",
    a: "Lion's Mane हे ब्रेन हेल्थसाठी अत्यंत गुणकारी मशरूम आहे. हे लाकडाच्या भुशापासून (sawdust blocks) बनवलेल्या सबस्ट्रेट बॅग्समध्ये नियंत्रित तापमान आणि आर्द्रतेमध्ये कल्टिव्हेट केले जाते. आमचे ट्रेनिंग या कल्टिव्हेशनची परिपूर्ण तांत्रिक माहिती कव्हर करते.",
  },
  {
    q: "Reishi Mushroom business profitable आहे का?",
    a: "होय, औषधी गुणांमुळे सुक्या रीशी मशरूमला वेलनेस इंडस्ट्रीत ₹3,000 ते ₹8,000 प्रति किलोपर्यंतचा उच्च बाजारभाव मिळतो, ज्यामुळे रीशी मशरूम व्यवसाय अतिशय फायदेशीर ठरतो.",
  },
  {
    q: "Mushroom farm setup cost किती येते?",
    a: "लहान घरगुती फार्म सेटअपसाठी ₹15,000 ते ₹25,000 पर्यंत तर मोठ्या औद्योगिक व्यावसायिक प्रकल्पांसाठी (Commercial Turnkey setups) ₹2 लाखांपासून पुढे खर्च येतो, ज्यामध्ये बँक सबसिडी देखील मिळते.",
  },
  {
    q: "Government subsidy available for mushroom farming?",
    a: "होय, केंद्र व राज्य सरकारच्या कृषी योजनांतर्गत (NABARD / NHB द्वारे) मशरूम शेतीसाठी शेतकऱ्यांना आणि नवउद्योजकांना 40% ते 50% पर्यंत शासकीय सबसिडी उपलब्ध आहे.",
  },
  {
    q: "Mushroom consultancy services available?",
    a: "होय, आमची संस्था व्यावसायिक शेड प्लॅनिंग, व्हेंटिलेशन डिझाइन, तापमान यंत्रणा उभारणी, पीक संरक्षण (disease management) आणि हमखास उत्पन्नासाठी वर्षभर तज्ज्ञ कन्सल्टन्सी सेवा पुरवते.",
  },
  {
    q: "Fresh and dry mushroom business कसा सुरू करावा?",
    a: "तुम्ही ताज्या मशरूमसाठी स्थानिक हॉटेल्स व भाजी मंडई टार्गेट करू शकता. तसेच राहिलेले मशरूम वाळवून ड्राय मशरूम म्हणून थेट फार्मा कंपन्या किंवा B2B डीलर्सना चांगल्या नफ्यात विकू शकता. कल्टिव्हेशनपासून विक्रीपर्यंतची संपूर्ण दिशा आम्ही आमच्या ट्रेनिंगमध्ये स्पष्ट करतो.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://organicmushroomsfarm.com/#website",
      url: "https://organicmushroomsfarm.com",
      name: "Organic Mushroom Farm",
      publisher: {
        "@id": "https://organicmushroomsfarm.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://organicmushroomsfarm.com/faq#webpage",
      url: "https://organicmushroomsfarm.com/faq",
      name: "Mushroom Farm Setup FAQs: आपके सभी सवालों के जवाब",
      description: "मशरूम फार्मिंग से जुड़े सभी सवालों के जवाब पाएँ। Oyster, Button और Milky मशरूम के Setup cost, training, और मुनाफे की पूरी जानकारी यहाँ मौजूद है।",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/faq#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://organicmushroomsfarm.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FAQ",
          item: "https://organicmushroomsfarm.com/faq",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://organicmushroomsfarm.com/faq#faqpage",
      mainEntity: faqsForSchema.map(faq => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a
        }
      }))
    }
  ],
};

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 relative z-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FAQClientPage />
    </main>
  );
}
