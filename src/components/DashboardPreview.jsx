import React, { useState } from 'react';
import {
  Calendar,
  ArrowRight,
  LayoutGrid,
  Users,
  Code2,
  Sparkles,
  Layers,
  Sparkle
} from 'lucide-react';
import DashboardSidebar from './DashboardSidebar.jsx';
import DashboardHeader from './DashboardHeader.jsx';
import StatCard from './StatCard.jsx';
import RecentProjects from './RecentProjects.jsx';

export default function DashboardPreview() {
  const [activeSidebarItem, setActiveSidebarItem] = useState('Dashboard');
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' | 'asset'
  const [dateRange] = useState('Apr 1, 2025 - Apr 30, 2025');

  const stats = [
    {
      title: 'Projects',
      value: '12',
      change: '20% from last month',
      icon: LayoutGrid,
      iconBgColor: 'bg-[#EFF6FF] text-[#2563EB]',
      waveColor: '#60A5FA',
    },
    {
      title: 'Clients',
      value: '8',
      change: '33% from last month',
      icon: Users,
      iconBgColor: 'bg-[#F5F3FF] text-[#7C3AED]',
      waveColor: '#A78BFA',
    },
    {
      title: 'App Builds',
      value: '6',
      change: '10% from last month',
      icon: Code2,
      iconBgColor: 'bg-[#ECFDF5] text-[#059669]',
      waveColor: '#34D399',
    },
    {
      title: 'AI Agents',
      value: '6',
      change: '50% from last month',
      icon: Sparkles,
      iconBgColor: 'bg-[#FAF5FF] text-[#9333EA]',
      waveColor: '#C084FC',
    },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4">
      {/* Soft Glow Behind Dashboard */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/25 via-blue-400/20 to-purple-400/25 blur-3xl -z-10 rounded-[60px] scale-95 opacity-90 pointer-events-none" />

      {/* Floating Outer Glassmorphic Frame */}
      <div className="relative rounded-[28px] sm:rounded-[36px] p-2 sm:p-3 bg-gradient-to-b from-white/95 via-[#ECE9FE]/60 to-[#DBEAFE]/40 border border-white/90 shadow-[0_30px_90px_rgba(91,61,245,0.18),0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl ring-1 ring-purple-200/50">
        
        {/* Toggle Mode Badge (Top Right Pill) */}
        <div className="absolute -top-4 right-6 z-30 flex items-center bg-white/90 backdrop-blur-md rounded-full p-1 border border-purple-200/80 shadow-md text-xs font-semibold text-gray-700">
          <button
            onClick={() => setViewMode('interactive')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'interactive'
                ? 'bg-[#5B3DF5] text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live Interactive</span>
          </button>
          <button
            onClick={() => setViewMode('asset')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'asset'
                ? 'bg-[#5B3DF5] text-white shadow-xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <span>HD Asset Render</span>
          </button>
        </div>

        {/* VIEW MODE 1: Interactive Component Tree */}
        {viewMode === 'interactive' ? (
          <div className="bg-[#FAFBFD] rounded-[22px] sm:rounded-[28px] overflow-hidden border border-[#E9EEF7] flex flex-col md:flex-row shadow-sm min-h-[610px]">
            
            {/* Sidebar */}
            <div className="hidden md:flex flex-col">
              <DashboardSidebar
                activeItem={activeSidebarItem}
                setActiveItem={setActiveSidebarItem}
              />
            </div>

            {/* Main Dashboard Area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Top Bar */}
              <DashboardHeader />

              {/* Dashboard Content Container */}
              <div className="p-5 sm:p-7 space-y-6 flex-1 overflow-y-auto">
                {/* Greeting & Date Filter */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
                      Good morning, <span className="text-[#5B3DF5]">Ranjeet</span>
                    </h2>
                    <p className="text-sm font-medium text-[#64748B] mt-1">
                      Here's what's happening with your projects today.
                    </p>
                  </div>

                  {/* Date range picker badge */}
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#E2E8F0] shadow-2xs text-xs font-semibold text-[#080A24] hover:border-purple-300 transition-colors cursor-pointer self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#5B3DF5]" />
                    <span>{dateRange}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </div>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, idx) => (
                    <StatCard key={idx} {...stat} />
                  ))}
                </div>

                {/* Recent Projects Section */}
                <RecentProjects />
              </div>
            </div>
          </div>
        ) : (
          /* VIEW MODE 2: Provided High-Def Asset Render */
          <div className="bg-[#FAFBFD] rounded-[22px] sm:rounded-[28px] overflow-hidden border border-[#E9EEF7] shadow-sm">
            <img
              src="/assets/Pastel Codexa Dashboard Mockup.png"
              alt="Pastel Codexa Dashboard Mockup"
              className="w-full h-auto object-cover rounded-[22px] sm:rounded-[28px]"
            />
          </div>
        )}

      </div>
    </div>
  );
}
