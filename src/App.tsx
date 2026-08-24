/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

const ValidationError = ({ prefix, field, errors, className }: any) => null;
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle2,
  TrendingUp,
  Users,
  Sprout,
  ShieldCheck,
  Calculator,
  BookOpen,
  Clock,
  ShoppingCart,
  Award,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  MapPin,
  Briefcase,
  Play,
  Download,
  Layers,
  Shield,
  Zap,
  Info,
  Quote,
  Home,
  Waves,
  Calendar,
  Globe,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProcessDetailPage from "./pages/ProcessDetailPage";
import ModelDetailsPage from "./pages/ModelDetails";
import CompostUnitSpecsPage from "./pages/CompostUnitSpecs";
import TrainingCheckoutPage from "./pages/TrainingCheckoutPage";
import ContactPage from "./pages/ContactPage";

import EnquiryPage from "./pages/EnquiryPage";
import SopsPage from "./pages/Sops";
import ExpertiseDetailsPage from "./pages/ExpertiseDetails";
import SpawnSeedPage from "./pages/SpawnSeed";
import BusinessPlan from "./pages/BusinessPlan";
import MushroomTypes from "./pages/MushroomTypes";
import MushroomTypeDetails from "./pages/MushroomTypeDetails";
import EquipmentPageNew from "./pages/EquipmentPageNew";
import EquipmentInfrastructurePage from "./pages/EquipmentInfrastructurePage";
import EquipmentGrowingRacksPage from "./pages/EquipmentGrowingRacksPage";
import EquipmentCompleteListPage from "./pages/EquipmentCompleteListPage";
import MachineryDirectoryPage from './pages/equipment-directory/MachineryDirectoryPage';
import EquipmentDirectoryPage from './pages/equipment-directory/EquipmentDirectoryPage';
import SafetyDirectoryPage from './pages/equipment-directory/SafetyDirectoryPage';
import InfrastructurePage from './pages/equipment-directory/InfrastructurePage';
import RawMaterialPage from './pages/equipment-directory/RawMaterialPage';
import SubstratePrepPage from './pages/equipment-directory/SubstratePrepPage';
import CompostUnitPage from './pages/equipment-directory/CompostUnitPage';
import SpawnProductionPage from './pages/equipment-directory/SpawnProductionPage';
import LaboratoryPage from './pages/equipment-directory/LaboratoryPage';
import ClimateControlPage from './pages/equipment-directory/ClimateControlPage';
import VentilationPage from './pages/equipment-directory/VentilationPage';
import WaterManagementPage from './pages/equipment-directory/WaterManagementPage';
import HarvestPostHarvestPage from './pages/equipment-directory/HarvestPostHarvestPage';
import ColdChainPage from './pages/equipment-directory/ColdChainPage';
import ProcessingPage from './pages/equipment-directory/ProcessingPage';
import MaterialHandlingPage from './pages/equipment-directory/MaterialHandlingPage';
import ElectricalPowerPage from './pages/equipment-directory/ElectricalPowerPage';
import CleaningBiosecurityPage from './pages/equipment-directory/CleaningBiosecurityPage';
import QualityControlPage from './pages/equipment-directory/QualityControlPage';
import SafetyAdditionalPage from './pages/equipment-directory/SafetyAdditionalPage';
import WasteManagementPage from './pages/equipment-directory/WasteManagementPage';

import BookConsultantPage from "./pages/BookConsultantPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import PaymentCancelledPage from "./pages/PaymentCancelledPage";
import ROICalculatorPage from "./pages/ROICalculatorPage";
import Subsidy from "./pages/Subsidy";
import Blog from "./pages/Blog";
import ArticlePage from "./pages/ArticlePage";
import SuccessStories from "./pages/SuccessStories";
import ProjectSpecsPage from "./pages/ProjectSpecs";
import ArticleBeginnerGuide from "./pages/ArticleBeginnerGuide";
import ArticleOysterMushroomCultivation from "./pages/ArticleOysterMushroomCultivation";
import ArticleMushroomSpawn from "./pages/ArticleMushroomSpawn";
import ArticleMushroomSpawnSeed from "./pages/ArticleMushroomSpawnSeed";
import ArticleOysterMushroom from "./pages/ArticleOysterMushroom";
import ArticleMushroomBusinessPlanIndia from "./pages/ArticleMushroomBusinessPlanIndia";
import ArticleMilkyMushroom from "./pages/ArticleMilkyMushroom";
import ArticleTurnkeySetup from "./pages/ArticleTurnkeySetup";
import ArticleOperations from "./pages/ArticleOperations";
import ArticleOysterCultivation from "./pages/ArticleOysterCultivation";
import ArticleCompostUnit from "./pages/ArticleCompostUnit";
import ArticleButtonMushroom from "./pages/ArticleButtonMushroom";
import ArticleSpawnSeeds from "./pages/ArticleSpawnSeeds";
import ArticleProjectSpecs from "./pages/ArticleProjectSpecs";
import MushroomFarmingUsaGuide from "./pages/MushroomFarmingUsaGuide";
import ArticleMangaloreKarnataka from "./pages/ArticleMangaloreKarnataka";
import ArticleOysterMushroomCultivationIndia from "./pages/ArticleOysterMushroomCultivationIndia";
import ArticleButtonVsOysterMushroom from "./pages/ArticleButtonVsOysterMushroom";
import ArticleBikanerRajasthan from "./pages/ArticleBikanerRajasthan";
import ArticleOnlineTraining from "./pages/ArticleOnlineTraining";
import ArticleOfflineTraining from "./pages/ArticleOfflineTraining";
import ArticleCitiesIndia from "./pages/ArticleCitiesIndia";
import ArticleMushroomTrainingGuideEnglish from "./pages/ArticleMushroomTrainingGuideEnglish";
import ArticleThiruvananthapuramKerala from "./pages/ArticleThiruvananthapuramKerala";
import ArticleGuwahatiAssam from "./pages/ArticleGuwahatiAssam";
import ArticleContactForm from "./pages/ArticleContactForm";
import DisclaimerPage from "./pages/DisclaimerPage";
import ArticleUdaipurRajasthan from "./pages/ArticleUdaipurRajasthan";
import ArticleHomeMushroomFarming from "./pages/ArticleHomeMushroomFarming";
import ArticleMysuruKarnataka from "./pages/ArticleMysuruKarnataka";
import ArticleSiliguriWestBengal from "./pages/ArticleSiliguriWestBengal";
import ArticleBusinessPlanHindi from "./pages/ArticleBusinessPlanHindi";
import ArticleTrainingGuideHindi from "./pages/ArticleTrainingGuideHindi";
import ArticleMushroomTrainingAffordable from "./pages/ArticleMushroomTrainingAffordable";
import ArticleGharParMushroomFarming from "./pages/ArticleGharParMushroomFarming";
import ArticleUltimateGuideHinglish from "./pages/ArticleUltimateGuideHinglish";
import ArticleUSAProfitGuide from "./pages/ArticleUSAProfitGuide";
import ArticleUSAMedicinalIncome from "./pages/ArticleUSAMedicinalIncome";
import ArticleUltimateGuideIndia from "./pages/ArticleUltimateGuideIndia";
import ArticleTamilTrainingGuide from "./pages/ArticleTamilTrainingGuide";
import SEO from "./components/SEO";
import ArticlePracticalGuideHinglish from "./pages/ArticlePracticalGuideHinglish";
import ArticleBusinessPlanIndia from "./pages/ArticleBusinessPlanIndia";
import ArticleTurnkeyCommercialSetup from "./pages/ArticleTurnkeyCommercialSetup";
import ArticleMushroomFarmingRussia from "./pages/ArticleMushroomFarmingRussia";
import ArticleOrganicMushroomFarmGuide from "./pages/ArticleOrganicMushroomFarmGuide";
import ArticleCommercialSetupTraining from "./pages/ArticleCommercialSetupTraining";

import OperationsPage from "./pages/OperationsPage";
import GoogleTranslate from "./components/GoogleTranslate";

import {
  generateReviewSchema,
  generateLocalBusinessSchema,
  generateGlobalFAQSchema,
  generateGlobalProductsSchema,
  generateGlobalServiceSchema,
} from "./utils/seoSchemas";
import MetaPixelTracker from "./components/MetaPixelTracker";
import MushroomSEOSections from "./components/MushroomSEOSections";
import SiteVisitConsultationPage from "./pages/SiteVisitConsultationPage";
import SitemapPage from "./pages/SitemapPage";
import CareersPage from "./pages/CareersPage";
import { parseSEOPathname } from "./utils/seoPathParser";
import MushroomPriceTodayPage from "./pages/MushroomPriceTodayPage";
import MushroomFranchisePage from "./pages/MushroomFranchisePage";
import WorkshopPage from "./pages/WorkshopPage";

import MadhyaPradeshPage from "./pages/MadhyaPradeshPage";
import JabalpurPage from "./pages/JabalpurPage";
import JabalpurBlogPage from "./pages/JabalpurBlogPage";
import StatesPage from "./pages/StatesPage";
import MaharashtraPage from "./pages/MaharashtraPage";
import KarnatakaPage from "./pages/KarnatakaPage";
import TamilNaduPage from "./pages/TamilNaduPage";
import DelhiPage from "./pages/DelhiPage";
import TelanganaPage from "./pages/TelanganaPage";
import WestBengalPage from "./pages/WestBengalPage";
import BiharPage from "./pages/BiharPage";
import ChandigarhPage from "./pages/ChandigarhPage";
import ChhattisgarhPage from "./pages/ChhattisgarhPage";
import KeralaPage from "./pages/KeralaPage";
import GujaratPage from "./pages/GujaratPage";
import PunjabPage from "./pages/PunjabPage";
import RajasthanPage from "./pages/RajasthanPage";
import UttarPradeshPage from "./pages/UttarPradeshPage";
import HaryanaPage from "./pages/HaryanaPage";
import UttarakhandPage from "./pages/UttarakhandPage";
import AndhraPradeshPage from "./pages/AndhraPradeshPage";
import OdishaPage from "./pages/OdishaPage";
import JharkhandPage from "./pages/JharkhandPage";
import PunePage from "./pages/PunePage";
import PuneBlogPage from "./pages/PuneBlogPage";
import AssamPage from "./pages/AssamPage";
import ClimateTrackerPage from "./pages/ClimateTrackerPage";

// --- Constants & Types ---

const ProductionSOP = () => {
  const steps = [
    {
      title: "Phase-I Composting",
      days: "8–10 Days",
      temp: "60–70°C",
      param: "C:N Ratio Control",
      icon: Layers,
    },
    {
      title: "Phase-II Pasteurization",
      days: "5–7 Days",
      temp: "57–60°C",
      param: "Ammonia Level < 10ppm",
      icon: Shield,
    },
    {
      title: "Filling & Spawning",
      days: "1–2 Days",
      temp: "25–28°C",
      param: "Sterile Handling",
      icon: Sprout,
    },
    {
      title: "Spawn Run",
      days: "14–16 Days",
      temp: "24–26°C",
      param: "90% Rel. Humidity",
      icon: Clock,
    },
    {
      title: "Casing Application",
      days: "1–2 Days",
      temp: "22–24°C",
      param: "Soil pH 7.5-8.0",
      icon: Layers,
    },
    {
      title: "Pinning Initiation",
      days: "7–10 Days",
      temp: "16–18°C",
      param: "CO2 Flush < 800ppm",
      icon: Zap,
    },
    {
      title: "Cropping",
      days: "25–30 Days",
      temp: "14–16°C",
      param: "Peak Harvest Quality",
      icon: ShoppingCart,
    },
  ];

  return (
    <section id="sop" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <div className="badge mx-auto mb-4">60-Day Commercial Cycle</div>
          <h2 className="mb-4 text-[18px] md:text-3xl uppercase tracking-tight">
            Commercial Mushroom Production Cycle{" "}
            <span className="gradient-text">SOPs</span>
          </h2>
          <p className="max-w-lg mx-auto text-[11px] md:text-sm dark:text-slate-400 text-slate-600">
            Standardized operational procedures for high-yield button and oyster mushroom cultivation globally.
          </p>
        </div>

        {/* Desktop View: Horizontal Scroll / Cards */}
        <div className="hidden md:flex gap-6 overflow-x-auto pb-12 snap-x scrollbar-hide">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -5 }}
              className="min-w-[300px] snap-center glass border dark:border-white/5 border-black/5 p-6 rounded-3xl relative group transition-all"
            >
              <div className="absolute top-0 right-0 p-4 font-black text-slate-800 text-4xl -z-10 group-hover:text-primary-start/10 transition-colors">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-primary-start/10 flex items-center justify-center mb-6 text-primary-start group-hover:bg-primary-start group-hover:text-white transition-all">
                <s.icon size={20} />
              </div>
              <h3 className="dark:text-white text-slate-900 font-bold text-lg mb-4">
                {s.title}
              </h3>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">
                    Duration
                  </span>
                  <span className="dark:text-white text-slate-900">
                    {s.days}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">
                    Temperature
                  </span>
                  <span className="text-accent">{s.temp}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500 uppercase tracking-widest">
                    Key Param
                  </span>
                  <span className="text-green-400">{s.param}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Accordion (Collapsible) */}
        <div className="md:hidden space-y-2">
          {steps.map((s, i) => (
            <Collapsible key={i} title={`${i + 1}. ${s.title}`}>
              <div className="grid grid-cols-2 gap-4 py-2">
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Duration
                  </div>
                  <div className="dark:text-white text-slate-900 font-bold">
                    {s.days}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Temp
                  </div>
                  <div className="text-accent font-bold">{s.temp}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Key Parameter
                  </div>
                  <div className="text-green-400 font-bold">{s.param}</div>
                </div>
              </div>
            </Collapsible>
          ))}
        </div>

        {/* Progress Timeline Indicator */}
        <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto px-4">
          {steps.map((_, i) => (
            <React.Fragment key={i}>
              <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-[10px] font-bold dark:text-white text-slate-900 shadow-lg">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px dark:bg-white/10 bg-black/10 mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({
  value,
  duration = 1.5,
}: {
  value: string;
  duration?: number;
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      // Check if it's a number or a range
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      if (!isNaN(numericValue) && !value.includes("–")) {
        let start = 0;
        const end = numericValue;
        const totalFrames = Math.min(60, duration * 60);
        let frame = 0;

        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const current = Math.round(end * progress);

          if (frame === totalFrames) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            // Keep the prefix/suffix if it exists (like < 1000)
            const prefix = value.match(/^[^\d]*/)?.[0] || "";
            setDisplayValue(`${prefix}${current}`);
          }
        }, 1000 / 60);

        return () => clearInterval(timer);
      } else if (value.includes("–")) {
        // For ranges like 14–18, let's just fade it in or do a simpler animation
        setDisplayValue(value);
      } else {
        setDisplayValue(value);
      }
    }
  }, [value, isInView, duration]);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 1, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="text-2xl md:text-4xl font-bold dark:text-white text-slate-900 tracking-tighter"
    >
      {displayValue}
    </motion.span>
  );
};

