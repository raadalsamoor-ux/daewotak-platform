import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles, Heart } from 'lucide-react';
import { WeddingData, CountdownTime } from '../types';
import { TiltCard } from './TiltCard';

interface HeroCountdownProps {
  weddingData: WeddingData;
  onConfirmAttendanceClick: () => void;
}

export const HeroCountdown: React.FC<HeroCountdownProps> = ({
  weddingData,
  onConfirmAttendanceClick,
}) => {
  // Compute target wedding timestamp (e.g. 20:30 on the wedding date)
  const targetDate = useMemo(() => {
    return new Date(`${weddingData.weddingDateGregorian}T20:30:00`).getTime();
  }, [weddingData.weddingDateGregorian]);

  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="invitation-hero" className="relative w-full pt-6 pb-16 md:py-20 px-4 flex flex-col items-center">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main 3D Tilt Invitation Card */}
      <div className="w-full max-w-2xl">
        <TiltCard
          id="hero-tilt-card"
          maxTilt={8}
          className="rounded-3xl bg-gradient-to-b from-[#121622] via-[#0d1017] to-[#080a0f] border border-[#d4af37]/40 shadow-card-3d p-6 sm:p-10 md:p-12 relative overflow-hidden"
        >
          {/* Ornate Frame Inner Borders */}
          <div className="absolute inset-3 border border-[#d4af37]/20 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 border border-[#d4af37]/10 rounded-xl pointer-events-none" />

          {/* Corner Calligraphic Flourishes */}
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]/70 rounded-tr-lg" />
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]/70 rounded-tl-lg" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]/70 rounded-br-lg" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]/70 rounded-bl-lg" />

          {/* Basmalah & Quranic Verse */}
          <div className="text-center mb-8 relative z-10">
            <p className="font-amiri text-lg sm:text-xl text-[#e6ca65] mb-3 select-none">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <div className="relative inline-block max-w-lg px-4 py-3 bg-[#151b27]/60 rounded-xl border border-[#d4af37]/25 shadow-inner">
              <p className="font-amiri text-sm sm:text-base md:text-lg text-[#f0e6ce] leading-relaxed select-none">
                "{weddingData.quranVerse}"
              </p>
              <span className="block text-[11px] font-tajawal text-[#d4af37] mt-1.5 opacity-90">
                {weddingData.verseSurah}
              </span>
            </div>
          </div>

          {/* Royal Interlocking Monogram */}
          <div className="flex justify-center mb-6 relative z-10">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1b2233] to-[#0c0f16] border-2 border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center">
              <div className="text-center font-amiri text-2xl sm:text-3xl text-gold-gradient font-bold flex items-center justify-center">
                <span>{weddingData.groomName[0]}</span>
                <Heart size={14} className="text-[#d4af37] mx-1 fill-[#d4af37]" />
                <span>{weddingData.brideName[0]}</span>
              </div>
              <div className="absolute -inset-1 rounded-full border border-dashed border-[#d4af37]/30 animate-[spin_25s_linear_infinite]" />
            </div>
          </div>

          {/* Bride & Groom Names Headline */}
          <div className="text-center mb-6 relative z-10">
            <p className="text-xs sm:text-sm font-tajawal text-[#aa842c] tracking-widest uppercase mb-2">
              حفل زفاف مبارك
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-amiri font-bold text-gold-gradient tracking-wide py-2">
              {weddingData.groomName} & {weddingData.brideName}
            </h1>
            <p className="font-tajawal text-xs sm:text-sm text-[#b8becc] mt-2 max-w-md mx-auto leading-relaxed">
              {weddingData.welcomeMessage}
            </p>
          </div>

          {/* Wedding Date & Venue Summary Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-6 text-xs sm:text-sm font-tajawal text-[#e8e4dc] z-10 relative">
            <div className="flex items-center gap-1.5 bg-[#141a28]/80 px-3 py-1.5 rounded-full border border-[#d4af37]/30 shadow-sm">
              <Calendar size={14} className="text-[#d4af37]" />
              <span>{weddingData.weddingDayArabic}</span>
              <span className="text-[#d4af37]">•</span>
              <span>{weddingData.weddingDateGregorian}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#141a28]/80 px-3 py-1.5 rounded-full border border-[#d4af37]/30 shadow-sm">
              <Clock size={14} className="text-[#d4af37]" />
              <span>{weddingData.weddingDateHijri}</span>
            </div>
          </div>

          {/* High-Precision Golden Countdown Timer */}
          <div className="mt-8 pt-6 border-t border-[#d4af37]/20 relative z-10">
            <div className="text-center mb-4 flex items-center justify-center gap-2">
              <Sparkles size={15} className="text-[#d4af37]" />
              <span className="text-xs sm:text-sm font-tajawal font-medium text-[#f5e7a9] tracking-wider">
                {timeLeft.isExpired ? 'تم الحفل بحمد الله وفضله' : 'العد التنازلي لموعد الليلة المباركة'}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {/* Days */}
              <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-2xl bg-gradient-to-b from-[#182030] to-[#0f1420] border border-[#d4af37]/35 shadow-inner">
                <span className="text-xl sm:text-3xl md:text-4xl font-cairo font-extrabold text-gold-shimmer">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-tajawal text-[#a0a7ba] mt-1">يوم</span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-2xl bg-gradient-to-b from-[#182030] to-[#0f1420] border border-[#d4af37]/35 shadow-inner">
                <span className="text-xl sm:text-3xl md:text-4xl font-cairo font-extrabold text-gold-shimmer">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-tajawal text-[#a0a7ba] mt-1">ساعة</span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-2xl bg-gradient-to-b from-[#182030] to-[#0f1420] border border-[#d4af37]/35 shadow-inner">
                <span className="text-xl sm:text-3xl md:text-4xl font-cairo font-extrabold text-gold-shimmer">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-tajawal text-[#a0a7ba] mt-1">دقيقة</span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-2xl bg-gradient-to-b from-[#182030] to-[#0f1420] border border-[#d4af37]/35 shadow-inner">
                <span className="text-xl sm:text-3xl md:text-4xl font-cairo font-extrabold text-[#f5e7a9]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-tajawal text-[#a0a7ba] mt-1">ثانية</span>
              </div>
            </div>
          </div>

          {/* Quick CTA to confirm attendance via Instagram */}
          <div className="mt-8 text-center relative z-10">
            <button
              id="hero-rsvp-btn"
              type="button"
              onClick={onConfirmAttendanceClick}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e8b0] to-[#d4af37] hover:brightness-110 text-[#090b10] font-tajawal font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] active:scale-98 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>تأكيد الحضور عبر إنستغرام</span>
              <Sparkles size={16} />
            </button>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
