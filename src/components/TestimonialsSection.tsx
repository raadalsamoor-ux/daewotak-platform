import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Sparkles, Heart } from 'lucide-react';
import { testimonialsList } from '../data/testimonialsData';
import { TiltCard } from './TiltCard';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0d14] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-current" />
            <span>قصص نجاح وفرح حقيقية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            ماذا قال العرسان عن تجربة دعوتك؟
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            فخورون بأن نكون جزءاً من أفراح أكثر من 1,200 عريس وعروس في مختلف مدن ومناطق المملكة والخليج.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="h-full flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-b from-[#131722] to-[#0d1017] border border-white/10 hover:border-[#d4af37]/40 shadow-xl transition-all text-right group">
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-8 h-8 text-[#d4af37]/30 group-hover:text-[#d4af37]/70 transition-colors" />
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-6">
                      "{item.reviewText}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20">
                      {item.templateUsed}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white font-serif">{item.coupleNames}</h4>
                      <p className="text-[11px] text-gray-400">{item.city} • {item.weddingDate}</p>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
