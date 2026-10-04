import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Partners from './components/Partners.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Process from './components/Process.jsx';
import RecentWork from './components/RecentWork.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenContact = () => setContactModalOpen(true);
    window.addEventListener('open-contact-modal', handleOpenContact);
    return () => window.removeEventListener('open-contact-modal', handleOpenContact);
  }, []);

  const openContact = () => setContactModalOpen(true);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#080A24] selection:bg-[#5B3DF5] selection:text-white antialiased font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation */}
      <Navbar onOpenContact={openContact} />

      <main>
        {/* Hero Section with Cloud Background, Floating Badges, and Dashboard Showcase */}
        <Hero onOpenContact={openContact} />

        {/* Trusted By / Partners Strip */}
        <Partners />

        {/* Services & Capabilities */}
        <Services />

        {/* Why Choose Codexa Metrics */}
        <WhyChooseUs />

        {/* 3-Step Process & Interactive Project Wizard */}
        <Process />

        {/* Recent Work Showcase (with Kangaroo, Blind AI, SpendSense, Planitory, and Norvique) */}
        <RecentWork />

        {/* Pricing Plans Section */}
        <Pricing />
      </main>

      {/* Footer */}
      <Footer onOpenContact={openContact} />

      {/* Persistent Bottom-Right Floating WhatsApp Widget */}
      <FloatingWhatsApp onOpenModal={openContact} />

      {/* Contact Me / WhatsApp QR Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
