import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  // Normalized mouse position (-0.5 to 0.5) for parallax calculations
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Screen pixel coordinates for the interactive cursor spotlight
  const [spotlightPos, setSpotlightPos] = useState({ x: 500, y: 300, active: false });

  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5; // -0.5 to 0.5
      const y = (e.clientY / window.innerHeight) - 0.5; // -0.5 to 0.5
      setMousePos({ x, y });
      setSpotlightPos({ x: e.clientX, y: e.clientY, active: true });
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, []);

  const handleOpenContact = (e) => {
    if (e) e.preventDefault();
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.dispatchEvent(new CustomEvent('open-contact-modal'));
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#FAFBFD] select-none"
    >
      {/* ==============================================================
          1. EXACT MINIMALIST GRAPH PAPER GRID BACKGROUND
             - Matching: Minimalist Off-White Graph Paper Grid.png
             - Fully crisp, sharp, visible 100% across the whole screen
             - Moves dynamically in real-time as cursor moves across page
         ============================================================== */}
      
      {/* The Graph Paper Grid (Oversized with -inset-24 so it glides smoothly without edges) */}
      <div
        className="absolute -inset-24 pointer-events-none -z-20 will-change-transform"
        style={{
          backgroundImage: 'url("/assets/minimalist-graph-paper-grid.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '1732px 908px',
          transform: `translate3d(${mousePos.x * 65}px, ${mousePos.y * 65}px, 0)`,
          transition: 'transform 0.12s cubic-bezier(0.2, 0, 0.2, 1)',
          opacity: 1,
        }}
      />

      {/* Interactive Cursor Spotlight / Illumination Glow on the Grid */}
      <div
        className="absolute -inset-24 pointer-events-none -z-15 transition-opacity duration-300"
        style={{
          background: spotlightPos.active
            ? `radial-gradient(650px circle at ${spotlightPos.x + 96}px ${spotlightPos.y + 96}px, rgba(91, 61, 245, 0.075), transparent 75%)`
            : 'radial-gradient(650px circle at 50% 40%, rgba(91, 61, 245, 0.04), transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        
        {/* ==============================================================
            2. TOP BADGE: Growing Startups with Technology
               - Pure CSS / Tailwind (no image boundaries)
               - Floats subtly with cursor movement
           ============================================================== */}
        <div
          className="inline-flex flex-col items-center select-none mb-6 sm:mb-8 transition-transform duration-200 ease-out hover:scale-105 cursor-default"
          style={{
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * -8}px, 0)`,
          }}
        >
          {/* Top Line: Growing Startups (Bordered Box) */}
          <div className="relative z-10 transform -rotate-[1deg] sm:-rotate-[1.5deg] bg-white border-2 sm:border-[2.5px] border-[#5B3DF5] px-4 sm:px-6 py-1 sm:py-1.5 shadow-xs">
            <span className="text-lg sm:text-2xl md:text-[26px] font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
              Growing Startups
            </span>
          </div>

          {/* Bottom Line: with Technology (Filled Purple Box) */}
          <div className="relative -mt-2 sm:-mt-2.5 z-0 transform -rotate-[2deg] sm:-rotate-[2.5deg] bg-[#5B3DF5] px-6 sm:px-8 py-1.5 sm:py-2 shadow-[0_8px_25px_rgba(91,61,245,0.35)]">
            <span className="text-xl sm:text-3xl md:text-[32px] font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
              with Technology
            </span>
          </div>
        </div>

        {/* ==============================================================
            3. 3 PERSONS TEAM SHOWCASE (INTERACTIVE CURSOR 3D PARALLAX)
               - Matching Codexa Technology Hero Grid Landing Page.png
               - Crisp cutout with NO snow effect / NO gradient mask
               - Organic lavender fluid shape behind team
               - Blue doodle accents & floating code badge
           ============================================================== */}
        <div
          className="relative w-full max-w-[620px] sm:max-w-[680px] mx-auto mb-8 sm:mb-10 pt-2 transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg) translate3d(${mousePos.x * 15}px, ${mousePos.y * 12}px, 0)`,
            transformStyle: 'preserve-3d',
          }}
        >
          
          {/* Organic Fluid Lavender Blob Behind the Team */}
          <div
            className="absolute inset-0 w-full h-[90%] top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#EDE9FE] via-[#DDD6FE]/75 to-[#E0E7FF]/80 rounded-[48px] sm:rounded-[64px] shadow-[0_20px_50px_rgba(91,61,245,0.08)] pointer-events-none -z-0 transition-transform duration-200 ease-out"
            style={{
              borderRadius: '42% 58% 54% 46% / 45% 42% 58% 55%',
              transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, -20px)`,
            }}
          />

          {/* ------------------------------------------------------------
              DOODLE ACCENTS (Interactive Multi-Layer Parallax)
             ------------------------------------------------------------ */}
          
          {/* Left Blue Curved Arrow Doodle */}
          <div
            className="absolute top-16 -left-3 sm:top-24 sm:-left-6 lg:-left-8 z-20 pointer-events-none transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * -24}px, ${mousePos.y * -20}px, 30px)`,
            }}
          >
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
          <div
            className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(calc(-50% + ${mousePos.x * 18}px), ${mousePos.y * -16}px, 35px)`,
            }}
          >
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
          <div
            className="absolute top-24 -right-2 sm:top-32 sm:-right-6 lg:-right-8 z-20 pointer-events-none transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 26}px, ${mousePos.y * 22}px, 30px)`,
            }}
          >
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

          {/* Bottom-Right Floating Code Badge: </> (Floating Parallax) */}
          <div
            className="absolute bottom-8 -right-2 sm:bottom-12 sm:-right-4 lg:-right-6 z-20 transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 32}px, ${mousePos.y * 28}px, 45px)`,
            }}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_28px_rgba(91,61,245,0.16)] border border-purple-100 text-[#5B3DF5] transform rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer animate-pulse-glow">
              <Code2 className="w-6 h-6 stroke-[2.75]" />
            </div>
          </div>

          {/* ------------------------------------------------------------
              THE 3 PERSONS CUTOUT (100% CLEAR - NO SNOW EFFECT / NO MASK)
             ------------------------------------------------------------ */}
          <div
            className="relative w-full z-10 transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 6}px, 10px)`,
            }}
          >
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
        <div
          className="max-w-2xl mx-auto space-y-5 transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 4}px, 0)`,
          }}
        >
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
