import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Send, 
  MapPin, 
  CalendarCheck, 
  RefreshCw, 
  Leaf, 
  Smartphone,
  CheckCircle2,
  Volume2
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#d4af37]" />,
      title: 'تجربة سينمائية 3D تفاعلية',
      description: 'مظروف ملكي فاخر ينفتح بلمسة إصبع مع ختم شمعي أحمر مذهب ومؤثرات كونفيتي احتفالية ساحرة تبهر ضيوفك من اللحظة الأولى.'
    },
    {
      icon: <Send className="w-6 h-6 text-pink-400" />,
      title: 'تأكيد الحضور عبر إنستغرام وواتساب',
      description: 'وداعاً للاتصالات الطويلة والمربكة؛ يضغط الضيف على زر تأكيد الحضور لتصلك رسالة منظمة باسمه وموافقته على الحضور فوراً.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      title: 'ملاحة دقيقة بنقرة واحدة',
      description: 'ربط مباشر وسلس مع خرائط Google Maps يتيح لضيوفك الانتقال مباشرة عبر GPS إلى بوابة القاعة دون أي تشتت أو ضياع.'
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-emerald-400" />,
      title: 'حفظ الموعد في تقويم الهاتف',
      description: 'زر سريع يضيف ليلة العمر إلى تقويم Apple Calendar أو Google Calendar مع تنبيه تذكيري قبل موعد الحفل.'
    },
    {
      icon: <Volume2 className="w-6 h-6 text-amber-300" />,
      title: 'معزوفة موسيقية هادئة مرافقة',
      description: 'خلفية صوتية ساحرة من آلات العود والبيانو تضفي طابعاً شاعرياً فخماً مع تحكم سهل للضيف بالتشغيل أو كتم الصوت.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-400" />,
      title: 'تعديل فوري غير محدود',
      description: 'في حال طرأ أي تغيير في الوقت أو القاعة، يمكن تحديث البيانات فوراً للجميع بدون أي تكاليف إعادة طباعة أو تأخير.'
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      title: 'صديقة للبيئة واقتصادية بنسبة 80%',
      description: 'توفير آلاف الريالات المهدرة على طباعة الكروت الورقية التي تُهمل، وحماية بيئتنا مع تقديم بديل تقني فائق الرقي.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-yellow-400" />,
      title: 'متوافقة 100% مع جميع الهواتف',
      description: 'تعمل بسلاسة فائقة وسرعة تحميل خاطفة على كافة أنواع أجهزة الآيفون والأندرويد دون الحاجة لأي تطبيق.'
    }
  ];

  return (
    <section className="py-20 bg-[#090c12] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>المعيار الجديد لحفلات الزفاف الراقية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            لماذا تختار الدعوة الرقمية الفاخرة من دعوتك؟
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            نجمع بين هيبة وتقاليد الفخامة الملكية وأحدث ابتكارات التفاعل الرقمي لنقدم لضيوفكم انطباعاً أولياً مبهراً يليق بفرحتكم.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#121622] to-[#0d1017] border border-white/10 hover:border-[#d4af37]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/5 text-right flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#d4af37]/40 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-[#f5e7a9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#d4af37]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ميزة قياسية مدمجة</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
