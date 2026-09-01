
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Images, Camera, Play, Video, ArrowRight, X, ZoomIn, Info, HelpCircle, 
  ChevronDown, MessageCircle, FileText, Scale, Shield, AlertCircle, Phone, 
  Mail, MapPin, Search, Plus
} from 'lucide-react';
import SEO from '@/src/components/SEO';
import MushroomSEOSections from '@/src/components/MushroomSEOSections';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqs = [
    {
      q: "What is commercial mushroom farming and how to start?",
      a: "Mushroom farming is the white revolution in Indian agriculture. To start commercially, you need a controlled indoor space, quality spawn, and standardized substrate. We provide a complete commercial button mushroom farming course to help you start from scratch.",
    },
    {
      q: "How to start commercial mushroom farming in India?",
      a: "Starting mushroom farming in India requires understanding regional climates. You can start with our online mushroom farming training which covers site selection, climate control, and step-by-step SOPs for Pan India and global success.",
    },
    {
      q: "What is the cost of commercial mushroom farming setup?",
      a: "A small-scale organic mushrooms farm India setup for beginners starts around ₹2-5 Lakhs. For commercial units (20T-30T), investment ranges from ₹15-25 Lakhs. We assist with cost-effective commercial turnkey solutions.",
    },
    {
      q: "Do you provide mushroom training in all states of India?",
      a: "Yes, we provide mushroom training in Madhya Pradesh, Maharashtra, Uttar Pradesh, Bihar, Delhi, Rajasthan, Gujarat, Punjab, Haryana, Chhattisgarh, Jharkhand, and all other states across India via our digital platforms and site visits.",
    },
    {
      q: "Is online commercial mushroom training available in India?",
      a: "Yes, we offer the most affordable online mushroom training in India for just ₹399. It includes lifetime access to commercial video modules, marketing tips, and technical support.",
    },
    {
      q: "What is the profit in a commercial mushroom farming business?",
      a: "The commercial mushroom farming business India is highly profitable. With proper management, you can expect an ROI of 70% to 120% per year. Fresh button mushrooms often sell for ₹120-180/kg in wholesale markets.",
    },
    {
      q: "How much space is required for commercial mushroom farming?",
      a: "For a commercial 18x70 ft room, you need about 1260 sq. ft. of space. However, small home units can start in as little as 100-200 sq. ft.",
    },
    {
      q: "Do you provide turnkey farm setup across India & Globally?",
      a: "Yes, we are a leading commercial turnkey project consultant providing farm setup services in MP, Maharashtra, UP, Bihar, across Pan India, and for international clients in USA and Australia.",
    },
    {
      q: "Which mushroom is best for commercial beginners?",
      a: "Oyster mushrooms are easiest for beginners due to lower tech requirements. However, Button mushrooms have a much larger market share in India, which we cover in our professional commercial training.",
    },
    {
      q: "Is commercial mushroom farming profitable in India?",
      a: "Absolutely. With the rising global demand for organic protein sources, commercial mushroom farming in India is one of the fastest-growing agri-business sectors.",
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

  return (
    <div className="min-h-screen">
      <SEO
        title="Mushroom Farm Setup FAQs: आपके सभी सवालों के जवाब"
        description="मशरूम फार्मिंग से जुड़े सभी सवालों के जवाब पाएँ। Oyster, Button और Milky मशरूम के Setup cost, training, और मुनाफे की पूरी जानकारी यहाँ मौजूद है।"
        url="/faq"
      />
      <PageHero
        title="Frequently Asked Questions | Mushroom Farming & Training"
        description="Providing expert guidance on commercial mushroom farming training, farm setup, and agribusiness development across India and worldwide."
      />
      <section className="section-padding pt-0 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-5 space-y-4 text-center">
            <h2 className="text-xl md:text-sm font-bold dark:text-white text-slate-900">
              Welcome to the official FAQ Hub of Organic Mushroom Farm.
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-sm">
              If you're planning to start a commercial mushroom farming business, you may have questions about investment, infrastructure, farm setup, production, and profitability. This page provides clear, accurate, and practical answers to the most common questions asked by aspiring mushroom entrepreneurs.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-sm">
              Our expertise focuses on the commercial cultivation of Oyster, Button, and Milky mushrooms. Here, you'll find detailed information about setup costs, farm planning, profit potential, production systems, and our hands-on training programs conducted across states such as Madhya Pradesh, Uttar Pradesh, Bihar, Maharashtra, and etc. many other regions.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-sm">
              Whether you're a complete beginner starting from scratch or an experienced farmer looking to scale your operations, our expert team is here to support you at every stage. If you can't find the answer you're looking for below, feel free to contact our consultancy team for personalized guidance.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-sm font-medium">
              Let's answer your questions and help you build a successful mushroom farming business.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Collapsible key={i} title={faq.q}>
                <p className="dark:text-slate-400 text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </Collapsible>
            ))}
          </div>

          <div className="mt-16 glass p-3 rounded-3xl border dark:border-white/10 border-black/10 text-center">
            <h1 className="text-xl md:text-xl dark:text-white text-slate-900 font-bold mb-4">
              Still have commercial setup questions?
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-sm mb-6">
              Our global experts are available for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact"
                className="btn-primary px-5 py-2 rounded-xl font-bold"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/919203544140"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-2 rounded-xl font-bold"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pan India Service Mentions for SEO */}
      <section className="section-padding dark:bg-white/5 bg-black/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="dark:text-white text-slate-900 font-bold mb-5 uppercase tracking-widest text-sm">
            Serving Pan India & Global Markets
          </h2>
          <p className="text-slate-500 text-xs leading-relaxed max-w-4xl mx-auto">
            Our commercial mushroom training and turnkey setup services are
            available in Madhya Pradesh, Maharashtra, Uttar Pradesh, Bihar,
            Delhi, राजस्थान, गुजरात, पंजाब, हरियाणा, छत्तीसगढ़, झारखंड, पश्चिम
            बंगाल, उत्तराखंड, और अन्य सभी राज्यों में। We are committed to
            fostering the biggest{" "}
            <strong>commercial organic mushrooms farm India</strong> network
            worldwide.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default FAQPage;
