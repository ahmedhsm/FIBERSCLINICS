import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  Trophy, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2,
  HandMetal,
  Flame,
  Award
} from 'lucide-react';
import './AmbassadorsStack.css';

// Direct ES Module Imports to ensure 100% reliable bundling with no missing assets
import karamGaberImg from '../assets/clients/karam-gaber.jpeg';
import mohamedSamyImg from '../assets/clients/mohamed-samy.jpeg';
import ashrafAdelImg from '../assets/clients/ashraf-adel.jpeg';
import halimBarakatImg from '../assets/clients/halim-barakat.jpeg';
import omarNehadImg from '../assets/clients/omar-nehad.jpeg';
import youssefJokuImg from '../assets/clients/youssef-joku.jpeg';

export const DEFAULT_AMBASSADORS = [
  {
    id: 1,
    name: "Karam Gaber",
    nameAr: "كرم جابر",
    role: "Olympic Gold & Silver Medalist",
    roleAr: "بطل أولمبي (ذهبية وفضية المصارعة)",
    sport: "Greco-Roman Wrestling Legend",
    sportAr: "أسطورة المصارعة الأولمبية",
    imageUrl: karamGaberImg,
    fallbackUrl: "/our clients/karam gaber.jpeg",
    objectPosition: "75% 22%",
    tag: "Olympic Gold",
    tagAr: "ذهب أولمبي",
    quoteAr: "التأهيل الرياضي في فايبرز أعاد لي مرونة وقوة عضلات الظهر والمفاصل بمستوى احترافي عالمي.",
    quoteEn: "Rehab and physical recovery at FIBERS returned my spinal mobility and joint strength to world-class form."
  },
  {
    id: 2,
    name: "Mohamed Samy",
    nameAr: "محمد سامي",
    role: "Professional Champion Athlete",
    roleAr: "بطل رياضي محترف",
    sport: "Competitive Athletics & Strength",
    sportAr: "ألعاب قوى ولياقة بدنية",
    imageUrl: mohamedSamyImg,
    fallbackUrl: "/our clients/mohamed samy.jpeg",
    objectPosition: "50% 16%",
    tag: "Pro Champion",
    tagAr: "بطل محترف",
    quoteAr: "برامج استشفاء متطورة ساعدتني على التعافي السريع وتفادي الإجهاد العضلي قبل البطولات.",
    quoteEn: "Cutting-edge recovery protocols helped me bounce back fast and eliminate muscle fatigue before competitions."
  },
  {
    id: 3,
    name: "Ashraf Adel",
    nameAr: "أشرف عادل",
    role: "Calisthenics World Champion (1st Place)",
    roleAr: "بطل العالم في الكاليسثنكس (المركز الأول)",
    sport: "WCF World Championship Podium",
    sportAr: "منصة بطولة العالم للكاليسثنكس",
    imageUrl: ashrafAdelImg,
    fallbackUrl: "/our clients/ashraf adel.jpeg",
    objectPosition: "50% 20%",
    tag: "World #1",
    tagAr: "بطل العالم #1",
    quoteAr: "فهم عميق للميكانيكا الحيوية مع أجهزة متقدمة لتخفيف الضغط المفصلي وبناء القوة بدون ألم.",
    quoteEn: "Deep biomechanical understanding paired with elite decompression equipment to build strength pain-free."
  },
  {
    id: 4,
    name: "Halim Barakat",
    nameAr: "حليم بركات",
    role: "Elite Movement Specialist",
    roleAr: "أخصائي حركة وأداء بدني",
    sport: "Functional Mobility & Coaching",
    sportAr: "مرونة حركية وتدريب بدني",
    imageUrl: halimBarakatImg,
    fallbackUrl: "/our clients/halim barakat.jpeg",
    objectPosition: "50% 26%",
    tag: "Movement Specialist",
    tagAr: "أخصائي حركي",
    quoteAr: "الاهتمام بأدق تفاصيل الحركة واستعادة التوازن العضلي هو ما يميز فايبرز عن أي مركز آخر.",
    quoteEn: "Meticulous attention to kinetic balance and muscular symmetry sets FIBERS apart from any standard center."
  },
  {
    id: 5,
    name: "Omar Nehad",
    nameAr: "عمر نهاد",
    role: "Dubai Muscle Classic Champion",
    roleAr: "بطل دبي مسل كلاسيك للمحترفين",
    sport: "Dubai Muscle Gold Medalist",
    sportAr: "ميدالية دبي مسل الذهبية",
    imageUrl: omarNehadImg,
    fallbackUrl: "/our clients/omar nehad.jpeg",
    objectPosition: "50% 16%",
    tag: "Gold Medal",
    tagAr: "ميدالية ذهبية",
    quoteAr: "العودة للتمارين الشاقة بعد الإصابة كانت أسرع وأكثر أماناً بفضل بروتوكولات فايبرز الذكية.",
    quoteEn: "Returning to heavy loads after my injury was faster and safer thanks to FIBERS return-to-sport protocols."
  },
  {
    id: 6,
    name: "Youssef Joku",
    nameAr: "يوسف جوكو",
    role: "Pro Combat Sports & WNBF Athlete",
    roleAr: "بطل فنون قتالية ومنافسات WNBF",
    sport: "WNBF World Championship Competitor",
    sportAr: "بطولة العالم للمحترفين WNBF",
    imageUrl: youssefJokuImg,
    fallbackUrl: "/our clients/youssef joku.jpeg",
    objectPosition: "50% 14%",
    tag: "Combat Pro",
    tagAr: "مقاتل محترف",
    quoteAr: "تأهيل كامل للإصابات الحركية والكتف أعادني للنزالات بأقصى قوة وسرعة استجابة.",
    quoteEn: "Total joint and shoulder rehab got me back into competition with explosive speed and zero hesitation."
  }
];

