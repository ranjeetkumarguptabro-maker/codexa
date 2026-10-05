import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

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
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare mailto link with details
    const subject = encodeURIComponent(`Project Inquiry from ${formData.firstName} ${formData.lastName}`.trim() || 'Project Inquiry for Codexa');
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}\n`
    );

    // Open mail client after brief delay
    setTimeout(() => {
      window.location.href = `mailto:ranjeetserious8@gmail.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
      {/* Backdrop with dark blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#080A24]/65 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Main Lavender Contact Form Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_25px_80px_rgba(91,61,245,0.2)] border border-purple-100 overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-[#080A24] flex items-center justify-center transition-colors cursor-pointer z-20"
          title="Close (Esc)"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* ==============================================================
              LEFT COLUMN: CONTACT FORM
             ============================================================== */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Top Tag & Title */}
              <div className="mb-6">
                <span className="text-[11px] font-extrabold text-[#5B3DF5] tracking-widest uppercase block font-['Plus_Jakarta_Sans'] mb-1.5">
                  CONTACT
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#080A24] tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
                  Let’s build something great
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2.5 leading-relaxed">
                  Fill out the form and I’ll get back to you shortly. <br className="hidden sm:inline" />
                  No obligations, just a friendly conversation.
                </p>
              </div>

              {submitted ? (
                /* Success State */
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center my-6 space-y-2">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-bold text-base text-[#080A24]">Thank you for reaching out!</h4>
                  <p className="text-xs text-emerald-700">
                    Your inquiry has been opened in your email client. You can also connect instantly on WhatsApp!
                  </p>
                  <a
                    href="https://wa.me/qr/IGIJKXHMGHKED1?s=r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold shadow-md transition-all mt-2"
                  >
                    <img src="/assets/whatsapp-custom-icon.png" alt="" className="w-4 h-4 object-contain" />
                    <span>Chat on WhatsApp Now</span>
                  </a>
                </div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* First Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-200/90 focus:border-[#5B3DF5] focus:ring-2 focus:ring-[#5B3DF5]/15 bg-white text-xs sm:text-sm text-[#080A24] placeholder-gray-400 outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-200/90 focus:border-[#5B3DF5] focus:ring-2 focus:ring-[#5B3DF5]/15 bg-white text-xs sm:text-sm text-[#080A24] placeholder-gray-400 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email address & Phone number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Email address */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-200/90 focus:border-[#5B3DF5] focus:ring-2 focus:ring-[#5B3DF5]/15 bg-white text-xs sm:text-sm text-[#080A24] placeholder-gray-400 outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* Phone number */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-200/90 focus:border-[#5B3DF5] focus:ring-2 focus:ring-[#5B3DF5]/15 bg-white text-xs sm:text-sm text-[#080A24] placeholder-gray-400 outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 flex items-start pointer-events-none text-gray-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="w-full pl-10 pr-3.5 py-3 rounded-2xl border border-gray-200/90 focus:border-[#5B3DF5] focus:ring-2 focus:ring-[#5B3DF5]/15 bg-white text-xs sm:text-sm text-[#080A24] placeholder-gray-400 outline-none transition-all shadow-xs resize-none"
                    />
                  </div>

                  {/* Row 4: Agreement Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agreed"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 text-[#5B3DF5] border-gray-300 rounded focus:ring-[#5B3DF5] cursor-pointer"
                    />
                    <label htmlFor="agreed" className="text-xs text-[#64748B] cursor-pointer select-none leading-relaxed">
                      I agree to be contacted via email or phone about services and updates.
                    </label>
                  </div>

                  {/* Row 5: Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#5B3DF5] hover:bg-[#4E32E5] text-white font-bold text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded-2xl shadow-[0_10px_25px_rgba(91,61,245,0.35)] hover:shadow-[0_14px_30px_rgba(91,61,245,0.5)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 group"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Direct Contact Info Footer Bar */}
            <div className="pt-5 mt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-[#080A24]">Available for new projects</span>
              </div>
              <div className="flex items-center gap-3">
                <a href="tel:+37126161256" className="hover:text-[#5B3DF5] transition-colors font-medium">
                  +371 26161256
                </a>
                <span>•</span>
                <a href="mailto:ranjeetserious8@gmail.com" className="hover:text-[#5B3DF5] transition-colors font-medium">
                  ranjeetserious8@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ==============================================================
              RIGHT COLUMN: LAVENDER CARD WITH OFFICIAL QR CODE
             ============================================================== */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#F4F3FF] via-[#F8F7FF] to-[#ECE9FE] p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center relative border-t lg:border-t-0 lg:border-l border-purple-100/70 overflow-hidden">
            
            {/* Ambient Background Glow Circles */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-purple-300/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-blue-200/30 rounded-full blur-2xl pointer-events-none" />

            {/* Center Dashed Box (Matching Modern Lavender Contact Form Mockup) */}
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[300px] bg-white/75 backdrop-blur-md rounded-3xl border-2 border-dashed border-purple-300/90 p-6 flex flex-col items-center text-center shadow-[0_8px_25px_rgba(91,61,245,0.06)] hover:border-[#5B3DF5]/60 transition-all">
              
              {/* WhatsApp QR Code Image */}
              <div className="relative w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm border border-purple-100 bg-white p-2 flex items-center justify-center">
                <img
                  src="/assets/ranjeet-whatsapp-qr.png"
                  alt="Ranjeet WhatsApp QR Code"
                  className="w-full h-full object-contain select-none"
                />
              </div>

              {/* Title & Description Below QR */}
              <h4 className="text-sm sm:text-base font-bold text-[#080A24] font-['Plus_Jakarta_Sans'] mt-4 leading-tight">
                Scan with WhatsApp
              </h4>
              <p className="text-[11px] text-[#64748B] mt-1 leading-snug">
                Connect instantly with Ranjeet on WhatsApp for fast response and quotes.
              </p>

              {/* Quick WhatsApp Action Button */}
              <a
                href="https://wa.me/qr/IGIJKXHMGHKED1?s=r"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-sm transition-all hover:scale-105"
              >
                <img src="/assets/whatsapp-custom-icon.png" alt="" className="w-3.5 h-3.5 object-contain" />
                <span>Open WhatsApp</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

            </div>

            {/* Bottom verified badge */}
            <div className="relative z-10 mt-4 text-[11px] text-[#64748B] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#5B3DF5]" />
              <span>Direct personal line • Latvia (+371)</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
