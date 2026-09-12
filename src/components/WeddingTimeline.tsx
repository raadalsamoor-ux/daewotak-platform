import React from 'react';
import { Clock, Sparkles, Crown, Utensils, Cake, DoorOpen } from 'lucide-react';
import { WeddingData } from '../types';
import { TiltCard } from './TiltCard';

interface WeddingTimelineProps {
  timeline: WeddingData['timeline'];
}

export const WeddingTimeline: React.FC<WeddingTimelineProps> = ({ timeline }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DoorOpen':
        return <DoorOpen size={20} className="text-[#d4af37]" />;
      case 'Crown':
        return <Crown size={20} className="text-[#d4af37]" />;
      case 'Utensils':
        return <Utensils size={20} className="text-[#d4af37]" />;
      case 'Cake':
        return <Cake size={20} className="text-[#d4af37]" />;
      default:
        return <Sparkles size={20} className="text-[#d4af37]" />;
    }
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-4 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center max-w-xl mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#131926]/80 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-tajawal mb-3">
          <Clock size={12} className="text-[#d4af37]" />
          <span>جدول فقرات الحفل</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-bold text-gold-gradient">
          برنامج الليلة المباركة
        </h2>
        <p className="text-xs sm:text-sm text-[#a8afc2] font-cairo mt-2">
          تسلسل فقرات وأوقات الاحتفاء بليلة العمر
        </p>
      </div>

      {/* Timeline List */}
      <div className="w-full max-w-2xl relative">
        {/* Center vertical golden gradient timeline line */}
        <div className="absolute top-6 bottom-6 right-7 sm:right-9 w-[2px] bg-gradient-to-b from-[#d4af37]/10 via-[#d4af37]/60 to-[#d4af37]/10 pointer-events-none" />

        <div className="space-y-6 sm:space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-6 pr-2 sm:pr-4">
              {/* Timeline Milestone Badge with Icon */}
              <div className="relative z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#1b2234] to-[#0c0f16] border border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#d4af37] text-[#090b10] text-[9px] font-bold flex items-center justify-center font-cairo">
                  {idx + 1}
                </span>
              </div>

              {/* 3D Tilt Card for the Event Milestone */}
              <div className="flex-1">
                <TiltCard
                  maxTilt={5}
                  className="rounded-2xl bg-gradient-to-b from-[#131826] to-[#0b0e14] border border-[#d4af37]/25 shadow-card-3d p-4 sm:p-5 relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="font-amiri text-lg sm:text-xl font-bold text-[#f5e7a9]">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#182030] border border-[#d4af37]/30 text-[#e6ca65] text-xs font-cairo font-semibold w-fit">
                      <Clock size={11} className="text-[#d4af37]" />
                      <span dir="ltr">{item.time}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#aab2c4] font-cairo leading-relaxed">
                    {item.description}
                  </p>
                </TiltCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
