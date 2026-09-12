import React, { useState } from 'react';
import { Calendar, Check, CalendarPlus, Heart, Sparkles, MapPin, Download } from 'lucide-react';
import { WeddingData } from '../types';
import { TiltCard } from './TiltCard';

interface NamesAndDetailsProps {
  weddingData: WeddingData;
}

export const NamesAndDetails: React.FC<NamesAndDetailsProps> = ({ weddingData }) => {
  const [calendarAdded, setCalendarAdded] = useState<boolean>(false);

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`حفل زفاف ${weddingData.groomName} و ${weddingData.brideName}`);
    const details = encodeURIComponent(
      `يتشرف ${weddingData.groomFamily} و ${weddingData.brideFamily} بحضوركم حفل الزفاف المبارك.\nالمكان: ${weddingData.venueName} - ${weddingData.hallName}\nالمدينة: ${weddingData.city}`
    );
    const location = encodeURIComponent(`${weddingData.venueName}, ${weddingData.address}`);
    
    // Format YYYYMMDDTHHMMSSZ (approx 17:30 UTC for 20:30 GMT+3)
    const cleanDate = weddingData.weddingDateGregorian.replace(/-/g, '');
    const startTime = `${cleanDate}T173000Z`;
    const endTime = `${cleanDate}T230000Z`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  };

  // Generate and download .ics file for Apple Calendar / Outlook / Phone Calendar
  const downloadIcsFile = () => {
    const cleanDate = weddingData.weddingDateGregorian.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Luxury Wedding Invitation//AR',
      'BEGIN:VEVENT',
      `SUMMARY:حفل زفاف ${weddingData.groomName} و ${weddingData.brideName}`,
      `DESCRIPTION:حفل زفاف مبارك - ${weddingData.venueName}`,
      `LOCATION:${weddingData.venueName}, ${weddingData.address}`,
      `DTSTART:${cleanDate}T203000`,
      `DTEND:${cleanDate}T235900`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Wedding_${weddingData.groomName}_${weddingData.brideName}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 3500);
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-4 flex flex-col items-center">
      {/* Section Subheading */}
      <div className="text-center max-w-xl mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#131926]/80 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-tajawal mb-3">
          <Heart size={12} className="fill-[#d4af37] text-[#d4af37]" />
          <span>تفاصيل الحفل والمناسبة</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-bold text-gold-gradient">
          شرف الحضور وفرحة اللقاء
        </h2>
        <p className="text-xs sm:text-sm text-[#a8afc2] font-cairo mt-2">
          يسرنا ويسعدنا مشاركتكم لنا أسعد اللحظات في ليلة العمر
        </p>
      </div>

      {/* Main Details Card with 3D Tilt */}
      <div className="w-full max-w-2xl">
        <TiltCard
          id="names-details-tilt-card"
          maxTilt={6}
          className="rounded-3xl bg-gradient-to-b from-[#131825] via-[#0e111a] to-[#0a0c12] border border-[#d4af37]/35 shadow-card-3d p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Subtle Decorative Golden Frame */}
          <div className="absolute inset-3 border border-[#d4af37]/15 rounded-2xl pointer-events-none" />

          {/* Families Invitation Header */}
          <div className="text-center space-y-3 pb-6 border-b border-[#d4af37]/20">
            <p className="font-tajawal text-xs sm:text-sm text-[#aa842c] tracking-wider uppercase">
              دعوة كريمة
            </p>
            <p className="font-amiri text-lg sm:text-xl text-[#f3e5ab] leading-relaxed">
              تتشرف <span className="font-bold text-[#fcedb9] underline decoration-[#d4af37]/50 underline-offset-4">{weddingData.groomFamily}</span>
              {' '}و{' '}
              <span className="font-bold text-[#fcedb9] underline decoration-[#d4af37]/50 underline-offset-4">{weddingData.brideFamily}</span>
            </p>
            <p className="font-cairo text-xs sm:text-sm text-[#cbd2e1] max-w-lg mx-auto leading-relaxed">
              بدعوتكم لمشاركتهم حفل زفاف العروسين المبارك في أجواء من الألفة والبهجة
            </p>
          </div>

          {/* Majestic Names Display */}
          <div className="py-8 text-center relative">
            <div className="font-amiri text-3xl sm:text-5xl md:text-6xl font-bold text-gold-gradient tracking-wide leading-tight">
              <span>{weddingData.groomName}</span>
              <span className="text-2xl sm:text-3xl md:text-4xl text-[#df9e82] mx-2 font-normal">&</span>
              <span>{weddingData.brideName}</span>
            </div>
            <p className="text-xs sm:text-sm font-tajawal text-[#aa842c] tracking-widest mt-3">
              بارك الله لهما وبارك عليهما وجمع بينهما في خير
            </p>
          </div>

          {/* Key Date and Venue Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#d4af37]/20">
            {/* Date Box */}
            <div className="p-4 rounded-2xl bg-[#151b29]/70 border border-[#d4af37]/25 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#9a7b20]/10 border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                <Calendar size={20} className="text-[#d4af37]" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-tajawal text-[#a0a8bb] block">تاريخ الحفل</span>
                <span className="font-amiri text-base sm:text-lg font-bold text-[#f5e7a9] block mt-0.5">
                  {weddingData.weddingDayArabic}
                </span>
                <span className="text-xs font-cairo text-[#e0d8c8] block mt-0.5">
                  {weddingData.weddingDateGregorian} م
                </span>
                <span className="text-[11px] font-tajawal text-[#aa842c] block">
                  الموافق {weddingData.weddingDateHijri}
                </span>
              </div>
            </div>

            {/* Venue Box */}
            <div className="p-4 rounded-2xl bg-[#151b29]/70 border border-[#d4af37]/25 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#9a7b20]/10 border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#d4af37]" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-tajawal text-[#a0a8bb] block">مكان الحفل</span>
                <span className="font-amiri text-base sm:text-lg font-bold text-[#f5e7a9] block mt-0.5">
                  {weddingData.venueName}
                </span>
                <span className="text-xs font-cairo text-[#e0d8c8] block mt-0.5">
                  {weddingData.hallName}
                </span>
                <span className="text-[11px] font-tajawal text-[#aa842c] block">
                  {weddingData.city}، المملكة العربية السعودية
                </span>
              </div>
            </div>
          </div>

          {/* Add to Calendar Section */}
          <div className="mt-8 pt-6 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-right">
              <span className="text-xs font-tajawal text-[#cbd2e1] block font-medium">
                تذكير بموعد المناسبة
              </span>
              <span className="text-[11px] text-[#8e96a8] font-cairo">
                أضف موعد الحفل إلى تقويم هاتفك بسهولة
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Google Calendar Link */}
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#1b2233] hover:bg-[#232c42] border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-tajawal font-medium flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <CalendarPlus size={14} className="text-[#d4af37]" />
                <span>تقويم Google</span>
              </a>

              {/* Apple / Outlook iCal Download */}
              <button
                type="button"
                onClick={downloadIcsFile}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#1b2233] hover:bg-[#232c42] border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-tajawal font-medium flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                {calendarAdded ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>تم التحميل!</span>
                  </>
                ) : (
                  <>
                    <Download size={14} className="text-[#d4af37]" />
                    <span>تقويم Apple / iCal</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
