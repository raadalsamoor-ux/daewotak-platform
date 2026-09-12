import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Eye, 
  Sliders, 
  Check, 
  Instagram, 
  Star,
  Layers
} from 'lucide-react';
import { templatesList } from '../data/templatesData';
import { InvitationTemplate } from '../types';
import { TiltCard } from './TiltCard';

interface TemplatesGalleryProps {
  onSelectTemplateForStudio: (template: InvitationTemplate) => void;
  onOpenLiveDemoWithTemplate?: (templateId: string) => void;
  instagramUrl: string;
}

export const TemplatesGallery: React.FC<TemplatesGalleryProps> = ({
  onSelectTemplateForStudio,
  onOpenLiveDemoWithTemplate,
  instagramUrl
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'جميع التصاميم' },
    { id: 'royal-dark', label: 'ملكي داكن (تياترو وكحلي)' },
    { id: 'rose-gold', label: 'وردي ذهبي (رومانسي)' },
    { id: 'emerald-luxury', label: 'زمردي وأرابيسك' },
    { id: 'classic-gold', label: 'كلاسيكي عاجي' },
    { id: 'modern-minimal', label: 'عصري مينيمال' }
  ];

  const filteredTemplates = selectedCategory === 'all'
    ? templatesList
    : templatesList.filter((t) => t.category === selectedCategory);

  return (
    <section id="templates-section" className="py-16 sm:py-24 bg-[#0a0d13] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>كتالوج التصاميم الحصرية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            معرض تصاميم دعوات الزفاف الفاخرة
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            مجموعة منتقاة بعناية فائقة مستوحاة من كبرى دور الأزياء والمسارح الملكية، تجمع بين روعة الرسوم ثلاثية الأبعاد والتفاعل الذكي مع ضيوفك.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold shadow-lg shadow-[#d4af37]/20 scale-105'
                  : 'bg-[#141822] text-gray-300 hover:text-white hover:bg-[#1c2230] border border-white/5'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: "easeOut" }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#131722] to-[#0d1017] border border-white/10 hover:border-[#d4af37]/50 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 p-6 relative overflow-hidden group">
                    
                    {/* Top Badge if any */}
                    {template.badge && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 rounded-full bg-[#d4af37] text-[#0b0e14] font-bold text-[10px] tracking-wider shadow-md">
                          {template.badge}
                        </span>
                      </div>
                    )}

                    {/* Card visual sample simulation */}
                    <div className={`relative h-48 rounded-xl bg-gradient-to-b ${template.bgGradient} border border-white/10 p-5 flex flex-col items-center justify-center text-center overflow-hidden mb-5 group-hover:scale-[1.02] transition-transform duration-300 shadow-inner`}>
                      
                      {/* Subtle decorative frame */}
                      <div className="absolute inset-2 border border-dashed border-white/15 rounded-lg pointer-events-none" />

                      {/* Monogram circle */}
                      <div 
                        className="w-14 h-14 rounded-full border-2 flex items-center justify-center mb-2 shadow-lg"
                        style={{ borderColor: template.accentColor, backgroundColor: '#090b10' }}
                      >
                        <span className="font-serif font-bold text-lg" style={{ color: template.accentColor }}>
                          {template.sampleGroom.slice(0, 1)} & {template.sampleBride.slice(0, 1)}
                        </span>
                      </div>

                      <p className="font-serif font-bold text-base text-white tracking-wide">
                        {template.sampleGroom} & {template.sampleBride}
                      </p>
                      <p className="text-[11px] text-gray-400 mt-1 line-clamp-1">
                        {template.sampleVenue}
                      </p>

                      <div className="absolute bottom-2 right-3 text-[10px] text-gray-400 font-mono">
                        3D PREVIEW
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 flex-1 text-right">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] px-2.5 py-0.5 rounded bg-white/5 text-[#d4af37] border border-[#d4af37]/20">
                          {template.categoryLabel}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-xs font-mono text-gray-300">5.0</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#f5e7a9] transition-colors">
                        {template.title}
                      </h3>

                      <p className="text-xs text-gray-400 leading-relaxed min-h-[36px]">
                        {template.tagline}
                      </p>

                      {/* Features list */}
                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        {template.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                            <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
                      <button
                        onClick={() => onSelectTemplateForStudio(template)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#0b0e14] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-md shadow-[#d4af37]/20 transition-all cursor-pointer"
                      >
                        <Sliders className="w-4 h-4 text-[#0b0e14]" />
                        <span>استخدم هذا التصميم وابدأ التخصيص</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onOpenLiveDemoWithTemplate) {
                            onOpenLiveDemoWithTemplate(template.id);
                          }
                        }}
                        className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#f5e7a9] text-xs font-semibold border border-white/10 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>معاينة حية تفاعلية</span>
                      </button>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