const CriticalParameters = () => {
  const params = [
    {
      label: "Production Temp",
      value: "14–18",
      unit: "°C",
      icon: Zap,
      color: "text-blue-400",
    },
    {
      label: "Air Humidity",
      value: "85–95",
      unit: "%",
      icon: Waves,
      color: "text-cyan-400",
    },
    {
      label: "CO₂ Level",
      value: "< 1000",
      unit: "ppm",
      icon: Info,
      color: "text-green-400",
    },
    {
      label: "Spawn Run Temp",
      value: "24–26",
      unit: "°C",
      icon: TrendingUp,
      color: "text-orange-400",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="badge mx-auto mb-4">Precision Metrics</div>
          <h2 className="mb-4 text-[18px] md:text-3xl uppercase tracking-tight">
            <Link to="/mushroom-types" className="hover:text-current transition-colors">
              Critical{" "}
              <span className="gradient-text">
                Parameters for High-Yield Production
              </span>
            </Link>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-[13px] md:text-base">
            Scientific boundaries for consistent commercial yields in organic
            mushroom farming across India and USA.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {params.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ translateZ: 20 }}
              className="glass p-6 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 text-center group"
            >
              <div className="w-12 h-12 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:text-white transition-all">
                <p.icon size={22} className={p.color} />
              </div>
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">
                {p.label}
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <Counter value={p.value} />
                <span className="text-[14px] font-black text-slate-500">
                  {p.unit}
                </span>
              </div>
              <div className="mt-4 h-1 w-12 dark:bg-white/10 bg-black/10 rounded-full mx-auto overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className={`h-full bg-linear-to-r ${i % 2 === 0 ? "from-primary-start to-primary-mid" : "from-accent to-brand-purple"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcosystemFlow = () => {
  const steps = [
    {
      label: "Raw Material",
      icon: ShoppingCart,
      href: "/process/raw-material",
    },
    {
      label: "Compost Prep",
      icon: Layers,
      href: "/process/compost-preparation",
    },
    { label: "Production Room", icon: Home, href: "/process/production-room" },
    {
      label: "Precision Harvest",
      icon: Sprout,
      href: "/process/precision-harvest",
    },
    { label: "Cold Chain", icon: Zap, href: "/process/cold-chain" },
    {
      label: "Market Linkage",
      icon: TrendingUp,
      href: "/process/market-linkage",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="badge mx-auto mb-4">Commercial Operation Model</div>
          <h2 className="mb-4 text-[18px] md:text-3xl uppercase tracking-tight">
            Complete Commercial Farming{" "}
            <span className="gradient-text">Ecosystem Flow & Setup</span>
          </h2>
        </div>

        <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <Link to={s.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-4 min-w-[140px] md:min-w-[160px] snap-center shrink-0 cursor-pointer group"
                >
                  <div className="icon-box w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center transition-all">
                    <s.icon size={32} />
                  </div>
                  <span className="text-[11px] md:text-[14px] font-bold dark:text-slate-300 text-slate-700 text-center uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {s.label}
                  </span>
                </motion.div>
              </Link>
              {i < steps.length - 1 && (
                <div className="shrink-0 flex items-center justify-center mx-2 md:mx-4">
                  <ArrowRight
                    size={24}
                    className="text-slate-400 dark:text-white/80"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const MushroomComparison = () => {
  const mushrooms = [
    {
      name: "Button Mushroom",
      difficulty: "High Difficulty",
      speed: "Industrial",
      color: "bg-blue-500",
      text: "Premium market share, controlled environment commercial setup.",
    },
    {
      name: "Oyster Mushroom",
      difficulty: "Low–Medium",
      speed: "Easy Growth",
      color: "bg-green-500",
      text: "Low investment start, versatile substrate requirements. Ideal for beginners and detailed multi-page online training.",
    },
    {
      name: "Milky Mushroom",
      difficulty: "Seasonal",
      speed: "High Velocity",
      color: "bg-yellow-500",
      text: "Regional demand focus, high temperature preference perfect for Indian climate.",
    },
    {
      name: "Shiitake & Lion's Mane",
      difficulty: "Premium",
      speed: "Export Grade",
      color: "bg-amber-700",
      text: "High specialty value, intensive cycle management. Best for international markets like USA & Australia.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="badge mx-auto mb-4">
            Top Searched Product Variants
          </div>
          <h2 className="mb-4 text-[18px] md:text-3xl uppercase tracking-tight">
            <Link to="/blog" className="hover:text-current transition-colors">
              High-Yield Commercial Mushroom{" "}
              <span className="gradient-text">Genetics</span>
            </Link>
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block glass border dark:border-white/5 border-black/5 rounded-3xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10">
              <tr>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Mushroom Type
                </th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Difficulty
                </th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Complexity
                </th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Market Segment
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mushrooms.map((m, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${m.color}`}></div>
                      <span className="font-bold dark:text-white text-slate-900 text-sm">
                        {m.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[12px] dark:text-slate-400 text-slate-600 font-medium">
                    {m.difficulty}
                  </td>
                  <td className="px-8 py-5 text-[12px] dark:text-slate-400 text-slate-600 font-medium">
                    {m.speed}
                  </td>
                  <td className="px-8 py-5 text-[12px] text-slate-500 leading-relaxed font-medium">
                    {m.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Swipe Cards */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x scrollbar-hide">
          {mushrooms.map((m, i) => (
            <div
              key={i}
              className="min-w-[280px] snap-center glass border dark:border-white/10 border-black/10 p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-4 h-4 rounded-full ${m.color} shadow-lg shadow-black/50`}
                ></div>
                <h3 className="dark:text-white text-slate-900 font-bold text-lg">
                  {m.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase mb-1">
                    Difficulty
                  </div>
                  <div className="text-[11px] font-bold dark:text-slate-300 text-slate-700">
                    {m.difficulty}
                  </div>
                </div>
                <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                  <div className="text-[8px] font-black text-slate-500 uppercase mb-1">
                    Scale
                  </div>
                  <div className="text-[11px] font-bold dark:text-slate-300 text-slate-700">
                    {m.speed}
                  </div>
                </div>
              </div>
              <p className="text-[13px] dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyProfile = () => {
  return (
    <section id="profile" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <motion.div
            initial={{ opacity: 1, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            
            className="glass border dark:border-white/10 border-black/10 rounded-[3rem] p-8 md:p-12 relative shadow-2xl group overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-start/20 blur-[100px] rounded-full group-hover:bg-primary-start/30 transition-all"></div>

            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden p-3 group-hover:scale-105 transition-all">
                <img
                  src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                  alt="Organic Mushrooms Farm"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                 width="120" height="120" />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-1">
                  Organic Mushrooms Farm
                </h2>
                <p className="text-primary-start font-black text-[10px] uppercase tracking-[0.3em]">
                  Premium Infrastructure Partner
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                {
                  label: "Founder",
                  value: "Tanish Soni",
                  spanClass: "col-span-1",
                },
                {
                  label: "Co-Founder",
                  value: "Dwarka Prasad",
                  spanClass: "col-span-1",
                },
                {
                  label: "Established",
                  value: "2021",
                  spanClass: "col-span-1",
                },
                {
                  label: "Base",
                  value: "Pan India & Global Operations",
                  spanClass: "col-span-1",
                },
                {
                  label: "Business Type",
                  value:
                    "Leading Exporter, Manufacturer & Service Provider of Mushroom Farming, Spawn Supply, Training & Turnkey Farm Setup in India, USA, Australia",
                  spanClass: "col-span-2",
                },
              ].map((item, i) => (
                <div key={i} className={`space-y-1 ${item.spanClass || ""}`}>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    {item.label}
                  </div>
                  <div className="text-sm font-bold dark:text-white text-slate-900">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 mb-8">
              <p className="dark:text-slate-400 text-slate-600 text-[14px] leading-relaxed font-medium">
                Established as India's leading mushroom ecosystem architect, we
                bridge the gap between traditional farming and industrial
                precision. Our mission is to democratize{" "}
                <span className="dark:text-white text-slate-900 font-bold">
                  organic farming
                </span>{" "}
                across India and global markets with high-yield{" "}
                <span className="dark:text-white text-slate-900 font-bold">
                  spawn quality
                </span>
                , comprehensive{" "}
                <span className="dark:text-white text-slate-900 font-bold">
                  training
                </span>{" "}
                modules, and unmatched{" "}
                <span className="dark:text-white text-slate-900 font-bold">
                  India-wide & international support
                </span>{" "}
                systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Industrial Design",
                "Turnkey Builds",
                "Export Quality",
                "PAN-India Ops",
                "Global Setup Consultant",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border dark:border-white/10 border-black/10 text-[10px] font-bold text-slate-500 dark:bg-white/5 bg-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Core Values / Benefits Highlights */}
          <div className="space-y-8">
            <div className="badge">Our Technical Expertise</div>
            <h2 className="text-[18px] md:text-3xl tracking-tight leading-tight uppercase">
              Bridging Technology &{" "}
              <span className="gradient-text">
                Organic Cultivation Setup
              </span>
            </h2>
            <div className="grid gap-4">
              {[
                {
                  icon: Award,
                  title: "Precision Engineering",
                  desc: "Scientific mushroom grow room design optimized for specific climatic zones in India and globally.",
                },
                {
                  icon: Users,
                  title: "Expert Training",
                  desc: "Hands-on certification and online training courses from industry pioneers.",
                },
                {
                  icon: ShieldCheck,
                  title: "Quality Guarantee",
                  desc: "Standardized materials with long-term structural durability for button mushroom setups.",
                },
              ].map((b, i) => (
                <Link
                  to="/expertise-details"
                  key={i}
                  className="flex gap-5 p-5 glass border dark:border-white/5 border-black/5 rounded-2xl group hover:dark:bg-white/5 bg-black/5 transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start group-hover:scale-110 transition-all shrink-0">
                    <b.icon size={22} />
                  </div>
                  <div>
                    <h3 className="dark:text-white text-slate-900 font-bold text-[14px] mb-1">
                        {b.title}
                      </h3>
                    <p className="text-slate-500 text-[12px] leading-snug">
                      {b.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Update existing constants for better icons/data
const COMP_DATA = [
  { label: "Insulation", us: "80-100mm PUF", others: "40-50mm" },
  { feature: "AC Systems", us: "Daikin Industrial", others: "Split ACs" },
  { feature: "Racking", us: "MS / GI", others: "Bamboo" },
  { feature: "Support", us: "Lifetime Video", others: "1 Year" },
  { feature: "Subsidy", us: "Full Document Support", others: "No Support" },
];

const LOCATIONS = [
  "Jabalpur",
  "Sagar",
  "Damoh",
  "Indore",
  "Mumbai",
  "Delhi",
  "Global",
];
const STATES = [
  "Haryana",
  "Punjab",
  "Himachal Pradesh",
  "Uttarakhand",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Rajasthan",
  "Bihar",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Telangana",
  "Andhra Pradesh",
  "Kerala",
];

const NAV_ITEMS = [
  { name: "Home", href: "/", isExternal: false, icon: Home },
  {
    name: "About",
    href: "/about",
    isExternal: false,
    icon: Info,
    subMenu: [
      { name: "Our Story", href: "/about" },
      { name: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    name: "Training",
    href: "/training",
    isExternal: false,
    icon: Award,
  },
  {
    name: "Equipment",
    href: "/equipment",
    isExternal: false,
    icon: Zap,
  },
  {
    name: "Learning",
    href: "/mushroom-types",
    isExternal: false,
    icon: BookOpen,
    subMenu: [
      { name: "Mushroom Types", href: "/mushroom-types" },
      { name: "Business Plan", href: "/business-plan" },
      { name: "ROI Calculator", href: "/roi-calculator" },
      { name: "Daily Prices", href: "/mushroom-price-today" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    isExternal: false,
    icon: Layers,
    subMenu: [
      { name: "Spawn Supply", href: "/spawn-seed" },
      { name: "Compost Production", href: "/services/compost-production" },
      { name: "Consultancy", href: "/services/consultancy" },
      { name: "Marketing Support", href: "/services/marketing-support" },
      { name: "Cold Chain", href: "/services/cold-chain" },
      { name: "Government Subsidy", href: "/subsidy" },
      { name: "Franchise", href: "/mushroom-franchise" },
    ],
  },
  {
    name: "Turnkey Projects",
    href: "/turnkey-projects",
    isExternal: false,
    icon: ShieldCheck,
  },
  {
    name: "Workshop",
    href: "/workshop",
    isExternal: false,
    icon: Calendar,
  },
  { name: "Gallery", href: "/gallery", isExternal: false, icon: ShoppingCart },
  { name: "Live Weather", href: "/mushroom-farm-climate-tracker", isExternal: false, icon: MapPin },
  { name: "Blog", href: "/blog", isExternal: false, icon: BookOpen },
  { name: "FAQ", href: "/faq", isExternal: false, icon: MessageCircle },
  {
    name: "Contact",
    href: "/contact",
    isExternal: false,
    icon: Phone,
    subMenu: [
      { name: "Contact Us", href: "/contact" },
      { name: "On Site Visit", href: "/on-site-consultation" },
      { name: "Call Now", href: "tel:9203544140" }
    ]
  }
];

// --- Components ---

const Collapsible: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass border dark:border-white/5 border-black/5 mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-bold text-sm dark:text-white text-slate-900"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-4 pt-0 text-[13px] dark:text-slate-400 text-slate-600 border-t dark:border-white/5 border-black/5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Background3D = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="blob blob-1 absolute w-[600px] h-[600px] bg-primary-start/10 top-[-100px] left-[-100px] blur-[120px] rounded-full"></div>
    <div className="blob blob-2 absolute w-[500px] h-[500px] bg-accent/10 bottom-[-50px] right-[-100px] blur-[120px] rounded-full"></div>
    <div className="blob blob-1 absolute w-[400px] h-[400px] bg-primary-start/5 top-[40%] left-[20%] blur-[100px] rounded-full"></div>
  </div>
);

import DynamicGreeting from "./components/DynamicGreeting";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null,
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const handleScrollSpy = () => {
      setActiveSection(null);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  if (location.pathname === "/workshop") return null;

  return (
    <>
      <nav
        className={`fixed top-3 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-7xl z-50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] py-2.5 md:py-4 px-3 sm:px-5 md:px-6 lg:px-4 xl:px-8 transition-all duration-300 rounded-[2rem] ${isScrolled ? "translate-y-[-2px]" : ""}`}
        style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.15) 33%, rgba(34, 197, 94, 0.15) 66%, rgba(234, 179, 8, 0.15) 100%)' }}
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-1.5 sm:gap-3 group shrink-0"
          >
            <img
              src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
              alt="Organic Mushrooms Farm"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 shrink-0 object-contain group-hover:scale-110 transition-transform"
             width="120" height="120" />
            <div className="flex flex-col">
              <span className="text-[14px] xs:text-[16px] sm:text-lg md:text-xl lg:text-[12px] xl:text-[15px] 2xl:text-lg font-bold tracking-tight dark:text-white text-slate-900 leading-tight">
                Organic <span className="gradient-text">Mushroom Farm</span>
              </span>
              <DynamicGreeting />
            </div>
          </Link>

          <div className="flex items-center gap-2 xl:gap-4 ml-auto">
            <GoogleTranslate />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 overflow-x-auto no-scrollbar">
            {NAV_ITEMS.map((item) => {
              const isHashLink = item.href.includes("#");
              const hash = isHashLink ? item.href.split("#")[1] : null;

              const isActive = isHashLink
                ? location.pathname === "/" && activeSection === hash
                : location.pathname === item.href &&
                  !location.hash &&
                  activeSection === null;

              const linkProps =
                isHashLink && location.pathname === "/"
                  ? {
                      href: `#${hash}`,
                      onClick: (e: any) => {
                        e.preventDefault();
                        const element = document.getElementById(hash!);
                        if (element) {
                          const offset = 100;
                          const bodyRect =
                            document.body.getBoundingClientRect().top;
                          const elementRect =
                            element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                          window.history.pushState(null, "", `/#${hash}`);
                        }
                      },
                    }
                  : { href: item.href };

              if (isHashLink) {
                return (
                  <div key={item.name} className="relative">
                    {location.pathname === "/" ? (
                      <a
                        {...linkProps}
                        className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`}
                      >
                        {item.name}
                      </Link>
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-2 right-2 xl:left-3 xl:right-3 h-0.5 gradient-bg rounded-full"
                      />
                    )}
                  </div>
                );
              }

              const hasSubMenu =
                (item as any).subMenu && (item as any).subMenu.length > 0;

              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`}
                  >
                    {item.name}
                    {hasSubMenu && (
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform"
                      />
                    )}
                  </Link>
                  {hasSubMenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-[100]">
                      <div className="glass p-2 min-w-[200px] rounded-xl border dark:border-white/10 border-black/10 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)]">
                        {(item as any).subMenu!.map((sub: any) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block px-4 py-2.5 text-[12px] font-bold dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white hover:dark:bg-white/10 bg-black/10 rounded-lg transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-3 right-3 h-0.5 gradient-bg rounded-full"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden dark:text-white text-slate-900 p-2 focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/70"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.22,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ willChange: "transform" }}
              className="absolute right-0 top-0 h-full w-[85%] sm:w-[380px] bg-slate-50 dark:bg-[#09090b] shadow-[-15px_0_40px_rgba(0,0,0,0.45)] rounded-l-[30px] border-l dark:border-white/10 border-black/10 flex flex-col items-center overflow-hidden z-[9999]"
            >
              <div className="flex items-center justify-between p-7 w-full border-b dark:border-white/5 border-black/5 dark:bg-white/5 bg-black/5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg overflow-hidden p-1.5 shrink-0">
                    <img
                      src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                      alt="Organic Mushrooms Farm"
                      className="w-full h-full object-contain"
                     width="120" height="120" />
                  </div>
                  <span className="text-xl font-bold tracking-tight dark:text-white text-slate-900">
                    Organic <span className="gradient-text">Mushroom Farm</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="dark:text-white text-slate-900 p-2.5 dark:bg-white/10 bg-black/11 rounded-full hover:bg-black/15 dark:hover:bg-white/15 transition-all duration-200"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 1, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.25, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
                className="flex-1 w-full flex flex-col items-center justify-start gap-2 px-8 py-10 overflow-y-auto relative z-10"
              >
                {NAV_ITEMS.map((item, i) => {
                  const isHashLink = item.href.includes("#");
                  const hash = isHashLink ? item.href.split("#")[1] : null;
                  const isActive = isHashLink
                    ? location.pathname === "/" && activeSection === hash
                    : location.pathname === item.href &&
                      !location.hash &&
                      activeSection === null;

                  return (
                    <div key={item.name} className="w-full">
                      {isHashLink && location.pathname === "/" ? (
                        <a
                          href={`#${hash}`}
                          onClick={(e) => {
                            setMobileMenuOpen(false);
                            e.preventDefault();
                            const element = document.getElementById(hash!);
                            if (element) {
                              const offset = 80;
                              const bodyRect =
                                document.body.getBoundingClientRect().top;
                              const elementRect =
                                element.getBoundingClientRect().top;
                              const elementPosition = elementRect - bodyRect;
                              const offsetPosition = elementPosition - offset;

                              window.scrollTo({
                                top: offsetPosition,
                                behavior: "smooth",
                              });
                              window.history.pushState(null, "", `/#${hash}`);
                            }
                          }}
                          className={`flex items-center gap-5 text-lg font-bold transition-all py-4 px-6 w-full rounded-2xl group hover:scale-[1.02] hover:dark:bg-white/5 bg-black/5 ${isActive ? "dark:bg-white/10 bg-black/10 text-primary-start shadow-[0_0_30px_rgba(56,189,248,0.25)]" : "dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white"}`}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-primary-start/20 text-primary-start border border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)]" : "dark:bg-white/5 bg-black/5 text-slate-500 group-hover:text-primary-start group-hover:bg-primary-start/10 group-hover:border group-hover:border-primary-start/20"}`}
                          >
                            {item.icon && <item.icon size={20} />}
                          </div>
                          <span className={isActive ? "gradient-text" : ""}>
                            {item.name}
                          </span>
                        </a>
                      ) : (
                        <div className="w-full">
                          {(item as any).subMenu ? (
                            <button
                              onClick={() => {
                                setExpandedMobileMenu((prev) =>
                                  prev === item.name ? null : item.name,
                                );
                              }}
                              className={`flex items-center justify-between text-lg font-bold transition-all py-4 px-6 w-full rounded-2xl group hover:scale-[1.02] hover:dark:bg-white/5 bg-black/5 ${isActive ? "dark:bg-white/10 bg-black/10 text-primary-start shadow-[0_0_30px_rgba(56,189,248,0.25)]" : "dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white"}`}
                            >
                              <div className="flex items-center gap-5">
                                <div
                                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-primary-start/20 text-primary-start border border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)]" : "dark:bg-white/5 bg-black/5 text-slate-500 group-hover:text-primary-start group-hover:bg-primary-start/10 group-hover:border group-hover:border-primary-start/20"}`}
                                >
                                  {item.icon && <item.icon size={20} />}
                                </div>
                                <span
                                  className={isActive ? "gradient-text" : ""}
                                >
                                  {item.name}
                                </span>
                              </div>
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-300 ${expandedMobileMenu === item.name ? "rotate-180" : ""}`}
                              />
                            </button>
                          ) : (
                            <Link
                              to={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-5 text-lg font-bold transition-all py-4 px-6 w-full rounded-2xl group hover:scale-[1.02] hover:dark:bg-white/5 bg-black/5 ${isActive ? "dark:bg-white/10 bg-black/10 text-primary-start shadow-[0_0_30px_rgba(56,189,248,0.25)]" : "dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white"}`}
                            >
                              <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-primary-start/20 text-primary-start border border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)]" : "dark:bg-white/5 bg-black/5 text-slate-500 group-hover:text-primary-start group-hover:bg-primary-start/10 group-hover:border group-hover:border-primary-start/20"}`}
                              >
                                {item.icon && <item.icon size={20} />}
                              </div>
                              <span className={isActive ? "gradient-text" : ""}>
                                {item.name}
                              </span>
                            </Link>
                          )}
                          <AnimatePresence>
                            {(item as any).subMenu &&
                              expandedMobileMenu === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 1 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-20 mt-1 space-y-1 mb-4 flex flex-col">
                                    {(item as any).subMenu.map((sub: any) => (
                                      <Link
                                        key={sub.name}
                                        to={sub.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="py-2 text-sm font-bold text-slate-500 hover:text-primary-start transition-colors"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>

              <div className="w-full p-8 border-t dark:border-white/5 border-black/5 bg-white/[0.02] text-center">
                <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-500 animate-pulse">
                  Organic Ecosystems India & Global
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const features = [
    { text: "Complete Turnkey Project Setup", link: "/articles/turnkey-mushroom-farm-setup-india" },
    { text: "Mushroom Farming Training Program" },
    { text: "Government Subsidy Documentation" },
    { text: "Technical Support India & Worldwide" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden section-padding"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr,0.8fr] gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 1, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          
          className="text-center md:text-left"
        >
          <div className="text-[10px] md:text-sm font-bold text-green-700 dark:text-green-500 uppercase tracking-[0.2em] mb-4 md:mb-6">
            Button, Oyster, Milky, Shiitake & More | Setup, Training & Business
            Support
          </div>
          <h1 className="text-[1.5rem] md:text-4xl lg:text-5xl font-bold dark:text-white text-slate-900 leading-tight mb-4 md:mb-5 tracking-tighter">
            <span className="gradient-text">
              Mushroom Farming in India & Worldwide
            </span>{" "}
            <br />– Complete Solutions for All Mushroom Types
          </h1>
          <p className="text-[0.8125rem] md:text-base dark:text-slate-400 text-slate-600 mb-5 md:mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Complete commercial methodology, calculators, and turnkey solutions for profitable button, oyster, and milky mushroom farming across India and worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-3 gap-x-8 mb-6 dark:border-white/5 border-black/5 border-y py-4 md:py-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <CheckCircle2 size={16} className="text-primary-start" />
                {f.link ? (
                  <Link to={f.link} className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white tracking-tight hover:text-primary-start transition-colors">
                    {f.text}
                  </Link>
                ) : (
                  <span className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    {f.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mb-6 max-w-md mx-auto md:mx-0">
            <Link
              to="/training"
              className="group flex items-center justify-between p-4 rounded-2xl border border-purple-500/30 bg-linear-to-r from-purple-500/5 via-fuchsia-400/5 to-indigo-500/5 dark:from-purple-900/10 dark:via-fuchsia-900/10 dark:to-indigo-900/10 hover:from-purple-500/15 hover:via-fuchsia-400/15 hover:to-indigo-500/15 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300">
                  <Award size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    Mushroom Cultivation Training
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                    Comprehensive online & offline certification programs
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
            </Link>

            <Link
              to="/turnkey-projects"
              className="group flex items-center justify-between p-4 rounded-2xl border border-emerald-500/30 bg-linear-to-r from-emerald-500/5 via-teal-400/5 to-cyan-500/5 dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-cyan-900/10 hover:from-emerald-500/15 hover:via-teal-400/15 hover:to-cyan-500/15 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  <CheckCircle2 size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    Mushroom Farm Setup
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                    Turnkey commercial farm setup & consultancy
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 md:mb-8">
            <Link
              to="/enquiry"
              className="btn-primary w-full sm:w-auto px-10 min-h-[50px] rounded-xl text-sm shadow-2xl shadow-brand-blue/30 flex items-center justify-center font-bold bg-[#7b51f8] hover:bg-[#6841d8] text-white"
            >
              Enquiry Now
            </Link>
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto px-10 min-h-[50px] rounded-xl text-sm flex items-center justify-center font-medium"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:9203544140"
              className="btn-outline w-full sm:w-auto px-10 min-h-[50px] rounded-xl text-sm flex items-center justify-center font-medium"
            >
              Call Now: 9203544140
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-12 pt-4">
            <div>
              <div className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900">
                1.5k+
              </div>
              <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">
                Active Commercial Units
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900">
                98.91%
              </div>
              <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">
                Success Rate Globally
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3D Visual Mock (Glass Card) */}
        <motion.div
          initial={{ opacity: 1, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          
          className="relative lg:block hidden"
        >
          <div className="absolute inset-0 gradient-bg opacity-20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative glass rounded-[2.5rem] p-8 border-white/20 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="text-accent" />
                </div>
                <div>
                  <div className="dark:text-white text-slate-900 font-bold">
                    Turnkey Setup Project
                  </div>
                  <div className="text-xs text-slate-500">
                    Quality Certified Infrastructure
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                Active
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "Commercial Room Size",
                  value: "18 x 70 ft Standard",
                  icon: Layers,
                },
                {
                  label: "Annual High Yield",
                  value: "35,000+ kg",
                  icon: TrendingUp,
                },
                {
                  label: "Cooling Sys (India)",
                  value: "Daikin Industrial",
                  icon: Zap,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between dark:bg-white/5 bg-black/5 p-4 rounded-2xl border dark:border-white/5 border-black/5"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon
                      className="dark:text-slate-400 text-slate-600"
                      size={18}
                    />
                    <span className="text-sm dark:text-slate-300 text-slate-700 font-medium">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-sm dark:text-white text-slate-900 font-bold">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-linear-to-br from-white/10 to-transparent border dark:border-white/10 border-black/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold dark:text-slate-300 text-slate-700">
                  Phase 1 Commercial Cycle
                </span>
                <span className="text-[10px] text-accent font-bold">
                  LIVE PROGRESS
                </span>
              </div>
              <div className="h-2 w-full dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full gradient-bg"
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase">
                <span>Composting</span>
                <span>Pasteurization</span>
                <span>Cropping</span>
              </div>
            </div>
          </div>

          {/* Floating Small Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/20 flex items-center gap-3 shadow-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={16} />
            </div>
            <div className="pr-4">
              <div className="text-[10px] dark:text-slate-400 text-slate-600 font-bold uppercase">
                Global ROI Verified
              </div>
              <div className="text-xs dark:text-white text-slate-900 font-bold">
                120% Yearly Avg
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const chooseItems = [
    {
      title: "Cost Efficiency (15–25% Savings)",
      subtitle:
        "Direct manufacturing eliminates middlemen, ensuring 15–25% lower setup costs.",
      points: [
        "In-house PUF panel production",
        "Own rack fabrication unit",
        "Direct pricing advantage",
        "Strict quality control",
      ],
      icon: TrendingUp,
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Smart B2B Pricing",
      subtitle:
        "Wholesale pricing model for every mushroom farmer regardless of project size.",
      points: [
        "Wholesale pricing model",
        "Volume discounts",
        "Transparent breakdown",
        "No hidden costs",
      ],
      icon: Briefcase,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Nationwide & Global Execution",
      subtitle:
        "Delivery and execution across India & worldwide with expert setup teams.",
      points: [
        "Coverage across all states & UTs in India",
        "International project support",
        "Local installation teams",
        "End-to-end logistics",
      ],
      icon: MapPin,
      color: "from-blue-600/20 to-cyan-500/20",
    },
    {
      title: "Price Match Guarantee",
      subtitle:
        "Lowest cost guarantee without compromising on commercial project quality.",
      points: [
        "Guaranteed lowest pricing",
        "Market comparison support",
        "Extra discount on matching quotes",
        "No quality compromise",
      ],
      icon: ShieldCheck,
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Certified Quality",
      subtitle:
        "Built on international recognized standards for commercial mushroom cultivation.",
      points: [
        "Premium materials only",
        "Multi-level quality checks",
        "Standardized processes",
        "Long-term durability",
      ],
      icon: Award,
      color: "from-amber-400/20 to-orange-500/20",
    },
    {
      title: "Reliable Partnership",
      subtitle:
        "We help you build highly profitable commercial mushroom businesses.",
      points: [
        "Lifetime technical support",
        "Expert B2B consultation",
        "Proven project success",
        "Farmer-first approach",
      ],
      icon: Users,
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-start/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 360 View Video Section Added Before Title */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
          <div className="badge mb-4">Virtual Tour</div>
          <h2 className="mb-4 uppercase tracking-tight">
            Commercial Mushroom Farm <span className="gradient-text">360° View</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
            Explore our state-of-the-art commercial mushroom farm setup. Watch this 360-degree view video to understand the infrastructure and scientific approach we implement for high-yield turnkey projects.
          </p>
          <div className="rounded-3xl overflow-hidden shadow-2xl border dark:border-white/10 bg-black aspect-video relative">
            <video
              className="w-full h-full object-cover"
              controls
              preload="none"
              poster="/images/mushroom360viewimage.jpeg"
              title="Commercial Mushroom Farm 360 View Setup - Modern Infrastructure and Scientific Cultivation"
              aria-label="360 Degree Virtual Tour of Commercial Mushroom Farm Setup displaying modern infrastructure and high-yield turnkey project cultivation"
            >
              <source src="/video/mushroom360viewfarmsetup.mp4" type="video/mp4" />
              <track kind="captions" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* End of 360 View Section */}

        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            className="badge mx-auto mb-4"
          >
            Mushroom Infrastructure Leaders
          </motion.div>
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            className="mb-4"
          >
            Why Choose{" "}
            <span className="gradient-text">
              <Link to="/states">
                Organic Mushrooms Farm for Your Project?
              </Link>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            className="max-w-2xl mx-auto"
          >
            India’s most trusted commercial mushroom farming infrastructure
            partner delivering unmatched value, transparency, and high-yield
            performance globally.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {chooseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass h-full card-padding rounded-2xl border dark:border-white/5 border-black/5 flex flex-col shadow-2xl relative overflow-hidden">
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${item.color} blur-[50px] pointer-events-none opacity-20`}
                ></div>

                <div className="w-12 h-12 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary-start" size={24} />
                </div>

                <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-3">
                    {item.title}
                  </h2>

                <p className="mb-6 flex-1 italic text-slate-500">
                  {item.subtitle}
                </p>

                <ul className="space-y-2">
                  {item.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-[12px] md:text-xs font-semibold dark:text-slate-400 text-slate-600"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary-start"></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FarmingModels = () => {
  const [activeTab, setActiveTab] = useState<"fixed" | "custom">("fixed");
  const [customArea, setCustomArea] = useState<number>(1000);
  const [customBudget, setCustomBudget] = useState<number>(500000);

  const getRecommendedSetup = () => {
    if (customArea >= 5000 || customBudget >= 5000000) {
      return {
        title: "Industrial Turnkey Mushroom Unit",
        desc: "Fully automated climate control with Phase-II bunker integration for high commercial yield.",
      };
    }
    if (customArea >= 1500 || customBudget >= 1500000) {
      return {
        title: "Automated Climate Control Room",
        desc: "Ideal for year-round commercial button mushroom production with PUF panels.",
      };
    }
    return {
      title: "Small-Scale Mushroom Tray System",
      desc: "Cost-effective manual setup for seasonal farming and beginners.",
    };
  };

  const models = [
    {
      name: "Starter Package",
      size: "18 x 30 ft",
      investment: "₹2-12 Lakh",
      yield: "800-1000 kg/cycle",
      features: ["Small Scale", "Manual Ops", "Local Markets"],
      label: "Beginner Choice",
      recommended: false,
    },
    {
      name: "Standard Commercial Model",
      size: "18 x 70 ft",
      investment: "₹15-42 Lakh",
      yield: "3000-3500 kg/cycle",
      features: ["Automated Climate", "Export Ready", "High ROI"],
      label: "Most Popular",
      recommended: true,
    },
    {
      name: "Industrial Factory Unit",
      size: "Compost + 4 Rooms",
      investment: "₹1.5Cr - 2.5Cr",
      yield: "15,000+ kg/cycle",
      features: ["Full Ecosystem", "Full Automation", "Global B2B Supply"],
      label: "Business Pro",
      recommended: false,
    },
  ];

  return (
    <section id="farming-models" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-6 text-center lg:text-left items-center lg:items-end">
          <div className="max-w-xl">
            <div className="badge mb-4 mx-auto lg:mx-0">Investment Paths</div>
            <h2 className="mb-4">
              Commercial Farming <span className="gradient-text">Models</span>,
              Setup Cost & ROI
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Scientifically designed mushroom grow rooms optimized for Indian
              and diverse global climate conditions.
            </p>
          </div>
          <div className="glass p-1 rounded-xl flex gap-1 w-fit">
            <button
              onClick={() => setActiveTab("fixed")}
              className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${activeTab === "fixed" ? "dark:bg-white/10 bg-black/10 dark:text-white text-slate-900" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Fixed Models
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${activeTab === "custom" ? "dark:bg-white/10 bg-black/10 dark:text-white text-slate-900" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Custom Build
            </button>
          </div>
        </div>

        {activeTab === "fixed" ? (
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {models.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                
                className={`relative glass card-padding flex flex-col ${m.recommended ? "border-primary-mid/40 shadow-2xl lg:scale-105 z-10" : "dark:border-white/5 border-black/5"}`}
              >
                {m.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full btn-primary text-[9px] font-black uppercase tracking-widest dark:text-white text-slate-900 shadow-xl">
                    Recommended Model
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-primary-start text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                    {m.label}
                  </div>
                  <h3 className="dark:text-white text-slate-900 tracking-tight">
                    {m.name}
                  </h3>
                  <div className="mt-2 text-slate-500 text-[12px] font-medium">
                    {m.size} Space Required
                  </div>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">
                      Investment Setup Cost
                    </div>
                    <div className="text-xl font-bold dark:text-white text-slate-900">
                      {m.investment}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5">
                    <div className="text-[9px] text-slate-500 font-bold uppercase mb-1">
                      Expected Yield
                    </div>
                    <div className="text-xl font-bold dark:text-white text-slate-900">
                      {m.yield}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {m.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 dark:text-slate-400 text-slate-600 text-[12px] md:text-sm"
                    >
                      <CheckCircle2 size={14} className="text-primary-start" />{" "}
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/model-details"
                  className={`w-full min-h-[44px] py-3 rounded-xl font-bold transition-all text-sm flex justify-center items-center ${m.recommended ? "btn-primary" : "btn-outline"}`}
                >
                  Get Details
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-12 rounded-[3rem] border dark:border-white/10 border-black/10"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-6">
                  Interactive Custom Mushroom Setup Builder
                </h3>
                <div className="space-y-8">
                  <div>
                    <label className="flex justify-between text-sm font-bold dark:text-slate-300 text-slate-700 mb-4">
                      <span>Available Area</span>
                      <span className="text-primary-start">
                        {customArea} sq. ft.
                      </span>
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={customArea}
                      onChange={(e) => setCustomArea(Number(e.target.value))}
                      className="w-full form-range"
                    />
                  </div>
                  <div>
                    <label className="flex justify-between text-sm font-bold dark:text-slate-300 text-slate-700 mb-4">
                      <span>Available Budget</span>
                      <span className="text-primary-start">
                        ₹{(customBudget / 100000).toFixed(1)} Lakhs
                      </span>
                    </label>
                    <input
                      type="range"
                      min="50000"
                      max="10000000"
                      step="50000"
                      value={customBudget}
                      onChange={(e) => setCustomBudget(Number(e.target.value))}
                      className="w-full form-range"
                    />
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-[2rem] dark:bg-white/5 bg-black/5 border border-primary-start/20 text-center flex flex-col items-center justify-center">
                <ShieldCheck size={48} className="text-primary-start mb-6" />
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">
                  Recommended Commercial Setup
                </div>
                <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 leading-tight">
                    {getRecommendedSetup().title}
                  </h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-8 max-w-sm">
                  {getRecommendedSetup().desc}
                </p>
                <Link
                  to="/model-details"
                  className="btn-primary px-8 py-3 rounded-xl text-sm font-bold"
                >
                  View Detailed Specs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [bags, setBags] = useState(2000);
  const [sellingPrice, setSellingPrice] = useState(120);
  const [operatingCost, setOperatingCost] = useState(40);

  const yieldPerBag = 1.5; // kg
  const estimatedInvestment = bags * 1200; // estimated investment formula

  const monthlyProfit = useMemo(() => {
    return (sellingPrice - operatingCost) * (bags * yieldPerBag);
  }, [sellingPrice, operatingCost, bags]);

  const paybackPeriod = useMemo(() => {
    const yearlyProfit = monthlyProfit * 5; // 5 cycles a year usually
    if (yearlyProfit <= 0) return 0;
    return (estimatedInvestment / yearlyProfit) * 12; // in months
  }, [monthlyProfit, estimatedInvestment]);

  const webmcpSchema = {
    "@context": "https://webmcp.dev",
    "@type": "WebMCP",
    tool: {
      name: "home_roi_estimator",
      description:
        "Estimate your mushroom farming profit, investment returns, and payback period on the home page.",
      inputSchema: {
        type: "object",
        properties: {
          bags: {
            type: "number",
            minimum: 500,
            maximum: 10000,
            description: "Number of spawn bags or cultivation beds",
          },
          sellingPrice: {
            type: "number",
            minimum: 80,
            maximum: 250,
            description: "Market selling price per kg in Indian Rupees (INR)",
          },
          operatingCost: {
            type: "number",
            minimum: 20,
            maximum: 80,
            description:
              "Labor and electricity operating expense per kg in Indian Rupees (INR)",
          },
        },
        required: ["bags", "sellingPrice", "operatingCost"],
      },
    },
  };

  return (
    <section id="roi-calculator" className="section-padding overflow-hidden">
      <script type="application/ld+json">{JSON.stringify(webmcpSchema)}</script>
      <div className="max-w-7xl mx-auto">
        <div
          className="glass card-padding border dark:border-white/10 border-black/10 relative"
          data-webmcp-tool="home_roi_estimator"
          data-webmcp-description="Estimate commercial mushroom farming profits based on spawn bags count, selling price, and operating expenses."
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-primary-start/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="badge mb-4 mx-auto lg:mx-0">Profit Analytics</div>
              <h2 className="mb-4">
                <Link to="/roi-calculator" className="hover:text-current transition-colors">
                  Personalized Mushroom Business{" "}
                  <span className="gradient-text">ROI Estimator</span>
                </Link>
              </h2>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0">
                Estimate your mushroom farming profits based on real-time market
                averages.
              </p>

              <div className="space-y-8 text-left">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="bags-label"
                      htmlFor="bags-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Number of Bags/Beds
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      {bags}
                    </span>
                  </div>
                  <input
                    id="bags-range-input"
                    aria-labelledby="bags-label"
                    aria-label="Number of Bags or Beds"
                    data-webmcp-property="bags"
                    data-webmcp-description="Number of spawn bags or cultivation beds"
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={bags}
                    onChange={(e) => setBags(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="price-label"
                      htmlFor="price-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Market Selling Price (₹/kg)
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      ₹{sellingPrice}
                    </span>
                  </div>
                  <input
                    id="price-range-input"
                    aria-labelledby="price-label"
                    aria-label="Market Selling Price per Kilogram"
                    data-webmcp-property="sellingPrice"
                    data-webmcp-description="Market selling price per kg of mushrooms in Indian Rupees (INR)"
                    type="range"
                    min="80"
                    max="250"
                    step="5"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <label
                      id="cost-label"
                      htmlFor="cost-range-input"
                      className="text-[9px] font-bold text-slate-500 uppercase tracking-widest"
                    >
                      Labor/Electricity Cost (₹/kg)
                    </label>
                    <span className="text-xl font-bold dark:text-white text-slate-900">
                      ₹{operatingCost}
                    </span>
                  </div>
                  <input
                    id="cost-range-input"
                    aria-labelledby="cost-label"
                    aria-label="Labor and Electricity Cost per Kilogram"
                    data-webmcp-property="operatingCost"
                    data-webmcp-description="Labor and electricity operating cost per kg in Indian Rupees (INR)"
                    type="range"
                    min="20"
                    max="80"
                    step="2"
                    value={operatingCost}
                    onChange={(e) => setOperatingCost(Number(e.target.value))}
                    className="w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="glass p-8 rounded-3xl border dark:border-white/10 border-black/10 text-center">
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">
                  Cycle Net Profit
                </div>
                <div
                  className={
                    monthlyProfit > 0
                      ? "text-4xl font-black text-green-400"
                      : "text-4xl font-black text-red-400"
                  }
                >
                  ₹{monthlyProfit.toLocaleString()}
                </div>
              </div>
              <div className="glass p-8 rounded-3xl border dark:border-white/10 border-black/10 text-center">
                <div className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2">
                  Estimated Payback Period
                </div>
                <div className="text-4xl font-black text-primary-start">
                  {paybackPeriod > 0
                    ? `${paybackPeriod.toFixed(1)} Months`
                    : "N/A"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    {
      title: "Consultation",
      days: "Day 1-7",
      desc: "Site survey, feasibility study, and project proposal.",
      icon: Info,
    },
    {
      title: "Setup & Build",
      days: "Day 15-60",
      desc: "Turnkey construction of grow rooms and compost tunnels.",
      icon: Zap,
    },
    {
      title: "Training",
      days: "Day 61-75",
      desc: "Hands-on training on mushroom substrate preparation.",
      icon: BookOpen,
    },
    {
      title: "Production Begins",
      days: "Day 76+",
      desc: "Casing, pinning, and first commercial harvest.",
      icon: Sprout,
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="badge mx-auto mb-4">Commercial Process Flow</div>
          <h2 className="mb-4 uppercase">
            Your <span className="gradient-text">Journey</span> to First
            Commercial Harvest
          </h2>
          <p className="max-w-xl mx-auto">
            A data-driven approach to building a highly successful mushroom
            farm.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-px dark:bg-white/5 bg-black/5 z-0"></div>
          <div className="grid lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand-blue/30 transition-transform">
                  <s.icon
                    className="dark:text-white text-slate-900"
                    size={24}
                  />
                </div>
                <div className="text-primary-start text-[9px] font-black uppercase mb-1 tracking-widest">
                  {s.days}
                </div>
                <h3 className="dark:text-white text-slate-900 mb-3 tracking-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mushroomType: "Button Mushroom",
    projectSize: "Medium Scale",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: "" });

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || "N/A",
            mushroomType: formData.mushroomType,
            projectSize: formData.projectSize,
            message: formData.message,
            _subject: `New Home Page Inquiry from ${formData.name} (${formData.mushroomType})`,
          }),
        },
      );

      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: "" });
        setFormData({
          name: "",
          phone: "",
          email: "",
          mushroomType: "Button Mushroom",
          projectSize: "Medium Scale",
          message: "",
        });
      } else {
        const errorText = await response.text();
        console.error("[FormSubmit] Server error:", errorText);
        setFormState({
          submitting: false,
          succeeded: false,
          error: "Failed to send. Please try again or contact support.",
        });
      }
    } catch (err: any) {
      console.error("[FormSubmit] Submit error:", err);
      setFormState({
        submitting: false,
        succeeded: false,
        error: err.message || "An unexpected error occurred.",
      });
    }
  };

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="home-inquiry"
    >
      <div className="absolute inset-0 gradient-bg opacity-5 -z-10 blur-[120px]"></div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass p-6 md:p-12 lg:p-16 rounded-[3rem] border dark:border-white/10 border-black/10 relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-primary-start/10 blur-[80px] rounded-full group-hover:bg-primary-start/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-brand-purple/10 blur-[80px] rounded-full group-hover:bg-brand-purple/20 transition-all duration-700"></div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Context & Info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="badge">Direct Inquiry</div>
              <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 tracking-tight leading-tight">
                Start Your Commercial{" "}
                <span className="gradient-text">Mushroom Project</span> Today
              </h2>
              <p className="dark:text-slate-400 text-slate-600 text-base leading-relaxed">
                Connect directly with India's most trusted commercial mushroom
                agriculture consultants. Submit your details to get a customized
                site feasibility evaluation & project setup design model layout
                matching your resource availability.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Free pre-feasibility site evaluation guidance",
                  "Direct commercial G1 spawn delivery options",
                  "Subsidy assistance (NHB, NABARD & State-wise)",
                  "Complete HVAC, compost unit & lab setups",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-start/10 flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle2 size={14} className="text-primary-start" />
                    </div>
                    <span className="text-sm dark:text-slate-300 text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-700/20 pt-6 flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20starting%20mushroom%20farming.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-black"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919203544140"
                  className="btn-outline w-full sm:w-auto px-6 py-3 rounded-xl text-center text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2"
                >
                  Call +91 9203544140
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form / Success Screen */}
            <div className="lg:col-span-7">
              <div className="glass p-6 md:p-8 rounded-[2rem] border dark:border-white/5 border-black/5 dark:bg-slate-900/40 bg-white/40 backdrop-blur-xl">
                {formState.succeeded ? (
                  <motion.div
                    initial={{ opacity: 1, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4 space-y-6"
                  >
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto scale-110 border border-green-500/20">
                      <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold dark:text-white text-slate-900">
                          Inquiry Received!
                        </h3>
                      <p className="dark:text-slate-400 text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                        Thank you for your response. Our commercial farming
                        expert specialists will review your project scale and
                        contact you within 2 to 4 working hours.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setFormState({
                          submitting: false,
                          succeeded: false,
                          error: "",
                        })
                      }
                      className="px-6 py-2.5 rounded-lg text-xs bg-primary-start/10 hover:bg-primary-start/20 text-primary-start transition-colors font-bold uppercase tracking-wider"
                    >
                      Send Another Query
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-6 text-center">
                    <h3 className="text-2xl font-bold dark:text-white text-slate-900">
                      Send Instant Inquiry
                    </h3>
                    <p className="text-slate-500 text-sm font-semibold mb-6">
                      Have questions about Mushroom Farming, Spawn, or Turnkey Projects? 
                      Submit your detailed requirements via our dedicated enquiry form and our experts will get back to you!
                    </p>
                    <Link
                      to="/enquiry"
                      className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all text-lg"
                    >
                      Enquiry Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrainingPage = ({ metaDesc }: { metaDesc?: string }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <SEO
        title="Master Mushroom Farming in India | Online Cultivation Training"
        description="Learn to grow Oyster, Button, and Milky mushrooms commercially or at home. Choose our Basic (₹299) or Advanced (₹699) online training. Start your farm today!"
        keywords="Mushroom farming training India, learn oyster mushroom cultivation, button mushroom course, milky mushroom training, start mushroom farm online."
        url="/training"
      />
      <MushroomTraining />

      {/* Additional Page Specific Content */}
      <section className="section-padding dark:bg-black/40 bg-slate-100/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-8">
            Ready to Start Your Commercial Mushroom Farming Journey?
          </h3>
          <Link
            to="/book-consultant"
            className="btn-primary px-10 py-4 rounded-xl text-lg inline-flex items-center gap-3"
          >
            Book Consultant <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const LegacyContactPage = () => {
  const [todayDate, setTodayDate] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    setTodayDate(new Date().toLocaleDateString());
  }, []);

  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    errors: [] as any[],
  });
  const navigate = useNavigate();

  const handleClose = () => {
    setState({ submitting: false, succeeded: false, errors: [] });
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, submitting: true }));
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add _subject
    if (!formData.has("_subject")) {
      formData.append(
        "_subject",
        "Commercial Mushroom Setup Enquiry from " + formData.get("name"),
      );
    }

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        setState({ submitting: false, succeeded: true, errors: [] });
        form.reset();
      } else {
        const errorText = await response.text();
        console.error("[FormSubmit] Server error:", errorText);
        setState({
          submitting: false,
          succeeded: false,
          errors: [{ message: errorText }],
        });
        // fallback
        form.submit();
      }
    } catch (err: any) {
      console.error("[FormSubmit] Email submit failed:", err);
      setState({
        submitting: false,
        succeeded: false,
        errors: [{ message: err.message || String(err) }],
      });
      // fallback
      form.submit();
    }
  };

  const webmcpSchema = {
    "@context": "https://webmcp.dev",
    "@type": "WebMCP",
    tool: {
      name: "mushroom_farming_enquiry_form",
      description:
        "Submit a commercial mushroom farming business or factory setup enquiry. Available for states like Madhya Pradesh, Maharashtra, UP, Bihar, etc.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Full name of the inquirer" },
          email: {
            type: "string",
            format: "email",
            description: "Email address for communications",
          },
          message: {
            type: "string",
            description:
              "Detailed requirements, farm capacity, or location questions for custom setup",
          },
        },
        required: ["name", "email", "message"],
      },
    },
  };

  return (
    <div className="min-h-screen dark:bg-[#0A0A0A] bg-slate-50 overflow-x-hidden pt-24 md:pt-32 pb-12">
      <SEO
        title="Contact Us for Mushroom Setup & Consultancy | Pan India"
        description="Get a consultation for your custom mushroom farm setup. Expert advice on mushroom training, spawn supply, and turnkey projects across India."
        schemas={[webmcpSchema]}
      />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-start/10 border border-primary-start/20 text-[10px] font-black text-primary-start uppercase tracking-widest mb-4">
              Contact Us
            </div>
            <h1 className="text-3xl md:text-6xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight">
              Start Your Commercial{" "}
              <span className="text-primary-start">Mushroom Farming</span>{" "}
              Business Worldwide
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-sm md:text-lg max-w-2xl mx-auto font-medium px-2">
              Ready to build a commercial factory or a small unit? Our
              specialists are here to guide you through every step of button and
              oyster mushroom production.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Details Column */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                {
                  icon: Phone,
                  label: "Call Operations",
                  values: ["+91 9203544140", "+91 7440806690"],
                  href: "tel:+919203544140",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Support",
                  values: ["Chat with Expert"],
                  isWhatsApp: true,
                  href: "https://wa.me/919203544140",
                },
                {
                  icon: Mail,
                  label: "Email Support",
                  values: ["support@organicmushroomsfarm.com"],
                  href: "mailto:support@organicmushroomsfarm.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.isWhatsApp ? "_blank" : undefined}
                  rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-5 bg-white/[0.03] border dark:border-white/10 border-black/10 rounded-2xl group transition-all hover:bg-white/[0.06] ${item.isWhatsApp ? "ring-1 ring-green-500/30" : ""}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.isWhatsApp ? "bg-green-500/20 text-green-400" : "bg-primary-start/20 text-primary-start"}`}
                  >
                    <item.icon
                      size={22}
                      className={item.isWhatsApp ? "animate-pulse" : ""}
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm md:text-base font-bold dark:text-white text-slate-900 tracking-tight">
                      {item.values[0]}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Map Optimized for Mobile */}
            <div className="rounded-2xl border dark:border-white/10 border-black/10 overflow-hidden h-44 md:h-64 dark:bg-white/5 bg-black/5 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6593645366115!2d79.86616429726563!3d23.186307199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0dbcbb97%3A0x15f3810ec56063b4!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1713881900000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            <div className="p-5 bg-white/[0.03] border dark:border-white/10 border-black/10 rounded-2xl flex items-start gap-4">
              <MapPin className="text-primary-start shrink-0" size={20} />
              <div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                  Office Address
                </div>
                <div className="text-sm font-bold dark:text-white text-slate-900 tracking-tight leading-snug">
                  Katangi Road, Jabalpur, Madhya Pradesh – 483105, India
                </div>
              </div>
            </div>
          </div>

          {/* Clean Enquiry Form */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 1, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/[0.02] border dark:border-white/10 border-black/10 p-6 md:p-10 rounded-3xl"
            >
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-2">
                  Mushroom Farming Setup Enquiry Form
                </h2>
                <p className="dark:text-slate-400 text-slate-600 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">
                  Please fill in your details for a callback regarding
                  commercial mushroom setups.
                </p>
              </div>

              <div className="space-y-6 text-center py-4">
                <h3 className="text-xl font-bold dark:text-white text-slate-900">Get Expert Setup Advice</h3>
                <p className="text-slate-500 text-sm">
                  Click below to submit your location and requirements in our main enquiry form.
                </p>
                <Link
                  to="/enquiry"
                  className="inline-block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-lg transition-all"
                >
                  Enquiry Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <CompanyProfile />

      {/* Success Modal */}
      <AnimatePresence>
        {state.succeeded && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={handleClose}
            ></motion.div>

            <motion.div
              initial={{ opacity: 1, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="relative glass p-8 md:p-12 rounded-3xl border dark:border-white/10 border-black/10 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">
                Enquiry Received
              </h2>
              <p className="dark:text-slate-400 text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                Thank you! Your commercial setup enquiry has been received. Our
                expert will call you within{" "}
                <span className="dark:text-white text-slate-900 font-bold underline decoration-primary-start underline-offset-4">
                  24 hours
                </span>
                .
              </p>
              <button
                onClick={handleClose}
                className="w-full py-4 rounded-xl btn-primary font-bold text-xs uppercase tracking-widest transition-all shadow-xl"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StatesSection = () => {
  const allStates = [
    "Madhya Pradesh",
    "Maharashtra",
    "Uttar Pradesh",
    "Bihar",
    "Delhi",
    "Rajasthan",
    "Gujarat",
    "Punjab",
    "Haryana",
    "Chhattisgarh",
    "Jharkhand",
    "West Bengal",
    "Uttarakhand",
    "Karnataka",
    "Tamil Nadu",
    "Telangana",
    "Andhra Pradesh",
    "Kerala",
    "Himachal Pradesh",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="badge mx-auto mb-4">Global & National Service Area</div>
        <h2 className="mb-4 uppercase tracking-tight">
          Active Commercial Project{" "}
          <span className="gradient-text">
            Hubs Globally
          </span>
        </h2>
        <p className="max-w-3xl mx-auto mb-10 font-medium leading-relaxed dark:text-slate-400 text-slate-600">
          We provide commercial mushroom farming training and turnkey setup
          services across all states of India and key international markets,
          ensuring precision and high yield for every climate zone globally.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allStates.map((state) => (
            <a
              key={state}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state + " India")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass border dark:border-white/5 border-black/5 rounded-full text-[10px] font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-primary-start hover:bg-primary-start/20 transition-all"
            >
              {state}
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/pan-india-global-operations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gradient-bg font-extrabold text-sm text-white shadow-lg shadow-primary-start/20 hover:scale-105 transition-all"
          >
            <Globe size={16} className="animate-spin-slow" />
            <span>Pan India & Global Operations</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Visually Hidden SEO Content Container */}
        <div
          className="sr-only absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-rect-0 border-0 pointer-events-none opacity-0"
          aria-hidden="true"
        >
          <p>
            Our expert teams provide <strong>mushroom training in India</strong>{" "}
            and <strong>mushroom farm setup India</strong> services in Madhya
            Pradesh, Maharashtra, Uttar Pradesh, Bihar, Delhi, Rajasthan,
            Gujarat, Punjab, Haryana, Chhattisgarh, Jharkhand, and other major
            regions. We are committed to building the most successful{" "}
            <strong>button mushroom farming business</strong> network globally.
          </p>
          <p>
            <strong>
              Serving Pan India Cities, Towns & Villages for Commercial Mushroom
              Setups:
            </strong>{" "}
            Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata,
            Surat, Pune, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal,
            Visakhapatnam, Pimpri-Chinchwad, Patna, Vadodara, Ghaziabad,
            Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan-Dombivli,
            Vasai-Virar, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi
            Mumbai, Allahabad, Howrah, Ranchi, Gwalior, Jabalpur, Coimbatore,
            Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh,
            Solapur, Hubli-Dharwad, Bareilly, Moradabad, Mysore, Gurgaon,
            Aligarh, Jalandhar, Tiruchirappalli, Bhubaneswar, Salem,
            Mira-Bhayandar, Warangal, Thiruvananthapuram, Bhiwandi, Saharanpur,
            Guntur, Amravati, Bikaner, Noida, Jamshedpur, Bhilai, Cuttack,
            Firozabad, Kochi, Nellore, Bhavnagar, Dehradun, Durgapur, Asansol,
            Rourkela, Nanded, Kolhapur, Ajmer, Akola, Gulbarga, Jamnagar,
            Ujjain, Loni, Siliguri, Jhansi, Ulhasnagar, Jammu,
            Sangli-Miraj-Kupwad, Mangalore, Erode, Belgaum, Kurnool, Ambattur,
            Rajahmundry, Tirunelveli, Malegaon, Gaya, Udaipur, Kakinada,
            Davanagere, Kozhikode, Maheshtala, Rajpur Sonarpur, Bokaro, South
            Dumdum, Bellary, Patiala, Gopalpur, Agartala, Bhagalpur,
            Muzaffarnagar, Bhatpara, Panihati, Latur, Dhule, Rohtak, Korba,
            Bhilwara, Brahmapur, Muzaffarpur, Ahmednagar, Mathura, Kollam,
            Avadi, Kadapa, Rajahmundry, Bilaspur, Shahjahanpur, Satara, Bijapur,
            Rampur, Shivamogga, Chandrapur, Junagadh, Thrissur, Alwar,
            Bardhaman, Kulti, Nizamabad, Parbhani, Tumkur, Khammam,
            Uzhavarkarai, Bihar Sharif, Panipat, Darbhanga, Bally, Aizawl,
            Dewas, Ichalkaranji, Karnal, Bathinda, Jalna, Eluru, Barasat, Kirari
            Suleman Nagar, Purnia, Satna, Mau, Sonipat, Farrukhabad, Sagar,
            Rourkela, Durg, Imphal, Ratlam, Hapur, Arrah, Anantapur, Karimnagar,
            Etawah, Ambernath, North Dumdum, Bharatpur, Begusarai, New Delhi,
            Gandhidham, Baranagar, Tiruvottiyur, Pondicherry, Sikar,
            Thoothukudi, Rewa, Mirzapur, Raichur, Pali, Ramagundam, Silchar,
            Haridwar, Vijayanagaram, Tenali, Nagercoil, Sri Ganganagar, Karawal
            Nagar, Mango, Thanjavur, Bulandshahr, Uluberia, Katni, Sambhal,
            Singrauli, Nadiad, Secunderabad, Naihati, Yamunanagar, Bidhannagar,
            Pallavaram, Bidar, Munger, Panchkula, Burhanpur, Raurkela Industrial
            Township, Kharagpur, Dindigul, Gandhinagar, Hospet, Nangloi Jat,
            Malda, Ongole, Deoghar, Chapra, Haldia, Khandwa, Nandyal, Morena,
            Amroha, Anand, Bhind, Bhusawal, Orai, Bahraich, Vellore, Mehsana,
            Raiganj, Sirsa, Danapur, Serampore, Sultan Pur Majra, Guna, Jaunpur,
            Panvel, Shivpuri, Surendranagar Dudhrej, Unnao, Chinsurah,
            Alappuzha, Kottayam, Machilipatnam, Shimla, Adoni, Udupi, Katihar,
            Proddatur, Mahbubnagar, Saharsa, Dibrugarh, Jorhat, Hazaribagh,
            Hindupur, Nagaon, Sasaram, Hajipur, including all tier-2, tier-3
            cities, localized rural towns and villages across Madhya Pradesh,
            Uttar Pradesh, Maharashtra, Bihar, Rajasthan, Gujarat, Punjab,
            Haryana, and South India.
          </p>
          <p>
            <strong>
              Global Reach & International Mushroom Farming Consultancy:
            </strong>{" "}
            USA (United States of America), Australia, UK (United Kingdom),
            Canada, UAE (Dubai, Abu Dhabi), Saudi Arabia, South Africa, Kenya,
            Nigeria, Europe, Germany, France, Italy, Spain, Netherlands, New
            Zealand, Singapore, Malaysia, Philippines, Vietnam, Japan, South
            Korea, and emerging agricultural hubs worldwide. Supplying organic
            spawn, industrial setup consultancy, and B2B market linkage
            globally.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/workshop") return null;

  return (
    <footer className="pt-20 pb-24 md:pb-12 bg-black/50 border-t dark:border-white/5 border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Global E-E-A-T Profile for SEO Signals */}
        <div className="mb-16 p-8 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-start/20 flex items-center justify-center text-primary-start">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">
                Certified E-E-A-T Excellence
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-4xl">
                <strong className="dark:text-slate-300 text-slate-700">
                  Experience & Expertise:
                </strong>{" "}
                With years of hands-on cultivation of over 10 mushroom varieties
                (Button, Oyster, Milky, Cordyceps) and world-class commercial
                infrastructure setups pan-India.
                <br />
                <strong className="dark:text-slate-300 text-slate-700">
                  Authoritativeness & Trust:
                </strong>{" "}
                Certified by leading agricultural bodies, led by agri-tech
                expert Tanish Soni, and highly rated by thousands of trained
                farmers globally. Verified operations in Jabalpur, MP.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 mb-16 md:grid md:grid-cols-5 md:gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                alt="Organic Mushrooms Farm"
                className="w-14 h-14 object-contain"
               width="120" height="120" />
              <span className="text-lg font-bold tracking-tight dark:text-white text-slate-900">
                Organic <span className="gradient-text">Mushroom Farm</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm text-[13px] leading-relaxed mb-6 font-medium">
              Empowering high-yield organic button & oyster mushroom cultivation
              across India and the globe through standardized SOPs, expert
              commercial training, and industrial-grade turnkey projects.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[8px] font-black text-slate-600 uppercase tracking-[0.3em]">
              {LOCATIONS.map((loc, i) => (
                <span key={loc} className="flex items-center gap-2">
                  {loc}{" "}
                  {i !== LOCATIONS.length - 1 && (
                    <div className="w-1 h-1 rounded-full dark:bg-white/10 bg-black/10"></div>
                  )}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://www.youtube.com/@organicmushroomfarm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-red-500/10 border dark:border-white/5 border-black/5 hover:border-red-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group"
              >
                <Youtube
                  size={16}
                  className="text-red-500 group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">YouTube</span>
              </a>
              <a
                href="https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-blue-500/10 border dark:border-white/5 border-black/5 hover:border-blue-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group"
              >
                <MapPin
                  size={16}
                  className="text-blue-500 group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">Google Profile</span>
              </a>
              <a
                href="https://www.pinterest.com/organicmushroomfarm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-pink-500/10 border dark:border-white/5 border-black/5 hover:border-pink-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white transition-all group"
              >
                <ShieldCheck
                  size={16}
                  className="text-pink-500 group-hover:scale-110 transition-transform"
                />
                <span className="font-medium">Pinterest</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-3 gap-2 sm:gap-4 md:gap-10">
          <div>
            <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Training", href: "/training" },
                { name: "Franchise", href: "/mushroom-franchise" },
                { name: "Mushroom Types", href: "/mushroom-types" },
                { name: "Careers", href: "/careers" },
                { name: "Mushroom Prices", href: "/mushroom-price-today" },
                { name: "Mushroom Farming Usa Guide", href: "/mushroom-farming-usa-guide" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-[10px] sm:text-xs md:text-sm font-medium leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Gallery", href: "/gallery" },
                { name: "Business Plan", href: "/business-plan" },
                { name: "Government Subsidy", href: "/subsidy" },
                { name: "Spawn Supply", href: "/spawn-seed" },
                { name: "Live Weather", href: "/mushroom-farm-climate-tracker" },
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/faq" },
                { name: "Cities Pages", href: "/states" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-[10px] sm:text-xs md:text-sm font-medium leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="dark:text-white text-slate-900 font-bold mb-4 md:mb-6 uppercase tracking-widest text-[8px] md:text-[9px] border-l-2 border-primary-start pl-2 md:pl-3">
              Support & Legal
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Contact", href: "/contact" },
                { name: "Customer Support", href: "/support" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Disclaimer Policy", href: "/disclaimer" },
                { name: "Refund Policy", href: "/refund-policy" },
                { name: "Shipping Policy", href: "/shipping-policy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors text-[10px] sm:text-xs md:text-sm font-medium leading-tight"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t dark:border-white/5 border-black/5 pt-10 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <div className="mb-6 md:mb-0">
            © 2026 Organic Mushrooms Farm. All Rights Reserved.
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {[
              {
                label: "Instagram",
                href: "https://www.instagram.com/organic_mushroom_farm_jabalpur",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/organic.mushroom.farm0",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@organicmushroomfarm",
              },
              {
                label: "Pinterest",
                href: "https://www.pinterest.com/organicmushroomfarm",
              },
              {
                label: "Telegram",
                href: "https://t.me/organicmushroomfarms",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/organic-mushroom-farm-29b970282?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              },
              {
                label: "Quora",
                href: "https://www.quora.com/profile/Organic-Mushroom-Farm-1?ch=10&oid=3146591367&share=4e39c3cd&srid=5xCPIb&target_type=user",
              },
              {
                label: "Twitter",
                href: "https://x.com/mushroomfarmjbp",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-start transition-colors flex items-center gap-2 group"
              >
                {social.label}
                <ArrowRight
                  size={10}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyRazorpayButton = ({
  size = "normal",
}: {
  size?: "normal" | "small";
}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className={`relative overflow-hidden flex items-center justify-center rounded-full group transition-all backdrop-blur-md shadow-[0_8px_32px_rgba(167,139,250,0.15)] hover:shadow-[0_8px_32px_rgba(167,139,250,0.3)] border border-purple-400/40 dark:border-purple-300/30 bg-linear-to-r from-purple-500/10 via-fuchsia-400/10 to-indigo-500/10 dark:from-purple-900/30 dark:via-fuchsia-900/20 dark:to-indigo-900/30 hover:from-purple-500/20 hover:via-fuchsia-400/20 hover:to-indigo-500/20 dark:hover:from-purple-900/40 dark:hover:via-fuchsia-900/30 dark:hover:to-indigo-900/40 text-purple-950 dark:text-purple-100 ${size === "small" ? "h-full w-full p-1.5" : "h-9 w-full md:w-auto md:min-w-[140px] md:px-4"}`}
      >
        <div
          className={`font-bold z-10 flex items-center justify-center gap-1 leading-tight ${size === "small" ? "text-[11px] absolute inset-0 w-full" : "text-[11px] md:text-[12px]"}`}
        >
          <BookOpen size={size === "small" ? 12 : 14} className="shrink-0 text-purple-700 dark:text-purple-300" />
          <span>Join Training</span>
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </button>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 1, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-4xl dark:bg-slate-950 bg-white border border-purple-500/20 rounded-[2rem] p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto z-10"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50"
              >
                <X size={18} />
              </button>

              <div className="text-center mb-8 pr-6 pl-6">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full dark:bg-purple-500/10 bg-purple-500/5 text-purple-600 dark:text-purple-400 border border-purple-500/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                  <Sparkles size={12} /> Live Your Farming Dream
                </div>
                <h3 className="text-xl md:text-3xl font-black dark:text-white text-slate-900 tracking-tight uppercase">
                    Select <span className="gradient-text font-black">Your Training Plan</span>
                  </h3>
                <p className="dark:text-slate-400 text-slate-500 text-[10px] sm:text-xs md:text-sm font-medium leading-tight mt-1">
                  Choose the plan that suits you best. Secure checkout with Razorpay.
                </p>
              </div>

              {/* Quick Choice Buttons at the very top */}
              <div className="grid grid-cols-2 gap-1.5 xs:gap-2.5 md:gap-4 max-w-2xl mx-auto mb-6">
                <button
                  onClick={() => {
                    setShowModal(false);
                    navigate("/training-checkout", { state: { productType: "training_basic", price: "₹299" } });
                  }}
                  className="flex items-center justify-between p-1.5 xs:p-2.5 md:p-3.5 rounded-lg xs:rounded-xl md:rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-left group/btn cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 xs:gap-2 md:gap-3 overflow-hidden">
                    <div className="w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                      <BookOpen size={11} className="xs:size-3.5 md:size-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[7px] xs:text-[9px] md:text-[10px] uppercase font-black tracking-wider text-blue-500">Basic</div>
                      <div className="text-[9px] xs:text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Mushroom ₹299</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 font-bold text-[8px] xs:text-[10px] md:text-[11px] text-blue-600 dark:text-blue-400 shrink-0 ml-1">
                    <span className="hidden sm:inline">Join</span>
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={() => {
                    setShowModal(false);
                    navigate("/training-checkout", { state: { productType: "training_advanced", price: "₹699" } });
                  }}
                  className="flex items-center justify-between p-1.5 xs:p-2.5 md:p-3.5 rounded-lg xs:rounded-xl md:rounded-2xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-all text-left group/btn cursor-pointer ring-1 ring-purple-500/20"
                >
                  <div className="flex items-center gap-1.5 xs:gap-2 md:gap-3 overflow-hidden">
                    <div className="w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                      <Sparkles size={11} className="xs:size-3.5 md:size-4 animate-pulse" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[7px] xs:text-[9px] md:text-[10px] uppercase font-black tracking-wider text-purple-500">Advanced</div>
                      <div className="text-[9px] xs:text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training ₹699</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 font-bold text-[8px] xs:text-[10px] md:text-[11px] text-purple-600 dark:text-purple-400 shrink-0 ml-1">
                    <span className="hidden sm:inline">Join</span>
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Basic Card */}
                <div className="flex flex-col p-5 md:p-6 rounded-2xl dark:bg-white/[0.02] bg-slate-50 border dark:border-white/5 border-slate-200">
                  <span className="badge bg-blue-500/10 text-blue-500 text-[9px] font-bold uppercase tracking-widest mb-2 self-start py-0.5 px-2 rounded-full">
                    Beginner
                  </span>
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                    Basic Cultivation Training
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-2xl md:text-3xl font-black gradient-text">₹299</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                    Perfect for students and hobbyists looking to grow mushrooms at a small home scale.
                  </p>

                  <div className="flex-1 mb-6">
                    <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2.5">What's Included:</h5>
                    <ul className="space-y-2 text-xs">
                      {[
                        "**Oyster & Button** cultivation step-by-step tutorial.",
                        "**Home Setup**: Perfect climate parameters for rooms/backyards.",
                        "**Substrate Preparation**: Boiling, sterilization & bag packing.",
                        "**Contamination Prevention**: Simple hygiene controls."
                      ].map((bullet, i) => {
                        const parts = bullet.split("**");
                        return (
                          <li key={i} className="flex items-start gap-1.5 dark:text-slate-300 text-slate-600 font-medium">
                            <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>
                              {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-bold dark:text-white text-slate-900">{p}</strong> : p)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setShowModal(false);
                      navigate("/training-checkout", { state: { productType: "training_basic", price: "₹299" } });
                    }}
                    className="w-full bg-slate-950 text-white hover:bg-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 py-3 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-95 hover:scale-[1.01] flex items-center justify-center gap-1"
                  >
                    Join Mushroom Training <ArrowRight size={13} />
                  </button>
                </div>

                {/* Advanced Card */}
                <div className="relative flex flex-col p-5 md:p-6 rounded-2xl dark:bg-purple-950/5 bg-purple-50/5 border-2 border-purple-500/80 shadow-[0_4px_25px_rgba(168,85,247,0.15)]">
                  <div className="absolute top-3 right-3 text-[10px] text-purple-500 font-extrabold tracking-widest uppercase flex items-center gap-0.5">
                    <Sparkles size={10} className="animate-pulse" /> RECOMMENDED
                  </div>
                  <span className="badge bg-purple-500/10 text-purple-400 text-[9px] font-bold uppercase tracking-widest mb-2 self-start py-0.5 px-2 rounded-full">
                    Entrepreneur
                  </span>
                  <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                    Advanced Commercial Training
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-2xl md:text-3xl font-black text-purple-500">₹699</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                    Ideal for entrepreneurs and farmers wanting to establish commercial operations and scale.
                  </p>

                  <div className="flex-1 mb-6">
                    <h5 className="text-[9px] font-black text-purple-400 uppercase tracking-widest mb-2.5">What's Included:</h5>
                    <ul className="space-y-2 text-xs">
                      {[
                        "**Everything in Basic** plus additional advanced guides.",
                        "**Advanced Varieties**: Milky (Summer), Oyster & Button Mushrooms.",
                        "**Commercial Shed Setup**: Layout design and low-cost shed options.",
                        "**Automated Climate Systems**: Foggers, AC, & humidity tools.",
                        "**Disease Management**: Treat green mold, flies & bacterial blotch.",
                        "**Marketing & Sales**: Tie-ups, wholesale market selling, ads & social media.",
                        "**Exclusive Perks**: Certified Certificate & active private community support."
                      ].map((bullet, i) => {
                        const parts = bullet.split("**");
                        return (
                          <li key={i} className="flex items-start gap-1.5 dark:text-slate-300 text-slate-600 font-medium">
                            <CheckCircle2 size={13} className="text-purple-500 shrink-0 mt-0.5" />
                            <span>
                              {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-bold dark:text-white text-slate-900">{p}</strong> : p)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setShowModal(false);
                      navigate("/training-checkout", { state: { productType: "training_advanced", price: "₹699" } });
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] py-3 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-95 hover:scale-[1.01] flex items-center justify-center gap-1"
                  >
                    Join Mushroom Training <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    const onScroll = () => {
      if (location.pathname !== "/") return;
      const sections = ["farming-models", "compost-units", "market"];
      let active = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            active = "#" + section;
            break;
          }
        }
      }
      if (active) {
        setCurrentHash(active);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  const isTrainingPage = location.pathname === "/training";
  const showTrainingCTA = ![
    "/training-checkout",
    "/payment-success",
    "/payment-cancelled",
    "/workshop",
  ].includes(location.pathname);

  if (location.pathname === "/workshop") return null;

  const mobileNavItems = [
    { label: "Book Consultant", href: "/book-consultant", icon: Calendar },
    { label: "Spawn (Seed)", href: "/spawn-seed", icon: Sprout },
    { label: "Training", href: "/training", icon: BookOpen },
    { label: "Setup (Turnkey)", href: "/#farming-models", icon: Home },
    { label: "Bags", href: "/#compost-units", icon: Layers },
    { label: "Fresh Mushroom", href: "/#market", icon: ShoppingCart },
    { label: "Call Us", href: "tel:+919203544140", icon: Phone },
  ];

  return (
    <>
      {/* Floating Buttons on Right Side */}
      <div className="fixed right-3 md:right-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-end pointer-events-none bottom-[65px] md:bottom-[20px]">
        <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
          <motion.a
            href="https://wa.me/919203544140"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Organic Mushrooms Farm on WhatsApp"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all z-10 shrink-0 group relative"
          >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></div>
            <MessageCircle size={24} className="md:w-[32px] md:h-[32px] relative z-10" />
          </motion.a>
          <span className="text-[9px] md:text-[11px] font-bold text-slate-800 dark:text-slate-200 shadow-sm leading-tight bg-white/70 dark:bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md border border-black/10 dark:border-white/20">Chat on WhatsApp</span>
        </div>

        {/* Scroll To Top (Desktop) */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 md:w-12 md:h-12 glass rounded-full dark:text-slate-400 text-slate-600 flex items-center justify-center hover:dark:bg-white/10 bg-black/10 transition-all hidden md:flex pointer-events-auto"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </div>

      {/* Floating Buttons on Left Side */}
      <div
        className={`fixed left-3 md:left-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-start pointer-events-none bottom-[65px] md:bottom-[20px]`}
      >
        {showTrainingCTA ? (
          <div className="flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto">
            {/* Desktop Stack */}
            <div className="hidden md:flex flex-col gap-3 items-start">
              <Link
                to="/book-consultant"
                className="glass backdrop-blur-md border dark:border-white/10 border-black/10 dark:text-white text-slate-900 font-bold px-3 py-1.5 rounded-full text-[11px] hover:bg-black/5 dark:hover:bg-white/5 active:bg-primary-start/20 active:text-primary-start active:border-primary-start/30 transition-all flex items-center gap-1.5 shadow-lg shadow-black/5 dark:shadow-white/5"
              >
                <Calendar size={12} /> Book Consultant
              </Link>
              <div className="w-[140px] md:w-auto">
                <StickyRazorpayButton size="normal" />
              </div>
            </div>

            {/* Mobile Stack - Compactly sized to prevent overlapping core text */}
            <div className="flex gap-1 w-full justify-start md:hidden">
              <Link
                to="/book-consultant"
                className="flex-1 flex px-2 h-7.5 rounded-full glass border dark:border-white/10 border-black/10 dark:text-white text-slate-900 items-center justify-center shadow-md font-bold tracking-wide gap-1 text-[8px] active:bg-primary-start/20 active:text-primary-start active:border-primary-start/30 transition-all"
              >
                <Calendar size={10} /> Consult
              </Link>
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-7.5 w-auto min-w-[100px] max-w-[130px] md:hidden relative z-[99998]"
            >
              <StickyRazorpayButton size="small" />
            </motion.div>
          </div>
        ) : (
          <div className="flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto">
            {/* Book Consultant Button (Calendly) - Compact sizing on mobile */}
            <Link
              to="/book-consultant"
              className="flex px-3 md:px-5 h-8 md:h-10 rounded-full glass backdrop-blur-md dark:text-white text-slate-900 items-center justify-center shadow-xl hover:bg-black/5 dark:hover:bg-white/5 active:bg-primary-start/20 active:text-primary-start active:border-primary-start/30 transition-all border dark:border-white/20 border-black/10 font-bold tracking-wide leading-tight gap-1.5 text-[10px] md:text-[13px] order-1 md:order-none"
            >
              <Calendar size={12} className="md:w-4 md:h-4" />
              <span className="hidden md:inline">Book Consultant</span>
              <span className="md:hidden">Book Now</span>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Horizontal Sticky Bottom Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[110] md:hidden backdrop-blur-xl border-t dark:border-white/20 border-black/10 shadow-[0_-8px_32px_0_rgba(31,38,135,0.1)]`}
        style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.15) 33%, rgba(34, 197, 94, 0.15) 66%, rgba(234, 179, 8, 0.15) 100%)' }}
      >
        <div
          className={`overflow-x-auto scrollbar-hide snap-x flex items-center ${isTrainingPage ? "gap-1.5 p-2 px-3" : "gap-2 p-3 px-4"}`}
        >
          {mobileNavItems.map((item, i) => {
            const isExternal =
              item.href.startsWith("tel:") || item.href.startsWith("http");
            const isHashLink = item.href.includes("#");

            // Find if item is active:
            let isActive = false;
            if (isHashLink) {
              const hash = item.href.split("#")[1];
              isActive =
                location.pathname === "/" && currentHash === "#" + hash;
            } else {
              isActive = location.pathname === item.href;
            }

            const className = `snap-start shrink-0 flex items-center justify-center rounded-full border transition-all active:scale-95 ${
              isActive
                ? "bg-primary-start/20 text-primary-start border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)] font-bold"
                : "bg-linear-to-r from-blue-600/10 to-purple-600/10 dark:border-white/10 border-black/10 dark:text-white text-slate-900 hover:border-primary-start/40 active:bg-primary-start/20"
            } ${isTrainingPage ? "gap-1 px-3 py-1.5" : "gap-1.5 px-3.5 py-2"}`;

            
            const content = (
              <>
                <item.icon
                  size={isTrainingPage ? 11 : 13}
                  className={isActive ? "text-primary-start" : "text-primary-start"}
                />
                <span
                  className={`leading-tight tracking-tight font-semibold ${isTrainingPage ? "text-[9px]" : "text-[10px]"}`}
                >
                  {item.label}
                </span>
              </>
            );

            const handleItemClick = (e: React.MouseEvent) => {
              if (isHashLink) {
                e.preventDefault();
                const hash = item.href.split("#")[1];
                if (location.pathname === "/") {
                  const element = document.getElementById(hash);
                  if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                    setCurrentHash("#" + hash);
                    window.history.pushState(null, "", `/#${hash}`);
                  }
                } else {
                  navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                      const offset = 100;
                      const bodyRect =
                        document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                      setCurrentHash("#" + hash);
                    }
                  }, 400);
                }
              }
            };

            if (isExternal) {
              return (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={className}
                >
                  {content}
                </a>
              );
            }

            if (isHashLink) {
              return (
                <a
                  key={i}
                  href={item.href}
                  onClick={handleItemClick}
                  className={className}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={i} to={item.href} className={className}>
                {content}
              </Link>
            );
          })}
          <div className="shrink-0 w-4"></div> {/* Spacer for scroll end */}
        </div>
        {/* Safe area padding for iPhones */}
        <div className="h-[env(safe-area-inset-bottom,0px)] bg-black/20"></div>
      </div>
    </>
  );
};

// --- Main App ---

const RazorpayPaymentButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/training-checkout", { state: { productType: "training_basic", price: "₹299" } })}
      type="button"
      className="relative overflow-hidden rounded-2xl group w-full min-h-[64px] bg-linear-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-transform hover:scale-[1.02] flex items-center justify-center cursor-pointer"
    >
      {/* Custom UI Button that looks good */}
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg md:text-xl z-10 gap-2">
        Enroll Now - ₹<span className="text-2xl">299</span>{" "}
        <ExternalLink size={20} />
      </div>
    </button>
  );
};

const MushroomTraining = () => {
  const navigate = useNavigate();
  const faqs = [
    {
      q: "What is the duration of training?",
      a: "Online training is self-paced with lifetime access. Offline training is typically 3-5 days of intensive hands-on workshop.",
    },
    {
      q: "Is it beginner friendly?",
      a: "Absolutely! Our courses are designed from scratch, making them perfect for students, entrepreneurs, and hobbyists with zero farming background.",
    },
    {
      q: "Will I get support after training?",
      a: "Yes, we provide lifetime technical support for both online and offline students. You also get access to our private community for ongoing guidance.",
    },
  ];

  const curriculum = [
    {
      title: "Oyster Mushroom",
      desc: "Comprehensive guide to substrates, spawning, incubation, and cropping for high-yield Oyster cultivation.",
    },
    {
      title: "Button Mushroom",
      desc: "Step-by-step commercial method covering composting, casing, pinning, and temperature-controlled harvesting.",
    },
    {
      title: "Low-Cost Setup",
      desc: "Smart, budget-friendly infrastructure designs using locally available materials without compromising yield.",
    },
    {
      title: "Fogger System",
      desc: "Automation of humidity controls, nozzle selection, and installation layouts for maintaining ideal moisture levels.",
    },
    {
      title: "Temperature Control",
      desc: "Efficient insulation techniques and cooling/heating methods tailored for seasonal and round-the-year farming.",
    },
    {
      title: "Spawn Making",
      desc: "Scientific process of grain selection, sterilization, inoculation, and pure culture maintenance for high-quality seeds.",
    },
    {
      title: "Marketing",
      desc: "Strategic insights on target markets, B2B/B2C sales, branding, local vendor tie-ups, and digital positioning.",
    },
    {
      title: "Dry Mushroom",
      desc: "Standard solar and mechanical dehydration protocols to increase shelf-life and maintain premium color/quality.",
    },
    {
      title: "Mushroom Powder",
      desc: "Processing value-added products, grinding standards, packaging, and capturing health-supplement markets.",
    },
    {
      title: "Farm Setup",
      desc: "Commercial layout planning, ventilation design, rack systems, and hygiene protocols to minimize contamination.",
    },
  ];

  const whatYouGet = [
    {
      title: "Lifetime Support",
      desc: "Continuous community and expert assistance to solve your ongoing farming doubts anytime.",
      icon: ShieldCheck,
    },
    {
      title: "Live Training",
      desc: "Interactive live sessions with real-time Q&A, plus lifetime access to session recordings.",
      icon: Play,
    },
    {
      title: "WhatsApp Group",
      desc: "Access to an exclusive, active community of growers for real-time networking and knowledge sharing.",
      icon: MessageCircle,
    },
    {
      title: "Practical Guidance",
      desc: "Actionable, real-world insights from live farm operations rather than just textbook theory.",
      icon: TrendingUp,
    },
    {
      title: "Farm Setup Help",
      desc: "Personalized consultancy on designing blueprints and choosing the right equipment for your farm.",
      icon: Home,
    },
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png",
      alt: "Mushroom farming setup and commercial turnkey project in Jabalpur Madhya Pradesh India",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382178/Screenshot_2026-04-24_201138_wcjrml.png",
      alt: "Commercial mushroom training session online and offline India",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png",
      alt: "Students learning organic button and oyster mushroom farming",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378181/Screenshot_2026-02-22_165318_cyla5n.png",
      alt: "High yield oyster and button mushroom growth facility",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png",
      alt: "Indoor climate controlled mushroom farm setup India USA",
    },
  ];

  return (
    <section id="training" className="relative pb-24 lg:pb-0 overflow-hidden">
      {/* Tiny bit of Hero style for internal section */}
      <div className="py-2 md:py-8 text-center px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            
          >
            <div className="badge mx-auto mb-2 md:mb-3 text-[10px] md:text-xs">
              Expert-Led Courses
            </div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-black dark:text-white text-slate-900 mb-1 tracking-tight uppercase max-w-4xl mx-auto" id="training-h1">
              <span className="gradient-text">Mushroom Cultivation</span> Training
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Training Options Section */}
      <div
        id="options"
        className="py-6 md:py-12 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent border-y border-purple-500/10 px-2 md:px-4"
      >
        <div className="max-w-7xl mx-auto" id="pricing-plans">
          <div className="text-center mb-6 md:mb-10">
            <div className="badge mx-auto mb-2 md:mb-4 text-[10px] md:text-xs">
              Simple & Transparent Models
            </div>
            <h3 className="text-xl md:text-3xl font-extrabold dark:text-white text-slate-900 mb-1.5 md:mb-3 tracking-tight uppercase">
                Choose Your <span className="gradient-text font-black">Training Program</span>
              </h3>
            <p className="dark:text-slate-400 text-slate-600 text-[10px] md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
              Start with self-paced online courses or gain hands-on commercial experience at our practical farm workshops.
            </p>
          </div>

          {/* Group 1: Online Programs */}
          <div className="mb-10">
            <h4 className="text-base md:text-xl font-black text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center justify-center gap-2 border-b dark:border-white/10 border-slate-200 pb-2">
              <Globe className="text-purple-500 animate-spin-slow shrink-0" size={18} />
              <span>1. Online Cultivation Programs (Self-Paced)</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-5xl mx-auto items-stretch">
              {/* Basic Online Plan */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass relative flex flex-col p-4 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-white/10 dark:bg-black/40 bg-white/50 backdrop-blur-md shadow-lg"
              >
                <div className="badge mb-3 self-start bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] md:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                  Beginner Friendly
                </div>
                <h4 className="text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1.5 text-left tracking-tight">
                  Basic Online Training
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 text-left font-medium min-h-[36px]">
                  Perfect for beginners, students, and hobbyists looking to start growing mushrooms at a home scale.
                </p>
                
                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-4 border-b border-dashed border-slate-200 dark:border-white/10 pb-4 text-left">
                  <span className="text-3xl md:text-4xl font-black gradient-text">₹299</span>
                  <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                </div>

                {/* Learning Outcomes */}
                <div className="flex-1 text-left mb-5">
                  <h5 className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">What You Will Learn:</h5>
                  <ul className="space-y-2 text-xs md:text-sm">
                    {[
                      "**Introduction to Fungi**: The basics of how mushrooms grow and thrive.",
                      "**Variety Focus**: Step-by-step cultivation guide for **Oyster** and **Button** mushrooms.",
                      "**Home Setup**: How to create the right environment in a small room or backyard.",
                      "**Substrate Preparation**: Boiling, chemical sterilization, and preparing the perfect base for your seeds (spawn).",
                      "**Spawning & Bagging**: The correct techniques to mix spawn and pack bags to avoid contamination.",
                      "**Basic Climate Control**: Simple ways to maintain moisture and temperature for healthy fruiting."
                    ].map((item, i) => {
                      const parts = item.split("**");
                      return (
                        <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>
                            {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">{p}</strong> : p)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to Action */}
                <button
                  onClick={() => navigate("/training-checkout", { state: { productType: "training_basic", price: "₹299" } })}
                  className="relative overflow-hidden w-full flex items-center justify-center rounded-xl group transition-all backdrop-blur-md shadow-[0_8px_32px_rgba(167,139,250,0.15)] hover:shadow-[0_8px_32px_rgba(167,139,250,0.3)] border border-purple-400/40 dark:border-purple-300/30 bg-linear-to-r from-purple-500/10 via-fuchsia-400/10 to-indigo-500/10 dark:from-purple-900/30 dark:via-fuchsia-900/20 dark:to-indigo-900/30 hover:from-purple-500/20 hover:via-fuchsia-400/20 hover:to-indigo-500/20 dark:hover:from-purple-900/40 dark:hover:via-fuchsia-900/30 dark:hover:to-indigo-900/40 text-purple-950 dark:text-purple-100 font-black tracking-wide py-3 hover:scale-[1.01] active:scale-95 text-xs md:text-sm"
                >
                  <span className="z-10 flex items-center justify-center gap-1.5">
                    Join Mushroom Training <ArrowRight size={14} className="text-purple-700 dark:text-purple-300" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </button>
              </motion.div>

              {/* Advanced Online Plan */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative flex flex-col p-4 md:p-6 lg:p-8 rounded-[1.5rem] border-2 border-purple-500 dark:border-purple-400 dark:bg-purple-950/10 bg-purple-50/10 backdrop-blur-md shadow-2xl overflow-hidden"
              >
                {/* Premium Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="badge bg-purple-500 text-white dark:bg-purple-500 text-[10px] md:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                    Highly Recommended
                  </span>
                  <span className="text-[10px] md:text-xs text-purple-600 dark:text-purple-400 font-black uppercase tracking-widest flex items-center gap-1">
                    <Sparkles size={11} className="animate-spin-slow" /> BEST VALUE
                  </span>
                </div>
                
                <h4 className="text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1.5 text-left tracking-tight">
                  Advanced Commercial Training
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 text-left font-medium min-h-[36px]">
                  Designed for future entrepreneurs, commercial farmers, and serious business owners wanting to scale.
                </p>
                
                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-4 border-b border-dashed border-purple-500/20 pb-4 text-left">
                  <span className="text-3xl md:text-4xl font-black text-purple-600 dark:text-purple-400">₹699</span>
                  <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                </div>

                {/* Learning Outcomes */}
                <div className="flex-1 text-left mb-5">
                  <h5 className="text-[10px] md:text-[11px] font-bold text-purple-400 uppercase tracking-widest mb-2.5">What You Will Learn:</h5>
                  <ul className="space-y-2 text-xs md:text-sm">
                    {[
                      "**Everything in the Basic Plan**, fully covered.",
                      "**Advanced Variety Focus**: Master **Oyster**, **Button**, AND the high-temperature **Milky Mushroom** (perfect for Indian summers).",
                      "**Commercial Farm Setup**: Designing layout, constructing low-cost sheds, and setting up heavy-duty racks.",
                      "**Advanced Climate Infrastructure**: Installing & managing foggers, humidifiers, exhaust, and AC units for year-round production.",
                      "**Disease & Pest Management**: How to identify, prevent, and treat common green mold, flies, and bacterial blotch.",
                      "**Harvesting & Packaging**: Best practices to extend shelf life and package your mushrooms professionally.",
                      "**Marketing & Sales Strategies**: Sell in local wholesale markets, tie up with hotels/restaurants, run social media ads, and handle export inquiries.",
                      "**Bonus Benefits**: Verified Certificate of Completion and ongoing private community support access."
                    ].map((item, i) => {
                      const parts = item.split("**");
                      return (
                        <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={14} className="text-purple-500 shrink-0 mt-0.5" />
                          <span>
                            {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">{p}</strong> : p)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to Action */}
                <button
                  onClick={() => navigate("/training-checkout", { state: { productType: "training_advanced", price: "₹699" } })}
                  className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] text-white font-black tracking-wide py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 hover:scale-[1.01] active:scale-95 text-xs md:text-sm"
                >
                  Join Mushroom Training <ArrowRight size={14} />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Group 2: Offline Practical Workshops */}
          <div>
            <h4 className="text-base md:text-xl font-black text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center justify-center gap-2 border-b dark:border-white/10 border-slate-200 pb-2">
              <Users className="text-emerald-500 shrink-0" size={18} />
              <span>2. Offline Practical Workshops (Hands-on Training at Farm)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-5xl mx-auto items-stretch">
              {/* Offline Basic Plan (₹3000) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass relative flex flex-col p-4 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-white/10 dark:bg-black/40 bg-white/50 backdrop-blur-md shadow-lg"
              >
                <div className="badge mb-3 self-start bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] md:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                  Focus: Button Mushroom Only
                </div>
                <h4 className="text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1.5 text-left tracking-tight">
                  Standard Button Mushroom Workshop
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 text-left font-medium min-h-[36px]">
                  Intensive hands-on training focusing exclusively on commercial Button Mushroom farming.
                </p>
                
                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-4 border-b border-dashed border-slate-200 dark:border-white/10 pb-4 text-left">
                  <span className="text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400">₹3000</span>
                  <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Per Person</span>
                </div>

                {/* Outcomes */}
                <div className="flex-1 text-left mb-5">
                  <h5 className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">What You Will Get:</h5>
                  <ul className="space-y-2 text-xs md:text-sm">
                    {[
                      "**Practical Hands-On training** on compost preparation and casing soil.",
                      "**Live Demonstration** of compost bed layout & spawning procedures.",
                      "**Farm Visit & Live Demo** of our state-of-the-art Button Mushroom growing facilities.",
                      "**Temperature & Moisture Management** practical setup protocols.",
                      "**Standard Setup Guidance** and local market sales tips to launch your venture.",
                      "**Direct Q&A Session** with senior farm experts during the workshop."
                    ].map((item, i) => {
                      const parts = item.split("**");
                      return (
                        <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>
                            {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">{p}</strong> : p)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a
                    href="tel:9203544140"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    <Phone size={14} /> Call
                  </a>
                  <a
                    href="https://wa.me/919203544140?text=I%20am%20interested%20in%203000%20Offline%20Button%20Mushroom%20Training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-xs font-bold uppercase tracking-wider shadow-md"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Offline Master Plan (₹6000) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="relative flex flex-col p-4 md:p-6 lg:p-8 rounded-[1.5rem] border-2 border-emerald-500 dark:border-emerald-400 dark:bg-emerald-950/10 bg-emerald-50/10 backdrop-blur-md shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="badge mb-3 self-start bg-emerald-500 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                  Button, Oyster & Milky Mushrooms
                </div>
                <h4 className="text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1.5 text-left tracking-tight">
                  Master Commercial Workshop
                </h4>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 text-left font-medium min-h-[36px]">
                  Our ultimate 3-day premium practical training covers the entire commercial cultivation spectrum of all three major varieties.
                </p>
                
                {/* Pricing Display */}
                <div className="flex items-baseline gap-1.5 mb-4 border-b border-dashed border-emerald-500/20 pb-4 text-left">
                  <span className="text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400">₹6000</span>
                  <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Per Person</span>
                </div>

                {/* Outcomes */}
                <div className="flex-1 text-left mb-5">
                  <h5 className="text-[10px] md:text-[11px] font-bold text-emerald-500 uppercase tracking-widest mb-2.5">What You Will Get:</h5>
                  <ul className="space-y-2 text-xs md:text-sm">
                    {[
                      "**Multi-Variety Mastery**: Hands-on practicals for **Button**, **Oyster**, and high-yield summer **Milky** mushrooms.",
                      "**Turnkey Laboratory Visit**: Real-world study of spawn production, sterilization, and inoculation processes.",
                      "**Advanced Climate Setup Demo**: Learn installation of automatic foggers, humidifiers, exhausts, and AC units.",
                      "**Commercial Packaging & Cold Chain**: Packaging techniques to double the shelf-life of harvested mushrooms.",
                      "**Exclusive Market Tie-Ups**: Step-by-step strategies to sell in wholesale markets, tie up with local premium hotels & explore exports.",
                      "**1-on-1 Consultancy Project**: Get expert validation on your farm blueprint design and site viability assessment.",
                      "**Certification & Lifetime Access**: Master completion certificate and premium offline grower network membership."
                    ].map((item, i) => {
                      const parts = item.split("**");
                      return (
                        <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>
                            {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-extrabold text-slate-900 dark:text-white">{p}</strong> : p)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Call to Action */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a
                    href="tel:9203544140"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl border border-emerald-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    <Phone size={14} /> Call
                  </a>
                  <a
                    href="https://wa.me/919203544140?text=I%20am%20interested%20in%206000%20Offline%20Master%20Mushroom%20Training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-xs font-bold uppercase tracking-wider shadow-md"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Will Get Section */}
      <div className="py-4 md:py-16 px-2 md:px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-4 md:mb-12">
            <h3 className="text-md md:text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-1 md:mb-4">
                What You Will <span className="gradient-text">Get</span>
              </h3>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-[9px] md:text-sm">
              Everything you need to succeed in commercial mushroom farming.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-1.5 md:gap-5">
            {whatYouGet.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                
                className={`glass p-2 md:p-6 rounded-lg md:rounded-3xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-colors flex flex-col justify-start ${i === 4 ? "col-span-2 lg:col-span-1 mx-auto w-1/2 lg:w-full" : ""}`}
              >
                <div className="w-5 h-5 md:w-14 md:h-14 rounded-md md:rounded-2xl dark:bg-white/10 bg-black/10 flex items-center justify-center mb-1 bg-primary-start/10 text-primary-start group-hover:scale-110 transition-transform">
                  <item.icon className="w-3 h-3 md:w-6 md:h-6" />
                </div>
                <h4 className="text-[10px] md:text-xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-2 leading-tight">
                    {item.title}
                  </h4>
                <p className="dark:text-slate-400 text-slate-600 text-[8px] md:text-sm leading-tight md:leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="py-4 md:py-16 dark:bg-white/5 bg-black/5 px-2 md:px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-4 md:mb-12">
            <h3 className="text-md md:text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-1 md:mb-4">
                Training <span className="gradient-text">Curriculum</span>
              </h3>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-[9px] md:text-sm">
              Master every aspect of the commercial cultivation ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-1.5 md:gap-5">
            {curriculum.map((item, i) => (
              <div
                key={i}
                className="glass p-2 md:p-6 rounded-lg md:rounded-2xl border dark:border-white/5 border-black/5 flex flex-col md:flex-row gap-1.5 md:gap-4 items-start hover:dark:bg-white/5 hover:bg-black/5 transition-colors"
              >
                <div className="w-4 h-4 md:w-10 md:h-10 shrink-0 rounded-full dark:bg-white/10 bg-black/10 flex items-center justify-center font-black dark:text-white text-slate-900 opacity-50 text-[8px] md:text-base mb-0 md:mb-0">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="dark:text-slate-400 text-slate-600 text-[8px] md:text-sm leading-tight md:leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-4 md:py-24">
        <div className="max-w-7xl mx-auto px-2 md:px-4 text-center">
          <div className="badge mx-auto mb-1 md:mb-6 text-[8px] md:text-sm">
            Commercial Farming Essentials
          </div>
          <h3 className="text-md md:text-4xl font-bold dark:text-white text-slate-900 mb-1 md:mb-6 uppercase tracking-tight">
            Need High-Yield Commercial{" "}
            <span className="gradient-text">Mushroom Seed?</span>
          </h3>
          <p className="dark:text-slate-400 text-slate-600 mb-3 md:mb-6 max-w-lg mx-auto text-[9px] md:text-sm leading-normal">
            High-quality lab-grown F1 hybrid spawn for Button, Oyster, and Milky mushrooms. Bulk delivery across India & global export.
          </p>
          <Link
            to="/spawn-seed"
            className="btn-primary px-4 md:px-10 py-2 md:py-4 rounded-lg md:rounded-xl text-[10px] md:text-lg inline-flex items-center gap-1.5 md:gap-3"
          >
            Explore Organic Spawn & Seeds{" "}
            <Sprout size={12} className="md:w-5 md:h-5" />
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-4 md:py-24">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="text-center mb-4 md:mb-16">
            <h3 className="text-md md:text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tight">
              Why Choose <span className="gradient-text">Our Training?</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-6">
            {[
              {
                title: "Expert Trainers",
                desc: "Learn from industry pioneers with years of commercial success in India and abroad.",
                icon: Award,
              },
              {
                title: "Practical Knowledge",
                desc: "No fluff, only commercial standard operating procedures that work globally.",
                icon: BookOpen,
              },
              {
                title: "Business Guidance",
                desc: "Expert tips on global marketing, B2B scaling, and ROI management.",
                icon: TrendingUp,
              },
              {
                title: "Training Support",
                desc: "Lifetime technical guidance for button and oyster mushroom setup.",
                icon: ShieldCheck,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass p-2 md:p-8 rounded-lg md:rounded-3xl border dark:border-white/5 border-black/5 text-center group hover:dark:bg-white/5 bg-black/5 transition-all"
              >
                <div className="w-6 h-6 md:w-16 md:h-16 rounded-md md:rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-1.5 md:mb-6 text-primary-start group-hover:scale-110 transition-transform">
                  <item.icon className="w-3 h-3 md:w-7 md:h-7" />
                </div>
                <h4 className="dark:text-white text-slate-900 font-bold text-[10px] md:text-lg mb-0.5 md:mb-3 leading-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[8px] md:text-sm leading-tight md:leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-4 md:py-24 pt-0 md:pt-0">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="text-center mb-3 md:mb-12">
            <h3 className="text-md md:text-3xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-4 uppercase tracking-tight">
              Experience our Commercial{" "}
              <span className="gradient-text">Ecosystem</span>
            </h3>
          </div>
          <div className="grid grid-cols-5 gap-1 md:gap-4 overflow-hidden">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-md md:rounded-2xl overflow-hidden glass border dark:border-white/10 border-black/10"
              >
                <img loading="lazy"
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                 width="800" height="600" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="py-4 md:py-24 dark:bg-white/5 bg-black/5 px-2 md:px-4">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h3 className="text-sm md:text-2xl font-bold dark:text-white text-slate-900 mb-2 md:mb-8 border-l-2 md:border-l-4 border-primary-start pl-2 md:pl-6 uppercase tracking-tight">
            Start Your Commercial{" "}
            <span className="gradient-text">Mushroom Farming Journey</span> in
            India & Globally
          </h3>
          <div className="dark:text-slate-400 text-slate-600 space-y-2 md:space-y-6 leading-tight md:leading-relaxed text-[9px] md:text-base">
            <p>
              Looking for the best{" "}
              <span className="dark:text-white text-slate-900 font-bold">
                mushroom farming training in India
              </span>
              ? At Organic Mushrooms Farm, we provide the most comprehensive{" "}
              <span className="dark:text-white text-slate-900 font-bold">
                button mushroom training course
              </span>{" "}
              designed specifically for the Indian climate and international
              global market standards. Our modules cover everything from raw
              substrate preparation to precision climate control.
            </p>
            <p>
              Our{" "}
              <span className="dark:text-white text-slate-900 font-bold">
                online mushroom farming training
              </span>{" "}
              is perfect for those who want to learn at their own pace. We
              comprehensively cover technical aspects of high-yield milky
              mushroom and oyster mushroom growing in detailed multi-page
              formats as well, ensuring you have a diverse commercial portfolio.
            </p>
            <p>
              If you're wondering{" "}
              <span className="dark:text-white text-slate-900 font-bold">
                how to start mushroom farming business
              </span>{" "}
              in USA, Australia, or India, our training is the ultimate first
              step. We provide the blueprint for building an indoor commercial
              mushroom plant that yields high-quality produce consistently. From
              students learning farming basics to established entrepreneurs
              scaling their units across Pan India, our curriculum caters to
              all.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-4 md:py-24 px-2 md:px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-4 md:mb-12">
            <h3 className="text-md md:text-2xl font-bold dark:text-white text-slate-900 mb-1 md:mb-4 uppercase tracking-tight">
              Common Commercial Farming{" "}
              <span className="gradient-text">Queries</span>
            </h3>
          </div>
          <div className="space-y-1.5 md:space-y-4">
            {faqs.map((faq, i) => (
              <Collapsible key={i} title={faq.q}>
                <p className="dark:text-slate-400 text-slate-600 leading-tight md:leading-relaxed text-[9px] md:text-base">
                  {faq.a}
                </p>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => { 
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <SEO
        title="Organic Mushrooms Farm | Setup, Spawn & Training"
        description="Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP."
        schemas={[
          generateGlobalFAQSchema(),
          generateGlobalProductsSchema(),
          generateGlobalServiceSchema(),
        ]}
      />
      <Hero />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />

      {/* Compost Units Section */}
      <section
        id="compost-units"
        className="section-padding relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-4">Commercial Infrastructure</div>
            <h2 className="mb-4 uppercase">
              <Link to="/equipment" className="hover:text-current transition-colors">
                Standard Commercial{" "}
                <span className="gradient-text">Compost Units</span>
              </Link>
            </h2>
            <p className="max-w-xl mx-auto text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Complete Phase-I + Phase-II commercial infrastructure with 15-day cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {[
              {
                name: "2000-Bag Commercial Unit (20T)",
                desc: "14x30 System",
                investment: "₹15-17 Lakh",
                stats: { bags: "2,000", cap: "20t", cycle: "15d" },
              },
              {
                name: "3000-Bag Industrial Unit (30T)",
                desc: "14x40 System",
                investment: "₹19-21 Lakh",
                stats: { bags: "3,000", cap: "30t", cycle: "15d" },
                recommended: true,
              },
            ].map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                
                className={`glass card-padding rounded-3xl border dark:border-white/5 border-black/5 relative ${comp.recommended ? "shadow-2xl shadow-brand-blue/10 border-primary-mid/30" : ""}`}
              >
                {comp.recommended && (
                  <div className="absolute top-4 right-5 badge text-[8px]">
                    Best Value
                  </div>
                )}
                <h3 className="dark:text-white text-slate-900 mb-2">
                  {comp.name}
                </h3>
                <div className="text-slate-500 mb-6 font-medium text-[13px]">
                  {comp.desc}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(comp.stats).map(([k, v]) => (
                    <div
                      key={k}
                      className="p-2 md:p-4 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-center"
                    >
                      <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">
                        {k}
                      </div>
                      <div className="text-sm md:text-lg font-bold dark:text-white text-slate-900">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 shadow shadow-brand-blue/10 ring-1 ring-white/10 ring-inset mb-6">
                  <span className="text-[11px] font-semibold dark:text-slate-400 text-slate-600">
                    Est. CapEx
                  </span>
                  <span className="text-lg font-bold dark:text-white text-slate-900">
                    {comp.investment}
                  </span>
                </div>

                <Link
                  to="/compost-unit-specs"
                  className="btn-primary w-full py-3.5 rounded-xl text-[12px] font-bold min-h-[44px] flex items-center justify-center"
                >
                  Get Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-4">Farmer Testimonials</div>
            <h2 className="mb-4 uppercase">
              Real Commercial <span className="gradient-text">Voices</span>
            </h2>
            <p>Join 5000+ commercial farmers trained by our expert team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Rahul S.",
                location: "Bhopal",
                text: "Turnkey setup changed my perspective. Outstanding support even after 2 years.",
                avatar: "RS",
              },
              {
                name: "Deepak M.",
                location: "Indore",
                text: "Professional SOPs. Yield exceeded expectations by 20% due to climate design.",
                avatar: "DM",
              },
              {
                name: "Suresh K.",
                location: "Sagar",
                text: "Honest ROI analysis. No hidden costs, just pure business growth.",
                avatar: "SK",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                className="glass p-6 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col h-full"
              >
                <Quote
                  size={20}
                  className="text-primary-start mb-4 opacity-40"
                />
                <p className="dark:text-slate-300 text-slate-700 text-[13px] italic mb-6 leading-relaxed flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center font-bold dark:text-white text-slate-900 text-[10px] shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="dark:text-white text-slate-900 font-bold text-[12px] tracking-tight">
                      {t.name}
                    </div>
                    <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest">
                      {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section Placeholder */}
      <section id="market" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="badge mx-auto mb-4">Global Market Linkage</div>
          <h2 className="mb-4 uppercase tracking-tight">
            Global{" "}
            <span className="gradient-text">Mushroom B2B Marketplace</span>
          </h2>
          <p className="max-w-xl mx-auto mb-12 font-medium">
            Connect directly with verified commercial buyers and sellers
            worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
            {[
              {
                type: "Seller",
                title: "Mushroom Spawn (Seed)",
                desc: "Lab-grade organic F1 hybrid spawn.",
                price: "Bulk Order",
                linkType: "page",
                to: "/spawn-seed",
              },
              {
                type: "Seller",
                title: "Fresh Organic Mushrooms",
                desc: "A-grade commercial button mushrooms.",
                price: "Live Market Rate",
                linkType: "external",
                to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Fresh%20Mushrooms",
              },
              {
                type: "Seller",
                title: "Dry Mushrooms Export",
                desc: "Long shelf life, premium export quality.",
                price: "Wholesale Only",
                linkType: "external",
                to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Dry%20Mushrooms",
              },
            ].map((ad, i) => {
              const CardWrapper = ad.linkType === "page" ? Link : "a";
              return (
                <CardWrapper
                  key={i}
                  to={ad.linkType === "page" ? ad.to : undefined}
                  href={ad.linkType === "external" ? ad.to : undefined}
                  target={ad.linkType === "external" ? "_blank" : undefined}
                  rel={
                    ad.linkType === "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass p-5 rounded-2xl border dark:border-white/5 border-black/5 relative group cursor-pointer block"
                >
                  <div
                    className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400`}
                  >
                    {ad.type}
                  </div>
                  <h3 className="dark:text-white text-slate-900 mb-1 mt-4 tracking-tight">
                    {ad.title}
                  </h3>
                  <div className="text-[12px] text-slate-500 mb-6">
                    {ad.desc}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-white text-slate-900 font-bold text-sm dark:bg-white/5 bg-black/5 px-3 py-2 rounded-xl">
                      {ad.price}
                    </span>
                    <span className="w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:text-slate-400 text-slate-600 flex items-center justify-center group-hover:bg-primary-start group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources & SOPs Section */}
      <section id="resources" className="section-padding bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="badge mb-6 mx-auto lg:mx-0">
                Documentation & Resources
              </div>
              <h2 className="mb-6 uppercase text-center lg:text-left">
                <Link to="/cities" className="hover:text-current transition-colors">
                  Commercial Production{" "}
                  <span className="gradient-text">SOPs & Guides</span>
                </Link>
              </h2>
              <p className="mb-10 text-center lg:text-left">
                Standard operating procedures used by commercial mushroom
                specialists nationwide and internationally.
              </p>

              <div className="md:hidden">
                {[
                  {
                    title: "Tunnel Ops",
                    content:
                      "Details for Phase-II Pasteurization Tunnel operations and parameters.",
                    id: "tunnel-ops",
                  },
                  {
                    title: "Spawning",
                    content:
                      "Comprehensive checklist for spawning and incubation stages.",
                    id: "spawning",
                  },
                  {
                    title: "Casing",
                    content:
                      "Material preparation guide for optimal casing layer.",
                    id: "casing",
                  },
                  {
                    title: "Hygiene",
                    content:
                      "Disease control protocols and farm hygiene standards.",
                    id: "hygiene",
                  },
                ].map((sop, i) => (
                  <Collapsible key={i} title={sop.title}>
                    {sop.content}
                    <Link
                      to={`/sops#${sop.id}`}
                      className="flex items-center gap-2 text-primary-start font-bold mt-3"
                    >
                      Get Details <ArrowRight size={14} />
                    </Link>
                  </Collapsible>
                ))}
              </div>

              <div className="hidden md:block space-y-4">
                {[
                  {
                    name: "Phase-II Commercial Pasteurization Tunnel Ops",
                    id: "tunnel-ops",
                  },
                  { name: "Spawning & Incubation Checklist", id: "spawning" },
                  { name: "Casing Material Preparation Guide", id: "casing" },
                  {
                    name: "Disease Control & Commercial Farm Hygiene Protocols",
                    id: "hygiene",
                  },
                ].map((sop) => (
                  <Link
                    to={`/sops#${sop.id}`}
                    key={sop.name}
                    className="flex items-center gap-4 p-5 glass rounded-2xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen size={18} className="text-primary-start" />
                    </div>
                    <span className="text-sm font-bold dark:text-slate-300 text-slate-700">
                      {sop.name}
                    </span>
                    <ArrowRight
                      className="ml-auto text-slate-700 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-10 blur-[80px] rounded-full"></div>
              <div className="relative glass p-6 md:p-10 rounded-[2.5rem] border dark:border-white/10 border-black/10">
                <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                  <BookOpen className="text-primary-start" size={24} />
                  <h3 className="dark:text-white text-slate-900 tracking-tight">
                    Commercial Knowledge Hub
                  </h3>
                </div>
                <div className="space-y-6">
                  <Link
                    to="/articles/mushroom-farming-beginner-guide-india-2026-2027"
                    className="p-4 md:p-6 rounded-3xl bg-primary-start/10 border border-primary-start/20 block group hover:scale-[1.02] transition-transform"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-primary-start font-black uppercase tracking-widest">
                        Ultimate Guide 2026-2027
                      </span>
                      <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-500 text-[8px] font-black uppercase">
                        Article
                      </div>
                    </div>
                    <h4 className="dark:text-white text-slate-900 font-bold text-lg mb-2">
                        Mushroom Farming Beginner Guide India 2026-2027
                      </h4>
                    <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">
                      Complete guide on how to start mushroom farming (mushroom
                      ki kheti) from scratch for beginners.
                    </p>
                  </Link>

                  <div className="p-4 md:p-6 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">
                        Featured
                      </span>
                      <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[8px] font-black uppercase">
                        Video
                      </div>
                    </div>
                    <a
                      href="https://youtube.com/shorts/wxLiU3nNZmM?si=6VmH86DPYKoQ72P6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer inline-block w-full"
                    >
                      <img
                        loading="lazy"
                        src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg"
                        alt="Mushroom Farming Training Video - Commercial Cultivation SOPs India"
                        className="w-full h-full object-cover opacity-60"
                       width="1080" height="1080" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl">
                          <Play size={20} fill="currentColor" />
                        </div>
                      </div>
                    </a>
                    <h4 className="dark:text-white text-slate-900 font-bold text-[13px] tracking-tight">
                      Commercial Composting Flow Explained
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MushroomSEOSections />
      <ComparisonTable />
      <StatesSection />
      <CTASection />
    </>
  );
};

const PageHero = ({
  title,
  description,
  badge,
}: {
  title: string;
  description: string;
  badge?: string;
}) => (
  <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {badge && <div className="badge mx-auto mb-6">{badge}</div>}
        <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight">
          {title.split(" ").map((word, i) => (
            <React.Fragment key={i}>
              {i === 1 ? (
                <span className="gradient-text">{word} </span>
              ) : (
                word + " "
              )}
            </React.Fragment>
          ))}
        </h1>
        <p className="dark:text-slate-400 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          {description}
        </p>
      </motion.div>
    </div>
  </section>
);

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatWeDo = [
    {
      title: "Commercial Mushroom Production",
      desc: "We produce premium quality button and oyster mushrooms using scientific organic methods in our state-of-the-art facility.",
      icon: Sprout,
    },
    {
      title: "Online Mushroom Training",
      desc: "Comprehensive digital modules for beginners. Start your commercial journey for just ₹399 with lifetime access.",
      icon: Play,
      price: "₹399",
    },
    {
      title: "Offline Practical Training",
      desc: "Hands-on practical sessions in our Jabalpur farm. Intensive commercial workshop at ₹3000 per person.",
      icon: Users,
      price: "₹3000",
    },
    {
      title: "Commercial Farm Setup",
      desc: "Complete turnkey solutions from shed insulation to climate control and global marketing support.",
      icon: Home,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Organic Mushrooms Farm | India's Mushroom Training Experts"
        description="Learn about Organic Mushrooms Farm, India's leading mushroom ecosystem architect. We provide quality spawn, expert training, and turnkey farming solutions India-wide and globally."
      />
      <PageHero
        badge="Our Commercial Journey"
        title="About Organic Mushrooms Farm | Global Setup Experts"
        description="Empowering modern India and global markets through sustainable, high-yield organic mushroom cultivation."
      />

      {/* Who We Are Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 1, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              
            >
              <div className="badge mb-4">Who We Are</div>
              <h2 className="mb-6 uppercase tracking-tight">
                Our Mission &{" "}
                <span className="gradient-text">
                  Vision for Organic Agriculture
                </span>
              </h2>
              <div className="space-y-6">
                <div className="glass p-6 border dark:border-white/5 border-black/5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                    <Briefcase size={60} />
                  </div>
                  <h3 className="dark:text-white text-slate-900 text-lg font-bold mb-2">
                      Our Mission
                    </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                    Our startup is dedicated to{" "}
                    <strong>
                      helping people start commercial mushroom farming
                      businesses
                    </strong>{" "}
                    with minimal risk and maximum precision. We bridge the gap
                    between theoretical knowledge and commercial success in
                    button and oyster mushroom production.
                  </p>
                </div>
                <div className="glass p-6 border dark:border-white/5 border-black/5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={60} />
                  </div>
                  <h3 className="dark:text-white text-slate-900 text-lg font-bold mb-2">
                      Our Vision
                    </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                    We aim to lead the revolution in{" "}
                    <strong>
                      promoting organic agriculture and self-employment
                    </strong>{" "}
                    across Madhya Pradesh, India, and internationally. Our
                    vision is to make every farmer a successful global
                    agri-entrepreneur through sustainable practices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} /> Contact Us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-4">What We Do</div>
            <h2 className="uppercase tracking-tight">
              Core{" "}
              <span className="gradient-text">
                Mushroom Operations & Consultancy
              </span>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 mt-4 max-w-2xl mx-auto">
              Providing end-to-end support for commercial{" "}
              <strong>button mushroom farming in India and globally</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 text-center flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-start/10 text-primary-start flex items-center justify-center mx-auto mb-6">
                  <item.icon size={26} />
                </div>
                <h3 className="dark:text-white text-slate-900 font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>
                {item.price && (
                  <div className="text-xl font-black gradient-text mb-4">
                    {item.price}
                  </div>
                )}
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-start font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  Enquire Now <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="badge mb-4">The Commercial Advantage</div>
              <h2 className="mb-8 uppercase tracking-tight">
                Why Choose{" "}
                <span className="gradient-text">
                  Us for Turnkey Projects?
                </span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Expert Guidance",
                    desc: "Scientific methods and professional mentorship for high commercial yield.",
                    icon: Award,
                  },
                  {
                    title: "Beginner Friendly",
                    desc: "No background required. We train you from scratch for commercial success.",
                    icon: BookOpen,
                  },
                  {
                    title: "Affordable Pricing",
                    desc: "Best-in-class commercial training and setup at competitive rates globally.",
                    icon: Zap,
                  },
                  {
                    title: "Lifetime Support",
                    desc: "Continuous technical guidance even after commercial farm setup.",
                    icon: ShieldCheck,
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start mb-4">
                      <item.icon size={20} />
                    </div>
                    <h4 className="dark:text-white text-slate-900 font-bold text-sm">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
          </div>
          </div>
        </div>
      </section>

      {/* SEO Natural Text Section */}
      <section className="section-padding dark:bg-black/40 bg-slate-100/40">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert text-center">
          <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-8 uppercase tracking-tight leading-loose">
            Pioneering Commercial{" "}
            <span className="gradient-text">Organic Mushrooms Farm Katangi</span>{" "}
            & <Link to="/cities/madhya-pradesh/jabalpur" className="text-primary-start hover:underline">Jabalpur</Link>
          </h3>
          <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base leading-relaxed">
            Our commercial <strong>organic mushrooms farm in Katangi</strong>{" "}
            road, Jabalpur, serves as a model for aspiring farmers across the
            region and globe. We are proud to provide the most reliable{" "}
            <strong>mushroom training in Madhya Pradesh</strong>, focusing on
            the specific environmental needs of Central India and international
            exports. From climate-controlled grow rooms to industrial compost
            preparation, our <strong><Link to="/cities/madhya-pradesh/jabalpur" className="text-primary-start hover:underline">mushroom farming in Jabalpur</Link></strong>{" "}
            solutions ensure that you enter the global market with a competitive
            edge. Join us to build a sustainable commercial future with
            professional <strong>button mushroom farming in India</strong>.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="End-to-End Mushroom Farming Services | From Training to Turnkey Projects"
        description="Explore our end-to-end commercial mushroom farming services: organic hybrid spawn supply, industrial compost production, and technical turnkey consultancy in India & Worldwide."
        url="/services"
      />
      <PageHero
        badge="Expert Setup Solutions"
        title="Our Comprehensive Commercial Services"
        description="Tailored commercial infrastructure and support systems for the modern mushroom farmer globally."
      />
      <EcosystemFlow />
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "spawn-supply",
                title: "Organic Hybrid Spawn Supply",
                desc: "Top-tier genetics for maximum yield and disease resistance.",
                icon: Sprout,
              },
              {
                id: "compost-production",
                title: "Industrial Compost Production",
                desc: "Standardized Phase II & Phase III compost for commercial success.",
                icon: Layers,
              },
              {
                id: "consultancy",
                title: "Technical Setup Consultancy",
                desc: "Expert guidance from climate control to disease management.",
                icon: Info,
              },
              {
                id: "marketing-support",
                title: "Global Marketing Support",
                desc: "Connecting farmers with B2B buyers and export channels.",
                icon: TrendingUp,
              },
              {
                id: "cold-chain",
                title: "Cold Chain Logistics",
                desc: "Ensuring freshness from farm to market with specialized storage.",
                icon: Zap,
              },
              {
                id: "subsidy",
                title: "Subsidy Guidance",
                desc: "Legal and documentation support for government schemes.",
                icon: ShieldCheck,
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-start/10 text-primary-start flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={26} />
                </div>
                <h3 className="dark:text-white text-slate-900 font-bold text-xl mb-4">
                    {s.title}
                  </h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {s.desc}
                </p>
                <Link
                  to={`/services/${s.id}`}
                  className="text-primary-start font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                  aria-label={`Learn more about ${s.title}`}
                  title={`Learn more about ${s.title}`}
                >
                  Learn More <span className="sr-only">about {s.title}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

const TurnkeyProjectsPage = () => {
  const [todayDate, setTodayDate] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    setTodayDate(new Date().toLocaleDateString());
  }, []);

  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: null as string | null,
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: null });
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.has("_subject")) {
      formData.append(
        "_subject",
        "Commercial Turnkey Mushroom Farm Enquiry - " + formData.get("name"),
      );
    }

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
        },
      );

      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const errorText = await response.text();
        setFormState({
          submitting: false,
          succeeded: false,
          error: errorText || "Failed to submit form",
        });
      }
    } catch (err: any) {
      setFormState({
        submitting: false,
        succeeded: false,
        error: err.message || String(err),
      });
    }
  };

  const mushroomSetups = [
    {
      type: "Button Mushroom Setup (Agaricus bisporus)",
      description:
        "Our state-of-the-art commercial high-yield climate controlled units. Tailored for industrial scale, utilizing dense 80-100mm PUF panel walls, fully automated air handling units (AHU), and sophisticated chiller plants to maintain a constant 14-18°C temperature with automated composting support.",
      cost: "₹15 Lakhs - ₹1.5 Crore",
      keySpecs: [
        "Double tier MS/GI growing racks",
        "100mm Insulated PUF panel cold room doors",
        "High-pressure fogging humification",
        "Expert market and packing linkage",
      ],
      badge: "High Yield & Popular",
      icon: Layers,
    },
    {
      type: "Oyster Mushroom Setup (Pleurotus ostreatus)",
      description:
        "Elegant, cost-friendly, and perfect for highly rapid cultivation cycles. Features a low-overhead vertical structure utilizing suspension rope/hanging bags or modular compact steel frames. Highly productive with natural ventilation systems or basic air-cooling units for quick regional crops.",
      cost: "₹2 Lakhs - ₹10 Lakhs",
      keySpecs: [
        "Foliage suspended grow chambers",
        "Evaporative humidifier grids",
        "Optimal light diffusion layouts",
        "Extremely quick 28-day harvest cycles",
      ],
      badge: "Fast ROI",
      icon: Sprout,
    },
    {
      type: "Milky Mushroom Setup (Calocybe indica)",
      description:
        "Specially engineered for tropical and high-temperature regions. Uses durable agricultural row polyhouses, custom soil casing beds, and regional crop patterns. High temperature tolerance up to 35°C makes it extremely budget-friendly in power consumption and solar cooling designs.",
      cost: "₹3 Lakhs - ₹12 Lakhs",
      keySpecs: [
        "Naturally insulated crop polyhouse",
        "Sand-and-soil base casing parameters",
        "High solar ambient light design",
        "Long shelf-life post-harvest structure",
      ],
      badge: "Heat Tolerant",
      icon: Home,
    },
    {
      type: "Shiitake Mushroom Setup (Lentinula edodes)",
      description:
        "Advanced premium setup including autoclave sterilization chambers, specialized substrate bagging, and sterile laboratory inoculation rooms. High-yield production on sawdust blocks under precision photoperiod lighting (LED) and localized fine-mist water supply.",
      cost: "₹8 Lakhs - ₹35 Lakhs",
      keySpecs: [
        "High-pressure thermal autoclave unit",
        "HEPA filtered sterile inoculation booth",
        "Programmable humidity/irrigation controls",
        "Premium luxury market segment placement",
      ],
      badge: "Premium Margin",
      icon: ShieldCheck,
    },
    {
      type: "Enoki & Exotic Specialty Setup",
      description:
        "Precision-grade vertical bottle farming. Employs advanced smart environmental control units, sophisticated automated bottle-filling machinery, automated harvest cutting tools, and ultra-cooling sterilization setups. Intended for local luxury restaurants and worldwide commercial export channels.",
      cost: "₹25 Lakhs - ₹1.2 Crore",
      keySpecs: [
        "Sophisticated bottle culture mechanics",
        "Ultra-pure clean room air filters",
        "Dynamic temperature shock incubation",
        "Automated robot packing compatibility",
      ],
      badge: "Ultra Tech",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Commercial Turnkey Mushroom Farm Setup India | Complete Setup Service"
        description="Build your industrial mushroom unit with our commercial turnkey solutions. Expert project setups for button mushroom farming in Jabalpur, across India, USA, and Australia."
        url="/turnkey-projects"
      />
      <PageHero
        badge="Commercial Turnkey Solutions"
        title="Commercial Farm Infrastructure"
        description="Ready-to-harvest mushroom units designed for high-yield precision and global export."
      />
      <CriticalParameters />

      <WhyChooseUs />

      {/* SEO-Optimized Commercial Farming Models Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">
              Infrastructure Models
            </div>
            <h2 className="mb-4 uppercase tracking-tight">
              Our Commercial{" "}
              <span className="gradient-text">Farming Models</span>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
              Scale your operations and maximize your mushroom farm setup with
              our top-tier turnkey commercial structural designs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Commercial Unit",
                cap: "10-15 tons/yr",
                investment: "₹15-20 Lakhs",
                icon: Home,
              },
              {
                title: "Industrial Unit",
                cap: "50+ tons/yr",
                investment: "₹60-80 Lakhs",
                icon: Layers,
              },
              {
                title: "Global Export Factory",
                cap: "200+ tons/yr",
                investment: "₹2 Cr+",
                icon: ShieldCheck,
              },
            ].map((model, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass p-8 rounded-[2.5rem] border dark:border-white/5 border-black/5 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:text-white transition-all">
                  <model.icon size={28} />
                </div>
                <h3 className="dark:text-white text-slate-900 font-bold text-xl mb-2">
                  {model.title}
                </h3>
                <div className="text-primary-start font-black text-xs uppercase tracking-widest mb-6">
                  Commercial Capacity: {model.cap}
                </div>
                <div className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 mb-8">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Est. Investment
                  </div>
                  <div className="text-lg font-bold dark:text-white text-slate-900">
                    {model.investment}
                  </div>
                </div>
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20commercial%20turnkey%20mushroom%20farming.%20Please%20provide%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest block text-center"
                >
                  Enquire Details
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: SECTION FOR ALL TYPES OF MUSHROOM SETUP */}
      <section className="section-padding bg-slate-950/40 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">
              A to Z Project Portfolios
            </div>
            <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight uppercase">
              All Types of{" "}
              <span className="text-primary-start">Mushroom Farm Setup</span>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
              Our high-yield custom layouts focus on extreme climate automation,
              PUF panel cold rooms, and dynamic humification systems to
              guarantee max return on your commercial investment.
            </p>
          </div>

          <div className="space-y-10">
            {mushroomSetups.map((setup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-6 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 flex flex-col lg:flex-row gap-8 items-center hover:border-emerald-500/20 transition-all group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-primary-start group-hover:scale-110 transition-all">
                  <setup.icon size={36} />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="badge text-[9px] uppercase tracking-widest">
                      {setup.badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 tracking-tight">
                      {setup.type}
                    </h3>
                  </div>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-base leading-relaxed">
                    {setup.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {setup.keySpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        <span className="text-xs font-semibold dark:text-slate-300 text-slate-700">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-auto shrink-0 bg-white/5 border border-white/10 rounded-[2rem] p-6 text-center space-y-4 lg:min-w-[240px]">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    Setup Investment Cost
                  </div>
                  <div className="text-xl font-extrabold text-primary-start">
                    {setup.cost}
                  </div>
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20setting%20up%20a%20${encodeURIComponent(setup.type)}.%20Please%20share%20quotation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-primary-start hover:brightness-110 dark:text-white text-slate-900 w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest block text-center transition-all"
                  >
                    Get Quotation
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: DYNAMIC INQUIRY FORM AT THE BOTTOM */}
      <section className="section-padding dark:bg-[#0A0A0A] bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.05),transparent_40%)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-start/10 border border-primary-start/20 text-[10px] font-black text-primary-start uppercase tracking-widest mb-4">
              Instant Quotation & Project Planning
            </div>
            <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight uppercase">
              Turnkey Plant Setup Inquiry
            </h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
              Submit your project specifications below. Our tech specialists
              will outline custom layouts, calculate full machinery costs, and
              provide a comprehensive project brief.
            </p>
          </div>

          <div className="glass border dark:border-white/10 border-black/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative">
            {formState.succeeded ? (
              <motion.div
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 size={44} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold dark:text-white text-slate-900">
                      Enquiry Submitted Successfully!
                    </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm max-w-sm mx-auto font-medium">
                    Thank you for submitting your project layout requirements.
                    Our lead engineer Tanish Soni will contact you via phone or
                    email shortly.
                  </p>
                </div>
                <button
                  onClick={() =>
                    setFormState({
                      submitting: false,
                      succeeded: false,
                      error: null,
                    })
                  }
                  className="btn-outline px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <div className="space-y-6 text-center py-6">
                <h3 className="text-2xl font-bold dark:text-white text-slate-900">Request Turnkey Details</h3>
                <p className="text-slate-500 text-sm mb-4">
                  For large scale and commercial setups, please provide your exact needs in our enquiry form.
                </p>
                <Link
                  to="/enquiry"
                  className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all text-lg"
                >
                  Enquiry Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    {
      src: "/images/rakeshsoniorganicmushroomfarmexperttraininer.webp",
      category: "Expert Training",
      alt: "Rakesh Soni Expert Mushroom Farming Trainer",
    },
    {
      src: "/images/mushroom360viewimage.jpeg",
      category: "Farm View",
      alt: "Commercial Mushroom Farm 360 Degree View",
    },
    {
      src: "/images/buttonmushroomspawn.webp",
      category: "Premium Spawn",
      alt: "High Quality Button Mushroom Spawn Seeds",
    },
    {
      src: "/images/buttonmushroomroommaking.webp",
      category: "Farm Construction",
      alt: "Button Mushroom Growing Room Construction Process",
    },
    {
      src: "/images/butoonmushroomvsoystermushroom.webp",
      category: "Mushroom Guide",
      alt: "Detailed Comparison Between Button Mushroom and Oyster Mushroom",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png",
      category: "Commercial Infrastructure",
      alt: "Commercial Infrastructure Setup Mushroom Farm",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg",
      category: "All Types Mushroom",
      alt: "All Types High Yield Mushroom Farm",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
      category: "Mushroom Harvesting",
      alt: "Mushroom Harvesting Process Commercial",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png",
      category: "Enoki Setup",
      alt: "Indoor Mushroom Farming Enoki Setup",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378183/Screenshot_2026-01-17_141353_v8rgpt.png",
      category: "Organic Spawn",
      alt: "Organic Quality Spawn Seed Supply",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png",
      category: "Commercial Training",
      alt: "Mushroom Farming Training Students Offline",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
      category: "Harvest Process",
      alt: "Mushroom Harvest India",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378144/img_9856_er5mbe.png",
      category: "Turnkey Infrastructure",
      alt: "Turnkey Project Mushroom Facility India",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378148/img_6985_inr8qh.png",
      category: "Industrial Compost",
      alt: "Industrial Mushroom Compost Production",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Commercial Organic Mushrooms Farm Gallery | Project Photos & Setup"
        description="View photos of our commercial button mushroom farm in Katangi Road, Jabalpur, training sessions, and successful turnkey farming project setups across India."
        url="/gallery"
      />
      <PageHero
        badge="Commercial Ecosystem Tour"
        title="Visualizing Success"
        description="A glimpse into our commercial farms, expert training sessions, and high-quality organic produce."
      />
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass border dark:border-white/10 border-black/10"
              >
                <img loading="lazy"
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                 width="800" height="600" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6">
                    <span className="badge text-[10px]">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

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
          <div className="mb-12 space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900">
              Welcome to the official FAQ Hub of Organic Mushroom Farm.
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
              If you're planning to start a commercial mushroom farming business, you may have questions about investment, infrastructure, farm setup, production, and profitability. This page provides clear, accurate, and practical answers to the most common questions asked by aspiring mushroom entrepreneurs.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
              Our expertise focuses on the commercial cultivation of Oyster, Button, and Milky mushrooms. Here, you'll find detailed information about setup costs, farm planning, profit potential, production systems, and our hands-on training programs conducted across states such as Madhya Pradesh, Uttar Pradesh, Bihar, Maharashtra, and etc. many other regions.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
              Whether you're a complete beginner starting from scratch or an experienced farmer looking to scale your operations, our expert team is here to support you at every stage. If you can't find the answer you're looking for below, feel free to contact our consultancy team for personalized guidance.
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg font-medium">
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

          <div className="mt-16 glass p-8 rounded-3xl border dark:border-white/10 border-black/10 text-center">
            <h1 className="text-3xl md:text-5xl dark:text-white text-slate-900 font-bold mb-4">
              Still have commercial setup questions?
            </h1>
            <p className="dark:text-slate-400 text-slate-600 text-sm mb-6">
              Our global experts are available for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary px-8 py-3 rounded-xl font-bold"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/919203544140"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-3 rounded-xl font-bold"
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
          <h2 className="dark:text-white text-slate-900 font-bold mb-8 uppercase tracking-widest text-sm">
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

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service | Organic Mushrooms Farm"
        description="Our standardized commercial service agreement and terms for cooperative training sessions, global spawn trade, and turnkey projects."
        url="/terms"
      />
      <PageHero
        badge="Legal"
        title="Terms of Service"
        description="Our standardized commercial service agreement for training and farm setups."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900">
              1. Commercial Service Agreement
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              By enrolling in our training programs or contracting our
              commercial farm setup services, you agree to abide by the terms
              and conditions outlined below. Organic Mushrooms Farm provides
              technical consultancy and educational resources for mushroom
              farming business success.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              2. Payment Terms
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Our current pricing for training is standardized at ₹399 for
              Online access and ₹3000 for Offline practical workshops.
              Commercial Turnkey project payments are structured in phases as
              per the project quotation provided.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              3. No Refund Policy
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Due to the digital nature of training materials and the resource
              allocation required for commercial workshops, all payments for
              training and consultancy are non-refundable. Please ensure your
              suitability for the program before making payments.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              4. User Responsibilities
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Users are responsible for maintaining the confidentiality of their
              training portal access. For commercial farm setups, the client
              must ensure site readiness and electricity requirements as per our
              technical specifications.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              5. Limitation of Liability
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              While we provide high-precision SOPs and infrastructure,
              biological yields depend on local commercial management. Organic
              Mushroom Farm is not liable for fluctuations in biological yields
              or market price changes of mushrooms globally.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              6. Governing Law
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              These terms are governed by and construed in accordance with the
              laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of the courts in Jabalpur, Madhya Pradesh.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy | Organic Mushrooms Farm"
        description="Read our privacy policy about how we protect your personal and commercial data at Organic Mushrooms Farm."
        url="/privacy"
      />
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your commercial data."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900">
              1. Data Collection
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              We collect personal information such as your name, phone number,
              and email address when you register for commercial training, fill
              out an enquiry form, or contact us via WhatsApp.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              2. How We Use Data
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Your data is used to provide training access, respond to
              commercial consultancy queries, and send relevant updates about
              mushroom farming market trends globally. We do not sell your data
              to third parties.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              3. Data Protection
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              We implement industry-standard security measures to protect your
              commercial information from unauthorized access or alteration.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              4. Third-Party Tools
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              We use trusted third-party tools like WhatsApp for communication
              and Razorpay for secure payment processing. Each has its own
              privacy policy which you should review separately.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              5. Cookies Usage
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Our website uses cookies to enhance your browsing experience and
              analyze site traffic. You can choose to disable cookies in your
              browser settings.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              6. Contact Info
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              If you have any questions regarding your privacy, please contact
              us at support@organicmushroomsfarm.com or call us at +91
              9203544140.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Refund Policy"
        description="Review the refund terms and conditions for training programs, consultancy, and turnkey commercial projects at Organic Mushrooms Farm."
        url="/refund-policy"
      />
      <PageHero
        badge="Legal & Trust"
        title="Refund Policy & Guarantee"
        description="Transparent parameters for enrollment, consultancy credits, and project setup services."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900">
              1. Digital Training & Course Materials
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Our Online Commercial Mushroom Training (priced at ₹399) provides
              instant access to proprietary video modules, premium SOP catalogs,
              and lifetime documentation resources. Because these materials are
              instantly downloadable and copyable, all payments for digital
              courses are <strong>strict and non-refundable</strong>.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              2. Practical Workshops
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              For our intensive 1-day offline workshops at Jabalpur (priced at
              ₹3000), we reserve seats and pre-order study kits/substrate
              ingredients. Cancellations requested over 72 hours prior to the
              event will be eligible for rescheduling to a future date at zero
              cost, but they are not eligible for cash refunds.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              3. Commercial Turnkey Projects
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Milestone payments made for climate-controlled PUF panel
              structures, Daikin refrigeration design, and industrial HVAC
              installations are guided by custom contracts. Once procurement is
              completed as per specifications, those specialized milestones are
              binding and non-refundable.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              4. Support & Handholding Guarantee
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              While biological yields are management-dependent, we offer a{" "}
              <strong>100% Support Guarantee</strong>. If your G1 spawn gets
              contaminated due to a technical lapse in our guide materials, we
              will replace the spawn batch absolutely free of charge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ShippingPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Shipping Policy"
        description="Learn about the shipping and delivery guidelines of premium mushroom spawn (seed) and industrial farming equipment at Organic Mushrooms Farm."
        url="/shipping-policy"
      />
      <PageHero
        badge="Logistics & Delivery"
        title="Spawn Shipping & Logistics"
        description="How we safely package and ship high-grade G1 mushroom seed and equipment globally."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900">
              1. Cold Chain & Insulated Packaging
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Our First-Generation (G1) premium quality, certified mushroom
              spawn is a living organism. To maintain viability and prevent
              high-temperature exposure during transit, all spawn batches are
              packed in{" "}
              <strong>
                heavy-gauge insulated polystyrene boxes with commercial ice-gel
                packs
              </strong>
              . This guarantees that they remain below 25°C throughout
              transport.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              2. Processing & Lead Times
            </h2>
            <ul className="dark:text-slate-400 text-slate-600 space-y-2 list-disc pl-5">
              <li>
                <strong>Spawn Shipping:</strong> Shipped within 24 to 48 hours
                of order confirmation.
              </li>
              <li>
                <strong>Technical Equipment:</strong> Sensors, climate
                controllers, and customized racks are processed in 3–5 working
                days of engineering checklist completion.
              </li>
            </ul>

            <h2 className="dark:text-white text-slate-900 mt-10">
              3. Delivery Coverage (Pan-India & Global)
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              We partner with premier carriers (Delhivery, BlueDart, DTDC, and
              air express logistics) to deliver to all 28 States and 8 Union
              Territories in India. We also arrange phytosanitary certified
              export shipping to UAE, United Kingdom, United States, Canada,
              Nepal, and adjacent markets.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              4. Handling & Damage Claims
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              If your package is damaged or delayed heavily, leading to spawn
              contamination or temperature damage, please record an unboxing
              video and send it to our official WhatsApp support number{" "}
              <strong>+91 9203544140</strong> within 24 hours of delivery. We
              will issue a replacement shipment immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const CustomerSupportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Customer Support"
        description="Reach out to the Organic Mushrooms Farm dedicated customer service division. Get answers on order tracking, training, and commercial turnkey consultation."
        url="/support"
      />
      <PageHero
        badge="Helpdesk"
        title="Customer Support & Helpline"
        description="We are committed to providing seamless handholding and customer service for agri-entrepreneurs."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900 mb-6">
              Contact Channels & Operations
            </h2>
            <p className="dark:text-slate-400 text-slate-600 mb-8">
              Whether you are tracking a spawn shipment, solving commercial
              cooling ventilation errors, or applying for government NHB
              subsidies, our specialized desk is ready to assist you.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">
                  📞 Direct Hotline
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Talk to senior technical advisors directly for instant
                  commercial support.
                </p>
                <a
                  href="tel:+919203544140"
                  className="text-primary-start font-bold text-lg hover:underline"
                >
                  +91 9203544140
                </a>
              </div>
              <div className="p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">
                  💬 WhatsApp Support
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Fast tracking, photo sharing, invoice support, and SOP
                  questions.
                </p>
                <a
                  href="https://wa.me/919203544140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 rounded-lg text-white font-bold hover:bg-green-600 transition-colors text-sm"
                >
                  Send WhatsApp Message
                </a>
              </div>
            </div>

            <h2 className="dark:text-white text-slate-900 mt-10">
              Helpline Operational Timings
            </h2>
            <ul className="dark:text-slate-400 text-slate-600 space-y-2 list-disc pl-5">
              <li>
                <strong>Monday to Sunday:</strong> 08:00 AM to 08:00 PM (IST)
              </li>
              <li>
                <strong>Email Assistance:</strong>{" "}
                support@mushroomtraining.online (Responded to within 4 working
                hours)
              </li>
              <li>
                <strong>Physical Farm Visit Address:</strong> Katangi Link Road,
                Jabalpur, Madhya Pradesh, India (Prior appointment required)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import NotFoundPage from "./pages/NotFoundPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 1, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="w-full h-full"
      >
        <Routes location={location}>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/spawn-seed" element={<ArticleMushroomSpawnSeed />} />
          <Route path="/services/oyster-mushroom" element={<ArticleOysterMushroom />} />
          <Route path="/blog/mushroom-farming-business-plan-india" element={<ArticleMushroomBusinessPlanIndia />} />
          <Route path="/services/milky-mushroom" element={<ArticleMilkyMushroom />} />
          <Route path="/services/turnkey-setup" element={<ArticleTurnkeySetup />} />
          <Route path="/services/button-mushroom" element={<ArticleButtonMushroom />} />
          <Route path="/spawn-seeds" element={<ArticleSpawnSeeds />} />
          <Route path="/project-specs" element={<ArticleProjectSpecs />} />
          <Route path="/mushroom-farming-mangalore-karnataka" element={<ArticleMangaloreKarnataka />} />
          <Route path="/blog/oyster-mushroom-cultivation-india" element={<ArticleOysterMushroomCultivationIndia />} />
          <Route path="/blog/button-mushroom-vs-oyster-mushroom" element={<ArticleButtonVsOysterMushroom />} />
          <Route path="/cities/rajasthan/bikaner" element={<ArticleBikanerRajasthan />} />
          <Route path="/training/online" element={<ArticleOnlineTraining />} />
          <Route path="/training/offline" element={<ArticleOfflineTraining />} />
          <Route path="/cities" element={<ArticleCitiesIndia />} />
          <Route path="/blog/mushroom-training-guide-english" element={<ArticleMushroomTrainingGuideEnglish />} />
          <Route path="/cities/kerala/thiruvananthapuram" element={<ArticleThiruvananthapuramKerala />} />
          <Route path="/mushroom-farming-guwahati-assam" element={<ArticleGuwahatiAssam />} />
          <Route path="/contact-form" element={<ArticleContactForm />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/cities/rajasthan/udaipur" element={<ArticleUdaipurRajasthan />} />
          <Route path="/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026" element={<ArticleHomeMushroomFarming />} />
          <Route path="/cities/karnataka/mysuru" element={<ArticleMysuruKarnataka />} />
          <Route path="/cities/west-bengal/siliguri" element={<ArticleSiliguriWestBengal />} />
          <Route path="/blog/turnkey-commercial-setup" element={<ArticleTurnkeySetup />} />
          <Route path="/operations" element={<ArticleOperations />} />
          <Route path="/articles/oyster-mushroom-cultivation-india" element={<ArticleOysterCultivation />} />
          <Route path="/compost-unit" element={<ArticleCompostUnit />} />
          {/* Legacy redirects */}
          <Route path="/articles/oyster-mushroom-cultivation-process" element={<ArticleOysterMushroomCultivation  metaDesc="Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips." />} />
          <Route path="/articles/white-button-mushroom-business-plan" element={<ArticleBusinessPlanIndia  metaDesc="Start a profitable white button mushroom business. Explore comprehensive EPC setup costs, infrastructure needs, marketing tips, and complete ROI estimates." />} />
          <Route path="/articles/organic-mushroom-farm-everything-you-need-to-know" element={<ArticleOrganicMushroomFarmGuide />} />
          <Route path="/articles/commercial-mushroom-farm-setup-training" element={<ArticleCommercialSetupTraining />} />

          <Route path="/blog/mushroom-farming-training-online-offline-certificate" element={<ArticleMushroomTrainingGuide  metaDesc="Get certified in mushroom cultivation! Compare online vs offline training, explore course fees, government schemes, and learn how to generate farm profits." />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/book-consultant" element={<BookConsultantPage />} />
          <Route
            path="/on-site-consultation"
            element={<SiteVisitConsultationPage />}
          />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/payment-cancelled" element={<PaymentCancelledPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/process/:id" element={<ProcessDetailPage />} />
          <Route path="/model-details" element={<ModelDetailsPage />} />
          <Route
            path="/compost-unit-specs"
            element={<CompostUnitSpecsPage />}
          />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/sops" element={<SopsPage />} />
          <Route path="/expertise-details" element={<ExpertiseDetailsPage />} />
          <Route path="/business-plan" element={<BusinessPlan />} />
          <Route path="/mushroom-types" element={<MushroomTypes />} />
          <Route
            path="/mushroom-types/:slug"
            element={<MushroomTypeDetails />}
          />
          <Route path="/equipment" element={<EquipmentPageNew />} />
          <Route path="/equipment/infrastructure-and-insulation" element={<EquipmentInfrastructurePage />} />
          <Route path="/equipment/growing-racks-and-shelving" element={<EquipmentGrowingRacksPage />} />
          <Route path="/equipment/complete-list" element={<EquipmentCompleteListPage />} />
          <Route path="/equipment/complete-list/machinery" element={<MachineryDirectoryPage />} />
          <Route path="/equipment/complete-list/equipment" element={<EquipmentDirectoryPage />} />
          <Route path="/equipment/complete-list/safety" element={<SafetyDirectoryPage />} />
          <Route path="/equipment/complete-list/infrastructure" element={<InfrastructurePage />} />
          <Route path="/equipment/complete-list/raw-material" element={<RawMaterialPage />} />
          <Route path="/equipment/complete-list/substrate-preparation" element={<SubstratePrepPage />} />
          <Route path="/equipment/complete-list/compost-unit" element={<CompostUnitPage />} />
          <Route path="/equipment/complete-list/spawn-production" element={<SpawnProductionPage />} />
          <Route path="/equipment/complete-list/laboratory" element={<LaboratoryPage />} />
          <Route path="/equipment/complete-list/climate-control" element={<ClimateControlPage />} />
          <Route path="/equipment/complete-list/ventilation" element={<VentilationPage />} />
          <Route path="/equipment/complete-list/water-management" element={<WaterManagementPage />} />
          <Route path="/equipment/complete-list/harvest-post-harvest" element={<HarvestPostHarvestPage />} />
          <Route path="/equipment/complete-list/cold-chain" element={<ColdChainPage />} />
          <Route path="/equipment/complete-list/processing" element={<ProcessingPage />} />
          <Route path="/equipment/complete-list/material-handling" element={<MaterialHandlingPage />} />
          <Route path="/equipment/complete-list/electrical-power" element={<ElectricalPowerPage />} />
          <Route path="/equipment/complete-list/cleaning-biosecurity" element={<CleaningBiosecurityPage />} />
          <Route path="/equipment/complete-list/quality-control" element={<QualityControlPage />} />
          <Route path="/equipment/complete-list/safety-additional" element={<SafetyAdditionalPage />} />
          <Route path="/equipment/complete-list/waste-management" element={<WasteManagementPage />} />

          <Route path="/subsidy" element={<Subsidy />} />
          <Route
            path="/pan-india-global-operations"
            element={<OperationsPage />}
          />
          <Route path="/mushroom-farm-climate-tracker" element={<ClimateTrackerPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route
            path="/articles/mushroom-farming-beginner-guide-india-2026-2027"
            element={<ArticleBeginnerGuide />}
          />
          <Route
            path="/articles/what-is-mushroom-spawn-beginner-guide-india"
            element={<ArticleMushroomSpawn />}
          />
          <Route
            path="/articles/mushroom-farming-business-plan-hindi-2026"
            element={<ArticleBusinessPlanHindi />}
          />
          <Route
            path="/articles/mushroom-farming-training-hindi-india"
            element={<ArticleTrainingGuideHindi />}
          />
          <Route
            path="/articles/mushroom-farming-training-online-offline-certificate"
            element={<ArticleMushroomTrainingAffordable />}
          />
          <Route
            path="/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026"
            element={<ArticleGharParMushroomFarming />}
          />
          <Route
            path="/articles/mushroom-farming-complete-guide-hinglish-india"
            element={<ArticleUltimateGuideHinglish />}
          />
          <Route
            path="/articles/mushroom-training-profit-guide-usa"
            element={<ArticleUSAProfitGuide />}
          />
          <Route
            path="/articles/medicinal-mushrooms-income-guide-usa"
            element={<ArticleUSAMedicinalIncome />}
          />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/success-story/:id" element={<ProjectSpecsPage />} />
          <Route path="/workshop" element={<WorkshopPage />} />
          <Route path="/training" element={<TrainingPage  metaDesc="Start your mushroom farming journey! Join our professional training for Oyster, Button, and Milky varieties. Basic & Advanced courses starting at ₹299." />} />
          <Route path="/training-checkout" element={<TrainingCheckoutPage />} />
          <Route path="/turnkey-projects" element={<TurnkeyProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="/support" element={<CustomerSupportPage />} />

          <Route path="/careers" element={<CareersPage />} />
          <Route
            path="/mushroom-price-today"
            element={<MushroomPriceTodayPage />}
          />
          <Route
            path="/mushroom-franchise"
            element={<MushroomFranchisePage />}
          />
          <Route path="/site-directory" element={<SitemapPage />} />

          <Route path="/states" element={<StatesPage  metaDesc="Explore state-wise mushroom farming resources across India. Connect with regional experts, locate farm setup consultants, and access government guides." />} />
          <Route path="/states/madhya-pradesh" element={<MadhyaPradeshPage />} />
          <Route path="/madhya-pradesh/how-to-start-mushroom-farming-india" element={<ArticleMadhyaPradeshGuide />} />
          <Route path="/states/maharashtra" element={<MaharashtraPage />} />
          <Route path="/states/karnataka" element={<KarnatakaPage />} />
          <Route path="/states/tamil-nadu" element={<TamilNaduPage />} />
          <Route path="/states/delhi" element={<DelhiPage />} />
          <Route path="/states/telangana" element={<TelanganaPage />} />
          <Route path="/states/west-bengal" element={<WestBengalPage />} />
          <Route path="/states/bihar" element={<BiharPage />} />
          <Route path="/states/chandigarh" element={<ChandigarhPage />} />
          <Route path="/states/chhattisgarh" element={<ChhattisgarhPage />} />
          <Route path="/states/kerala" element={<KeralaPage />} />
          <Route path="/states/gujarat" element={<GujaratPage />} />
          <Route path="/states/punjab" element={<PunjabPage />} />
          <Route path="/states/rajasthan" element={<RajasthanPage />} />
          <Route path="/states/uttar-pradesh" element={<UttarPradeshPage />} />
          <Route path="/states/haryana" element={<HaryanaPage />} />
          <Route path="/states/uttarakhand" element={<UttarakhandPage />} />
          <Route path="/states/andhra-pradesh" element={<AndhraPradeshPage />} />
          <Route path="/states/odisha" element={<OdishaPage />} />
          <Route path="/states/jharkhand" element={<JharkhandPage />} />
          <Route path="/states/assam" element={<AssamPage />} />
          <Route path="/cities/madhya-pradesh/jabalpur" element={<ArticleJabalpurGuide />} />
          <Route path="/cities/assam/guwahati" element={<ArticleGuwahatiTraining />} />
          <Route path="/cities/karnataka/bangalore" element={<ArticleBangaloreTraining />} />
          <Route path="/mushroom-farming-mysuru-karnataka" element={<ArticleMysuruTraining />} />
          <Route path="/cities/karnataka/mangalore" element={<ArticleMangaloreTraining />} />
          <Route path="/cities/chhattisgarh/raipur" element={<ArticleRaipurTraining />} />
          <Route path="/cities/kerala/kochi" element={<ArticleKochiTraining />} />
          <Route path="/mushroom-farming-thiruvananthapuram-kerala" element={<ArticleThiruvananthapuramTraining />} />
          <Route path="/cities/odisha/bhubaneswar" element={<ArticleBhubaneswarTraining />} />
          <Route path="/cities/jharkhand/ranchi" element={<ArticleRanchiTraining />} />
          <Route path="/cities/tamil-nadu/chennai" element={<ArticleChennaiTraining />} />
          <Route path="/cities/tamil-nadu/coimbatore" element={<ArticleCoimbatoreTraining />} />
          <Route path="/cities/tamil-nadu/tiruchirappalli" element={<ArticleTiruchirappalliTraining />} />
          <Route path="/mushroom-farming-madurai-tamil-nadu" element={<ArticleMaduraiTraining />} />
          <Route path="/cities/maharashtra/mumbai" element={<ArticleMumbaiTraining />} />
          <Route path="/cities/maharashtra/nashik" element={<ArticleNashikTraining />} />
          <Route path="/product/milky-spawn" element={<SpawnSeedPage />} />
          <Route path="/cities/delhi/new-delhi" element={<ArticleDelhiTraining />} />
          <Route path="/cities/haryana/gurugram" element={<ArticleGurugramTraining />} />
          <Route path="/cities/haryana/faridabad" element={<ArticleFaridabadTraining />} />
          <Route path="/cities/uttar-pradesh/noida" element={<ArticleNoidaTraining />} />
          <Route path="/mushroom-farming-dehradun-uttarakhand" element={<ArticleDehradunTraining />} />
          <Route path="/cities/telangana/hyderabad" element={<ArticleHyderabadTraining />} />
          <Route path="/cities/west-bengal/kolkata" element={<ArticleKolkataTraining />} />
          <Route path="/mushroom-farming-siliguri-west-bengal" element={<ArticleSiliguriTraining />} />
          <Route path="/cities/gujarat/ahmedabad" element={<ArticleAhmedabadTraining />} />
          <Route path="/cities/andhra-pradesh/visakhapatnam" element={<ArticleVisakhapatnamTraining />} />
          <Route path="/cities/andhra-pradesh/vijayawada" element={<ArticleVijayawadaTraining />} />
          <Route path="/cities/gujarat/surat" element={<ArticleSuratTraining />} />
          <Route path="/cities/gujarat/rajkot" element={<ArticleRajkotTraining />} />
          <Route path="/mushroom-farming-vadodara-gujarat" element={<ArticleVadodaraTraining />} />
          <Route path="/mushroom-farming-amritsar-punjab" element={<ArticleAmritsarTraining />} />
          <Route path="/cities/bihar/patna" element={<ArticlePatnaTraining />} />
          <Route path="/cities/chandigarh" element={<ArticleChandigarhTraining />} />
          <Route path="/cities/rajasthan/jaipur" element={<ArticleJaipurTraining />} />
          <Route path="/mushroom-farming-bikaner-rajasthan" element={<ArticleBikanerTraining />} />
          <Route path="/mushroom-farming-udaipur-rajasthan" element={<ArticleUdaipurTraining />} />
          <Route path="/cities/uttar-pradesh/lucknow" element={<ArticleLucknowTraining />} />
          <Route path="/cities/uttar-pradesh/agra" element={<ArticleAgraTraining />} />
          <Route path="/cities/uttar-pradesh/kanpur" element={<ArticleKanpurTraining />} />
          <Route path="/cities/madhya-pradesh/indore" element={<ArticleIndoreTraining />} />
          <Route path="/cities/madhya-pradesh/bhopal" element={<ArticleBhopalTraining />} />
          <Route path="/cities/madhya-pradesh/gwalior" element={<ArticleGwaliorTraining />} />
          <Route path="/cities/maharashtra/nagpur" element={<ArticleNagpurTraining />} />
          <Route path="/cities/maharashtra/aurangabad" element={<ArticleAurangabadTraining />} />
          <Route path="/articles/turnkey-mushroom-farm-setup-india" element={<ArticleTurnkeyMushroomFarm />} />
          <Route path="/articles/turnkey-commercial-setup" element={<ArticleTurnkeyCommercialSetup  metaDesc="Read our complete guide on turnkey commercial mushroom farm setup. Learn about EPC consultancy, climate-controlled grow rooms, and infrastructure." />} />
          <Route path="/blog/mushroom-training-guide-punjabi" element={<ArticleMushroomTrainingGuidePunjabi />} />
              <Route path="/blog/organic-mushrooms-health-benefits-nutrition-cultivation-uses" element={<ArticleOrganicMushroomHealthBenefits />} />

          <Route path="/blog/mushroom-training-guide-hindi" element={<ArticleMushroomTrainingGuideHindi />} />
          <Route path="/blog/mushroom-farming-business-practical-guide" element={<ArticlePracticalGuideHinglish />} />
          <Route path="/blog/7-mushroom-farming-mistakes-india" element={<ArticleMushroomFarmingMistakes />} />
          <Route path="/blog/commercial-mushroom-farming-india" element={<ArticleUltimateGuideIndia />} />
          <Route path="/blog/mushroom-farming-training-tamil-guide" element={<ArticleTamilTrainingGuide />} />
          <Route path="/blog/mushroom-farming-russia" element={<ArticleMushroomFarmingRussia />} />
          <Route path="/blog/best-mushroom-farming-training-guide-india" element={<ArticleBestMushroomFarmingTrainingGuide />} />
          <Route path="/blog/how-to-get-mushroom-farming-training" element={<ArticleHowToGetMushroomFarmingTraining />} />
          <Route path="/locations/jabalpur" element={<JabalpurPage />} />
          <Route path="/locations/jabalpur/:slug" element={<JabalpurBlogPage />} />
          <Route path="/locations/pune" element={<PunePage />} />
          <Route path="/locations/pune/:slug" element={<PuneBlogPage />} />
          <Route path="/mushroom-farming-usa-guide" element={<MushroomFarmingUsaGuide />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

import ArticleMadhyaPradeshGuide from './pages/ArticleMadhyaPradeshGuide';

import ArticleJabalpurGuide from './pages/ArticleJabalpurGuide';
import ArticleBangaloreTraining from './pages/ArticleBangaloreTraining';
import ArticleMysuruTraining from './pages/ArticleMysuruTraining';
import ArticleMangaloreTraining from './pages/ArticleMangaloreTraining';
import ArticleChennaiTraining from './pages/ArticleChennaiTraining';
import ArticleCoimbatoreTraining from './pages/ArticleCoimbatoreTraining';
import ArticleMaduraiTraining from './pages/ArticleMaduraiTraining';
import ArticleTiruchirappalliTraining from './pages/ArticleTiruchirappalliTraining';
import ArticleMumbaiTraining from './pages/ArticleMumbaiTraining';
import ArticleDelhiTraining from './pages/ArticleDelhiTraining';
import ArticleGurugramTraining from './pages/ArticleGurugramTraining';
import ArticleFaridabadTraining from './pages/ArticleFaridabadTraining';
import ArticleNoidaTraining from './pages/ArticleNoidaTraining';
import ArticleDehradunTraining from './pages/ArticleDehradunTraining';
import ArticleMushroomFarmingMistakes from './pages/ArticleMushroomFarmingMistakes';
import ArticleHyderabadTraining from './pages/ArticleHyderabadTraining';
import ArticleKolkataTraining from './pages/ArticleKolkataTraining';
import ArticleSiliguriTraining from './pages/ArticleSiliguriTraining';
import ArticleAhmedabadTraining from './pages/ArticleAhmedabadTraining';
import ArticleSuratTraining from './pages/ArticleSuratTraining';
import ArticlePatnaTraining from './pages/ArticlePatnaTraining';
import ArticleChandigarhTraining from './pages/ArticleChandigarhTraining';
import ArticleJaipurTraining from './pages/ArticleJaipurTraining';
import ArticleBikanerTraining from './pages/ArticleBikanerTraining';
import ArticleUdaipurTraining from './pages/ArticleUdaipurTraining';
import ArticleLucknowTraining from './pages/ArticleLucknowTraining';
import ArticleAgraTraining from './pages/ArticleAgraTraining';
import ArticleKanpurTraining from './pages/ArticleKanpurTraining';
import ArticleIndoreTraining from './pages/ArticleIndoreTraining';
import ArticleBhopalTraining from './pages/ArticleBhopalTraining';
import ArticleGwaliorTraining from './pages/ArticleGwaliorTraining';
import ArticleNagpurTraining from './pages/ArticleNagpurTraining';
import ArticleAurangabadTraining from './pages/ArticleAurangabadTraining';
import ArticleRaipurTraining from './pages/ArticleRaipurTraining';
import ArticleKochiTraining from './pages/ArticleKochiTraining';
import ArticleThiruvananthapuramTraining from './pages/ArticleThiruvananthapuramTraining';
import ArticleVisakhapatnamTraining from './pages/ArticleVisakhapatnamTraining';
import ArticleVijayawadaTraining from './pages/ArticleVijayawadaTraining';
import ArticleBhubaneswarTraining from './pages/ArticleBhubaneswarTraining';
import ArticleRanchiTraining from './pages/ArticleRanchiTraining';
import ArticleGuwahatiTraining from './pages/ArticleGuwahatiTraining';
import ArticleNashikTraining from './pages/ArticleNashikTraining';
import ArticleVadodaraTraining from './pages/ArticleVadodaraTraining';
import ArticleRajkotTraining from './pages/ArticleRajkotTraining';
import ArticleAmritsarTraining from './pages/ArticleAmritsarTraining';

import ArticleTurnkeyMushroomFarm from './pages/ArticleTurnkeyMushroomFarm';
import ArticleMushroomTrainingGuideHindi from "./pages/ArticleMushroomTrainingGuideHindi";
import ArticleMushroomTrainingGuide from "./pages/ArticleMushroomTrainingGuide";
import ArticleMushroomTrainingGuidePunjabi from "./pages/ArticleMushroomTrainingGuidePunjabi";
import ArticleOrganicMushroomHealthBenefits from "./pages/ArticleOrganicMushroomHealthBenefits";
import ArticleBestMushroomFarmingTrainingGuide from "./pages/ArticleBestMushroomFarmingTrainingGuide";
import ArticleHowToGetMushroomFarmingTraining from "./pages/ArticleHowToGetMushroomFarmingTraining";

import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <>
      <MetaPixelTracker />
      <ScrollToTop />
      <div className="selection:bg-primary-start/30 selection:dark:text-white text-slate-900 dark:text-white bg-slate-50 dark:bg-[#0A0A0A] min-h-screen">
        <Background3D />
        <Navbar />

        <main>
          <AnimatedRoutes />
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </>
  );

}

const ComparisonTable = () => {
  const data = [
    { feature: "Commercial Insulation", us: "80-100mm PUF", others: "40-50mm" },
    {
      feature: "Commercial AC Systems",
      us: "Daikin Industrial",
      others: "Split ACs",
    },
    { feature: "Commercial Racking", us: "MS / GI", others: "Bamboo" },
    { feature: "Global Support", us: "Lifetime Video", others: "1 Year" },
    {
      feature: "Government Subsidy",
      us: "Full Document Support",
      others: "No Support",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="badge mx-auto mb-4">Commercial Setup Comparison</div>
          <h2 className="mb-4 uppercase tracking-tight">
            The Commercial <span className="gradient-text">Organic Edge</span>
          </h2>
          <p className="max-w-xl mx-auto">
            Why we are the preferred commercial partner nationwide and globally.
          </p>
        </div>

        <div className="glass border dark:border-white/10 border-black/10 overflow-hidden relative shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10">
                  <th className="px-4 md:px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    Features
                  </th>
                  <th className="px-4 md:px-8 py-6 text-[9px] font-black dark:text-white text-slate-900 uppercase tracking-widest gradient-bg">
                    Organic
                  </th>
                  <th className="px-4 md:px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="px-4 md:px-8 py-5 text-[11px] font-bold dark:text-slate-400 text-slate-600">
                      {row.feature}
                    </td>
                    <td className="px-4 md:px-8 py-5 text-[12px] font-bold dark:text-white text-slate-900 tracking-tight">
                      {row.us}
                    </td>
                    <td className="px-4 md:px-8 py-5 text-[12px] font-medium text-slate-500">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
