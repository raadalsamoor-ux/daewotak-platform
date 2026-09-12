import React from 'react';
import { HeartHandshake, Baby, CameraOff, Sparkles, ShieldCheck } from 'lucide-react';
import { WeddingData } from '../types';
import { TiltCard } from './TiltCard';

interface EventNotesProps {
  notes: WeddingData['notes'];
}

export const EventNotes: React.FC<EventNotesProps> = ({ notes }) => {
  const getNoteIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby size={22} className="text-[#df9e82]" />;
      case 'CameraOff':
        return <CameraOff size={22} className="text-[#df9e82]" />;
      case 'HeartHandshake':
        return <HeartHandshake size={22} className="text-[#d4af37]" />;
      default:
        return <Sparkles size={22} className="text-[#d4af37]" />;
    }
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-4 flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center max-w-xl mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#131926]/80 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-tajawal mb-3">
          <ShieldCheck size={13} className="text-[#d4af37]" />
          <span>إرشادات وخصوصية الحفل</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-bold text-gold-gradient">
          ملاحظات وتنبيهات هامة
        </h2>
        <p className="text-xs sm:text-sm text-[#a8afc2] font-cairo mt-2">
          نقدر ونشكر كريم تفهمكم وتعاونكم لإخراج هذه الليلة في أبهى صورة
        </p>
      </div>

      {/* Grid of Note Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl">
        {notes.map((note, idx) => (
          <TiltCard
            key={idx}
            maxTilt={6}
            className="rounded-2xl bg-gradient-to-b from-[#131826] to-[#0a0d13] border border-[#d4af37]/25 shadow-card-3d p-5 sm:p-6 flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#182030] border border-[#d4af37]/30 flex items-center justify-center shrink-0 shadow-inner">
                {getNoteIcon(note.icon)}
              </div>
              <div>
                <h3 className="font-amiri text-lg font-bold text-[#f5e7a9] mb-1">
                  {note.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a4adbf] font-cairo leading-relaxed">
                  {note.description}
                </p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
