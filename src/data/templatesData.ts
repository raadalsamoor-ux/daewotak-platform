import { InvitationTemplate } from '../types';

export const templatesList: InvitationTemplate[] = [
  {
    id: 'bab-alfarah',
    title: 'باب الفرح (Door of Joy)',
    tagline: 'النموذج الشهير المستوحى من هلاهيل بأبواب القصر المزدوجة التي تفتح بتقنية 3D وزخارف أرابيسك ملكية فاخرة',
    category: 'royal-dark',
    categoryLabel: 'أبواب الفرح 3D • هلاهيل',
    badge: 'طراز هلاهيل التفاعلي',
    bgGradient: 'from-[#0c0f16] via-[#171d2b] to-[#080a0f]',
    accentColor: '#d4af37',
    textColor: '#f5e7a9',
    previewImageAlt: 'نموذج باب الفرح الملكي',
    isFeatured: true,
    sampleGroom: 'عبدالعزيز',
    sampleBride: 'ريم',
    sampleVenue: 'قصر الفرح الملكي، الرياض',
    features: [
      'فتح أبواب القصر المزدوجة 3D بتأثير سينمائي خلاب',
      'حلقات طرق ذهبية تفاعلية ومؤثرات احتفالية',
      'لوحة متابعة الضيوف وخيارات وليمة العشاء',
      'تحديد نوع المناسبة (زواج، ملكة، حناء، مواليد)',
      'ميزة جرّب قبل الدفع (Try Before You Pay)',
      'تأكيد الحضور الذكي والربط المباشر بالواتساب'
    ]
  },
  {
    id: 'teatro',
    title: 'تياترو الملكي (Teatro Royale)',
    tagline: 'النموذج الأكثر فخامة باللون الأسود المات والذهب الدافئ مع فتح المظروف ثلاثي الأبعاد',
    category: 'royal-dark',
    categoryLabel: 'ملكي داكن فاخر',
    badge: 'الأكثر طلباً • النموذج المرجعي',
    bgGradient: 'from-[#0b0e14] via-[#111622] to-[#080a0f]',
    accentColor: '#d4af37',
    textColor: '#f5e7a9',
    previewImageAlt: 'دعوة تياترو الملكية باللون الأسود والذهب',
    isFeatured: true,
    sampleGroom: 'سعود',
    sampleBride: 'الجوهرة',
    sampleVenue: 'فندق الريتز-كارلتون، الرياض',
    features: [
      'مظروف 3D تفاعلي بختم شمعي أحمر مذهب',
      'عداد تنازلي رقمي فاخر للثواني',
      'تكامل مباشر مع إنستغرام لتأكيد الحضور',
      'موسيقى هادئة ومؤثرات صوتية راقية',
      'خريطة Google Maps متكاملة',
      'حفظ الموعد في تقويم الهاتف بضغطة زر'
    ]
  },
  {
    id: 'sapphire',
    title: 'الياقوت الكحلي (Royal Sapphire)',
    tagline: 'أناقة الكحلي الدبلوماسي العميق مع لمعة الفضة والبلاتين والذهب الأبيض',
    category: 'royal-dark',
    categoryLabel: 'ملكي داكن فاخر',
    badge: 'جديد 2026',
    bgGradient: 'from-[#081226] via-[#0d1c38] to-[#060c18]',
    accentColor: '#60a5fa',
    textColor: '#e0f2fe',
    previewImageAlt: 'دعوة الياقوت الكحلي الفاخرة',
    sampleGroom: 'فيصل',
    sampleBride: 'نورة',
    sampleVenue: 'قصر الثقافة، حي السفارات، الرياض',
    features: [
      'خلفية زرقاء داكنة ملكية مريحة للعين',
      'إطارات فضية وبلاتينية بارزة',
      'أزرار تواصل وتأكيد حضور سريعة',
      'خطوط عريضة ومودرن فائقة الوضوح',
      'متوافق 100% مع جميع الهواتف الذكية'
    ]
  },
  {
    id: 'emerald',
    title: 'الزمرد الأخضر (Emerald Majesty)',
    tagline: 'طابع ملكي مستوحى من لون الزمرد والبريق الذهبي بتصميم عربي أصيل',
    category: 'emerald-luxury',
    categoryLabel: 'زمردي وذهبي',
    bgGradient: 'from-[#061913] via-[#0b2920] to-[#04120d]',
    accentColor: '#34d399',
    textColor: '#d1fae5',
    previewImageAlt: 'دعوة الزمرد الأخضر الملكي',
    sampleGroom: 'سلطان',
    sampleBride: 'ريما',
    sampleVenue: 'فندق الفورسيزونز، برج المملكة',
    features: [
      'زخارف أرابيسك هندسية فاخرة',
      'مؤثرات بصرية 3D باردة وأنيقة',
      'رمز QR شخصي لكل ضيف',
      'ربط مباشر مع إنستغرام وخرائط الموقع'
    ]
  },
  {
    id: 'rosegold',
    title: 'الوردي الذهبي (Rose Gold Elegance)',
    tagline: 'رقة ونعومة الذهب الوردي بتدرجات دافئة رومانسية تلائم أرقى حفلات الزفاف النسائية',
    category: 'rose-gold',
    categoryLabel: 'وردي ذهبي',
    badge: 'مفضل للعرائس',
    bgGradient: 'from-[#1a0f14] via-[#24151d] to-[#12090e]',
    accentColor: '#f472b6',
    textColor: '#fce7f3',
    previewImageAlt: 'دعوة الوردي الذهبي الفاخرة',
    sampleGroom: 'عبدالرحمن',
    sampleBride: 'دلال',
    sampleVenue: 'قاعة نيارة للاحتفالات، الرياض',
    features: [
      'تدرجات ناعمة مريحة وفخمة',
      'بطاقات مائلة مع انعكاس ضوئي حريري',
      'ألحان رومانسية عذبة',
      'تأكيد الحضور بنقرة واحدة عبر إنستغرام'
    ]
  },
  {
    id: 'minimalist',
    title: 'المينيمال العصري (Nordic Minimal)',
    tagline: 'بساطة فائقة مع خطوط عربية لاتينية متناغمة وتركيز تام على أسماء العروسين وتفاصيل الحفل',
    category: 'modern-minimal',
    categoryLabel: 'عصري وبسيط',
    bgGradient: 'from-[#111317] via-[#16191f] to-[#0c0d10]',
    accentColor: '#e2e8f0',
    textColor: '#ffffff',
    previewImageAlt: 'دعوة مينيمال عصرية بسيطة',
    sampleGroom: 'محمد',
    sampleBride: 'سارة',
    sampleVenue: 'منتجع درة الرياض',
    features: [
      'تصميم مريح وخالٍ من التعقيد',
      'أعلى سرعة تحميل على شبكات الجوال',
      'سهولة تامة في المشاركة عبر واتساب وإنستغرام'
    ]
  },
  {
    id: 'champagne',
    title: 'الشمبانيا الكلاسيكي (Champagne Gold)',
    tagline: 'أناقة الألوان العاجية والذهبية الكلاسيكية المستوحاة من بطاقات الزفاف الملكية التاريخية',
    category: 'classic-gold',
    categoryLabel: 'كلاسيكي عاجي مذهب',
    bgGradient: 'from-[#17140f] via-[#241e15] to-[#100d09]',
    accentColor: '#eab308',
    textColor: '#fef08a',
    previewImageAlt: 'دعوة كلاسيكية مذهبة',
    sampleGroom: 'تركي',
    sampleBride: 'العنود',
    sampleVenue: 'فندق الفيصلية، الرياض',
    features: [
      'خطوط كاليغرافي تقليدية متقنة',
      'إطارات مذهبة ثلاثية الأبعاد',
      'موسيقى كلاسيكية هادئة'
    ]
  }
];
