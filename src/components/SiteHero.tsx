import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Star, 
  ArrowLeft, 
  Play, 
  Check, 
  Palette, 
  Send, 
  HeartHandshake
} from 'lucide-react';
import { InteractivePhoneMockup } from './InteractivePhoneMockup';

interface SiteHeroProps {
  onOpenLiveDemo: () => void;
  onExploreTemplates: () => void;
  onOpenStudio: () => void;
  instagramUrl: string;
}

export const SiteHero: React.FC<SiteHeroProps> = ({
  onOpenLiveDemo,
  onExploreTemplates,
  onOpenStudio,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#d4af37]/15">
      {/* Ambient background glow & luxury patterns */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          opacity: [0.4, 0.7, 0.4] 
        }} 
        transition={{ 
          repeat: Infinity, 
          duration: 8, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-gradient-to-tr from-[#581825]/20 via-[#d4af37]/10 to-transparent blur-[140px] pointer-events-none rounded-full" 
      />
      <div className="absolute top-12 right-12 w-80 h-80 bg-[#581825]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#d4af37]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Right Column: Text, Controls & Steps (Arabic RTL) */}
          <div className="lg:col-span-7 text-right space-y-7">
            
            {/* 1. Top Small Badge: "دعوات زفاف رقمية" */}
            <motion.div 
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#581825]/30 to-[#d4af37]/15 border border-[#d4af37]/35 text-[#f5e7a9] text-xs font-semibold shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span>دعوات زفاف رقمية</span>
            </motion.div>

            {/* 2. Bold & Royal Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold font-serif leading-[1.25] sm:leading-[1.2] text-white tracking-tight"
            >
              لحظتكم…{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f7e7a8] to-[#d4af37]">
                تستحق دعوة استثنائية.
              </span>
            </motion.h1>

            {/* 3. Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed font-light max-w-xl"
            >
              اختر تصميمك الملكي، خصّص تفاصيل ليلتكم فورياً، واستلم رابط دعوتكم التفاعلي مع رمز QR عالي الدقة بعد إتمام الدفع مباشرة.
            </motion.p>

            {/* 4. Primary Call To Action Buttons (Self-Serve Design & Preview) */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="pt-1 flex flex-wrap items-center gap-4"
            >
              {/* Primary Burgundy Radiant Button: ابدأ تصميم دعوتك الآن */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onExploreTemplates}
                className="relative overflow-hidden group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#581825] via-[#782233] to-[#45121c] border border-[#d4af37]/45 shadow-[0_12px_30px_-8px_rgba(88,24,37,0.8),0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_16px_36px_-6px_rgba(88,24,37,0.9),0_0_28px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer"
              >
                {/* Shimmer light sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <Sparkles className="w-4 h-4 text-[#f7e7a8] transition-transform group-hover:rotate-12" />
                <span>ابدأ تصميم دعوتك الآن</span>
                <ArrowLeft className="w-4 h-4 text-[#f7e7a8] transition-transform group-hover:-translate-x-1" />
              </motion.button>

              {/* Secondary Button: معاينة تجريبية حية */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenLiveDemo}
                className="flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold text-[#f5e7a9] bg-[#131926]/90 border border-[#d4af37]/30 hover:border-[#d4af37]/60 hover:bg-[#1c2436] transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#d4af37]" />
                <span>تجربة الدعوة التفاعلية</span>
              </motion.button>
            </motion.div>

            {/* 5. Rating Section: "★ 4.9 (223 تقييماً) • +2000 ثنائي" */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              {/* Couple Avatars Stack */}
              <div className="flex items-center -space-x-2.5 space-x-reverse">
                <div className="w-8 h-8 rounded-full border-2 border-[#090b10] bg-[#581825] flex items-center justify-center text-[11px] font-bold text-[#f7e7a8] shadow-md">
                  ر&ي
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#090b10] bg-[#1a2233] flex items-center justify-center text-[11px] font-bold text-[#d4af37] shadow-md">
                  س&ج
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#090b10] bg-[#2a1727] flex items-center justify-center text-[11px] font-bold text-pink-300 shadow-md">
                  ف&ن
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#090b10] bg-[#15241b] flex items-center justify-center text-[10px] font-bold text-emerald-300 shadow-md">
                  +2k
                </div>
              </div>

              {/* Rating Text & Stars */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">
                  ★ 4.9 <span className="text-gray-400 font-normal">(223 تقييماً)</span> • <span className="text-[#f7e7a8] font-bold">+2000 ثنائي</span>
                </span>
              </div>
            </motion.div>

            {/* 6. Circular Workflow Steps: (1. اختارا تصميماً  2. شاركا تفاصيلكما  3. نصمم، وأنتم توافقان) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="pt-6 border-t border-white/10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
                
                {/* Step 1 */}
                <div className="flex items-center sm:flex-col sm:items-center text-right sm:text-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#581825] to-[#3a0d16] border border-[#d4af37]/60 flex items-center justify-center text-sm font-bold text-[#f7e7a8] shrink-0 shadow-md shadow-[#581825]/40">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">اختارا تصميماً</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">من كتالوج النماذج الحصرية</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center sm:flex-col sm:items-center text-right sm:text-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#581825] to-[#3a0d16] border border-[#d4af37]/60 flex items-center justify-center text-sm font-bold text-[#f7e7a8] shrink-0 shadow-md shadow-[#581825]/40">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">شاركا تفاصيلكما</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">الأسماء، الموعد، والقاعة</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center sm:flex-col sm:items-center text-right sm:text-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#581825] to-[#3a0d16] border border-[#d4af37]/60 flex items-center justify-center text-sm font-bold text-[#f7e7a8] shrink-0 shadow-md shadow-[#581825]/40">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">نصمم، وأنتم توافقان</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">تعديلات مجانية حتى الرضا</p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Left Column: Interactive Smartphone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <InteractivePhoneMockup onOpenLiveDemo={onOpenLiveDemo} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

