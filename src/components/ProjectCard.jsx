import React from 'react';
import { MoreVertical, ArrowRight } from 'lucide-react';

export default function ProjectCard({
  title,
  category,
  status,
  percentage,
  icon: Icon,
  iconBgColor = 'bg-purple-100 text-purple-600',
  progressColor = 'bg-[#5B3DF5]',
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#EDEFF6] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(91,61,245,0.06)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBgColor} shadow-xs`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-[15px] font-bold text-[#080A24] leading-snug font-['Plus_Jakarta_Sans']">
              {title}
            </h4>
            <span className="text-[12px] font-medium text-[#64748B]">
              {category}
            </span>
          </div>
        </div>
        <button
          className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
          title="More options"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Progress & Action */}
      <div className="mt-2 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-[#080A24]">
            {status}
          </span>
          <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#5B3DF5] hover:border-[#5B3DF5] transition-colors">
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#EBF0F8] h-2 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
