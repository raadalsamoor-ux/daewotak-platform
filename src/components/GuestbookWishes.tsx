import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquareHeart, 
  Heart, 
  Send, 
  Sparkles, 
  User, 
  Check, 
  ThumbsUp, 
  Smile
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GuestbookWish } from '../types';
import { initialWishesList } from '../data/testimonialsData';

interface GuestbookWishesProps {
  coupleNames: string;
}

export const GuestbookWishes: React.FC<GuestbookWishesProps> = ({ coupleNames }) => {
  const [wishes, setWishes] = useState<GuestbookWish[]>(() => {
    try {
      const saved = localStorage.getItem('da3wtak_guestbook_wishes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return initialWishesList;
  });

  const [senderName, setSenderName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('da3wtak_guestbook_wishes', JSON.stringify(wishes));
    } catch (e) {
      console.error(e);
    }
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;

    const newWish: GuestbookWish = {
      id: `wish-${Date.now()}`,
      senderName: senderName.trim(),
      relation: relation.trim() || 'صديق ومهنئ',
      message: message.trim(),
      timestamp: 'الآن',
      likes: 1,
      badge: 'تهنئة جديدة'
    };

    setWishes([newWish, ...wishes]);
    setSenderName('');
    setRelation('');
    setMessage('');
    setSubmitted(true);

    // Fire golden celebration confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#d4af37', '#f5e7a9', '#ffffff', '#eab308']
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    setWishes((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          const currentlyLiked = w.likedByMe;
          return {
            ...w,
            likes: currentlyLiked ? w.likes - 1 : w.likes + 1,
            likedByMe: !currentlyLiked
          };
        }
        return w;
      })
    );
  };

  return (
    <section id="guestbook-section" className="py-20 bg-[#090b10] relative border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
            <MessageSquareHeart className="w-3.5 h-3.5 text-pink-400" />
            <span>دفتر التهاني والتبريكات الرقمي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
            شارك العروسين فرحتهم بأجمل الكلمات
          </h2>
          <p className="text-gray-400 text-sm">
            اترك كلمة طيبة ودعوة مباركة لـ ({coupleNames}) لتبقى ذكرى عطرة في سجل فرحتهم.
          </p>
        </motion.div>

        {/* Input Form Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="bg-gradient-to-b from-[#131722] to-[#0d1017] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4 text-right">
            <h3 className="text-lg font-bold font-serif text-white flex items-center justify-end gap-2">
              <span>كتابة تهنئة جديدة</span>
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-300 block mb-1">اسمك الكريم</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="مثال: فهد بن عبدالعزيز"
                  className="w-full bg-[#0a0d13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37] text-right"
                />
              </div>
              <div>
                <label className="text-xs text-gray-300 block mb-1">صلة القرابة أو المعرفة (اختياري)</label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="مثال: زميل العمل / ابن العم"
                  className="w-full bg-[#0a0d13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37] text-right"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-300 block mb-1">رسالة التهنئة والدعاء المبارك</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="بارك الله لكما وبارك عليكما وجمع بينكما في خير..."
                className="w-full bg-[#0a0d13] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37] text-right resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              {submitted ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <Check className="w-4 h-4" />
                  <span>تمت إضافة تهنئتكم المباركة بنجاح!</span>
                </div>
              ) : <div />}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-xs shadow-md hover:brightness-110 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>إرسال التهنئة للعروسين</span>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Wishes List */}
        <div className="space-y-4">
          <AnimatePresence>
            {wishes.map((w, index) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4), ease: "easeOut" }}
                className="p-5 rounded-2xl bg-[#11151f] border border-white/5 hover:border-[#d4af37]/30 transition-all duration-300 text-right shadow-sm group"
              >
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                  <button
                    onClick={() => handleLike(w.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      w.likedByMe
                        ? 'bg-pink-950/40 text-pink-300 border-pink-500/30'
                        : 'bg-white/5 text-gray-400 hover:text-white border-white/10'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${w.likedByMe ? 'fill-pink-500 text-pink-500' : ''}`} />
                    <span>{w.likes}</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {w.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 font-medium">
                        {w.badge}
                      </span>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-white font-serif">{w.senderName}</h4>
                      <p className="text-[10px] text-gray-400">{w.relation} • {w.timestamp}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#181e2b] border border-white/10 flex items-center justify-center text-xs text-[#d4af37] font-bold">
                      {w.senderName.slice(0, 1)}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light pr-2">
                  "{w.message}"
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
