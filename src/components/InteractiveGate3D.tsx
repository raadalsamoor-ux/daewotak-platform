import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { Sparkles, Heart, ChevronDown, RotateCcw, Crown, DoorOpen } from 'lucide-react';
import { WeddingData } from '../types';

interface InteractiveGate3DProps {
  weddingData: WeddingData;
  isOpen: boolean;
  onOpenInvitation: () => void;
  onToggleOpen: () => void;
}

export const InteractiveGate3D: React.FC<InteractiveGate3DProps> = ({
  weddingData,
  isOpen,
  onOpenInvitation,
  onToggleOpen,
}) => {
  const [isOpening, setIsOpening] = useState<boolean>(false);

  const fireGoldConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#d4af37', '#f5e7a9', '#aa842c', '#df9e82', '#ffffff'],
        disableForReducedMotion: true,
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0.1, y: 0.5 },
          colors: ['#d4af37', '#e8ca74', '#ffffff'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 0.9, y: 0.5 },
          colors: ['#d4af37', '#f5e7a9', '#c5a059'],
        });
      }, 300);
    } catch {
      // safe fallback
    }
  };

  const handleDoorClick = () => {
    if (isOpen) return;
    setIsOpening(true);
    fireGoldConfetti();
    setTimeout(() => {
      onOpenInvitation();
      setIsOpening(false);
    }, 1300);
  };

  const isGateOpen = isOpen || isOpening;

  return (
    <section className="relative w-full py-10 md:py-16 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background golden glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

      {/* Header text above the gate */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 max-w-xl z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151b27]/90 border border-[#d4af37]/40 text-[#f5e7a9] text-xs font-tajawal mb-3 shadow-md">
          <DoorOpen size={14} className="text-[#d4af37]" />
          <span>نموذج باب الفرح الملكي • مستوحى من هلاهيل</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-bold text-gold-gradient tracking-wide mb-2">
          {isGateOpen ? 'قاعة الاحتفال الملكية' : 'باب الفرح لليلة العمر'}
        </h2>
        <p className="text-xs sm:text-sm text-[#b8becc] font-cairo">
          {isGateOpen
            ? 'أهلاً وسهلاً بكم في رحاب حفل الزفاف الميمون'
            : 'انقر على مقبض الباب لفتحه والدخول إلى تفاصيل ليلة العمر'}
        </p>
      </motion.div>

      {/* 3D Gate Stage */}
      <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[480px] h-[480px] sm:h-[530px] md:h-[560px] flex items-center justify-center perspective-1500 select-none">
        
        {/* Soft floor shadow */}
        <div className="absolute -bottom-4 w-4/5 h-10 bg-black/80 rounded-full blur-xl transform scale-y-50" />

        {/* Outer Arch Frame (إطار الباب والتاج الملكي) */}
        <div className="relative w-full h-full rounded-t-[180px] sm:rounded-t-[220px] rounded-b-2xl border-4 border-[#d4af37]/60 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.2)] bg-[#0c0f16] overflow-hidden p-2 sm:p-3 flex flex-col">
          
          {/* Arch Crown Top Ornament */}
          <div className="w-full text-center py-2 border-b border-[#d4af37]/30 bg-gradient-to-b from-[#1a202c] to-[#0f131d] rounded-t-[170px] sm:rounded-t-[210px] relative z-20">
            <div className="inline-flex items-center gap-2 text-[#d4af37] font-amiri text-sm sm:text-base font-bold">
              <span>✦</span>
              <span>بـاب الـفـرَح</span>
              <span>✦</span>
            </div>
          </div>

          {/* Gate Interior Area (The inside card revealed when doors swing open) */}
          <div className="relative flex-1 w-full rounded-b-xl overflow-hidden bg-gradient-to-b from-[#141a28] via-[#0d121c] to-[#080a0f] flex flex-col items-center justify-center p-6 text-center">
            
            {/* Interior Ambient Glow behind card */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2),transparent_70%)] pointer-events-none" />

            {/* Revealed Invitation Card */}
            <div className="relative z-10 space-y-4 max-w-xs">
              <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] bg-[#0c0f16] flex items-center justify-center mx-auto text-[#d4af37] shadow-lg shadow-[#d4af37]/20">
                <Crown size={22} />
              </div>

              <div>
                <p className="text-[11px] text-[#e6ca65] font-tajawal tracking-widest uppercase">
                  ROYAL WEDDING INVITATION
                </p>
                <h3 className="text-2xl sm:text-3xl font-amiri font-bold text-gold-gradient mt-1">
                  {weddingData.groomName} & {weddingData.brideName}
                </h3>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-[#d4af37]/30 text-xs font-cairo text-gray-300 space-y-1">
                <div className="text-[#f5e7a9] font-bold font-tajawal">
                  {weddingData.weddingDayArabic} • {weddingData.weddingDateGregorian}
                </div>
                <div className="text-[11px] text-gray-400">
                  {weddingData.venueName}
                </div>
                {weddingData.guestName && (
                  <div className="text-[11px] text-emerald-300 font-semibold pt-1 border-t border-white/10">
                    أهلاً بسعادة: {weddingData.guestName}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  const detailsEl = document.getElementById('invitation-hero');
                  if (detailsEl) {
                    detailsEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#090b10] font-tajawal font-bold text-xs shadow-md shadow-[#d4af37]/30 hover:brightness-110 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>استعراض كافة تفاصيل الحفل</span>
                <ChevronDown size={14} className="animate-bounce" />
              </button>
            </div>

            {/* The Left Door (مِصراع الباب الأيمن في الاتجاه) */}
            <div
              onClick={handleDoorClick}
              style={{
                transformOrigin: 'right center',
                transform: isGateOpen ? 'rotateY(115deg)' : 'rotateY(0deg)',
                transition: 'transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
              className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-r from-[#171d2b] to-[#11151f] border-l-2 border-[#d4af37]/70 shadow-2xl z-30 flex flex-col items-start justify-between p-4 cursor-pointer preserve-3d"
            >
              {/* Ornate Islamic geometric engravings */}
              <div className="w-full h-full border border-[#d4af37]/25 rounded-l-lg p-3 flex flex-col justify-between relative overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent)]">
                
                {/* Upper floral motif */}
                <div className="w-full border-b border-[#d4af37]/20 pb-2 text-center text-[#d4af37]/40 text-xs">
                  ۞ ۞ ۞
                </div>

                {/* Left Door Knocker Handle */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-[#d4af37] bg-[#0c0f16] shadow-md flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border border-[#d4af37]/60" />
                  </div>
                  <div className="w-4 h-6 border-2 border-t-0 border-[#d4af37] rounded-b-full mt-[-2px]" />
                </div>

                {/* Golden studs */}
                <div className="flex flex-col gap-8 absolute right-3 top-10 text-[#d4af37]/60 text-[10px]">
                  <span>◆</span>
                  <span>◆</span>
                  <span>◆</span>
                  <span>◆</span>
                </div>

                {/* Lower ornament */}
                <div className="w-full border-t border-[#d4af37]/20 pt-2 text-center text-[#d4af37]/40 text-xs">
                  ۞ ۞ ۞
                </div>
              </div>
            </div>

            {/* The Right Door (مِصراع الباب الأيسر في الاتجاه) */}
            <div
              onClick={handleDoorClick}
              style={{
                transformOrigin: 'left center',
                transform: isGateOpen ? 'rotateY(-115deg)' : 'rotateY(0deg)',
                transition: 'transform 1.4s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
              className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-l from-[#171d2b] to-[#11151f] border-r-2 border-[#d4af37]/70 shadow-2xl z-30 flex flex-col items-end justify-between p-4 cursor-pointer preserve-3d"
            >
              {/* Ornate Islamic geometric engravings */}
              <div className="w-full h-full border border-[#d4af37]/25 rounded-r-lg p-3 flex flex-col justify-between relative overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent)]">
                
                {/* Upper floral motif */}
                <div className="w-full border-b border-[#d4af37]/20 pb-2 text-center text-[#d4af37]/40 text-xs">
                  ۞ ۞ ۞
                </div>

                {/* Right Door Knocker Handle */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-[#d4af37] bg-[#0c0f16] shadow-md flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border border-[#d4af37]/60" />
                  </div>
                  <div className="w-4 h-6 border-2 border-t-0 border-[#d4af37] rounded-b-full mt-[-2px]" />
                </div>

                {/* Golden studs */}
                <div className="flex flex-col gap-8 absolute left-3 top-10 text-[#d4af37]/60 text-[10px]">
                  <span>◆</span>
                  <span>◆</span>
                  <span>◆</span>
                  <span>◆</span>
                </div>

                {/* Lower ornament */}
                <div className="w-full border-t border-[#d4af37]/20 pt-2 text-center text-[#d4af37]/40 text-xs">
                  ۞ ۞ ۞
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Re-close or Open Toggle Trigger */}
      <div className="mt-6 z-20">
        <button
          type="button"
          onClick={isGateOpen ? onToggleOpen : handleDoorClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121622] hover:bg-[#1a2133] border border-[#d4af37]/40 text-[#f5e7a9] font-tajawal text-xs font-semibold shadow-lg hover:scale-105 transition-all cursor-pointer"
        >
          {isGateOpen ? (
            <>
              <RotateCcw size={13} className="text-[#d4af37]" />
              <span>إعادة إغلاق باب الفرح لتجربة الفتح مرة أخرى</span>
            </>
          ) : (
            <>
              <Sparkles size={13} className="text-[#d4af37]" />
              <span>انقر لفتح باب الفرح الملكي</span>
            </>
          )}
        </button>
      </div>

    </section>
  );
};
