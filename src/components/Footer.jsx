import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { generateWhatsAppReservationLink } from '../utils/whatsappHelpers';
import fibersLogo from '../assets/FIBERS_Wordmark_White.png';
import { InstagramIcon, TikTokIcon } from './SocialIcons';

export default function Footer({ lang, onOpenBooking }) {
  const isAr = lang === 'ar';
  const Arrow = isAr ? ChevronLeft : ChevronRight;

  const quickWhatsApp = generateWhatsAppReservationLink({ lang });

  return (
    <footer className="clinic-footer">
      <div className="footer-top-wave" />
      
      <div className="footer-container">
        {/* Top Grid */}
        <div className="footer-grid">
          
          {/* Col 1: Brand & Bio */}
          <div className="footer-col footer-col-brand">
            <img 
              src={fibersLogo} 
              alt="FIBERS Physiotherapy Clinic" 
              className="footer-logo-img" 
            />
            <p className="footer-bio">
              {isAr 
                ? 'عيادات فايبرز التخصصية للعلاج الطبيعي، إصابات الملاعب، والتأهيل الحركي المتقدم. مقرنا الرئيسي مجهز بأعلى المعايير العالمية في التجمع الخامس (Platinum Club).'
                : 'FIBERS Specialized Physical Therapy & Sports Performance Clinic. Evidence-based rehabilitation, sports medicine, and elite recovery at our flagship clinic in New Cairo (Platinum Club).'}
            </p>

            <div className="footer-cert-badge">
              <ShieldCheck size={18} className="cert-icon" />
              <span>
                {isAr ? 'معتمدون دولياً في العلاج اليدوي والطب الرياضي' : 'Certified in Manual Therapy & Sports Rehab'}
              </span>
            </div>

            {/* Social Accounts */}
            <div className="footer-social-wrapper">
              <span className="footer-social-title">
                {isAr ? 'تابعنا على المنصات الرسمية:' : 'Follow Official Channels:'}
              </span>
              <div className="footer-social-buttons">
                <a 
                  href={clinicData.info.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn instagram-btn"
                  title="FIBERS on Instagram"
                >
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>
                <a 
                  href={clinicData.info.socials.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn tiktok-btn"
                  title="FIBERS on TikTok"
                >
                  <TikTokIcon size={18} />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Clinic Location */}
          <div className="footer-col footer-col-branches">
            <h4 className="footer-col-title">
              {isAr ? 'مقر العيادة' : 'Our Location'}
            </h4>
            <div className="footer-branches-list">
              {clinicData.branches.map((b) => (
                <div key={b.id} className="footer-branch-item">
                  <div className="footer-branch-name-row">
                    <MapPin size={16} className="branch-pin" />
                    <strong>{isAr ? b.nameAr : b.nameEn}</strong>
                  </div>
                  <p className="footer-branch-text">{isAr ? b.addressAr : b.addressEn}</p>
                  <p className="footer-branch-hours">
                    <Clock size={13} />
                    <span>{isAr ? b.hoursAr : b.hoursEn}</span>
                  </p>
                  <a 
                    href={b.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-branch-map-link"
                  >
                    <span>{isAr ? 'الموقع على الخريطة' : 'View on Google Maps'}</span>
                    <Arrow size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Services */}
          <div className="footer-col footer-col-services">
            <h4 className="footer-col-title">
              {isAr ? 'خدمات التأهيل' : 'Key Services'}
            </h4>
            <ul className="footer-links-list">
              {clinicData.services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="footer-link-item">
                    <Arrow size={14} />
                    <span>{isAr ? s.titleAr : s.titleEn}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Direct WhatsApp */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">
              {isAr ? 'تواصل وحجز مباشر' : 'Fast Contact'}
            </h4>
            
            <div className="footer-contact-info">
              <a href={`tel:${clinicData.info.phoneDisplay}`} className="footer-contact-row">
                <Phone size={16} />
                <span>{clinicData.info.phoneDisplay}</span>
              </a>
            </div>

            <div className="footer-cta-box">
              <p className="footer-cta-text">
                {isAr ? 'احجز جلستك الآن مباشرة عبر محادثة واتساب سريعة:' : 'Book your appointment directly via WhatsApp:'}
              </p>
              <a
                href={quickWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-footer-wa"
              >
                <MessageCircle size={18} />
                <span>{isAr ? 'محادثة وحجز واتساب' : 'Chat & Book on WhatsApp'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} FIBERS Physical Therapy &amp; Performance. {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
          </p>

          <div className="footer-bottom-socials">
            <a 
              href={clinicData.info.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-mini-social"
              title="FIBERS on Instagram"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a 
              href={clinicData.info.socials.tiktok} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-mini-social"
              title="FIBERS on TikTok"
              aria-label="TikTok"
            >
              <TikTokIcon size={16} />
            </a>
          </div>

          <div className="footer-bottom-links">
            <button onClick={onOpenBooking} className="footer-quick-book-btn">
              {isAr ? 'احجز موعدك الآن' : 'Book an Appointment'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
