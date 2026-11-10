import React from 'react';
import { 
  Activity, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  ShieldAlert, 
  Flame, 
  CheckCircle2, 
  MessageSquareCheck,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { generateServiceDirectLink } from '../utils/whatsappHelpers';

const iconMap = {
  Activity,
  Zap,
  ShieldCheck,
  Sparkles,
  ShieldAlert,
  Flame
};

export default function ServiceCard({ service, lang, onSelectService }) {
  const IconComponent = iconMap[service.icon] || Activity;
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  const directWhatsAppUrl = generateServiceDirectLink(
    isAr ? service.titleAr : service.titleEn,
    lang
  );

  return (
    <div className="service-card group">
      <div className="service-card-glow" />
      
      {/* Header with Icon */}
      <div className="service-card-header">
        <div className="service-icon-wrapper">
          <IconComponent className="service-icon" />
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="service-title">
        {isAr ? service.titleAr : service.titleEn}
      </h3>
      <p className="service-desc">
        {isAr ? service.shortDescAr : service.shortDescEn}
      </p>

      {/* Suitable for badge */}
      <div className="service-suitable">
        <span className="suitable-label">{isAr ? 'الجمهور المستهدف:' : 'Target:'}</span>
        <span className="suitable-text">{isAr ? service.suitableForAr : service.suitableForEn}</span>
      </div>

      {/* Bullet Features */}
      <ul className="service-features-list">
        {(isAr ? service.featuresAr : service.featuresEn).map((feat, idx) => (
          <li key={idx} className="service-feature-item">
            <CheckCircle2 size={16} className="feature-check-icon" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="service-card-actions">
        {/* Primary action: Open 4-step booking modal with service pre-selected */}
        <button 
          onClick={() => onSelectService(service)}
          className="btn-service-book"
          aria-label={isAr ? `احجز موعد ${service.titleAr}` : `Book ${service.titleEn}`}
        >
          <span>{isAr ? 'احجز جلستك الآن' : 'Book This Session'}</span>
          <ArrowIcon size={16} />
        </button>

        {/* Secondary fast WhatsApp direct link */}
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-service-wa-direct"
          title={isAr ? 'حجز فوري عبر واتساب مباشرة' : 'Instant WhatsApp message'}
        >
          <MessageSquareCheck size={18} />
        </a>
      </div>
    </div>
  );
}