const STACK_PRESETS = [
  { scale: 1.0, y: 0, rotate: 0, zIndex: 10, opacity: 1 },
  { scale: 0.94, y: 16, rotate: -3, zIndex: 9, opacity: 0.95 },
  { scale: 0.88, y: 32, rotate: 3, zIndex: 8, opacity: 0.85 },
  { scale: 0.82, y: 46, rotate: -1.5, zIndex: 7, opacity: 0.6 },
  { scale: 0.76, y: 58, rotate: 0, zIndex: 6, opacity: 0 }
];

function getImageSource(card) {
  return card.imageUrl || card.image || card.fallbackUrl || "/logo.jpeg";
}

/**
 * Top Interactive Draggable Card
 */
function TopCard({ card, onSwipe, isExiting, exitDirection, isAr }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const nextCueOpacity = useTransform(x, [30, 100], [0, 1]);
  const prevCueOpacity = useTransform(x, [-30, -100], [0, 1]);

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 80;
    const velocityThreshold = 300;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      onSwipe(1); // Swipe right
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      onSwipe(-1); // Swipe left
    }
  };

  const imageSrc = getImageSource(card);

  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        x,
        rotate: isExiting ? exitDirection * 24 : rotate,
        zIndex: 10,
        touchAction: 'none'
      }}
      drag={!isExiting ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragEnd={handleDragEnd}
      animate={
        isExiting
          ? {
              x: exitDirection * 500,
              opacity: 0,
              rotate: exitDirection * 28,
              transition: { duration: 0.22, ease: "easeOut" }
            }
          : {
              scale: 1,
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }
      }
      className="ambassador-card top-card"
    >
      {/* Swipe Direction Indicators */}
      <motion.div 
        style={{ opacity: nextCueOpacity }}
        className="swipe-cue swipe-cue-next"
      >
        {isAr ? 'التالي ❯' : 'NEXT ❯'}
      </motion.div>

      <motion.div 
        style={{ opacity: prevCueOpacity }}
        className="swipe-cue swipe-cue-prev"
      >
        {isAr ? '❮ السابق' : '❮ PREV'}
      </motion.div>

      {/* Full-bleed Photo with Cover and Calibrated Focal Point */}
      <img
        src={imageSrc}
        alt={isAr ? card.nameAr : card.name}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          objectPosition: card.objectPosition || 'center 20%'
        }}
        className="card-image"
        onError={(e) => {
          if (card.fallbackUrl && e.currentTarget.src !== card.fallbackUrl) {
            e.currentTarget.src = card.fallbackUrl;
          } else {
            e.currentTarget.src = "/logo.jpeg";
          }
        }}
        loading="eager"
      />

      {/* Top Floating Badges */}
      <div className="card-top-badges">
        <div className="card-verified-badge">
          <CheckCircle2 size={12} />
          <span>{isAr ? 'بطل فايبرز' : 'FIBERS Athlete'}</span>
        </div>

        <div className="card-honor-pill">
          <Flame size={12} color="#f59e0b" />
          <span>{isAr ? card.tagAr : card.tag}</span>
        </div>
      </div>

      {/* Dark Readability Gradient Overlay */}
      <div className="card-gradient-overlay" />

      {/* Bottom Content Overlay Inside Card */}
      <div className="card-bottom-info">
        <div className="card-name-row">
          <h3 className="card-client-name">
            {isAr ? card.nameAr : card.name}
          </h3>
          <span className="card-order-tag">#0{card.id}</span>
        </div>

        <p className="card-client-role">
          {isAr ? card.roleAr : card.role}
        </p>

        <p className="card-client-quote">
          "{isAr ? card.quoteAr : card.quoteEn}"
        </p>

        <div className="card-footer-strip">
          <div className="card-verified-tag">
            <Trophy size={13} color="#eab308" />
            <span>{isAr ? 'تأهيل واستشفاء رياضي معتمد' : 'Verified Sports Rehab'}</span>
          </div>
          <span className="card-sport-tag">
            {isAr ? card.sportAr : card.sport}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Stacked Cards (Behind Top Card)
 */
