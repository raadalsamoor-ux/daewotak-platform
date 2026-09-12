import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, ArrowUp, Sparkles, Send, MapPin } from 'lucide-react';
import { SiteNavTab } from '../types';

interface SiteFooterProps {
  onSelectTab: (tab: SiteNavTab) => void;
  onOpenLiveDemo: () => void;
  instagramUrl: string;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  onSelectTab,
  onOpenLiveDemo,
  instagramUrl
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#050608] text-gray-400 border-t border-[#d4af37]/20 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-right pb-12 border-b border-white/10">
          
          {/* Col 1: Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-end">
              <div className="text-right">
                <span className="text-xl font-bold font-serif text-white tracking-wide">
                  دَعْـوَتُـكْ
                </span>
                <span className="text-[10px] block text-[#d4af37] font-mono tracking-widest">
                  DA3WTAKQ LUXURY
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa8010] p-[1px]">
                <div className="w-full h-full bg-[#0d1117] rounded-[10px] flex items-center justify-center font-bold font-serif text-[#d4af37]">
                  د
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-gray-400">
              المنصة الرائدة في تصميم دعوات الزفاف والمناسبات الرقمية الفاخرة ثلاثية الأبعاد بأسلوب سينمائي يجمع بين أصالة التقاليد وأحدث تقنيات الويب العالمية.
            </p>

            <div className="flex items-center gap-3 justify-end pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-pink-400 hover:text-white hover:bg-pink-600/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif border-b border-white/10 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('home')} className="hover:text-[#d4af37] transition-colors">
                  الصفحة الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('templates')} className="hover:text-[#d4af37] transition-colors">
                  معرض تصاميم الدعوات
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('studio')} className="hover:text-[#d4af37] transition-colors">
                  استوديو تخصيص الأسماء
                </button>
              </li>
              <li>
                <button onClick={onOpenLiveDemo} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 justify-end text-[#d4af37] font-semibold">
                  <span>معاينة نموذج تياترو 3D</span>
                  <Sparkles className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('packages')} className="hover:text-[#d4af37] transition-colors">
                  باقات الأسعار والطلب
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Features & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif border-b border-white/10 pb-2">
              خدمات وتكاملات
            </h4>
            <ul className="space-y-2 text-xs">
              <li>تأكيد الحضور عبر إنستغرام (RSVP)</li>
              <li>فتح المظروف والختم الشمعي 3D</li>
              <li>تكامل خرائط Google Maps والملاحة</li>
              <li>العداد التنازلي الرقمي الدقيق</li>
              <li>إضافة الموعد لتقويم الجوال بلمسة زر</li>
              <li>معزوفات وألحان موسيقية ملكية هادئة</li>
            </ul>
          </div>

          {/* Col 4: Instagram & Direct Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-serif border-b border-white/10 pb-2">
              تواصل معنا مباشرة
            </h4>
            <p className="text-xs text-gray-400">
              يسعدنا الرد على استفساراتكم وتخصيص دعوتكم عبر حسابنا الرسمي في إنستغرام:
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-950 to-pink-950 text-pink-200 border border-pink-500/30 text-xs font-bold hover:brightness-120 transition-all"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>@da3wtakq • إنستغرام</span>
            </a>
            <p className="text-[11px] text-gray-500 pt-2">
              متاحون يومياً لخدمتكم وإنجاز طلباتكم خلال ساعات.
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()} منصة</span>
            <span className="text-[#d4af37] font-bold">دعوتك (Da3wtakq)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </motion.footer>
  );
};
