import React, { useState } from 'react';
import { ArrowRight, LayoutTemplate, ShoppingBag, Bot, Smartphone, Eye, Sparkles, Globe, Play } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal.jsx';

export default function RecentWork() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState('kangaroo');
  const [featuredMobileIndex, setFeaturedMobileIndex] = useState(0); // 0: Kangaroo, 1: Blind AI, 2: SpendSense, 3: Planitory
  const [featuredWebsiteIndex, setFeaturedWebsiteIndex] = useState(0); // 0: Norvique, 1: E-commerce Store

  const getTargetProject = () => {
    if (featuredMobileIndex === 3) return 'planitory';
    if (featuredMobileIndex === 2) return 'spendsense';
    if (featuredMobileIndex === 1) return 'blind-ai';
    return 'kangaroo';
  };

  const openMobileCaseStudy = (projectId = 'kangaroo', view = 'project') => {
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
      tag: 'Live Product',
      preview: (
        <div className="w-full h-44 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-xl p-4 text-white flex flex-col justify-between shadow-inner">
          <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
            <span className="font-semibold text-purple-400">Codexa Metrics</span>
            <span className="text-emerald-400 font-mono">+128% ARR</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-purple-500/30 rounded-full w-4/5" />
            <div className="h-2 bg-blue-500/30 rounded-full w-2/3" />
          </div>
          <div className="flex gap-2">
            <div className="h-8 flex-1 bg-white/5 rounded-lg flex items-center justify-center text-[10px] text-gray-300">
              Analytics
            </div>
            <div className="h-8 flex-1 bg-purple-600/40 rounded-lg flex items-center justify-center text-[10px] text-purple-200">
              Active Sync
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'norvique-website',
      title: 'Norvique Real Estate',
      category: 'Website',
      icon: Globe,
      iconBg: 'bg-amber-100 text-amber-700',
      tag: 'Video & Flow Tour',
      isClickable: true,
      targetProject: 'norvique',
      preview: (
        <div className="w-full h-44 bg-gradient-to-br from-[#12141F] via-[#1A1826] to-[#0A0C14] rounded-xl overflow-hidden relative text-white flex flex-col justify-between p-3 border border-amber-500/30 group-hover:border-amber-400 transition-all shadow-inner">
          {/* Project Switcher mini tabs */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md p-0.5 rounded-lg border border-white/10 text-[9px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturedWebsiteIndex(0);
                }}
                className={`px-1.5 py-0.5 rounded font-bold transition-all cursor-pointer ${
                  featuredWebsiteIndex === 0
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Norvique
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturedWebsiteIndex(1);
                }}
                className={`px-1.5 py-0.5 rounded font-bold transition-all cursor-pointer ${
                  featuredWebsiteIndex === 1
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                E-commerce
              </button>
            </div>

            <span className="text-amber-400 font-bold text-[10px] bg-amber-400/20 px-1.5 py-0.5 rounded-full border border-amber-400/30 flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-current" />
              49s Tour
            </span>
          </div>

          {featuredWebsiteIndex === 0 ? (
            /* Norvique Preview */
            <div className="flex items-center gap-3 my-auto z-10">
              <div className="w-16 h-20 rounded-lg overflow-hidden border border-amber-400/30 shadow-md shrink-0 bg-black relative">
                <img
                  src="/assets/Norvique Video Poster.png"
                  alt="Norvique Luxury Estate"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/90 text-black flex items-center justify-center shadow-md">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-white leading-tight">
                  Norvique Real Estate
                </p>
                <p className="text-[10px] text-amber-300 font-medium">
                  Curated Luxury Villas • Latvia
                </p>
                <p className="text-[9px] text-gray-300">
                  Video Tour • 8-Step Flow • Concierge
                </p>
                <div className="inline-flex items-center gap-1 text-[9px] font-bold text-white bg-amber-600/90 px-2 py-0.5 rounded mt-1">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          ) : (
            /* E-commerce Store Preview */
            <div className="space-y-2 my-auto z-10">
              <div className="flex items-center justify-between text-xs text-gray-200 font-bold">
                <span>Modern Shop</span>
                <span className="text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded text-[10px]">
                  Fast Checkout
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-semibold text-gray-200">
                  Curated Catalog
                </div>
                <div className="h-12 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-semibold text-gray-200">
                  Instant Pay
                </div>
              </div>
            </div>
          )}

          {/* Bottom tag bar */}
          <div className="flex items-center justify-between text-[10px] text-gray-300 border-t border-white/10 pt-1.5 z-10">
            <span className="text-amber-300 font-semibold">Web & Concierge Portal</span>
            <span className="text-emerald-400 font-bold">Full-Stack Live</span>
          </div>

          {/* Background glow */}
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-amber-500/15 rounded-full blur-xl pointer-events-none" />
        </div>
      ),
    },
    {
      id: 'ai-assistant',
      title: 'AI Assistant',
      category: 'AI Agent',
      icon: Bot,
      iconBg: 'bg-indigo-100 text-indigo-600',
      tag: 'Autonomous',
      preview: (
        <div className="w-full h-44 bg-[#0A0D1E] rounded-xl p-4 text-white flex flex-col justify-between border border-purple-900/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-purple-300">Codexa AI Engine</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5 text-[11px] text-gray-300 border border-white/5">
            "Hello Ranjeet, all autonomous deployment tasks have finished successfully."
          </div>
          <div className="flex items-center justify-between text-[10px] text-purple-400">
            <span>Processing Speed: 18ms</span>
            <span className="text-emerald-400 font-bold">100% Uptime</span>
          </div>
        </div>
      ),
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      category: 'iOS & Android',
      icon: Smartphone,
      iconBg: 'bg-blue-100 text-blue-600',
      tag: '4 Live Products',
      isClickable: true,
      preview: (
        <div className="w-full h-44 bg-gradient-to-br from-[#0B0F2A] via-[#1A183D] to-[#111827] rounded-xl overflow-hidden relative text-white flex flex-col justify-between p-3 border border-purple-500/30 group-hover:border-[#5B3DF5] transition-all shadow-inner">
          {/* Project Switcher mini tabs */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md p-0.5 rounded-lg border border-white/10 text-[9px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturedMobileIndex(0);
                }}
                className={`px-1.5 py-0.5 rounded font-bold transition-all cursor-pointer ${
                  featuredMobileIndex === 0
                    ? 'bg-[#5B3DF5] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Kangaroo
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturedMobileIndex(1);
                }}
                className={`px-1.5 py-0.5 rounded font-bold transition-all cursor-pointer ${
                  featuredMobileIndex === 1
                    ? 'bg-amber-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Blind AI
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturedMobileIndex(2);
                }}
                className={`px-1.5 py-0.5 rounded font-bold transition-all cursor-pointer ${
                  featuredMobileIndex === 2
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                SpendSense
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturedMobileIndex(3);
                }}
                className={`px-1.5 py-0.5 rounded font-bold transition-all cursor-pointer ${
                  featuredMobileIndex === 3
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Planitory
              </button>
            </div>

            <span className="text-amber-400 font-bold text-[10px] bg-amber-400/20 px-1.5 py-0.5 rounded-full border border-amber-400/30">
              ★ 4.9+
            </span>
          </div>

          {/* Dynamic Content based on featuredMobileIndex */}
          {featuredMobileIndex === 0 ? (
            /* Kangaroo Preview */
            <div className="flex items-center gap-3 my-auto z-10">
              <div className="w-12 h-18 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0 bg-black">
                <img
                  src="/assets/Kangaroo Learning App Showcase.png"
                  alt="Kangaroo App"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-white leading-tight">
                  Kangaroo App
                </p>
                <p className="text-[10px] text-purple-300 font-medium">
                  Wellbeing & Learning
                </p>
                <p className="text-[9px] text-gray-300">
                  150k+ Active Students • 60 FPS
                </p>
                <div className="inline-flex items-center gap-1 text-[9px] font-bold text-white bg-[#5B3DF5]/80 px-2 py-0.5 rounded mt-1">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          ) : featuredMobileIndex === 1 ? (
            /* Blind AI Preview */
            <div className="flex items-center gap-3 my-auto z-10">
              <div className="w-12 h-18 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0 bg-black">
                <img
                  src="/assets/Blind AI Voice Assistant Mockup.png"
                  alt="Blind AI App"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-white leading-tight">
                  Blind AI App
                </p>
                <p className="text-[10px] text-amber-300 font-medium">
                  Vision & Navigation AI
                </p>
                <p className="text-[9px] text-gray-300">
                  Powered by Gemini • LiDAR AR
                </p>
                <div className="inline-flex items-center gap-1 text-[9px] font-bold text-white bg-amber-500/90 px-2 py-0.5 rounded mt-1">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          ) : featuredMobileIndex === 2 ? (
            /* SpendSense Preview */
            <div className="flex items-center gap-3 my-auto z-10">
              <div className="w-12 h-18 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0 bg-black">
                <img
                  src="/assets/SpendSense AI Finance Assistant.png"
                  alt="SpendSense App"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-white leading-tight">
                  SpendSense AI
                </p>
                <p className="text-[10px] text-emerald-300 font-medium">
                  Personal Finance & Wealth
                </p>
                <p className="text-[9px] text-gray-300">
                  250k+ Savers • Voice & OCR
                </p>
                <div className="inline-flex items-center gap-1 text-[9px] font-bold text-white bg-emerald-600/90 px-2 py-0.5 rounded mt-1">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          ) : (
            /* Planitory Preview */
            <div className="flex items-center gap-3 my-auto z-10">
              <div className="w-12 h-18 rounded-lg overflow-hidden border border-white/20 shadow-md shrink-0 bg-black">
                <img
                  src="/assets/Planitory Travel App Mockup.png"
                  alt="Planitory App"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-white leading-tight">
                  Planitory App
                </p>
                <p className="text-[10px] text-indigo-300 font-medium">
                  Travel & Curated Maps
                </p>
                <p className="text-[9px] text-gray-300">
                  50k+ Maps • Offline GPS
                </p>
                <div className="inline-flex items-center gap-1 text-[9px] font-bold text-white bg-indigo-600/90 px-2 py-0.5 rounded mt-1">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          )}

          {/* Bottom tag bar */}
          <div className="flex items-center justify-between text-[10px] text-gray-300 border-t border-white/10 pt-1.5 z-10">
            <span className="text-blue-300 font-semibold">iOS 18 & Android 15</span>
            <span className="text-emerald-400 font-bold">App Store & Play</span>
          </div>

          {/* Background glow */}
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-[#5B3DF5]/20 rounded-full blur-xl pointer-events-none" />
        </div>
      ),
    },
  ];

  return (
    <section id="work" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
            Real Projects.{' '}
            <span className="text-[#5B3DF5]">Real Results.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            Here are a few of our recent projects.
          </p>
        </div>

        {/* 4 Project Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item, idx) => {
            const Icon = item.icon;
            const isInteractive = item.isClickable;

            return (
              <div
                key={idx}
                onClick={() => {
                  if (item.targetProject) {
                    openMobileCaseStudy(item.targetProject);
                  } else if (isInteractive) {
                    openMobileCaseStudy(getTargetProject());
                  }
                }}
                className={`group bg-[#FAFBFE] hover:bg-white rounded-3xl p-5 sm:p-6 border border-[#EDEFF6] hover:border-purple-200 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(91,61,245,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  (isInteractive || item.targetProject) ? 'cursor-pointer ring-1 ring-purple-100/60' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Icon, Title, and Link */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBg} shadow-xs`}>
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
                      onClick={(e) => {
                        if (item.targetProject) {
                          e.stopPropagation();
                          openMobileCaseStudy(item.targetProject);
                        } else if (isInteractive) {
                          e.stopPropagation();
                          openMobileCaseStudy(getTargetProject());
                        }
                      }}
                      className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#5B3DF5] flex items-center justify-center text-gray-400 group-hover:text-[#5B3DF5] transition-all"
                      title={item.targetProject ? 'Explore Website Case Study' : isInteractive ? 'Explore Mobile Case Studies' : 'View project'}
                    >
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>

                  {/* UI Preview Canvas */}
                  <div className="mt-4 mb-2">
                    {item.preview}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-[#5B3DF5]">{item.tag}</span>
                  <button
                    onClick={(e) => {
                      if (item.targetProject) {
                        e.stopPropagation();
                        openMobileCaseStudy(item.targetProject);
                      } else if (isInteractive) {
                        e.stopPropagation();
                        openMobileCaseStudy(getTargetProject());
                      }
                    }}
                    className="flex items-center gap-1 text-gray-400 group-hover:text-[#5B3DF5] font-semibold transition-colors cursor-pointer"
                  >
                    <span>Explore case study</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study & Multi-Project Modal (Featuring Kangaroo, Blind AI, and SpendSense) */}
      <CaseStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProject={modalProject}
        initialView="project"
      />
    </section>
  );
}
