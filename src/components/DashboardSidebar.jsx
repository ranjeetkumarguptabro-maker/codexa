import React from 'react';
import {
  LayoutDashboard,
  FolderKanban,
  BarChart3,
  Bot,
  Users,
  Settings
} from 'lucide-react';

export default function DashboardSidebar({ activeItem = 'Dashboard', setActiveItem }) {
  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'Projects', label: 'Projects', icon: FolderKanban },
    { id: 'Analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'AI Agents', label: 'AI Agents', icon: Bot },
    { id: 'Team', label: 'Team', icon: Users },
    { id: 'Settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-56 bg-white/70 lg:bg-[#F8F9FE]/60 border-r border-purple-100/60 p-5 flex flex-col justify-between shrink-0 select-none">
      <div>
        {/* Brand in Sidebar */}
        <div className="flex items-center gap-2.5 px-2 py-2 mb-6">
          <div className="w-7 h-7 flex items-center justify-center">
            <img
              src="/assets/codexalogo.png"
              alt="Codexa"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-lg text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans']">
            Codexa
          </span>
        </div>

        {/* Navigation list */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem && setActiveItem(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-150 text-left ${
                  isActive
                    ? 'bg-[#EAE6FE] text-[#5B3DF5] font-semibold shadow-xs'
                    : 'text-[#4A5568] hover:text-[#080A24] hover:bg-white/80'
                }`}
              >
                <Icon
                  className={`w-[18px] h-[18px] transition-colors ${
                    isActive ? 'text-[#5B3DF5]' : 'text-[#64748B]'
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Pro / Help mini badge */}
      <div className="pt-4 border-t border-purple-100/40 px-2">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50/50 border border-purple-100/50 text-xs text-purple-900">
          <p className="font-semibold text-[#5B3DF5]">Workspace Live</p>
          <p className="text-[11px] text-[#64748B] mt-0.5">All agents operational</p>
        </div>
      </div>
    </aside>
  );
}
