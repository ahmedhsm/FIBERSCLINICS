import React, { useState } from 'react';
import { 
  Activity, 
  Stethoscope, 
  Sparkles, 
  HelpCircle,
  MessageCircle,
  Layers
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import ServiceCard from '../components/ServiceCard';
import { generateDoctorInquiryLink } from '../utils/whatsappHelpers';

export default function ServicesSection({ lang, onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const isAr = lang === 'ar';

  const categories = [
    { id: 'all', labelAr: 'جميع الخدمات', labelEn: 'All Services' },
    { id: 'sports', labelAr: 'إصابات الملاعب والرياضة', labelEn: 'Sports & Rehab' },
    { id: 'spine', labelAr: 'العمود الفقري والغضروف', labelEn: 'Spine & Disc' },
    { id: 'surgery', labelAr: 'ما بعد الجراحة', labelEn: 'Post-Surgical' },
    { id: 'manual', labelAr: 'العلاج اليدوي والإبر', labelEn: 'Manual Therapy' },
    { id: 'joints', labelAr: 'المفاصل والخشونة', labelEn: 'Joint Care' }
  ];

  const filteredServices = activeCategory === 'all'
    ? clinicData.services
    : clinicData.services.filter(s => s.category === activeCategory);

  const doctorConsultUrl = generateDoctorInquiryLink(lang);

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-eyebrow">
            <Sparkles size={16} className="text-emerald" />
            <span>{isAr ? 'برامج علاجية وتأهيلية معتمدة' : 'Clinical Protocols'}</span>
          </div>
          <h2 className="section-title">
            {isAr ? 'خدمات العلاج الطبيعي والتأهيل في FIBERS' : 'Specialized Rehabilitation Services'}
          </h2>
          <p className="section-subtitle">
            {isAr 
              ? 'نجمع بين أحدث التكنولوجيا الطبية وبروتوكولات العلاج الحركي الموجه لتسريع التعافي ومنع تجدد الإصابة.'
              : 'Combining world-class therapeutic modalities and targeted movement therapy for lasting recovery.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs-wrapper">
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              lang={lang} 
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Bottom Consultation Help Banner */}
        <div className="services-help-banner">
          <div className="help-banner-content">
            <div className="help-icon-box">
              <HelpCircle size={28} />
            </div>
            <div className="help-text">
              <h4>
                {isAr 
                  ? 'لست متأكداً أي خدمة تناسب حالتك أو إصابتك؟' 
                  : 'Not sure which recovery service fits your injury?'}
              </h4>
              <p>
                {isAr 
                  ? 'أرسل لنا تقريرك الطبي أو تواصل مباشرة مع أحد أطباء فايبرز على واتساب لتقييم حالتك وتوجيهك للخيار الأمثل.' 
                  : 'Chat directly with a FIBERS consultant on WhatsApp to assess your symptoms and recommend the right program.'}
              </p>
            </div>
          </div>

          <a 
            href={doctorConsultUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-help-doctor"
          >
            <MessageCircle size={18} />
            <span>{isAr ? 'استشارة طبية مجانية عبر واتساب' : 'Consult Doctor on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
