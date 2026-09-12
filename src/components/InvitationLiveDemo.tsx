import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sliders, 
  Share2, 
  Sparkles, 
  Instagram, 
  Volume2,
  Globe,
  Users,
  Award,
  Crown,
  DoorOpen,
  Mail
} from 'lucide-react';
import { WeddingData } from '../types';
import { InteractiveEnvelope3D } from './InteractiveEnvelope3D';
import { InteractiveGate3D } from './InteractiveGate3D';
import { HeroCountdown } from './HeroCountdown';
import { NamesAndDetails } from './NamesAndDetails';
import { WeddingTimeline } from './WeddingTimeline';
import { InstagramRSVP } from './InstagramRSVP';
import { SmartRsvpSection } from './SmartRsvpSection';
import { LocationSection } from './LocationSection';
import { EventNotes } from './EventNotes';
import { AudioPlayer } from './AudioPlayer';
import { AddToCalendar } from './AddToCalendar';
import { VipEntryTicket } from './VipEntryTicket';
import { GiftRegistryCard } from './GiftRegistryCard';
import { DressCodeGuide } from './DressCodeGuide';
import { MemoriesGallery } from './MemoriesGallery';
import { LuxuryParticlesBackground } from './LuxuryParticlesBackground';

interface InvitationLiveDemoProps {
  weddingData: WeddingData;
  onBackToSite: () => void;
  onOpenStudio: () => void;
  onOpenShareModal: () => void;
  onOpenGuestManager?: () => void;
}

