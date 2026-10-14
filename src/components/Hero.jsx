import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const handleOpenContact = (e) => {
    if (e) e.preventDefault();
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.dispatchEvent(new CustomEvent('open-contact-modal'));
    }
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 md:pt-40 pb-20 md:pb-24 overflow-hidden bg-white">
      {/* ==============================================================
          1. AMBIENT BACKGROUND ACCENTS & GRID
         ============================================================== */}
      
      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(91, 61, 245, 0.045) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(91, 61, 245, 0.045) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top-Right Soft Lavender Ambient Gradient Blob */}
      <div className="absolute top-0 right-0 w-[550px] sm:w-[700px] h-[450px] sm:h-[600px] bg-gradient-to-bl from-[#DDD6FE]/40 via-[#EDE9FE]/25 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Center Soft Purple Blob (behind team) */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] h-[550px] sm:h-[700px] bg-gradient-to-b from-[#EDE9FE]/55 via-[#DDD6FE]/30 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Bottom-Left Ambient Glow */}
      <div className="absolute bottom-16 left-0 w-[380px] sm:w-[500px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#EDE9FE]/40 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* ==============================================================
            2. TOP BADGE GRAPHIC: Growing Startups with Technology
               (Replaces the old text pill badge)
           ============================================================== */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src="/assets/Growing Startups with Technology (1).png"
            alt="Growing Startups with Technology"
            className="h-14 sm:h-18 md:h-20 w-auto object-contain select-none drop-shadow-md hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* ==============================================================
            3. 3 PERSONS TEAM SHOWCASE (ABOVE THE IMPACT LINE & CONTACT ME)
               - Crisp and clear cutout, NO snow effect / NO bottom gradient mask
               - Organic lavender fluid shape
               - Blue doodle accents & floating code badge
           ============================================================== */}
        <div className="relative w-full max-w-[620px] sm:max-w-[680px] mx-auto mb-8 sm:mb-10 pt-2">
          
          {/* Organic Fluid Lavender Blob Behind the Team */}
          <div
            className="absolute inset-0 w-full h-[90%] top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#EDE9FE] via-[#DDD6FE]/70 to-[#E0E7FF]/80 rounded-[48px] sm:rounded-[64px] shadow-[0_20px_50px_rgba(91,61,245,0.08)] pointer-events-none -z-0"
            style={{
              borderRadius: '42% 58% 54% 46% / 45% 42% 58% 55%',
            }}
          />

          {/* Soft Ambient Radial Behind Blob */}
          <div className="absolute inset-0 w-[110%] h-[95%] -translate-x-[5%] top-1/2 -translate-y-1/2 bg-purple-300/30 blur-3xl rounded-full pointer-events-none -z-10" />

          {/* ------------------------------------------------------------
              DOODLE ACCENTS (Playful Hand-drawn Blue Accents)
             ------------------------------------------------------------ */}
          
          {/* Left Blue Curved Arrow Doodle */}
          <div className="absolute top-16 -left-3 sm:top-24 sm:-left-6 lg:-left-8 z-20 pointer-events-none">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-[#2563EB]"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 12 C 16 6, 32 14, 26 30 C 24 33, 20 36, 26 38" />
              <path d="M18 36 L26 38 L25 30" />
            </svg>
          </div>

          {/* Top Blue Slanted Tick Marks Doodle */}
          <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#2563EB]"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <line x1="8" y1="22" x2="13" y2="6" />
              <line x1="20" y1="24" x2="23" y2="8" />
            </svg>
          </div>

          {/* Right Blue Curved Arrow Doodle */}
          <div className="absolute top-24 -right-2 sm:top-32 sm:-right-6 lg:-right-8 z-20 pointer-events-none">
            <svg
              className="w-8 h-10 sm:w-10 sm:h-12 text-[#2563EB]"
              viewBox="0 0 40 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 6 C 24 14, 24 26, 16 36" />
              <path d="M8 30 L16 36 L21 28" />
            </svg>
          </div>

          {/* Bottom-Right Floating Code Badge: </> */}
          <div className="absolute bottom-8 -right-2 sm:bottom-12 sm:-right-4 lg:-right-6 z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_28px_rgba(91,61,245,0.16)] border border-purple-100 text-[#5B3DF5] transform rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer animate-pulse-glow">
              <Code2 className="w-6 h-6 stroke-[2.75]" />
            </div>
          </div>

          {/* ------------------------------------------------------------
              THE 3 PERSONS CUTOUT (100% CLEAR - NO SNOW EFFECT / NO MASK)
             ------------------------------------------------------------ */}
          <div className="relative w-full z-10">
            <img
              src="/assets/3personsimage.png"
              alt="Codexa Founders & Engineering Team"
              className="w-full h-auto object-contain relative select-none drop-shadow-xl"
            />
          </div>

        </div>

        {/* ==============================================================
            4. IMPACT SUBTITLE (BELOW THE 3 PERSONS IMAGE)
           ============================================================== */}
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="text-lg sm:text-xl md:text-[22px] font-bold text-[#080A24] leading-snug tracking-tight font-['Plus_Jakarta_Sans']">
            Websites, Web Apps, Mobile Apps, SaaS and AI Agents <br className="hidden sm:inline" />
            <span className="text-[#3D52F5]">built for real impact.</span>
          </p>

          {/* ==============================================================
              5. ACTION BUTTONS (BELOW 3 PERSONS & SUBTITLE)
             ============================================================== */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            {/* Primary Contact Button */}
            <button
              onClick={handleOpenContact}
              className="inline-flex items-center justify-center gap-2.5 bg-[#5B3DF5] hover:bg-[#4E32E5] text-white text-[15px] font-bold px-8 py-3.5 sm:py-4 rounded-full shadow-[0_10px_25px_rgba(91,61,245,0.35)] hover:shadow-[0_14px_30px_rgba(91,61,245,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary Portfolio Button */}
            <a
              href="#work"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#080A24] text-[15px] font-bold px-8 py-3.5 sm:py-4 rounded-full border border-gray-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-purple-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>View Our Work</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
