import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  Check, 
  QrCode, 
  Eye, 
  ArrowLeft, 
  RefreshCw, 
  AlertCircle,
  Share2,
  ExternalLink,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';
import { Order, InvitationRecord } from '../types';
import { api } from '../services/api';

interface PaymentSuccessPageProps {
  orderId: string;
  paymentId?: string;
  onOpenLiveDemo: () => void;
  onGoToMyOrders: () => void;
  onRetryPayment?: () => void;
  onOpenPublicInvitation?: (publicId: string) => void;
}

export const PaymentSuccessPage: React.FC<PaymentSuccessPageProps> = ({
  orderId,
  paymentId,
  onOpenLiveDemo,
  onGoToMyOrders,
  onRetryPayment,
  onOpenPublicInvitation
}) => {
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [order, setOrder] = useState<Order | null>(null);
  const [invitation, setInvitation] = useState<InvitationRecord | null>(null);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [pollCount, setPollCount] = useState<number>(0);

  // Trigger celebration confetti
  const launchCelebration = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f5e7a9', '#581825', '#ffffff']
      });
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    let timer: any = null;

    async function verify() {
      try {
        const res = await api.verifyPayment(orderId, paymentId);
        setOrder(res.order);

        if (res.isPaid && res.invitation) {
          setIsPaid(true);
          setInvitation(res.invitation);
          setIsVerifying(false);
          launchCelebration();
        } else if (res.order.status === 'FAILED' || res.order.paymentStatus === 'FAILED') {
          setIsPaid(false);
          setIsVerifying(false);
          setErrorMsg('تعذر إتمام عملية الدفع أو تم رفض المعاملة من قِبل البنك.');
        } else {
          // Still processing; poll up to 5 times every 2.5 seconds
          if (pollCount < 5) {
            timer = setTimeout(() => {
              setPollCount(prev => prev + 1);
            }, 2500);
          } else {
            setIsVerifying(false);
            setErrorMsg('ما زالت المعاملة قيد المعالجة من قبل مزود الدفع.');
          }
        }
      } catch (err: any) {
        console.error('[Payment verification error]:', err);
        setErrorMsg(err.message || 'فشل التحقق من حالة الدفع');
        setIsVerifying(false);
      }
    }

    verify();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [orderId, paymentId, pollCount]);

  const publicUrl = invitation?.publicId 
    ? `${window.location.origin}/i/${invitation.publicId}`
    : '';

  const handleCopyLink = () => {
    if (!publicUrl) return;
    navigator.clipboard.writeText(publicUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleDownloadQr = () => {
    if (!invitation?.qrCodeData) return;
    const link = document.createElement('a');
    link.href = invitation.qrCodeData;
    link.download = `da3wtak-qr-${invitation.publicId || 'invitation'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isVerifying) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center space-y-6 text-center px-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin" />
          <Sparkles className="w-6 h-6 text-[#d4af37] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="space-y-2 max-w-md">
          <h2 className="text-xl font-bold font-serif text-white">
            جاري التحقق الفوري من عملية الدفع...
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed">
            نتحقق الآن من نجاح السداد مع بوابة الدفع البنكية الأردنية وتوليد بيانات دعوتكم الرسمية.
          </p>
        </div>
      </div>
    );
  }

  // Payment Failed State
  if (!isPaid) {
    return (
      <div className="max-w-xl mx-auto my-16 p-8 rounded-3xl bg-[#121622] border border-red-500/30 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold font-serif text-white">
            لم تكتمل عملية الدفع
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {errorMsg || 'يرجى مراجعة تفاصيل البطاقة البنكية أو المحاولة مرة أخرى.'}
          </p>
        </div>

        {order && (
          <div className="p-4 rounded-2xl bg-[#0a0d13] text-xs text-gray-400 space-y-1 text-right">
            <div>رقم الطلب: <strong className="text-white font-mono">{order.id}</strong></div>
            <div>المبلغ: <strong className="text-white">{order.amount} {order.currency}</strong></div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {onRetryPayment && (
            <button
              onClick={onRetryPayment}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-sm hover:brightness-110 transition-all cursor-pointer"
            >
              إعادة محاولة الدفع
            </button>
          )}
          <button
            onClick={onGoToMyOrders}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all cursor-pointer"
          >
            الانتقال لطلباتي
          </button>
        </div>
      </div>
    );
  }

  // Payment Succeeded State (Official Commercial Delivery)
  return (
    <div className="py-12 sm:py-20 bg-[#080a0f] relative min-h-[85vh] text-right">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Top Success Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl bg-gradient-to-b from-[#182230] via-[#101722] to-[#0a0e16] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/20 text-center space-y-4"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-[#f5e7a9] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>تم التحقق من الدفع بنجاح • الدعوة مفعلة الآن</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              مبارك! دعوتكم الإلكترونية الفاخرة أصبحت جاهزة
            </h1>
            <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
              تم سداد قيمة الطلب وتوليد الرابط العام المشفر ورمز الاستجابة السريعة (QR Code) لدعوتكم.
            </p>
          </div>

          {order && (
            <div className="inline-flex items-center gap-6 px-6 py-2 rounded-2xl bg-[#0b0e14]/70 border border-white/10 text-xs">
              <div>رقم الطلب: <strong className="text-white font-mono">{order.id}</strong></div>
              <div>المبلغ المدفوع: <strong className="text-emerald-400">{order.amount} {order.currency}</strong></div>
              <div>الحالة: <strong className="text-[#f5e7a9]">مفعلة (ACTIVE)</strong></div>
            </div>
          )}
        </motion.div>

        {/* Commercial Deliverables: Unguessable URL & QR Code */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Public Link Card (8 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#121622] border border-white/10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#d4af37]" />
                  <span>رابط الدعوة المباشر للمشاركة</span>
                </h2>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 font-mono">
                  صالح لمدة عام
                </span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                هذا هو الرابط الرسمي والنهائي لدعوتكم. يمكنكم مشاركته مباشرة مع الأهل والضيوف عبر الواتساب ووسائل التواصل الاجتماعي.
              </p>

              {/* Public URL Box */}
              <div className="p-3.5 rounded-2xl bg-[#090b10] border border-white/10 flex items-center justify-between gap-3 text-left dir-ltr">
                <span className="text-xs text-gray-300 font-mono truncate select-all">
                  {publicUrl}
                </span>
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 rounded-xl bg-[#d4af37] text-black font-bold text-xs shrink-0 hover:brightness-110 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'تم النسخ!' : 'نسخ الرابط'}</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  if (invitation?.publicId && onOpenPublicInvitation) {
                    onOpenPublicInvitation(invitation.publicId);
                  } else {
                    onOpenLiveDemo();
                  }
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:brightness-110 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>عرض الدعوة الحية</span>
              </button>

              <button
                onClick={onGoToMyOrders}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>طلباتي ودعواتي</span>
              </button>
            </div>
          </div>

          {/* QR Code Deliverable Card (5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#121622] border border-white/10 space-y-4 text-center flex flex-col items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-bold font-serif text-white flex items-center justify-center gap-2">
                <QrCode className="w-4 h-4 text-[#d4af37]" />
                <span>رمز الاستجابة السريعة (QR)</span>
              </h2>
              <p className="text-[11px] text-gray-400">
                جاهز للطباعة على بطاقات الاستقبال وكروت الطاولات.
              </p>
            </div>

            {invitation?.qrCodeData ? (
              <div className="p-4 bg-white rounded-2xl shadow-xl shadow-black/40">
                <img
                  src={invitation.qrCodeData}
                  alt="QR Code الدعوة"
                  className="w-44 h-44 object-contain"
                />
              </div>
            ) : (
              <div className="w-44 h-44 bg-white/5 rounded-2xl flex items-center justify-center text-xs text-gray-400">
                جاري توليد QR...
              </div>
            )}

            <button
              onClick={handleDownloadQr}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              تحميل صورة الـ QR Code (PNG)
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
