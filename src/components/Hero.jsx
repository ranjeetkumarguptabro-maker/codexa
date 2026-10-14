import React from 'react';
import {
  ArrowRight,
  Bot,
  Code2,
  BarChart3,
  Sparkles
} from 'lucide-react';
import DashboardPreview from './DashboardPreview.jsx';

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
    <section id="home" className="relative pt-28 sm:pt-36 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-white">
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
      <div className="absolute top-0 right-0 w-[550px] sm:w-[700px] h-[450px] sm:h-[600px] bg-gradient-to-bl from-[#DDD6FE]/45 via-[#EDE9FE]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Center-Right Soft Purple Blob (behind team) */}
      <div className="absolute top-28 right-8 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-br from-[#EDE9FE]/60 via-[#DDD6FE]/35 to-[#E0E7FF]/40 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Bottom-Left Ambient Glow */}
      <div className="absolute bottom-16 left-0 w-[380px] sm:w-[500px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#EDE9FE]/40 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            2. HERO MAIN 2-COLUMN SECTION (Left: Text & CTAs, Right: 3 Persons)
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2 pb-12 sm:pb-16 lg:pb-20">
          
          {/* ------------------------------------------------------------
              LEFT COLUMN: Headline, Subtitle, CTAs, Micro Feature Strip
             ------------------------------------------------------------ */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left space-y-6 sm:space-y-7 z-10">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-purple-100 shadow-[0_2px_12px_rgba(91,61,245,0.06)] text-xs sm:text-[13px] font-semibold text-[#4B5563] backdrop-blur-sm">
              <span className="text-sm">🚀</span>
              <span>Empowering Startups with Technology</span>
            </div>

            {/* Main Bold Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] xl:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.08] text-[#080A24] font-['Plus_Jakarta_Sans']">
              <span>We Build Digital</span> <br />
              <span>Products</span> <br />
              <span className="text-[#3D52F5] sm:text-[#4338CA] lg:text-[#3D52F5]">
                That Grow Businesses
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-[19px] text-[#64748B] font-normal max-w-lg leading-relaxed">
              Websites, Web Apps, Mobile Apps, SaaS and AI Agents built for real impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1 w-full sm:w-auto">
              {/* Primary Contact Button */}
              <button
                onClick={handleOpenContact}
                className="inline-flex items-center justify-center gap-2.5 bg-[#5B3DF5] hover:bg-[#4E32E5] text-white text-[15px] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_10px_25px_rgba(91,61,245,0.35)] hover:shadow-[0_14px_30px_rgba(91,61,245,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Portfolio Button */}
              <a
                href="#work"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#080A24] text-[15px] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-gray-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-purple-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>View Our Work</span>
              </a>
            </div>

            {/* Micro Feature Strip (3 inline items) */}
            <div className="pt-6 sm:pt-7 border-t border-gray-200/70 w-full flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 text-left">
              {/* Item 1: AI Agents */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0 border border-purple-100 shadow-2xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#080A24] leading-tight font-['Plus_Jakarta_Sans']">
                    AI Agents
                  </div>
                  <div className="text-[11px] font-medium text-[#64748B] leading-none mt-1">
                    Automate & Scale
                  </div>
                </div>
              </div>

              {/* Divider 1 */}
              <div className="hidden sm:block w-px h-8 bg-gray-200/80 shrink-0" />

              {/* Item 2: Custom Development */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#5B3DF5] flex items-center justify-center shrink-0 border border-purple-100 shadow-2xs">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#080A24] leading-tight font-['Plus_Jakarta_Sans']">
                    Custom Development
                  </div>
                  <div className="text-[11px] font-medium text-[#64748B] leading-none mt-1">
                    Web & Mobile Apps
                  </div>
                </div>
              </div>

              {/* Divider 2 */}
              <div className="hidden sm:block w-px h-8 bg-gray-200/80 shrink-0" />

              {/* Item 3: Grow Faster */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0 border border-indigo-100 shadow-2xs">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#080A24] leading-tight font-['Plus_Jakarta_Sans']">
                    Grow Faster
                  </div>
                  <div className="text-[11px] font-medium text-[#64748B] leading-none mt-1">
                    With Technology
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------
              RIGHT COLUMN: 3 Persons Image, Organic Blob, Doodles & Badges
             ------------------------------------------------------------ */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">
            
            {/* The Team Presentation Card Container */}
            <div className="relative w-full max-w-[560px] mx-auto flex items-center justify-center">
              
              {/* Organic Fluid Lavender Blob Behind the Team */}
              <div
                className="absolute inset-0 w-full h-[88%] top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#EDE9FE] via-[#DDD6FE]/70 to-[#E0E7FF]/80 rounded-[48px] sm:rounded-[64px] shadow-[0_20px_50px_rgba(91,61,245,0.08)] pointer-events-none -z-0"
                style={{
                  borderRadius: '42% 58% 54% 46% / 45% 42% 58% 55%',
                }}
              />

              {/* Soft Ambient Radial Behind Blob */}
              <div className="absolute inset-0 w-[110%] h-[95%] -translate-x-[5%] top-1/2 -translate-y-1/2 bg-purple-300/30 blur-3xl rounded-full pointer-events-none -z-10" />

              {/* --------------------------------------------------------
                  DOODLE ACCENTS (Playful Hand-drawn Blue Accents)
                 -------------------------------------------------------- */}
              
              {/* Left Blue Curved Arrow Doodle */}
              <div className="absolute top-16 -left-3 sm:top-24 sm:-left-4 z-20 pointer-events-none">
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
              <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:top-6 z-20 pointer-events-none">
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
              <div className="absolute top-28 -right-2 sm:top-36 sm:-right-4 z-20 pointer-events-none">
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

              {/* --------------------------------------------------------
                  FLOATING GLASS BADGES
                 -------------------------------------------------------- */}
              
              {/* Top-Left Floating Badge: Grow Faster */}
              <div className="absolute -top-3 left-0 sm:-top-5 sm:-left-3 lg:-left-6 z-20 animate-float-slow">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_12px_32px_rgba(91,61,245,0.12)] border border-purple-100 flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                    <BarChart3 className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold text-[#080A24] leading-tight font-['Plus_Jakarta_Sans']">
                      Grow Faster
                    </span>
                    <span className="text-[11px] font-medium text-[#64748B] leading-none mt-1">
                      With Technology
                    </span>
                  </div>
                </div>
              </div>

              {/* Top-Right Floating Badge: AI Agents */}
              <div className="absolute -top-2 right-0 sm:-top-4 sm:-right-2 lg:-right-6 z-20 animate-float-reverse">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_12px_32px_rgba(91,61,245,0.12)] border border-purple-100 flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF5FF] text-[#7C3AED] flex items-center justify-center shrink-0 shadow-2xs">
                    <Bot className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold text-[#080A24] leading-tight font-['Plus_Jakarta_Sans']">
                      AI Agents
                    </span>
                    <span className="text-[11px] font-medium text-[#64748B] leading-none mt-1">
                      Automate & Scale
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom-Right Floating Code Badge: </> */}
              <div className="absolute bottom-12 -right-2 sm:bottom-16 sm:-right-2 lg:-right-4 z-20">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_28px_rgba(91,61,245,0.16)] border border-purple-100 text-[#5B3DF5] transform rotate-6 hover:rotate-0 transition-transform duration-300 cursor-pointer animate-pulse-glow">
                  <Code2 className="w-6 h-6 stroke-[2.75]" />
                </div>
              </div>

              {/* --------------------------------------------------------
                  THE 3 PERSONS CUTOUT IMAGE (With Studio Bottom Fade)
                 -------------------------------------------------------- */}
              <div className="relative w-full z-10 overflow-hidden pt-4">
                <img
                  src="/assets/3personsimage.png"
                  alt="Codexa Founders & Engineering Team"
                  className="w-full h-auto object-contain relative select-none drop-shadow-xl"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 68%, transparent 97%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 68%, transparent 97%)',
                  }}
                />
                {/* Seamless studio bottom gradient fade overlay */}
                <div className="absolute -bottom-1 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
              </div>

            </div>

          </div>

        </div>

        {/* ==============================================================
            3. DASHBOARD PREVIEW SHOWCASE (Below Hero Section)
           ============================================================== */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}
