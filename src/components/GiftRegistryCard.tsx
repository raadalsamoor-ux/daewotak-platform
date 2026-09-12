import React, { useState } from 'react';
import { Gift, Copy, Check, Landmark, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { WeddingData } from '../types';

interface GiftRegistryCardProps {
  weddingData: WeddingData;
  className?: string;
}

export const GiftRegistryCard: React.FC<GiftRegistryCardProps> = ({
  weddingData,
  className = ''
}) => {
  const [copiedIban, setCopiedIban] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  const bankInfo = weddingData.bankInfo || {
    bankName: 'مصرف الراجحي (Al Rajhi Bank)',
    accountHolder: 'سعود بن عبدالعزيز',
    iban: 'SA4480000412608010123456',
    accountNumber: '412608010123456',
    note: 'مشاركتكم وحضوركم هي أغلى وأجمل الهدايا، ولمن رغب بمشاركتنا فرحتنا بهدية نقدية'
  };

  const handleCopyIban = () => {
    navigator.clipboard.writeText(bankInfo.iban);
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 3000);
  };

  const handleCopyAllBankDetails = () => {
    const text = `بيانات التهنئة والهدية لحفل زفاف ${weddingData.groomName} و ${weddingData.brideName}:\n` +
      `• البنك: ${bankInfo.bankName}\n` +
      `• اسم المستفيد: ${bankInfo.accountHolder}\n` +
      `• رقم الآيبان: ${bankInfo.iban}\n` +
      (bankInfo.accountNumber ? `• رقم الحساب: ${bankInfo.accountNumber}\n` : '');
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 3000);
  };

  return (
    <section className={`w-full py-8 ${className}`}>
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171e2c] border border-[#d4af37]/40 text-[#f5e7a9] text-xs font-tajawal mb-2 shadow-sm">
          <Gift size={13} className="text-[#d4af37]" />
          <span>مشاركة الفرحة والهدايا</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-amiri font-bold text-gold-gradient">
          التهنئة والهدايا النقدية
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-cairo mt-1">
          {bankInfo.note || 'حضوركم ودعواتكم هي أثمن الهدايا، ولمن يرغب بمشاركتنا بهدية نقدية'}
        </p>
      </div>

      {/* Luxury Bank IBAN Card */}
      <div className="max-w-xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#141926] via-[#0f131d] to-[#090b10] border border-[#d4af37]/45 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
          
          {/* Subtle Golden Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Card Top: Bank Name & Emblem */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0b0e14] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-inner">
                <Landmark size={22} />
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#d4af37] font-semibold uppercase tracking-wider block font-tajawal">
                  الحساب البنكي المعتمد
                </span>
                <h4 className="text-lg font-bold text-white font-serif">
                  {bankInfo.bankName}
                </h4>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
              <ShieldCheck size={13} />
              <span>حساب موثق</span>
            </div>
          </div>

          {/* Account Details Box */}
          <div className="space-y-4 text-right">
            
            {/* Beneficiary Name */}
            <div className="bg-[#090c13] p-4 rounded-2xl border border-white/5 space-y-1">
              <span className="text-[11px] text-gray-400 font-tajawal block">
                اسم المستفيد (صاحب الحساب):
              </span>
              <p className="text-base font-bold text-[#f5e7a9] font-amiri">
                {bankInfo.accountHolder}
              </p>
            </div>

            {/* IBAN Number with Prominent Copy Button */}
            <div className="bg-[#090c13] p-4 rounded-2xl border border-[#d4af37]/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-tajawal">
                  رقم الحساب الدولي (IBAN):
                </span>
                <span className="text-[10px] text-[#d4af37] font-semibold">
                  تحويل بنكي فوري
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 bg-[#121622] p-3 rounded-xl border border-white/10" dir="ltr">
                <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider select-all break-all">
                  {bankInfo.iban}
                </span>

                <button
                  type="button"
                  onClick={handleCopyIban}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] text-xs font-bold flex items-center gap-1 shrink-0 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  title="نسخ الآيبان"
                >
                  {copiedIban ? (
                    <>
                      <Check size={13} />
                      <span>تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>نسخ</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Account Number (if available) */}
            {bankInfo.accountNumber && (
              <div className="flex items-center justify-between text-xs text-gray-400 px-2">
                <span>رقم الحساب الفرعي:</span>
                <span className="font-mono text-gray-300 select-all" dir="ltr">
                  {bankInfo.accountNumber}
                </span>
              </div>
            )}

          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleCopyAllBankDetails}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-[#f5e7a9] border border-[#d4af37]/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {copiedAll ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedAll ? 'تم نسخ كامل البيانات البنكية' : 'نسخ جميع بيانات التحويل'}</span>
            </button>

            <div className="flex items-center gap-1.5 text-xs text-[#d4af37]">
              <Heart size={13} className="fill-[#d4af37]" />
              <span>جزاكم الله خيراً وبارك فيكم</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