export const InvitationLiveDemo: React.FC<InvitationLiveDemoProps> = ({
  weddingData,
  onBackToSite,
  onOpenStudio,
  onOpenShareModal,
  onOpenGuestManager
}) => {
  const [activeOpeningStyle, setActiveOpeningStyle] = useState<'gate' | 'envelope'>(
    weddingData.openingStyle || 'gate'
  );
  const [isOpeningOpen, setIsOpeningOpen] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>(weddingData.language || 'ar');

  const scrollToRsvp = () => {
    const el = document.getElementById('rsvp-smart-section') || document.getElementById('rsvp-instagram-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInvitation = () => {
    setIsOpeningOpen(true);
    setAutoPlayAudio(true);
    setTimeout(() => {
      const el = document.getElementById('invitation-hero');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1100);
  };

  return (
    <div className={`min-h-screen bg-[#090b10] text-[#f5f5f7] relative selection:bg-[#d4af37] selection:text-black ${lang === 'en' ? 'font-sans' : ''}`} dir={lang === 'en' ? 'ltr' : 'rtl'}>
      
      {/* Top Floating Control Bar for the Demo */}
      <div className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#090b10]/95 border-b border-[#d4af37]/30 px-4 py-3 shadow-xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          
          <button
            onClick={onBackToSite}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/10 transition-colors cursor-pointer"
          >
            <ArrowRight className={`w-3.5 h-3.5 text-[#d4af37] ${lang === 'en' ? 'rotate-180' : ''}`} />
            <span>{lang === 'en' ? 'Return to Main Site' : 'العودة للموقع الرئيسي'}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#f5e7a9] font-serif">
              {lang === 'en' ? 'Live 3D Preview • Teatro Royale Theme' : 'المعاينة التفاعلية ثلاثية الأبعاد • نموذج تياترو (Teatro)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
              title="تغيير لغة العرض"
            >
              <Globe size={13} className="text-[#d4af37]" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {onOpenGuestManager && (
              <button
                onClick={onOpenGuestManager}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-colors cursor-pointer"
                title="لوحة تحكم المنظمين ومتابعة الردود"
              >
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>إدارة الضيوف والردود</span>
              </button>
            )}

            <button
              onClick={onOpenStudio}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#f5e7a9] border border-[#d4af37]/40 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Customize Studio' : 'تخصيص البيانات'}</span>
            </button>

            <button
              onClick={onOpenShareModal}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="مشاركة"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Single Page Invitation Experience */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12 sm:space-y-16 flex flex-col items-center">
        
        {/* Personalized Guest Welcome Ribbon (DigitalInvitation.me Special Feature) */}
        {weddingData.guestName && (
          <div className="w-full max-w-2xl bg-gradient-to-r from-[#1a1711] via-[#2a2113] to-[#1a1711] border border-[#d4af37]/50 rounded-2xl p-4 shadow-xl flex items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                <Crown size={20} />
              </div>
              <div>
                <div className="text-[11px] text-[#d4af37] font-semibold flex items-center gap-1">
                  <Sparkles size={11} />
                  <span>دعوة شخصية خاصة موجهة لسعادة:</span>
                </div>
                <div className="text-base font-bold text-white font-amiri tracking-wide">
                  {weddingData.guestName}
                </div>
              </div>
            </div>

            <div className="text-left border-r border-white/10 pr-4">
              <div className="text-[10px] text-gray-400">مكان الجلوس المخصص</div>
              <div className="text-xs font-bold text-[#f5e7a9]">{weddingData.guestSeat || 'طاولة كبار الشخصيات'}</div>
              <div className="text-[10px] text-emerald-400">مقاعد محجوزة: {weddingData.guestCount || 1}</div>
            </div>
          </div>
        )}

        {/* Interactive Opening Experience (Halaheel Style "باب الفرح" + Luxury Envelope) */}
        <section id="envelope-section" className="w-full pt-2 flex flex-col items-center">
          {/* Style Switcher Pill */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121622] rounded-full border border-white/10 mb-2 shadow-md">
            <button
              type="button"
              onClick={() => setActiveOpeningStyle('gate')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-tajawal font-bold transition-all cursor-pointer ${
                activeOpeningStyle === 'gate'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#090b10] shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <DoorOpen size={14} />
              <span>نموذج باب الفرح (هلاهيل)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveOpeningStyle('envelope')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-tajawal font-bold transition-all cursor-pointer ${
                activeOpeningStyle === 'envelope'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#090b10] shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Mail size={14} />
              <span>المظروف الملكي الفاخر</span>
            </button>
          </div>

          {activeOpeningStyle === 'gate' ? (
            <InteractiveGate3D
              weddingData={weddingData}
              isOpen={isOpeningOpen}
              onOpenInvitation={handleOpenInvitation}
              onToggleOpen={() => setIsOpeningOpen(!isOpeningOpen)}
            />
          ) : (
            <InteractiveEnvelope3D 
              weddingData={weddingData} 
              isOpen={isOpeningOpen}
              onOpenInvitation={handleOpenInvitation}
              onToggleOpen={() => setIsOpeningOpen(!isOpeningOpen)}
            />
          )}
        </section>

        {/* Hero & Countdown */}
        <div id="invitation-hero" className="w-full">
          <HeroCountdown 
            weddingData={weddingData} 
            onConfirmAttendanceClick={scrollToRsvp}
          />
        </div>

        {/* Add to Calendar Sync Card */}
        {weddingData.showCalendarSync !== false && (
          <section id="calendar-sync-section" className="w-full max-w-2xl">
            <AddToCalendar weddingData={weddingData} />
          </section>
        )}

        {/* Names and Religious Verse */}
        <section id="details-section" className="w-full">
          <NamesAndDetails weddingData={weddingData} />
        </section>

        {/* Wedding Timeline */}
        <section id="timeline-section" className="w-full">
          <WeddingTimeline timeline={weddingData.timeline} />
        </section>

        {/* VIP Entry Ticket with QR & Interactive Gate Scanner */}
        {weddingData.showVipTicket !== false && (
          <section id="vip-ticket-section" className="w-full">
            <VipEntryTicket weddingData={weddingData} />
          </section>
        )}

        {/* Smart RSVP Section with Confetti & Direct WhatsApp confirmation */}
        <section id="rsvp-smart-section" className="w-full">
          <SmartRsvpSection weddingData={weddingData} />
        </section>

        {/* Instagram RSVP fallback/alternative */}
        <section id="rsvp-instagram-section" className="w-full">
          <InstagramRSVP weddingData={weddingData} />
        </section>

        {/* Dress Code & Etiquette Palette */}
        {weddingData.showDressCodePalette !== false && (
          <section id="dress-code-section" className="w-full">
            <DressCodeGuide weddingData={weddingData} />
          </section>
        )}

        {/* Photo Memories Gallery */}
        {weddingData.showPhotoMemories !== false && (
          <section id="memories-section" className="w-full">
            <MemoriesGallery weddingData={weddingData} />
          </section>
        )}

        {/* Location & Navigation (Google Maps, Waze, Apple Maps) */}
        <section id="location-section" className="w-full">
          <LocationSection weddingData={weddingData} />
        </section>

        {/* Bank Gift Registry & IBAN Card */}
        {weddingData.showGiftRegistry !== false && (
          <section id="gift-registry-section" className="w-full">
            <GiftRegistryCard weddingData={weddingData} />
          </section>
        )}

        {/* Event Etiquette and Notes */}
        <section id="notes-section" className="w-full">
          <EventNotes notes={weddingData.notes} />
        </section>

        {/* Bottom return button */}
        <div className="pt-8 pb-16 text-center w-full border-t border-white/10">
          <button
            onClick={onBackToSite}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-xs shadow-lg shadow-[#d4af37]/20 hover:scale-105 transition-all cursor-pointer"
          >
            <span>{lang === 'en' ? 'Explore Design Catalog' : 'العودة لصفحات الموقع وتصفح الكتالوج'}</span>
            <ArrowRight className={`w-4 h-4 ${lang === 'en' ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </main>

      {/* Ambient Multi-Track Audio Player */}
      <AudioPlayer 
        autoPlayTrigger={autoPlayAudio} 
        initialTrack={weddingData.musicTrack || 'oud'}
      />

      {/* Luxury Gold & Falling Rose Petals Particles Background */}
      <LuxuryParticlesBackground 
        initialMode={weddingData.particlesEffect || 'mix'} 
        showControlBadge={true} 
      />

    </div>
  );
};
