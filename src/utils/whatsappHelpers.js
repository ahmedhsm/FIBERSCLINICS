import { clinicData } from '../data/clinicData';

/**
 * Clean phone number for WhatsApp wa.me link
 */
export function getWhatsAppPhone(rawPhone) {
  const phone = rawPhone || clinicData.info.whatsappNumber;
  return phone.replace(/[^\d]/g, '');
}

/**
 * Generate full reservation link with pre-filled WhatsApp message
 */
export function generateWhatsAppReservationLink({
  branch = '',
  service = '',
  doctor = '',
  date = '',
  time = '',
  patientName = '',
  phone = '',
  notes = '',
  lang = 'ar'
}) {
  const targetPhone = getWhatsAppPhone(clinicData.info.whatsappNumber);

  let message = '';
  if (lang === 'ar') {
    message = `مرحباً عيادات FIBERS للعلاج الطبيعي والتأهيل 🏥\n` +
      `أرغب في تأكيد حجز موعد جلسة علاج طبيعي:\n\n` +
      `📍 الفرع المطلوب: ${branch || 'لم يحدد بعد'}\n` +
      `🩺 الخدمة / نوع الجلسة: ${service || 'كشف وتقييم عام'}\n` +
      (doctor ? `👨‍⚕️ الطبيب المفضل: ${doctor}\n` : '') +
      `📅 التاريخ: ${date || 'أقرب موعد متاح'}\n` +
      `⏰ التوقيت: ${time || 'أقرب وقت'}\n` +
      (patientName ? `👤 اسم المريض: ${patientName}\n` : '') +
      (phone ? `📞 رقم الهاتف: ${phone}\n` : '') +
      (notes ? `📝 وصف الحالة / ملاحظات: ${notes}\n` : '') +
      `\nأرجو تأكيد الموعد وإرسال لوكيشن الفرع. شكراً لكم!`;
  } else {
    message = `Hello FIBERS Physical Therapy & Sports Rehab 🏥\n` +
      `I would like to book an appointment:\n\n` +
      `📍 Selected Branch: ${branch || 'Any available branch'}\n` +
      `🩺 Service: ${service || 'General Assessment'}\n` +
      (doctor ? `👨‍⚕️ Specialist: ${doctor}\n` : '') +
      `📅 Date: ${date || 'First available'}\n` +
      `⏰ Preferred Time: ${time || 'Anytime'}\n` +
      (patientName ? `👤 Patient Name: ${patientName}\n` : '') +
      (phone ? `📞 Phone Number: ${phone}\n` : '') +
      (notes ? `📝 Condition / Notes: ${notes}\n` : '') +
      `\nPlease confirm the slot and share the branch directions. Thank you!`;
  }

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate direct service reservation/inquiry link
 */
export function generateServiceDirectLink(serviceTitle, lang = 'ar') {
  const targetPhone = getWhatsAppPhone(clinicData.info.whatsappNumber);

  const message = lang === 'ar'
    ? `مرحباً عيادات FIBERS، أرغب في الاستفسار وحجز جلسة: (${serviceTitle}). أرجو تزويدي بالمواعيد المتاحة بفرع التجمع الخامس (Platinum Club).`
    : `Hello FIBERS Clinic, I'd like to book a session for: (${serviceTitle}). Please let me know available slots at New Cairo branch (Platinum Club).`;

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate 'Ask the Doctor' quick consultation link
 */
export function generateDoctorInquiryLink(lang = 'ar') {
  const targetPhone = getWhatsAppPhone(clinicData.info.whatsappNumber);

  const message = lang === 'ar'
    ? `مرحباً دكتور عيادات FIBERS، لدي استشارة طبية بخصوص إصابة / ألم وأود معرفة إمكانية العلاج الطبيعي المناسب لحالتي.`
    : `Hello Doctor at FIBERS Clinic, I have a medical question regarding an injury/pain and would like to consult on the best physiotherapy plan.`;

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Format Date helper for Arabic / English display
 */
export function formatDate(dateString, lang = 'ar') {
  if (!dateString) return '';
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;

  const locale = lang === 'ar' ? 'ar-EG' : 'en-US';
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
