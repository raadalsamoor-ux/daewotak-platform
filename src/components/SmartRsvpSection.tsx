import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  Send, 
  Users, 
  Sparkles, 
  Instagram, 
  MessageSquare, 
  Check, 
  Heart,
  Phone
} from 'lucide-react';
import { MealPreference, WeddingData, GuestRecord } from '../types';
import { TiltCard } from './TiltCard';

interface SmartRsvpSectionProps {
  weddingData: WeddingData;
  className?: string;
}

export const SmartRsvpSection: React.FC<SmartRsvpSectionProps> = ({
  weddingData,
  className = ''
}) => {
  const [guestName, setGuestName] = useState(weddingData.guestName || '');
  const [status, setStatus] = useState<'attending' | 'declined'>('attending');
  const [companions, setCompanions] = useState<number>(weddingData.guestCount || 1);
  const [phone, setPhone] = useState('');
  const [mealPreference, setMealPreference] = useState<MealPreference>('lamb');
  const [allergies, setAllergies] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [totalConfirmed, setTotalConfirmed] = useState(148);

  const fireCelebrationConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f5e7a9', '#ffffff', '#df9e82']
      });
    } catch {
      // safe fallback
    }
  };

  const syncToGuestsDatabase = () => {
    try {
      const stored = localStorage.getItem('wedding_guests_data');
      let currentGuests: GuestRecord[] = stored ? JSON.parse(stored) : [];
      
      // Look for existing guest by name or phone
      const existingIdx = currentGuests.findIndex(
        (g) => (guestName && g.name.toLowerCase() === guestName.toLowerCase()) || (phone && g.phone === phone)
      );

      const updatedRecord: GuestRecord = {
        id: existingIdx >= 0 ? currentGuests[existingIdx].id : `rsvp-${Date.now()}`,
        name: guestName,
        phone: phone || (existingIdx >= 0 ? currentGuests[existingIdx].phone : undefined),
        status: status === 'attending' ? 'confirmed' : 'declined',
        companions: status === 'attending' ? companions : 1,
        table: existingIdx >= 0 ? currentGuests[existingIdx].table : (weddingData.guestSeat || 'طاولة الضيوف الكرام'),
        seat: existingIdx >= 0 ? currentGuests[existingIdx].seat : 'مقعد خاص',
        mealPreference: status === 'attending' ? mealPreference : undefined,
        allergiesNote: allergies,
        wishesNote: note,
        isCheckedIn: existingIdx >= 0 ? currentGuests[existingIdx].isCheckedIn : false,
      };

      if (existingIdx >= 0) {
        currentGuests[existingIdx] = updatedRecord;
      } else {
        currentGuests = [updatedRecord, ...currentGuests];
      }

      localStorage.setItem('wedding_guests_data', JSON.stringify(currentGuests));
    } catch {
      // safe fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    syncToGuestsDatabase();

    if (status === 'attending') {
      fireCelebrationConfetti();
      setTotalConfirmed((prev) => prev + companions);
    }
    setSubmitted(true);
  };

  const getMealNameInArabic = (m: MealPreference) => {
    switch (m) {
      case 'lamb': return 'وليمة لحم ضأن وقوزي ملكي';
      case 'chicken': return 'أطباق دجاج فاخر ومقبلات';
      case 'vegetarian': return 'قائمة طعام نباتية فاخرة';
      case 'gluten_free': return 'وجبة خاصة خالية من الجلوتين';
      default: return 'الوليمة الملكية';
    }
  };

  const handleSendViaWhatsApp = () => {
    const statusText = status === 'attending' 
      ? `✅ أتشرف بتأكيد حضوري بحول الله وقوته (${companions} أشخاص)\n• الوجبة المفضلة: ${getMealNameInArabic(mealPreference)}${allergies ? `\n• الحساسية/ملاحظات: ${allergies}` : ''}` 
      : `🤍 أعتذر بكل محبة لظروف خاصة، مع أصدق التبريكات والدعوات لكم بالتوفيق`;

    const message = encodeURIComponent(
      `السلام عليكم ورحمة الله وبركاته،\n` +
      `تأكيد حضور حفل زفاف ${weddingData.groomName} و ${weddingData.brideName}:\n` +
      `• الاسم الكريم: ${guestName || 'أحد المهنئين'}\n` +
      `• حالة الحضور: ${statusText}\n` +
      (phone ? `• رقم الجوال: ${phone}\n` : '') +
      (note ? `• كلمة التهنئة: "${note}"\n` : '') +
      `دامت دياركم عامرة بالأفراح والمسرات!`
    );

    const targetPhone = weddingData.whatsappNumber ? weddingData.whatsappNumber.replace(/\+/g, '') : '966500000000';
    window.open(`https://api.whatsapp.com/send?phone=${targetPhone}&text=${message}`, '_blank');
  };

  return (
    <section id="rsvp-smart-section" className={`w-full py-12 md:py-20 px-4 flex flex-col items-center ${className}`}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-gradient-to-tr from-[#d4af37]/15 to-[#e1306c]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-xl mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#171d2c]/80 border border-[#d4af37]/30 text-[#e6ca65] text-xs font-tajawal mb-3 shadow-sm">
          <Sparkles size={13} className="text-[#d4af37]" />
          <span>تأكيد الحضور الذكي واللحظي</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-bold text-gold-gradient">
          تأكيد الحضور ومشاركة الفرحة
        </h2>
        <p className="text-xs sm:text-sm text-[#b0b8cb] font-cairo mt-2 leading-relaxed">
          يسرنا استقبال ردكم الكريم وتأكيد حضوركم لحفل زفافنا لنستعد لاستقبالكم بأبهى حُلّة
        </p>

        {/* Live Attendance Counter Pill */}
        <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e121a] border border-[#d4af37]/30 text-xs text-[#f5e7a9]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>تم تأكيد حضور <strong>{totalConfirmed}</strong> ضيفاً حتى الآن بحمد الله</span>
        </div>
      </div>

      {/* Main Interactive Form Card with 3D Tilt */}
      <div className="w-full max-w-xl relative z-10">
        <TiltCard
          id="rsvp-smart-card"
          maxTilt={5}
          className="rounded-3xl bg-gradient-to-b from-[#141824] via-[#0f121b] to-[#0a0c12] border-2 border-[#d4af37]/45 shadow-card-3d p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Inner luxury border */}
          <div className="absolute inset-3 border border-[#d4af37]/20 rounded-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5 text-right relative z-10"
              >
                {/* Status Selection: Attending vs Declined */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-gray-300 font-tajawal">
                    هل ستشرفنا بحضوركم الكريم؟ *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setStatus('attending')}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        status === 'attending'
                          ? 'bg-gradient-to-b from-[#182a20] to-[#0c1912] border-emerald-500/80 text-emerald-300 shadow-md shadow-emerald-500/10'
                          : 'bg-[#121622] border-white/10 hover:border-white/20 text-gray-400'
                      }`}
                    >
                      <CheckCircle2 size={20} className={status === 'attending' ? 'text-emerald-400' : 'text-gray-500'} />
                      <span className="text-xs font-bold font-tajawal">سأحضر بكل سرور ✨</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStatus('declined')}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        status === 'declined'
                          ? 'bg-gradient-to-b from-[#2a181b] to-[#190c0e] border-rose-500/80 text-rose-300 shadow-md shadow-rose-500/10'
                          : 'bg-[#121622] border-white/10 hover:border-white/20 text-gray-400'
                      }`}
                    >
                      <XCircle size={20} className={status === 'declined' ? 'text-rose-400' : 'text-gray-500'} />
                      <span className="text-xs font-bold font-tajawal">أعتذر بكل ود 🤍</span>
                    </button>
                  </div>
                </div>

                {/* Guest Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-300 font-tajawal">
                    الاسم الكامل الكريم *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: فهد بن ناصر آل الشيخ"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-[#121622] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Number of Companions (Only if Attending) */}
                {status === 'attending' && (
                  <div className="space-y-1.5 animate-fadeIn">
                    <label className="block text-xs font-medium text-gray-300 font-tajawal">
                      عدد الحاضرين (شاملاً شخصكم الكريم):
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setCompanions(num)}
                          className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            companions === num
                              ? 'bg-[#d4af37] text-[#090b10] border-[#d4af37] shadow-md'
                              : 'bg-[#121622] border-white/10 text-gray-300 hover:bg-white/5'
                          }`}
                        >
                          {num} {num === 1 ? 'فردي' : num === 2 ? 'شخصان' : 'أشخاص'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Banquet Meal Preference (Special digitalinvitation.me feature) */}
                {status === 'attending' && (
                  <div className="space-y-2 animate-fadeIn pt-1 border-t border-white/5">
                    <label className="block text-xs font-medium text-gray-300 font-tajawal">
                      تفضيل وجبة العشاء للوليمة المباركة:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setMealPreference('lamb')}
                        className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                          mealPreference === 'lamb'
                            ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5e7a9] font-bold shadow-sm'
                            : 'bg-[#121622] border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-base">🥩</span>
                        <div>
                          <div className="text-xs">لحم ضأن وقوزي</div>
                          <div className="text-[10px] text-gray-400">وليمة ملكية</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setMealPreference('chicken')}
                        className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                          mealPreference === 'chicken'
                            ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#f5e7a9] font-bold shadow-sm'
                            : 'bg-[#121622] border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-base">🍗</span>
                        <div>
                          <div className="text-xs">دجاج فاخر</div>
                          <div className="text-[10px] text-gray-400">مقبلات شرقية</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setMealPreference('vegetarian')}
                        className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                          mealPreference === 'vegetarian'
                            ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300 font-bold shadow-sm'
                            : 'bg-[#121622] border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-base">🥗</span>
                        <div>
                          <div className="text-xs">وجبة نباتية</div>
                          <div className="text-[10px] text-gray-400">خضار وأعشاب</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setMealPreference('gluten_free')}
                        className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                          mealPreference === 'gluten_free'
                            ? 'bg-sky-950/40 border-sky-500/60 text-sky-300 font-bold shadow-sm'
                            : 'bg-[#121622] border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-base">🌾</span>
                        <div>
                          <div className="text-xs">خالي جلوتين</div>
                          <div className="text-[10px] text-gray-400">حمية خاصة</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}

                {/* Dietary Allergies Note */}
                {status === 'attending' && (
                  <div className="space-y-1.5 animate-fadeIn">
                    <label className="block text-xs font-medium text-gray-300 font-tajawal">
                      ملاحظات الحساسية الغذائية (اختياري):
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: حساسية شديدة من المكسرات، حليب، أو بيض..."
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                      className="w-full bg-[#121622] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                )}

                {/* Mobile / WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-300 font-tajawal">
                    رقم الجوال أو الواتساب (لتأكيد المقعد)
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="05xxxxxxxx"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#121622] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors text-right"
                      dir="ltr"
                    />
                    <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Message to Couple */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-300 font-tajawal">
                    كلمة تهنئة أو دعوة للعروسين (اختياري)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="بارك الله لكما وبارك عليكما وجمع بينكما في خير..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-[#121622] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-3 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f7eab8] to-[#d4af37] text-[#090b10] font-tajawal font-extrabold text-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <Send size={16} />
                    <span>تأكيد وحفظ الرد فورياً</span>
                  </button>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
                    <span>أو التواصل مباشرة:</span>
                    <div className="flex items-center gap-3">
                      <a
                        href={weddingData.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                      >
                        <Instagram size={14} />
                        <span>إنستغرام</span>
                      </a>
                    </div>
                  </div>
                </div>

              </motion.form>
            ) : (
              /* Success Confirmation View */
              <motion.div
                key="rsvp-success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6 space-y-5 relative z-10"
              >
                <div className="w-18 h-18 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                  <Check size={36} />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-amiri text-white">
                    {status === 'attending' ? 'أهلاً وسهلاً بكم وشرفتمونا!' : 'وصلتكم دعواتنا وخالص شكرنا'}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-cairo max-w-md mx-auto leading-relaxed">
                    {status === 'attending'
                      ? `شكراً لك ${guestName}، تم تسجيل تأكيد حضورك (${companions} أشخاص) بنجاح. نتطلع بشوق للقياكم في ${weddingData.venueName}.`
                      : `شكراً لك ${guestName} على مشاعرك النبيلة ودعواتك الطيبة، وتمنياتنا لكم بكل خير.`}
                  </p>
                </div>

                {/* Send via WhatsApp Action */}
                <div className="p-4 rounded-2xl bg-[#0b0e14] border border-[#d4af37]/30 space-y-3">
                  <p className="text-xs text-[#f5e7a9] font-tajawal">
                    يمكنك إرسال تأكيد الحضور المباشر إلى واتساب العروسين لتوثيق مقعدك فوراً:
                  </p>
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <MessageSquare size={16} />
                    <span>إرسال التأكيد إلى واتساب العروسين</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-gray-400 hover:text-white underline transition-colors"
                >
                  تعديل بيانات الحضور
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </TiltCard>
      </div>
    </section>
  );
};
