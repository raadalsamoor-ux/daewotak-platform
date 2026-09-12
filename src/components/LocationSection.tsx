import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Car, Building2 } from 'lucide-react';
import { WeddingData } from '../types';
import { TiltCard } from './TiltCard';

interface LocationSectionProps {
  weddingData: WeddingData;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ weddingData }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyAddress = () => {
    const fullText = `${weddingData.venueName} - ${weddingData.hallName}، ${weddingData.address}، ${weddingData.city}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-4 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center max-w-xl mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#131926]/80 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-tajawal mb-3">
          <MapPin size={12} className="text-[#d4af37]" />
          <span>الموقع والوصول</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-bold text-gold-gradient">
          موقع ومقر الحفل
        </h2>
        <p className="text-xs sm:text-sm text-[#a8afc2] font-cairo mt-2">
          يسهل الوصول إلى القاعة مع توفر خدمة صف السيارات ومواقف خاصة للضيوف
        </p>
      </div>

      {/* Main Location & Map Card */}
      <div className="w-full max-w-2xl">
        <TiltCard
          id="location-tilt-card"
          maxTilt={5}
          className="rounded-3xl bg-gradient-to-b from-[#131825] via-[#0d1017] to-[#080b10] border border-[#d4af37]/35 shadow-card-3d overflow-hidden p-6 sm:p-8 relative"
        >
          {/* Inner Golden border */}
          <div className="absolute inset-3 border border-[#d4af37]/15 rounded-2xl pointer-events-none" />

          {/* Venue Info Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#d4af37]/20 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-tajawal mb-1">
                <Building2 size={15} />
                <span>{weddingData.city} • المملكة العربية السعودية</span>
              </div>
              <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#f5e7a9]">
                {weddingData.venueName}
              </h3>
              <p className="text-xs sm:text-sm text-[#cbd3e4] font-cairo mt-0.5">
                {weddingData.hallName}
              </p>
              <p className="text-[11px] text-[#8e97a9] font-tajawal mt-1">
                {weddingData.address}
              </p>
            </div>

            {/* Copy Address Button */}
            <button
              type="button"
              onClick={copyAddress}
              className="px-3 py-1.5 rounded-xl bg-[#182030] hover:bg-[#202b42] border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-tajawal flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              title="نسخ العنوان الكامل"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400 font-bold">تم نسخ العنوان</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>نسخ العنوان</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Map Visual Display */}
          <div className="my-6 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-inner relative h-56 sm:h-72 w-full bg-[#0c1018]">
            {/* Embedded Google Maps View centered on Riyadh Ritz Carlton */}
            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.978004121703!2d46.62689531500213!3d24.667439984144865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0360a0f0d46d%3A0x2865c345155f9e71!2sThe%20Ritz-Carlton%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-90 contrast-125"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Overlay Marker Pill */}
            <div className="absolute top-3 right-3 bg-[#0d121c]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#d4af37]/50 flex items-center gap-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-tajawal text-[#f5e7a9] font-semibold">
                {weddingData.venueName}
              </span>
            </div>
          </div>

          {/* Dedicated Navigation Action Buttons (Google Maps, Waze, Apple Maps) */}
          <div className="pt-2 relative z-10 space-y-3">
            <a
              id="open-google-maps-btn"
              href={weddingData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f7e8b0] to-[#d4af37] hover:brightness-110 text-[#090b10] font-tajawal font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <Navigation size={18} />
              <span>فتح الموقع في خرائط Google Maps</span>
              <ExternalLink size={15} className="opacity-70" />
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={weddingData.wazeUrl || 'https://waze.com/ul?ll=24.66744,46.62689&navigate=yes'}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 text-xs font-tajawal font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>تطبيق Waze (وايز)</span>
                <ExternalLink size={13} className="text-[#d4af37]" />
              </a>

              <a
                href={weddingData.appleMapsUrl || 'https://maps.apple.com/?daddr=The+Ritz-Carlton+Riyadh'}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 text-xs font-tajawal font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>خرائط Apple Maps</span>
                <ExternalLink size={13} className="text-[#d4af37]" />
              </a>
            </div>
          </div>

          {/* Valet Parking & Arrival Note */}
          <div className="mt-4 pt-4 border-t border-[#d4af37]/15 flex items-center gap-2 text-xs font-tajawal text-[#a0a8bb]">
            <Car size={15} className="text-[#d4af37] shrink-0" />
            <span>تتوفر خدمة صف السيارات المجانية (Valet Parking) عند المدخل الرئيسي للقاعة.</span>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
