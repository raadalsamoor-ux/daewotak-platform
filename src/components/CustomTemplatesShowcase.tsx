import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Instagram, 
  ExternalLink, 
  Code, 
  Check, 
  Copy, 
  Play, 
  ChevronLeft,
  RotateCcw,
  Maximize2
} from 'lucide-react';

/**
 * 1. مصفوفة القوالب التفاعلية (Dynamic Templates Array)
 * يمكنك إضافة أو تبديل الروابط والقوالب بكل سهولة من هنا:
 */
export interface TemplateItem {
  id: number;
  title: string;
  category: string;
  description: string;
  demoUrl: string;
  instagramUrl: string;
  badge: string;
  previewImage: string;
}

export const myTemplates: TemplateItem[] = [
  {
    id: 1,
    title: "قالب المخمل الملكي (دعوة رعد وياسمين)",
    category: "تصميم عنابي ملكي تفاعلي",
    description: "تصميم عصري وتفاعلي فاخر يشارك برابط واحد بالألوان العنابية والمذهبة، مع عداد تنازلي ومعزوفة خاصة وتأكيد حضور مباشر.",
    demoUrl: "https://incredible-rabanadas-465b30.netlify.app/",
    instagramUrl: "https://www.instagram.com/da3wtakq?stkn=MTU0ZndxdTN5OTUzZw==",
    badge: "الأكثر طلباً",
    previewImage: "/velvet-red.jpg"
  }
];

export const templates: TemplateItem[] = myTemplates;

interface CustomTemplatesShowcaseProps {
  onOpenLiveDemo?: () => void;
  instagramUrl?: string;
}

