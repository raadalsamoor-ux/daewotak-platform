import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  UserPlus, 
  Download, 
  Search, 
  Phone, 
  Share2, 
  MessageSquare, 
  Utensils, 
  AlertTriangle, 
  Sparkles, 
  ShieldCheck, 
  Crown, 
  Eye, 
  Check, 
  Trash2, 
  Edit3, 
  Copy, 
  RefreshCw, 
  Sliders,
  Send,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { GuestRecord, MealPreference, WeddingData } from '../types';
import { initialGuestsList } from '../data/initialGuests';

interface HostGuestDashboardProps {
  weddingData: WeddingData;
  onOpenLiveDemo: () => void;
  onOpenStudio?: () => void;
}

export const HostGuestDashboard: React.FC<HostGuestDashboardProps> = ({
  weddingData,
  onOpenLiveDemo,
  onOpenStudio,
}) => {
  // Persistence via localStorage
  const [guests, setGuests] = useState<GuestRecord[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_guests_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return initialGuestsList;
  });

  const saveGuests = (newList: GuestRecord[]) => {
    setGuests(newList);
    try {
      localStorage.setItem('wedding_guests_data', JSON.stringify(newList));
    } catch {
      // ignore
    }
  };

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'confirmed' | 'declined' | 'pending' | 'checked_in'>('all');
  const [tableFilter, setTableFilter] = useState<string>('all');
  const [selectedGuestForWhatsApp, setSelectedGuestForWhatsApp] = useState<GuestRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingGuest, setEditingGuest] = useState<GuestRecord | null>(null);
  const [copiedGuestId, setCopiedGuestId] = useState<string | null>(null);

  // New guest form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formTable, setFormTable] = useState('طاولة كبار الشخصيات (VIP-1)');
  const [formSeat, setFormSeat] = useState('مقعد 01');
  const [formCompanions, setFormCompanions] = useState(2);
  const [formMeal, setFormMeal] = useState<MealPreference>('lamb');
  const [formAllergies, setFormAllergies] = useState('');
  const [formNotes, setFormNotes] = useState('');

  // Tables list extracted from current guests
  const allTables = useMemo(() => {
    const tableSet = new Set<string>();
    guests.forEach(g => {
      if (g.table) tableSet.add(g.table);
    });
    return Array.from(tableSet);
  }, [guests]);

  // Statistics calculation
  const stats = useMemo(() => {
    const totalGuests = guests.length;
    let totalSeatsExpected = 0;
    let confirmedCount = 0;
    let confirmedSeats = 0;
    let declinedCount = 0;
    let pendingCount = 0;
    let checkedInCount = 0;
    let checkedInSeats = 0;

    const meals: Record<MealPreference, number> = {
      lamb: 0,
      chicken: 0,
      vegetarian: 0,
      gluten_free: 0,
    };

    guests.forEach((g) => {
      totalSeatsExpected += g.companions || 1;
      if (g.status === 'confirmed') {
        confirmedCount++;
        confirmedSeats += g.companions || 1;
        if (g.mealPreference) {
          meals[g.mealPreference] = (meals[g.mealPreference] || 0) + (g.companions || 1);
        } else {
          meals.lamb += (g.companions || 1);
        }
      } else if (g.status === 'declined') {
        declinedCount++;
      } else {
        pendingCount++;
      }

      if (g.isCheckedIn) {
        checkedInCount++;
        checkedInSeats += g.companions || 1;
      }
    });

    const confirmationRate = totalGuests > 0 ? Math.round((confirmedCount / totalGuests) * 100) : 0;

    return {
      totalGuests,
      totalSeatsExpected,
      confirmedCount,
      confirmedSeats,
      declinedCount,
      pendingCount,
      checkedInCount,
      checkedInSeats,
      confirmationRate,
      meals,
    };
  }, [guests]);

  // Filtered guests
  const filteredGuests = useMemo(() => {
    return guests.filter((g) => {
      const matchesSearch = 
        g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (g.phone && g.phone.includes(searchQuery)) ||
        (g.table && g.table.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesStatus = true;
      if (statusFilter === 'confirmed') matchesStatus = g.status === 'confirmed';
      else if (statusFilter === 'declined') matchesStatus = g.status === 'declined';
      else if (statusFilter === 'pending') matchesStatus = g.status === 'pending';
      else if (statusFilter === 'checked_in') matchesStatus = Boolean(g.isCheckedIn);

      let matchesTable = true;
      if (tableFilter !== 'all') {
        matchesTable = g.table === tableFilter;
      }

      return matchesSearch && matchesStatus && matchesTable;
    });
  }, [guests, searchQuery, statusFilter, tableFilter]);

  // Generate Personalized Invitation Link for guest
  const getPersonalizedUrl = (guest: GuestRecord) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const params = new URLSearchParams({
      guest: guest.name,
      seat: guest.seat || 'VIP',
      table: guest.table || '',
      plus: String(guest.companions || 1),
    });
    return `${origin}/?${params.toString()}`;
  };

  // Copy personalized link
  const handleCopyLink = (guest: GuestRecord) => {
    const url = getPersonalizedUrl(guest);
    navigator.clipboard.writeText(url);
    setCopiedGuestId(guest.id);
    setTimeout(() => setCopiedGuestId(null), 2200);
  };

  // Toggle Check-in status
  const handleToggleCheckIn = (id: string) => {
    const updated = guests.map((g) => {
      if (g.id === id) {
        const isNowCheckedIn = !g.isCheckedIn;
        const now = new Date();
        const timeStr = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
        return {
          ...g,
          isCheckedIn: isNowCheckedIn,
          checkInTime: isNowCheckedIn ? timeStr : undefined,
        };
      }
      return g;
    });
    saveGuests(updated);
  };

  // Toggle RSVP Status
  const handleStatusChange = (id: string, newStatus: 'confirmed' | 'declined' | 'pending') => {
    const updated = guests.map(g => g.id === id ? { ...g, status: newStatus } : g);
    saveGuests(updated);
  };

  // Delete guest
  const handleDeleteGuest = (id: string) => {
    if (confirm('هل أنت متأكد من رغبتك في حذف هذا الضيف من القائمة؟')) {
      const updated = guests.filter(g => g.id !== id);
      saveGuests(updated);
    }
  };

  // Export to CSV with UTF-8 BOM
  const handleExportCSV = () => {
    const headers = ['الاسم الكريم', 'رقم الجوال', 'حالة الرد', 'عدد المقاعد والمرافقين', 'رقم الطاولة', 'المقعد', 'تفضيل وجبة العشاء', 'ملاحظات الحساسية', 'تسجيل الدخول في القاعة', 'وقت الدخول', 'ملاحظات خاصة'];
    const rows = guests.map(g => [
      `"${g.name}"`,
      `"${g.phone || ''}"`,
      `"${g.status === 'confirmed' ? 'مؤكد الحضور' : g.status === 'declined' ? 'معتذر' : 'بانتظار الرد'}"`,
      `"${g.companions || 1}"`,
      `"${g.table}"`,
      `"${g.seat || ''}"`,
      `"${g.mealPreference === 'lamb' ? 'وليمة لحم ضأن' : g.mealPreference === 'chicken' ? 'دجاج فاخر' : g.mealPreference === 'vegetarian' ? 'وجبة نباتية' : g.mealPreference === 'gluten_free' ? 'خالي من الجلوتين' : 'افتراضي'}"`,
      `"${g.allergiesNote || 'لا يوجد'}"`,
      `"${g.isCheckedIn ? 'نعم (حضر)' : 'لم يحضر بعد'}"`,
      `"${g.checkInTime || ''}"`,
      `"${g.notes || ''}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `كشف_ضيوف_زفاف_${weddingData.groomName}_و_${weddingData.brideName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Save guest from modal (add / edit)
  const handleSaveModalGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) return;

    if (editingGuest) {
      const updated = guests.map(g => {
        if (g.id === editingGuest.id) {
          return {
            ...g,
            name: formName,
            phone: formPhone,
            table: formTable,
            seat: formSeat,
            companions: formCompanions,
            mealPreference: formMeal,
            allergiesNote: formAllergies,
            notes: formNotes,
          };
        }
        return g;
      });
      saveGuests(updated);
      setEditingGuest(null);
    } else {
      const newGuest: GuestRecord = {
        id: `g-${Date.now()}`,
        name: formName,
        phone: formPhone,
        status: 'pending',
        companions: formCompanions,
        table: formTable,
        seat: formSeat,
        mealPreference: formMeal,
        allergiesNote: formAllergies,
        notes: formNotes,
        isCheckedIn: false,
        invitationSent: false,
      };
      saveGuests([newGuest, ...guests]);
    }

    // Reset Form
    setFormName('');
    setFormPhone('');
    setFormTable('طاولة كبار الشخصيات (VIP-1)');
    setFormSeat('مقعد 01');
    setFormCompanions(2);
    setFormMeal('lamb');
    setFormAllergies('');
    setFormNotes('');
    setIsAddModalOpen(false);
  };

  const openEditModal = (guest: GuestRecord) => {
    setEditingGuest(guest);
    setFormName(guest.name);
    setFormPhone(guest.phone || '');
    setFormTable(guest.table || 'طاولة كبار الشخصيات (VIP-1)');
    setFormSeat(guest.seat || 'مقعد 01');
    setFormCompanions(guest.companions || 1);
    setFormMeal(guest.mealPreference || 'lamb');
    setFormAllergies(guest.allergiesNote || '');
    setFormNotes(guest.notes || '');
    setIsAddModalOpen(true);
  };

  const handleResetToDemo = () => {
    if (confirm('هل ترغب في استعادة قائمة الضيوف التجريبية الافتراضية؟')) {
      saveGuests(initialGuestsList);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#d4af37]/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#d4af37]/35 text-[#f5e7a9] text-xs font-tajawal mb-2 shadow-sm">
            <Crown size={14} className="text-[#d4af37]" />
            <span>نظام إدارة الدعوات وتأكيد الحضور (RSVP)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-amiri font-bold text-gold-gradient">
            لوحة تحكم الضيوف وقائمة المدعوين
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 font-cairo mt-1.5 max-w-2xl">
            متابعة استجابات الضيوف في الوقت الفعلي، تنظيم الطاولات، حصر وجبات العشاء، وإرسال روابط الدعوات المخصصة عبر الواتساب بدقة واحترافية.
          </p>
        </div>

        {/* Global Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              setEditingGuest(null);
              setFormName('');
              setFormPhone('');
              setFormCompanions(2);
              setIsAddModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#0a0d13] font-tajawal font-bold text-xs shadow-md shadow-[#d4af37]/20 hover:scale-105 transition-all cursor-pointer"
          >
            <UserPlus size={15} />
            <span>إضافة ضيف جديد</span>
          </button>

          <button
            type="button"
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141926] hover:bg-[#1c2336] border border-[#d4af37]/30 text-[#f5e7a9] font-tajawal font-semibold text-xs shadow-sm hover:scale-105 transition-all cursor-pointer"
            title="تحميل كشف الحضور جاهز لمدير الصالة ومتعهد البوفيه"
          >
            <Download size={15} />
            <span>تصدير Excel / CSV</span>
          </button>

          <button
            type="button"
            onClick={onOpenLiveDemo}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 font-tajawal font-semibold text-xs shadow-sm hover:scale-105 transition-all cursor-pointer"
          >
            <Eye size={15} />
            <span>معاينة الدعوة الحية</span>
          </button>

          <button
            type="button"
            onClick={handleResetToDemo}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
            title="استعادة البيانات التجريبية"
          >
            <RefreshCw size={15} />
          </button>
        </div>
      </div>

      {/* Analytics KPI Metric Cards (digitalinvitation.me flagship layout) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 my-8">
        
        {/* Total Invited */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#131826] to-[#0d101a] border border-[#d4af37]/30 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span className="text-xs font-tajawal">إجمالي المدعوين</span>
            <Users size={16} className="text-[#d4af37]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-cairo text-white">{stats.totalGuests}</span>
            <span className="text-[11px] text-gray-400">ضيف</span>
          </div>
          <div className="mt-2 text-[11px] text-[#e6ca65]">
            متوقع {stats.totalSeatsExpected} مقعد (مع المرافقين)
          </div>
        </div>

        {/* Confirmed RSVPs */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#0f241a] to-[#08150f] border border-emerald-500/40 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-emerald-300 mb-2">
            <span className="text-xs font-tajawal font-bold">مؤكد الحضور</span>
            <CheckCircle2 size={16} className="text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-cairo text-emerald-200">{stats.confirmedCount}</span>
            <span className="text-[11px] text-emerald-400/80">({stats.confirmationRate}%)</span>
          </div>
          <div className="mt-2 text-[11px] text-emerald-300/80">
            {stats.confirmedSeats} مقعد محجوز في القاعة
          </div>
        </div>

        {/* Declined */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#241115] to-[#140a0c] border border-rose-500/40 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-rose-300 mb-2">
            <span className="text-xs font-tajawal">اعتذر عن الحضور</span>
            <XCircle size={16} className="text-rose-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-cairo text-rose-200">{stats.declinedCount}</span>
            <span className="text-[11px] text-rose-400/80">ضيف</span>
          </div>
          <div className="mt-2 text-[11px] text-rose-300/70">
            تم إخلاء مقاعدهم للقائمة
          </div>
        </div>

        {/* Pending */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#231e11] to-[#14110a] border border-amber-500/40 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between text-amber-300 mb-2">
            <span className="text-xs font-tajawal">بانتظار التأكيد</span>
            <Clock size={16} className="text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-cairo text-amber-200">{stats.pendingCount}</span>
            <span className="text-[11px] text-amber-400/80">ضيف</span>
          </div>
          <div className="mt-2 text-[11px] text-amber-300/80">
            يمكن تذكيرهم بنقرة واتساب
          </div>
        </div>

        {/* Checked In at Venue Door (Ushers tool) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#1b1c2e] to-[#0f101c] border border-indigo-500/40 shadow-lg relative overflow-hidden col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-indigo-300 mb-2">
            <span className="text-xs font-tajawal font-bold">تم الدخول بالقاعة</span>
            <ShieldCheck size={16} className="text-indigo-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-cairo text-indigo-200">{stats.checkedInCount}</span>
            <span className="text-[11px] text-indigo-400/80">({stats.checkedInSeats} مقعد)</span>
          </div>
          <div className="mt-2 text-[11px] text-indigo-300/80">
            تحقق مباشر عبر رمز QR
          </div>
        </div>

      </div>

      {/* Banquet Meals Distribution Strip (Special DigitalInvitation.me Feature) */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#0f131f] border border-[#d4af37]/25 shadow-md mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
            <Utensils size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold font-tajawal text-[#f5e7a9]">
              إحصائيات وجبات العشاء المعتمدة (Catering & Banquet Orders)
            </h3>
            <p className="text-[11px] text-gray-400 font-cairo">
              توزيع طلبات الوجبات المسجلة من تأكيدات الضيوف لمشاركتها مع متعهد الضيافة والشيف
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-xs font-tajawal">
          <div className="px-3 py-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
            <span className="text-gray-300">🥩 وليمة لحم ضأن:</span>
            <span className="font-bold text-[#f5e7a9]">{stats.meals.lamb}</span>
          </div>
          <div className="px-3 py-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
            <span className="text-gray-300">🍗 دجاج فاخر:</span>
            <span className="font-bold text-amber-200">{stats.meals.chicken}</span>
          </div>
          <div className="px-3 py-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
            <span className="text-gray-300">🥗 نباتي خاص:</span>
            <span className="font-bold text-emerald-300">{stats.meals.vegetarian}</span>
          </div>
          <div className="px-3 py-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-3">
            <span className="text-gray-300">🌾 خالي من الجلوتين:</span>
            <span className="font-bold text-sky-300">{stats.meals.gluten_free}</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#111520] border border-white/10 w-fit">
            <button
              type="button"
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tajawal transition-all cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-[#d4af37] text-[#090b10] font-bold shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              الكل ({stats.totalGuests})
            </button>

            <button
              type="button"
              onClick={() => setStatusFilter('confirmed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tajawal transition-all cursor-pointer ${
                statusFilter === 'confirmed'
                  ? 'bg-emerald-500 text-white font-bold shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              مؤكد ({stats.confirmedCount})
            </button>

            <button
              type="button"
              onClick={() => setStatusFilter('pending')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tajawal transition-all cursor-pointer ${
                statusFilter === 'pending'
                  ? 'bg-amber-500 text-[#090b10] font-bold shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              بانتظار الرد ({stats.pendingCount})
            </button>

            <button
              type="button"
              onClick={() => setStatusFilter('declined')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tajawal transition-all cursor-pointer ${
                statusFilter === 'declined'
                  ? 'bg-rose-500 text-white font-bold shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              معتذر ({stats.declinedCount})
            </button>

            <button
              type="button"
              onClick={() => setStatusFilter('checked_in')}
              className={`px-3 py-1.5 rounded-lg text-xs font-tajawal transition-all cursor-pointer ${
                statusFilter === 'checked_in'
                  ? 'bg-indigo-600 text-white font-bold shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              حضر الآن ({stats.checkedInCount})
            </button>
          </div>

          {/* Table filter dropdown & Search Input */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Table Filter */}
            <div className="relative">
              <select
                value={tableFilter}
                onChange={(e) => setTableFilter(e.target.value)}
                className="bg-[#111520] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-gray-200 focus:outline-none focus:border-[#d4af37] font-tajawal appearance-none pr-8 cursor-pointer"
              >
                <option value="all">جميع الطاولات والمجموعات</option>
                {allTables.map((tbl) => (
                  <option key={tbl} value={tbl}>{tbl}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Search */}
            <div className="relative min-w-[240px]">
              <input
                type="text"
                placeholder="بحث بالاسم، الجوال، أو الطاولة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111520] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37] font-tajawal pl-8"
              />
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

          </div>

        </div>
      </div>

      {/* Guest List Cards & Table */}
      <div className="rounded-2xl bg-[#0e121c] border border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-[#141926] text-[#f5e7a9] font-tajawal border-b border-white/10">
              <tr>
                <th className="py-3.5 px-4 font-bold">اسم الضيف الكريم</th>
                <th className="py-3.5 px-4 font-bold">الطاولة والمقعد</th>
                <th className="py-3.5 px-4 font-bold">حالة الحضور</th>
                <th className="py-3.5 px-4 font-bold">المقاعد</th>
                <th className="py-3.5 px-4 font-bold">الوجبة والحساسية</th>
                <th className="py-3.5 px-4 font-bold text-center">تسجيل الدخول بالقاعة</th>
                <th className="py-3.5 px-4 font-bold text-center">إجراءات سريعة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-cairo">
              {filteredGuests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    لا توجد نتائج تطابق معايير البحث الحالية
                  </td>
                </tr>
              ) : (
                filteredGuests.map((guest) => (
                  <tr 
                    key={guest.id} 
                    className={`hover:bg-white/[0.02] transition-colors ${
                      guest.isCheckedIn ? 'bg-indigo-950/15' : ''
                    }`}
                  >
                    {/* Guest Name & Notes */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <div>
                          <div className="font-semibold text-white text-sm">
                            {guest.name}
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-0.5">
                            {guest.phone && <span dir="ltr">{guest.phone}</span>}
                            {guest.notes && <span className="text-[#e6ca65]">({guest.notes})</span>}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Table & Seat */}
                    <td className="py-3.5 px-4 font-tajawal">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-gray-200">
                        <span>{guest.table}</span>
                        {guest.seat && <span className="text-[#f5e7a9]">({guest.seat})</span>}
                      </div>
                    </td>

                    {/* RSVP Status dropdown */}
                    <td className="py-3.5 px-4">
                      <select
                        value={guest.status}
                        onChange={(e) => handleStatusChange(guest.id, e.target.value as any)}
                        className={`text-[11px] font-tajawal font-bold rounded-lg px-2.5 py-1 border focus:outline-none cursor-pointer ${
                          guest.status === 'confirmed'
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/50'
                            : guest.status === 'declined'
                            ? 'bg-rose-950/60 text-rose-300 border-rose-500/50'
                            : 'bg-amber-950/60 text-amber-300 border-amber-500/50'
                        }`}
                      >
                        <option value="confirmed">✅ مؤكد الحضور</option>
                        <option value="pending">⏳ بانتظار الرد</option>
                        <option value="declined">❌ اعتذر</option>
                      </select>
                    </td>

                    {/* Companions Count */}
                    <td className="py-3.5 px-4 font-tajawal font-bold text-center">
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#f5e7a9]">
                        {guest.companions} {guest.companions === 1 ? 'فردي' : 'أشخاص'}
                      </span>
                    </td>

                    {/* Meal & Allergies */}
                    <td className="py-3.5 px-4 text-[11px]">
                      <div className="space-y-0.5">
                        <span className="font-tajawal text-gray-200">
                          {guest.mealPreference === 'lamb' && '🥩 لحم ضأن وقوزي'}
                          {guest.mealPreference === 'chicken' && '🍗 دجاج ومقبلات'}
                          {guest.mealPreference === 'vegetarian' && '🥗 نباتي فاخر'}
                          {guest.mealPreference === 'gluten_free' && '🌾 خالي جلوتين'}
                          {!guest.mealPreference && '🥩 الوليمة الملكية'}
                        </span>
                        {guest.allergiesNote && (
                          <div className="flex items-center gap-1 text-amber-300 text-[10px]">
                            <AlertTriangle size={10} />
                            <span>{guest.allergiesNote}</span>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Usher Check-in Toggle Switch */}
                    <td className="py-3.5 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => handleToggleCheckIn(guest.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-tajawal font-bold transition-all cursor-pointer ${
                          guest.isCheckedIn
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                            : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/10'
                        }`}
                        title="تبديل حالة الحضور عند بوابة القاعة"
                      >
                        {guest.isCheckedIn ? (
                          <>
                            <Check size={13} />
                            <span>حضر ({guest.checkInTime || 'الآن'})</span>
                          </>
                        ) : (
                          <span>تسجيل الدخول</span>
                        )}
                      </button>
                    </td>

                    {/* Fast Actions (WhatsApp Dispatcher, Link Copy, Edit, Delete) */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center justify-center gap-1.5">
                        
                        {/* WhatsApp Dispatcher Button */}
                        <button
                          type="button"
                          onClick={() => setSelectedGuestForWhatsApp(guest)}
                          className="p-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 transition-colors cursor-pointer"
                          title="إرسال رابط الدعوة المخصص عبر واتساب"
                        >
                          <MessageSquare size={14} />
                        </button>

                        {/* Copy Link Button */}
                        <button
                          type="button"
                          onClick={() => handleCopyLink(guest)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                          title="نسخ رابط الدعوة المخصص لهذا الضيف"
                        >
                          {copiedGuestId === guest.id ? (
                            <Check size={14} className="text-emerald-400" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>

                        {/* Edit Button */}
                        <button
                          type="button"
                          onClick={() => openEditModal(guest)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                          title="تعديل بيانات الضيف"
                        >
                          <Edit3 size={14} />
                        </button>

                        {/* Delete Button */}
                        <button
                          type="button"
                          onClick={() => handleDeleteGuest(guest.id)}
                          className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/30 text-rose-300 transition-colors cursor-pointer"
                          title="حذف الضيف"
                        >
                          <Trash2 size={14} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* WhatsApp Dispatcher Modal (DigitalInvitation.me instant WhatsApp tool) */}
      <AnimatePresence>
        {selectedGuestForWhatsApp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#161c2b] to-[#0c0f17] border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 space-y-6 text-right relative"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold font-tajawal text-white text-base">
                      إرسال رسالة الدعوة المخصصة عبر واتساب
                    </h3>
                    <p className="text-[11px] text-gray-400 font-cairo">
                      دعوة خاصة باسم: {selectedGuestForWhatsApp.name}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedGuestForWhatsApp(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Message Preview Box */}
              <div className="space-y-2">
                <label className="block text-xs font-tajawal text-gray-300 font-semibold">
                  معاينة نص الرسالة التي ستصل للضيف على واتساب:
                </label>
                <div className="p-4 rounded-2xl bg-[#090c12] border border-white/10 text-xs sm:text-sm text-[#e8e4dc] font-cairo leading-relaxed whitespace-pre-line select-all">
{`السلام عليكم ورحمة الله وبركاته،
سعادة الأستاذ / ${selectedGuestForWhatsApp.name} المحترم،

يتشرف كل من عائلة ${weddingData.groomFamily} وعائلة ${weddingData.brideFamily} بدعوتكم الكريمة لمشاركتنا فرحة حفل زفاف:
✨ ${weddingData.groomName} و ${weddingData.brideName} ✨

📅 الموعد: ${weddingData.weddingDayArabic} ${weddingData.weddingDateGregorian} (${weddingData.weddingTime || '08:30 م'})
📍 القاعة: ${weddingData.venueName} - ${weddingData.hallName}
🏛️ مقعدكم المخصص: ${selectedGuestForWhatsApp.table} (${selectedGuestForWhatsApp.seat || 'VIP'})
👥 مخصصة لعدد: (${selectedGuestForWhatsApp.companions || 1} أشخاص)

🎟️ رابط بطاقة دعوتكم الملكية التفاعلية ورمز الدخول:
${getPersonalizedUrl(selectedGuestForWhatsApp)}

يسعدنا تأكيد حضوركم الكريم عبر الرابط أعلاه لنكون على أتم الاستعداد لاستقبالكم.
دامت دياركم عامرة بالأفراح والمسرات!`}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const message = encodeURIComponent(
                      `السلام عليكم ورحمة الله وبركاته،\n` +
                      `سعادة الأستاذ / ${selectedGuestForWhatsApp.name} المحترم،\n\n` +
                      `يتشرف كل من عائلة ${weddingData.groomFamily} وعائلة ${weddingData.brideFamily} بدعوتكم الكريمة لمشاركتنا فرحة حفل زفاف:\n` +
                      `✨ ${weddingData.groomName} و ${weddingData.brideName} ✨\n\n` +
                      `📅 الموعد: ${weddingData.weddingDayArabic} ${weddingData.weddingDateGregorian} (${weddingData.weddingTime || '08:30 م'})\n` +
                      `📍 القاعة: ${weddingData.venueName} - ${weddingData.hallName}\n` +
                      `🏛️ مقعدكم المخصص: ${selectedGuestForWhatsApp.table} (${selectedGuestForWhatsApp.seat || 'VIP'})\n` +
                      `👥 مخصصة لعدد: (${selectedGuestForWhatsApp.companions || 1} أشخاص)\n\n` +
                      `🎟️ رابط بطاقة دعوتكم الملكية التفاعلية ورمز الدخول:\n` +
                      `${getPersonalizedUrl(selectedGuestForWhatsApp)}\n\n` +
                      `يسعدنا تأكيد حضوركم الكريم عبر الرابط أعلاه.\n` +
                      `دامت دياركم عامرة بالأفراح والمسرات!`
                    );
                    const target = selectedGuestForWhatsApp.phone ? selectedGuestForWhatsApp.phone.replace(/[^0-9]/g, '') : '';
                    window.open(`https://api.whatsapp.com/send?${target ? `phone=${target}&` : ''}text=${message}`, '_blank');
                  }}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-tajawal font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Send size={15} />
                  <span>فتح تطبيق واتساب وإرسال الدعوة فوراً</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyLink(selectedGuestForWhatsApp)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-tajawal font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copiedGuestId === selectedGuestForWhatsApp.id ? (
                    <>
                      <Check size={15} className="text-emerald-400" />
                      <span>تم نسخ الرابط!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>نسخ الرابط المخصص</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add / Edit Guest Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#161c2b] to-[#0c0f17] border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 space-y-5 text-right my-8"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center">
                    <UserPlus size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold font-tajawal text-white text-base">
                      {editingGuest ? 'تعديل بيانات الضيف' : 'إضافة ضيف جديد لقائمة المدعوين'}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-cairo">
                      تحديد الطاولة، المقاعد المخصصة، وتفضيل وجبة العشاء
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setEditingGuest(null);
                  }}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSaveModalGuest} className="space-y-4">
                
                {/* Guest Full Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-200 font-tajawal">
                    اسم الضيف الكامل مع اللقب *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: معالي الشيخ د. ناصر بن عبدالعزيز"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Phone number */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-200 font-tajawal">
                    رقم الجوال أو الواتساب (مع الرمز الدولي)
                  </label>
                  <input
                    type="tel"
                    placeholder="مثال: +966501112233"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    dir="ltr"
                  />
                </div>

                {/* Table & Seat in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-200 font-tajawal">
                      اسم أو رقم الطاولة
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: طاولة كبار الشخصيات VIP-1"
                      value={formTable}
                      onChange={(e) => setFormTable(e.target.value)}
                      className="w-full bg-[#0b0e14] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-200 font-tajawal">
                      رقم المقعد
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: مقعد 02"
                      value={formSeat}
                      onChange={(e) => setFormSeat(e.target.value)}
                      className="w-full bg-[#0b0e14] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                {/* Companions & Meal Choice */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-200 font-tajawal">
                      عدد المقاعد والمرافقين
                    </label>
                    <select
                      value={formCompanions}
                      onChange={(e) => setFormCompanions(Number(e.target.value))}
                      className="w-full bg-[#0b0e14] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] cursor-pointer"
                    >
                      <option value={1}>1 (شخص واحد فقط)</option>
                      <option value={2}>2 (شخصان - الضيف ومرافق)</option>
                      <option value={3}>3 (ثلاثة أشخاص)</option>
                      <option value={4}>4 (أربعة أشخاص)</option>
                      <option value={5}>5 (خمسة أشخاص)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-200 font-tajawal">
                      تفضيل وجبة العشاء
                    </label>
                    <select
                      value={formMeal}
                      onChange={(e) => setFormMeal(e.target.value as MealPreference)}
                      className="w-full bg-[#0b0e14] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] cursor-pointer"
                    >
                      <option value="lamb">🥩 وليمة لحم ضأن وقوزي</option>
                      <option value="chicken">🍗 دجاج فاخر ومقبلات</option>
                      <option value="vegetarian">🥗 قائمة نباتية خاصة</option>
                      <option value="gluten_free">🌾 خالي من الجلوتين</option>
                    </select>
                  </div>
                </div>

                {/* Dietary allergies */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-200 font-tajawal">
                    ملاحظات الحساسية الغذائية (اختياري)
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: حساسية مكسرات، خالي من مشتقات الحليب..."
                    value={formAllergies}
                    onChange={(e) => setFormAllergies(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Private Notes */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-200 font-tajawal">
                    ملاحظات المنظمين الداخلية (اختياري)
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: من طرف والد العريس، يحتاج استقبال خاص..."
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAddModalOpen(false);
                      setEditingGuest(null);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-gray-300 text-xs font-tajawal cursor-pointer"
                  >
                    إلغاء
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f7e7a8] to-[#aa8010] text-[#0a0d13] font-tajawal font-bold text-xs shadow-md shadow-[#d4af37]/30 hover:brightness-110 cursor-pointer"
                  >
                    {editingGuest ? 'حفظ التعديلات' : 'إضافة الضيف'}
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
