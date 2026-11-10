import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import RecoveryBar from './components/RecoveryBar';
import HeroSection from './sections/HeroSection';
import BrandShowcaseSection from './sections/BrandShowcaseSection';
import WhyTrustSection from './sections/WhyTrustSection';
import ServicesSection from './sections/ServicesSection';
import SpineHealthSection from './sections/SpineHealthSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedBranch, setPreSelectedBranch] = useState(null);
  const [preSelectedService, setPreSelectedService] = useState(null);

  // Sync document language and direction
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleOpenBooking = () => {
    setPreSelectedBranch(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service) => {
    setPreSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithBranch = (branchId) => {
    setPreSelectedBranch(branchId);
    setIsBookingOpen(true);
  };

  return (
    <div className={`fibers-app ${lang === 'ar' ? 'font-arabic' : 'font-latin'}`}>
      {/* Sticky Top Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Main Sections (Directly aligned with docs/uiux.jpeg) */}
      <main>
        <HeroSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        <BrandShowcaseSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        <WhyTrustSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />
        
        <ServicesSection 
          lang={lang} 
          onSelectService={handleSelectService} 
        />

        <SpineHealthSection 
          lang={lang} 
          onOpenBooking={handleOpenBooking} 
        />

        <ContactSection 
          lang={lang} 
          onOpenBookingWithBranch={handleOpenBookingWithBranch} 
        />
      </main>

      {/* Sticky Bottom Recovery Action Bar (Matching docs/bookfeildclinic.jpg) */}
      <RecoveryBar 
        lang={lang} 
        onOpenBooking={handleOpenBooking} 
      />

      {/* Dynamic WhatsApp Floating CTA & 4-Step Reservation Modal */}
      <WhatsAppCTA 
        lang={lang}
        isOpen={isBookingOpen}
        setIsOpen={setIsBookingOpen}
        preSelectedBranch={preSelectedBranch}
        preSelectedService={preSelectedService}
        onClearPreSelectedService={() => {
          setPreSelectedService(null);
          setPreSelectedBranch(null);
        }}
      />

      {/* Global Footer */}
      <Footer 
        lang={lang} 
        onOpenBooking={handleOpenBooking} 
      />
    </div>
  );
}