export const CustomTemplatesShowcase: React.FC<CustomTemplatesShowcaseProps> = ({
  onOpenLiveDemo,
  instagramUrl = 'https://www.instagram.com/da3wtakq?stkn=MTU0ZndxdTN5OTUzZw=='
}) => {
  const [activeTemplate, setActiveTemplate] = useState<TemplateItem>(myTemplates[0]);
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [rotateValues, setRotateValues] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [displayMode, setDisplayMode] = useState<'interactive' | 'image'>('interactive');
  const [showImageZoom, setShowImageZoom] = useState<boolean>(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // زاوية دوران ثلاثية أبعاد لطيفة
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setRotateValues({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotateValues({ x: 0, y: 0 });
  };

  const handleSelectTemplate = (item: TemplateItem) => {
    setActiveTemplate(item);
    setIframeKey(prev => prev + 1);
  };

  const handleReloadIframe = () => {
    setIframeKey(prev => prev + 1);
  };

  const handleCopyCode = async () => {
    try {
      const res = await fetch('/wedding-landing.html');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    } catch {
      setCopiedCode(false);
    }
  };

  return (
    <div id="dynamic-showcase" className="relative py-12 lg:py-20 border-b border-[#D4AF37]/20 overflow-hidden bg-[#1A090D]">
      
      {/* Background ambient lighting - Dark Velvet & Gold */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#581825]/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-[#D4AF37]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Control Banner: Single-File Code Export & Preview */}
        <div className="mb-12 p-4 sm:p-5 rounded-3xl bg-[#140609]/90 border border-[#D4AF37]/35 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-right">
            <div className="w-11 h-11 rounded-2xl bg-[#581825] border border-[#D4AF37]/40 flex items-center justify-center text-[#F7E7A8] shrink-0 shadow-md">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>صفحة الهبوط الكاملة في ملف واحد (HTML + Tailwind CSS + JS)</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F7E7A8] border border-[#D4AF37]/40 font-mono font-bold">
                  جاهز 100%
                </span>
              </h4>
              <p className="text-xs text-gray-400 mt-0.5">
                مجسم آيفون (340×680px) مع دعم التمرير وحركات GSAP واللمس المباشر دون أي حجب تفاعل.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowCodeModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-200 border border-white/10 transition-colors"
            >
              <Code className="w-4 h-4 text-[#D4AF37]" />
              <span>معاينة ونسخ الكود</span>
            </button>

            <a
              href="/wedding-landing.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#aa8010] text-black text-xs font-bold shadow-lg hover:brightness-110 transition-all hover:scale-[1.02]"
            >
              <span>فتح الصفحة المستقلة</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 1. HERO SECTION WITH 3D TILT REAL PHONE MOCKUP (340px x 680px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
          
          {/* Right Column: Title, Description, Direct Instagram Button (RTL) */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#581825]/50 to-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F7E7A8] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>دعوات زفاف رقمية فاخرة</span>
            </div>

            {/* العنوان الرئيسي المطلوب نصاً */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold font-serif leading-[1.22] text-white tracking-tight">
              لحظتكم… <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F7E7A8] to-[#D4AF37]">
                تستحق دعوة استثنائية.
              </span>
            </h2>

            {/* الوصف المطلوب نصاً */}
            <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-xl">
              تصاميم عصرية وتفاعلية تُشارك برابط واحد بكل فخامة.
            </p>

            {/* زر الفعالية الرئيسي (CTA) إلى إنستغرام */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={activeTemplate.instagramUrl || instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#581825] via-[#781e30] to-[#45101b] text-white font-bold text-base border border-[#D4AF37]/45 shadow-[0_12px_32px_-8px_rgba(88,24,37,0.8),0_0_22px_rgba(212,175,55,0.25)] hover:shadow-[0_16px_38px_-6px_rgba(88,24,37,0.9),0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-[#F7E7A8]" />
                <span>طلب الدعوة عبر إنستغرام</span>
                <ChevronLeft className="w-4 h-4 text-[#F7E7A8] transition-transform group-hover:-translate-x-1" />
              </a>

              <a
                href={activeTemplate.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 hover:border-[#D4AF37]/50 transition-all"
              >
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                <span>فتح المعاينة الحية في نافذة جديدة</span>
              </a>
            </div>

            {/* شريط حالة القالب المعروض في الهاتف */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-[#D4AF37]/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h4 className="text-sm font-bold text-white">{activeTemplate.title}</h4>
                  <p className="text-xs text-[#D4AF37]">{activeTemplate.category} • تجربة تفاعلية حية</p>
                </div>
              </div>
              <button
                onClick={handleReloadIframe}
                className="flex items-center gap-1 text-xs text-gray-300 hover:text-[#F7E7A8] px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 transition-colors"
                title="إعادة تحميل المعاينة"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>تحديث الشاشة</span>
              </button>
            </div>

            {/* خطوات العمل الثلاث */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-right">
                <div className="w-8 h-8 rounded-full bg-[#581825] border border-[#D4AF37]/50 text-[#F7E7A8] font-bold text-xs flex items-center justify-center mb-2 shadow-sm">1</div>
                <h4 className="text-xs font-bold text-white">اختارا تصميماً</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">من الكتالوج بالأسفل</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-right">
                <div className="w-8 h-8 rounded-full bg-[#581825] border border-[#D4AF37]/50 text-[#F7E7A8] font-bold text-xs flex items-center justify-center mb-2 shadow-sm">2</div>
                <h4 className="text-xs font-bold text-white">شاركا تفاصيلكما</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">الأسماء والموعد والقاعة</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-right">
                <div className="w-8 h-8 rounded-full bg-[#581825] border border-[#D4AF37]/50 text-[#F7E7A8] font-bold text-xs flex items-center justify-center mb-2 shadow-sm">3</div>
                <h4 className="text-xs font-bold text-white">نصمم، وأنتم توافقان</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">تعديلات مجانية حتى الرضا</p>
              </div>
            </div>

          </div>

          {/* Left Column: Interactive 3D Tilt iPhone Mockup (340px * 680px) with Real Iframe & Image Toggle */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center" style={{ perspective: '1400px' }}>
            
            {/* أزرار التبديل بين المعاينة الحية وصورة التصميم الأصلية */}
            <div className="mb-3.5 flex items-center p-1 rounded-2xl bg-black/60 border border-[#D4AF37]/30 shadow-lg backdrop-blur-md">
              <button
                type="button"
                onClick={() => setDisplayMode('interactive')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  displayMode === 'interactive'
                    ? 'bg-gradient-to-r from-[#581825] to-[#801b31] text-[#F7E7A8] shadow-md border border-[#D4AF37]/40'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>📱</span>
                <span>المعاينة التفاعلية الحية</span>
              </button>
              <button
                type="button"
                onClick={() => setDisplayMode('image')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  displayMode === 'image'
                    ? 'bg-[#D4AF37] text-black shadow-md font-extrabold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>🖼️</span>
                <span>صورة التصميم الأصلية</span>
              </button>
            </div>

            <div className="relative">
              
              {/* هالة الوهج الخلفية الفاخرة */}
              <div 
                className="absolute inset-0 rounded-[50px] bg-gradient-to-r from-[#D4AF37]/20 via-[#581825]/45 to-transparent blur-[45px] -z-10 pointer-events-none"
                style={{ transform: 'translateY(15px) scale(0.95)' }}
              />

              {/* مجسم الآيفون بالأبعاد الصريحة 340px × 680px */}
              <motion.div
                ref={phoneRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX: rotateValues.x,
                  rotateY: rotateValues.y,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="relative rounded-[42px] shadow-2xl overflow-hidden bg-[#0c0d12] border-4 border-[#2d2e36] ring-1 ring-white/20 select-none cursor-pointer"
                style={{
                  width: '340px',
                  height: '680px',
                  transformStyle: 'preserve-3d'
                }}
              >
                
                {/* الجزيرة التفاعلية (Dynamic Island) - مع pointer-events: none الصارمة لمنع حجب التفاعل */}
                <div 
                  className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full border border-white/10 z-30 flex items-center justify-between px-3 shadow-inner pointer-events-none"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1b1c22] border border-white/20" />
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-[8px] text-[#F7E7A8] font-mono tracking-wider">
                      {displayMode === 'interactive' ? 'LIVE' : 'PHOTO'}
                    </span>
                  </div>
                </div>

                {/* شريط أسفل الشاشة (Home Indicator) - pointer-events: none لمنع حجب التفاعل */}
                <div 
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-30 pointer-events-none"
                />

                {/* إطار زجاجي ديكوري ناعم - pointer-events: none */}
                <div 
                  className="absolute inset-0 rounded-[38px] ring-1 ring-inset ring-white/10 z-20 pointer-events-none"
                />

                {displayMode === 'interactive' ? (
                  /* عنصر <iframe> المطلوب بالمواصفات الصارمة */
                  <iframe
                    key={iframeKey}
                    src={activeTemplate.demoUrl}
                    title="معاينة دعوة الزفاف التفاعلية"
                    className="w-full h-full border-0 block overflow-y-auto pointer-events-auto bg-[#0d0d12]"
                    loading="eager"
                    allow="autoplay; fullscreen"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      display: 'block',
                      overflowY: 'auto',
                      pointerEvents: 'auto'
                    }}
                  />
                ) : (
                  /* عرض صورة التصميم الأصلية بجودة عالية داخل شاشة الهاتف */
                  <div 
                    onClick={() => setShowImageZoom(true)}
                    className="w-full h-full relative group cursor-zoom-in overflow-hidden bg-[#120508]"
                  >
                    <img
                      src={activeTemplate.previewImage}
                      alt="صورة تصميم دعوة الزفاف المخملية الفاخرة"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    <div className="absolute bottom-6 inset-x-3 text-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#581825]/90 border border-[#D4AF37]/50 text-[#F7E7A8] text-[11px] font-bold shadow-lg backdrop-blur-md">
                        <span>🔍 انقر لتكبير الصورة الأصلية</span>
                      </span>
                    </div>
                  </div>
                )}

              </motion.div>

              {/* شريط معلومات التفاعل أسفل مجسم الهاتف */}
              <div className="mt-3.5 flex items-center justify-between px-2 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>
                    {displayMode === 'interactive' 
                      ? 'شاشة تفاعلية حية: يمكنك التمرير واللمس مباشرة' 
                      : 'عرض صورة التصميم الأصلية الفاخرة بالدقة الكاملة'}
                  </span>
                </span>
                {displayMode === 'interactive' ? (
                  <button
                    onClick={handleReloadIframe}
                    className="text-[#D4AF37] hover:text-[#F7E7A8] font-semibold text-[11px] underline"
                  >
                    إعادة تحميل ⟳
                  </button>
                ) : (
                  <button
                    onClick={() => setShowImageZoom(true)}
                    className="text-[#D4AF37] hover:text-[#F7E7A8] font-semibold text-[11px] underline"
                  >
                    تكبير الصورة 🔍
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* 2. CUSTOM TEMPLATES GALLERY (معرض القوالب التفاعلية) */}
        <div className="pt-12 border-t border-[#D4AF37]/20">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>كتالوج القوالب التفاعلية</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold font-serif text-white">
              معرض القوالب التفاعلية
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              اختر أي قالب لتحديث شاشة الآيفون بالأعلى فوراً وتجربة تفاعل الدعوة مباشرة.
            </p>
          </div>

          {/* Grid of Dynamic Templates */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((tpl) => {
              const isSelected = tpl.id === activeTemplate.id;
              return (
                <motion.div
                  key={tpl.id}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-3xl bg-gradient-to-b from-[#210c11] to-[#120508] border transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] ring-1 ring-[#D4AF37]'
                      : 'border-white/10 hover:border-[#D4AF37]/50 hover:shadow-xl'
                  }`}
                >
                  <div>
                    {/* Image Preview & Click to Select */}
                    <div 
                      onClick={() => {
                        handleSelectTemplate(tpl);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="relative w-full h-44 rounded-2xl overflow-hidden mb-4 bg-black cursor-pointer group-hover:scale-[1.01] transition-transform"
                    >
                      <img src={tpl.previewImage} alt={tpl.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2.5 right-2.5 text-[10px] px-2.5 py-1 rounded-full bg-[#581825]/90 text-[#F7E7A8] border border-[#D4AF37]/40 font-bold backdrop-blur-sm">
                        {tpl.badge}
                      </span>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white font-bold gap-1.5">
                        <Play className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                        <span>انقر للعرض في شاشة الهاتف</span>
                      </div>
                    </div>

                    {/* Template Info */}
                    <span className="text-[11px] text-[#D4AF37] font-semibold">{tpl.category}</span>
                    <h4 className="text-base font-bold text-white font-serif mt-1 mb-1.5">{tpl.title}</h4>
                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-light mb-4">{tpl.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <button
                      onClick={() => {
                        handleSelectTemplate(tpl);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#D4AF37] text-black shadow-md'
                          : 'bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10'
                      }`}
                    >
                      <span>{isSelected ? '✓ معروض حالياً في شاشة الهاتف' : 'معاينة في مجسم الهاتف'}</span>
                    </button>

                    <a
                      href={tpl.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#581825] via-[#781e30] to-[#581825] hover:brightness-110 text-white font-bold text-xs border border-[#D4AF37]/35 shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#F7E7A8]" />
                      <span>طلب هذا القالب عبر إنستغرام</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Code Viewer & Export Modal */}
      <AnimatePresence>
        {showCodeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl rounded-3xl bg-[#0e111a] border border-[#D4AF37]/40 shadow-2xl p-6 text-right flex flex-col max-h-[85vh]"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white bg-white/5"
                >
                  ✕
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#581825] text-[#F7E7A8] font-mono">
                    wedding-landing.html
                  </span>
                  <h3 className="text-base font-bold text-white font-serif">
                    الكود الكامل لصفحة الهبوط (ملف واحد جاهز)
                  </h3>
                </div>
              </div>

              <div className="py-4 text-xs text-gray-300">
                يحتوي هذا الملف على كود HTML و Tailwind CSS و JavaScript كامل مع مجسم الهاتف (340×680px) وعنصر الـ iframe المباشر ومصفوفة القوالب الديناميكية.
              </div>

              {/* Code Snippet Box */}
              <div className="flex-1 overflow-y-auto rounded-2xl bg-black/80 p-4 border border-white/10 font-mono text-xs text-emerald-400 text-left dir-ltr">
                <pre>{`const myTemplates = [
  {
    id: 1,
    title: "دعوة زفاف رقمية فاخرة",
    category: "تصميم عصري وتفاعلي",
    demoUrl: "https://incredible-rabanadas-465b30.netlify.app/",
    instagramUrl: "https://www.instagram.com/da3wtakq?stkn=MTU0ZndxdTN5OTUzZw=="
  }
];

// iPhone dimensions: 340px width, 680px height, rounded-[42px]
// iframe styling:
// width: 100%; height: 100%; border: none; display: block;
// overflow-y: auto; pointer-events: auto;`}</pre>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/wedding-landing.html"
                  download="wedding-landing.html"
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10"
                >
                  تحميل الملف wedding-landing.html
                </a>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#aa8010] text-black font-bold text-xs shadow-md hover:brightness-110"
                >
                  {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCode ? 'تم نسخ كود الملف كاملاً!' : 'نسخ كود الملف كاملاً'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {showImageZoom && (
          <div 
            onClick={() => setShowImageZoom(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_0_50px_rgba(212,175,55,0.35)] bg-[#140609]"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => setShowImageZoom(false)}
                  className="w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="relative max-h-[80vh] overflow-y-auto">
                <img
                  src={activeTemplate.previewImage}
                  alt="تصميم دعوة زفاف مخملية فاخرة"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block"
                />
              </div>

              <div className="p-4 bg-gradient-to-r from-[#1A090D] via-[#2A0D15] to-[#1A090D] border-t border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-serif font-bold text-sm">تصميم دعوة الزفاف المخملية الفاخرة</h4>
                  <p className="text-[#F7E7A8] text-xs">قوس مذهب، ورود عنابية، والعروس بفستان مخملي براق</p>
                </div>
                <a
                  href={activeTemplate.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#581825] to-[#781e30] text-white text-xs font-bold border border-[#D4AF37]/40 shadow-md"
                >
                  طلب التصميم
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
