import React from 'react';
import { cn } from "@/lib/utils";

export const RadialGradientBackground = ({ 
  className,
  gradientFrom = "#fff",
  gradientTo = "#63e",
  gradientSize = "125% 125%",
  gradientPosition = "50% 10%",
  gradientStop = "40%"
}) => {
  return (
    <div 
      className={cn(
        "absolute inset-0 w-full h-full -z-10 bg-white",
        className
      )}
      style={{
        background: `radial-gradient(${gradientSize} at ${gradientPosition}, ${gradientFrom} ${gradientStop}, ${gradientTo} 100%)`
      }}
    />
  );
};

export default function VideoSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Exact Radial Gradient Background requested by user */}
      <RadialGradientBackground
        gradientFrom="#fff"
        gradientTo="#63e"
        gradientSize="125% 125%"
        gradientPosition="50% 10%"
        gradientStop="40%"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Centered YouTube Video Showcase Card */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Glassmorphic Frame with Outer Glow */}
          <div className="relative p-2.5 sm:p-4 rounded-[28px] sm:rounded-[36px] bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_25px_80px_rgba(102,51,238,0.22),0_10px_30px_rgba(0,0,0,0.06)] ring-1 ring-purple-200/50 overflow-hidden">
            
            {/* 16:9 Aspect Video Container */}
            <div className="relative w-full aspect-video rounded-[20px] sm:rounded-[26px] overflow-hidden bg-black/5 shadow-inner">
              <iframe
                className="w-full h-full absolute inset-0 rounded-[20px] sm:rounded-[26px]"
                src="https://www.youtube.com/embed/MQMhiuolOGY?rel=0&modestbranding=1"
                title="Codexa Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
