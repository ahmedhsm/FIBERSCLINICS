import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  CalendarCheck, 
  Globe, 
  Menu, 
  X, 
  MapPin, 
  PhoneCall 
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { generateDoctorInquiryLink } from '../utils/whatsappHelpers';
import fibersLogo from '../assets/FIBERS_Wordmark_White.png';
import { InstagramIcon, TikTokIcon } from './SocialIcons';

export default function Navbar({ lang, setLang, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const doctorWhatsAppUrl = generateDoctorInquiryLink(lang);

  const toggleLang = () => {
    const nextLang = isAr ? 'en' : 'ar';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };

  const navLinks = [
    { href: '#about', labelAr: 'عن فايبرز', labelEn: 'About' },
    { href: '#philosophy', labelAr: 'فلسفتنا', labelEn: 'Philosophy' },
    { href: '#why-trust', labelAr: 'لماذا فايبرز؟', labelEn: 'Why FIBERS' },
    { href: '#services', labelAr: 'الخدمات العلاجية', labelEn: 'Services' },
    { href: '#spine-health', labelAr: 'سلسلة العمود الفقري', labelEn: 'Spine Health' },
    { href: '#branches', labelAr: 'مقر العيادة (التجمع)', labelEn: 'Location' },
    { href: '#contact', labelAr: 'تواصل معنا', labelEn: 'Contact' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Brand Logo */}
        <a href="#" className="navbar-brand" aria-label="FIBERS Physiotherapy Clinic">
          <img 
            src={fibersLogo} 
            alt="FIBERS Physiotherapy Clinic" 
            className="brand-logo-img" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="nav-link"
            >
              {isAr ? link.labelAr : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          
          {/* Social Media Links */}
          <div className="navbar-social-links">
            <a 
              href={clinicData.info.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-social-icon-btn instagram"
              title="Instagram: fibers.physioclinic"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a 
              href={clinicData.info.socials.tiktok} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-social-icon-btn tiktok"
              title="TikTok: @fibers.physioclinic"
              aria-label="TikTok"
            >
              <TikTokIcon size={16} />
            </a>
          </div>

          {/* Language Switcher */}
          <button 
            onClick={toggleLang}
            className="btn-lang-toggle"
            title={isAr ? "Switch to English" : "التبديل إلى العربية"}
          >
            <Globe size={16} />
            <span>{isAr ? 'EN' : 'العربية'}</span>
          </button>

          {/* Ask the Doctor (Matching docs reference) */}
          <a
            href={doctorWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ask-doctor"
          >
            <Stethoscope size={16} />
            <span>{isAr ? 'استشر الطبيب' : 'Ask the Doctor'}</span>
          </a>

          {/* Book Now Emerald CTA */}
          <button 
            onClick={onOpenBooking}
            className="btn-navbar-book"
          >
            <CalendarCheck size={17} />
            <span>{isAr ? 'احجز موعدك' : 'Book Now'}</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-list">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                onClick={handleNavClick}
                className="mobile-nav-item"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-actions">
            <button 
              onClick={() => {
                handleNavClick();
                onOpenBooking();
              }}
              className="btn-mobile-book"
            >
              <CalendarCheck size={18} />
              <span>{isAr ? 'احجز موعدك الآن' : 'Book Appointment'}</span>
            </button>

            <a
              href={doctorWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="btn-mobile-doctor"
            >
              <Stethoscope size={18} />
              <span>{isAr ? 'استشارة طبية سريعة' : 'Ask the Doctor'}</span>
            </a>

            <div className="mobile-social-row">
              <a 
                href={clinicData.info.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-social-btn instagram"
                title="Instagram"
              >
                <InstagramIcon size={18} />
                <span>Instagram</span>
              </a>
              <a 
                href={clinicData.info.socials.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-social-btn tiktok"
                title="TikTok"
              >
                <TikTokIcon size={18} />
                <span>TikTok</span>
              </a>
            </div>

            <div className="mobile-branch-quickinfo">
              <div className="mobile-branch-row">
                <MapPin size={15} />
                <span>{isAr ? 'التجمع الخامس: Platinum Club (أمام ملاعب البادل)' : 'New Cairo: Platinum Club (Opp. Padel Courts)'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
