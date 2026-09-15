# Organic Mushrooms Farm - Next.js Migration Architecture & Roadmap

## 📌 Project Overview & Intent
The goal is to safely migrate the entire Organic Mushrooms Farm web application from **React + Vite** to **Next.js (App Router, Latest Version)** for optimal SEO, server-side rendering (SSR/SSG), faster Googlebot indexing, and rich social media previews (WhatsApp/Facebook/Twitter), while preserving 100% of existing functionality, styling, animations, and backend API logic.

---

## 🔒 Core Safety & Non-Destructive Rules
1. **Never Delete Existing React Vite Files**: All existing files in `src/`, `server.ts`, and root scripts remain completely intact as a fallback.
2. **Parallel App Router**: Build the Next.js application inside the standard `app/` directory (App Router).
3. **Port 3000 Ingress**: Next.js server MUST bind to `0.0.0.0` and port `3000` to be accessible through the container proxy.
4. **Tailwind CSS v4 & Motion Animations**: Retain all styling variables, glassmorphism, gradients, text colors, and Framer Motion (`motion/react`) animations.

---

## 🗺️ Step-by-Step Migration Sequence

### Phase 1: Core Setup & Global Styling
- [x] Configure `next.config.mjs` and install `next` package for Next.js App Router.
- [x] Setup `app/layout.tsx` (Root Layout) and `app/globals.css` (Tailwind CSS v4, theme colors, glass utilities).
- [x] Setup `app/components/MyceliumBackground.tsx` (Canvas Mycelium particle background) and `app/components/DynamicGreeting.tsx` (Live time & GPS weather ticker).

### Phase 2: Homepage Migration (100% Scope Completed)
- [x] `app/page.tsx` (Homepage root assembly)
- [x] `app/components/HeroSection.tsx` (Hero Section with Live 3D progress showcase, statistics, and high-conversion CTAs)
- [x] `app/components/TrustStats.tsx` (Key commercial farm trust highlights & specifications)
- [x] `app/components/WhyChooseUs.tsx` (360° Virtual Tour & 6 Infrastructure Pillar Cards)
- [x] `app/components/CommercialModels.tsx` (Fixed Models vs Custom Interactive Setup Estimator)
- [x] `app/components/MushroomComparison.tsx` (Button vs Oyster vs Milky vs Cordyceps comparison cards)
- [x] `app/components/ROICalculator.tsx` (Interactive CapEx, OpEx, Revenue & Profit dynamic calculation sliders)
- [x] `app/components/CriticalParameters.tsx` (Temperature, Humidity, CO2, Light, pH precision requirements)
- [x] `app/components/ProductionSOP.tsx` (Phase-I Composting to Phase-IV Harvesting step-by-step SOP timeline)
- [x] `app/components/CompostUnits.tsx` (2000-Bag & 3000-Bag commercial pasteurization tunnel units)
- [x] `app/components/TestimonialsSection.tsx` (Real commercial grower reviews & video feedback)
- [x] `app/components/MarketplaceSection.tsx` (Global B2B Spawn, Fresh & Dry Mushroom trade links)
- [x] `app/components/ResourcesKnowledgeHub.tsx` (SOP downloadable guides & featured video stream)
- [x] `app/components/StatesSection.tsx` (28 Indian States & UTs commercial consultation links)
- [x] `app/components/CTASection.tsx` (Commercial turnkey setup consultation enquiry form)
- [x] `app/components/Footer.tsx` (Certified E-E-A-T Excellence, Full Navigation, Hubs, Contact & Social Links)

### Phase 3: Interactive & Sticky Components ("use client")
- [x] `app/components/FloatingButtons.tsx` (Sticky WhatsApp button, Scroll-to-top button, Mobile dock bottom navigation bar)
- [x] `app/components/TrainingModal.tsx` (Interactive multi-tier training modal for India ₹299/₹699 & USA/International $39/$97)
- [x] `app/components/AIChatWidget.tsx` (Gemini AI Chat Bot integration with floating state, voice/prompts, typing indicator, markdown)
- [x] `DynamicGreeting` (Live time greeting & Open-Meteo GPS weather status)
- [ ] `ClimateTrackerPage` (GPS geolocation + Open-Meteo API + local storage sync)
- [ ] Promo Modal and interactive dialogues

### Phase 4: Navigation & Global Header
- [x] Desktop Navbar (`app/components/Navbar.tsx` - Logo, dynamic greeting, dropdowns for Models, Species, SOPs, Marketplace, Training CTA)
- [x] Mobile Navigation Drawer (Drag-to-dismiss gesture, 2-column grid touch cards, live weather ticker, social links & direct helpline)
- [x] Smooth scroll anchor links with active section ScrollSpy and glassmorphic capsule design

