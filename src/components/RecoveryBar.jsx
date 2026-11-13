import React, { useState, useEffect } from 'react';
import { CalendarCheck, X, Sparkles } from 'lucide-react';

export default function RecoveryBar({ lang = 'ar', onOpenBooking }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero (e.g., 350px)
      if (window.scrollY > 350 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <aside className="sticky-recovery-bar animate-slide-up-fixed" aria-label="Quick Booking Bar">
      <div className="recovery-bar-container">
        
        <div className="recovery-bar-text-group">
          <div className="recovery-pulse-indicator">
            <span className="pulse-blue-dot" />
          </div>
          <div>
            <h4 className="recovery-bar-title">
              {isAr ? 'جاهز لبدء رحلة تعافيك وأدائك؟' : 'Ready to start your recovery?'}
            </h4>
            <p className="recovery-bar-sub">
              {isAr 
                ? 'احجز جلستك في مقرنا الرئيسي: التجمع الخامس (Platinum Club - أمام ملاعب البادل)' 
                : 'Book your session at our flagship clinic: New Cairo (Platinum Club, opp. Padel Courts)'}
            </p>
          </div>
        </div>

        <div className="recovery-bar-action-group">
          <button 
            onClick={onOpenBooking} 
            className="btn-recovery-book"
          >
            <CalendarCheck size={18} />
            <span>{isAr ? 'احجز جلستك الآن' : 'Book Your Session'}</span>
          </button>

          <button 
            onClick={() => setIsDismissed(true)} 
            className="btn-recovery-close"
            aria-label="Dismiss banner"
          >
            <X size={18} />
          </button>
        </div>

      </div>
    </aside>
  );
}

