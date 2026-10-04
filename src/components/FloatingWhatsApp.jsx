import React, { useState } from 'react';
import { QrCode, Sparkles, MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = 'https://wa.me/qr/IGIJKXHMGHKED1?s=r';

  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 pointer-events-auto"
    >
      {/* Tooltip / Floating Pill Label */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-emerald-100 text-xs font-semibold text-[#080A24] transition-all duration-300 ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-90 -translate-x-1 hover:opacity-100'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#080A24] hover:text-[#25D366] transition-colors"
        >
          Chat with Ranjeet <span className="text-gray-400 font-normal ml-0.5">• +371 26161256</span>
        </a>

        {/* QR Code Quick View Icon */}
        {onOpenModal && (
          <button
            onClick={onOpenModal}
            title="View WhatsApp QR Code"
            className="p-1 rounded-md text-gray-400 hover:text-[#25D366] hover:bg-emerald-50 transition-colors ml-1 cursor-pointer"
          >
            <QrCode className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.65)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/50 cursor-pointer p-0"
        title="Contact on WhatsApp (+371 26161256)"
        aria-label="Contact Ranjeet on WhatsApp"
      >
        {/* Pulsing Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:opacity-50" />

        {/* Custom WhatsApp Image provided by user */}
        <img
          src="/assets/whatsapp-custom-icon.png"
          alt="WhatsApp"
          className="w-full h-full object-contain rounded-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105 select-none pointer-events-none"
        />

        {/* Online Status Green Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-xs" />
      </a>
    </aside>
  );
}
