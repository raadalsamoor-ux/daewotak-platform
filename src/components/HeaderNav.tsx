import React from 'react';
import { Sparkles, Share2, SlidersHorizontal, MailOpen, Instagram } from 'lucide-react';
import { WeddingData } from '../types';

interface HeaderNavProps {
  weddingData: WeddingData;
  onOpenEnvelope: () => void;
  onOpenCustomize: () => void;
  onOpenShare: () => void;
  onRsvpClick: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  weddingData,
  onOpenEnvelope,
  onOpenCustomize,
  onOpenShare,
  onRsvpClick,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#090b10]/90 backdrop-blur-md border-b border-[#d4af37]/20 transition-all">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Monogram */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1b2234] to-[#0c0f16] border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] font-amiri font-bold text-sm shadow-sm">
            {weddingData.groomName[0]}&{weddingData.brideName[0]}
          </div>
          <div className="flex flex-col">
            <span className="font-amiri text-sm sm:text-base font-bold text-gold-gradient leading-tight">
              {weddingData.groomName} & {weddingData.brideName}
            </span>
            <span className="text-[10px] font-tajawal text-[#aa842c] tracking-wider">
              دعوة زفاف فاخرة
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Envelope Quick Trigger */}
          <button
            type="button"
            onClick={onOpenEnvelope}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#141a27] hover:bg-[#1d2639] border border-[#d4af37]/30 text-[#f5e7a9] text-xs font-tajawal flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            title="عرض المظروف التفاعلي"
          >
            <MailOpen size={15} className="text-[#d4af37]" />
            <span className="hidden sm:inline">المظروف</span>
          </button>

          {/* Customize Demo */}
          <button
            type="button"
            onClick={onOpenCustomize}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#141a27] hover:bg-[#1d2639] border border-[#d4af37]/30 text-[#f5e7a9] text-xs font-tajawal flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            title="تخصيص أسماء وبيانات الدعوة"
          >
            <SlidersHorizontal size={15} className="text-[#d4af37]" />
            <span className="hidden sm:inline">تعديل</span>
          </button>

          {/* Share */}
          <button
            type="button"
            onClick={onOpenShare}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#141a27] hover:bg-[#1d2639] border border-[#d4af37]/30 text-[#f5e7a9] text-xs font-tajawal flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            title="مشاركة الدعوة"
          >
            <Share2 size={15} className="text-[#d4af37]" />
            <span className="hidden sm:inline">مشاركة</span>
          </button>

          {/* Instagram RSVP Direct Header CTA */}
          <button
            id="nav-rsvp-btn"
            type="button"
            onClick={onRsvpClick}
            className="px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e8b0] to-[#d4af37] hover:brightness-110 text-[#090b10] text-xs font-tajawal font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all cursor-pointer"
          >
            <Instagram size={14} className="text-[#090b10]" />
            <span>تأكيد الحضور</span>
          </button>
        </div>
      </div>
    </header>
  );
};
