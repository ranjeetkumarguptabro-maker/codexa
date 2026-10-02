import React, { useState } from 'react';
import { Search, Bell, MessageSquare, ChevronDown } from 'lucide-react';

export default function DashboardHeader({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="px-6 py-4 border-b border-purple-100/50 bg-white/70 backdrop-blur-md flex items-center justify-between gap-4">
      {/* Search Input Bar */}
      <div className="relative flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
          <Search className="w-4 h-4 text-[#8C95A6]" />
        </div>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search anything..."
          className="w-full pl-10 pr-4 py-2 bg-[#F1F3F9]/80 hover:bg-[#EDF0F7] focus:bg-white text-sm text-[#080A24] placeholder-[#8C95A6] rounded-xl border border-transparent focus:border-purple-300 focus:outline-none transition-all duration-150"
        />
      </div>

      {/* Action Icons and User Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell with Badge */}
        <button
          className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-colors cursor-pointer"
          title="Notifications"
        >
          <Bell className="w-5 h-5 text-[#4B5563]" />
          <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#EF4444] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white leading-none">
            0
          </span>
        </button>

        {/* Message Bubble with Badge */}
        <button
          className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-colors cursor-pointer"
          title="Messages"
        >
          <MessageSquare className="w-5 h-5 text-[#4B5563]" />
          <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#EF4444] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white leading-none">
            0
          </span>
        </button>

        {/* User Profile Pill */}
        <div className="flex items-center gap-2.5 pl-2 py-1 pr-1.5 rounded-xl hover:bg-gray-100/60 transition-colors cursor-pointer select-none">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8168F6] to-[#5B3DF5] flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-purple-100">
            R
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[13px] font-bold text-[#080A24] leading-tight font-['Plus_Jakarta_Sans']">
              Ranjeet
            </span>
            <span className="text-[11px] font-medium text-[#64748B] leading-none mt-0.5">
              Founder
            </span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 ml-0.5" />
        </div>
      </div>
    </header>
  );
}
