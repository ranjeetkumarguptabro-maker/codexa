import React, { useState } from 'react';
import {
  Globe,
  LayoutTemplate,
  Smartphone,
  Bot,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Settings,
  MessageSquare,
  Users
} from 'lucide-react';

export default function Process() {
  const [selectedType, setSelectedType] = useState('Web App');
  const [currentStep, setCurrentStep] = useState(1);

  const projectTypes = [
    { id: 'Website', label: 'Website', icon: Globe },
    { id: 'Web App', label: 'Web App', icon: LayoutTemplate },
    { id: 'Mobile App', label: 'Mobile App', icon: Smartphone },
    { id: 'AI Agent', label: 'AI Agent', icon: Bot },
  ];

  const steps = [
    {
      number: '01',
      title: 'Share Your Idea',
      description: 'Tell us about your project and business goals.',
    },
    {
      number: '02',
      title: 'We Plan & Build',
      description: 'We design, develop and keep you updated at every step.',
    },
    {
      number: '03',
      title: 'Launch & Grow',
      description: 'We deliver a high-quality product and support you as you scale.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#FAFBFD] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
            Get Started in Just{' '}
            <span className="text-[#5B3DF5]">3 Easy Steps</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            We make the process simple, transparent and focused on results.
          </p>
        </div>

        {/* Content: Wizard on Left, Steps on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Interactive Project Wizard Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-6 border border-[#E9EEF7] shadow-[0_10px_40px_rgba(91,61,245,0.06)] overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Mini sidebar inside wizard */}
              <div className="hidden sm:flex flex-col w-36 border-r border-gray-100 pr-3 space-y-2 py-2 select-none">
                <div className="flex items-center gap-1.5 px-2 mb-3">
                  <img src="/assets/codexalogo.png" alt="Codexa" className="w-5 h-5 object-contain" />
                  <span className="font-bold text-xs text-[#080A24]">Codexa</span>
                </div>
                <div className="space-y-1 text-[11px] font-medium text-gray-500">
                  <div className="px-2 py-1.5 rounded-md hover:bg-gray-50 flex items-center gap-1.5">
                    <Layers className="w-3 h-3" /> Dashboard
                  </div>
                  <div className="px-2 py-1.5 rounded-md bg-[#EAE6FE] text-[#5B3DF5] font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> Projects
                  </div>
                  <div className="px-2 py-1.5 rounded-md hover:bg-gray-50 flex items-center gap-1.5">
                    <Bot className="w-3 h-3" /> AI Agents
                  </div>
                  <div className="px-2 py-1.5 rounded-md hover:bg-gray-50 flex items-center gap-1.5">
                    <Users className="w-3 h-3" /> Clients
                  </div>
                  <div className="px-2 py-1.5 rounded-md hover:bg-gray-50 flex items-center gap-1.5">
                    <MessageSquare className="w-3 h-3" /> Messages
                  </div>
                  <div className="px-2 py-1.5 rounded-md hover:bg-gray-50 flex items-center gap-1.5">
                    <Settings className="w-3 h-3" /> Settings
                  </div>
                </div>
              </div>

              {/* Main wizard area */}
              <div className="flex-1 py-2 sm:px-3">
                <div className="mb-4">
                  <h4 className="text-base font-bold text-[#080A24] font-['Plus_Jakarta_Sans']">
                    New Project
                  </h4>
                  <p className="text-xs text-gray-500">
                    Tell us about your idea and we'll take care of the rest.
                  </p>
                </div>

                {/* Steps progress indicator */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="w-6 h-6 rounded-full bg-[#5B3DF5] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="w-10 h-[2px] bg-purple-200" />
                  <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="w-10 h-[2px] bg-gray-200" />
                  <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                </div>

                {/* Project Type Grid */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-gray-600 mb-2.5">Project Type</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {projectTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = selectedType === type.id;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelectedType(type.id)}
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#5B3DF5] bg-[#F4F1FF] text-[#5B3DF5] shadow-xs ring-1 ring-[#5B3DF5]/30'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600 bg-white'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#5B3DF5]' : 'text-gray-500'}`} />
                          <span className="text-[11px] font-bold">{type.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Continue button */}
                <button
                  onClick={() => alert(`Ready to start your ${selectedType} project with Codexa!`)}
                  className="w-full bg-[#5B3DF5] hover:bg-[#4E32E5] text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer hover:shadow-md"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT: 3 Step Cards */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EDEFF6] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-purple-200 transition-all flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#684AF6] to-[#5B3DF5] text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#080A24] mb-1 font-['Plus_Jakarta_Sans']">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
