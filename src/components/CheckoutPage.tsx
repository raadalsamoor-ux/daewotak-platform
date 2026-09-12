import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  Sparkles, 
  ArrowLeft, 
  Check, 
  AlertCircle, 
  User, 
  Phone, 
  Mail,
  ChevronRight,
  Receipt
} from 'lucide-react';
import { Order } from '../types';
import { api } from '../services/api';

interface CheckoutPageProps {
  orderId: string;
  onBackToStudio: () => void;
  onPaymentSuccess: (orderId: string, paymentId?: string) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  orderId,
  onBackToStudio,
  onPaymentSuccess
}) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Customer contact details
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');

  useEffect(() => {
    async function loadOrder() {
      try {
        setIsLoading(true);
        setErrorMsg(null);
        const res = await api.getOrder(orderId);
        setOrder(res.order);
        if (res.order.customerName) setCustomerName(res.order.customerName);
        if (res.order.customerPhone) setCustomerPhone(res.order.customerPhone);
        if (res.order.customerEmail) setCustomerEmail(res.order.customerEmail);

        if (res.isPaid) {
          onPaymentSuccess(res.order.id);
        }
      } catch (err: any) {
        setErrorMsg(err.message || 'فشل تحميل بيانات الطلب');
      } finally {
        setIsLoading(false);
      }
    }
    if (orderId) {
      loadOrder();
    }
  }, [orderId]);

  const handlePayNow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!order) return;

    try {
      setIsProcessing(true);
      setErrorMsg(null);

      const checkoutRes = await api.checkoutOrder(order.id, {
        customerName,
        customerPhone,
        customerEmail
      });

      if (checkoutRes.alreadyPaid) {
        onPaymentSuccess(order.id);
        return;
      }

      if (checkoutRes.checkoutUrl) {
        // Navigate to payment gateway checkout
        window.location.href = checkoutRes.checkoutUrl;
      } else {
        throw new Error('لم يتم استلام رابط الدفع من المزود');
      }
    } catch (err: any) {
      console.error('[Checkout error]:', err);
      setErrorMsg(err.message || 'حدث خطأ أثناء بدء عملية الدفع');
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 text-center px-4">
        <div className="w-12 h-12 border-3 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin" />
        <p className="text-gray-300 text-sm font-medium">جاري تجهيز بيانات الطلب والدفع الآمن...</p>
      </div>
    );
  }

  if (errorMsg && !order) {
    return (
      <div className="max-w-xl mx-auto my-16 p-8 rounded-3xl bg-[#121622] border border-red-500/30 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto" />
        <h3 className="text-xl font-bold text-white">تعذر إيجاد الطلب</h3>
        <p className="text-gray-300 text-sm">{errorMsg}</p>
        <button
          onClick={onBackToStudio}
          className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
        >
          العودة لاستوديو التخصيص
        </button>
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="py-12 sm:py-20 bg-[#080a0f] relative min-h-[85vh] text-right">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#d4af37]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8 text-xs text-gray-400">
          <button
            onClick={onBackToStudio}
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            <span>العودة لتعديل بيانات الدعوة</span>
          </button>
          <div className="flex items-center gap-2">
            <span>رقم الطلب:</span>
            <strong className="text-white font-mono">{order.id}</strong>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Customer Info & Payment Trigger (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#10141e] border border-[#d4af37]/25 shadow-xl space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>بوابة الدفع الإلكتروني المعتمدة • الأردن</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  إتمام الطلب وتفعيل الدعوة
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm">
                  أدخل بيانات التواصل لاستلام إشعار التفعيل، ثم اختر وسيلة الدفع لتأكيد الطلب.
                </p>
              </div>

              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handlePayNow} className="space-y-5">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-[#d4af37]" />
                    <span>بيانات صاحب الطلب:</span>
                  </h3>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1.5 font-medium">
                      الاسم الكامل (أو اسم العريس/العروس):
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="مثال: سعود عبدالله الشمري"
                        className="w-full bg-[#161c2b] border border-white/10 focus:border-[#d4af37] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1.5 font-medium">
                        رقم الهاتف / واتساب:
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="079XXXXXXXX أو 962XXXXXXXXX"
                          className="w-full bg-[#161c2b] border border-white/10 focus:border-[#d4af37] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-300 mb-1.5 font-medium">
                        البريد الإلكتروني (اختياري للإيصال):
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="example@mail.com"
                          className="w-full bg-[#161c2b] border border-white/10 focus:border-[#d4af37] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods Info */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#d4af37]" />
                    <span>طرق الدفع المتاحة:</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-xl bg-[#161c2b] border border-white/10 text-center">
                      <span className="text-xs font-bold text-white block">💳 بطاقة بنكية</span>
                      <span className="text-[10px] text-gray-400">Visa / Master</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#161c2b] border border-[#d4af37]/40 bg-[#d4af37]/5 text-center">
                      <span className="text-xs font-bold text-[#f5e7a9] block">⚡ كليك (CliQ)</span>
                      <span className="text-[10px] text-amber-300/80">فوري ومجاني</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#161c2b] border border-white/10 text-center">
                      <span className="text-xs font-bold text-white block"> Apple Pay</span>
                      <span className="text-[10px] text-gray-400">بنقرة واحدة</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#161c2b] border border-white/10 text-center">
                      <span className="text-xs font-bold text-white block">🔒 SSL آمن</span>
                      <span className="text-[10px] text-gray-400">مشفر بالكامل</span>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#0b0e14] font-black text-base shadow-xl shadow-[#d4af37]/30 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>جاري التحويل لبوابة الدفع الآمنة...</span>
                      </div>
                    ) : (
                      <>
                        <Lock className="w-5 h-5" />
                        <span>إتمام الدفع الآمن الآن ({order.amount} {order.currency})</span>
                        <ArrowLeft className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-400 mt-3">
                    بالنقر على إتمام الدفع، سيتم توجيهكم إلى بوابة الدفع الآمنة لإدخال تفاصيل الدفع بأمان.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Left Column: Order Breakdown & Package Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121622] border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-[#d4af37]" />
                  <span>ملخص الفاتورة والحساب</span>
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                  حساب معتمد
                </span>
              </div>

              {/* Package Details */}
              <div className="space-y-3">
                <div className="text-xs text-gray-400">الباقة المختارة:</div>
                <div className="p-4 rounded-2xl bg-[#171e2e] border border-[#d4af37]/30">
                  <h3 className="font-bold text-base text-[#f5e7a9] font-serif">
                    {order.packageSnapshot?.name || 'الباقة الملكية'}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    {order.packageSnapshot?.description}
                  </p>
                  
                  {order.packageSnapshot?.features && (
                    <ul className="mt-3 pt-3 border-t border-white/10 space-y-1.5 text-xs text-gray-300">
                      {order.packageSnapshot.features.slice(0, 4).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Strict Server-Calculated Price Breakdown */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>سعر الباقة الأساسي:</span>
                  <span className="font-semibold text-white">{order.subtotal.toFixed(2)} {order.currency}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>الخصم المطبق:</span>
                  <span className="text-emerald-400 font-semibold">-{order.discount.toFixed(2)} {order.currency}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>الضريبة المضافة:</span>
                  <span className="text-gray-400">{order.tax.toFixed(2)} {order.currency}</span>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">المبلغ الإجمالي النهائي:</span>
                  <span className="text-2xl font-black text-[#f5e7a9] font-serif">
                    {order.amount.toFixed(2)} {order.currency}
                  </span>
                </div>
              </div>

              {/* Delivery Guarantee Notice */}
              <div className="p-4 rounded-2xl bg-[#0a0d13] border border-white/5 space-y-2 text-[11px] text-gray-300">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>التسليم الفوري المؤتمت:</span>
                </div>
                <p className="leading-relaxed">
                  بمجرد نجاح عملية الدفع، يتم تفعيل الدعوة فورا وتوليد رابط URL غير قابل للتخمين مع باركود QR عالي الدقة للطباعة أو الإرسال عبر الواتساب.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
