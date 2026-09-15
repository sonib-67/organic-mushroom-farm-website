"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-xl mb-2 overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 text-left font-bold text-[11px] md:text-[12px] dark:text-white text-slate-900 transition-colors hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={16} className="text-emerald-500 shrink-0 ml-2" /> : <ChevronDown size={16} className="text-emerald-500 shrink-0 ml-2" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-3 pb-3 text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700 leading-relaxed border-t dark:border-white/5 border-black/5 pt-2"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Subtle ambient light gradient glows (Transparent, no opaque blocks) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      <article className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
        
        {/* Header Section */}
        <header className="text-center space-y-3 mb-6 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2rem] p-6 shadow-sm relative overflow-hidden">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-500">Questions</span>
          </h1>
          <h2 className="text-[12px] md:text-[13px] font-bold dark:text-white text-slate-900">
            Welcome to the official FAQ Hub of Organic Mushroom Farm.
          </h2>
          <div className="text-[10px] md:text-[11px] space-y-2 dark:text-slate-300 text-slate-700 leading-relaxed max-w-2xl mx-auto">
             <p>
              If you're planning to start a commercial mushroom farming business, you may have questions about investment, infrastructure, farm setup, production, and profitability. This page provides clear, accurate, and practical answers to the most common questions asked by aspiring mushroom entrepreneurs.
             </p>
             <p>
              Our expertise focuses on the commercial cultivation of Oyster, Button, and Milky mushrooms. Here, you'll find detailed information about setup costs, farm planning, profit potential, production systems, and our <Link href="/training" className="text-emerald-600 font-bold hover:underline">hands-on training programs</Link> conducted across states such as Madhya Pradesh, Uttar Pradesh, Bihar, Maharashtra, and many other regions.
             </p>
             <p>
              Whether you're a complete beginner starting from scratch or an experienced farmer looking to scale your operations, our expert team is here to support you at every stage. If you can't find the answer you're looking for below, feel free to contact our <Link href="/contact" className="text-emerald-600 font-bold hover:underline">consultancy team</Link> for personalized guidance. Let's answer your questions and help you build a successful mushroom farming business.
             </p>
          </div>
        </header>

        {/* FAQ List */}
        <section className="space-y-1">
          <FAQItem 
            question="What is commercial mushroom farming and how to start?" 
            answer={<>Mushroom farming is the white revolution in Indian agriculture. To start commercially, you need a controlled indoor space, quality spawn, and standardized substrate. We provide a <Link href="/training" className="text-emerald-600 font-bold hover:underline">complete commercial button mushroom farming course</Link> to help you start from scratch.</>} 
          />
          <FAQItem 
            question="What government subsidies are available?" 
            answer={<>Various state governments and the National Horticulture Board (NHB) provide 40-50% subsidies for industrial mushroom units. We provide full documentation support for your <Link href="/subsidy" className="text-emerald-600 font-bold hover:underline">subsidy application</Link>.</>} 
          />
          <FAQItem 
            question="Where can I sell my commercial harvested mushrooms?" 
            answer={<>We provide global and domestic market linkage support. You can sell to local wholesale markets, hotels, supermarkets, or through our network of verified commercial B2B buyers across India and abroad.</>} 
          />
          <FAQItem 
            question="पुण्यामध्ये मशरूम शेती सुरू करण्यासाठी किती गुंतवणूक लागते?" 
            answer={<>पुण्यात मशरूम शेती सुरू करण्यासाठी लागणारी गुंतवणूक तुमच्या स्तरावर (scale) अवलंबून असते. घरगुती स्तरावर (Small scale) तुम्ही फक्त ₹10,000 ते ₹25,000 मध्ये ऑयस्टर मशरूम कल्टिव्हेशन सुरू करू शकता. व्यावसायिक स्तरावर (<Link href="/turnkey-projects" className="text-emerald-600 font-bold hover:underline">Commercial Unit Setup</Link>) हे सुरू करण्यासाठी ₹1.5 लाख ते ₹5 लाख किंवा त्याहून अधिक गुंतवणूक लागते.</>} 
          />
          <FAQItem 
            question="Pune mushroom farming training center near me?" 
            answer={<>जर तुम्ही पुणे, पिंपरी-चिंचवड किंवा आसपासच्या भागात उत्कृष्ट प्रशिक्षण केंद्र शोधत असाल, तर 'Organic Mushrooms Farm' हे सर्वात विश्वसनीय नाव आहे. आम्ही संपूर्ण कल्टिव्हेशन, स्पॉन बनवणे, मार्केटिंग आणि बँक सबसिडी कन्सल्टन्सीचे <Link href="/training" className="text-emerald-600 font-bold hover:underline">ऑनलाईन व ऑफलाईन प्रॅक्टिकल ट्रेनिंग</Link> देतो.</>} 
          />
          <FAQItem 
            question="ऑनलाईन मशरूम प्रशिक्षण उपलब्ध आहे का?" 
            answer={<>होय! आमचे अतिशय सविस्तर डिजिटल ऑनलाईन मशरूम प्रशिक्षण पुण्यात घरबसल्या उपलब्ध आहे. अवघ्या ₹399 मध्ये लाईफटाईम व्हिडिओ ॲक्सेस, <Link href="/training" className="text-emerald-600 font-bold hover:underline">ट्रेनिंग सर्टिफिकेट आणि तज्ज्ञ टीमचा व्हॉट्सॲप सपोर्ट</Link> दिला जातो.</>} 
          />
          <FAQItem 
            question="ऑफलाइन प्रॅक्टिकल प्रशिक्षण दिले जाते का?" 
            answer={<>होय, थेट प्रॅक्टिकल आणि हाताने काम करून शिकण्यासाठी आमचे मुख्य कल्टिव्हेशन फार्म उपलब्ध आहे, जिथे राहण्याची आणि जेवणाची सर्व सोयींयुक्त व्यवस्था केली जाते.</>} 
          />
          <FAQItem 
            question="Oyster Mushroom Farming in Pune profitable आहे का?" 
            answer={<>होय, पुण्यात ऑयस्टर मशरूम शेती अत्यंत फायदेशीर (highly profitable) आहे. पुण्यात असणाऱ्या मोठ्या हॉटेल्स, रेस्टॉरंट्स आणि आरोग्याविषयी जागरूक लोकांच्या वाढत्या संख्येमुळे ताज्या आणि सुक्या ऑयस्टर मशरूमला खूप चांगला बाजारभाव मिळतो.</>} 
          />
          <FAQItem 
            question="Mushroom Spawn Supplier in Pune कुठे मिळेल?" 
            answer={<>Organic Mushrooms Farm पुणे आणि आसपासच्या सर्व जिल्ह्यांमध्ये उच्च प्रतीचे, लॅब-सर्टिफाइड आणि <Link href="/spawn-seed" className="text-emerald-600 font-bold hover:underline">दर्जेदार मशरूम स्पॉन</Link> (Oyster, Milky, Button & Medicinal F1 Spawn) घरपोच डिलिव्हरी द्वारे सुरक्षितपणे पुरवते.</>} 
          />
          <FAQItem 
            question="Button Mushroom Farming Pune मध्ये करता येते का?" 
            answer={<>होय, पुण्यात बटन मशरूम कल्टिव्हेशन सहज शक्य आहे. उन्हाळ्यात यासाठी एसी किंवा तापमान नियंत्रित करण्यासाठी खास इन्सुलेशन रूमची आवश्यकता असते, तर हिवाळ्याच्या मोसमात हे अगदी नैसर्गिक वातावरणातही उत्तम प्रकारे घेता येते.</>} 
          />
          <FAQItem 
            question="Milky Mushroom cultivation Maharashtra साठी योग्य आहे का?" 
            answer={<>होय, मिल्की मशरूम उष्ण हवामानामध्ये वेगाने वाढणारे असल्यामुळे महाराष्ट्रातील आणि पुण्याच्या उन्हाळ्याच्या हवामानासाठी हे कल्टिव्हेशन अत्यंत उत्तम आणि फायदेशीर मानले जाते.</>} 
          />
          <FAQItem 
            question="Medicinal Mushroom Training उपलब्ध आहे का?" 
            answer={<>होय, आम्ही Cordyceps Militaris (किडा जडी), Reishi (गॅनोडर्मा), Lion's Mane, आणि Turkey Tail सारख्या अत्यंत मौल्यवान मेडिसिनल मशरूमचे हाय-टेक कल्टिव्हेशन प्रशिक्षण आणि प्रॅक्टिकल मार्गदर्शन देतो.</>} 
          />
          <FAQItem 
            question="Lion’s Mane Mushroom cultivation कसे सुरू करावे?" 
            answer={<>Lion's Mane हे ब्रेन हेल्थसाठी अत्यंत गुणकारी मशरूम आहे. हे लाकडाच्या भुशापासून (sawdust blocks) बनवलेल्या सबस्ट्रेट बॅग्समध्ये नियंत्रित तापमान आणि आर्द्रतेमध्ये कल्टिव्हेट केले जाते. आमचे ट्रेनिंग या कल्टिव्हेशनची परिपूर्ण तांत्रिक माहिती कव्हर करते.</>} 
          />
          <FAQItem 
            question="Reishi Mushroom business profitable आहे का?" 
            answer={<>होय, औषधी गुणांमुळे सुक्या रीशी मशरूमला वेलनेस इंडस्ट्रीत ₹3,000 ते ₹8,000 प्रति किलोपर्यंतचा उच्च बाजारभाव मिळतो, ज्यामुळे रीशी मशरूम व्यवसाय अतिशय फायदेशीर ठरतो.</>} 
          />
          <FAQItem 
            question="Mushroom farm setup cost किती येते?" 
            answer={<>लहान घरगुती फार्म सेटअपसाठी ₹15,000 ते ₹25,000 पर्यंत तर मोठ्या औद्योगिक व्यावसायिक प्रकल्पांसाठी (<Link href="/turnkey-projects" className="text-emerald-600 font-bold hover:underline">Commercial Turnkey setups</Link>) ₹2 लाखांपासून पुढे खर्च येतो, ज्यामध्ये बँक सबसिडी देखील मिळते.</>} 
          />
          <FAQItem 
            question="Government subsidy available for mushroom farming?" 
            answer={<>होय, केंद्र व राज्य सरकारच्या कृषी योजनांतर्गत (NABARD / NHB द्वारे) मशरूम शेतीसाठी शेतकऱ्यांना आणि नवउद्योजकांना 40% ते 50% पर्यंत <Link href="/subsidy" className="text-emerald-600 font-bold hover:underline">शासकीय सबसिडी उपलब्ध</Link> आहे.</>} 
          />
          <FAQItem 
            question="Mushroom consultancy services available?" 
            answer={<>होय, आमची संस्था व्यावसायिक शेड प्लॅनिंग, व्हेंटिलेशन डिझाइन, तापमान यंत्रणा उभारणी, पीक संरक्षण (disease management) आणि हमखास उत्पन्नासाठी वर्षभर तज्ज्ञ <Link href="/contact" className="text-emerald-600 font-bold hover:underline">कन्सल्टन्सी सेवा</Link> पुरवते.</>} 
          />
          <FAQItem 
            question="Fresh and dry mushroom business कसा सुरू करावा?" 
            answer={<>तुम्ही ताज्या मशरूमसाठी स्थानिक हॉटेल्स व भाजी मंडई टार्गेट करू शकता. तसेच राहिलेले मशरूम वाळवून ड्राय मशरूम म्हणून थेट फार्मा कंपन्या किंवा B2B डीलर्सना चांगल्या नफ्यात विकू शकता. कल्टिव्हेशनपासून विक्रीपर्यंतची संपूर्ण दिशा आम्ही आमच्या <Link href="/training" className="text-emerald-600 font-bold hover:underline">ट्रेनिंगमध्ये</Link> स्पष्ट करतो.</>} 
          />
        </section>

        {/* Footer Contact CTA */}
        <section className="mt-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm p-5 rounded-2xl border dark:border-white/10 border-black/10 text-center shadow-sm">
          <h2 className="text-[12px] md:text-[13px] dark:text-white text-slate-900 font-bold mb-2">
            Still have commercial setup questions?
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-[10px] md:text-[11px] mb-4">
            Our global experts are available for a consultation.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="/contact"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xs"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/919203544140"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xs"
            >
              WhatsApp Now
            </a>
          </div>
        </section>

        {/* Pan India Service Mentions for SEO */}
        <section className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm p-5 rounded-2xl border dark:border-white/10 border-black/10 text-center shadow-sm mb-6">
          <h3 className="dark:text-white text-slate-900 font-bold mb-2 uppercase tracking-widest text-[10px]">
            Serving Pan India & Global Markets
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-[9px] md:text-[10px] leading-relaxed max-w-2xl mx-auto">
            Our commercial mushroom training and turnkey setup services are available in Madhya Pradesh, Maharashtra, Uttar Pradesh, Bihar, Delhi, राजस्थान, गुजरात, पंजाब, हरियाणा, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, उत्तराखंड, और अन्य सभी राज्यों में। We are committed to fostering the biggest <strong>commercial organic mushrooms farm India</strong> network worldwide.
          </p>
        </section>

      </article>
    </>
  );
}
