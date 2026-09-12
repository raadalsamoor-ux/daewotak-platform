import { WeddingData } from '../types';

export const initialWeddingData: WeddingData = {
  groomName: 'سعود',
  brideName: 'الجوهرة',
  groomFamily: 'آل عبد العزيز',
  brideFamily: 'آل سُليمان',
  weddingDateGregorian: '2026-11-20',
  weddingDateHijri: '10 جمادى الأولى 1448 هـ',
  weddingDayArabic: 'يوم الجمعة المبارك',
  weddingTime: '08:30 مساءً',
  venueName: 'فندق الريتز-كارلتون',
  hallName: 'القاعة الملكية الكبرى (The Royal Ballroom)',
  city: 'الرياض',
  address: 'طريق مكة المكرمة، الهدا، الرياض 11493',
  googleMapsUrl: 'https://maps.google.com/?q=The+Ritz-Carlton+Riyadh',
  wazeUrl: 'https://waze.com/ul?ll=24.66744,46.62689&navigate=yes',
  appleMapsUrl: 'https://maps.apple.com/?daddr=The+Ritz-Carlton+Riyadh',
  instagramUrl: 'https://www.instagram.com/da3wtakq?stkn=MTU0ZndxdTN5OTUzZw==',
  instagramHandle: 'da3wtakq',
  whatsappNumber: '+966500000000',
  quranVerse: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
  verseSurah: 'سورة الروم - الآية 21',
  welcomeMessage: 'يتشرف الكرام بدعوتكم لحضور حفل الزفاف البهيج ومشاركتنا أجمل ليالي العمر، لتكتمل فرحتنا بطيب حضوركم وجميل دعواتكم.',
  dressCode: 'الزي الوطني الرسمي للرجال / أبهى إطلالات السهرة للسيدات',
  themeId: 'teatro',
  themeName: 'تياترو الملكي (Teatro Royale)',
  musicTrack: 'oud',
  fontFamily: 'amiri',
  language: 'ar',
  particlesEffect: 'mix',
  showVipTicket: true,
  showCalendarSync: true,
  showGiftRegistry: true,
  showPhotoMemories: true,
  showDressCodePalette: true,
  guestName: 'سعادة الأستاذ / فهد بن ناصر آل الشيخ',
  guestSeat: 'طاولة كبار الشخصيات VIP (رقم 04)',
  guestCount: 2,
  bankInfo: {
    bankName: 'مصرف الراجحي (Al Rajhi Bank)',
    accountHolder: 'سعود بن عبدالعزيز',
    iban: 'SA4480000412608010123456',
    accountNumber: '412608010123456',
    note: 'مشاركتكم وحضوركم هي أغلى وأجمل الهدايا، ولمن رغب بمشاركتنا فرحتنا بهدية نقدية'
  },
  dressCodePalette: [
    { name: 'الأسود الملكي', nameEn: 'Royal Black', hex: '#0f1118' },
    { name: 'الذهب المعتّق', nameEn: 'Antique Gold', hex: '#d4af37' },
    { name: 'العاجي اللؤلؤي', nameEn: 'Pearl Ivory', hex: '#fdfbf7' },
    { name: 'الزمرد العميق', nameEn: 'Emerald Green', hex: '#0e382c' },
    { name: 'الوردي المغبر', nameEn: 'Dusty Rose', hex: '#d99b82' }
  ],
  photos: [
    {
      id: 'photo-1',
      url: '/velvet-red.jpg',
      caption: 'القاعة الملكية الكبرى والديكورات المذهبة لليلة العمر'
    },
    {
      id: 'photo-2',
      url: '/wedding_invitation_velvet.jpg',
      caption: 'أرقى تفاصيل الضيافة العربية والبخور والورود الملكية'
    }
  ],
  notes: [
    {
      icon: 'HeartHandshake',
      title: 'حضوركم شرف وفرحة',
      description: 'فرحتنا تكتمل بلقياكم ومشاركتكم أسعد لحظاتنا'
    },
    {
      icon: 'Baby',
      title: 'جنة الأطفال منازلهم',
      description: 'نرجو المعذرة لعدم قبول اصطحاب الأطفال حرصاً على راحتكم'
    },
    {
      icon: 'CameraOff',
      title: 'حفظ الخصوصية',
      description: 'نرجو التكرم بعدم التصوير بالهواتف النقالة خلال فقرات الحفل'
    },
    {
      icon: 'Sparkles',
      title: 'كود اللباس (Dress Code)',
      description: 'الزي الرسمي السعودي الفاخر / أزياء السهرة الراقية'
    }
  ],
  timeline: [
    {
      time: '08:30 مساءً',
      title: 'استقبال الضيوف الكرام',
      description: 'ترحيب حار بالبخور والقهوة العربية الأصيلة والمشروبات الترحيبية',
      icon: 'DoorOpen'
    },
    {
      time: '09:45 مساءً',
      title: 'الزفة الملكية للعروسين',
      description: 'لحظة دخول العروسين تحت أنغام الألحان الملكية والزغاريد',
      icon: 'Crown'
    },
    {
      time: '10:30 مساءً',
      title: 'مأدبة العشاء الفاخرة',
      description: 'بوفيه عشاء ملكي خاص احتفاءً بالحضور الكريم',
      icon: 'Utensils'
    },
    {
      time: '11:45 مساءً',
      title: 'تقطيع قالب الحلوى وتوديع الضيوف',
      description: 'مشاركة قطع كعكة الزفاف والتقاط الصور التذكارية وتوديع الأحباب',
      icon: 'Cake'
    }
  ]
};
