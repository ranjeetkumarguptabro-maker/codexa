import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const handleOpenContactModal = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.dispatchEvent(new CustomEvent('open-contact-modal'));
    }
  };

  return (
    <footer id="contact" className="py-16 sm:py-20 bg-[#FAFBFD] relative overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-purple-200/25 via-blue-100/20 to-pink-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Outer White Card Container (Matching Pastel Purple SaaS Footer CTA) */}
        <div className="rounded-[36px] sm:rounded-[44px] bg-white border border-[#E9E6FA] shadow-[0_20px_70px_rgba(91,61,245,0.06)] p-6 sm:p-10 md:p-12 lg:p-14">
          
          {/* Top Banner CTA Card */}
          <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#F0F3FE] via-[#F4F1FE] to-[#ECE7FE] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-purple-100/70 shadow-[0_8px_30px_rgba(91,61,245,0.03)] relative overflow-hidden">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
                Ready to turn your vision into a{' '}
                <span className="text-[#5B3DF5]">high-impact product?</span>
              </h3>
              <p className="text-[#64748B] text-sm sm:text-base mt-3 leading-relaxed">
                Let's build your next web app, mobile app, SaaS platform, or AI agent together.
              </p>
              
              {/* Contact Info Row */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold mt-5 text-[#080A24]">
                <a
                  href="tel:+37126161256"
                  className="flex items-center gap-1.5 hover:text-[#5B3DF5] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5B3DF5]" />
                  <span>+371 26161256</span>
                </a>
                <span className="text-purple-300">•</span>
                <a
                  href="mailto:ranjeetserious8@gmail.com"
                  className="flex items-center gap-1.5 hover:text-[#5B3DF5] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5B3DF5]" />
                  <span>ranjeetserious8@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 shrink-0">
              <button
                type="button"
                onClick={handleOpenContactModal}
                className="group inline-flex items-center gap-2 bg-[#5B3DF5] hover:bg-[#4E32E5] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(91,61,245,0.35)] hover:shadow-[0_14px_32px_rgba(91,61,245,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/qr/IGIJKXHMGHKED1?s=r"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50/50 text-[#080A24] font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-purple-100/80 hover:border-emerald-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                <img
                  src="/assets/whatsapp-custom-icon.png"
                  alt="WhatsApp"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-[#15803D]">WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Links & Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-12 pb-10 border-b border-gray-100">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4 md:col-span-4">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/codexalogo.png"
                  alt="Codexa Logo"
                  className="w-9 h-9 object-contain"
                />
                <span className="text-2xl font-extrabold tracking-tight text-[#080A24] font-['Plus_Jakarta_Sans']">
                  Codexa
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed max-w-sm">
                We build digital products that grow businesses. High-performance websites, web apps, SaaS and AI agents.
              </p>
              <div className="pt-1">
                <a
                  href="mailto:ranjeetserious8@gmail.com"
                  className="text-xs sm:text-sm font-semibold text-[#5B3DF5] hover:text-[#4A2DE0] flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>ranjeetserious8@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="md:col-span-2 lg:col-span-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans']">
                NAVIGATION
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#475569]">
                <li><a href="#home" className="hover:text-[#5B3DF5] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-[#5B3DF5] transition-colors">Work</a></li>
                <li><a href="#process" className="hover:text-[#5B3DF5] transition-colors">Process</a></li>
                <li><a href="#about" className="hover:text-[#5B3DF5] transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans']">
                SERVICES
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#475569]">
                <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">Web App & SaaS</a></li>
                <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">Mobile Applications</a></li>
                <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">AI Agents & Automation</a></li>
                <li><a href="#services" className="hover:text-[#5B3DF5] transition-colors">UI/UX Design</a></li>
              </ul>
            </div>

            {/* Column 4: Leadership */}
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans']">
                LEADERSHIP
              </h4>
              
              {/* Leadership Pill Card */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-purple-100/90 shadow-[0_4px_16px_rgba(91,61,245,0.04)] mb-4 max-w-xs">
                <div className="w-11 h-11 rounded-2xl bg-[#5B3DF5] flex items-center justify-center text-white font-extrabold text-base shadow-xs shrink-0">
                  R
                </div>
                <div>
                  <p className="text-sm font-bold text-[#080A24] leading-tight">Ranjeet</p>
                  <p className="text-xs text-[#64748B] font-medium">Founder & CEO</p>
                </div>
              </div>

              {/* Social Media Strip */}
              <div className="flex items-center gap-2 text-gray-500">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/qr/IGIJKXHMGHKED1?s=r"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-emerald-50 flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-all hover:scale-105"
                  title="WhatsApp: +371 26161256"
                >
                  <img
                    src="/assets/whatsapp-custom-icon.png"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ranjeetkumarguptabro-maker"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all hover:scale-105"
                  title="GitHub: ranjeetkumarguptabro-maker"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/codexa_building_mvp/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-pink-50 flex items-center justify-center text-gray-600 hover:text-pink-600 transition-all hover:scale-105"
                  title="Instagram: @codexa_building_mvp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ranjeet-kumar-gupta-7b37132a3"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all hover:scale-105"
                  title="LinkedIn: Ranjeet Kumar Gupta"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:ranjeetserious8@gmail.com"
                  className="w-8 h-8 rounded-full bg-[#F3F4F6] hover:bg-purple-50 flex items-center justify-center text-gray-600 hover:text-[#5B3DF5] transition-all hover:scale-105"
                  title="Email: ranjeetserious8@gmail.com"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-[#64748B] gap-4">
            <p>© 2026 Codexa. All rights reserved.</p>
            <div className="flex items-center space-x-6 font-medium">
              <a
                href="/Codexa_Privacy_Policy.pdf"
                download="Codexa_Privacy_Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5B3DF5] transition-colors cursor-pointer"
                title="Download Codexa Privacy Policy (PDF)"
              >
                Privacy Policy
              </a>
              <a
                href="/Codexa_Privacy_Policy.pdf"
                download="Codexa_Privacy_Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#5B3DF5] transition-colors cursor-pointer"
                title="Download Codexa Terms & Policy (PDF)"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
