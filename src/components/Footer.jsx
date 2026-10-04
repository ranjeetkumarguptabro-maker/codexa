import React from 'react';
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer id="contact" className="bg-[#080A24] text-white pt-20 pb-12 relative overflow-hidden">
      {/* Decorative gradient glow at bottom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#5B3DF5]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Pre-footer CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[#171A42] to-[#121635] border border-purple-900/50 p-8 sm:p-12 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Ready to turn your vision into a <span className="hero-gradient-text">high-impact product?</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Let's build your next web app, mobile app, SaaS platform, or AI agent together.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono mt-3 text-purple-300">
              <a
                href="tel:+37126161256"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+371 26161256</span>
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="mailto:ranjeetserious8@gmail.com"
                className="hover:text-purple-200 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>ranjeetserious8@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (onOpenContact) onOpenContact();
                else window.dispatchEvent(new CustomEvent('open-contact-modal'));
              }}
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#5B3DF5] to-[#7352F7] hover:from-[#522ee6] hover:to-[#683bf0] text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_10px_25px_rgba(91,61,245,0.4)] hover:shadow-[0_15px_30px_rgba(91,61,245,0.6)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="https://wa.me/qr/IGIJKXHMGHKED1?s=r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-md shadow-[#25D366]/20 hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.09 19.11L7.79 18.94L4.69 19.75L5.51 16.73L5.32 16.42C4.55 15.19 4.14 13.57 4.14 11.91C4.14 7.37 7.84 3.67 12.05 3.67M9.53 7.33C9.35 7.33 9.05 7.4 8.79 7.68C8.54 7.96 7.82 8.63 7.82 10.01C7.82 11.39 8.82 12.72 8.96 12.91C9.1 13.1 10.92 15.9 13.7 17.1C14.36 17.39 14.88 17.56 15.28 17.69C15.94 17.9 16.55 17.87 17.03 17.8C17.56 17.72 18.66 17.13 18.89 16.49C19.12 15.85 19.12 15.3 19.05 15.19C18.98 15.07 18.8 15 18.53 14.87C18.26 14.73 16.94 14.08 16.69 13.99C16.45 13.9 16.27 13.85 16.09 14.13C15.91 14.41 15.39 15.01 15.23 15.2C15.07 15.38 14.92 15.4 14.65 15.27C14.37 15.13 13.5 14.84 12.46 13.92C11.66 13.2 11.11 12.31 10.96 12.03C10.8 11.76 10.94 11.61 11.08 11.47C11.2 11.35 11.35 11.15 11.49 10.99C11.63 10.83 11.67 10.71 11.76 10.53C11.85 10.35 11.81 10.19 11.74 10.05C11.67 9.92 11.13 8.58 10.9 8.04C10.68 7.51 10.45 7.58 10.28 7.57C10.12 7.56 9.94 7.56 9.76 7.56C9.57 7.56 9.35 7.33 9.53 7.33Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/codexalogo.png"
                alt="Codexa Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                Codexa
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              We build digital products that grow businesses. High-performance websites, web apps, SaaS and AI agents.
            </p>
            <div className="pt-1">
              <a
                href="mailto:ranjeetserious8@gmail.com"
                className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>ranjeetserious8@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web App & SaaS</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Agents & Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Founder & Connect */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">
              Leadership
            </h4>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8168F6] to-[#5B3DF5] flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <div>
                <p className="text-xs font-bold text-white">Ranjeet</p>
                <p className="text-[11px] text-gray-400">Founder & CEO</p>
              </div>
            </div>
            
            {/* Social Icons Strip */}
            <div className="flex items-center gap-2.5 text-gray-400">
              {/* WhatsApp Live */}
              <a
                href="https://wa.me/qr/IGIJKXHMGHKED1?s=r"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500/20 flex items-center justify-center hover:text-emerald-400 transition-all hover:scale-105"
                title="WhatsApp: +371 26161256"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.09 19.11L7.79 18.94L4.69 19.75L5.51 16.73L5.32 16.42C4.55 15.19 4.14 13.57 4.14 11.91C4.14 7.37 7.84 3.67 12.05 3.67M9.53 7.33C9.35 7.33 9.05 7.4 8.79 7.68C8.54 7.96 7.82 8.63 7.82 10.01C7.82 11.39 8.82 12.72 8.96 12.91C9.1 13.1 10.92 15.9 13.7 17.1C14.36 17.39 14.88 17.56 15.28 17.69C15.94 17.9 16.55 17.87 17.03 17.8C17.56 17.72 18.66 17.13 18.89 16.49C19.12 15.85 19.12 15.3 19.05 15.19C18.98 15.07 18.8 15 18.53 14.87C18.26 14.73 16.94 14.08 16.69 13.99C16.45 13.9 16.27 13.85 16.09 14.13C15.91 14.41 15.39 15.01 15.23 15.2C15.07 15.38 14.92 15.4 14.65 15.27C14.37 15.13 13.5 14.84 12.46 13.92C11.66 13.2 11.11 12.31 10.96 12.03C10.8 11.76 10.94 11.61 11.08 11.47C11.2 11.35 11.35 11.15 11.49 10.99C11.63 10.83 11.67 10.71 11.76 10.53C11.85 10.35 11.81 10.19 11.74 10.05C11.67 9.92 11.13 8.58 10.9 8.04C10.68 7.51 10.45 7.58 10.28 7.57C10.12 7.56 9.94 7.56 9.76 7.56C9.57 7.56 9.35 7.33 9.53 7.33Z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ranjeetkumarguptabro-maker"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center hover:text-white transition-all hover:scale-105"
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
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center hover:text-pink-400 transition-all hover:scale-105"
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
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center hover:text-blue-400 transition-all hover:scale-105"
                title="LinkedIn: Ranjeet Kumar Gupta"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Gmail / Email */}
              <a
                href="mailto:ranjeetserious8@gmail.com"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center hover:text-purple-300 transition-all hover:scale-105"
                title="Email: ranjeetserious8@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Codexa. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
