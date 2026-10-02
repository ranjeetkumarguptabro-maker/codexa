import React from 'react';

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconBgColor = 'bg-blue-100 text-blue-600',
  waveColor = '#3B82F6',
}) {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl p-5 border border-[#EDEFF6] shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(91,61,245,0.08)] hover:-translate-y-0.5 flex flex-col justify-between min-h-[148px]">
      {/* Top row: Title and Icon */}
      <div className="flex items-center justify-between z-10">
        <span className="text-[14px] font-semibold text-[#1E293B] tracking-tight font-['Plus_Jakarta_Sans']">
          {title}
        </span>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBgColor} shadow-2xs`}>
          <Icon className="w-5 h-5 stroke-[2.2]" />
        </div>
      </div>

      {/* Middle: Big Metric */}
      {value && (
        <div className="my-1.5 z-10">
          <span className="text-[32px] font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans'] leading-none">
            {value}
          </span>
        </div>
      )}

      {/* Bottom: Change pill */}
      <div className="flex items-center gap-1.5 z-10 text-[12px] font-semibold text-[#10B981] mt-1">
        <span className="text-[13px]">↑</span>
        <span>{change}</span>
      </div>

      {/* Dual Layer Decorative Pastel Wave at Bottom */}
      <div className="absolute -bottom-0.5 -left-1 -right-1 h-14 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 500 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Back Wave */}
          <path
            d="M0,60 C180,100 320,30 500,70 L500,120 L0,120 Z"
            fill={waveColor}
            fillOpacity="0.18"
          />
          {/* Front Wave */}
          <path
            d="M0,80 C150,50 350,110 500,65 L500,120 L0,120 Z"
            fill={waveColor}
            fillOpacity="0.32"
          />
        </svg>
      </div>
    </div>
  );
}
