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
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.65)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
        title="Contact on WhatsApp (+371 26161256)"
        aria-label="Contact Ranjeet on WhatsApp"
      >
        {/* Pulsing Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:opacity-50" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#25D366] to-[#20BA5A] -z-10" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.09 19.11L7.79 18.94L4.69 19.75L5.51 16.73L5.32 16.42C4.55 15.19 4.14 13.57 4.14 11.91C4.14 7.37 7.84 3.67 12.05 3.67M9.53 7.33C9.35 7.33 9.05 7.4 8.79 7.68C8.54 7.96 7.82 8.63 7.82 10.01C7.82 11.39 8.82 12.72 8.96 12.91C9.1 13.1 10.92 15.9 13.7 17.1C14.36 17.39 14.88 17.56 15.28 17.69C15.94 17.9 16.55 17.87 17.03 17.8C17.56 17.72 18.66 17.13 18.89 16.49C19.12 15.85 19.12 15.3 19.05 15.19C18.98 15.07 18.8 15 18.53 14.87C18.26 14.73 16.94 14.08 16.69 13.99C16.45 13.9 16.27 13.85 16.09 14.13C15.91 14.41 15.39 15.01 15.23 15.2C15.07 15.38 14.92 15.4 14.65 15.27C14.37 15.13 13.5 14.84 12.46 13.92C11.66 13.2 11.11 12.31 10.96 12.03C10.8 11.76 10.94 11.61 11.08 11.47C11.2 11.35 11.35 11.15 11.49 10.99C11.63 10.83 11.67 10.71 11.76 10.53C11.85 10.35 11.81 10.19 11.74 10.05C11.67 9.92 11.13 8.58 10.9 8.04C10.68 7.51 10.45 7.58 10.28 7.57C10.12 7.56 9.94 7.56 9.76 7.56C9.57 7.56 9.35 7.33 9.53 7.33Z" />
        </svg>

        {/* Online Status Green Dot */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
      </a>
    </aside>
  );
}
