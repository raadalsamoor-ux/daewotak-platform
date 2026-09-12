import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  Sliders, 
  Eye, 
  CreditCard, 
  HelpCircle, 
  Menu, 
  X,
  Users,
  ShoppingBag
} from 'lucide-react';
import { SiteNavTab } from '../types';

interface SiteNavbarProps {
  currentTab: SiteNavTab;
  onSelectTab: (tab: SiteNavTab) => void;
  onOpenLiveDemo: () => void;
  instagramUrl: string;
}

export const SiteNavbar: React.FC<SiteNavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenLiveDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Royal Golden Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems: { id: SiteNavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'الرئيسية', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'templates', label: 'معرض التصاميم', icon: <Layers className="w-4 h-4" /> },
    { id: 'studio', label: 'استوديو التخصيص', icon: <Sliders className="w-4 h-4" /> },
    { id: 'guest-manager', label: 'إدارة الضيوف والـ RSVP', icon: <Users className="w-4 h-4" /> },
    { id: 'packages', label: 'الباقات والأسعار', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'my-orders', label: 'طلباتي ودعواتي', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'faq', label: 'الأسئلة الشائعة', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const handleTabClick = (tab: SiteNavTab) => {
    if (tab === 'live-demo') {
      onOpenLiveDemo();
    } else {
      onSelectTab(tab);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090b10]/90 border-b border-[#d4af37]/20 transition-all duration-300"
    >
      {/* Golden Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d4af37] via-[#f5e7a9] to-[#b38815] origin-right z-50 shadow-[0_0_10px_rgba(212,175,55,0.7)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 group text-right focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#aa8010] p-[1.5px] shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0d1117] rounded-[10px] flex items-center justify-center">
              <span className="text-xl font-bold font-serif text-[#d4af37]">د</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-serif tracking-wide bg-gradient-to-r from-[#ffffff] via-[#f7e7a8] to-[#d4af37] bg-clip-text text-transparent">
                دَعْـوَتُـكْ
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30">
                LUXURY
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-sans">دعوات الزفاف الرقمية التفاعلية</p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121620]/80 p-1.5 rounded-full border border-white/5 shadow-inner">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8010] text-[#0b0e14] font-bold shadow-md shadow-[#d4af37]/25' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleTabClick('my-orders')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300 ${
              currentTab === 'my-orders'
                ? 'bg-[#d4af37] text-[#0b0e14] border-[#d4af37]'
                : 'bg-[#121620] text-[#f5e7a9] border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#1a2233]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>طلباتي</span>
          </button>

          <button
            onClick={() => handleTabClick('studio')}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#581825] to-[#782233] hover:from-[#782233] hover:to-[#581825] text-white border border-[#d4af37]/40 shadow-sm transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f7e7a8]" />
            <span>صمّم دعوتك</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
          aria-label="القائمة الرئيسية"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#0e121a]/95 border-b border-[#d4af37]/25 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2"
          >
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 font-bold' 
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>}
                </button>
              );
            })}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleTabClick('studio')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#581825] to-[#782233] text-white border border-[#d4af37]/40"
              >
                <Sparkles className="w-4 h-4 text-[#f7e7a8]" />
                <span>ابدأ تصميم دعوتك الآن</span>
              </button>
              <button
                onClick={onOpenLiveDemo}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-white/5 text-[#f5e7a9] border border-[#d4af37]/30"
              >
                <Eye className="w-4 h-4 text-[#d4af37]" />
                <span>معاينة نموذج تياترو 3D</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
