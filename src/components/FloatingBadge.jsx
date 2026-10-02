import React from 'react';

export default function FloatingBadge({
  iconSrc,
  title,
  subtitle,
  className = '',
  animationClass = 'animate-float-slow',
}) {
  return (
    <div
      className={`glass-panel rounded-2xl px-4 py-3 flex items-center gap-3.5 border border-white/80 shadow-[0_12px_32px_rgba(91,61,245,0.1),0_2px_6px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-105 cursor-pointer ${animationClass} ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-1.5 flex items-center justify-center shrink-0 border border-purple-200/50 shadow-inner">
        <img
          src={iconSrc}
          alt={title}
          className="w-full h-full object-contain rounded-lg drop-shadow-sm"
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[13px] font-bold text-[#080A24] leading-tight font-['Plus_Jakarta_Sans']">
          {title}
        </span>
        <span className="text-[11px] font-medium text-[#64748B] leading-snug mt-0.5">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
