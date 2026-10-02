import React from 'react';
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Bot,
  Palette,
  Share2,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, fast and responsive websites that make an impact.',
      icon: Globe,
      iconBg: 'bg-[#EEF2FF] text-[#4F46E5]',
      previewType: 'web',
    },
    {
      title: 'Web App Development',
      description: 'Custom web applications, dashboards and SaaS products.',
      icon: LayoutDashboard,
      iconBg: 'bg-[#EFF6FF] text-[#2563EB]',
      previewType: 'webapp',
    },
    {
      title: 'Mobile App Development',
      description: 'iOS, Android and cross-platform mobile apps.',
      icon: Smartphone,
      iconBg: 'bg-[#EEF2FF] text-[#4F46E5]',
      previewType: 'mobile',
    },
    {
      title: 'AI Agents & Automation',
      description: 'AI agents, chatbots and workflow automation to save time and grow.',
      icon: Bot,
      iconBg: 'bg-[#FAF5FF] text-[#9333EA]',
      previewType: 'ai',
    },
    {
      title: 'UI/UX Design',
      description: 'User-friendly and modern designs that users love.',
      icon: Palette,
      iconBg: 'bg-[#FDF4FF] text-[#C026D3]',
      previewType: 'uiux',
    },
    {
      title: 'Integrations & APIs',
      description: 'Third-party integrations, custom APIs and automation.',
      icon: Share2,
      iconBg: 'bg-[#F5F3FF] text-[#7C3AED]',
      previewType: 'api',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAFBFD] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
            Everything You Need to{' '}
            <span className="hero-gradient-text block sm:inline">
              Build, Launch and Scale
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            From websites to AI agents, we build modern digital products tailored to your business goals.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#EDEFF6] hover:border-purple-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(91,61,245,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon & Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.iconBg} shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <button className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#5B3DF5] flex items-center justify-center text-gray-400 group-hover:text-[#5B3DF5] transition-all">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#080A24] mb-2 font-['Plus_Jakarta_Sans']">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Visual Preview Box */}
                <div className="rounded-2xl overflow-hidden border border-[#E9EEF7] bg-[#F8FAFD] p-3 sm:p-4 min-h-[140px] flex items-center justify-center relative">
                  {service.previewType === 'web' && (
                    <div className="w-full bg-[#080A24] rounded-xl p-3.5 text-white shadow-md">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <p className="text-[11px] font-bold text-white/90">Your Ideas</p>
                      <p className="text-[13px] font-extrabold text-[#7352F7]">Our Technology</p>
                      <div className="mt-2 h-1.5 w-16 bg-white/20 rounded-full" />
                    </div>
                  )}

                  {service.previewType === 'webapp' && (
                    <div className="w-full bg-white rounded-xl p-3 shadow-md border border-gray-100 flex gap-2">
                      <div className="w-10 bg-purple-50 rounded-lg p-1 space-y-1">
                        <div className="w-full h-1.5 bg-purple-300 rounded" />
                        <div className="w-full h-1.5 bg-purple-200 rounded" />
                        <div className="w-full h-1.5 bg-purple-200 rounded" />
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 bg-gray-100 rounded w-3/4" />
                        <div className="h-8 bg-blue-50/50 rounded flex items-end gap-1 p-1">
                          <div className="w-2 bg-[#5B3DF5] h-3 rounded-xs" />
                          <div className="w-2 bg-[#5B3DF5] h-5 rounded-xs" />
                          <div className="w-2 bg-[#5B3DF5] h-4 rounded-xs" />
                          <div className="w-2 bg-[#3B82F6] h-6 rounded-xs" />
                        </div>
                      </div>
                    </div>
                  )}

                  {service.previewType === 'mobile' && (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-16 h-28 bg-[#080A24] rounded-xl border-2 border-gray-700 p-1.5 flex flex-col justify-between text-white shadow-md">
                        <div className="w-4 h-1 bg-gray-600 rounded-full mx-auto" />
                        <div className="text-[7px] text-center font-bold text-purple-400">Codexa App</div>
                        <div className="w-full h-2 bg-purple-600/30 rounded" />
                      </div>
                      <div className="w-14 h-24 bg-white rounded-xl border-2 border-purple-200 p-1.5 flex flex-col justify-between shadow-md">
                        <div className="w-3 h-1 bg-gray-200 rounded-full mx-auto" />
                        <div className="h-6 bg-purple-50 rounded flex items-center justify-center">
                          <span className="text-[6px] font-bold text-[#5B3DF5]">Growth</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded" />
                      </div>
                    </div>
                  )}

                  {service.previewType === 'ai' && (
                    <div className="w-full bg-white rounded-xl p-3 shadow-md border border-gray-100 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-[#5B3DF5]">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="text-[11px] font-bold text-[#080A24]">AI Agent Active</div>
                        <div className="text-[9px] text-[#64748B]">Auto-resolving tickets (98%)</div>
                        <div className="h-1.5 bg-emerald-100 rounded-full w-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-4/5 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}

                  {service.previewType === 'uiux' && (
                    <div className="w-full flex items-center justify-between gap-3 bg-white rounded-xl p-3 shadow-md border border-gray-100">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Design System</span>
                        <p className="text-[12px] font-extrabold text-[#080A24]">Beautiful Digital Experience</p>
                      </div>
                      <div className="flex -space-x-2">
                        <span className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white" />
                        <span className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white" />
                        <span className="w-6 h-6 rounded-full bg-pink-500 border-2 border-white" />
                      </div>
                    </div>
                  )}

                  {service.previewType === 'api' && (
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-8 h-8 rounded-xl bg-[#080A24] text-white flex items-center justify-center text-[10px] font-bold shadow">
                        API
                      </div>
                      <div className="w-8 h-[2px] bg-purple-300 relative">
                        <div className="absolute -top-1 left-2 w-2 h-2 rounded-full bg-[#5B3DF5] animate-ping" />
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#5B3DF5] flex items-center justify-center shadow">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-[2px] bg-purple-300" />
                      <div className="w-8 h-8 rounded-xl bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold shadow">
                        App
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
