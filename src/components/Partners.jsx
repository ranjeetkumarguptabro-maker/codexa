import React from 'react';

export default function Partners() {
  const partners = [
    {
      name: 'stripe',
      icon: (
        <span className="font-extrabold text-base tracking-tighter text-[#635BFF]">
          stripe
        </span>
      ),
    },
    {
      name: 'supabase',
      icon: (
        <div className="flex items-center gap-1.5">
          <img
            src="/assets/651ab542d65a7b79a0858e41_646dfce3b9c4849f6e401bff_supabase-logo-icon_1.png"
            alt="Supabase"
            className="w-4 h-4 object-contain"
          />
          <span className="font-bold text-[13px] text-[#1E293B]">supabase</span>
        </div>
      ),
    },
    {
      name: 'OpenAI',
      icon: (
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.5992 3.8558L13.1038 8.383 15.1239 7.2147a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6725a.79.79 0 0 0-.4076-.6813l-.0011-.005zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.407 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6644v-.042zm-12.6413 4.1396l-2.0199-1.1636a.071.071 0 0 1-.038-.052V6.0716a4.504 4.504 0 0 1 7.371-3.4539l-.142.0805-4.7784 2.7582a.7948.7948 0 0 0-.3927.6813v6.7369zm1.2681-2.0009l2.7486-1.5855 2.7487 1.5855v3.1709l-2.7487 1.5855-2.7486-1.5855z" />
          </svg>
          <span className="font-bold text-[13px] text-[#1E293B]">OpenAI</span>
        </div>
      ),
    },
    {
      name: 'Vercel',
      icon: (
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
            <path d="M24 22.525H0l12-21.05 12 21.05z" />
          </svg>
          <span className="font-bold text-[13px] text-[#1E293B]">Vercel</span>
        </div>
      ),
    },
    {
      name: 'Google Cloud',
      icon: (
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
            />
          </svg>
          <span className="font-bold text-[13px] text-[#1E293B]">Google Cloud</span>
        </div>
      ),
    },
  ];

  return (
    <div className="py-14 bg-white border-y border-purple-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Label */}
          <div className="text-center md:text-left shrink-0">
            <p className="text-xs sm:text-[13px] font-semibold text-[#64748B] tracking-wide max-w-[180px]">
              Trusted by startups <br className="hidden md:inline" />
              and growing businesses
            </p>
          </div>

          {/* Partner Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="px-5 py-2.5 rounded-full bg-[#FAFAFE] border border-[#EAEBFA] hover:border-purple-200 hover:shadow-xs transition-all duration-200 cursor-default flex items-center justify-center"
              >
                {partner.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
