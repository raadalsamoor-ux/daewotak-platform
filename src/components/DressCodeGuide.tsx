import React from 'react';
import { Sparkles, Shirt, Baby, CameraOff, Clock, ShieldCheck } from 'lucide-react';
import { WeddingData } from '../types';

interface DressCodeGuideProps {
  weddingData: WeddingData;
  className?: string;
}

export const DressCodeGuide: React.FC<DressCodeGuideProps> = ({
  weddingData,
  className = ''
}) => {
  const palette = weddingData.dressCodePalette || [
    { name: 'الأسود الملكي', nameEn: 'Royal Black', hex: '#0f1118' },
    { name: 'الذهب المعتّق', nameEn: 'Antique Gold', hex: '#d4af37' },
    { name: 'العاجي اللؤلؤي', nameEn: 'Pearl Ivory', hex: '#fdfbf7' },
    { name: 'الزمرد العميق', nameEn: 'Emerald Green', hex: '#0e382c' },
    { name: 'الوردي المغبر', nameEn: 'Dusty Rose', hex: '#d99b82' }
  ];

  return (
    <section className={`w-full py-10 px-4 ${className}`}>
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171e2c] border border-[#d4af37]/40 text-[#f5e7a9] text-xs font-tajawal mb-2 shadow-sm">
          <Shirt size={13} className="text-[#d4af37]" />
          <span>إرشادات الحفل وكود اللباس</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-amiri font-bold text-gold-gradient">
          دليل الزي وألوان الحفل المقترحة
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-cairo mt-1">
          {weddingData.dressCode || 'الزي الوطني الرسمي للرجال / أبهى إطلالات السهرة للسيدات'}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Color Palette Swatches */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#141824] to-[#0c0f16] border border-[#d4af37]/35 shadow-xl text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#f5e7a9] font-tajawal">
            <Sparkles size={14} className="text-[#d4af37]" />
            <span>لوحة الألوان المستحبة لإطلالات ضيوفنا الكرام</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-2">
            {palette.map((color, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white/20 shadow-lg transform group-hover:scale-110 transition-transform relative flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="w-4 h-4 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-white block font-tajawal">
                    {color.name}
                  </span>
                  {color.nameEn && (
                    <span className="text-[10px] text-gray-400 font-sans block">
                      {color.nameEn}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-gray-400 font-cairo max-w-lg mx-auto">
            اختياركم لهذه التدرجات يضفي تناغماً وأناقة ساحرة على صور ولقطات الحفل التذكارية.
          </p>
        </div>

        {/* Politeness & Etiquette Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Card 1: Children */}
          <div className="p-4 rounded-2xl bg-[#0e121a] border border-white/10 text-right space-y-2 hover:border-[#d4af37]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Baby size={18} />
            </div>
            <h4 className="text-sm font-bold text-white font-tajawal">
              جنة الأطفال منازلهم
            </h4>
            <p className="text-xs text-gray-400 font-cairo leading-relaxed">
              حرصاً على راحتكم وهدوء أجواء الاحتفال، نعتذر بكل لطف عن قبول اصطحاب الأطفال.
            </p>
          </div>

          {/* Card 2: Photography & Privacy */}
          <div className="p-4 rounded-2xl bg-[#0e121a] border border-white/10 text-right space-y-2 hover:border-[#d4af37]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <CameraOff size={18} />
            </div>
            <h4 className="text-sm font-bold text-white font-tajawal">
              حفظ الخصوصية التامة
            </h4>
            <p className="text-xs text-gray-400 font-cairo leading-relaxed">
              يُرجى عدم التصوير بالهواتف النقالة خلال فقرات الحفل والزفة، احتراماً لخصوصية الحضور.
            </p>
          </div>

          {/* Card 3: Gate Timing */}
          <div className="p-4 rounded-2xl bg-[#0e121a] border border-white/10 text-right space-y-2 hover:border-[#d4af37]/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Clock size={18} />
            </div>
            <h4 className="text-sm font-bold text-white font-tajawal">
              مواعيد الحضور والزفة
            </h4>
            <p className="text-xs text-gray-400 font-cairo leading-relaxed">
              تُفتح الأبواب لاستقبالكم الساعة 08:30 مساءً، وستُغلق البوابات مؤقتاً أثناء الزفة الملكية (09:45 م).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
