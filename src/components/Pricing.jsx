import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      id: 'personal',
      name: 'Personal & Business',
      nameSub: 'Landing Pages',
      subtitle: 'For individuals, creators and small businesses.',
      price: '₹8,000',
      icon: '/assets/Glossy_Blue_Globe_Icon_transparent.png',
      graphic: '/assets/3D_Pastel_Web_Dashboard_UI_transparent.png',
      cardBg: 'bg-white border-gray-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]',
      textColor: 'text-[#080A24]',
      subTextColor: 'text-gray-500',
      checkBg: 'bg-[#3B82F6] text-white',
      itemTextColor: 'text-gray-700',
      ctaText: 'Get Started',
      ctaStyle: 'bg-white hover:bg-gray-50 text-[#080A24] border border-gray-200/90 shadow-2xs hover:border-purple-300 hover:shadow-md',
      subject: 'Inquiry for Personal & Business Landing Pages (₹8,000 Plan)',
      features: [
        'Up to 5 pages',
        'Custom responsive design',
        'Mobile & desktop optimized',
        'Domain included',
        'Hosting included',
        'Contact form',
        'Basic SEO',
        'SSL & security setup',
        'Deployment',
        'Basic maintenance setup',
      ],
    },
    {
      id: 'business',
      isPopular: true,
      name: 'Small Business',
      nameSub: 'Website',
      subtitle: 'A complete professional website for growing businesses.',
      price: '₹40,000',
      icon: '/assets/Glossy_Purple_Office_Icon_transparent.png',
      graphic: '/assets/Glossy_3D_Analytics_Dashboard_transparent.png',
      crownBadge: '/assets/Glossy Most Popular Crown Badge.png',
      cardBg: 'bg-gradient-to-b from-[#4A32D6] via-[#3B26BC] to-[#241785] border-purple-400/40 shadow-[0_25px_70px_rgba(61,41,202,0.35)] text-white ring-1 ring-purple-300/30 transform lg:-translate-y-2',
      textColor: 'text-white',
      subTextColor: 'text-purple-200',
      checkBg: 'bg-purple-300/30 text-white border border-purple-200/40',
      itemTextColor: 'text-purple-100',
      ctaText: 'Get Started',
      ctaStyle: 'bg-white/15 hover:bg-white/25 text-white border border-white/40 shadow-lg backdrop-blur-md hover:shadow-xl',
      subject: 'Inquiry for Small Business Website (₹40,000 Plan)',
      features: [
        'Up to 10 pages',
        'Custom UI/UX design',
        'Responsive design',
        'Business sections (About, Services, etc.)',
        'Contact / lead forms',
        'WhatsApp integration',
        'Google Maps integration',
        'Basic SEO setup',
        'Analytics integration',
        'Domain + hosting setup',
        'Deployment',
        'Performance optimization',
      ],
    },
    {
      id: 'ecommerce',
      name: 'E-commerce +',
      nameSub: 'AI Agent',
      subtitle: 'A powerful online store with AI-powered customer experience.',
      price: '₹70,000',
      icon: '/assets/Glossy_Shopping_Cart_Icon_transparent.png',
      graphic: '/assets/Glossy_AI_Ecommerce_Sneaker_transparent.png',
      cardBg: 'bg-white border-gray-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(255,101,67,0.08)]',
      textColor: 'text-[#080A24]',
      subTextColor: 'text-gray-500',
      checkBg: 'bg-[#FF6543]/15 text-[#FF6543]',
      itemTextColor: 'text-gray-700',
      ctaText: 'Get Started',
      ctaStyle: 'bg-gradient-to-r from-[#FF6543] to-[#FF8755] hover:from-[#F05532] hover:to-[#F27845] text-white shadow-[0_8px_25px_rgba(255,101,67,0.35)] hover:shadow-[0_12px_30px_rgba(255,101,67,0.45)]',
      subject: 'Inquiry for E-commerce + AI Agent (₹70,000 Plan)',
      features: [
        'Custom e-commerce UI/UX',
        'Product catalog',
        'Product search & filtering',
        'Cart & checkout',
        'Payment gateway integration',
        'Order management',
        'Customer accounts',
        'Admin dashboard',
        'WhatsApp integration',
        'AI shopping / customer-support agent',
        'Analytics',
        'SEO',
        'Domain + hosting setup',
        'Deployment',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFBFD] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-purple-200/30 via-blue-100/20 to-pink-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EDE9FE] text-[#5B3DF5] text-xs font-semibold mb-4">
            <span>Simple & Transparent Pricing</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
            Choose the <span className="hero-gradient-text">Perfect Plan</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#64748B] mt-3 max-w-2xl mx-auto leading-relaxed">
            High-quality websites for individuals, businesses and online stores. <br className="hidden sm:inline" />
            Build your digital presence with Codexa.
          </p>

          {/* Left Decorative Handwritten Annotation */}
          <div className="hidden lg:flex flex-col items-center absolute -left-20 top-2 text-[#5B3DF5] select-none rotate-[-6deg]">
            <span className="font-['Caveat',cursive,sans-serif] text-base font-bold tracking-wide">
              Affordable <br /> for everyone
            </span>
            <svg className="w-8 h-8 -rotate-12 mt-1 text-[#5B3DF5]" viewBox="0 0 40 40" fill="none">
              <path d="M10 8 Q 20 20, 24 32 M 16 30 L 24 32 L 26 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Right Decorative Handwritten Annotation */}
          <div className="hidden lg:flex flex-col items-center absolute -right-20 top-2 text-[#5B3DF5] select-none rotate-[6deg]">
            <span className="font-['Caveat',cursive,sans-serif] text-base font-bold tracking-wide">
              Powered by <br /> AI for your <br /> growth
            </span>
            <svg className="w-8 h-8 rotate-12 mt-1 text-[#5B3DF5]" viewBox="0 0 40 40" fill="none">
              <path d="M30 8 Q 20 20, 16 32 M 24 30 L 16 32 L 14 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[32px] sm:rounded-[36px] p-7 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${plan.cardBg}`}
            >
              {/* Most Popular Floating Crown Badge for Center Plan */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 right-6 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-white text-[11px] font-extrabold shadow-md border border-white/30">
                    <span>👑</span>
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div>
                {/* Header: Icon, Plan Title & Subtitle */}
                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center filter drop-shadow-md">
                    <img
                      src={plan.icon}
                      alt={plan.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-[19px] font-bold leading-tight font-['Plus_Jakarta_Sans'] ${plan.textColor}`}>
                      {plan.name} <br />
                      <span className="text-base sm:text-lg">{plan.nameSub}</span>
                    </h3>
                    <p className={`text-[11px] sm:text-xs mt-1 leading-snug ${plan.subTextColor}`}>
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                {/* Price & 3D Illustration Graphic Row */}
                <div className="flex items-center justify-between gap-3 my-6 pb-6 border-b border-black/5 dark:border-white/10">
                  <div>
                    <span className={`text-4xl sm:text-[42px] font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] ${plan.textColor}`}>
                      {plan.price}
                    </span>
                  </div>

                  {/* 3D Illustration Graphic Asset */}
                  <div className="w-28 h-20 sm:w-32 sm:h-24 shrink-0 flex items-center justify-end relative">
                    <img
                      src={plan.graphic}
                      alt={`${plan.name} Illustration`}
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
                    />
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-tight">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.checkBg}`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className={`font-medium ${plan.itemTextColor}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href={`mailto:ranjeetserious8@gmail.com?subject=${encodeURIComponent(plan.subject)}`}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${plan.ctaStyle}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
