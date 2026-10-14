import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const REELS = [
  {
    id: 1,
    title: "₹45,000 Deal • Restaurant App",
    tag: "Client Success",
    image: "/assets/reel-1.png",
    url: "https://www.instagram.com/reel/DebwnObRpjD/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
    views: "45.2K",
  },
  {
    id: 2,
    title: "₹5,000 Deal Closed • Clinic Website Built",
    tag: "Web Dev Deal",
    image: "/assets/reel-2.png",
    url: "https://www.instagram.com/reel/DeeAyypRla_/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    views: "62.4K",
  },
  {
    id: 3,
    title: "Still Vibe Coding? Use These Sites",
    tag: "AI & Tech",
    image: "/assets/reel-3.png",
    url: "https://www.instagram.com/reel/DeZMXPNRk-c/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    views: "128K",
  },
  {
    id: 4,
    title: "Building A Coffee Shop Dashboard",
    tag: "SaaS Dev",
    image: "/assets/reel-4.png",
    url: "https://www.instagram.com/reel/DeRbH-xxJa_/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    views: "89.1K",
  },
  {
    id: 5,
    title: "Building A Software Company At 20",
    tag: "Founder Story",
    image: "/assets/reel-5.png",
    url: "https://www.instagram.com/reel/DeO0kEaR80B/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    views: "95.6K",
  },
  {
    id: 6,
    title: "We Are Making An App",
    tag: "App Engineering",
    image: "/assets/reel-6.png",
    url: "https://www.instagram.com/reel/DeJ4v3qxE-2/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    views: "74.8K",
  },
  {
    id: 7,
    title: "Automating Startup Workflows with AI",
    tag: "AI Automation",
    image: "/assets/reel-7.png",
    url: "https://www.instagram.com/reel/DeCXNgSCAqw/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
    views: "112K",
  },
  {
    id: 8,
    title: "Scale Your Business With Custom Tech",
    tag: "Scale & Growth",
    image: "/assets/reel-8.png",
    url: "https://www.instagram.com/reel/DeB8-O4CXoP/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==",
    views: "135K",
  },
];

export default function SocialPresence() {
  // Repeat array 3 times for seamless infinite loop
  const duplicatedReels = [...REELS, ...REELS, ...REELS];
  const initialIndex = REELS.length; // Start in middle set

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardStep, setCardStep] = useState(304); // Default: 280px width + 24px gap

  const trackRef = useRef(null);
  const touchStartXRef = useRef(null);
  const touchDeltaXRef = useRef(0);

  // Measure card step width on mount & resize
  useEffect(() => {
    const updateCardStep = () => {
      if (trackRef.current && trackRef.current.children[0]) {
        const firstCard = trackRef.current.children[0];
        const style = window.getComputedStyle(trackRef.current);
        const gap = parseFloat(style.columnGap || style.gap || '24') || 24;
        setCardStep(firstCard.offsetWidth + gap);
      }
    };

    updateCardStep();
    window.addEventListener('resize', updateCardStep);
    return () => window.removeEventListener('resize', updateCardStep);
  }, []);

  // Continuous movement: every 3 seconds, slide 1 reel to the left
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Seamless jump without animation when reaching edges
  const handleTransitionEnd = () => {
    if (currentIndex >= REELS.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - REELS.length);
    } else if (currentIndex < REELS.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + REELS.length);
    }
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (e) => {
    if (touchStartXRef.current !== null) {
      touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaXRef.current) > 50) {
      if (touchDeltaXRef.current < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
    setIsPaused(false);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#FFFFFF] overflow-hidden select-none">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple-100/40 via-indigo-50/50 to-pink-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching exact sec1.png reference */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          
          {/* Top Pill: Social Presence */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/90 shadow-sm backdrop-blur-md mb-3.5 hover:border-gray-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#080A24]">
              Social Presence
            </span>
          </div>

          {/* Main Heading: Trusted by 130k+ People */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080A24] tracking-tight">
            Trusted by 130k+ People
          </h2>

          {/* Secondary helper info with auto-move status & arrow buttons */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-xs sm:text-sm text-gray-500 font-medium flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
              Live Reels • Moves every 3s
            </span>

            <div className="h-4 w-px bg-gray-200" />

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous Reel"
                className="p-1.5 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-[#5B3DF5] hover:border-[#5B3DF5]/30 hover:bg-purple-50/40 transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Reel"
                className="p-1.5 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-[#5B3DF5] hover:border-[#5B3DF5]/30 hover:bg-purple-50/40 transition-all shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Full-width Carousel Track */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Soft edge fade masks for desktop */}
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className="flex gap-4 sm:gap-6 items-center will-change-transform"
            style={{
              transform: `translate3d(-${currentIndex * cardStep}px, 0, 0)`,
              transition: isTransitioning ? 'transform 750ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
            }}
          >
            {duplicatedReels.map((reel, index) => {
              const isCenterActive = (index % REELS.length) === (currentIndex % REELS.length);

              return (
                <a
                  key={`${reel.id}-${index}`}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-[240px] sm:w-[275px] md:w-[290px] aspect-[9/17.5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gray-50 border border-gray-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(99,51,238,0.2)] transition-all duration-300 hover:-translate-y-2 block"
                >
                  {/* Reel Thumbnail Image */}
                  <img
                    src={reel.image}
                    alt={reel.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Instagram Pill Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/10 shadow-sm">
                      <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                      <span>Reel</span>
                    </div>

                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-medium border border-white/10">
                      <span>{reel.views} views</span>
                    </div>
                  </div>

                  {/* Glassmorphic Hover Overlay with Play Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 text-white z-20">
                    <div className="flex items-center justify-center mb-auto mt-auto">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 p-0.5 shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#5B3DF5] text-[10px] font-bold tracking-wide uppercase mb-1.5">
                        {reel.tag}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                        {reel.title}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-white/80 group-hover:text-white font-medium">
                        <span>Watch on Instagram</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Active Card Subtle Accent Border Glow */}
                  {isCenterActive && (
                    <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-2 ring-[#5B3DF5]/40 pointer-events-none" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom subtle dots indicator */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-1.5">
        {REELS.map((reel, index) => {
          const isActive = (currentIndex % REELS.length) === index;
          return (
            <button
              key={reel.id}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(REELS.length + index);
              }}
              aria-label={`Go to reel ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive ? 'w-6 bg-[#5B3DF5]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
