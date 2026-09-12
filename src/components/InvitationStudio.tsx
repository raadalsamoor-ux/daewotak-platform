import React, { useState } from 'react';
import { 
  Sliders, 
  Save, 
  Eye, 
  RefreshCw, 
  Instagram, 
  Share2, 
  Check, 
  MapPin, 
  Calendar, 
  Music, 
  Sparkles,
  ChevronRight,
  Copy,
  QrCode,
  Gift,
  Shirt,
  BookOpen,
  Phone,
  Landmark,
  DoorOpen,
  Mail,
  BadgeCheck
} from 'lucide-react';
import { WeddingData, InvitationTemplate } from '../types';
import { templatesList } from '../data/templatesData';
import { PoetryLibraryModal } from './PoetryLibraryModal';

interface InvitationStudioProps {
  weddingData: WeddingData;
  onUpdateWeddingData: (updated: WeddingData) => void;
  onOpenLiveDemo: () => void;
  onOpenShareModal: () => void;
  selectedTemplate?: InvitationTemplate;
  onOpenDraftPreview?: () => void;
}

export const InvitationStudio: React.FC<InvitationStudioProps> = ({
  weddingData,
  onUpdateWeddingData,
  onOpenLiveDemo,
  onOpenShareModal,
  selectedTemplate,
  onOpenDraftPreview
}) => {
  const [formData, setFormData] = useState<WeddingData>({ ...weddingData });
  const [savedNotice, setSavedNotice] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeStudioTab, setActiveStudioTab] = useState<
    'names' | 'datetime' | 'location' | 'theme' | 'vip' | 'gifts' | 'etiquette'
  >('names');
  const [isPoetryModalOpen, setIsPoetryModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBankChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      bankInfo: {
        ...(prev.bankInfo || {
          bankName: 'مصرف الراجحي',
          accountHolder: '',
          iban: '',
          accountNumber: '',
          note: ''
        }),
        [name]: value
      }
    }));
  };

  const handleSave = () => {
    onUpdateWeddingData(formData);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleSelectTemplateTheme = (template: InvitationTemplate) => {
    const updated = {
      ...formData,
      themeId: template.id,
      themeName: template.title
    };
    setFormData(updated);
    onUpdateWeddingData(updated);
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleApplyPoem = (poemText: string) => {
    setFormData((prev) => ({
      ...prev,
      welcomeMessage: poemText
    }));
    onUpdateWeddingData({
      ...formData,
      welcomeMessage: poemText
    });
  };

  // Generate Instagram order message
  const igOrderMessage = encodeURIComponent(
    `مرحباً فريق دعوتك (@da3wtakq)، أود تأكيد وطلب تصميم بطاقة دعوتنا الرقمية:\n` +
    `• العريس: ${formData.groomName} (${formData.groomFamily})\n` +
    `• العروس: ${formData.brideName} (${formData.brideFamily})\n` +
    `• الموعد: ${formData.weddingDayArabic} ${formData.weddingDateGregorian} (${formData.weddingDateHijri})\n` +
    `• المكان: ${formData.venueName} - ${formData.city}\n` +
    `• الثيم المختار: ${formData.themeName || 'تياترو الملكي'}`
  );

  return (
    <section id="studio-section" className="py-16 sm:py-24 bg-[#07090e] relative border-b border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="text-right space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
              <Sliders className="w-3.5 h-3.5" />
              <span>استوديو التخصيص التفاعلي المباشر</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              خصص تفاصيل ليلة العمر بدقة وفخامة
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              أدخل أسماء العروسين، التاريخ الهجري والميلادي، وموقع القاعة وشاهد التحديث الفوري على بطاقة الدعوة التفاعلية ثلاثية الأبعاد.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onOpenDraftPreview && (
              <button
                onClick={() => {
                  handleSave();
                  onOpenDraftPreview();
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#0b0e14] font-black text-sm shadow-xl shadow-[#d4af37]/25 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#0b0e14]" />
                <span>معاينة المسودة ومتابعة الطلب (Checkout)</span>
              </button>
            )}

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-all cursor-pointer"
            >
              {savedNotice ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4 text-[#d4af37]" />}
              <span>{savedNotice ? 'تم الحفظ!' : 'حفظ التعديلات'}</span>
            </button>

            <button
              onClick={onOpenLiveDemo}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 font-semibold text-sm border border-white/10 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#d4af37]" />
              <span>معاينة 3D</span>
            </button>
          </div>
        </div>

        {/* Try Before You Pay Banner (Halaheel Signature) */}
        <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-[#171c26] via-[#201c13] to-[#171c26] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-right">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
              <BadgeCheck size={22} />
            </div>
            <div>
              <div className="text-xs font-bold text-[#f5e7a9]">ميزة "جرّب دعوتك قبل الدفع" (Try Before You Pay)</div>
              <div className="text-[11px] text-gray-400">يمكنك تعديل كافة الأسماء والمواعيد وتجربة رابط الدعوة والمعاينة ثلاثية الأبعاد مجاناً وبدون أي بطاقة دفع مسبقة!</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenLiveDemo}
            className="px-4 py-2 rounded-xl bg-[#d4af37]/20 hover:bg-[#d4af37]/30 border border-[#d4af37]/40 text-[#f5e7a9] text-xs font-bold whitespace-nowrap transition-colors cursor-pointer"
          >
            اختبر دعوتك الآن 3D
          </button>
        </div>

        {/* Studio Layout: Form Tabs + Live Mini Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-8 bg-[#0d1017] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Tabs for Form Subsections */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto">
              <button
                onClick={() => setActiveStudioTab('names')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeStudioTab === 'names'
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                1. الأسماء والعائلات
              </button>
              <button
                onClick={() => setActiveStudioTab('datetime')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeStudioTab === 'datetime'
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                2. الموعد والتوقيت
              </button>
              <button
                onClick={() => setActiveStudioTab('location')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeStudioTab === 'location'
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                3. القاعة والموقع
              </button>
              <button
                onClick={() => setActiveStudioTab('theme')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeStudioTab === 'theme'
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                4. اختيار الثيم واللون
              </button>
              <button
                onClick={() => setActiveStudioTab('vip')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeStudioTab === 'vip'
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <QrCode size={13} />
                <span>5. بطاقة VIP والباركود</span>
              </button>
              <button
                onClick={() => setActiveStudioTab('gifts')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeStudioTab === 'gifts'
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Gift size={13} />
                <span>6. الآيبان والهدايا</span>
              </button>
              <button
                onClick={() => setActiveStudioTab('etiquette')}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeStudioTab === 'etiquette'
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Shirt size={13} />
                <span>7. كود اللباس والتعليمات</span>
              </button>
            </div>

            {/* TAB 1: Names */}
            {activeStudioTab === 'names' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Occasion Type Selector (Halaheel Style) */}
                <div className="space-y-2 text-right">
                  <label className="text-xs font-medium text-gray-300">نوع المناسبة الاحتفالية</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { id: 'wedding', label: 'زفاف وزواج', icon: '💍' },
                      { id: 'engagement', label: 'ملكة وقران', icon: '📜' },
                      { id: 'henna', label: 'ليلة حناء', icon: '🌿' },
                      { id: 'reception', label: 'استقبال مواليد', icon: '🍼' },
                      { id: 'graduation', label: 'تخرج واحتفال', icon: '🎓' },
                    ].map((occ) => (
                      <button
                        key={occ.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, eventType: occ.id as any }))}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          (formData.eventType || 'wedding') === occ.id
                            ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5e7a9] font-bold shadow-sm'
                            : 'bg-[#131722] border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-base block mb-0.5">{occ.icon}</span>
                        <span className="text-xs">{occ.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">اسم العريس الكريم</label>
                    <input
                      type="text"
                      name="groomName"
                      value={formData.groomName}
                      onChange={handleChange}
                      placeholder="مثال: سعود"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">عائلة العريس</label>
                    <input
                      type="text"
                      name="groomFamily"
                      value={formData.groomFamily}
                      onChange={handleChange}
                      placeholder="مثال: آل سعود"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">اسم العروس الكريمة</label>
                    <input
                      type="text"
                      name="brideName"
                      value={formData.brideName}
                      onChange={handleChange}
                      placeholder="مثال: الجوهرة"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">عائلة العروس</label>
                    <input
                      type="text"
                      name="brideFamily"
                      value={formData.brideFamily}
                      onChange={handleChange}
                      placeholder="مثال: آل مبارك"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-right">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-gray-300">عبارة الترحيب والدعوة</label>
                    <button
                      type="button"
                      onClick={() => setIsPoetryModalOpen(true)}
                      className="px-2.5 py-1 rounded-lg bg-[#d4af37]/15 hover:bg-[#d4af37]/25 text-[#f5e7a9] text-xs font-semibold flex items-center gap-1 border border-[#d4af37]/30 transition-colors cursor-pointer"
                    >
                      <BookOpen size={13} className="text-[#d4af37]" />
                      <span>اختيار من مكتبة الأشعار الملكية</span>
                    </button>
                  </div>
                  <textarea
                    name="welcomeMessage"
                    value={formData.welcomeMessage}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: Date & Time */}
            {activeStudioTab === 'datetime' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">يوم الحفل</label>
                    <input
                      type="text"
                      name="weddingDayArabic"
                      value={formData.weddingDayArabic}
                      onChange={handleChange}
                      placeholder="مثال: يوم الجمعة"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">التاريخ الميلادي (YYYY-MM-DD)</label>
                    <input
                      type="date"
                      name="weddingDateGregorian"
                      value={formData.weddingDateGregorian}
                      onChange={handleChange}
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">التاريخ الهجري المبارك</label>
                    <input
                      type="text"
                      name="weddingDateHijri"
                      value={formData.weddingDateHijri}
                      onChange={handleChange}
                      placeholder="مثال: 14 شعبان 1447 هـ"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 text-right flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>
                    العداد التنازلي للثواني والدقائق والأيام في البطاقة سيعمل تلقائياً بدقة بالاعتماد على التاريخ الميلادي المحدد أعلاه.
                  </span>
                </div>
              </div>
            )}

            {/* TAB 3: Location & Instagram RSVP */}
            {activeStudioTab === 'location' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">اسم الفندق أو القصر</label>
                    <input
                      type="text"
                      name="venueName"
                      value={formData.venueName}
                      onChange={handleChange}
                      placeholder="مثال: فندق الريتز-كارلتون"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">اسم القاعة الداخلية</label>
                    <input
                      type="text"
                      name="hallName"
                      value={formData.hallName}
                      onChange={handleChange}
                      placeholder="مثال: قاعة الاحتفالات الكبرى"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">المدينة</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="مثال: الرياض"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-gray-300">العنوان التفصيلي</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="مثال: طريق مكة المكرمة، الهدا"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-right">
                  <label className="text-xs font-medium text-gray-300">رابط خريطة Google Maps للقاعة</label>
                  <input
                    type="url"
                    name="googleMapsUrl"
                    value={formData.googleMapsUrl}
                    onChange={handleChange}
                    placeholder="https://maps.google.com/..."
                    className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-pink-300">حساب إنستغرام لتأكيد الحضور</label>
                    <input
                      type="text"
                      name="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={handleChange}
                      placeholder="@da3wtakq"
                      className="w-full bg-[#131722] border border-pink-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2 text-right">
                    <label className="text-xs font-medium text-pink-300">رابط حساب الإنستغرام المباشر</label>
                    <input
                      type="url"
                      name="instagramUrl"
                      value={formData.instagramUrl}
                      onChange={handleChange}
                      placeholder="https://www.instagram.com/da3wtakq..."
                      className="w-full bg-[#131722] border border-pink-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Themes selection */}
            {activeStudioTab === 'theme' && (
              <div className="space-y-5 animate-fadeIn">
                {/* Opening Style Selector (Halaheel Signature: Door vs Envelope) */}
                <div className="p-4 rounded-2xl bg-[#090b10] border border-[#d4af37]/30 space-y-2 text-right">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#f5e7a9]">
                    <DoorOpen size={15} className="text-[#d4af37]" />
                    <span>طريقة فتح الدعوة عند دخول الضيوف (المؤثر التفاعلي):</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, openingStyle: 'gate' }))}
                      className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer flex items-center gap-3 ${
                        (formData.openingStyle || 'gate') === 'gate'
                          ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5e7a9] font-bold shadow-md'
                          : 'bg-[#131722] border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <DoorOpen size={22} className="text-[#d4af37] shrink-0" />
                      <div>
                        <div className="text-xs font-bold">نموذج "باب الفرح" الملكي (هلاهيل)</div>
                        <div className="text-[10px] text-gray-400">أبواب قصر عربية مزدوجة تفتح بتقنية 3D وزخارف أرابيسك</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, openingStyle: 'envelope' }))}
                      className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer flex items-center gap-3 ${
                        formData.openingStyle === 'envelope'
                          ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5e7a9] font-bold shadow-md'
                          : 'bg-[#131722] border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <Mail size={22} className="text-[#d4af37] shrink-0" />
                      <div>
                        <div className="text-xs font-bold">المظروف الملكي والختم الشمعي</div>
                        <div className="text-[10px] text-gray-400">ظرف كلاسيكي يرتفع ويخرج منه كرت الدعوة الذهبي</div>
                      </div>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-gray-400 text-right pt-2 border-t border-white/10">اختر الثيم اللوني المفضل لدعوتكم:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {templatesList.map((tpl) => (
                    <button
                      key={tpl.id}
                      onClick={() => handleSelectTemplateTheme(tpl)}
                      className={`p-4 rounded-xl border text-right transition-all flex items-center justify-between ${
                        formData.themeId === tpl.id || (!formData.themeId && tpl.id === 'teatro')
                          ? 'bg-[#d4af37]/15 border-[#d4af37] shadow-md shadow-[#d4af37]/20'
                          : 'bg-[#131722] border-white/10 hover:border-white/20 text-gray-300'
                      }`}
                    >
                      <div>
                        <p className="font-bold text-sm text-white">{tpl.title}</p>
                        <p className="text-[11px] text-gray-400">{tpl.categoryLabel}</p>
                      </div>
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white/20 shadow-inner"
                        style={{ backgroundColor: tpl.accentColor }}
                      />
                    </button>
                  ))}
                </div>

                {/* Particles Effect Setting */}
                <div className="pt-4 border-t border-white/10 space-y-2 text-right">
                  <p className="text-xs font-semibold text-[#f5e7a9]">مؤثرات تساقط الورد وجزيئات الذهب في الخلفية:</p>
                  <p className="text-[11px] text-gray-400">اختر الحركة الاحتفالية التي تظهر في خلفية بطاقة الدعوة:</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, particlesEffect: 'mix' }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.particlesEffect === 'mix' || !formData.particlesEffect
                          ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5e7a9]'
                          : 'bg-[#131722] border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <p className="text-xs font-bold">✨🌹 مزيج ملكي</p>
                      <p className="text-[10px] mt-0.5 opacity-75">ذهب وبتلات ورد</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, particlesEffect: 'gold' }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.particlesEffect === 'gold'
                          ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5e7a9]'
                          : 'bg-[#131722] border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <p className="text-xs font-bold">✨ جزيئات الذهب</p>
                      <p className="text-[10px] mt-0.5 opacity-75">بريق نجوم ولمعان</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, particlesEffect: 'petals' }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.particlesEffect === 'petals'
                          ? 'bg-rose-950/40 border-rose-500/60 text-rose-200'
                          : 'bg-[#131722] border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <p className="text-xs font-bold">🌹 بتلات الورد</p>
                      <p className="text-[10px] mt-0.5 opacity-75">تساقط رومانسي</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, particlesEffect: 'off' }))}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.particlesEffect === 'off'
                          ? 'bg-white/20 border-white/40 text-white'
                          : 'bg-[#131722] border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <p className="text-xs font-bold">إيقاف المؤثر</p>
                      <p className="text-[10px] mt-0.5 opacity-75">خلفية هادئة</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: VIP Guest Entry Pass & QR Barcode */}
            {activeStudioTab === 'vip' && (
              <div className="space-y-6 animate-fadeIn text-right">
                <div className="p-4 rounded-2xl bg-[#090b10] border border-[#d4af37]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <QrCode size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">إعداد تذاكر الدخول الإلكترونية والباركود الذكي</h4>
                    <p className="text-xs text-gray-400">تتيح تذاكر VIP تنظيم استقبال الضيوف وتوجيههم لمقاعدهم بكل يسر وسرعة عبر مسح رمز QR.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-300">اسم الضيف (نموذج افتراضي)</label>
                    <input
                      type="text"
                      name="guestName"
                      value={formData.guestName || ''}
                      onChange={handleChange}
                      placeholder="مثال: سعادة الأستاذ / فهد بن ناصر"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-300">رقم الطاولة أو المقعد</label>
                    <input
                      type="text"
                      name="guestSeat"
                      value={formData.guestSeat || ''}
                      onChange={handleChange}
                      placeholder="طاولة VIP رقم 04"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-300">عدد المقاعد المخصصة للضيف</label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      name="guestCount"
                      value={formData.guestCount || 2}
                      onChange={(e) => setFormData(prev => ({ ...prev, guestCount: Number(e.target.value) }))}
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-300">رقم واتساب العروسين لاستقبال الردود</label>
                    <input
                      type="text"
                      name="whatsappNumber"
                      value={formData.whatsappNumber || ''}
                      onChange={handleChange}
                      placeholder="+966500000000"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.showVipTicket !== false}
                      onChange={(e) => setFormData(prev => ({ ...prev, showVipTicket: e.target.checked }))}
                      className="rounded accent-[#d4af37] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs text-gray-200">إظهار قسم بطاقة دخول VIP في بطاقة الدعوة الحية</span>
                  </label>
                </div>
              </div>
            )}

            {/* TAB 6: Bank & Gifts Registry */}
            {activeStudioTab === 'gifts' && (
              <div className="space-y-6 animate-fadeIn text-right">
                <div className="p-4 rounded-2xl bg-[#090b10] border border-[#d4af37]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Landmark size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">إعداد بيانات التحويل والهدايا النقدية</h4>
                    <p className="text-xs text-gray-400">تيسير مشاركة الأهل والأصدقاء بهدية الزفاف عبر رقم آيبان رسمي موثوق مع زر النسخ السريع.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-300">اسم البنك</label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankInfo?.bankName || ''}
                      onChange={handleBankChange}
                      placeholder="مصرف الراجحي (Al Rajhi Bank)"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-300">اسم صاحب الحساب (المستفيد)</label>
                    <input
                      type="text"
                      name="accountHolder"
                      value={formData.bankInfo?.accountHolder || ''}
                      onChange={handleBankChange}
                      placeholder="سعود بن عبدالعزيز"
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-300">رقم الآيبان الدولي (IBAN)</label>
                  <input
                    type="text"
                    name="iban"
                    value={formData.bankInfo?.iban || ''}
                    onChange={handleBankChange}
                    placeholder="SA4480000412608010123456"
                    className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors font-mono"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-300">رسالة لطيفة للمهنئين</label>
                  <textarea
                    rows={2}
                    name="note"
                    value={formData.bankInfo?.note || ''}
                    onChange={handleBankChange}
                    placeholder="مشاركتكم وحضوركم هي أغلى الهدايا..."
                    className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.showGiftRegistry !== false}
                      onChange={(e) => setFormData(prev => ({ ...prev, showGiftRegistry: e.target.checked }))}
                      className="rounded accent-[#d4af37] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs text-gray-200">إظهار قسم الهدايا والآيبان في بطاقة الدعوة الحية</span>
                  </label>
                </div>
              </div>
            )}

            {/* TAB 7: Etiquette & Dress Code */}
            {activeStudioTab === 'etiquette' && (
              <div className="space-y-6 animate-fadeIn text-right">
                <div className="p-4 rounded-2xl bg-[#090b10] border border-[#d4af37]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Shirt size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">إرشادات الحفل وكود اللباس والتنبيهات</h4>
                    <p className="text-xs text-gray-400">توجيه الضيوف للأزياء المناسبة والتنبيه على خصوصية التصوير ومواعيد الحفل والأطفال.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-300">وصف كود اللباس (Dress Code)</label>
                  <input
                    type="text"
                    name="dressCode"
                    value={formData.dressCode || ''}
                    onChange={handleChange}
                    placeholder="الزي الوطني الرسمي للرجال / أبهى إطلالات السهرة للسيدات"
                    className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-300">رابط تطبيق Waze للوصول السريع</label>
                    <input
                      type="url"
                      name="wazeUrl"
                      value={formData.wazeUrl || ''}
                      onChange={handleChange}
                      placeholder="https://waze.com/..."
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-300">رابط خرائط Apple Maps</label>
                    <input
                      type="url"
                      name="appleMapsUrl"
                      value={formData.appleMapsUrl || ''}
                      onChange={handleChange}
                      placeholder="https://maps.apple.com/..."
                      className="w-full bg-[#131722] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.showDressCodePalette !== false}
                      onChange={(e) => setFormData(prev => ({ ...prev, showDressCodePalette: e.target.checked }))}
                      className="rounded accent-[#d4af37] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs text-gray-200">إظهار لوحة ألوان الحفل المقترحة</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.showCalendarSync !== false}
                      onChange={(e) => setFormData(prev => ({ ...prev, showCalendarSync: e.target.checked }))}
                      className="rounded accent-[#d4af37] w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs text-gray-200">إظهار أزرار حفظ الموعد في التقويم</span>
                  </label>
                </div>
              </div>
            )}

            {/* Action Bar inside studio */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {onOpenDraftPreview && (
                  <button
                    onClick={() => {
                      handleSave();
                      onOpenDraftPreview();
                    }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#0b0e14] font-black text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-[#0b0e14]" />
                    <span>متابعة الطلب والدفع (Checkout)</span>
                  </button>
                )}

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-all cursor-pointer"
                >
                  {savedNotice ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4 text-[#d4af37]" />}
                  <span>{savedNotice ? 'تم حفظ التعديلات!' : 'حفظ التعديلات'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenLiveDemo}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>معاينة حية 3D</span>
                </button>

                <button
                  onClick={handleCopyShareLink}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'تم نسخ الرابط' : 'نسخ رابط المسودة'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Side Mini Preview Card (4 Cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#131722] to-[#0d1017] border-2 border-[#d4af37]/40 shadow-2xl text-center relative overflow-hidden">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f5e7a9] text-[10px] mb-3">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>معاينة حية للبطاقة</span>
              </div>

              {/* Simulated Card */}
              <div className="p-5 rounded-2xl bg-[#090b10] border border-[#d4af37]/30 shadow-inner text-center space-y-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] bg-[#161b26] flex items-center justify-center mx-auto text-[#d4af37] font-serif font-bold text-lg">
                  {formData.groomName.slice(0, 1)} & {formData.brideName.slice(0, 1)}
                </div>

                <div>
                  <p className="text-[11px] text-[#d4af37] font-serif">حفل زفاف</p>
                  <h4 className="text-xl font-bold font-serif text-white mt-1">
                    {formData.groomName} & {formData.brideName}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-1">
                    {formData.groomFamily} و {formData.brideFamily}
                  </p>
                </div>

                <div className="py-2 px-3 rounded-lg bg-white/5 border border-white/5 text-[11px] text-gray-300 space-y-1">
                  <p className="text-[#f5e7a9] font-medium">{formData.weddingDayArabic} • {formData.weddingDateHijri}</p>
                  <p className="text-gray-400">{formData.venueName} - {formData.city}</p>
                </div>

                <button
                  onClick={onOpenLiveDemo}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-md shadow-[#d4af37]/20 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>فتح المعاينة الكاملة 3D</span>
                </button>
              </div>

              <div className="mt-4 text-[11px] text-gray-400 flex items-center justify-center gap-1">
                <span>تحديث تلقائي فوري فور الحفظ</span>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-4 rounded-2xl bg-[#10141e] border border-white/10 text-right space-y-2">
              <p className="text-xs font-bold text-white">هل تحتاج مساعدة في صياغة الدعوة؟</p>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                فريقنا في إنستغرام (@da3wtakq) جاهز لمساعدتكم في تنسيق العبارات والأشعار واختيار الألوان المناسبة لحفلكم.
              </p>
              <a
                href={formData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 font-semibold pt-1"
              >
                <span>مراسلة الدعم المباشر</span>
                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Royal Poetry Library Modal */}
      <PoetryLibraryModal
        isOpen={isPoetryModalOpen}
        onClose={() => setIsPoetryModalOpen(false)}
        onSelectPoem={handleApplyPoem}
      />
    </section>
  );
};
