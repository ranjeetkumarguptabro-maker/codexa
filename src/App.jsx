import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Partners from './components/Partners.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Process from './components/Process.jsx';
import RecentWork from './components/RecentWork.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#080A24] selection:bg-[#5B3DF5] selection:text-white antialiased font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation */}
      <Navbar />

      <main>
        {/* Hero Section with Cloud Background, Floating Badges, and Dashboard Showcase */}
        <Hero />

        {/* Trusted By / Partners Strip */}
        <Partners />

        {/* Services & Capabilities */}
        <Services />

        {/* Why Choose Codexa Metrics */}
        <WhyChooseUs />

        {/* 3-Step Process & Interactive Project Wizard */}
        <Process />

        {/* Recent Work Showcase (with Kangaroo and Blind AI) */}
        <RecentWork />

        {/* Pricing Plans Section */}
        <Pricing />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
