import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, ChevronDown, RefreshCw } from 'lucide-react';
import { WeddingData } from '../types';

interface InteractiveEnvelopeProps {
  weddingData: WeddingData;
  onOpenInvitation: () => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const InteractiveEnvelope3D: React.FC<InteractiveEnvelopeProps> = ({
  weddingData,
  onOpenInvitation,
  isOpen,
  onToggleOpen,
}) => {
  const [isOpening, setIsOpening] = useState<boolean>(false);

  const fireGoldConfetti = () => {
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f5e7a9', '#aa842c', '#df9e82', '#ffffff'],
        disableForReducedMotion: true,
      });
      setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#d4af37', '#e8ca74', '#9a7b20'],
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#d4af37', '#f5e7a9', '#c5a059'],
        });
      }, 250);
    } catch {
      // safe fallback
    }
  };

  const handleOpenClick = () => {
    if (isOpen) return;
    setIsOpening(true);
    fireGoldConfetti();
    setTimeout(() => {
      onOpenInvitation();
      setIsOpening(false);
    }, 1200);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleOpen();
  };

  return (
    <section className="relative w-full py-12 md:py-20 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute inset-0 bg-gold-radial pointer-events-none opacity-40" />

      {/* Header text above envelope */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 max-w-xl z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#151b27]/80 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-tajawal mb-3 shadow-md">
          <Sparkles size={13} className="text-[#d4af37]" />
          <span>دعوة زفاف رسمية وتفاعلية</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-bold text-gold-gradient tracking-wide mb-2">
          {isOpen ? 'بطاقة الدعوة الملكية' : 'مظروف الدعوة الخاصة'}
        </h2>
        <p className="text-xs sm:text-sm text-[#b8becc] font-cairo">
          {isOpen
            ? 'انقر على زر إعادة الإغلاق لتجربة فتح الظرف مرة أخرى'
            : 'اضغط على الختم الملكي لفتح المظروف واستعراض تفاصيل حفل الزفاف'}
        </p>
      </motion.div>

      {/* 3D Envelope Container with realistic depth */}
      <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] h-[360px] sm:h-[420px] md:h-[480px] perspective-1500 flex items-center justify-center">
        {/* Shadow under the envelope */}
        <div className="absolute -bottom-6 w-4/5 h-8 bg-black/80 rounded-full blur-xl transform scale-y-50" />

        {/* The Outer Envelope Body */}
        <div className="relative w-full h-[260px] sm:h-[300px] md:h-[340px] bg-gradient-to-b from-[#131824] via-[#0d121c] to-[#080b11] rounded-2xl border border-[#d4af37]/35 shadow-card-3d preserve-3d overflow-visible">
          {/* Subtle gold foil geometric borders on envelope */}
          <div className="absolute inset-2 border border-[#d4af37]/15 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 border border-[#d4af37]/10 rounded-lg pointer-events-none" />

          {/* Envelope Top Triangle Flap (3D Fold Animation) */}
          <div
            style={{
              transformOrigin: 'top center',
              transform: isOpen || isOpening ? 'rotateX(180deg)' : 'rotateX(0deg)',
              transition: 'transform 1.1s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className="absolute top-0 left-0 right-0 h-[140px] sm:h-[160px] md:h-[180px] preserve-3d z-30 pointer-events-none"
          >
            {/* Front of flap (Facing user when closed) */}
            <div
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              }}
              className="absolute inset-0 bg-gradient-to-b from-[#171d2b] to-[#10141f] border-b border-[#d4af37]/40 shadow-lg backface-hidden flex items-start justify-center pt-3"
            >
              <div className="w-12 h-1 bg-[#d4af37]/20 rounded-full" />
            </div>

            {/* Back of flap (Facing user when opened 180 deg) */}
            <div
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                transform: 'rotateX(180deg)',
              }}
              className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] to-[#141a26] border-b border-[#d4af37]/25 shadow-inner backface-hidden"
            />
          </div>

          {/* Inside Letter / Card (Slides upwards when opened) */}
          <motion.div
            initial={false}
            animate={{
              y: isOpen || isOpening ? (typeof window !== 'undefined' && window.innerWidth < 640 ? -90 : -130) : 0,
              opacity: 1,
              scale: isOpen ? 1.02 : 0.98,
            }}
            transition={{
              y: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: isOpening ? 0.35 : 0 },
              scale: { duration: 0.5 },
            }}
            className="absolute inset-x-3 sm:inset-x-5 top-4 bottom-4 bg-gradient-to-b from-[#161c28] via-[#10141f] to-[#0c0f16] rounded-xl border-2 border-[#d4af37]/50 shadow-2xl z-20 flex flex-col items-center justify-between p-4 sm:p-6 text-center select-none"
          >
            {/* Ornamental Corners */}
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/60" />
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/60" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/60" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/60" />

            {/* Monogram Top */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#0d1117] text-[#d4af37] font-amiri text-lg shadow-sm">
                <span>{weddingData.groomName[0]}</span>
                <span className="text-[10px] text-[#f5e7a9] mx-0.5">&</span>
                <span>{weddingData.brideName[0]}</span>
              </div>
              <span className="text-[11px] font-tajawal text-[#aa842c] tracking-widest mt-1">
                ROYAL INVITATION
              </span>
            </div>

            {/* Names on Card */}
            <div className="my-auto py-2">
              <h3 className="text-xl sm:text-2xl font-amiri font-bold text-gold-gradient mb-1">
                {weddingData.groomName} & {weddingData.brideName}
              </h3>
              <p className="text-xs sm:text-sm text-[#e6ca65] font-tajawal">
                {weddingData.weddingDayArabic} • {weddingData.weddingDateGregorian}
              </p>
              <p className="text-[11px] sm:text-xs text-[#a0a8b9] font-cairo mt-1">
                {weddingData.venueName}
              </p>
            </div>

            {/* Action button inside card */}
            <div className="w-full pt-1">
              <button
                type="button"
                onClick={() => {
                  const detailsEl = document.getElementById('invitation-hero');
                  if (detailsEl) {
                    detailsEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/30 to-[#d4af37]/20 hover:from-[#d4af37]/30 hover:to-[#d4af37]/40 border border-[#d4af37]/60 text-[#f5e7a9] font-tajawal text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>استكشف تفاصيل الدعوة الكاملة</span>
                <ChevronDown size={14} className="animate-bounce" />
              </button>
            </div>
          </motion.div>

          {/* Envelope Lower Pocket (Triangular folds over the card) */}
          <div
            style={{
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 30%, 50% 65%, 0% 30%)',
            }}
            className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#10141e] to-[#151a26] border-t border-[#d4af37]/25 shadow-md z-25 pointer-events-none"
          />

          {/* Golden Corner Accents on Envelope Face */}
          <div className="absolute bottom-3 left-4 text-[10px] font-tajawal text-[#d4af37]/50 tracking-wider z-26">
            TEATRO LUXURY
          </div>
          <div className="absolute bottom-3 right-4 text-[10px] font-tajawal text-[#d4af37]/50 tracking-wider z-26">
            2026 EDITION
          </div>

          {/* Royal Wax Seal (Click to Open) */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-[85px] sm:top-[100px] md:top-[115px] left-1/2 -translate-x-1/2 z-40"
              >
                <button
                  id="wax-seal-open-btn"
                  type="button"
                  onClick={handleOpenClick}
                  disabled={isOpening}
                  className="relative group w-18 h-18 sm:w-20 sm:h-20 rounded-full cursor-pointer focus:outline-none transition-transform active:scale-95"
                  title="انقر لفتح المظروف"
                >
                  {/* Glowing halo pulse */}
                  <span className="absolute inset-0 rounded-full bg-[#d4af37]/30 blur-md group-hover:bg-[#d4af37]/50 transition-all animate-pulse" />

                  {/* Wax Seal Body (Rich Royal Ruby & Gold Accents) */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#8a1a24] via-[#5e0f17] to-[#3a080d] border-2 border-[#d4af37]/70 shadow-wax flex flex-col items-center justify-center text-center p-1">
                    {/* Inner pressed ring */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-dashed border-[#d4af37]/60 flex flex-col items-center justify-center">
                      <Heart size={14} className="text-[#f5e7a9] mb-0.5 fill-[#f5e7a9]" />
                      <span className="font-amiri text-xs font-bold text-[#f5e7a9] leading-tight">
                        افتح الدعوة
                      </span>
                      <span className="text-[8px] text-[#e6ca65] font-tajawal">OPEN</span>
                    </div>
                  </div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Envelope Action Buttons */}
      <div className="mt-8 flex items-center gap-3 z-10">
        {!isOpen ? (
          <button
            id="open-invitation-bottom-btn"
            type="button"
            onClick={handleOpenClick}
            disabled={isOpening}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f5e7a9] to-[#d4af37] text-[#090b10] font-tajawal font-bold text-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles size={16} />
            <span>{isOpening ? 'جاري فتح المظروف...' : 'انقر لفتح المظروف التفاعلي'}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 rounded-full bg-[#131824] hover:bg-[#1c2436] border border-[#d4af37]/40 text-[#f5e7a9] font-tajawal text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
            title="إعادة إغلاق المظروف"
          >
            <RefreshCw size={14} />
            <span>إعادة إغلاق المظروف</span>
          </button>
        )}
      </div>
    </section>
  );
};