function StackedCard({ card, index, isAr }) {
  const preset = STACK_PRESETS[index] || STACK_PRESETS[STACK_PRESETS.length - 1];
  const imageSrc = getImageSource(card);

  return (
    <motion.div
      initial={false}
      animate={{
        scale: preset.scale,
        y: preset.y,
        rotate: preset.rotate,
        opacity: preset.opacity,
        zIndex: preset.zIndex
      }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      style={{
        position: 'absolute',
        inset: 0
      }}
      className="ambassador-card stacked-card"
    >
      <img
        src={imageSrc}
        alt={isAr ? card.nameAr : card.name}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          objectPosition: card.objectPosition || 'center 20%'
        }}
        className="card-image"
        onError={(e) => {
          if (card.fallbackUrl && e.currentTarget.src !== card.fallbackUrl) {
            e.currentTarget.src = card.fallbackUrl;
          } else {
            e.currentTarget.src = "/logo.jpeg";
          }
        }}
        loading="lazy"
      />

      <div className="card-top-badges">
        <div className="card-honor-pill">
          <Flame size={12} color="#f59e0b" />
          <span>{isAr ? card.tagAr : card.tag}</span>
        </div>
      </div>

      <div className="card-gradient-overlay" />

      <div className="card-bottom-info">
        <h4 className="card-client-name">
          {isAr ? card.nameAr : card.name}
        </h4>
        <p className="card-client-role">
          {isAr ? card.roleAr : card.role}
        </p>
      </div>
    </motion.div>
  );
}

/**
 * Main AmbassadorsStack Component
 */
