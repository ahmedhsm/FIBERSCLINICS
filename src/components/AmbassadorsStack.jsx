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

// Direct ES Module Imports to ensure 100% reliable image bundling & zero 404/space-encoding issues
import karamGaberImg from '../assets/clients/karam-gaber.jpeg';
import mohamedSamyImg from '../assets/clients/mohamed-samy.jpeg';
import ashrafAdelImg from '../assets/clients/ashraf-adel.jpeg';
import halimBarakatImg from '../assets/clients/halim-barakat.jpeg';
import omarNehadImg from '../assets/clients/omar-nehad.jpeg';
import youssefJokuImg from '../assets/clients/youssef-joku.jpeg';

/**
 * Famous Clients & Champions Data
 * With precise object-position focal points to ensure faces, medals & bodies are perfectly framed
 */
export const DEFAULT_AMBASSADORS = [
  {
    id: 1,
    name: "Karam Gaber",
    nameAr: "كرم جابر",
    role: "Olympic Gold & Silver Medalist",
    roleAr: "بطل أولمبي (ذهبية وفضية المصارعة)",
    sport: "Olympic Wrestling Legend",
    sportAr: "أسطورة المصارعة الأولمبية",
    imageUrl: karamGaberImg,
    fallbackUrl: "/our clients/karam gaber.jpeg",
    // Karam Gaber stands on the right side next to FIBERS neon sign -> align focal point to right-center
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
    // 1st place podium: focus on Ashraf Adel holding the world trophy high in center
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
    // In FIBERS clinic with specialist: focus on faces and clinic shirts
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
    // Focus on face and gold medal
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
    // Focus on upper physique and stage smile
    objectPosition: "50% 14%",
    tag: "Combat Pro",
    tagAr: "مقاتل محترف",
    quoteAr: "تأهيل كامل للإصابات الحركية والكتف أعادني للنزالات بأقصى قوة وسرعة استجابة.",
    quoteEn: "Total joint and shoulder rehab got me back into competition with explosive speed and zero hesitation."
  }
];

/**
 * 3D Stack Presets
 */
const STACK_PRESETS = [
  { scale: 1.0, y: 0, rotate: 0, zIndex: 30, opacity: 1 },
  { scale: 0.95, y: 16, rotate: -3.5, zIndex: 25, opacity: 0.95 },
  { scale: 0.90, y: 32, rotate: 3.5, zIndex: 20, opacity: 0.85 },
  { scale: 0.85, y: 48, rotate: -2, zIndex: 15, opacity: 0.65 },
  { scale: 0.80, y: 60, rotate: 0, zIndex: 10, opacity: 0 },
];

/**
 * Helper to safely resolve image source
 */
function getImageSource(card) {
  return card.imageUrl || card.image || card.fallbackUrl || "/logo.jpeg";
}

/**
 * Top Draggable Polaroid Card
 */
