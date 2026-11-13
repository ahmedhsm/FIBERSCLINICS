export const clinicData = {
  info: {
    brandName: "FIBERS",
    brandSubtitleAr: "عيادات فايبرز للعلاج الطبيعي والتأهيل الحركي والرياضي",
    brandSubtitleEn: "Physical Therapy & Sports Performance Clinic",
    sloganAr: "نعيدك إلى كامل طاقتك وأدائك الحركي والرياضي بأحدث البروتوكولات الطبية العالمية",
    sloganEn: "Rebuilding strength, restoring mobility, and returning athletes to peak performance.",
    whatsappNumber: "201129332296",
    phoneDisplay: "+201129332296",
    branchesCount: 1,
    emergencyHotline: "+201129332296",
    socials: {
      instagram: "https://www.instagram.com/fibers.physioclinic?obrf=amk4bWZqOXM2YmQ=",
      tiktok: "https://www.tiktok.com/@fibers.physioclinic"
    }
  },

  // CLINIC BRANCH (NEW CAIRO - PLATINUM CLUB)
  branches: [
    {
      id: "new-cairo",
      nameAr: "فرع التجمع الخامس (Platinum Club)",
      nameEn: "New Cairo Branch (Platinum Club)",
      cityAr: "التجمع الخامس، القاهرة الجديدة",
      cityEn: "5th Settlement, New Cairo",
      addressAr: "Platinum Club، قطامية ريزيدنس - أمام ملاعب البادل",
      addressEn: "Platinum Club, Katameya Residence, in front of Padel Courts",
      landmarkAr: "داخل Platinum Club - أمام ملاعب البادل مباشرة",
      landmarkEn: "Inside Platinum Club - Directly opposite Padel Courts",
      hoursAr: "السبت - الخميس: 2:00 م - 11:00 م ",
      hoursEn: "Sat - Thu: 2:00 PM - 11:00 PM ",
      phone: "01129332296",
      mapUrl: "https://maps.app.goo.gl/Xst3EeP8KLiw1fSM8?g_st=ic",
      badgeAr: "مجهز بأحدث أجهزة الريكفري والتأهيل الرياضي",
      badgeEn: "Equipped with advanced sports recovery & rehab"
    }
  ],

  services: [
    {
      id: "sports-rehab",
      category: "sports",
      titleAr: "تأهيل الإصابات الرياضية",
      titleEn: "Sports Injury Rehabilitation",
      shortDescAr: "برامج علاجية متقدمة لإصابات الرباط الصليبي، تمزق العضلات، والالتواءات المفصلية للرياضيين.",
      shortDescEn: "Comprehensive return-to-sport protocols for ACL tears, muscle strains, and athletic trauma.",
      suitableForAr: "لاعبي كرة القدم، الجري، الكروس فيت، ومحبي اللياقة",
      suitableForEn: "Athletes, footballers, runners, and crossfitters",
      featuresAr: [
        "تقييم حركي بيوميكانيكي دقيق بالفيديو",
        "تقوية عضلية تدريجية بدون ألم",
        "اختبارات العودة للملعب (Return to Play Testing)"
      ],
      featuresEn: [
        "Biomechanical movement assessment",
        "Progressive kinetic-chain reloading",
        "Validated Return-to-Play criteria"
      ],
      icon: "Activity"
    },
    {
      id: "spine-care",
      category: "spine",
      titleAr: "علاج آلام العمود الفقري والغضروف",
      titleEn: "Spine & Disc Care Clinic",
      shortDescAr: "علاج غير جراحي للانزلاق الغضروفي، عرق النسا، آلام الرقبة وأسفل الظهر بأحدث تقنيات تخفيف الضغط.",
      shortDescEn: "Non-surgical decompression and manual rehabilitation for sciatica, disc herniations, and neck pain.",
      suitableForAr: "مرضى آلام الظهر المزمنة، موظفي المكاتب، وحالات الانزلاق",
      suitableForEn: "Chronic back pain patients, desk workers, disc patients",
      featuresAr: [
        "تخفيف الضغط العصبي وإزالة الألم",
        "تمارين الثبات العميق لعضلات الجذع (Core Stability)",
        "تصحيح وضعيات القوام والجلوس"
      ],
      featuresEn: [
        "Targeted nerve decompression therapy",
        "Deep core muscular re-education",
        "Postural correction & ergonomic advice"
      ],
      icon: "Zap"
    },
    {
      id: "post-surgical",
      category: "surgery",
      titleAr: "التأهيل الحركي بعد العمليات",
      titleEn: "Post-Surgical Rehabilitation",
      shortDescAr: "إعادة بناء المدى الحركي بعد عمليات تغيير المفاصل، تثبيت الكسور، وترميم الأوتار والأربطة.",
      shortDescEn: "Evidence-based post-op protocols for joint replacements, fracture fixations, and tendon repairs.",
      suitableForAr: "ما بعد جراحات الركبة، الكتف، وعمليات العمود الفقري",
      suitableForEn: "Post knee arthroscopy, shoulder labrum, spine surgeries",
      featuresAr: [
        "إزالة التورم واستعادة الحركة الطبيعية مبكراً",
        "منع التيبس العضلي والمفصلي",
        "متابعة مستمرة مع الطبيب الجراح"
      ],
      featuresEn: [
        "Early effusion management & mobility",
        "Adhesion & stiffness prevention",
        "Direct coordination with orthopedic surgeons"
      ],
      icon: "ShieldCheck"
    },
    {
      id: "manual-therapy",
      category: "manual",
      titleAr: "العلاج اليدوي والإبر الجافة",
      titleEn: "Manual Therapy & Dry Needling",
      shortDescAr: "تحرير نقاط الزناد العضلية المؤلمة، تحريك المفاصل الموجه، وتخفيف التشنجات العضلية العميقة.",
      shortDescEn: "Myofascial trigger point release, joint mobilizations, and medical dry needling for immediate relief.",
      suitableForAr: "الشد العضلي المزمن، الصداع التوتري، والآلام الليفية",
      suitableForEn: "Tension headaches, chronic knots, fibromyalgia",
      featuresAr: [
        "إبر جافة معقمة من أطباء معتمدين دولياً",
        "تحسين فوري للمرونة وتدفق الدورة الدموية",
        "تقليل الحاجة للمسكنات الدوائية"
      ],
      featuresEn: [
        "Certified international dry needling experts",
        "Immediate blood flow & elasticity boost",
        "Reduced pharmaceutical reliance"
      ],
      icon: "Sparkles"
    },
    {
      id: "joint-care",
      category: "joints",
      titleAr: "تأهيل المفاصل وخشونة الركبة",
      titleEn: "Joint & Knee Restoration",
      shortDescAr: "برامج علاجية متخصصة لخشونة الركبة والكتف المتجمد واستعادة السائل المفصلي والتوازن الحركي.",
      shortDescEn: "Specialized non-invasive programs for knee osteoarthritis, frozen shoulder, and joint stiffness.",
      suitableForAr: "كبار السن، مرضى الخشونة، وحالات تيبس الكتف",
      suitableForEn: "Seniors, osteoarthritis patients, stiff joint sufferers",
      featuresAr: [
        "تقليل الاحتكاك المفصلي وتسكين الألم",
        "تقوية العضلات المحيطة بالمفصل لامتصاص الصدمات",
        "تدريبات التوازن الحركي ومنع السقوط"
      ],
      featuresEn: [
        "Joint decompression & friction reduction",
        "Perarticular shock-absorber muscle strengthening",
        "Proprioceptive balance & fall prevention"
      ],
      icon: "ShieldAlert"
    },
    {
      id: "athlete-recovery",
      category: "sports",
      titleAr: "الريكفري والاستشفاء الرياضي",
      titleEn: "Sports Recovery ",
      shortDescAr: "جلسات استشفاء احترافية بالأجهزة الهوائية المضغوطة (Normatec)، العلاج بالتبريد، والتفريغ العضلي.",
      shortDescEn: "Elite recovery suites with pneumatic compression boots, targeted cryotherapy, and flush massage.",
      suitableForAr: "الرياضيون قبل أو بعد البطولات والمباريات المجهدة",
      suitableForEn: "Pre-match preparation and post-competition recovery",
      featuresAr: [
        "تسريع طرد حمض اللاكتيك وتقليل الإجهاد",
        "أحدث أجهزة الضغط الهوائي العالمية",
        "استعادة حيوية العضلات وجاهزيتها للتمرين التالي"
      ],
      featuresEn: [
        "Accelerates lactic acid clearance",
        "Premium pneumatic recovery systems",
        "Restores muscle readiness in record time"
      ],
      icon: "Flame"
    }
  ],

  doctors: [
    {
      nameAr: "د. يوسف ايهاب صلاح",
      nameEn: "Dr. Yousef ehab salah",
      titleAr: "أخصائي العلاج الطبيعي وإصابات الملاعب",
      titleEn: "Specialist on sports injuries and rehabilitation",
      branchAr: "فرع التجمع الخامس (Platinum Club)",
      branchEn: "New Cairo Branch (Platinum Club)"
    },
    {
      nameAr: "د. شهد ايهاب مشعل",
      nameEn: "Dr.Shahd ehab mashaal ",
      titleAr: "أخصائية العلاج اليدوي والعمود الفقري",
      titleEn: "Spine & Manual Therapy Specialist",
      branchAr: "فرع التجمع الخامس (Platinum Club)",
      branchEn: "New Cairo Branch (Platinum Club)"
    }
    
  ],

  stats: [
    { value: "1,500+", labelAr: "رياضي ومريض تم علاجهم", labelEn: "Patients & Athletes Treated" },
    { value: "1", labelAr: "مقر رئيسي متكامل (Platinum Club)", labelEn: "Flagship Clinic (Platinum Club)" },
    { value: "98%", labelAr: "نسبة الرضا والتعافي التام", labelEn: "Recovery & Satisfaction Rate" },
    { value: "15+", labelAr: "طبيب ومعالج معتمد دولياً", labelEn: "Specialized Physical Therapists" }
  ],

  availableTimes: [
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM"
  ],

  faqs: [
    {
      qAr: "هل أحتاج إلى تحويل من طبيب عظام قبل الحضور؟",
      qEn: "Do I need an orthopedic referral before visiting FIBERS?",
      aAr: "لا، يقدم فريق أطباء واستشاريي فايبرز كشفاً وتقييماً حركياً شاملاً في أول جلسة لتحديد خطة العلاج المناسبة بدقة.",
      aEn: "No referral is required. Our clinical specialists perform a thorough diagnostic assessment in your first session to tailor your recovery protocol."
    },
    {
      qAr: "كيف يتم تأكيد الحجز بعد إرسال رسالة الواتساب؟",
      qEn: "How is the reservation confirmed via WhatsApp?",
      aAr: "بمجرد إرسال البيانات المنسقة عبر الواتساب، يرد عليك منسق المواعيد في فايبرز خلال دقائق لتأكيد الموعد وإرسال لوكيشن الفرع والتعليمات.",
      aEn: "Upon submitting your pre-filled message, our clinic coordinator will reply within minutes to confirm the slot and send exact branch directions."
    },
    {
      qAr: "أين يقع مقر عيادة فايبرز؟",
      qEn: "Where is FIBERS Clinic located?",
      aAr: "تقع عيادتنا في التجمع الخامس داخل Platinum Club (قطامية ريزيدنس) مباشرة أمام ملاعب البادل، مجهزة بأحدث أجهزة الاستشفاء والتأهيل الرياضي.",
      aEn: "Our clinic is located in New Cairo inside Platinum Club (Katameya Residence), directly in front of the Padel courts, fully equipped with advanced recovery technology."
    }
  ]
};
