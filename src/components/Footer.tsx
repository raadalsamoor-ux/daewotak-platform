import React from 'react';
import { Heart, Instagram, Sparkles } from 'lucide-react';
import { WeddingData } from '../types';

interface FooterProps {
  weddingData: WeddingData;
}

export const Footer: React.FC<FooterProps> = ({ weddingData }) => {
  return (
    <footer className="w-full py-12 px-4 border-t border-[#d4af37]/20 bg-[#07080c] text-center relative overflow-hidden">
      {/* Subtle top gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-xl mx-auto space-y-4">
        {/* Monogram */}
        <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 bg-[#121622] text-[#d4af37] font-amiri font-bold text-lg flex items-center justify-center mx-auto shadow-md">
          {weddingData.groomName[0]} & {weddingData.brideName[0]}
        </div>

        {/* Du'aa for the newlyweds */}
        <p className="font-amiri text-lg sm:text-xl text-[#f5e7a9] leading-relaxed">
          اللهم بارك لهما وبارك عليهما واجمع بينهما في خير، واجعله عقداً تنعقد به سعادتهما
        </p>

        {/* Instagram Credit & Link */}
        <div className="pt-2">
          <a
            href={weddingData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#131926] hover:bg-[#1c2436] border border-[#d4af37]/30 text-xs font-tajawal text-[#e6ca65] transition-all hover:border-[#d4af37]/60"
          >
            <Instagram size={14} className="text-[#e1306c]" />
            <span>تابعونا وتواصلوا معنا عبر إنستغرام: @{weddingData.instagramHandle}</span>
          </a>
        </div>

        <p className="text-[11px] text-[#6b7385] font-cairo pt-4">
          تصميم بطاقة دعوة زفاف رقمية فاخرة • جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};
