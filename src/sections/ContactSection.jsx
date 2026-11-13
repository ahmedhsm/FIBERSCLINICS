import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  MessageCircle, 
  Navigation, 
  Calendar,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { generateWhatsAppReservationLink } from '../utils/whatsappHelpers';

export default function ContactSection({ lang, onOpenBookingWithBranch }) {
  const isAr = lang === 'ar';
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        
        {/* ================================================================= */}
        {/* BRANCH SHOWCASE (NEW CAIRO - PLATINUM CLUB)                      */}
        {/* ================================================================= */}
        <div className="branches-showcase-wrapper" id="branches">
          <div className="section-header-center">
            <div className="section-eyebrow">
              <MapPin size={16} className="text-emerald" />
              <span>{isAr ? 'مقر عيادة فايبرز' : 'Our Clinic Location'}</span>
            </div>
            <h2 className="section-title">
              {isAr ? 'مقرنا الرئيسي في التجمع الخامس' : 'Our Flagship Clinic in New Cairo'}
            </h2>
            <p className="section-subtitle">
              {isAr 
                ? 'تفضل بزيارتنا في التجمع الخامس داخل Platinum Club (قطامية ريزيدنس)؛ مركزنا مجهز بأعلى المعايير الطبية العالمية وأحدث أجهزة العلاج الطبيعي والتأهيل الحركي.'
                : 'Visit us in New Cairo inside Platinum Club (Katameya Residence). Our center features elite medical equipment, advanced recovery technology, and certified clinical specialists.'}
            </p>
          </div>

          <div className="two-branches-grid">
            {clinicData.branches.map((b) => {
              const branchWhatsAppUrl = generateWhatsAppReservationLink({
                branch: isAr ? b.nameAr : b.nameEn,
                lang: lang
              });

              return (
                <div key={b.id} className="branch-card-detailed">
                  <div className="branch-card-top">
                    <div className="branch-badge-pill">
                      <MapPin size={14} />
                      <span>{isAr ? b.cityAr : b.cityEn}</span>
                    </div>
                    <span className="branch-highlight-badge">
                      {isAr ? b.badgeAr : b.badgeEn}
                    </span>
                  </div>

                  <h3 className="branch-card-name">
                    {isAr ? b.nameAr : b.nameEn}
                  </h3>

                  <p className="branch-card-address">
                    {isAr ? b.addressAr : b.addressEn}
                  </p>

                  <div className="branch-info-list">
                    <div className="branch-info-item">
                      <Navigation size={16} className="info-icon" />
                      <span>{isAr ? b.landmarkAr : b.landmarkEn}</span>
                    </div>

                    <div className="branch-info-item">
                      <Clock size={16} className="info-icon" />
                      <span>{isAr ? b.hoursAr : b.hoursEn}</span>
                    </div>

                    <div className="branch-info-item">
                      <Phone size={16} className="info-icon" />
                      <a href={`tel:${b.phone}`} className="phone-link">{b.phone}</a>
                    </div>
                  </div>

                  {/* Branch Action Buttons */}
                  <div className="branch-card-actions">
                    <button
                      onClick={() => onOpenBookingWithBranch(b.id)}
                      className="btn-branch-book"
                    >
                      <Calendar size={16} />
                      <span>{isAr ? 'احجز في هذا الفرع' : 'Book at This Branch'}</span>
                    </button>

                    <a
                      href={b.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-branch-map"
                      title={isAr ? 'فتح على خرائط جوجل' : 'Open in Google Maps'}
                    >
                      <ExternalLink size={16} />
                      <span>{isAr ? 'اللوكيشن' : 'Map'}</span>
                    </a>

                    <a
                      href={branchWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-branch-wa"
                      title={isAr ? 'تواصل مع الفرع عبر واتساب' : 'Chat with branch'}
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* FAQS ACCORDION                                                    */}
        {/* ================================================================= */}
        <div className="faqs-wrapper">
          <div className="section-header-center">
            <div className="section-eyebrow">
              <HelpCircle size={16} className="text-emerald" />
              <span>{isAr ? 'إجابات واضحة' : 'Frequently Asked Questions'}</span>
            </div>
            <h2 className="section-title">
              {isAr ? 'الأسئلة الشائعة حول حجز الجلسات' : 'Common Inquiries'}
            </h2>
          </div>

          <div className="faqs-accordion">
            {clinicData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="faq-question-btn"
                  >
                    <span>{isAr ? faq.qAr : faq.qEn}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{isAr ? faq.aAr : faq.aEn}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
