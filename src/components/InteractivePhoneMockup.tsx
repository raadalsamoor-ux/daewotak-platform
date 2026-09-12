import React, { useState, useRef } from 'react';
import { Upload, RefreshCw, Check } from 'lucide-react';

interface InteractivePhoneMockupProps {
  onOpenLiveDemo?: () => void;
  className?: string;
  defaultImageUrl?: string;
}

export const InteractivePhoneMockup: React.FC<InteractivePhoneMockupProps> = ({
  className = '',
  defaultImageUrl = '/velvet-red.jpg',
}) => {
  const [activeImage, setActiveImage] = useState<string>(defaultImageUrl);
  const [isCustomUploaded, setIsCustomUploaded] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setActiveImage(event.target.result as string);
          setIsCustomUploaded(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setActiveImage(defaultImageUrl);
    setIsCustomUploaded(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      
      {/* Background Soft Drop Shadow & Ambient Burgundy/Gold Halo */}
      <div className="absolute inset-0 max-w-[340px] h-[640px] mx-auto rounded-[54px] bg-gradient-to-b from-[#581825]/40 via-[#d4af37]/20 to-transparent blur-[50px] -z-10 pointer-events-none transform translate-y-6" />

      {/* Quick Upload Control Bar for Client Mockup Preview */}
      <div className="mb-3 flex items-center gap-2 z-20">
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*" 
          onChange={handleFileUpload} 
          className="hidden" 
          id="phone-image-uploader"
        />
        <label
          htmlFor="phone-image-uploader"
          className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#1a0e14] hover:bg-[#28131e] text-[#f7e7a8] border border-[#d4af37]/50 shadow-md hover:shadow-[#d4af37]/20 transition-all active:scale-95"
        >
          {isCustomUploaded ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>تم تفعيل تصميم العميل (تغيير الصورة)</span>
            </>
          ) : (
            <>
              <Upload className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>تجربة تصميم جديد للعميل ✦</span>
            </>
          )}
        </label>

        {isCustomUploaded && (
          <button
            onClick={handleResetImage}
            title="إعادة للتصميم المخملي الافتراضي"
            className="p-2 rounded-xl text-xs bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Modern iPhone Titanium Frame */}
      <div className="relative w-[310px] sm:w-[340px] h-[640px] sm:h-[660px] rounded-[50px] p-[10px] bg-gradient-to-b from-[#3a3a40] via-[#1c1d22] to-[#121316] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.14),0_0_35px_rgba(88,24,37,0.4)] border border-neutral-700/60">
        
        {/* Outer Titanium Edge Reflections & Side Buttons */}
        <div className="absolute -left-[3px] top-28 w-[3px] h-9 bg-neutral-600 rounded-l-sm" />
        <div className="absolute -left-[3px] top-40 w-[3px] h-12 bg-neutral-600 rounded-l-sm" />
        <div className="absolute -left-[3px] top-56 w-[3px] h-12 bg-neutral-600 rounded-l-sm" />
        <div className="absolute -right-[3px] top-36 w-[3px] h-16 bg-neutral-600 rounded-r-sm" />

        {/* Inner Phone Screen Container */}
        <div className="relative w-full h-full rounded-[40px] bg-[#0d0407] overflow-hidden border border-black flex flex-col justify-between">
          
          {/* Top Status Bar & Dynamic Island */}
          <div className="absolute top-0 inset-x-0 z-30 px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-semibold text-white/90 bg-gradient-to-b from-black/70 to-transparent">
            <span className="font-mono tracking-tight text-[11px]">9:41</span>
            
            {/* Dynamic Island */}
            <div className="w-24 h-5 rounded-full bg-black border border-white/15 flex items-center justify-between px-2.5 shadow-inner">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="text-[8px] text-[#f5e7a9] font-mono tracking-wider">LIVE</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#1c1d22] border border-white/20" />
            </div>

            <div className="flex items-center gap-1 text-[10px]">
              <span className="font-mono text-[9px]">5G</span>
              <div className="w-4 h-2 rounded-[2px] border border-white/80 p-[1px] flex items-center">
                <div className="w-full h-full bg-white rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Full High-Resolution Luxury Cover Design (Uploaded or Default) */}
          <div className="relative w-full h-full">
            <img
              src={activeImage}
              alt="تصميم دعوة الزفاف المخملية الفاخرة للعميل"
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            
            {/* Soft Ambient Inner Vignette & Golden Ring Border */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[38px] pointer-events-none" />
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="absolute bottom-1 inset-x-0 py-1.5 flex items-center justify-center z-30 pointer-events-none">
            <div className="w-28 h-1 rounded-full bg-white/40 shadow" />
          </div>

        </div>

      </div>

    </div>
  );
};
