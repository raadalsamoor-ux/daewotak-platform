import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertCircle, 
  Lock, 
  Sparkles, 
  Share2, 
  QrCode, 
  X,
  Copy,
  Check
} from 'lucide-react';
import { WeddingData, InvitationRecord } from '../types';
import { api } from '../services/api';
import { InvitationLiveDemo } from './InvitationLiveDemo';

interface PublicInvitationViewProps {
  publicId: string;
  onGoHome: () => void;
}

export const PublicInvitationView: React.FC<PublicInvitationViewProps> = ({
  publicId,
  onGoHome
}) => {
  const [invitation, setInvitation] = useState<InvitationRecord | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    async function loadPublicInvitation() {
      try {
        setIsLoading(true);
        setErrorMsg(null);
        const data = await api.getPublicInvitation(publicId);
        setInvitation(data);
      } catch (err: any) {
        console.error('[PublicInvitationView] error:', err);
        setErrorMsg(err.message || 'الدعوة غير موجودة أو لم يتم تفعيلها بعد.');
      } finally {
        setIsLoading(false);
      }
    }

    if (publicId) {
      loadPublicInvitation();
    }
  }, [publicId]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#07090e] flex flex-col items-center justify-center space-y-4 text-center px-4">
        <div className="w-14 h-14 border-3 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin" />
        <p className="text-gray-300 text-sm font-medium">جاري تحميل الدعوة الملكية الفاخرة...</p>
      </div>
    );
  }

  if (errorMsg || !invitation) {
    return (
      <div className="fixed inset-0 z-50 bg-[#07090e] flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#121622] border border-red-500/30 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold font-serif text-white">
              هذه الدعوة غير مفعلة
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {errorMsg || 'لم يتم تفعيل هذه الدعوة حتى الآن أو لم تكتمل عملية السداد.'}
            </p>
          </div>

          <button
            onClick={onGoHome}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-xs hover:brightness-110 transition-all cursor-pointer"
          >
            الانتقال إلى منصة دعوتك
          </button>
        </div>
      </div>
    );
  }

  const weddingData: WeddingData = invitation.weddingData;

  return (
    <div className="relative min-h-screen bg-[#07090e]">
      {/* Floating Share & QR Action Bar */}
      <div className="fixed top-4 left-4 z-40 flex items-center gap-2">
        <button
          onClick={handleCopy}
          className="p-2.5 rounded-full bg-[#121620]/90 border border-[#d4af37]/40 text-[#f5e7a9] backdrop-blur-md hover:brightness-120 shadow-lg transition-all flex items-center gap-1.5 text-xs px-3.5 cursor-pointer"
          title="نسخ رابط الدعوة"
        >
          {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-[#d4af37]" />}
          <span className="hidden sm:inline">{copiedLink ? 'تم النسخ!' : 'مشاركة'}</span>
        </button>

        {invitation.qrCodeData && (
          <button
            onClick={() => setShowQrModal(true)}
            className="p-2.5 rounded-full bg-[#121620]/90 border border-[#d4af37]/40 text-[#f5e7a9] backdrop-blur-md hover:brightness-120 shadow-lg transition-all cursor-pointer"
            title="عرض رمز QR"
          >
            <QrCode className="w-4 h-4 text-[#d4af37]" />
          </button>
        )}
      </div>

      {/* Main Full Experience: Live Interactive Invitation */}
      <InvitationLiveDemo
        weddingData={weddingData}
        onBackToSite={onGoHome}
        onOpenStudio={onGoHome}
        onOpenShareModal={handleCopy}
      />

      {/* QR Code Modal for Guest Scanning */}
      <AnimatePresence>
        {showQrModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#121622] border border-[#d4af37]/40 max-w-sm w-full text-center space-y-4"
            >
              <button
                onClick={() => setShowQrModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-white font-serif">
                رمز استجابة الدعوة (QR Code)
              </h3>
              <p className="text-xs text-gray-400">
                امسح الرمز بكاميرا الهاتف لفتح بطاقة الدعوة التفاعلية مباشرة.
              </p>

              {invitation.qrCodeData && (
                <div className="p-4 bg-white rounded-2xl mx-auto inline-block shadow-xl">
                  <img
                    src={invitation.qrCodeData}
                    alt="QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
