import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  QrCode, 
  Download, 
  Share2, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  User, 
  Users, 
  MapPin, 
  Scan, 
  RotateCcw,
  Clock,
  Crown
} from 'lucide-react';
import { WeddingData } from '../types';

interface VipEntryTicketProps {
  weddingData: WeddingData;
  className?: string;
}

export const VipEntryTicket: React.FC<VipEntryTicketProps> = ({
  weddingData,
  className = ''
}) => {
  const [guestName, setGuestName] = useState(weddingData.guestName || 'سعادة الأستاذ / فهد بن ناصر آل الشيخ');
  const [companionsCount, setCompanionsCount] = useState<number>(weddingData.guestCount || 2);
  const [seatNumber, setSeatNumber] = useState(weddingData.guestSeat || 'طاولة VIP رقم 04');
  const [isEditing, setIsEditing] = useState(false);
  const [scanningState, setScanningState] = useState<'idle' | 'scanning' | 'verified'>('idle');
  const [copiedLink, setCopiedLink] = useState(false);

  // Generate unique pass code
  const ticketCode = `DA3WTAK-VIP-2026-${weddingData.groomName.slice(0, 2)}-${companionsCount}P`;

  // QR Code URL
  const qrDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    `PASS: ${ticketCode} | GUEST: ${guestName} | COMPANIONS: ${companionsCount} | VENUE: ${weddingData.venueName}`
  )}&color=0b0e14&bgcolor=ffffff`;

  const handleSimulateScan = () => {
    setScanningState('scanning');
    setTimeout(() => {
      setScanningState('verified');
    }, 1600);
  };

  const handleResetScan = () => {
    setScanningState('idle');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🎫 بطاقة دخول حفل زفاف ${weddingData.groomName} و ${weddingData.brideName}\n\n` +
      `👤 الاسم الكريم: ${guestName}\n` +
      `👥 عدد المقاعد: ${companionsCount} أشخاص\n` +
      `📍 القاعة: ${weddingData.venueName} (${seatNumber})\n` +
      `📅 الموعد: ${weddingData.weddingDayArabic} ${weddingData.weddingDateGregorian}\n` +
      `🔐 رمز الدخول: ${ticketCode}\n\n` +
      `نتشرف بحضوركم واصطحاب هذه البطاقة لتيسير إجراءات الاستقبال.`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section className={`w-full py-8 ${className}`}>
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171e2c] border border-[#d4af37]/40 text-[#f5e7a9] text-xs font-tajawal mb-2 shadow-sm">
          <Crown size={13} className="text-[#d4af37]" />
          <span>نظام الدخول الذكي وتذاكر الاستقبال</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-amiri font-bold text-gold-gradient">
          بطاقة دخول الضيوف VIP
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-cairo mt-1">
          بطاقة إلكترونية مخصصة لكل ضيف مع رمز QR للتحقق السريع عند بوابة الاستقبال وتحديد المقاعد
        </p>
      </div>

      {/* The Luxury Ticket Container */}
      <div className="max-w-xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#151a26] via-[#10131d] to-[#0a0c12] border-2 border-[#d4af37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.15)] overflow-hidden">
          
          {/* Top Gold Foil Strip */}
          <div className="bg-gradient-to-r from-[#d4af37] via-[#f7e8b0] to-[#d4af37] py-2 px-6 flex items-center justify-between text-[#090b10] text-[11px] font-bold tracking-wider font-tajawal">
            <div className="flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>OFFICIAL GUEST ENTRY PASS</span>
            </div>
            <span>VIP TICKET #{ticketCode}</span>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header with Monogram & Event Name */}
            <div className="flex items-start justify-between border-b border-[#d4af37]/20 pb-5">
              <div className="text-right">
                <span className="text-[10px] text-[#d4af37] font-bold uppercase tracking-widest block font-tajawal">
                  حفل زفاف ملكي خاص
                </span>
                <h4 className="text-2xl font-bold font-amiri text-white mt-0.5">
                  {weddingData.groomName} & {weddingData.brideName}
                </h4>
                <p className="text-xs text-gray-400 font-cairo mt-0.5">
                  {weddingData.venueName} • {weddingData.hallName}
                </p>
              </div>

              <div className="w-12 h-12 rounded-full border border-[#d4af37]/50 bg-[#0c0f16] flex items-center justify-center text-[#d4af37] font-serif font-bold text-lg shadow-inner">
                {weddingData.groomName[0]}&{weddingData.brideName[0]}
              </div>
            </div>

            {/* Guest Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0a0d14]/70 p-4 rounded-2xl border border-white/5">
              
              {/* Guest Name */}
              <div className="space-y-1 text-right">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <User size={13} className="text-[#d4af37]" />
                  <span>اسم الضيف الكريم:</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#121622] border border-[#d4af37]/50 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                ) : (
                  <p className="text-sm font-bold text-[#f5e7a9] font-tajawal">
                    {guestName}
                  </p>
                )}
              </div>

              {/* Companions Count */}
              <div className="space-y-1 text-right">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Users size={13} className="text-[#d4af37]" />
                  <span>المقاعد المخصصة:</span>
                </div>
                {isEditing ? (
                  <select
                    value={companionsCount}
                    onChange={(e) => setCompanionsCount(Number(e.target.value))}
                    className="w-full bg-[#121622] border border-[#d4af37]/50 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  >
                    <option value={1}>شخص واحد (دعوة فردية)</option>
                    <option value={2}>شخصان (الضيف ومرافق)</option>
                    <option value={3}>3 أشخاص</option>
                    <option value={4}>4 أشخاص (عائلية)</option>
                  </select>
                ) : (
                  <p className="text-sm font-bold text-white font-tajawal">
                    {companionsCount} {companionsCount === 1 ? 'شخص (فردي)' : companionsCount === 2 ? 'شخصان (الضيف ومرافق)' : 'أشخاص'}
                  </p>
                )}
              </div>

              {/* Table / Seat */}
              <div className="space-y-1 text-right">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Crown size={13} className="text-[#d4af37]" />
                  <span>رقم الطاولة / المقعد:</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    className="w-full bg-[#121622] border border-[#d4af37]/50 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                ) : (
                  <p className="text-xs font-semibold text-emerald-400 font-tajawal">
                    {seatNumber}
                  </p>
                )}
              </div>

              {/* Date & Time */}
              <div className="space-y-1 text-right">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Clock size={13} className="text-[#d4af37]" />
                  <span>الموعد ووقت الدخول:</span>
                </div>
                <p className="text-xs font-medium text-gray-300 font-tajawal">
                  {weddingData.weddingDayArabic} • 08:30 مساءً
                </p>
              </div>

            </div>

            {/* Quick Edit Toggle for Personalizing Demo Pass */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs text-[#d4af37] hover:underline font-semibold"
              >
                {isEditing ? '✓ اعتماد بيانات التذكرة' : '✎ تخصيص اسم الضيف والمقعد للتجربة'}
              </button>
            </div>

            {/* QR Code & Scanner Interaction Box */}
            <div className="p-5 rounded-2xl bg-[#080a0f] border border-[#d4af37]/30 text-center relative overflow-hidden">
              
              {/* Decorative side ticket notches */}
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#080a0f] border-r border-[#d4af37]/40 pointer-events-none" />
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#080a0f] border-l border-[#d4af37]/40 pointer-events-none" />

              <div className="relative inline-block my-2">
                <div className="w-36 h-36 sm:w-44 sm:h-44 bg-white p-2 rounded-2xl mx-auto shadow-2xl relative overflow-hidden flex items-center justify-center">
                  <img
                    src={qrDataUrl}
                    alt="VIP Entry QR Code"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />

                  {/* Scanning Laser Animation */}
                  {scanningState === 'scanning' && (
                    <motion.div
                      initial={{ top: '0%' }}
                      animate={{ top: '95%' }}
                      transition={{ duration: 1.4, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                      className="absolute left-0 right-0 h-1 bg-red-500 shadow-[0_0_12px_#ef4444] z-20 pointer-events-none"
                    />
                  )}
                </div>

                {/* Verified Overlay Pill */}
                <AnimatePresence>
                  {scanningState === 'verified' && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="absolute inset-0 bg-emerald-950/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-3 text-emerald-300 border-2 border-emerald-500"
                    >
                      <ShieldCheck size={42} className="text-emerald-400 mb-1 animate-bounce" />
                      <span className="font-bold text-sm">تم التحقق بنجاح!</span>
                      <span className="text-[11px] text-emerald-200 mt-1">
                        أهلاً بكم وبمرافقكم الكريم
                      </span>
                      <span className="text-[10px] text-emerald-300 font-mono mt-0.5">
                        {seatNumber}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Status Message below QR */}
              <div className="mt-3">
                {scanningState === 'idle' && (
                  <p className="text-xs text-gray-400 font-cairo">
                    يتم مسح هذا الرمز بواسطة أجهزة الاستقبال عند مدخل القاعة للتحقق وتوجيهكم لطاولتكم.
                  </p>
                )}
                {scanningState === 'scanning' && (
                  <p className="text-xs text-amber-300 font-bold animate-pulse font-cairo">
                    جاري فحص الرمز وقراءة بيانات الضيف...
                  </p>
                )}
                {scanningState === 'verified' && (
                  <p className="text-xs text-emerald-400 font-bold font-cairo">
                    تم توثيق الدخول رسمياً وإشعار فريق الضيافة.
                  </p>
                )}
              </div>

              {/* Interactive Simulation Buttons */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {scanningState !== 'verified' ? (
                  <button
                    type="button"
                    onClick={handleSimulateScan}
                    disabled={scanningState === 'scanning'}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#f5e7a9] border border-[#d4af37]/40 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Scan size={14} className="text-[#d4af37]" />
                    <span>{scanningState === 'scanning' ? 'جاري الفحص...' : 'تجربة فحص الرمز (محاكي البوابة)'}</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleResetScan}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>إعادة تجربة الفحص</span>
                  </button>
                )}
              </div>

            </div>

            {/* Action Buttons: WhatsApp Send & Download */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleShareWhatsApp}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share2 size={15} />
                <span>إرسال التذكرة عبر واتساب</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  window.print();
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download size={15} className="text-[#d4af37]" />
                <span>حفظ وطباعة التذكرة</span>
              </button>
            </div>

          </div>

          {/* Bottom Security Watermark */}
          <div className="bg-[#08090e] border-t border-white/5 py-2 px-6 text-center text-[10px] text-gray-500 font-mono">
            SECURE VERIFICATION TOKEN • DA3WTAK PLATFORM 2026
          </div>

        </div>
      </div>
    </section>
  );
};