function TopCard({ card, onSwipe, isExiting, exitDirection, isAr }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-16, 0, 16]);
  const nextCueOpacity = useTransform(x, [30, 120], [0, 1]);
  const prevCueOpacity = useTransform(x, [-30, -120], [0, 1]);

  const handleDragEnd = (_, info) => {
    const swipeThreshold = 85;
    const velocityThreshold = 350;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      onSwipe(1); // Fly right
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      onSwipe(-1); // Fly left
    }
  };

  const imageSrc = getImageSource(card);

  return (
    <motion.div
      style={{
        x,
        rotate: isExiting ? exitDirection * 24 : rotate,
        zIndex: 35,
        touchAction: 'none'
      }}
      drag={!isExiting ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onDragEnd={handleDragEnd}
      animate={
        isExiting
          ? {
              x: exitDirection * 550,
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
      className="absolute top-0 inset-x-0 mx-auto w-[295px] sm:w-[345px] md:w-[385px] bg-white p-3.5 pb-5 sm:p-4 sm:pb-6 rounded-2xl shadow-[-2px_22px_50px_rgba(0,0,0,0.65),0_8px_20px_rgba(0,0,0,0.35)] cursor-grab active:cursor-grabbing select-none border border-white/70 transition-shadow hover:shadow-[-2px_28px_55px_rgba(0,102,255,0.3)]"
    >
      {/* Top Tape Aesthetic Accent */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-md rounded-sm border border-white/50 shadow-sm rotate-[-1.5deg] pointer-events-none z-20" />

      {/* Swipe Direction Cues */}
      <motion.div 
        style={{ opacity: nextCueOpacity }}
        className="absolute top-6 right-6 z-30 px-3 py-1 rounded-lg bg-blue-600/95 text-white text-xs font-black uppercase tracking-wider shadow-xl rotate-12 pointer-events-none"
      >
        {isAr ? 'التالي ❯' : 'NEXT ❯'}
      </motion.div>

      <motion.div 
        style={{ opacity: prevCueOpacity }}
        className="absolute top-6 left-6 z-30 px-3 py-1 rounded-lg bg-emerald-600/95 text-white text-xs font-black uppercase tracking-wider shadow-xl -rotate-12 pointer-events-none"
      >
        {isAr ? '❮ السابق' : '❮ PREV'}
      </motion.div>

      {/* Polaroid 1:1 Square Photo Container (Classic Polaroid Format) */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-200/50 shadow-inner">
        <img
          src={imageSrc}
          alt={isAr ? card.nameAr : card.name}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          style={{
            objectPosition: card.objectPosition || 'center 20%'
          }}
          className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 ease-out hover:scale-105"
          onError={(e) => {
            // Fallback to local logo if external fails
            if (card.fallbackUrl && e.currentTarget.src !== card.fallbackUrl) {
              e.currentTarget.src = card.fallbackUrl;
            } else {
              e.currentTarget.src = "/logo.jpeg";
            }
          }}
          loading="eager"
        />

        {/* Soft Vignette & Protective Glare */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15 pointer-events-none" />
        
        {/* Floating Honor Tag */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold shadow-lg">
          <Flame size={12} className="text-amber-400 fill-amber-400" />
          <span>{isAr ? card.tagAr : card.tag}</span>
        </div>

        {/* Sport Category Pill */}
        <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-md bg-blue-600/95 backdrop-blur-md text-white text-[11px] font-bold tracking-wide shadow-md">
          {isAr ? card.sportAr : card.sport}
        </div>
      </div>

      {/* Polaroid Bottom Chin: Typography & Verified Clinic Stamp */}
      <div className="pt-3.5 px-1 text-slate-900">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-tight">
              {isAr ? card.nameAr : card.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
              {isAr ? card.roleAr : card.role}
            </p>
          </div>

          {/* Trophy Badge */}
          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-amber-50 border border-amber-200 text-amber-600 shadow-inner shrink-0">
            <Trophy size={18} />
          </div>
        </div>

        {/* Quote / Testimonial Preview */}
        <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2 italic border-t border-slate-100 pt-2">
          "{isAr ? card.quoteAr : card.quoteEn}"
        </p>

        {/* Bottom Verification Strip */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] font-bold text-slate-500">
          <div className="flex items-center gap-1 text-emerald-600">
            <CheckCircle2 size={13} className="shrink-0" />
            <span>{isAr ? 'تم التأهيل في عيادات فايبرز' : 'Treated & Recovered at FIBERS'}</span>
          </div>
          <span className="text-slate-400 font-mono text-[10px]">
            #0{card.id}
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
      style={{ pointerEvents: 'none' }}
      className="absolute top-0 inset-x-0 mx-auto w-[295px] sm:w-[345px] md:w-[385px] bg-white p-3.5 pb-5 sm:p-4 sm:pb-6 rounded-2xl shadow-[-2px_16px_38px_rgba(0,0,0,0.5),0_5px_14px_rgba(0,0,0,0.25)] select-none border border-white/60"
    >
      {/* Photo Container */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-200/50 shadow-inner">
        <img
          src={imageSrc}
          alt={isAr ? card.nameAr : card.name}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          style={{
            objectPosition: card.objectPosition || 'center 20%'
          }}
          className="w-full h-full object-cover filter brightness-95"
          onError={(e) => {
            if (card.fallbackUrl && e.currentTarget.src !== card.fallbackUrl) {
              e.currentTarget.src = card.fallbackUrl;
            } else {
              e.currentTarget.src = "/logo.jpeg";
            }
          }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Polaroid Chin */}
      <div className="pt-3 px-1 text-slate-900 opacity-80">
        <h4 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 line-clamp-1">
          {isAr ? card.nameAr : card.name}
        </h4>
        <p className="text-xs font-medium text-slate-500 line-clamp-1">
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
    <section className="ambassadors-stack-section relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#070b14] text-white overflow-hidden" id="ambassadors">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold tracking-wide mb-3 shadow-inner">
            <Sparkles size={14} className="text-blue-400 animate-pulse" />
            <span>
              {isAr ? 'أبطال وشخصيات بارزة تثق في فايبرز' : 'Our Ambassadors & Famous Clients'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            {title ? title : (
              isAr ? (
                <>
                  أبطال أولمبيون ومحترفون <span className="text-blue-500">اختاروا فايبرز</span>
                </>
              ) : (
                <>
                  Our Famous Clients & <span className="text-blue-500">Ambassadors</span>
                </>
              )
            )}
          </h2>

          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {subtitle ? subtitle : (
              isAr 
                ? 'نخبة من الرياضيين المحترفين وأبطال مصر الأولمبيين الذين استعادوا كامل كفاءتهم البدنية وعادوا لمنصات التتويج بفضل بروتوكولات التأهيل والاستشفاء المتقدمة.'
                : 'Olympic medalists, professional fighters, and premier athletes who rely on FIBERS for evidence-based rehabilitation and return-to-sport mastery.'
            )}
          </p>
        </div>

        {/* Swipe Instruction Hint */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-800 shadow-sm animate-bounce">
          <HandMetal size={14} className="text-blue-400" />
          <span>
            {isAr 
              ? 'اسحب الصورة لليمين أو اليسار لاستعراض بقية الأبطال' 
              : 'Drag or swipe the card horizontally to flip through'}
          </span>
        </div>

        {/* 3D Stack Viewport */}
        <div className="relative w-full max-w-[420px] h-[480px] sm:h-[530px] md:h-[560px] flex items-center justify-center [perspective:1200px]">
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

        {/* Interactive Controls & Navigation */}
        <div className="mt-12 sm:mt-14 flex flex-col items-center gap-5 w-full">
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={handlePrev}
              type="button"
              className="p-3.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-all duration-200 shadow-lg active:scale-95"
              aria-label={isAr ? "البطل السابق" : "Previous Ambassador"}
              title={isAr ? "السابق" : "Previous"}
            >
              <ChevronLeft size={20} className={isAr ? "rotate-180" : ""} />
            </button>

            {/* Stack Progress Dots */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/90 rounded-full border border-slate-800">
              {ambassadors.map((item) => {
                const isActive = activeCard?.id === item.id;
                return (
                  <div
                    key={item.id}
                    className={`transition-all duration-300 rounded-full ${
                      isActive 
                        ? 'w-6 h-2 bg-blue-500' 
                        : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                );
              })}
            </div>

            <button
              onClick={() => handleSwipe(1)}
              type="button"
              className="p-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-600/30 active:scale-95"
              aria-label={isAr ? "البطل التالي" : "Next Ambassador"}
              title={isAr ? "التالي" : "Next"}
            >
              <ChevronRight size={20} className={isAr ? "rotate-180" : ""} />
            </button>

            {/* Reset Order Button */}
            <button
              onClick={handleReset}
              type="button"
              className="p-3.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200 shadow active:scale-95"
              aria-label={isAr ? "إعادة ضبط الترتيب" : "Reset Stack"}
              title={isAr ? "إعادة الترتيب" : "Reset Order"}
            >
              <RotateCcw size={18} />
            </button>
          </div>

          {/* Quick CTA */}
          {onOpenBooking && (
            <div className="mt-2 text-center">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Award size={16} />
                <span>{isAr ? 'احجز جلستك وتدرب كالأبطال' : 'Book Your Session Like a Champion'}</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
