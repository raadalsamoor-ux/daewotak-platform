import React, { useState } from 'react';
import { X, Save, Sparkles, RefreshCw } from 'lucide-react';
import { WeddingData } from '../types';
import { initialWeddingData } from '../data/weddingData';

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: WeddingData;
  onSave: (newData: WeddingData) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
}) => {
  const [formData, setFormData] = useState<WeddingData>(data);

  if (!isOpen) return null;

  const handleChange = (field: keyof WeddingData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFormData(initialWeddingData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0e121b] border border-[#d4af37]/50 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/20 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#d4af37]" />
            <h3 className="font-amiri text-xl sm:text-2xl font-bold text-gold-gradient">
              تخصيص بيانات الدعوة
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#a0a8bb] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Occasion and Opening style */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">نوع المناسبة</label>
              <select
                value={formData.eventType || 'wedding'}
                onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value as any }))}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] outline-none"
              >
                <option value="wedding">💍 حفل زواج وزفاف</option>
                <option value="engagement">📜 عقد قران وملكة</option>
                <option value="henna">🌿 ليلة حناء</option>
                <option value="reception">🍼 استقبال مواليد</option>
                <option value="graduation">🎓 حفل تخرج</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">نمط الفتح 3D (هلاهيل)</label>
              <select
                value={formData.openingStyle || 'gate'}
                onChange={(e) => setFormData(prev => ({ ...prev, openingStyle: e.target.value as any }))}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] outline-none"
              >
                <option value="gate">🚪 باب الفرح (أبواب قصر 3D)</option>
                <option value="envelope">✉️ المظروف الملكي والختم</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">اسم العريس</label>
              <input
                type="text"
                value={formData.groomName}
                onChange={(e) => handleChange('groomName', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">اسم العروس</label>
              <input
                type="text"
                value={formData.brideName}
                onChange={(e) => handleChange('brideName', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">عائلة العريس</label>
              <input
                type="text"
                value={formData.groomFamily}
                onChange={(e) => handleChange('groomFamily', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">عائلة العروس</label>
              <input
                type="text"
                value={formData.brideFamily}
                onChange={(e) => handleChange('brideFamily', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">تاريخ الحفل (ميلادي)</label>
              <input
                type="date"
                value={formData.weddingDateGregorian}
                onChange={(e) => handleChange('weddingDateGregorian', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">اليوم بالعربية</label>
              <input
                type="text"
                value={formData.weddingDayArabic}
                onChange={(e) => handleChange('weddingDayArabic', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">اسم الفندق / القاعة</label>
              <input
                type="text"
                value={formData.venueName}
                onChange={(e) => handleChange('venueName', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">اسم الصالة / الجناح</label>
              <input
                type="text"
                value={formData.hallName}
                onChange={(e) => handleChange('hallName', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">رابط حساب إنستغرام للتأكيد</label>
            <input
              type="url"
              value={formData.instagramUrl}
              onChange={(e) => handleChange('instagramUrl', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none text-left"
              dir="ltr"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-tajawal text-[#cbd2e1] mb-1">معرف إنستغرام (@)</label>
            <input
              type="text"
              value={formData.instagramHandle}
              onChange={(e) => handleChange('instagramHandle', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#141a27] border border-[#d4af37]/30 text-white text-sm focus:border-[#d4af37] outline-none text-left"
              dir="ltr"
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#d4af37]/20">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-[#141a27] hover:bg-[#1a2233] text-[#a0a8bb] hover:text-white text-xs font-tajawal flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw size={14} />
              <span>استعادة الافتراضي</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-transparent hover:bg-white/5 text-[#cbd2e1] text-xs font-tajawal transition-colors cursor-pointer"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-[#090b10] font-tajawal font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md hover:brightness-110 cursor-pointer"
              >
                <Save size={15} />
                <span>حفظ التعديلات</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
