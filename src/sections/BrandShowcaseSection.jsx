import React from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  Target, 
  Trophy, 
  Activity,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

export default function BrandShowcaseSection({ lang = 'ar', onOpenBooking }) {
  const isAr = lang === 'ar';
  const NextArrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <section className="brand-showcase-section" id="philosophy">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-eyebrow">
            <Zap size={16} className="text-blue" />
            <span>{isAr ? 'فلسفة فايبرز في الحركة والتعافي' : 'The FIBERS Philosophy'}</span>
          </div>
          <h2 className="section-title">
            {isAr ? (
              <>
                ألم أقل. <span className="hero-accent-text">حركة أقوى.</span> أداء يدوم.
              </>
            ) : (
              <>
                Less Pain. <span className="hero-accent-text">More Movement.</span> Peak Life.
              </>
            )}
          </h2>
          <p className="section-subtitle">
            {isAr
              ? 'نحول منهجيات التأهيل الرياضي الحديث إلى تجربة رعاية فردية تمكنك من فهم جسدك والعودة لممارسة شغفك بدون خوف أو ألم.'
              : 'Translating modern athletic science into personalized care that empowers you to understand your body and return to what you love.'}
          </p>
        </div>

        {/* 4 Poster Cards Grid matching docs/uiux.jpeg */}
        <div className="posters-grid">
          
          {/* Card 1: BUILD STRONGER MOVEMENT */}
          <div className="poster-card poster-card-movement">
            <div className="poster-card-header">
              <span className="poster-brand-tag">FIBERS CLINIC</span>
              <span className="poster-num">01</span>
            </div>
            <div className="poster-card-body">
              <h3 className="poster-big-title">
                BUILD<br />STRONGER<br />MOVEMENT.
              </h3>
              <p className="poster-subtext">
                {isAr 
                  ? 'قوة أكبر. مرونة أعلى. غدٌ أكثر صحة وحيوية.' 
                  : 'MORE STRENGTH. A BRIGHTER TOMORROW.'}
              </p>
            </div>
            <div className="poster-badge-row">
              <span className="poster-pill">Mobility</span>
              <span className="poster-pill">Kinetic Chain</span>
              <span className="poster-pill">Strength</span>
            </div>
          </div>

          {/* Card 2: LESS PAIN. MORE MOVEMENT (Action Card) */}
          <div className="poster-card poster-card-highlight">
            <div className="poster-card-header">
              <span className="poster-brand-tag">FIBERS CLINIC</span>
              <span className="poster-num">02</span>
            </div>
            <div className="poster-card-body">
              <h3 className="poster-big-title highlight-text">
                Less pain.<br />More<br />movement.
              </h3>
              <p className="poster-subtext">
                {isAr 
                  ? 'رعاية طبية شخصية مصممة خصيصاً لجسمك وأهدافك.' 
                  : 'PERSONALIZED CARE FOR A STRONGER YOU.'}
              </p>
            </div>
            <div className="poster-card-action">
              <button onClick={onOpenBooking} className="btn-poster-action">
                <span>{isAr ? 'احجز جلستك الآن' : 'BOOK YOUR SESSION'}</span>
                <NextArrow size={18} />
              </button>
            </div>
          </div>

          {/* Card 3: UNDERSTAND YOUR BODY */}
          <div className="poster-card poster-card-bodycare">
            <div className="poster-card-header">
              <span className="poster-brand-tag">FIBERS CLINIC</span>
              <span className="poster-num">03</span>
            </div>
            <div className="poster-card-body">
              <h3 className="poster-big-title">
                UNDERSTAND<br />YOUR BODY.
              </h3>
              <div className="poster-steps-inline">
                <span>ASSESS</span>
                <span className="dot">•</span>
                <span>TREAT</span>
                <span className="dot">•</span>
                <span>GUIDE</span>
                <span className="dot">•</span>
                <span>SUPPORT</span>
              </div>
              <p className="poster-subtext">
                {isAr 
                  ? 'رعاية طبية خبيرة. تقدم ملموس. نتائج تدوم.' 
                  : 'EXPERT CARE. REAL PROGRESS.'}
              </p>
            </div>
          </div>

          {/* Card 4: FINAL REP EVENT (Deep Royal Blue Card) */}
          <div className="poster-card poster-card-sponsorship">
            <div className="poster-card-header">
              <span className="poster-brand-tag white">FIBERS SPORTS</span>
              <span className="poster-badge-blue">OFFICIAL SPONSOR</span>
            </div>
            <div className="poster-card-body">
              <span className="poster-event-super">ATHLETIC EXCELLENCE</span>
              <h3 className="poster-big-title white">
                FINAL REP<br />EVENT.
              </h3>
              <div className="poster-pillars-strip">
                <span>RECOVER.</span>
                <span>REBUILD.</span>
                <span>PERFORM.</span>
              </div>
              <p className="poster-subtext white-dim">
                {isAr 
                  ? 'فخورون بكوننا الشريك الطبي والتأهيلي الرسمي لأكبر الفعاليات والبطولات الرياضية في مصر.' 
                  : 'Proud to be the official physiotherapy sponsor supporting elite athletes at every rep.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

