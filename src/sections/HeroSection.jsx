import React from 'react';
import { 
  CalendarCheck, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  MapPin, 
  Flame, 
  Activity,
  Award,
  Users
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import heroBgImg from '../assets/hero-bg.jpg';

export default function HeroSection({ lang, onOpenBooking }) {
  const isAr = lang === 'ar';
  const NextArrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="hero-section" id="about">
      {/* Background athletic photo & overlay */}
      <div className="hero-bg-image-wrapper">
        <img src={heroBgImg} alt="FIBERS Physiotherapy Clinic" className="hero-bg-image" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-container">
        
        {/* Top Badge (Directly from UI/UX poster) */}
        <div className="hero-badge animate-fade-in">
          <span className="badge-pulse-dot" />
          <span className="badge-text">
            {isAr 
              ? 'أيدي خبيرة وموثوقة لتعافيك • TRUSTED HANDS FOR YOUR HEALING' 
              : 'TRUSTED HANDS FOR YOUR HEALING • EXPERT PHYSIOTHERAPY'}
          </span>
        </div>

        {/* Brand Slogan Tag */}
        <div className="hero-slogan-pill">
          <span>{isAr ? 'استشفاء • إعادة تأهيل • أعلى أداء' : 'RECOVER • REBUILD • PERFORM'}</span>
        </div>

        {/* Main Headline (Directly matching docs/uiux.jpeg) */}
        <h1 className="hero-title animate-slide-up">
          {isAr ? (
            <>
              جسم أقوى، <span className="hero-accent-text">لحياة أفضل.</span>
              <span className="hero-title-subline">ألم أقل. حركة أكثر.</span>
            </>
          ) : (
            <>
              Strong Body, <span className="hero-accent-text">Stronger You.</span>
              <span className="hero-title-subline">Less pain. More movement.</span>
            </>
          )}
        </h1>

        {/* Subtitle (Matching Card 1 & 5 in docs/uiux.jpeg) */}
        <p className="hero-subtitle animate-slide-up-delay">
          {isAr ? (
            <>
              خبرة متقدمة ورعاية فردية دقيقة في عيادات <strong>FIBERS</strong> للعلاج الطبيعي والتأهيل الرياضي — حيث تعافيك وأداؤك الحركي أولويتنا القصوى.
              أكثر من <strong>1,500 حالة تعافي ناجحة</strong> في مقرنا بالتجمع الخامس (Platinum Club).
            </>
          ) : (
            <>
              Experience lasting relief, athletic precision, and personalized care at <strong>FIBERS</strong> physiotherapy clinic — where your recovery is our priority.
              Backed by <strong>1,500+ proven recoveries</strong> at our flagship clinic in New Cairo (Platinum Club).
            </>
          )}
        </p>

        {/* CTA Actions */}
        <div className="hero-cta-group animate-slide-up-delay-2">
          <button 
            onClick={onOpenBooking} 
            className="btn-hero-primary"
          >
            <CalendarCheck size={20} />
            <span>{isAr ? 'احجز جلستك الآن' : 'Book Your Session'}</span>
          </button>

          <a 
            href="#services" 
            className="btn-hero-secondary"
          >
            <span>{isAr ? 'استكشف الخدمات العلاجية' : 'Explore Services'}</span>
            <NextArrow size={18} />
          </a>
        </div>

        {/* Branch Quick Indicator */}
        <div className="hero-branches-tag">
          <MapPin size={16} className="text-emerald" />
          <span>
            {isAr 
              ? 'مقر العيادة: التجمع الخامس - داخل Platinum Club (أمام ملاعب البادل مباشرة)' 
              : 'Clinic Location: New Cairo - Inside Platinum Club (Directly opp. Padel Courts)'}
          </span>
        </div>

        {/* Stats Strip */}
        <div className="hero-stats-strip">
          {clinicData.stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-card">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">
                {isAr ? stat.labelAr : stat.labelEn}
              </span>
            </div>
          ))}
        </div>

        {/* Key Pillars Highlights (Directly from Card 1 in docs/uiux.jpeg) */}
        <div className="hero-features-grid">
          <div className="hero-mini-feature">
            <div className="mini-icon-number">01</div>
            <div>
              <h4>{isAr ? 'علاج الجهاز العضلي الهيكلي' : 'Musculoskeletal Therapy'}</h4>
              <p>{isAr ? 'تأهيل آلام المفاصل، الأوتار، التمزق العضلي، والخشونة بأحدث تقنيات العلاج اليدوي' : 'Advanced manual therapy for joints, tendons, and chronic pain'}</p>
            </div>
          </div>

          <div className="hero-mini-feature">
            <div className="mini-icon-number">02</div>
            <div>
              <h4>{isAr ? 'التأهيل ما بعد العمليات الجراحية' : 'Post-Surgical Rehabilitation'}</h4>
              <p>{isAr ? 'بروتوكولات متخصصة للتعافي بعد جراحات الرباط الصليبي، الغضروف، وتثبيت الفقرات' : 'Validated recovery protocols for ACL, meniscus, and spine surgeries'}</p>
            </div>
          </div>

          <div className="hero-mini-feature">
            <div className="mini-icon-number">03</div>
            <div>
              <h4>{isAr ? 'الإصابات الرياضية وإعادة التأهيل' : 'sport injury and rehabilitation'}</h4>
              <p>{isAr ? 'تقييم وعلاج الإصابات الرياضية من خلال برامج تأهيل متخصصة ومبنية على أسس علمية، لمساعدة الرياضيين على التعافي والعودة الآمنة لممارسة الرياضة' : 'Specialized assessment and evidence-based rehabilitation programs to help athletes recover from injuries and safely return to sport.'}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
