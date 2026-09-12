import React, { useState } from 'react';
import { Calendar as CalendarIcon, Download, ExternalLink, Check, Bell, Clock } from 'lucide-react';
import { WeddingData } from '../types';

interface AddToCalendarProps {
  weddingData: WeddingData;
  className?: string;
  variant?: 'card' | 'compact';
}

export const AddToCalendar: React.FC<AddToCalendarProps> = ({
  weddingData,
  className = '',
  variant = 'card'
}) => {
  const [downloadedIcs, setDownloadedIcs] = useState(false);

  // Format date to ISO without dashes for Google & ICS: YYYYMMDDTHHMMSSZ
  const getCalendarDates = () => {
    // wedding date e.g. 2026-11-20
    const rawDate = weddingData.weddingDateGregorian || '2026-11-20';
    const cleanDate = rawDate.replace(/-/g, '');
    // Standard evening start at 20:30 (8:30 PM local/AST UTC+3 is 17:30 UTC)
    // Or local floating time: YYYYMMDDTHHMMSS
    const startStr = `${cleanDate}T203000`;
    const endStr = `${cleanDate}T235900`;
    return { startStr, endStr };
  };

  const { startStr, endStr } = getCalendarDates();

  const eventTitle = `حفل زفاف ${weddingData.groomName} و ${weddingData.brideName}`;
  const eventDetails = `يتشرف العروسين وعائلتيهما بدعوتكم لحضور حفل الزفاف المبارك.\nالمكان: ${weddingData.venueName} - ${weddingData.hallName}\nالعنوان: ${weddingData.address}\nالتاريخ: ${weddingData.weddingDayArabic} ${weddingData.weddingDateGregorian} (${weddingData.weddingDateHijri})\nنسعد بلقياكم ومشاركتكم فرحتنا!`;
  const eventLocation = `${weddingData.venueName}, ${weddingData.hallName}, ${weddingData.city}, المملكة العربية السعودية`;

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle
  )}&dates=${startStr}/${endStr}&details=${encodeURIComponent(
    eventDetails
  )}&location=${encodeURIComponent(eventLocation)}`;

  // Download .ics File for Apple Calendar, iPhone, Mac, Outlook
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Da3wtak Luxury Invitations//AR',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:wedding-${Date.now()}@da3wtak.app`,
      `DTSTAMP:${startStr}Z`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDetails.replace(/\n/g, '\\n')}`,
      `LOCATION:${eventLocation}`,
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      'DESCRIPTION:تذكير: حفل زفاف غداً',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `wedding-${weddingData.groomName}-${weddingData.brideName}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedIcs(true);
    setTimeout(() => setDownloadedIcs(false), 3500);
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#f5e7a9] border border-[#d4af37]/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
        >
          <CalendarIcon className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Google Calendar</span>
        </a>
        <button
          onClick={handleDownloadIcs}
          className="px-3.5 py-1.5 rounded-xl bg-[#d4af37]/10 hover:bg-[#d4af37]/20 text-[#f5e7a9] border border-[#d4af37]/40 text-xs font-semibold flex items-center gap-1.5 transition-all"
        >
          {downloadedIcs ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5 text-[#d4af37]" />}
          <span>Apple / iCal</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full rounded-2xl bg-gradient-to-b from-[#131825] to-[#0c0f16] border border-[#d4af37]/30 p-5 sm:p-6 shadow-xl relative overflow-hidden ${className}`}>
      {/* Subtle gold accent light */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1 text-right">
          <div className="flex items-center gap-2 text-xs font-tajawal text-[#d4af37]">
            <Clock size={14} />
            <span>حفظ الموعد لعدم النسيان</span>
            <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
            <span className="text-gray-400">تذكير تلقائي</span>
          </div>
          <h4 className="text-lg font-bold font-serif text-white">
            أضف موعد الزفاف إلى تقويمك
          </h4>
          <p className="text-xs text-gray-400 font-cairo max-w-md">
            احفظ تاريخ {weddingData.weddingDayArabic} في تقويم هاتفك الذكي وتلقَّ تنبيهاً مسبقاً قبل موعد الحفل.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto shrink-0">
          <a
            id="add-google-calendar-btn"
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/15 transition-all shadow-sm active:scale-95"
          >
            <ExternalLink size={14} className="text-[#d4af37]" />
            <span>Google Calendar</span>
          </a>

          <button
            id="download-ical-btn"
            onClick={handleDownloadIcs}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            {downloadedIcs ? (
              <>
                <Check size={14} className="text-[#0b0e14]" />
                <span>تم تحميل ملف التقويم</span>
              </>
            ) : (
              <>
                <Download size={14} />
                <span>Apple / Outlook (.ics)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
