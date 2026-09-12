import React from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  Clock, 
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';
import { packagesList } from '../data/packagesData';
import { TiltCard } from './TiltCard';

interface PackagesSectionProps {
  instagramUrl?: string;
  onSelectPackage?: (packageId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ 
  onSelectPackage 
}) => {
  return (
    <section id="packages-section" className="py-20 bg-[#07090e] relative border-b border-[#d4af37]/15">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d4af37]/5 blur-[180px] pointer-events-none rounded-full" />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>باقات واضحة ومحددة بالدينار الأردني (JOD)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            باقات وأسعار دعوات الزفاف الملكية
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            اختر الباقة الأنسب لمناسبتكم، وابدأ في تخصيص بيانات الحفل، ثم استلم رابط دعوتك التفاعلي مع رمز QR عالي الدقة فور الدفع.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesList.map((pkg, index) => {
            const isRoyal = pkg.popular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className={`h-full flex flex-col justify-between rounded-3xl p-8 relative transition-all duration-300 ${
                    isRoyal 
                      ? 'bg-gradient-to-b from-[#181e2b] via-[#10141e] to-[#0a0d13] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/20 scale-105 z-10' 
                      : 'bg-gradient-to-b from-[#121622] to-[#0b0e14] border border-white/10 hover:border-white/20'
                  }`}>
                    
                    {/* Popular ribbon for Teatro Royal */}
                    {isRoyal && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-xs tracking-wider shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                          <Sparkles className="w-3.5 h-3.5 fill-current" />
                          <span>الأكثر طلباً • تجربة تياترو السينمائية</span>
                        </span>
                      </div>
                    )}

                    {/* Header info */}
                    <div className="text-right space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-2 min-h-[36px] leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="py-4 border-y border-white/10 flex items-baseline justify-end gap-2">
                        {pkg.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {pkg.originalPrice} JOD
                          </span>
                        )}
                        <span className="text-4xl sm:text-5xl font-extrabold font-serif text-white">
                          {pkg.price}
                        </span>
                        <span className="text-sm text-[#d4af37] font-medium">
                          {pkg.period}
                        </span>
                      </div>

                      {/* Delivery badge */}
                      <div className="flex items-center justify-end gap-2 text-xs text-gray-300">
                        <Clock className="w-4 h-4 text-[#d4af37]" />
                        <span>{pkg.deliveryTime}</span>
                      </div>

                      {/* Features checklist */}
                      <div className="pt-4 space-y-3">
                        <p className="text-xs font-semibold text-gray-200">المزايا المشمولة:</p>
                        {pkg.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isRoyal ? 'text-[#d4af37]' : 'text-emerald-400'}`} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order CTA */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <button
                        onClick={() => {
                          if (onSelectPackage) {
                            onSelectPackage(pkg.id);
                          }
                        }}
                        className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
                          isRoyal
                            ? 'bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#0b0e14] hover:shadow-xl hover:shadow-[#d4af37]/30 hover:scale-[1.02]'
                            : 'bg-white/10 hover:bg-white/15 text-white hover:border-[#d4af37]/50 border border-white/10'
                        }`}
                      >
                        <span>{pkg.ctaText}</span>
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Security & Guarantee Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-[#121622]/60 border border-[#d4af37]/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-right"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">دفع إلكتروني آمن 100% مع تفعيل فوري</p>
              <p className="text-xs text-gray-400 mt-0.5">يتم التحقق آلياً من نجاح الدفع وتوليد رابط الدعوة ورمز الـ QR Code لحظياً بدون أي انتظار.</p>
            </div>
          </div>
          <div className="text-xs text-[#d4af37] font-semibold whitespace-nowrap bg-[#d4af37]/10 px-4 py-2 rounded-lg border border-[#d4af37]/30">
            ضمان الجودة وخدمة الدعم
          </div>
        </motion.div>

      </div>
    </section>
  );
};
