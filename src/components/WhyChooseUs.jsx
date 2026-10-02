import React from 'react';
import { Zap, Users, Rocket, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      stat: '40+',
      title: 'Projects Delivered',
      description: 'From startups to established businesses.',
      icon: Zap,
      iconColor: 'text-blue-500 bg-blue-50',
    },
    {
      stat: '100%',
      title: 'Client Satisfaction',
      description: 'Long-term partnerships & repeat clients.',
      icon: Users,
      iconColor: 'text-indigo-500 bg-indigo-50',
    },
    {
      stat: '3x',
      title: 'Faster Development',
      description: 'MVPs and products built efficiently.',
      icon: Rocket,
      iconColor: 'text-purple-500 bg-purple-50',
    },
    {
      stat: '10x',
      title: 'Business Growth',
      description: 'Our clients scale faster with technology.',
      icon: TrendingUp,
      iconColor: 'text-purple-600 bg-purple-100',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
            Why Businesses{' '}
            <span className="text-[#5B3DF5]">Choose Codexa</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B]">
            We don't just build websites or apps, we build digital products that create real business value.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFBFE] hover:bg-white rounded-3xl p-7 border border-[#EDEFF6] hover:border-purple-200 shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(91,61,245,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.iconColor} mb-6`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl font-extrabold text-[#080A24] tracking-tight mb-2 font-['Plus_Jakarta_Sans']">
                    {item.stat}
                  </div>
                  <h4 className="text-[16px] font-bold text-[#080A24] mb-2 font-['Plus_Jakarta_Sans']">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
