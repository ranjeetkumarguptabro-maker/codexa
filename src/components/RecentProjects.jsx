import React from 'react';
import { ArrowRight, LayoutTemplate, Bot, ShoppingCart } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';

export default function RecentProjects() {
  const projects = [
    {
      title: 'SaaS Dashboard',
      category: 'Website',
      status: 'In Progress 70%',
      percentage: 70,
      icon: LayoutTemplate,
      iconBgColor: 'bg-[#EEF0FF] text-[#5B3DF5]',
      progressColor: 'bg-gradient-to-r from-[#5B3DF5] to-[#7B58F7]',
    },
    {
      title: 'AI Chat Assistant',
      category: 'AI Agent',
      status: 'Completed 100%',
      percentage: 100,
      icon: Bot,
      iconBgColor: 'bg-[#EBFBF4] text-[#10B981]',
      progressColor: 'bg-[#10B981]',
    },
    {
      title: 'E-commerce Platform',
      category: 'Website',
      status: 'In Progress 45%',
      percentage: 45,
      icon: ShoppingCart,
      iconBgColor: 'bg-[#EDF5FF] text-[#3B82F6]',
      progressColor: 'bg-gradient-to-r from-[#5B3DF5] to-[#3B82F6]',
    },
  ];

  return (
    <div className="mt-7">
      {/* Title Bar */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[#080A24] font-['Plus_Jakarta_Sans']">
          Recent Projects
        </h3>
        <a
          href="#work"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B3DF5] hover:text-[#4323E0] transition-colors"
        >
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 3 Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
}
