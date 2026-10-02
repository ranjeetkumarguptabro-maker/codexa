import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(91,61,245,0.05)] border-b border-purple-100/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* LEFT: Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
            <img
              src="/assets/codexalogo.png"
              alt="Codexa Logo"
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#080A24] font-['Plus_Jakarta_Sans']">
            Codexa
          </span>
        </a>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-[#4B5563]">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#5B3DF5] font-semibold'
                    : 'text-[#4A5568] hover:text-[#5B3DF5]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5B3DF5] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#080A24] hover:bg-[#161B46] text-white text-[14px] font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:translate-y-[-1px]"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#080A24] hover:bg-white/80 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 px-6 py-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeTab === link.name
                    ? 'bg-purple-50 text-[#5B3DF5] font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#080A24] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
