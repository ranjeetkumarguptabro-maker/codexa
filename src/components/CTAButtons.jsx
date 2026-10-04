import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTAButtons({ onOpenContact }) {
  const handleClick = (e) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    } else {
      window.dispatchEvent(new CustomEvent('open-contact-modal'));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
      {/* PRIMARY CTA */}
      <button
        onClick={handleClick}
        className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#5B3DF5] to-[#7352F7] text-white font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-[0_10px_25px_-5px_rgba(91,61,245,0.45),0_4px_12px_rgba(91,61,245,0.25)] hover:shadow-[0_15px_30px_-5px_rgba(91,61,245,0.55),0_6px_16px_rgba(91,61,245,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer w-full sm:w-auto"
      >
        <span>Contact Me</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>

      {/* SECONDARY CTA */}
      <a
        href="#work"
        className="group inline-flex items-center justify-center bg-white/80 hover:bg-white text-[#080A24] font-semibold text-[15px] px-8 py-3.5 rounded-full border border-[#D5D8FC] hover:border-[#5B3DF5]/50 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(91,61,245,0.08)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer w-full sm:w-auto backdrop-blur-sm"
      >
        <span>View Our Work</span>
      </a>
    </div>
  );
}
