import React, { useState } from 'react';
import { Camera, Image, ZoomIn, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { WeddingData } from '../types';

interface MemoriesGalleryProps {
  weddingData: WeddingData;
  className?: string;
}

export const MemoriesGallery: React.FC<MemoriesGalleryProps> = ({
  weddingData,
  className = ''
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const photos = weddingData.photos || [
    {
      id: 'photo-1',
      url: '/velvet-red.jpg',
      caption: 'القاعة الملكية الكبرى والديكورات المذهبة لليلة العمر'
    },
    {
      id: 'photo-2',
      url: '/wedding_invitation_velvet.jpg',
      caption: 'أرقى تفاصيل الضيافة العربية والبخور والورود الملكية'
    }
  ];

  return (
    <section className={`w-full py-10 px-4 ${className}`}>
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171e2c] border border-[#d4af37]/40 text-[#f5e7a9] text-xs font-tajawal mb-2 shadow-sm">
          <Camera size={13} className="text-[#d4af37]" />
          <span>ألبوم الذكريات ولحظات السعادة</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-amiri font-bold text-gold-gradient">
          لقطات من ليلة العمر
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-cairo mt-1">
          جانب من تحضيرات القاعة وأجواء الفرحة التي نتطلع لمشاركتها معكم
        </p>
      </div>

      {/* Photos Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photos.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActivePhotoIndex(index)}
            className="group relative rounded-3xl overflow-hidden bg-[#0e121a] border-2 border-[#d4af37]/35 shadow-2xl cursor-pointer aspect-[4/3]"
          >
            {/* Image */}
            <img
              src={item.url}
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Corner Calligraphy */}
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#d4af37]/70" />
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#d4af37]/70" />

            {/* Caption & Zoom Indicator */}
            <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3 text-right">
              <div>
                <span className="text-[10px] text-[#d4af37] font-semibold uppercase tracking-wider block font-tajawal">
                  ذكريات ليلة العمر
                </span>
                <p className="text-sm font-bold text-white font-amiri mt-0.5">
                  {item.caption}
                </p>
              </div>

              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                <ZoomIn size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>

          <div className="max-w-4xl max-h-[80vh] relative flex items-center justify-center">
            <img
              src={photos[activePhotoIndex].url}
              alt={photos[activePhotoIndex].caption}
              className="max-h-[75vh] w-auto rounded-2xl border-2 border-[#d4af37]/60 shadow-2xl object-contain"
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-base font-bold text-[#f5e7a9] font-amiri">
              {photos[activePhotoIndex].caption}
            </p>
            <p className="text-xs text-gray-400 font-tajawal mt-1">
              صورة {activePhotoIndex + 1} من {photos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
