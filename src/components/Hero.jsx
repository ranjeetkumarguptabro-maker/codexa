import React from 'react';
import FloatingBadge from './FloatingBadge.jsx';
import CTAButtons from './CTAButtons.jsx';
import DashboardPreview from './DashboardPreview.jsx';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* 1. HERO BACKGROUND: The exact cloud/gradient asset */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <img
          src="/assets/8eafffd2-fcc0-4abc-b10c-e3f209556443.png"
          alt="Cloud and Gradient Background"
          className="w-full h-full object-cover object-top opacity-95 scale-105"
        />
        {/* Soft radial white glow in center behind headline */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-white/70 blur-3xl rounded-full -z-5" />
        {/* Subtle bottom fade into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#FFFFFF]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* FLOATING BADGES (Desktop) */}
        {/* LEFT CARD: AI Agents / Automate & Scale */}
        <div className="hidden lg:block absolute left-0 xl:-left-6 top-16 z-20">
          <FloatingBadge
            iconSrc="/assets/Glossy Purple Robot App Icon.png"
            title="AI Agents"
            subtitle="Automate & Scale"
            animationClass="animate-float-slow"
          />
        </div>

        {/* RIGHT CARD: Grow Faster / With Technology */}
        <div className="hidden lg:block absolute right-0 xl:-right-6 top-28 z-20">
          <FloatingBadge
            iconSrc="/assets/Glossy Purple Growth Chart Icon.png"
            title="Grow Faster"
            subtitle="With Technology"
            animationClass="animate-float-reverse"
          />
        </div>

        {/* HERO CENTER CONTENT */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[62px] font-extrabold tracking-[-0.03em] leading-[1.12] font-['Plus_Jakarta_Sans']">
            <span className="text-[#080A24] block">
              We Build Digital Products
            </span>
            <span className="hero-gradient-text block mt-1">
              That Grow Businesses
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-[19px] text-[#4B5563] font-normal max-w-2xl mx-auto leading-relaxed">
            Websites, Web Apps, Mobile Apps, SaaS and AI Agents <br className="hidden sm:inline" />
            built for real impact.
          </p>

          {/* Mobile floating badges displayed inline */}
          <div className="flex lg:hidden items-center justify-center gap-3 pt-2">
            <FloatingBadge
              iconSrc="/assets/Glossy Purple Robot App Icon.png"
              title="AI Agents"
              subtitle="Automate & Scale"
              animationClass=""
              className="px-3 py-2 text-xs"
            />
            <FloatingBadge
              iconSrc="/assets/Glossy Purple Growth Chart Icon.png"
              title="Grow Faster"
              subtitle="With Technology"
              animationClass=""
              className="px-3 py-2 text-xs"
            />
          </div>

          {/* CTA Buttons */}
          <CTAButtons />
        </div>

        {/* DASHBOARD PREVIEW SHOWCASE */}
        <div className="mt-16 md:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
