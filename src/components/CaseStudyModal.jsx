import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Smartphone,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowLeft,
  GitBranch,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Eye,
  Navigation,
  QrCode,
  TrendingUp,
  Wallet,
  MapPin,
  Compass,
  Globe,
  Play,
  Building2,
  Bot,
  Briefcase,
  ShoppingBag
} from 'lucide-react';

export default function CaseStudyModal({
  isOpen,
  onClose,
  initialProject = 'kangaroo',
  initialView = 'project' // 'project' | 'list'
}) {
  const [selectedProjectId, setSelectedProjectId] = useState(initialProject);
  const [view, setView] = useState(initialView); // 'project' | 'list'
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setSelectedProjectId(initialProject);
    setView(initialView);
    setActiveImageIndex(0);
    setZoomLevel(1);
  }, [initialProject, initialView, isOpen]);

  useEffect(() => {
    setActiveImageIndex(0);
    setZoomLevel(1);
  }, [selectedProjectId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (lightboxOpen) setLightboxOpen(false);
        else onClose();
      } else if (e.key === 'ArrowRight' && view === 'project') {
        nextImage();
      } else if (e.key === 'ArrowLeft' && view === 'project') {
        prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, lightboxOpen, view, activeImageIndex, selectedProjectId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Projects data
  const projectsData = {
    kangaroo: {
      id: 'kangaroo',
      name: 'Kangaroo — Wellbeing & Learning App',
      category: 'iOS & Android App',
      tag: 'Featured EdTech',
      badgeColor: 'bg-[#5B3DF5] text-white',
      rating: '4.9 ★ (12k+ Reviews)',
      headline: 'A safer, kinder and brighter space to Learn, Connect and Grow.',
      description:
        'Engineered by Codexa with smooth 60 FPS animations, mindful calm-down breathing exercises, safe student community hubs, and structured flow logic.',
      stats: [
        { label: 'Performance', value: '60 FPS Native' },
        { label: 'Crash-Free', value: '99.98%' },
      ],
      engineering: [
        'Flutter / React Native cross-platform code base',
        '60 FPS smooth physics & fluid animations',
        'Offline-first state synchronization with Supabase',
      ],
      design: [
        'Custom illustrated Kangaroo mascot & design system',
        'Calm-down breathing circle UI & nature audio',
        'Inclusive student-first accessibility',
      ],
      gallery: [
        {
          src: '/assets/Kangaroo Wellbeing App Showcase.png',
          title: 'Kangaroo Wellbeing App Showcase',
          description:
            'Multi-screen experience: Onboarding, EduConnect, Kangaroo Community Hub, Calm Down Breathing, and Student Profile.',
          stepBadge: '01 • Overview Showcase',
          isDiagram: false,
        },
        {
          src: '/assets/Kangaroo App Workflow Dashboard.png',
          title: 'Kangaroo App Workflow Dashboard',
          description:
            'End-to-end user journey architecture across 9 modular phases from initial onboarding to live project collaboration.',
          stepBadge: '02 • Workflow Architecture',
          isDiagram: false,
        },
        {
          src: '/assets/Kangaroo Learning App Showcase.png',
          title: 'Kangaroo Learning App Showcase',
          description:
            'Flagship iPhone 15 Pro portrait showcase highlighting the interactive Kangaroo mascot, clean typography, and joyful micro-interactions.',
          stepBadge: '03 • Hero Interface',
          isDiagram: false,
        },
        {
          src: '/assets/kangaroo_app_flowchart_hd.jpg',
          title: 'Kangaroo App Logic & System Flowchart (Ultra HD)',
          description:
            'Complete high-resolution system routing diagram: Start → Launch → Onboarding → Sign In → Home → Projects, People, Hub, Calm Down, Support Options, and Profile Exit.',
          stepBadge: '04 • System Flowchart & Logic Map (Ultra HD)',
          isDiagram: true,
        },
      ],
    },
    'blind-ai': {
      id: 'blind-ai',
      name: 'Blind AI — Vision & Navigation Assistant',
      category: 'iOS & Android (AI Vision)',
      tag: 'Assistive Tech & AI',
      badgeColor: 'bg-amber-500 text-white',
      rating: '5.0 ★ (Breakthrough Award)',
      headline: 'See the world with confidence — Powered by Gemini Vision AI.',
      description:
        'A revolutionary assistive mobile platform engineered by Codexa. Combines real-time computer vision, obstacle detection with LiDAR/Camera AR highlighting, crosswalk audio alerts, and conversational voice guidance.',
      stats: [
        { label: 'AI Engine', value: 'Gemini Vision' },
        { label: 'Latency', value: '< 25ms Realtime' },
        { label: 'Guidance', value: '3D Spatial Audio' },
      ],
      engineering: [
        'Real-time object & hazard classification via Camera & LiDAR',
        'Turn-by-turn pedestrian voice navigation with crosswalk safety alerts',
        'Offline low-latency speech recognition & haptic vibration cues',
      ],
      design: [
        'Amber orb conversational voice UI with minimal visual cognitive load',
        'High-contrast pedestrian AR danger highlight overlays',
        'Screen-reader first (VoiceOver & TalkBack) architectural compliance',
      ],
      qrCode: '/assets/BLIND AI.png',
      gallery: [
        {
          src: '/assets/Blind AI App Promo Screens.png',
          title: 'Blind AI App Promo Screens',
          description:
            'Comprehensive 5-screen overview: Home ("How can I help you today?"), Destination Selection, Listening with Gemini AI, Turn-by-Turn Walk Guidance, and Red AR Obstacle Detection Alert.',
          stepBadge: '01 • Core Experience',
          isDiagram: false,
        },
        {
          src: '/assets/Blind AI App Workflow Infographic.png',
          title: 'Blind AI App Workflow & Architecture Map',
          description:
            'Complete 10-step sensor and AI pipeline: Camera/GPS/Sensors → AI Processing → Describe Surroundings → Obstacle Alert → Crosswalk Guidance → Current Location → Safe Arrival.',
          stepBadge: '02 • Sensor & AI Pipeline',
          isDiagram: false,
        },
        {
          src: '/assets/Blind AI Navigation App UI Collage.png',
          title: 'Blind AI Navigation App UI Collage',
          description:
            'Full 10-screen high-fidelity collage illustrating pedestrian map routing, simulated obstacles, audio instructions, and orientation compass.',
          stepBadge: '03 • Complete UI Suite',
          isDiagram: false,
        },
        {
          src: '/assets/Blind AI Voice Assistant Mockup.png',
          title: 'Blind AI Voice Assistant Hero Mockup',
          description:
            'Flagship iPhone 15 Pro portrait showcase with glowing amber orb: "How can I help you today? Start navigation • Describe what\'s around me • Where am I?".',
          stepBadge: '04 • Conversational AI Interface',
          isDiagram: false,
        },
      ],
    },
    spendsense: {
      id: 'spendsense',
      name: 'SpendSense — AI Personal Finance Companion',
      category: 'iOS & Android (Fintech & AI)',
      tag: 'Featured Fintech',
      badgeColor: 'bg-emerald-600 text-white',
      rating: '4.9 ★ (Fintech Innovation Award)',
      headline: 'Track today. Invest in tomorrow — Turn everyday spending into a brighter future.',
      description:
        'An intelligent personal finance companion engineered by Codexa. Combines AI receipt scanning, real-time merchant insights, automated budget categorization, retirement compound calculators, and gamified financial learning.',
      stats: [
        { label: 'AI Assistant', value: 'Voice & OCR' },
        { label: 'Savings Growth', value: '+34% MoM' },
      ],
      engineering: [
        'React Native cross-platform code base with 60 FPS gesture physics',
        'Camera OCR receipt scanning with instant merchant & item parsing',
        'End-to-end encrypted financial data sync with real-time budget ledger',
      ],
      design: [
        'Delightful plant mascot design system symbolizing financial growth & health',
        'Conversational AI voice companion UI with voice prompt shortcuts',
        'Long-term future impact slider visualizing compound retirement growth',
      ],
      gallery: [
        {
          src: '/assets/SpendSense Finance App Showcase.png',
          title: 'SpendSense Finance App Showcase (5-Device Suite)',
          description:
            'Core 5-device flagship showcase: Home Dashboard ("Small choices, bigger future"), Monthly Insights breakdown, SpendSense AI voice companion, Nearby Merchants map, and 10-Year Future Impact retirement calculator.',
          stepBadge: '01 • Core Platform Overview',
          isDiagram: false,
        },
        {
          src: '/assets/SpendSense App Workflow Journey.png',
          title: 'SpendSense 15-Step End-to-End User Journey Workflow (Ultra HD)',
          description:
            'Comprehensive user lifecycle: 1) Onboarding → 2) Profile Setup → 3) Set Goals → 4) Home Dashboard → 5) Add Transaction (Scan Receipt) → 6) Categorize → 7) Budget Tracking → 8) Merchant Details → 9) Analytics → 10) Smart Insights → 11) Learn & Earn → 12) Community → 13) Goal Progress → 14) Smart Alerts → 15) Long-Term Impact.',
          stepBadge: '02 • Complete 15-Step User Journey (Ultra HD)',
          isDiagram: true,
        },
        {
          src: '/assets/SpendSense AI Finance Assistant.png',
          title: 'SpendSense Conversational AI Assistant',
          description:
            'Flagship iPhone 15 Pro hero showcase featuring the interactive green sprout robot assistant: "How can I help you today? Track a purchase • Show my spending • Set a savings goal • Teach me • Tap to speak".',
          stepBadge: '03 • Conversational AI Engine',
          isDiagram: false,
        },
        {
          src: '/assets/SpendSense App Workflow Infographic.png',
          title: 'SpendSense App Workflow & Architecture Infographic',
          description:
            '10-phase modular architecture connecting receipt scanning, AI spending suggestions, merchant intelligence, community leaderboard, and continuous guidance.',
          stepBadge: '04 • System Architecture',
          isDiagram: true,
        },
        {
          src: '/assets/Fintech Learning App Screen Collection.png',
          title: 'SpendSense Fintech & Community UI Collage (10 Screens)',
          description:
            'Deep dive into 10 specialized app screens: Retirement Income Gap simulator, Family Security, Learn & Earn micro-lessons, Community (€2.4M saved together), Merchant geofencing, and Quick Actions.',
          stepBadge: '05 • Comprehensive 10-Screen Suite',
          isDiagram: false,
        },
      ],
    },
    planitory: {
      id: 'planitory',
      name: 'Planitory — Maps with Stories, Trips with Meaning',
      category: 'iOS & Android (Travel & Maps)',
      tag: 'Featured Travel Tech',
      badgeColor: 'bg-indigo-600 text-white',
      rating: '4.9 ★ (App of the Day)',
      headline: 'A personalised guide, built inside your map — Discover, buy and create travel maps.',
      description:
        'A next-generation travel & creator platform engineered by Codexa. Connects travelers with local creators who share curated interactive map guides, audio tours, offline GPS navigation, and seamless Stripe micro-transactions.',
      stats: [
        { label: 'Active Creators', value: '12,000+' },
        { label: 'Offline GPS', value: '100% Vector' },
      ],
      engineering: [
        'Mapbox / MapLibre vector tiles with customized cartographic shaders',
        'Full offline vector map download & turn-by-turn GPS cache',
        'Stripe Connect creator monetization engine with 1-click checkout',
      ],
      design: [
        'Editorial travel magazine layout integrated with interactive cartography',
        'Micro-interaction rich audio notes and location unlock cards',
        'Creator profile portfolio hubs with follower feeds & verified badges',
      ],
      gallery: [
        {
          src: '/assets/Planitory Travel App Mockup.png',
          title: 'Planitory Travel App Flagship Hero Showcase',
          description:
            'Flagship 3D iPhone showcase featuring curated Paris café guides, creator profiles, voice assistant ("Tap to speak"), floating travel memories, and interactive globe pins.',
          stepBadge: '01 • Hero Experience',
          isDiagram: false,
        },
        {
          src: '/assets/Planitory_10_Screens_Equal_Size_16x9.png',
          title: 'Planitory Complete 10-Screen Architecture Suite (16:9 HD)',
          description:
            'Complete 10-screen high fidelity master suite: Discover, Explore Best Cafés in Vienna, Creators Hub, User & Creator Profiles, Map Details, Included Locations, Traveler Reviews, Stripe Checkout, and Trip Notifications.',
          stepBadge: '02 • Complete 10-Screen Master Suite',
          isDiagram: true,
        },
        {
          src: '/assets/Planitory Creators & Social Maps.png',
          title: 'Planitory Creators Hub & Interactive Social Maps',
          description:
            'Explore top travel creators (Emma Wilson, Alex Carter, Sophie Kim), profile showcases, follower leaderboards, and interactive city map guides.',
          stepBadge: '03 • Creator Economy Hub',
          isDiagram: false,
        },
        {
          src: '/assets/Planitory Discovery & Curated Guides.png',
          title: 'Planitory Discovery, Reviews & Stripe Checkout',
          description:
            'Deep dive into map purchases: Location unlocks (Café de Flore, Carette), verified traveler reviews, Apple Pay / Stripe card checkout ($12), and trip notifications.',
          stepBadge: '04 • Monetization & Checkout',
          isDiagram: false,
        },
      ],
    },
    norvique: {
      id: 'norvique',
      name: 'Norvique — Curated Luxury Real Estate Platform',
      category: 'Website & Digital Experience',
      tag: 'Featured Luxury Website',
      badgeColor: 'bg-stone-900 text-amber-300 border border-amber-400/40',
      rating: '5.0 ★ (Awwwards Nominee)',
      headline: 'Discover Latvia’s most exceptional villas — Buy • Sell • Rent • Concierge',
      description:
        'A bespoke luxury real estate platform designed and engineered by Codexa. Features cinematic video walkthroughs, futuristic architectural villas, 3D interactive client review cards, property inquiry concierge, and a comprehensive 8-step user journey.',
      stats: [
        { label: 'Walkthrough Tour', value: '49s 60fps' },
        { label: 'Architecture', value: '8-Step UX Flow' },
      ],
      engineering: [
        'React 19 with GPU-accelerated video rendering & responsive breakpoints',
        '3D CSS transforms for interactive review deck & floating villa cards',
        'Automated inquiry concierge routing with lead capture & booking',
      ],
      design: [
        'Editorial dark-mode aesthetic with golden champagne accents & typography',
        'End-to-end 8-step user journey from discovery to concierge handover',
        'Cinematic video hero with seamless looping & micro-interactions',
      ],
      gallery: [
        {
          src: '/assets/Norvique Sunset Villa Hero.png',
          title: 'Norvique Official Cover Page & Sunset Villa Hero Experience',
          description:
            'Official flagship cover page: Exceptional Properties headline, sunset coastal infinity pool villa, 500+ premium properties, 25+ exclusive locations, 98% satisfaction rating, and video tour trigger.',
          stepBadge: '01 • Official Cover & Hero Experience',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Norvique Website Walkthrough.mp4',
          poster: '/assets/Norvique Video Poster.png',
          title: 'Norvique Live Website Video Walkthrough (Full Tour)',
          description:
            'Full 49-second recording of the live Norvique luxury website: dynamic hero video, Buy • Sell • Rent, futuristic architectural villas, 3D client review deck, and luxury concierge.',
          stepBadge: '02 • Live Video Tour',
          isVideo: true,
          isDiagram: false,
        },
        {
          src: '/assets/NORVIQUE Website User Flow.png',
          title: 'Norvique 8-Step Complete Website User Flow & Architecture',
          description:
            'Complete user journey mapping from discovery to inquiry/booking: Landing & Entry, Search & Explore, Property Details, Enquiry/Contact, List Your Property (For Sellers), Concierge Contact, and User Accounts.',
          stepBadge: '03 • User Flow & UX Architecture',
          isVideo: false,
          isDiagram: true,
        },
        {
          src: '/assets/Norvique Luxury Property Showcase.png',
          title: 'Norvique Luxury Property Showcase Master Suite',
          description:
            'Full portfolio showcase composite: Solis Pavilion, Buy/Sell/Rent portal, Futuristic Homes upcoming, client reviews deck, 3D architectural model in hand, and Exclusive Living.',
          stepBadge: '04 • Showcase Master Suite',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Norvique Futuristic Living.png',
          title: 'Futuristic Living — Upcoming Architectural Masterpieces',
          description:
            'Ultra-modern biophilic and organic cantilevered luxury villas with infinity pools and private sea access in Jurmala, Latvia.',
          stepBadge: '05 • Future Living Collection',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Norvique Client Reviews.png',
          title: 'Interactive 3D Client Reviews Carousel Deck',
          description:
            '3D stacked review cards with verified buyer ratings (James Peterson 5.0, Christopher Hall, Alexander Moore) and smooth card navigation.',
          stepBadge: '06 • Client Testimonials & Trust',
          isVideo: false,
          isDiagram: false,
        },
      ],
    },
    'career-go': {
      id: 'career-go',
      name: 'Career GO — AI Career & Recruitment Assistant Platform',
      category: 'Web App & Autonomous AI Agent',
      tag: 'Featured AI Platform',
      badgeColor: 'bg-purple-700 text-white',
      rating: '4.9 ★ (AI Product of the Year)',
      headline: 'Autonomous Career Co-Pilot: Semantic Job Matching, Resume Optimization & Recruiter Negotiation',
      description:
        'A comprehensive AI-driven talent and recruitment ecosystem engineered by Codexa. Combines real-time vacancy aggregation, 92% semantic vector job matching, smart resume builder with ATS scoring (50-80%), deadline alert workflows, and an intelligent recruiter chat co-pilot with automated technical evaluations.',
      stats: [
        { label: 'AI Match Rate', value: '92% Precision' },
        { label: 'Co-Pilot Engine', value: 'Gemini + Vector' },
      ],
      engineering: [
        'Multi-model LLM embeddings for semantic candidate-to-vacancy precision matching',
        'Real-time WebSocket chat co-pilot with automated technical test generation (60 mins)',
        'Dynamic ATS resume section parser with live completion scoring (50-80%)',
        'Cross-platform responsive design tested for Tablet, Apple Studio Display, and MacBook Pro',
      ],
      design: [
        'Clean high-contrast lavender and violet theme with dedicated "+ AI Assistant" action button',
        'Multi-stage response pipeline: Offers, Under Review, Chat Negotiations, Interview, Approved',
        'Unified employer dashboard with deadline urgency tags and verified badge markers',
      ],
      gallery: [
        {
          src: '/assets/Career GO AI Dashboard Tablet.png',
          title: 'Career GO Application Analytics & Dashboard (Tablet)',
          description:
            'Central applicant command center: Application Analytics for January 2026, 30 submitted applications tracking (+12 sent to employer), urgent deadline reminders (Frontend Developer at BrightTech Solutions), resume completion gauge (50-80%), and AI recommendation feed.',
          stepBadge: '01 • Analytics & Application Funnel',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Career GO AI Job Search Monitor.png',
          title: 'Career GO Semantic Job Search Engine (Studio Display)',
          description:
            'High-volume search platform with live tech vacancies: Perfect 92% AI match indicator, Senior Frontend Developer (200k-300k P/month), Product Designer (UX/UI), Verified Employer badges, and 1-click AI instant apply.',
          stepBadge: '02 • Vacancy Search & AI Matching',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Career GO AI Resume Builder Laptop.png',
          title: 'Career GO AI Resume Architect & Section Optimizer (MacBook Pro)',
          description:
            'Interactive resume creation studio: Progress completion indicator (50-80%), instant 825Kb document parser, automated category classification, and generative AI experience summary tailoring for Senior Frontend roles.',
          stepBadge: '03 • AI Resume Builder & ATS Scorer',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Career GO AI Recruiter Chats Laptop.png',
          title: 'Career GO Recruiter Chats & AI Negotiation Co-Pilot (MacBook Pro)',
          description:
            'Live recruiter conversation interface featuring multi-company chat threads (BrightTech Solutions, Nova Digital Studio, CloudCore Systems), built-in 5-task 60-minute technical evaluation assessments, and compensation negotiation assistant.',
          stepBadge: '04 • Recruiter AI Chat Co-Pilot',
          isVideo: false,
          isDiagram: false,
        },
      ],
    },
    'under-armour': {
      id: 'under-armour',
      name: 'Under Armour — Next-Gen E-Commerce & High-Performance Retail',
      category: 'E-Commerce Store & Digital Flagship',
      tag: 'Featured E-Commerce',
      badgeColor: 'bg-[#0F1117] text-emerald-400 border border-emerald-500/40',
      rating: '4.9 ★ (Global Retail Innovation)',
      headline: 'High-Performance Athletics: Adaptive Multi-Device Shopping, Instant Cart & Frictionless Checkout',
      description:
        'A state-of-the-art e-commerce ecosystem designed and engineered by Codexa for Under Armour. Features ultra-responsive cross-device experiences from desktop laptops to mobile smartphones and foldable dual-screen devices, dynamic multi-tier sizing matrix (Length & Fit Guide), real-time inventory synchronization, sub-second headless cart, and frictionless 1-click checkout.',
      stats: [
        { label: 'Checkout Speed', value: '< 1.2s Instant' },
        { label: 'Conversion Lift', value: '+38% Uplift' },
        { label: 'Architecture', value: 'Headless Next.js' },
      ],
      engineering: [
        'Headless Shopify Storefront API with Next.js 15 ISR for instantaneous page loads',
        'Foldable dual-pane responsive engine utilizing CSS Screen Fold API & Tailwind',
        'Interactive PDP matrix supporting multiple Length options (Short, Regular, Tall) and 6 size tiers',
        'Stripe / Apple Pay / Google Pay sub-second 1-click cart integration',
      ],
      design: [
        'High-impact athletic editorial typography: "BRING THE STAY UNRIVALED"',
        'Adaptive dual-pane layout for foldable devices pairing campaign hero with catalog grid',
        'Streamlined mobile shopping flow with Back-to-School lookbook and high-action imagery',
      ],
      gallery: [
        {
          src: '/assets/Under Armour Ecommerce Flagship Laptop.png',
          title: 'Under Armour Flagship E-Commerce Storefront (MacBook Pro)',
          description:
            'Desktop flagship digital presence: "BRING THE STAY UNRIVALED", Shop HeatGear call-to-action, high-fashion athletic editorial layout, and seamless navigation across Men, Women, and Shoes.',
          stepBadge: '01 • Desktop Flagship',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Under Armour Mobile App Store.png',
          title: 'Under Armour Mobile Shopping & Back-to-School Campaign (iPhone)',
          description:
            'Ultra-fast mobile commerce experience: "Compete With Yourself", video lookbook autoplay, high-action baseball athlete showcase, and "Outfits For Any Occasion" modular lookbook.',
          stepBadge: '02 • Mobile Shopping Flow',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Under Armour Product Detail PDP.png',
          title: 'Under Armour High-Conversion Product Detail Page (PDP)',
          description:
            'Full PDP matrix for UA Command Warm Up ($75.00, 4.8 ★): Lightweight performance fabric callout, Length selector (Short, Regular, Tall), 6-tier Size matrix (XST to XXLT), Size & Fit Guide, and 1-click Add to Bag.',
          stepBadge: '03 • High-Conversion PDP',
          isVideo: false,
          isDiagram: false,
        },
        {
          src: '/assets/Under Armour Foldable Device Retail.png',
          title: 'Adaptive Dual-Screen Foldable Device Retail Experience',
          description:
            'Next-generation foldable form factor showcase: Dual-pane split viewport pairing hero campaign storytelling on top with live product catalog grid below, enabling simultaneous discovery and checkout.',
          stepBadge: '04 • Foldable Multi-Screen Retail',
          isVideo: false,
          isDiagram: false,
        },
      ],
    },
  };

  const currentProject = projectsData[selectedProjectId] || projectsData.kangaroo;
  const galleryImages = currentProject.gallery;
  const currentItem = galleryImages[activeImageIndex] || galleryImages[0];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Full projects list for portfolio space
  const allMobileProjects = [
    {
      id: 'kangaroo',
      name: 'Kangaroo — Wellbeing & Learning App',
      category: 'iOS & Android App',
      tag: 'Featured Client',
      badgeBg: 'bg-[#5B3DF5] text-white',
      rating: '4.9 ★ (12k+ Reviews)',
      desc: 'A safer, kinder and brighter space to Learn, Connect and Grow. Tailored for students and young innovators.',
      image: '/assets/Kangaroo Learning App Showcase.png',
      active: true,
    },
    {
      id: 'blind-ai',
      name: 'Blind AI — Vision & Navigation Assistant',
      category: 'iOS & Android (AI Vision)',
      tag: 'Assistive Tech & AI',
      badgeBg: 'bg-amber-500 text-white',
      rating: '5.0 ★ (Breakthrough Award)',
      desc: 'See the world with confidence. Real-time obstacle detection, crosswalk safety, and voice guidance powered by Gemini Vision AI.',
      image: '/assets/Blind AI Voice Assistant Mockup.png',
      active: true,
    },
    {
      id: 'spendsense',
      name: 'SpendSense — AI Personal Finance Companion',
      category: 'iOS & Android (Fintech & AI)',
      tag: 'Featured Fintech',
      badgeBg: 'bg-emerald-600 text-white',
      rating: '4.9 ★ (Fintech Innovation Award)',
      desc: 'Turn everyday spending into a brighter future. AI receipt scanning, merchant insights, retirement compound calculators, and gamified financial learning.',
      image: '/assets/SpendSense AI Finance Assistant.png',
      active: true,
    },
    {
      id: 'planitory',
      name: 'Planitory — Maps with Stories, Trips with Meaning',
      category: 'iOS & Android (Travel & Maps)',
      tag: 'Featured Travel Tech',
      badgeBg: 'bg-indigo-600 text-white',
      rating: '4.9 ★ (App of the Day)',
      desc: 'Maps with stories, trips with meaning. Interactive curated travel maps, creator guides, offline GPS navigation, and Stripe creator monetization.',
      image: '/assets/Planitory Travel App Mockup.png',
      active: true,
    },
    {
      id: 'norvique',
      name: 'Norvique — Curated Luxury Real Estate Platform',
      category: 'Website & Digital Experience',
      tag: 'Featured Luxury Website',
      badgeBg: 'bg-stone-900 text-amber-300',
      rating: '5.0 ★ (Awwwards Nominee)',
      desc: 'Discover Latvia’s most exceptional villas. Flagship sunset cover page, 49s video walkthrough, 8-step user journey flow, 3D client reviews, and concierge booking.',
      image: '/assets/Norvique Sunset Villa Hero.png',
      active: true,
    },
    {
      id: 'career-go',
      name: 'Career GO — AI Career & Recruitment Platform',
      category: 'Web App & AI Agent Platform',
      tag: 'Featured AI Platform',
      badgeBg: 'bg-purple-700 text-white',
      rating: '4.9 ★ (AI Product of the Year)',
      desc: 'Autonomous career co-pilot. Semantic job matching, dynamic ATS resume builder, deadline tracking, and recruiter chat assistant.',
      image: '/assets/Career GO AI Dashboard Tablet.png',
      active: true,
    },
    {
      id: 'under-armour',
      name: 'Under Armour — High-Performance E-Commerce',
      category: 'E-Commerce Store & Digital Retail',
      tag: 'Featured E-Commerce',
      badgeBg: 'bg-emerald-600 text-white',
      rating: '4.9 ★ (Global Retail Innovation)',
      desc: 'High-performance athletic e-commerce flagship. Headless Shopify storefront, dual-screen foldable adaptation, high-conversion PDP, and sub-second 1-click checkout.',
      image: '/assets/Under Armour Ecommerce Flagship Laptop.png',
      active: true,
    },
    {
      id: 'health-pulse',
      name: 'HealthPulse Telemedicine & IoT',
      category: 'Healthcare Mobile',
      tag: 'Health & Diagnostics',
      badgeBg: 'bg-blue-600 text-white',
      rating: 'In Clinical Testing',
      desc: 'Real-time patient telemetry, Apple HealthKit / Google Health Connect sync, and secure HD video consultation.',
      image: null,
      active: false,
      status: 'In Development',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#080A24]/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Lightbox Modal (For Fullscreen Image Zoom with Pan/Zoom Controls) */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-60 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4">
          {/* Lightbox Top Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between z-70 text-white">
            <div className="flex items-center gap-3">
              <span className="text-white/80 text-sm font-semibold">
                {activeImageIndex + 1} / {galleryImages.length}
              </span>
              <span className="hidden sm:inline text-white/50">•</span>
              <span className="text-white/90 text-sm font-bold truncate max-w-md">
                {currentItem.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.25))}
                className="p-2 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-white/80 px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                className="p-2 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-2 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 text-white bg-white/15 hover:bg-white/25 rounded-full transition-colors cursor-pointer ml-2"
                title="Close Lightbox (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Zoomable Image Container */}
          <div className="w-full flex-1 flex items-center justify-center overflow-auto p-4 cursor-grab">
            <div
              className="transition-transform duration-200 flex items-center justify-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {currentItem.isVideo ? (
                <video
                  src={currentItem.src}
                  poster={currentItem.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-w-[92vw] max-h-[82vh] object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className={`max-w-[92vw] max-h-[82vh] object-contain rounded-xl shadow-2xl ${
                    currentItem.isDiagram ? 'bg-white p-3' : 'bg-transparent'
                  }`}
                />
              )}
            </div>
          </div>

          {/* Lightbox Footer Caption */}
          <div className="w-full max-w-4xl text-center py-2 text-white/80 text-xs">
            {currentItem.description}
          </div>
        </div>
      )}

      {/* Main Container Window */}
      <div className="relative w-full max-w-5xl bg-[#FAFBFD] rounded-3xl sm:rounded-[36px] border border-white/80 shadow-[0_25px_80px_rgba(91,61,245,0.25)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar with Project Selection Tabs */}
        <div className="px-5 sm:px-7 py-3.5 bg-white/90 backdrop-blur-md border-b border-purple-100 flex items-center justify-between shrink-0 gap-3">
          
          {/* Left section: Breadcrumb / Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <button
              onClick={() => setView('list')}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold p-2 rounded-xl transition-all cursor-pointer shrink-0 ${
                view === 'list'
                  ? 'bg-[#080A24] text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>All Projects ({allMobileProjects.length})</span>
            </button>

            <span className="text-gray-300">|</span>

            {/* Kangaroo Quick Tab */}
            <button
              onClick={() => {
                setSelectedProjectId('kangaroo');
                setView('project');
              }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
                view === 'project' && selectedProjectId === 'kangaroo'
                  ? 'bg-[#5B3DF5] text-white shadow-xs'
                  : 'text-gray-600 hover:text-[#5B3DF5] hover:bg-purple-50'
              }`}
            >
              <span>Kangaroo App</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">4.9 ★</span>
            </button>

            {/* Blind AI Quick Tab */}
            <button
              onClick={() => {
                setSelectedProjectId('blind-ai');
                setView('project');
              }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
                view === 'project' && selectedProjectId === 'blind-ai'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Blind AI</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">Gemini AI</span>
            </button>

            {/* SpendSense Quick Tab */}
            <button
              onClick={() => {
                setSelectedProjectId('spendsense');
                setView('project');
              }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
                view === 'project' && selectedProjectId === 'spendsense'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>SpendSense</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">Fintech AI</span>
            </button>

            {/* Planitory Quick Tab */}
            <button
              onClick={() => {
                setSelectedProjectId('planitory');
                setView('project');
              }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
                view === 'project' && selectedProjectId === 'planitory'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Planitory</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">Travel App</span>
            </button>

            {/* Norvique Quick Tab */}
            <button
              onClick={() => {
                setSelectedProjectId('norvique');
                setView('project');
              }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
                view === 'project' && selectedProjectId === 'norvique'
                  ? 'bg-stone-900 text-amber-300 ring-1 ring-amber-400/40 shadow-xs'
                  : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-amber-500" />
              <span>Norvique</span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded-full">Luxury Website</span>
            </button>

            {/* Career GO Quick Tab */}
            <button
              onClick={() => {
                setSelectedProjectId('career-go');
                setView('project');
              }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
                view === 'project' && selectedProjectId === 'career-go'
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-purple-300" />
              <span>Career GO</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">AI Assistant</span>
            </button>

            {/* Under Armour Quick Tab */}
            <button
              onClick={() => {
                setSelectedProjectId('under-armour');
                setView('project');
              }}
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl transition-all cursor-pointer shrink-0 ${
                view === 'project' && selectedProjectId === 'under-armour'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-300" />
              <span>Under Armour</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">E-Commerce</span>
            </button>
          </div>

          {/* Right section: Close button */}
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-8 flex-1">
          
          {/* ==============================================================
              VIEW 1: ACTIVE PROJECT CASE STUDY & SCROLLING GALLERY
             ============================================================== */}
          {view === 'project' && (
            <div className="space-y-8">
              
              {/* Hero Banner Header */}
              <div className={`p-6 sm:p-8 rounded-3xl border shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                selectedProjectId === 'norvique'
                  ? 'bg-gradient-to-br from-stone-900 via-[#161722] to-stone-950 border-stone-800'
                  : selectedProjectId === 'planitory'
                  ? 'bg-gradient-to-br from-indigo-50 via-white to-sky-50/50 border-indigo-200/70'
                  : selectedProjectId === 'spendsense'
                  ? 'bg-gradient-to-br from-emerald-50 via-white to-teal-50/50 border-emerald-200/70'
                  : selectedProjectId === 'blind-ai'
                  ? 'bg-gradient-to-br from-amber-50 via-white to-orange-50/50 border-amber-200/70'
                  : 'bg-gradient-to-br from-purple-50 via-white to-blue-50/40 border-purple-100/80'
              }`}>
                <div className="space-y-2.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${currentProject.badgeColor}`}>
                      {currentProject.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-200 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {currentProject.rating}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-700 border border-gray-200">
                      {selectedProjectId === 'norvique' ? 'Production Web Platform' : 'Production Mobile Architecture'}
                    </span>
                  </div>

                  <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] ${
                    selectedProjectId === 'norvique' ? 'text-white' : 'text-[#080A24]'
                  }`}>
                    {currentProject.name}
                  </h2>

                  <p className={`text-sm sm:text-base leading-relaxed ${
                    selectedProjectId === 'norvique' ? 'text-stone-300' : 'text-[#4B5563]'
                  }`}>
                    {currentProject.description}
                  </p>
                </div>

                {/* QR Code for Blind AI if available */}
                {currentProject.qrCode && (
                  <div className="flex shrink-0 w-full md:w-auto">
                    <div className="p-2.5 bg-white rounded-2xl border border-amber-200 flex items-center gap-2.5 shadow-2xs">
                      <img
                        src={currentProject.qrCode}
                        alt="Blind AI QR Code"
                        className="w-12 h-12 object-contain rounded-lg"
                      />
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-[#080A24]">Scan to Test</p>
                        <p className="text-[10px] text-gray-500">iOS & Android App</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ==============================================================
                  THE SCROLLING IMAGE SHOWCASE (STRICTLY IN USER-SPECIFIED ORDER)
                 ============================================================== */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#080A24] font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                      <span>Project Showcase Gallery</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                        selectedProjectId === 'norvique'
                          ? 'text-amber-800 bg-amber-50 border-amber-300'
                          : selectedProjectId === 'planitory'
                          ? 'text-indigo-700 bg-indigo-50 border-indigo-200'
                          : selectedProjectId === 'spendsense'
                          ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                          : selectedProjectId === 'blind-ai'
                          ? 'text-amber-700 bg-amber-50 border-amber-200'
                          : 'text-[#5B3DF5] bg-purple-50 border-purple-200'
                      }`}>
                        {activeImageIndex + 1} of {galleryImages.length}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Scroll through the workflow, UI mockups, and crystal-clear architecture assets.
                    </p>
                  </div>

                  {/* Nav buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevImage}
                      className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:border-purple-300 hover:text-[#5B3DF5] flex items-center justify-center text-gray-700 shadow-2xs transition-all active:scale-95 cursor-pointer"
                      title="Previous (Left arrow)"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:border-purple-300 hover:text-[#5B3DF5] flex items-center justify-center text-gray-700 shadow-2xs transition-all active:scale-95 cursor-pointer"
                      title="Next (Right arrow)"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Primary Interactive Viewer Canvas */}
                <div className={`relative group rounded-3xl overflow-hidden border border-gray-200 shadow-lg flex items-center justify-center min-h-[380px] sm:min-h-[480px] max-h-[580px] ${
                  currentItem.isDiagram ? 'bg-white' : 'bg-[#080A24]'
                }`}>
                  
                  {/* Step Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#080A24]/85 text-white backdrop-blur-md border border-white/20 shadow-md">
                      {currentItem.stepBadge}
                    </span>
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#080A24]/85 text-white/90 hover:text-white backdrop-blur-md border border-white/20 shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                    title="Open Fullscreen Lightbox & Zoom"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Zoom HD</span>
                  </button>

                  {/* Active Image or Video */}
                  {currentItem.isVideo ? (
                    <div className="w-full h-full max-h-[560px] flex items-center justify-center p-2 sm:p-4">
                      <video
                        src={currentItem.src}
                        poster={currentItem.poster}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full max-h-[520px] object-contain rounded-xl shadow-lg"
                      />
                    </div>
                  ) : (
                    <img
                      src={currentItem.src}
                      alt={currentItem.title}
                      className={`w-full h-full max-h-[560px] object-contain p-2 sm:p-4 select-none cursor-pointer transition-transform duration-300 hover:scale-[1.01] ${
                        currentItem.isDiagram ? 'filter contrast-[1.02]' : ''
                      }`}
                      onClick={() => setLightboxOpen(true)}
                    />
                  )}

                  {/* Floating Left/Right Arrows on image */}
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer z-20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer z-20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Bottom description bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 text-white z-10">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {currentItem.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-3xl leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>
                </div>

                {/* Clickable Thumbnails to Jump Directly */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 pt-1">
                  {galleryImages.map((img, idx) => {
                    const isSelected = activeImageIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`group p-2 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? selectedProjectId === 'norvique'
                              ? 'bg-amber-50/80 border-amber-600 ring-2 ring-amber-600/30 shadow-sm'
                              : selectedProjectId === 'planitory'
                              ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-600/30 shadow-sm'
                              : selectedProjectId === 'spendsense'
                              ? 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/30 shadow-sm'
                              : selectedProjectId === 'blind-ai'
                              ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-500/30 shadow-sm'
                              : 'bg-purple-50/80 border-[#5B3DF5] ring-2 ring-[#5B3DF5]/30 shadow-sm'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-full h-16 sm:h-20 rounded-xl overflow-hidden mb-2 relative flex items-center justify-center ${
                          img.isDiagram ? 'bg-white border border-gray-200' : 'bg-gray-950'
                        }`}>
                          <img
                            src={img.poster || img.src}
                            alt={img.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {img.isVideo && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <div className="w-5 h-5 rounded-full bg-white/90 text-black flex items-center justify-center shadow-md">
                                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                              </div>
                            </div>
                          )}
                          <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-bold text-white">
                            0{idx + 1}
                          </span>
                        </div>
                        <p className={`text-[11px] font-bold truncate ${
                          isSelected
                            ? selectedProjectId === 'norvique'
                              ? 'text-amber-800'
                              : selectedProjectId === 'planitory'
                              ? 'text-indigo-700'
                              : selectedProjectId === 'spendsense'
                              ? 'text-emerald-700'
                              : selectedProjectId === 'blind-ai'
                              ? 'text-amber-700'
                              : 'text-[#5B3DF5]'
                            : 'text-gray-800'
                        }`}>
                          {img.title}
                        </p>
                        <p className="text-[10px] text-gray-500 truncate mt-0.5">
                          {img.stepBadge}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Continuous Horizontal Scroll Strip */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-[#080A24] font-['Plus_Jakarta_Sans'] flex items-center gap-2">
                    <span>Continuous Gallery Filmstrip</span>
                    <span className="text-[11px] font-normal text-gray-400">
                      (Swipe or scroll horizontally through all gallery views)
                    </span>
                  </h4>
                </div>

                <div className="flex items-center gap-4 overflow-x-auto pb-4 pt-1 snap-x">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActiveImageIndex(idx);
                        setLightboxOpen(true);
                      }}
                      className="shrink-0 w-[280px] sm:w-[340px] bg-white rounded-2xl p-3 border border-gray-200 shadow-xs hover:shadow-md transition-all cursor-pointer group snap-center"
                    >
                      <div className={`w-full h-40 rounded-xl overflow-hidden relative mb-2.5 flex items-center justify-center ${
                        img.isDiagram ? 'bg-white border border-gray-100' : 'bg-[#080A24]'
                      }`}>
                        <img
                          src={img.poster || img.src}
                          alt={img.title}
                          className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                        />
                        {img.isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Play className="w-5 h-5 fill-current ml-0.5" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                          <Maximize2 className="w-4 h-4" /> Click to expand HD
                        </div>
                      </div>
                      <p className="text-xs font-bold text-[#080A24] truncate">{img.title}</p>
                      <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">{img.stepBadge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications and Codexa Work */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="p-4 bg-white rounded-2xl border border-gray-200">
                  <h5 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                    selectedProjectId === 'norvique'
                      ? 'text-amber-700'
                      : selectedProjectId === 'planitory'
                      ? 'text-indigo-600'
                      : selectedProjectId === 'spendsense'
                      ? 'text-emerald-600'
                      : selectedProjectId === 'blind-ai'
                      ? 'text-amber-600'
                      : 'text-[#5B3DF5]'
                  }`}>
                    <Layers className="w-3.5 h-3.5" />
                    Engineering
                  </h5>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    {currentProject.engineering.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-200">
                  <h5 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                    selectedProjectId === 'norvique'
                      ? 'text-amber-700'
                      : selectedProjectId === 'planitory'
                      ? 'text-indigo-600'
                      : selectedProjectId === 'spendsense'
                      ? 'text-emerald-600'
                      : selectedProjectId === 'blind-ai'
                      ? 'text-amber-600'
                      : 'text-[#5B3DF5]'
                  }`}>
                    <GitBranch className="w-3.5 h-3.5" />
                    Architecture & Design
                  </h5>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    {currentProject.design.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-200 flex flex-col justify-between">
                  <div>
                    <h5 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${
                      selectedProjectId === 'norvique'
                        ? 'text-amber-700'
                        : selectedProjectId === 'planitory'
                        ? 'text-indigo-600'
                        : selectedProjectId === 'spendsense'
                        ? 'text-emerald-600'
                        : selectedProjectId === 'blind-ai'
                        ? 'text-amber-600'
                        : 'text-[#5B3DF5]'
                    }`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      {selectedProjectId === 'norvique' ? 'Build Your Website' : 'Build Your Mobile App'}
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {selectedProjectId === 'norvique'
                        ? 'Codexa designs and engineers ultra-premium, high-converting websites and digital experiences.'
                        : 'Codexa builds high-performance iOS and Android apps powered by modern AI.'}
                    </p>
                  </div>
                  <a
                    href="mailto:ranjeetserious8@gmail.com"
                    onClick={onClose}
                    className={`mt-3 inline-flex items-center justify-center gap-1.5 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-all cursor-pointer ${
                      selectedProjectId === 'norvique'
                        ? 'bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-400/40 shadow-sm'
                        : selectedProjectId === 'planitory'
                        ? 'bg-indigo-600 hover:bg-indigo-700'
                        : selectedProjectId === 'spendsense'
                        ? 'bg-emerald-600 hover:bg-emerald-700'
                        : selectedProjectId === 'blind-ai'
                        ? 'bg-amber-500 hover:bg-amber-600'
                        : 'bg-[#5B3DF5] hover:bg-[#4D30E2]'
                    }`}
                  >
                    <span>{selectedProjectId === 'norvique' ? 'Start Your Website' : 'Start Your App'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          )}

          {/* ==============================================================
              VIEW 2: MULTI-PROJECT PORTFOLIO SPACE
              (Lists Kangaroo, Blind AI, and upcoming projects)
             ============================================================== */}
          {view === 'list' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
                  Mobile Application Projects
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Explore our mobile engineering work. Click any project to view its case study, interactive gallery, and visual breakdown.
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {allMobileProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      if (proj.active) {
                        setSelectedProjectId(proj.id);
                        setView('project');
                      }
                    }}
                    className={`rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                      proj.active
                        ? 'bg-white border-purple-200 hover:border-[#5B3DF5] shadow-[0_8px_25px_rgba(91,61,245,0.08)] cursor-pointer hover:-translate-y-0.5'
                        : 'bg-[#F9FAFC] border-dashed border-gray-300 opacity-80 cursor-default'
                    }`}
                  >
                    <div>
                      {/* Thumbnail or Placeholder */}
                      <div className="w-full h-44 bg-[#080A24] rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center">
                        {proj.image ? (
                          <img
                            src={proj.image}
                            alt={proj.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center p-4">
                            <Smartphone className="w-8 h-8 text-gray-500 mx-auto mb-2 opacity-60" />
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                              {proj.status}
                            </span>
                          </div>
                        )}

                        <div className="absolute top-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold shadow-xs ${proj.badgeBg}`}>
                            {proj.tag}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-[#5B3DF5]">{proj.category}</span>
                        <span className="text-xs font-bold text-amber-600">{proj.rating}</span>
                      </div>

                      <h4 className="text-lg font-bold text-[#080A24] font-['Plus_Jakarta_Sans']">
                        {proj.name}
                      </h4>

                      <p className="text-xs text-gray-600 leading-relaxed mt-2">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                      {proj.active ? (
                        <button className="text-xs font-bold text-[#5B3DF5] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                          <span>Explore Full Case Study & Gallery</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <span className="text-xs font-medium text-gray-400 italic">
                          Case study in preparation
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
