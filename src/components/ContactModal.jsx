import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  Mail,
  ExternalLink,
  Copy,
  Check,
  MessageCircle,
  MapPin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const phoneNumber = '+371 26161256';
  const whatsappUrl = 'https://wa.me/qr/IGIJKXHMGHKED1?s=r';
  const emailAddress = 'ranjeetserious8@gmail.com';

  const copyToClipboard = (text, type) => {
    navigator.clipboard?.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#080A24]/75 backdrop-blur-md transition-opacity duration-200"
      />

      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-purple-100 overflow-hidden z-10 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#080A24] via-[#12163A] to-[#1F174B] p-5 sm:p-6 text-white relative flex items-start justify-between">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-32 bg-[#25D366]/20 blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3.5 relative z-10">
            {/* Avatar Pill */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8168F6] to-[#5B3DF5] flex items-center justify-center text-white font-bold text-lg ring-2 ring-white/20 shadow-md">
                R
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#080A24] animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans'] tracking-tight">
                  Contact Ranjeet
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 px-2 py-0.5 rounded-full">
                  <Sparkles className="w-2.5 h-2.5" />
                  Live Available
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-0.5 flex items-center gap-1.5">
                <span>Founder & Lead Engineer at Codexa</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-gray-400">
                  <MapPin className="w-3 h-3 text-purple-400" /> Latvia
                </span>
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer relative z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          
          {/* Main 2-Column Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* LEFT COLUMN: Official WhatsApp QR Card */}
            <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#F0FDF4] to-[#DCFCE7]/40 p-4 sm:p-5 rounded-3xl border border-[#25D366]/30 shadow-inner">
              <div className="relative group max-w-[220px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white">
                <img
                  src="/assets/ranjeet-whatsapp-qr.png"
                  alt="Ranjeet WhatsApp Contact QR Code"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-102"
                />
              </div>

              <div className="mt-3.5 space-y-1">
                <p className="text-xs font-bold text-gray-900 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  Scan to Chat on WhatsApp
                </p>
                <p className="text-[11px] text-gray-600">
                  Open phone camera or WhatsApp & point at code
                </p>
              </div>

              {/* Direct Click Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md shadow-[#25D366]/25 hover:shadow-lg transition-all duration-200"
              >
                {/* WhatsApp SVG Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.09 19.11L7.79 18.94L4.69 19.75L5.51 16.73L5.32 16.42C4.55 15.19 4.14 13.57 4.14 11.91C4.14 7.37 7.84 3.67 12.05 3.67M9.53 7.33C9.35 7.33 9.05 7.4 8.79 7.68C8.54 7.96 7.82 8.63 7.82 10.01C7.82 11.39 8.82 12.72 8.96 12.91C9.1 13.1 10.92 15.9 13.7 17.1C14.36 17.39 14.88 17.56 15.28 17.69C15.94 17.9 16.55 17.87 17.03 17.8C17.56 17.72 18.66 17.13 18.89 16.49C19.12 15.85 19.12 15.3 19.05 15.19C18.98 15.07 18.8 15 18.53 14.87C18.26 14.73 16.94 14.08 16.69 13.99C16.45 13.9 16.27 13.85 16.09 14.13C15.91 14.41 15.39 15.01 15.23 15.2C15.07 15.38 14.92 15.4 14.65 15.27C14.37 15.13 13.5 14.84 12.46 13.92C11.66 13.2 11.11 12.31 10.96 12.03C10.8 11.76 10.94 11.61 11.08 11.47C11.2 11.35 11.35 11.15 11.49 10.99C11.63 10.83 11.67 10.71 11.76 10.53C11.85 10.35 11.81 10.19 11.74 10.05C11.67 9.92 11.13 8.58 10.9 8.04C10.68 7.51 10.45 7.58 10.28 7.57C10.12 7.56 9.94 7.56 9.76 7.56C9.57 7.56 9.35 7.33 9.53 7.33Z" />
                </svg>
                <span>Click to Open WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* RIGHT COLUMN: Quick Contact Channels & Phone */}
            <div className="space-y-4">
              
              {/* Phone / WhatsApp Box */}
              <div className="bg-[#FAFBFD] p-4 rounded-2xl border border-gray-200/80 shadow-2xs hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                    Direct Phone & WhatsApp
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                    Available
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <a
                    href="tel:+37126161256"
                    className="text-lg font-extrabold text-[#080A24] hover:text-[#5B3DF5] font-mono tracking-tight transition-colors"
                  >
                    {phoneNumber}
                  </a>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => copyToClipboard(phoneNumber, 'phone')}
                      className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href="tel:+37126161256"
                      className="inline-flex items-center gap-1 text-xs font-bold bg-[#080A24] hover:bg-[#5B3DF5] text-white px-3 py-2 rounded-xl transition-colors"
                    >
                      <span>Call</span>
                    </a>
                  </div>
                </div>
                {copiedPhone && (
                  <p className="text-[11px] text-emerald-600 font-medium mt-1">
                    Phone number copied to clipboard!
                  </p>
                )}
              </div>

              {/* Email Box */}
              <div className="bg-[#FAFBFD] p-4 rounded-2xl border border-gray-200/80 shadow-2xs hover:border-purple-300 transition-colors">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span className="font-semibold text-gray-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#5B3DF5]" />
                    Direct Email
                  </span>
                  <span className="text-[10px] text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded-full">
                    1-Hour Reply
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-bold text-[#080A24] hover:text-[#5B3DF5] font-mono transition-colors truncate max-w-[200px] sm:max-w-none"
                  >
                    {emailAddress}
                  </a>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => copyToClipboard(emailAddress, 'email')}
                      className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="inline-flex items-center gap-1 text-xs font-bold bg-[#5B3DF5] hover:bg-[#492ee0] text-white px-3 py-2 rounded-xl transition-colors"
                    >
                      <span>Email</span>
                    </a>
                  </div>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-emerald-600 font-medium mt-1">
                    Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Social Channels Strip */}
              <div className="pt-1">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                  Social Channels
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-gray-200 hover:border-[#25D366] hover:bg-emerald-50/50 transition-all text-center group"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-800">WhatsApp</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/codexa_building_mvp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-gray-200 hover:border-pink-400 hover:bg-pink-50/50 transition-all text-center group"
                  >
                    <div className="w-7 h-7 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-gray-800">Instagram</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/ranjeet-kumar-gupta-7b37132a3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all text-center group"
                  >
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-gray-800">LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Quick Notice Banner */}
          <div className="bg-[#FAF5FF] p-3.5 rounded-2xl border border-purple-200 flex items-center justify-between text-xs text-purple-900">
            <span className="font-medium">
              Ready to discuss an MVP, Web App, Mobile App, or AI Agent?
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#5B3DF5] hover:underline flex items-center gap-1 shrink-0 ml-2"
            >
              <span>Instant Chat</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
