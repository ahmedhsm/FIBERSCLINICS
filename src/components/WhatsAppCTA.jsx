import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  FileText, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { generateWhatsAppReservationLink, formatDate } from '../utils/whatsappHelpers';
import clinicLogoBadge from '../assets/logo.jpeg';

export default function WhatsAppCTA({ 
  lang = 'ar', 
  isOpen, 
  setIsOpen, 
  preSelectedBranch = null,
  preSelectedService = null,
  onClearPreSelectedService = () => {}
}) {
  const isAr = lang === 'ar';
  const NextArrow = isAr ? ArrowLeft : ArrowRight;
  const PrevArrow = isAr ? ArrowRight : ArrowLeft;

  // Reservation Form State
  const [step, setStep] = useState(1);
  const [branch, setBranch] = useState(clinicData.branches[0].id);
  const [service, setService] = useState(clinicData.services[0].id);
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState(clinicData.availableTimes[3] || '03:00 PM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Synchronize when a branch is pre-selected
  useEffect(() => {
    if (preSelectedBranch) {
      setBranch(preSelectedBranch);
      setStep(2);
    }
  }, [preSelectedBranch]);

  // Synchronize when a service is pre-selected from a ServiceCard
  useEffect(() => {
    if (preSelectedService) {
      setService(preSelectedService.id);
      setStep(1);
    }
  }, [preSelectedService]);

  // Reset steps when closed
  const handleClose = () => {
    setIsOpen(false);
    onClearPreSelectedService();
    // Keep data for user convenience if they re-open
  };

  const selectedBranchObj = clinicData.branches.find(b => b.id === branch) || clinicData.branches[0];
  const selectedServiceObj = clinicData.services.find(s => s.id === service) || clinicData.services[0];

  // Final WhatsApp confirmation URL
  const confirmWhatsAppUrl = generateWhatsAppReservationLink({
    branch: isAr ? selectedBranchObj.nameAr : selectedBranchObj.nameEn,
    service: isAr ? selectedServiceObj.titleAr : selectedServiceObj.titleEn,
    date: formatDate(date, lang),
    time: time,
    patientName: patientName,
    phone: patientPhone,
    notes: notes,
    lang: lang
  });

  return (
    <>
      {/* 4-Step Reservation Modal */}
      {isOpen && (
        <div className="modal-backdrop" onClick={handleClose}>
          <div 
            className={`booking-modal-card ${step === 4 ? 'step-4-active' : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-branding">
                <img 
                  src={clinicLogoBadge} 
                  alt="FIBERS Clinic" 
                  className="modal-logo-badge" 
                />
                <div className="modal-steps-indicator">
                  <span className="step-tag">
                    {isAr 
                      ? `الخطوة ${step} من 4` 
                      : `STEP ${step} OF 4`}
                  </span>
                  <h3 className="modal-step-title">
                    {step === 1 && (isAr ? 'مقر العيادة (التجمع الخامس)' : 'Clinic Location (New Cairo)')}
                    {step === 2 && (isAr ? 'اختر نوع الجلسة العلاجية' : 'Choose Service')}
                    {step === 3 && (isAr ? 'حدد التاريخ والموعد المفضل' : 'Pick Date & Time Slot')}
                    {step === 4 && (isAr ? 'جاهز للحجز (تأكيد الواتساب)' : 'Ready to Book')}
                  </h3>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="modal-close-btn"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Step Progress Dots */}
            <div className="modal-progress-bar">
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s} 
                  className={`progress-step-pill ${s === step ? 'active' : ''} ${s < step ? 'completed' : ''}`}
                />
              ))}
            </div>

            {/* Modal Body: Dynamic by Step */}
            <div className="modal-body-content">
              {/* STEP 1: CHOOSE BRANCH (SINGLE CLINIC LOCATION) */}
              {step === 1 && (
                <div className="step-content step-branch">
                  <p className="step-desc">
                    {isAr 
                      ? 'مقر عيادة فايبرز المجهز بالكامل بأحدث أجهزة التأهيل والاستشفاء الرياضي:' 
                      : 'Our fully equipped clinic location for sports recovery & physical therapy:'}
                  </p>

                  <div className="branch-selection-grid">
                    {clinicData.branches.map((b) => (
                      <div 
                        key={b.id}
                        onClick={() => setBranch(b.id)}
                        className={`branch-option-card ${branch === b.id ? 'selected' : ''}`}
                      >
                        <div className="branch-radio-indicator">
                          {branch === b.id && <Check size={14} />}
                        </div>
                        <div className="branch-option-info">
                          <div className="branch-title-row">
                            <MapPin size={18} className="branch-pin-icon" />
                            <h4>{isAr ? b.nameAr : b.nameEn}</h4>
                          </div>
                          <p className="branch-addr">{isAr ? b.addressAr : b.addressEn}</p>
                          <span className="branch-landmark">
                            {isAr ? b.landmarkAr : b.landmarkEn}
                          </span>
                          <span className="branch-badge">
                            {isAr ? b.badgeAr : b.badgeEn}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: CHOOSE SERVICE & OPTIONAL DOCTOR */}
              {step === 2 && (
                <div className="step-content step-services">
                  <p className="step-desc">
                    {isAr 
                      ? 'حدد الخدمة العلاجية أو التأهيلية التي تحتاجها:' 
                      : 'Select the physiotherapy or recovery service you need:'}
                  </p>

                  <div className="services-selection-grid">
                    {clinicData.services.map((s) => (
                      <div 
                        key={s.id}
                        onClick={() => setService(s.id)}
                        className={`service-option-item ${service === s.id ? 'selected' : ''}`}
                      >
                        <div className="service-radio">
                          {service === s.id && <Check size={14} />}
                        </div>
                        <div className="service-option-text">
                          <h5>{isAr ? s.titleAr : s.titleEn}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: DATE & TIME */}
              {step === 3 && (
                <div className="step-content step-datetime">
                  <div className="form-group">
                    <label className="form-label">
                      <Calendar size={16} />
                      <span>{isAr ? 'تاريخ الجلسة:' : 'Preferred Date:'}</span>
                    </label>
                    <input 
                      type="date"
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <Clock size={16} />
                      <span>{isAr ? 'اختر الفترة الزمنية المناسبة:' : 'Select Available Time Slot:'}</span>
                    </label>
                    <div className="time-slots-grid">
                      {clinicData.availableTimes.map((t, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setTime(t)}
                          className={`time-slot-pill ${time === t ? 'selected' : ''}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="patient-inputs-row">
                    <div className="form-group">
                      <label className="form-label">
                        <User size={16} />
                        <span>{isAr ? 'اسم المريض (اختياري):' : 'Patient Name (Optional):'}</span>
                      </label>
                      <input 
                        type="text"
                        placeholder={isAr ? 'مثال: أحمد مصطفى' : 'e.g. Ahmed Mostafa'}
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        <Phone size={16} />
                        <span>{isAr ? 'رقم الهاتف:' : 'Phone Number:'}</span>
                      </label>
                      <input 
                        type="tel"
                        placeholder="010XXXXXXXX"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: REVIEW & CONFIRM VIA WHATSAPP (NO SWIPE - FULL VIEW) */}
              {step === 4 && (
                <div className="step-content step-confirm no-swipe-review">
                  {/* Compact 2x2 Review Grid */}
                  <div className="review-grid">
                    {/* BRANCH */}
                    <div className="review-cell" title={isAr ? selectedBranchObj.nameAr : selectedBranchObj.nameEn}>
                      <div className="review-cell-icon">
                        <MapPin size={16} />
                      </div>
                      <div className="review-cell-info">
                        <span className="review-cell-label">{isAr ? 'مقر العيادة' : 'LOCATION'}</span>
                        <strong className="review-cell-val">
                          {isAr ? selectedBranchObj.nameAr : selectedBranchObj.nameEn}
                        </strong>
                      </div>
                    </div>

                    {/* SERVICE */}
                    <div className="review-cell" title={isAr ? selectedServiceObj.titleAr : selectedServiceObj.titleEn}>
                      <div className="review-cell-icon">
                        <Sparkles size={16} />
                      </div>
                      <div className="review-cell-info">
                        <span className="review-cell-label">{isAr ? 'الخدمة' : 'SERVICE'}</span>
                        <strong className="review-cell-val">
                          {isAr ? selectedServiceObj.titleAr : selectedServiceObj.titleEn}
                        </strong>
                      </div>
                    </div>

                    {/* DATE */}
                    <div className="review-cell" title={formatDate(date, lang)}>
                      <div className="review-cell-icon">
                        <Calendar size={16} />
                      </div>
                      <div className="review-cell-info">
                        <span className="review-cell-label">{isAr ? 'التاريخ' : 'DATE'}</span>
                        <strong className="review-cell-val">
                          {formatDate(date, lang)}
                        </strong>
                      </div>
                    </div>

                    {/* TIME */}
                    <div className="review-cell" title={time}>
                      <div className="review-cell-icon">
                        <Clock size={16} />
                      </div>
                      <div className="review-cell-info">
                        <span className="review-cell-label">{isAr ? 'الوقت' : 'TIME'}</span>
                        <strong className="review-cell-val">
                          {time}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Patient Info Strip if provided */}
                  {(patientName || patientPhone) && (
                    <div className="review-patient-strip">
                      {patientName && (
                        <span className="patient-chip">
                          <User size={13} />
                          <span>{patientName}</span>
                        </span>
                      )}
                      {patientPhone && (
                        <span className="patient-chip">
                          <Phone size={13} />
                          <span>{patientPhone}</span>
                        </span>
                      )}
                    </div>
                  )}

                  {/* Compact Single-line Notes Input */}
                  <div className="review-notes-wrap">
                    <label className="review-notes-label">
                      <FileText size={14} />
                      <span>{isAr ? 'ملاحظة أو شكوى طبية (اختياري):' : 'Notes / condition description (Optional):'}</span>
                    </label>
                    <input 
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={isAr ? 'مثال: ألم أسفل الظهر مستمر منذ أسبوع...' : 'e.g. Lower back pain for a week...'}
                      className="review-notes-input"
                    />
                  </div>

                  {/* Final WhatsApp Button */}
                  <a
                    href={confirmWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-confirm-whatsapp"
                  >
                    <MessageCircle size={20} className="btn-wa-icon" />
                    <span>{isAr ? 'تأكيد الحجز عبر واتساب' : 'Confirm via WhatsApp'}</span>
                  </a>

                  {/* Back / Edit Link */}
                  <button 
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-review-back"
                  >
                    <PrevArrow size={14} />
                    <span>{isAr ? 'تعديل بيانات الحجز' : 'Edit Booking Details'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer Controls (Step 1 to 3 only; Step 4 has its own dedicated actions) */}
            {step < 4 && (
              <div className="modal-footer-controls">
                {step > 1 && (
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="btn-modal-prev"
                  >
                    <PrevArrow size={18} />
                    <span>{isAr ? 'السابق' : 'Back'}</span>
                  </button>
                )}

                <button 
                  onClick={() => setStep(step + 1)}
                  className="btn-modal-next"
                >
                  <span>{isAr ? 'المتابعة' : 'Next'}</span>
                  <NextArrow size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
