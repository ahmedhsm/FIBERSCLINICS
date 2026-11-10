import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  FileCheck2, 
  Zap, 
  Activity, 
  CalendarCheck,
  PhoneCall,
  MapPin
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { generateDoctorInquiryLink } from '../utils/whatsappHelpers';

export default function WhyTrustSection({ lang = 'ar', onOpenBooking }) {
  const isAr = lang === 'ar';
  const doctorConsultUrl = generateDoctorInquiryLink(lang);

  const trustPoints = [
    {
      num: '01',
      titleAr: 'أطباء ومعالجون معتمدون دولياً',
      titleEn: 'Professional Certified Therapists',
      descAr: 'استشاريون وأخصائيون يحملون درجات الماجستير والدكتوراه ودبلومات الطب الرياضي البريطانية والأوروبية.',
      descEn: 'Licensed doctors holding master degrees and British sports medicine diplomas with extensive clinical experience.'
    },
    {
      num: '02',
      titleAr: 'بروتوكولات علاجية مبنية على البراهين',
      titleEn: 'Evidence-Based Clinical Protocols',
      descAr: 'خطط تأهيل مستندة لأحدث الأبحاث العلمية والقياسات البيوميكانيكية الدقيقة، بعيداً عن الحلول المؤقتة.',
      descEn: 'Strictly scientific protocols tailored via kinematic video analysis and validated recovery criteria.'
    },
    {
      num: '03',
      titleAr: 'تسكين سريع ومدروس للآلام',
      titleEn: 'Fast-Track Targeted Pain Relief',
      descAr: 'تقنيات علاج يدوي متطورة وإبر جافة وجلسات تخفيف الضغط المفصلي تبدأ بإراحتك من أول جلسة.',
      descEn: 'Advanced manual therapy, dry needling, and joint decompression for immediate and lasting pain relief.'
    },
    {
      num: '04',
      titleAr: 'برامج تأهيل مخصصة 100% لكل جسم',
      titleEn: '100% Personalized Protocols',
      descAr: 'لا نتبع خططاً مكررة؛ برنامجك مصمم بدقة وفقاً لتشخيصك، قوة عضلاتك، ونمط حياتك اليومي أو رياضتك.',
      descEn: 'Zero generic plans. Your roadmap is customized to your tissue healing stage, biomechanics, and athletic goals.'
    }
  ];

  return (
    <section className="why-trust-section" id="why-trust">
      <div className="section-container">
        
        {/* Main Blue Infographic Card matching Card 7 in docs/uiux.jpeg */}
        <div className="why-trust-card">
          <div className="why-trust-header">
            <div className="why-trust-badge">
              <ShieldCheck size={16} />
              <span>{isAr ? 'معايير الثقة والتميز الطبي' : 'STANDARDS OF EXCELLENCE'}</span>
            </div>
            <h2 className="why-trust-title">
              {isAr ? 'لماذا يثق الرياضيون في عيادات فايبرز؟' : 'WHY TRUST OUR CLINIC?'}
            </h2>
            <p className="why-trust-subtitle">
              {isAr 
                ? 'نجمع بين الخبرة الطبية المعتمدة وأحدث تكنولوجيا الاستشفاء الرياضي لنضمن لك عودة آمنة وسريعة.' 
                : 'Built on clinical precision, sports medicine credentials, and proven outcomes.'}
            </p>
          </div>

          {/* 4 Points Grid */}
          <div className="why-trust-grid">
            {trustPoints.map((item, idx) => (
              <div key={idx} className="trust-item-box">
                <div className="trust-item-top">
                  <span className="trust-num-badge">{item.num}</span>
                  <div className="trust-icon-dot" />
                </div>
                <h3 className="trust-item-title">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>
                <p className="trust-item-desc">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Trust Action Strip */}
          <div className="why-trust-bottom-bar">
            <div className="trust-locations-note">
              <MapPin size={16} className="text-blue" />
              <span>
                {isAr 
                  ? 'متاحون لخدمتك في فرعينا: التجمع الخامس (Platinum Club) وشروق سيتي (Popeyes Gym)' 
                  : 'Serving you across 2 Cairo branches: New Cairo (Platinum Club) & El Shorouk (Popeyes Gym)'}
              </span>
            </div>

            <div className="trust-action-btns">
              <button onClick={onOpenBooking} className="btn-trust-primary">
                <CalendarCheck size={18} />
                <span>{isAr ? 'احجز جلستك الآن' : 'Book Your Session'}</span>
              </button>

              <a 
                href={doctorConsultUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-trust-secondary"
              >
                <span>{isAr ? 'استشارة طبية عبر واتساب' : 'Ask the Doctor'}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

