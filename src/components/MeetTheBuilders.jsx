import React from 'react';

export default function MeetTheBuilders() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#FAFAFC] overflow-hidden select-none">
      {/* Off-White Graph Paper Grid Background matching Meet the Builders Behind Live Products.png */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            HEADER: Matching Meet the Builders Behind Live Products.png
            - Line pill: —— MEET THE TEAM ——
            - Headline: Builders, thinkers, and problem-solvers.
            - Subtitle: We build real products that are live and used by real people...
           ============================================================== */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14 md:mb-16">
          
          {/* Top Line Pill: MEET THE TEAM */}
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <span className="h-0.5 w-6 sm:w-8 bg-[#5B3DF5]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#5B3DF5] uppercase">
              MEET THE TEAM
            </span>
            <span className="h-0.5 w-6 sm:w-8 bg-[#5B3DF5]" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#080A24] tracking-tight leading-tight">
            Builders, thinkers, and <span className="text-[#5B3DF5]">problem-solvers.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We build real products that are live and used by real people.
            <br className="hidden sm:inline" />
            {' '}From web and mobile apps to digital tools, we turn ideas into impactful products.
          </p>
        </div>

        {/* ==============================================================
            BENTO PHOTO GALLERY: Exact 6-Photo Collage Layout
            - Left Column: Tall card (img.png)
            - Center Column: Top wide (imgg2.png) + Bottom pair (imgg4.png & builder-speaker.png)
            - Right Column: Top (imgg3.png) + Bottom (imgg5.png)
           ============================================================== */}
        <div className="relative">
          
          {/* Decorative Corner Accents (Purple Slashes matching reference) */}
          <div className="hidden lg:flex absolute -top-5 left-1 items-center gap-1.5 pointer-events-none z-20">
            <span className="w-1.5 h-6 bg-[#5B3DF5] rounded-full transform -rotate-[26deg]" />
            <span className="w-1.5 h-6 bg-[#5B3DF5] rounded-full transform -rotate-[26deg]" />
          </div>
          
          <div className="hidden lg:flex absolute -top-5 right-1 items-center gap-1.5 pointer-events-none z-20">
            <span className="w-1.5 h-6 bg-[#5B3DF5] rounded-full transform rotate-[26deg]" />
            <span className="w-1.5 h-6 bg-[#5B3DF5] rounded-full transform rotate-[26deg]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            
            {/* ----------------------------------------------------------
                COLUMN 1: Tall Left Photo (img.png)
                Founders pointing at "Your professor, available 24 hours a day"
               ---------------------------------------------------------- */}
            <div className="md:col-span-1 lg:col-span-4 relative group">
              <div className="relative h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gray-100 border border-gray-200/90 shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(91,61,245,0.18)] transition-all duration-300 hover:-translate-y-1.5">
                <img
                  src="/assets/img.png"
                  alt="Founders presenting live AI Professor display"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle bottom frosted glass accent on corner */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-md pointer-events-none z-10" />
              </div>
            </div>

            {/* ----------------------------------------------------------
                COLUMN 2: Center Column
                Top: Wide FinQuest Competition stage photo (imgg2.png)
                Bottom: Pair of Collaboration Desk (imgg4.png) & Speaker (builder-speaker.png)
               ---------------------------------------------------------- */}
            <div className="md:col-span-1 lg:col-span-5 flex flex-col gap-4 sm:gap-6">
              
              {/* Top: FinQuest Competition Team (Wide Photo) */}
              <div className="relative h-[250px] sm:h-[280px] lg:h-[310px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gray-100 border border-gray-200/90 shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(91,61,245,0.18)] transition-all duration-300 hover:-translate-y-1.5 group">
                <img
                  src="/assets/imgg2.png"
                  alt="FinQuest Competition winners celebration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Bottom: 2 Photos Side by Side */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 flex-1 min-h-[200px] sm:min-h-[230px]">
                
                {/* Bottom-Left: Collaboration at desk (imgg4.png) */}
                <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden bg-gray-100 border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(91,61,245,0.16)] transition-all duration-300 hover:-translate-y-1 group">
                  <img
                    src="/assets/imgg4.png"
                    alt="Engineers planning app sprint"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Bottom-Right: Speaker with microphone (builder-speaker.png) */}
                <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden bg-gray-100 border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(91,61,245,0.16)] transition-all duration-300 hover:-translate-y-1 group">
                  <img
                    src="/assets/builder-speaker.png"
                    alt="Tech talk presentation"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

              </div>

            </div>

            {/* ----------------------------------------------------------
                COLUMN 3: Right Column
                Top: 3 Founders on Stage with HearMe screen (imgg3.png)
                Bottom: Multi-screen Dev Workstation (imgg5.png)
               ---------------------------------------------------------- */}
            <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-4 sm:gap-6">
              
              {/* Top: Stage Presentation (imgg3.png) */}
              <div className="relative h-[250px] sm:h-[280px] lg:h-[310px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gray-100 border border-gray-200/90 shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(91,61,245,0.18)] transition-all duration-300 hover:-translate-y-1.5 group">
                <img
                  src="/assets/imgg3.png"
                  alt="Founders pitch stage presentation"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle corner frosted glass accent */}
                <div className="absolute -bottom-2 -right-2 w-11 h-11 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-md pointer-events-none z-10" />
              </div>

              {/* Bottom: Dev Workstation (imgg5.png) */}
              <div className="relative flex-1 min-h-[200px] sm:min-h-[230px] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-gray-100 border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_40px_rgba(91,61,245,0.16)] transition-all duration-300 hover:-translate-y-1 group">
                <img
                  src="/assets/imgg5.png"
                  alt="Live engineering desk and dual screen setup"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
