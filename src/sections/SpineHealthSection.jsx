import React from 'react';
import { 
  Activity, 
  HelpCircle, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft,
  CalendarCheck,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { generateDoctorInquiryLink } from '../utils/whatsappHelpers';
import spineBgImg from '../assets/spine-bg.jpg';

export default function SpineHealthSection({ lang = 'ar', onOpenBooking }) {
  const isAr = lang === 'ar';
  const NextArrow = isAr ? ChevronLeft : ChevronRight;
  const doctorConsultUrl = generateDoctorInquiryLink(lang);

  const spineFactors = [
    {
      num: '01',
      titleAr: 'وضعية الجلوس الخاطئة (Poor Posture)',
      titleEn: 'Poor Posture',
      descAr: 'الجلوس المكتبي لساعات طويلة بانحناء يزيد الضغط الميكانيكي على فقرات الظهر السفلية والرقبة بنسبة تفوق 150%.',
      descEn: 'Sitting for long hours puts continuous abnormal pressure on your spinal discs, leading to stiffness and wear.'
    },
    {
      num: '02',
      titleAr: 'عدم توازن العضلات (Muscle Imbalance)',
      titleEn: 'Muscle Imbalance',
      descAr: 'ضعف عضلات الجذع والبطن (Core) مع شد عضلات الظهر والفخذ يجبر العمود الفقري على تحمل أحمال غير متكافئة.',
      descEn: 'A weak core coupled with tight hamstrings and hip flexors forces your spine to overcompensate.'
    },
    {
      num: '03',
      titleAr: 'العادات الحركية اليومية (Daily Habits)',
      titleEn: 'Daily Habits',
      descAr: 'طريقة رفع الأوزان والأحمال، مراتب النوم غير الملائمة، والحركات الدورانية المفاجئة تمثل المسبب الأول للانزلاق الغضروفي.',
      descEn: 'Lifting mechanics, sleeping positions, and repetitive twist motions contribute directly to disc inflammation.'
    }
  ];

  return (
    <section className="spine-health-section" id="spine-health">
      {/* Background spine photo & overlay */}
      <div className="spine-bg-image-wrapper">
        <img src={spineBgImg} alt="Spine Therapy - FIBERS Clinic" className="spine-bg-image" />
        <div className="spine-bg-overlay" />
      </div>

      <div className="section-container">
        
        {/* Section Header matching Card 9 in docs/uiux.jpeg */}
        <div className="section-header-center">
          <div className="section-eyebrow">
            <Activity size={16} className="text-blue" />
            <span>{isAr ? 'سلسلة صحة العمود الفقري والحركة • SPINE HEALTH SERIES' : 'SPINE HEALTH SERIES • FIBERS CLINIC'}</span>
          </div>
          <h2 className="section-title">
            {isAr ? 'لماذا تشعر بآلام الظهر والعمود الفقري؟' : 'WHY DOES YOUR BACK HURT?'}
          </h2>
          <p className="section-subtitle">
            {isAr 
              ? 'ألم الظهر ليس قدراً محتوماً؛ 90% من الحالات ترجع لعوامل ميكانيكية يمكن علاجها وتصحيحها بالكامل دون جراحة.' 
              : 'Understanding the mechanics behind spinal discomfort is your first step toward lifelong, pain-free mobility.'}
          </p>
        </div>

        {/* 3 Spine Factors Cards */}
        <div className="spine-cards-grid">
          {spineFactors.map((factor, idx) => (
            <div key={idx} className="spine-factor-card">
              <div className="spine-card-top">
                <span className="spine-num-pill">{factor.num}</span>
                <span className="spine-tag-label">{isAr ? 'مسبب رئيسي' : 'Key Factor'}</span>
              </div>
              <h3 className="spine-factor-title">
                {isAr ? factor.titleAr : factor.titleEn}
              </h3>
              <p className="spine-factor-desc">
                {isAr ? factor.descAr : factor.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Educational CTA Banner */}
        <div className="spine-cta-banner">
          <div className="spine-cta-content">
            <div className="spine-cta-icon-box">
              <Stethoscope size={28} />
            </div>
            <div>
              <h4 className="spine-cta-title">
                {isAr ? 'هل تعاني من انزلاق غضروفي أو آلام بالفقرات؟' : 'Experiencing chronic back or neck discomfort?'}
              </h4>
              <p className="spine-cta-text">
                {isAr 
                  ? 'يقوم استشاريو فايبرز بإجراء فحص بيوميكانيكي شامل للعمود الفقري لتحديد الضغط الميكانيكي وعلاجه فوراً.' 
                  : 'Get a thorough biomechanical spinal assessment and start your targeted decompression protocol.'}
              </p>
            </div>
          </div>

          <div className="spine-cta-actions">
            <button onClick={onOpenBooking} className="btn-spine-book">
              <CalendarCheck size={18} />
              <span>{isAr ? 'احجز تقييم العمود الفقري' : 'Book Spine Evaluation'}</span>
            </button>
            <a 
              href={doctorConsultUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-spine-inquire"
            >
              <span>{isAr ? 'استشر الطبيب مجاناً' : 'Ask Specialist'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

