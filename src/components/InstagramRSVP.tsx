import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Send, Check, Copy, Sparkles, ExternalLink, QrCode } from 'lucide-react';
import { WeddingData } from '../types';
import { TiltCard } from './TiltCard';

interface InstagramRSVPProps {
  weddingData: WeddingData;
}

export const InstagramRSVP: React.FC<InstagramRSVPProps> = ({ weddingData }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [showQr, setShowQr] = useState<boolean>(false);

  // Suggested direct message text
  const rsvpMessage = `السلام عليكم ورحمة الله وبركاته،\nأتشرف بتأكيد حضوري لحفل زفاف ${weddingData.groomName} و ${weddingData.brideName} المبارك بإذن الله، مع أطيب التهاني وأصدق التبريكات للعروسين وعائلتيهما الكريمتين.`;

  const copyRsvpMessage = () => {
    navigator.clipboard.writeText(rsvpMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      // fallback
    });
  };

  return (
    <section id="rsvp-instagram-section" className="relative w-full py-14 md:py-24 px-4 flex flex-col items-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-gradient-to-tr from-[#d4af37]/15 to-[#e1306c]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-xl mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#171d2c]/80 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-tajawal mb-3 shadow-sm">
          <Instagram size={13} className="text-[#e1306c]" />
          <span>تأكيد الحضور والتواصل المباشر</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-bold text-gold-gradient">
          تأكيد الحضور عبر إنستغرام
        </h2>
        <p className="text-xs sm:text-sm text-[#b0b8cb] font-cairo mt-2 leading-relaxed">
          يسرنا استقبال تأكيد حضوركم الكريم واستفساراتكم مباشرة عبر حسابنا في إنستغرام
        </p>
      </div>

      {/* Main Instagram RSVP Card with 3D Tilt */}
      <div className="w-full max-w-xl relative z-10">
        <TiltCard
          id="instagram-rsvp-card"
          maxTilt={7}
          className="rounded-3xl bg-gradient-to-b from-[#141824] via-[#0f121b] to-[#0a0c12] border-2 border-[#d4af37]/45 shadow-card-3d p-6 sm:p-10 relative overflow-hidden text-center"
        >
          {/* Inner luxury border */}
          <div className="absolute inset-3 border border-[#d4af37]/20 rounded-2xl pointer-events-none" />

          {/* Instagram Account Avatar / Monogram */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Pulsing ring with Instagram colors + Gold */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-80 blur-sm group-hover:opacity-100 transition-opacity animate-pulse" />
              
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0d1017] p-1 border-2 border-[#d4af37] shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1c2333] to-[#0a0d13] flex flex-col items-center justify-center">
                  <Instagram size={36} className="text-[#f5e7a9] mb-0.5" />
                  <span className="text-[9px] font-tajawal text-[#d4af37] tracking-wider font-semibold">
                    @{weddingData.instagramHandle}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="mb-6">
            <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#f5e7a9]">
              دعوتك | Da3wtakq
            </h3>
            <p className="font-tajawal text-xs sm:text-sm text-[#d4af37] mt-1 font-medium" dir="ltr">
              @{weddingData.instagramHandle}
            </p>
            <p className="text-xs text-[#a4adbf] font-cairo mt-2 max-w-md mx-auto leading-relaxed">
              انقر على الزر أدناه للانتقال مباشرة لحساب الإنستغرام وإرسال رسالة خاصة بتأكيد الحضور
            </p>
          </div>

          {/* Prominent Animated Instagram RSVP Action Buttons */}
          <div className="space-y-3.5 my-6">
            {/* Primary Action Button - Opens Instagram directly */}
            <motion.a
              id="confirm-attendance-ig-btn"
              href={weddingData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f7eab8] to-[#d4af37] text-[#090b10] font-tajawal font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] flex items-center justify-center gap-3 transition-all cursor-pointer group"
            >
              <Instagram size={22} className="text-[#090b10] group-hover:rotate-12 transition-transform" />
              <span className="tracking-wide">تأكيد الحضور عبر إنستغرام</span>
              <ExternalLink size={16} className="text-[#090b10]/70" />
            </motion.a>

            {/* Secondary Button - Contact Us */}
            <a
              id="contact-us-ig-btn"
              href={weddingData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-2xl bg-[#171e2c]/80 hover:bg-[#20293b] border border-[#d4af37]/40 text-[#f5e7a9] font-tajawal font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Send size={16} className="text-[#d4af37]" />
              <span>تواصل معنا عبر إنستغرام</span>
            </a>
          </div>

          {/* Polite RSVP Message Template Helper with 1-Click Copy */}
          <div className="mt-8 pt-6 border-t border-[#d4af37]/20 text-right">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-tajawal font-semibold text-[#f5e7a9] flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#d4af37]" />
                <span>صيغة جاهزة لرسالة تأكيد الحضور (اختياري):</span>
              </span>
              <button
                type="button"
                onClick={copyRsvpMessage}
                className="text-[11px] font-tajawal text-[#d4af37] hover:text-[#f7e8b0] flex items-center gap-1 transition-colors cursor-pointer bg-[#171e2c] px-2.5 py-1 rounded-md border border-[#d4af37]/30"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400 font-bold">تم النسخ بنجاح</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>نسخ النص</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#0b0e14]/90 p-3 rounded-xl border border-[#d4af37]/15 text-xs font-cairo text-[#cfd6e6] leading-relaxed select-all">
              "{rsvpMessage.replace(/\n/g, ' ')}"
            </div>
            <p className="text-[10px] text-[#7f889b] font-cairo mt-1.5 text-center sm:text-right">
              يمكنك نسخ النص أعلاه ولصقه فور فتح المحادثة في تطبيق إنستغرام.
            </p>
          </div>

          {/* QR Code toggle for computer visitors */}
          <div className="mt-6 pt-4 border-t border-[#d4af37]/15 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setShowQr(!showQr)}
              className="text-xs font-tajawal text-[#a0a8b9] hover:text-[#d4af37] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <QrCode size={14} className="text-[#d4af37]" />
              <span>{showQr ? 'إخفاء رمز الاستجابة السريعة (QR)' : 'مسح الرمز بالهاتف (QR Code)'}</span>
            </button>
          </div>

          {/* QR Code Card View */}
          {showQr && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 rounded-2xl bg-[#0b0e14] border border-[#d4af37]/30 inline-block mx-auto"
            >
              <div className="w-40 h-40 bg-white p-2 rounded-xl mx-auto flex items-center justify-center shadow-lg">
                {/* Clean QR code rendering using QR image service */}
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                    weddingData.instagramUrl
                  )}&color=090b10&bgcolor=ffffff`}
                  alt="Instagram QR Code"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] font-tajawal text-[#d4af37] mt-2">
                وجه كاميرا هاتفك لمسح الرمز والانتقال مباشرة للإنستغرام
              </p>
            </motion.div>
          )}
        </TiltCard>
      </div>
    </section>
  );
};
