import React from 'react';
import { Sparkles, X, Check, BookOpen, Quote } from 'lucide-react';

export interface WeddingPoem {
  id: string;
  title: string;
  author: string;
  category: 'royal' | 'traditional' | 'romantic' | 'welcome';
  verses: string[];
}

export const weddingPoemsList: WeddingPoem[] = [
  {
    id: 'poem-1',
    title: 'الليلة تزهو الرياض بالتهاني',
    author: 'شعر ملكي فاخر',
    category: 'royal',
    verses: [
      'الليلة تزهو الرياضُ بنورِ مَن حَضَرُوا',
      'وتَفْرَحُ الأرضُ إِذْ يَزْدانُ بِكُمُ القَمَرُ',
      'يا مرحباً بطيبِ وُجُوهٍ زَانَهَا كَرَمٌ',
      'بِطِيبِ مَجْدٍ إِلى العَلياءِ يَفْتَخِرُ'
    ]
  },
  {
    id: 'poem-2',
    title: 'تلاقت قلوبٌ في محبةِ خالقٍ',
    author: 'أبيات نبطية خليجية',
    category: 'welcome',
    verses: [
      'يامرحبا ترحيبةٍ تسبق الشوق',
      'للي حضر في ليلة العز والجاه',
      'فرحة عمر تزهى على كل مخلوق',
      'عسى السعادة دربهم وين ما تاه'
    ]
  },
  {
    id: 'poem-3',
    title: 'أهلاً بكم عدد ما هلّ ماطر',
    author: 'ترحيب الضيوف',
    category: 'traditional',
    verses: [
      'مرحباً بالكرامِ في محفلِ الجود',
      'حضوركم بهجةٌ وتاجٌ على الرؤوس',
      'تجمّعت أسرتانا على المودة والعهود',
      'في ليلةٍ تتباهى ببهائها العروس'
    ]
  },
  {
    id: 'poem-4',
    title: 'بارك الله لكما وجمع بينكما في خير',
    author: 'دعاء وتبريك كلاسيكي',
    category: 'royal',
    verses: [
      'تباركت ليلةٌ بالوصلِ مؤتلفةٌ',
      'بين الكريمينِ مِن بيتِ العُلا صَحِبَا',
      'يا جامعَ الشملِ باركْ خَطوَ رِحْلَتِهِمْ',
      'واجعلْ حَيَاتَهُمَا حُبّاً ومُنْقَلَبَا'
    ]
  },
  {
    id: 'poem-5',
    title: 'نورٌ توهّج في سماء وفاقنا',
    author: 'رومانسي معاصر',
    category: 'romantic',
    verses: [
      'أضاءت شموع الفرح في ليلنا السعيد',
      'وتعانقت الأرواح في عهدٍ جديد',
      'حضوركم الغالي هو العيد الأكيد',
      'يا بهجة الأيام واليوم الفريد'
    ]
  }
];

interface PoetryLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPoem: (text: string) => void;
}

export const PoetryLibraryModal: React.FC<PoetryLibraryModalProps> = ({
  isOpen,
  onClose,
  onSelectPoem
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#0e121a] border-2 border-[#d4af37]/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] flex flex-col text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#d4af37] font-tajawal mb-1">
            <BookOpen size={14} />
            <span>مكتبة الأدب وأشعار الزفاف الملكية</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-amiri text-white">
            اختر قصيدة أو عبارة ترحيب لبطاقتكم
          </h3>
          <p className="text-xs text-gray-400 font-cairo mt-1">
            انقر على أي قصيدة لتطبيقها مباشرةً على رسالة الدعوة والترحيب في بطاقتكم.
          </p>
        </div>

        {/* Poems List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {weddingPoemsList.map((poem) => (
            <div
              key={poem.id}
              className="p-4 sm:p-5 rounded-2xl bg-[#141824] border border-[#d4af37]/25 hover:border-[#d4af37] transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#f5e7a9] font-amiri">
                    {poem.title}
                  </h4>
                  <span className="text-[10px] text-gray-400 font-tajawal">
                    {poem.author}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onSelectPoem(poem.verses.join('\n'));
                    onClose();
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] text-xs font-bold flex items-center gap-1.5 shadow-md group-hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <Check size={13} />
                  <span>تطبيق على الدعوة</span>
                </button>
              </div>

              <div className="bg-[#090b10] p-3 rounded-xl border border-white/5 text-center font-amiri text-sm sm:text-base text-[#e8e4dc] leading-loose space-y-1">
                {poem.verses.map((verse, vIdx) => (
                  <p key={vIdx}>{verse}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