export default function AmbassadorsStack({
  ambassadors = DEFAULT_AMBASSADORS,
  title,
  subtitle,
  lang = 'ar',
  onOpenBooking
}) {
  const isAr = lang === 'ar';
  const [cards, setCards] = useState(ambassadors);
  const [exitDirection, setExitDirection] = useState(0);

  const activeCard = cards[0];

  const handleSwipe = (direction) => {
    if (exitDirection !== 0) return;
    setExitDirection(direction);

    setTimeout(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setExitDirection(0);
    }, 220);
  };

  const handlePrev = () => {
    if (exitDirection !== 0) return;
    setCards((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  const handleReset = () => {
    setCards(ambassadors);
  };

  return (
    <section className="ambassadors-section" id="ambassadors">
      {/* Background Lighting */}
      <div className="ambassadors-glow-bg" />

      <div className="ambassadors-container">
        
        {/* Section Header */}
        <div className="ambassadors-header">
          <div className="ambassadors-eyebrow">
            <Sparkles size={14} />
            <span>
              {isAr ? 'أبطال وشخصيات بارزة تثق في فايبرز' : 'Our Ambassadors & Famous Clients'}
            </span>
          </div>

          <h2 className="ambassadors-title">
            {title ? title : (
              isAr ? (
                <>
                  أبطال أولمبيون ومحترفون <span className="ambassadors-title-accent">اختاروا فايبرز</span>
                </>
              ) : (
                <>
                  Our Famous Clients & <span className="ambassadors-title-accent">Ambassadors</span>
                </>
              )
            )}
          </h2>

          <p className="ambassadors-subtitle">
            {subtitle ? subtitle : (
              isAr 
                ? 'نخبة من الرياضيين المحترفين وأبطال مصر الأولمبيين الذين استعادوا كامل كفاءتهم البدنية وعادوا لمنصات التتويج بفضل بروتوكولات التأهيل والاستشفاء المتقدمة.'
                : 'Olympic medalists, professional fighters, and premier athletes who rely on FIBERS for evidence-based rehabilitation and return-to-sport mastery.'
            )}
          </p>
        </div>

        {/* Swipe Instruction Hint */}
        <div className="ambassadors-hint-pill">
          <HandMetal size={14} className="hint-icon" />
          <span>
            {isAr 
              ? 'اسحب البطاقة لليمين أو اليسار للتبديل بين الأبطال' 
              : 'Drag or swipe the card horizontally to flip through'}
          </span>
        </div>

        {/* Enforced Single-Deck Container: Fixed Size & Relative */}
        <div className="ambassadors-deck-container">
          {cards
            .slice(0, 4)
            .reverse()
            .map((card) => {
              const actualIndex = cards.indexOf(card);
              const isTop = actualIndex === 0;

              if (isTop) {
                return (
                  <TopCard
                    key={card.id}
                    card={card}
                    onSwipe={handleSwipe}
                    isExiting={exitDirection !== 0}
                    exitDirection={exitDirection}
                    isAr={isAr}
                  />
                );
              }

              return (
                <StackedCard
                  key={card.id}
                  card={card}
                  index={actualIndex}
                  isAr={isAr}
                />
              );
            })}
        </div>

        {/* Horizontal Controls Bar Directly Below Card Stack */}
        <div className="ambassadors-controls-bar">
          <button
            onClick={handlePrev}
            type="button"
            className="btn-deck-control"
            aria-label={isAr ? "البطل السابق" : "Previous Ambassador"}
            title={isAr ? "السابق" : "Previous"}
          >
            <ChevronLeft size={20} style={{ transform: isAr ? "rotate(180deg)" : "none" }} />
          </button>

          {/* Stack Progress Dots */}
          <div className="deck-dots-strip">
            {ambassadors.map((item) => {
              const isActive = activeCard?.id === item.id;
              return (
                <div
                  key={item.id}
                  className={`deck-dot ${isActive ? 'active' : ''}`}
                />
              );
            })}
          </div>

          <button
            onClick={() => handleSwipe(1)}
            type="button"
            className="btn-deck-control btn-deck-primary"
            aria-label={isAr ? "البطل التالي" : "Next Ambassador"}
            title={isAr ? "التالي" : "Next"}
          >
            <ChevronRight size={20} style={{ transform: isAr ? "rotate(180deg)" : "none" }} />
          </button>

          <button
            onClick={handleReset}
            type="button"
            className="btn-deck-control"
            aria-label={isAr ? "إعادة ضبط الترتيب" : "Reset Stack"}
            title={isAr ? "إعادة الترتيب" : "Reset Order"}
          >
            <RotateCcw size={18} />
          </button>
        </div>

        {/* Direct Booking CTA */}
        {onOpenBooking && (
          <div className="ambassadors-booking-cta">
            <button
              onClick={onOpenBooking}
              type="button"
              className="btn-deck-book"
            >
              <Award size={18} />
              <span>{isAr ? 'احجز جلستك وتدرب كالأبطال' : 'Book Your Session Like a Champion'}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
