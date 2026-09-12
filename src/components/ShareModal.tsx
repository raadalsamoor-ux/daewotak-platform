import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle } from 'lucide-react';
import { WeddingData } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  weddingData: WeddingData;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, weddingData }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `يتشرف ${weddingData.groomFamily} و ${weddingData.brideFamily} بدعوتكم لحضور حفل زفاف ${weddingData.groomName} و ${weddingData.brideName}.\nرابط بطاقة الدعوة الرقمية:\n${currentUrl}`;

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const shareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-sm bg-[#0f131d] border border-[#d4af37]/40 rounded-3xl p-6 shadow-2xl text-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 left-4 text-[#a0a8bb] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="w-12 h-12 rounded-full bg-[#182030] border border-[#d4af37]/40 flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
          <Share2 size={22} />
        </div>

        <h3 className="font-amiri text-xl font-bold text-[#f5e7a9] mb-1">
          مشاركة بطاقة الدعوة
        </h3>
        <p className="text-xs text-[#a0a8bb] font-cairo mb-6">
          شارك رابط الدعوة الفاخرة مع الأهل والأصدقاء
        </p>

        <div className="space-y-3">
          <button
            type="button"
            onClick={shareWhatsApp}
            className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-tajawal font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
          >
            <MessageCircle size={18} />
            <span>مشاركة عبر واتساب (WhatsApp)</span>
          </button>

          <button
            type="button"
            onClick={copyLink}
            className="w-full py-3 px-4 rounded-xl bg-[#1a2233] hover:bg-[#232d44] border border-[#d4af37]/30 text-[#f5e7a9] font-tajawal font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-400">تم نسخ الرابط بنجاح</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>نسخ رابط الدعوة</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
