import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  QrCode, 
  ArrowLeft,
  Eye,
  CreditCard,
  Lock,
  Sparkles
} from 'lucide-react';
import { Order, InvitationRecord } from '../types';
import { api } from '../services/api';

interface MyOrdersDashboardProps {
  onContinuePayment: (orderId: string) => void;
  onOpenPublicInvitation: (publicId: string) => void;
  onStartNewInvitation: () => void;
}

export const MyOrdersDashboard: React.FC<MyOrdersDashboardProps> = ({
  onContinuePayment,
  onOpenPublicInvitation,
  onStartNewInvitation
}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Load orders stored in localStorage IDs + fetch from backend
  useEffect(() => {
    async function fetchOrders() {
      try {
        setIsLoading(true);
        // Get list of known order IDs saved in localStorage for this customer
        let savedIds: string[] = [];
        try {
          savedIds = JSON.parse(localStorage.getItem('da3wtak_order_ids') || '[]');
        } catch {
          savedIds = [];
        }

        if (savedIds.length === 0) {
          setIsLoading(false);
          return;
        }

        const loadedOrders: Order[] = [];
        for (const id of savedIds) {
          try {
            const res = await api.getOrder(id);
            if (res.order) {
              loadedOrders.push(res.order);
            }
          } catch {
            // Ignore single order fetch errors
          }
        }

        setOrders(loadedOrders);
      } catch (err: any) {
        console.error('Fetch orders error:', err);
        setErrorMsg('تعذر تحميل سجل الطلبات');
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrders();
  }, []);

  const handleManualSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setIsLoading(true);
      setErrorMsg(null);
      const res = await api.getOrder(searchQuery.trim());
      if (res.order) {
        setOrders((prev) => {
          const exists = prev.some(o => o.id === res.order.id);
          return exists ? prev : [res.order, ...prev];
        });
        // Save to localStorage
        try {
          const savedIds: string[] = JSON.parse(localStorage.getItem('da3wtak_order_ids') || '[]');
          if (!savedIds.includes(res.order.id)) {
            savedIds.unshift(res.order.id);
            localStorage.setItem('da3wtak_order_ids', JSON.stringify(savedIds));
          }
        } catch {}
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'لم يتم العثور على طلب بهذا الرقم');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#080a0f] relative min-h-[85vh] text-right">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>لوحة متابعة الطلبات والدعوات الإلكترونية</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              طلباتي ودعواتي المفعلة
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm">
              استعرض جميع طلباتك السابقة، روابط الدعوات المفعلة، أو استكمل عمليات السداد المعلقة.
            </p>
          </div>

          <button
            onClick={onStartNewInvitation}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>تصميم دعوة جديدة</span>
          </button>
        </div>

        {/* Search by Order ID */}
        <div className="p-6 rounded-2xl bg-[#121622] border border-white/10">
          <form onSubmit={handleManualSearch} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث برقم الطلب (مثال: ord_abc123...)"
                className="w-full bg-[#171e2e] border border-white/10 focus:border-[#d4af37] focus:outline-none rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>بحث عن الطلب</span>
            </button>
          </form>

          {errorMsg && (
            <p className="text-xs text-red-400 mt-2">{errorMsg}</p>
          )}
        </div>

        {/* Orders List */}
        {isLoading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-10 h-10 border-3 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin mx-auto" />
            <p className="text-xs text-gray-400">جاري تحميل الطلبات...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="py-16 text-center space-y-4 p-8 rounded-3xl bg-[#10141e] border border-white/10">
            <ShoppingBag className="w-12 h-12 text-gray-500 mx-auto" />
            <h3 className="text-lg font-bold text-white font-serif">لا توجد طلبات مسجلة في هذا المتصفح حالياً</h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              إذا كان لديك رقم طلب سابق، يمكنك كتابته في خانة البحث أعلاه للعثور على دعوتك وتفاصيلها فوراً.
            </p>
            <button
              onClick={onStartNewInvitation}
              className="px-6 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-bold hover:brightness-110 transition-colors cursor-pointer"
            >
              ابدأ الآن بتصميم أول دعوة
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const isPaid = order.status === 'PAID';
              const publicUrl = order.invitation?.publicId 
                ? `${window.location.origin}/i/${order.invitation.publicId}`
                : null;

              return (
                <div
                  key={order.id}
                  className={`p-6 rounded-3xl border transition-all ${
                    isPaid
                      ? 'bg-[#101520] border-[#d4af37]/30 shadow-lg shadow-[#d4af37]/5'
                      : 'bg-[#10141e] border-white/10'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    
                    {/* Order Metadata */}
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs text-gray-400">#{order.id}</span>
                        {isPaid ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>مفعلة ومدفوعة (ACTIVE)</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                            <Clock className="w-3.5 h-3.5" />
                            <span>بانتظار الدفع (PENDING)</span>
                          </span>
                        )}
                        <span className="text-xs text-gray-400">
                          {new Date(order.createdAt).toLocaleDateString('ar-JO', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold font-serif text-white">
                          {order.invitation?.weddingData?.groomName ? (
                            <>دعوة زفاف: {order.invitation.weddingData.groomName} & {order.invitation.weddingData.brideName}</>
                          ) : (
                            <>طلب باقة: {order.packageSnapshot?.name || 'دعوة إلكترونية'}</>
                          )}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          الباقة: <strong className="text-gray-300">{order.packageSnapshot?.name}</strong> • المبلغ: <strong className="text-[#f5e7a9]">{order.amount} {order.currency}</strong>
                        </p>
                      </div>

                      {/* Deliverable URL row if paid */}
                      {isPaid && publicUrl && (
                        <div className="pt-2">
                          <div className="inline-flex items-center gap-2 p-2 px-3 rounded-xl bg-[#080b11] border border-white/10 text-xs text-gray-300 dir-ltr">
                            <span className="font-mono truncate max-w-xs">{publicUrl}</span>
                            <button
                              onClick={() => handleCopy(publicUrl, order.id)}
                              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold flex items-center gap-1 transition-colors"
                            >
                              {copiedId === order.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedId === order.id ? 'تم!' : 'نسخ'}</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                      {isPaid && order.invitation?.publicId ? (
                        <>
                          <button
                            onClick={() => onOpenPublicInvitation(order.invitation!.publicId!)}
                            className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs hover:brightness-110 flex items-center gap-2 transition-all cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
                            <span>عرض الدعوة الحية</span>
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => onContinuePayment(order.id)}
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold text-xs hover:brightness-110 flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-[#d4af37]/20"
                        >
                          <CreditCard className="w-4 h-4" />
                          <span>استكمال الدفع والتفعيل ({order.amount} {order.currency})</span>
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
