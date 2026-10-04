import React, { useState } from 'react';
import {
  ArrowRight,
  LayoutTemplate,
  ShoppingBag,
  Bot,
  Smartphone,
  Sparkles,
  Play
} from 'lucide-react';
import CaseStudyModal from './CaseStudyModal.jsx';

export default function RecentWork() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState('norvique');

  const openCaseStudy = (projectId = 'norvique') => {
    setModalProject(projectId);
    setModalOpen(true);
  };

  const projects = [
    {
      id: 'saas',
      title: 'SaaS Dashboard',
      category: 'Website',
      icon: LayoutTemplate,
      iconBg: 'bg-purple-100 text-purple-600',
      tag: 'Live Platform',
      targetProject: 'norvique',
      coverImage: '/assets/Norvique Sunset Villa Hero.png',
      badgeText: 'Sunset Villa • 49s Tour',
      badgeIcon: Play,
      projectName: 'Norvique Real Estate',
      projectDesc: 'Curated Luxury Villas • Latvia',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Store',
      category: 'Website',
      icon: ShoppingBag,
      iconBg: 'bg-emerald-100 text-emerald-600',
      tag: 'Under Armour Live',
      targetProject: 'under-armour',
      coverImage: '/assets/Under Armour Bring The Stay Flagship Laptop.png',
      badgeText: 'Flagship • Adaptive Retail',
      badgeIcon: ShoppingBag,
      projectName: 'Under Armour Retail',
      projectDesc: 'High-Performance Headless Storefront & PDP',
    },
    {
      id: 'ai-assistant',
      title: 'AI Assistant',
      category: 'AI Agent',
      icon: Bot,
      iconBg: 'bg-purple-100 text-purple-600',
      tag: 'Career GO • AI Agent',
      targetProject: 'career-go',
      coverImage: '/assets/Career GO AI Resume Builder Laptop.png',
      badgeText: 'AI Co-Pilot • 46k+ Jobs',
      badgeIcon: Sparkles,
      projectName: 'Career GO Platform',
      projectDesc: 'AI Recruiter & Career Acceleration Co-Pilot',
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      category: 'iOS & Android',
      icon: Smartphone,
      iconBg: 'bg-blue-100 text-blue-600',
      tag: '4 Live Products',
      targetProject: 'kangaroo',
      coverImage: '/assets/Kangaroo Learning App Showcase.png',
      badgeText: '★ 4.9+ • 4 Live Apps',
      badgeIcon: Smartphone,
      projectName: 'Kangaroo & App Suite',
      projectDesc: 'Kangaroo, Blind AI, SpendSense, Planitory',
    },
  ];

  return (
    <section id="work" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EDE9FE] text-[#5B3DF5] text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio & Client Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
            Real Projects.{' '}
            <span className="text-[#5B3DF5]">Real Results.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Click any card to explore the full case study, live flows, and architecture inside.
          </p>
        </div>

        {/* 4 Project Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item, idx) => {
            const Icon = item.icon;
            const BadgeIcon = item.badgeIcon || Sparkles;

            return (
              <div
                key={idx}
                onClick={() => openCaseStudy(item.targetProject)}
                className="group bg-[#FAFBFE] hover:bg-white rounded-3xl p-5 sm:p-6 border border-[#EDEFF6] hover:border-purple-200 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(91,61,245,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer ring-1 ring-purple-100/50"
              >
                <div>
                  {/* Top Bar with Icon, Title, Category and Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBg} shadow-xs shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-[#080A24] font-['Plus_Jakarta_Sans'] leading-tight">
                          {item.title}
                        </h4>
                        <span className="text-xs text-[#64748B] font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openCaseStudy(item.targetProject);
                      }}
                      className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#5B3DF5] flex items-center justify-center text-gray-400 group-hover:text-[#5B3DF5] transition-all cursor-pointer"
                      title="Explore Case Study"
                    >
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>

                  {/* UI Preview Canvas: High-Resolution Cover Image Container */}
                  <div className="mt-3 mb-2">
                    <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden relative group/cover cursor-pointer border border-black/5 shadow-inner bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
                      <img
                        src={item.coverImage}
                        alt={item.projectName}
                        className="w-full h-full object-cover object-top group-hover/cover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />

                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      {/* Floating Top Badge */}
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <div className="bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
                          <BadgeIcon className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>{item.badgeText}</span>
                        </div>
                      </div>

                      {/* Floating Bottom Project Info */}
                      <div className="absolute bottom-2.5 left-3 right-3 z-10 text-white">
                        <h5 className="text-[13px] sm:text-[14px] font-bold leading-tight drop-shadow-sm font-['Plus_Jakarta_Sans']">
                          {item.projectName}
                        </h5>
                        <p className="text-[11px] text-white/85 line-clamp-1 mt-0.5 font-medium">
                          {item.projectDesc}
                        </p>
                      </div>

                      {/* Interactive Hover Action Overlay */}
                      <div className="absolute inset-0 bg-[#5B3DF5]/30 backdrop-blur-[2px] opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <span className="px-3.5 py-2 rounded-full bg-white text-[#080A24] text-xs font-bold shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover/cover:translate-y-0 transition-transform duration-300">
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#5B3DF5]" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Tag & CTA Link */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-[#5B3DF5]">{item.tag}</span>
                  <div className="flex items-center gap-1 text-gray-400 group-hover:text-[#5B3DF5] font-semibold transition-colors">
                    <span>Explore case study</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study & Multi-Project Modal */}
      <CaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProject={modalProject}
        initialView="project"
      />
    </section>
  );
}
