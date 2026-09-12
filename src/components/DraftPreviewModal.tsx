import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  ArrowLeft, 
  Check, 
  Smartphone,
  Eye
} from 'lucide-react';
import { WeddingData } from '../types';
import { packagesList } from '../data/packagesData';

interface DraftPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  weddingData: WeddingData;
  draftId?: string;
  templateId?: string;
  onProceedToCheckout: (packageId: string) => void;
  isSubmitting?: boolean;
}

export const DraftPreviewModal: React.FC<DraftPreviewModalProps> = ({
  isOpen,
  onClose,
  weddingData,
  draftId,
  templateId,
  onProceedToCheckout,
  isSubmitting = false
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium');

  if (!isOpen) return null;

  const currentPkg = packagesList.find(p => p.id === selectedPackageId) || packagesList[1];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0e121a] border border-[#d4af37]/30 rounded-3xl shadow-2xl overflow-hidden text-right my-8"
        >
          {/* Top DRAFT Watermark Banner */}
          <div className="bg-gradient-to-r from-[#581825] via-[#782233] to-[#45121c] border-b border-[#d4af37]/40 px-6 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#f7e7a8]" />
                <span className="text-xs sm:text-sm font-bold tracking-wide text-[#f5e7a9]">
                  وضع المعاينة والمسودة (DRAFT) — الرابط الدائم ورمز QR يتم تفعيلهما بعد إتمام الدفع
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
            {/* Header info */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>مراجعة بيانات الدعوة واختيار الباقة</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                معاينة مسودة دعوة: {weddingData.groomName || 'العريس'} & {weddingData.brideName || 'العروس'}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm">
                راجع ملخص تفاصيل دعوتك، ثم اختر الباقة المناسبة للمتابعة إلى صفحة الدفع الآمن.
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#141924] border border-white/10 text-xs">
              <div>
                <span className="text-gray-400 block mb-1">العروسان:</span>
                <span className="text-white font-bold text-sm">
                  {weddingData.groomName} ({weddingData.groomFamily}) و {weddingData.brideName} ({weddingData.brideFamily})
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">الموعد والمكان:</span>
                <span className="text-white font-bold text-sm">
                  {weddingData.weddingDayArabic} {weddingData.weddingDateGregorian} — {weddingData.venueName} ({weddingData.city})
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">حالة المسودة:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                  <Lock className="w-3 h-3" />
                  <span>مسودة غير مفعلة</span>
                </span>
              </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold font-serif text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>اختر باقة التفعيل المناسبة:</span>
                </h3>
                <span className="text-xs text-[#d4af37]">الأسعار بالدينار الأردني (JOD)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {packagesList.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  const isPopular = pkg.popular;

                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#1c2435] to-[#121824] border-2 border-[#d4af37] shadow-lg shadow-[#d4af37]/20 scale-[1.02]'
                          : 'bg-[#121622] border border-white/10 hover:border-white/20'
                      }`}
                    >
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="px-3 py-0.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-[10px] tracking-wide">
                            الأكثر طلباً
                          </span>
                        </div>
                      )}

                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-[#d4af37] bg-[#d4af37] text-black' : 'border-gray-500'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-sm font-bold text-white font-serif">{pkg.name}</span>
                        </div>

                        <div className="py-2 border-y border-white/5 flex items-baseline justify-end gap-1.5">
                          {pkg.originalPrice && (
                            <span className="text-xs text-gray-500 line-through">{pkg.originalPrice} JOD</span>
                          )}
                          <span className="text-2xl font-black text-white font-serif">{pkg.price}</span>
                          <span className="text-xs text-[#d4af37]">JOD</span>
                        </div>

                        <ul className="space-y-1.5 text-[11px] text-gray-300">
                          {pkg.features.slice(0, 3).map((feat, i) => (
                            <li key={i} className="flex items-center gap-1.5 line-clamp-1">
                              <Check className="w-3 h-3 text-[#d4af37] shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price calculation and Proceed Button */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#171f2e] via-[#121622] to-[#171f2e] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-right space-y-1">
                <div className="text-xs text-gray-400">الباقة المختارة: <strong className="text-white">{currentPkg.name}</strong></div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-400">المبلغ الإجمالي المستحق:</span>
                  <span className="text-3xl font-black text-[#f5e7a9] font-serif">{currentPkg.price} JOD</span>
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>توليد الرابط العام ورمز الـ QR عالي الدقة فور نجاح الدفع</span>
                </div>
              </div>

              <button
                disabled={isSubmitting}
                onClick={() => onProceedToCheckout(selectedPackageId)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#0b0e14] font-bold text-base shadow-xl shadow-[#d4af37]/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>جاري إنشاء طلب الشراء...</span>
                ) : (
                  <>
                    <span>متابعة إلى صفحة الدفع (Checkout)</span>
                    <ArrowLeft className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