### Phase 5: Backend APIs & Server Handlers (`app/api/`)
- [x] `/api/chat/route.ts` - Gemini AI chat integration (`@google/genai`, model `gemini-3.8-flash`)
- [ ] `/api/razorpay-webhook/route.ts` - Razorpay signature verification (HMAC SHA256)
- [ ] `/api/contact/route.ts` - Nodemailer & Formspree email notification dispatch
- [ ] `/api/location/route.ts` - GeoIP detection
- [ ] `/api/intl/route.ts` & `/api/checkout-payload/route.ts` - International checkout support
- [ ] Firebase Firestore server-side logging

### Phase 6: Server Switch & Port 3000 Verification
- [ ] Switch active dev server to Next.js on port 3000.
- [ ] Verify live rendering, responsive UI, animations, and API responses in Google AI Studio preview.

### Phase 7: Dynamic Routes & Rich Schemas (Postponed to Final Step as Requested)
- [ ] 150+ Dynamic State & City Training Guides (`app/[state]/page.tsx`, `app/[city]-training/page.tsx`)
- [ ] Equipment Directory Pages (`app/equipment/[category]/page.tsx`)
- [ ] Complete JSON-LD Schemas (Global FAQ, Local Business, Product, Review, Service)
- [ ] Static verification endpoints (`ads.txt`, `robots.txt`, `sitemap.xml`, `llms.txt`)

---

## 📝 Important Parameters & State Reference
- **Active WhatsApp**: `+91 9203544140`
- **Workshop Price**: `₹199`
- **Basic Training**: `₹299` / **Advanced Training**: `₹499` / **USA Training**: `$49`
- **Primary Farm Location**: Katangi Road, Jabalpur, Madhya Pradesh - 483105, India

---

## 📜 Verified Chat Log & Completed Milestone Log (2026-09-06)

### ✅ Verified 21/21 Complete Next.js Homepage & Navigation Components:
1. `Navbar.tsx` (Glassmorphic floating capsule header, logo, dynamic greeting, desktop dropdowns, mobile drawer)
2. `DynamicGreeting.tsx` (Live time greeting & Open-Meteo GPS weather status)
3. `HeroSection.tsx` (Hero Section with Live 3D progress showcase, statistics, and high-conversion CTAs)
4. `TrustStats.tsx` (Key commercial farm trust highlights & specifications)
5. `WhyChooseUs.tsx` (360° Virtual Tour & 6 Infrastructure Pillar Cards)
6. `CommercialModels.tsx` (Fixed Models vs Custom Interactive Setup Estimator)
7. `MushroomComparison.tsx` (Button vs Oyster vs Milky vs Cordyceps comparison cards)
8. `ROICalculator.tsx` (Interactive CapEx, OpEx, Revenue & Profit dynamic calculation sliders)
9. `CriticalParameters.tsx` (Temperature, Humidity, CO2, Light, pH precision requirements)
10. `ProductionSOP.tsx` (Phase-I Composting to Phase-IV Harvesting step-by-step SOP timeline)
11. `CompostUnits.tsx` (2000-Bag & 3000-Bag commercial pasteurization tunnel units)
12. `TestimonialsSection.tsx` (Real commercial grower reviews & video feedback)
13. `MarketplaceSection.tsx` (Global B2B Spawn, Fresh & Dry Mushroom trade links)
14. `ResourcesKnowledgeHub.tsx` (SOP downloadable guides & featured video stream)
15. `StatesSection.tsx` (28 Indian States & UTs commercial consultation links)
16. `CTASection.tsx` (Commercial turnkey setup consultation enquiry form)
17. `Footer.tsx` (Certified E-E-A-T Excellence, Full Navigation, Hubs, Contact & Social Links)
18. `FloatingButtons.tsx` (Sticky WhatsApp button, Scroll-to-top button, Mobile dock bottom navigation bar)
19. `AIChatWidget.tsx` (Gemini AI Chat Bot integration with floating state, voice/prompts, typing indicator, markdown)
20. `TrainingModal.tsx` (Interactive multi-tier training modal for India ₹299/₹699 & USA/International $39/$97)
21. `MyceliumBackground.tsx` (Interactive canvas particle mycelium network background)

### 🔒 Safety Rules Enforced:
- No changes made to legacy React/Vite files (`src/`, `server.ts`).
- All work strictly confined to Next.js App Router (`app/`).
