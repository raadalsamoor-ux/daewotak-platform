import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import QRCode from 'qrcode';
import { 
  CommercePackage, 
  Order, 
  Payment, 
  InvitationRecord, 
  WeddingData, 
  OrderStatus, 
  PaymentStatus 
} from '../src/types';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'store.json');

// Authoritative Centralized Pricing Packages (JOD - Jordanian Dinar default)
export const DEFAULT_PACKAGES: CommercePackage[] = [
  {
    id: 'basic',
    name: 'الباقة الكلاسيكية (Classic)',
    description: 'مثالية لحفلات الزفاف والملكة والخطوبة الصغيرة مع تصميم أنيق وعصري.',
    price: 15,
    currency: 'JOD',
    originalPrice: 25,
    popular: false,
    active: true,
    deliveryTime: 'تفعيل فوري بعد الدفع مباشرة',
    badge: 'الأكثر اقتصادية',
    features: [
      'بطاقة دعوة تفاعلية كاملة متجاوبة 100% مع كافة الهواتف',
      'عداد تنازلي لموعد الحفل',
      'رابط موقع القاعة على خرائط Google Maps بزر مباشر',
      'إضافة الموعد لتقويم الهاتف (Google & Apple)',
      'رابط دعوة عام آمن وخاص صالح لمدة سنة كاملة'
    ]
  },
  {
    id: 'premium',
    name: 'باقة تياترو الملكية (Teatro Royale)',
    description: 'الباقة الأكثر طلباً وتميزاً — تجربة سينمائية مبهرة لفتح المظروف أو باب الفرح الملكي 3D.',
    price: 25,
    currency: 'JOD',
    originalPrice: 40,
    popular: true,
    active: true,
    deliveryTime: 'تفعيل فوري بعد الدفع مباشرة',
    badge: 'الأكثر طلباً • الخيار المفضل',
    features: [
      'جميع مزايا الباقة الكلاسيكية بالكامل',
      'نموذج "باب الفرح" الملكي 3D (طراز هلاهيل) مع مؤثرات صوتية',
      'تجربة المظروف الملكي 3D بالختم الشمعي الفاخر',
      'خلفية موسيقية ساحرة ومؤثرات تساقط الورد والذهب',
      'رمز استجابة سريعة QR Code عالي الدقة للطباعة والمشاركة',
      'تعديلات غير محدودة قبل موعد المناسبة'
    ]
  },
  {
    id: 'luxury',
    name: 'باقة النخبة VIP المتكاملة (Exclusive VIP)',
    description: 'دعوة مخصصة بالكامل بهوية بصرية فريدة مع دعم مباشر وتخصيص فائق.',
    price: 40,
    currency: 'JOD',
    originalPrice: 65,
    popular: false,
    active: true,
    deliveryTime: 'تفعيل فوري ومتابعة خاصة',
    badge: 'فاخرة ومتكاملة',
    features: [
      'جميع مزايا باقة تياترو الملكية بالكامل',
      'تخصيص كامل للألوان، الخطوط، وأبيات الشعر الترحيبية',
      'دفتر تهاني وتبريكات رقمي مباشر لضيوفكم',
      'توليد تذاكر الدخول الإلكترونية والباركود الخاص لكبار الشخصيات',
      'لوحة متابعة ومشاركة مخصصة لدعوتكم'
    ]
  }
];

interface DatabaseSchema {
  packages: CommercePackage[];
  invitations: Record<string, InvitationRecord>;
  orders: Record<string, Order>;
  payments: Record<string, Payment>;
  idempotencyKeys: Record<string, { processedAt: string; result: any }>;
}

class Store {
  private data: DatabaseSchema;

  constructor() {
    this.data = {
      packages: DEFAULT_PACKAGES,
      invitations: {},
      orders: {},
      payments: {},
      idempotencyKeys: {}
    };
    this.init();
  }

  private init() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        this.data = {
          packages: parsed.packages || DEFAULT_PACKAGES,
          invitations: parsed.invitations || {},
          orders: parsed.orders || {},
          payments: parsed.payments || {},
          idempotencyKeys: parsed.idempotencyKeys || {}
        };
      } else {
        this.persist();
      }
    } catch (e) {
      console.error('[Store] Error initializing store:', e);
    }
  }

  private persist() {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (e) {
      console.error('[Store] Error persisting database:', e);
    }
  }

  // Packages
  getPackages(): CommercePackage[] {
    return this.data.packages.filter(p => p.active);
  }

  getPackageById(packageId: string): CommercePackage | undefined {
    return this.data.packages.find(p => p.id === packageId && p.active);
  }

  // Invitations (Draft & Active)
  createDraftInvitation(input: {
    userId: string;
    templateId: string;
    templateVersion: string;
    data: WeddingData;
  }): InvitationRecord {
    const id = `inv_draft_${crypto.randomBytes(8).toString('hex')}`;
    const now = new Date().toISOString();
    const record: InvitationRecord = {
      id,
      userId: input.userId,
      status: 'DRAFT',
      templateId: input.templateId,
      templateVersion: input.templateVersion || '1.0.0',
      data: input.data,
      publicId: undefined, // Strictly undefined before payment!
      qrCodeData: undefined, // Strictly undefined before payment!
      createdAt: now,
      updatedAt: now
    };
    this.data.invitations[id] = record;
    this.persist();
    return record;
  }

  updateDraftInvitation(id: string, updates: Partial<WeddingData>, templateId?: string): InvitationRecord | null {
    const existing = this.data.invitations[id];
    if (!existing) return null;
    
    // Once ACTIVE, do not downgrade to DRAFT
    existing.data = { ...existing.data, ...updates };
    if (templateId) {
      existing.templateId = templateId;
    }
    existing.updatedAt = new Date().toISOString();
    this.data.invitations[id] = existing;
    this.persist();
    return existing;
  }

  getInvitationById(id: string): InvitationRecord | undefined {
    return this.data.invitations[id];
  }

  getInvitationByPublicId(publicId: string): InvitationRecord | undefined {
    return Object.values(this.data.invitations).find(
      inv => inv.publicId === publicId && inv.status === 'ACTIVE'
    );
  }

  // Activate Invitation after payment
  async activateInvitation(invitationId: string, baseUrl: string): Promise<{ publicId: string; qrCodeData: string }> {
    const inv = this.data.invitations[invitationId];
    if (!inv) {
      throw new Error(`Invitation ${invitationId} not found`);
    }

    // Idempotent: If already active and has publicId, return existing
    if (inv.status === 'ACTIVE' && inv.publicId && inv.qrCodeData) {
      return { publicId: inv.publicId, qrCodeData: inv.qrCodeData };
    }

    // Generate secure, cryptographically unguessable publicId (e.g. inv_24charHex)
    const publicId = `daw_${crypto.randomBytes(12).toString('hex')}`;
    const publicUrl = `${baseUrl.replace(/\/+$/, '')}/i/${publicId}`;

    // Generate QR Code data URL
    const qrCodeData = await QRCode.toDataURL(publicUrl, {
      errorCorrectionLevel: 'H',
      margin: 2,
      color: {
        dark: '#111622',
        light: '#ffffff'
      },
      width: 400
    });

    inv.status = 'ACTIVE';
    inv.publicId = publicId;
    inv.qrCodeData = qrCodeData;
    inv.updatedAt = new Date().toISOString();

    this.data.invitations[invitationId] = inv;
    this.persist();

    return { publicId, qrCodeData };
  }

  // Orders
  createOrder(input: {
    userId: string;
    templateId: string;
    templateVersion: string;
    packageId: string;
    invitationId: string;
    subtotal: number;
    discount: number;
    tax: number;
    amount: number;
    currency: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    packageSnapshot?: {
      name: string;
      description: string;
      features: string[];
    };
  }): Order {
    const orderNum = Math.floor(10000 + Math.random() * 90000);
    const id = `ORD-${orderNum}`;
    const now = new Date().toISOString();

    const order: Order = {
      id,
      userId: input.userId,
      templateId: input.templateId,
      templateVersion: input.templateVersion,
      packageId: input.packageId,
      invitationId: input.invitationId,
      subtotal: input.subtotal,
      discount: input.discount,
      tax: input.tax,
      amount: input.amount,
      currency: input.currency,
      status: 'PENDING',
      paymentStatus: 'PENDING',
      createdAt: now,
      updatedAt: now,
      customerName: input.customerName,
      customerEmail: input.customerEmail,
      customerPhone: input.customerPhone,
      packageSnapshot: input.packageSnapshot
    };

    this.data.orders[id] = order;
    this.persist();
    return order;
  }

  getOrderById(id: string): Order | undefined {
    return this.data.orders[id];
  }

  getOrdersByUserId(userId: string): Order[] {
    return Object.values(this.data.orders)
      .filter(o => o.userId === userId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  getAllOrders(): { orders: Order[]; payments: Payment[] } {
    const orders = Object.values(this.data.orders).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const payments = Object.values(this.data.payments).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return { orders, payments };
  }

  updateOrder(id: string, updates: Partial<Order>): Order | null {
    const order = this.data.orders[id];
    if (!order) return null;
    Object.assign(order, updates);
    order.updatedAt = new Date().toISOString();
    this.data.orders[id] = order;
    this.persist();
    return order;
  }

  // Payments
  createPayment(input: {
    orderId: string;
    provider: string;
    providerPaymentId: string;
    amount: number;
    currency: string;
    metadata?: Record<string, any>;
  }): Payment {
    const payNum = Math.floor(100000 + Math.random() * 900000);
    const id = `PAY-${payNum}`;
    const now = new Date().toISOString();

    const payment: Payment = {
      id,
      orderId: input.orderId,
      provider: input.provider,
      providerPaymentId: input.providerPaymentId,
      amount: input.amount,
      currency: input.currency,
      status: 'PENDING',
      createdAt: now,
      updatedAt: now,
      metadata: input.metadata
    };

    this.data.payments[id] = payment;
    this.persist();
    return payment;
  }

  getPaymentById(id: string): Payment | undefined {
    return this.data.payments[id];
  }

  getPaymentsByOrderId(orderId: string): Payment[] {
    return Object.values(this.data.payments)
      .filter(p => p.orderId === orderId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  getPaymentByProviderId(providerPaymentId: string): Payment | undefined {
    return Object.values(this.data.payments).find(p => p.providerPaymentId === providerPaymentId);
  }

  updatePayment(id: string, updates: Partial<Payment>): Payment | null {
    const payment = this.data.payments[id];
    if (!payment) return null;
    Object.assign(payment, updates);
    payment.updatedAt = new Date().toISOString();
    this.data.payments[id] = payment;
    this.persist();
    return payment;
  }

  // Idempotency
  isIdempotencyProcessed(key: string): boolean {
    return !!this.data.idempotencyKeys[key];
  }

  getIdempotencyResult(key: string): any {
    return this.data.idempotencyKeys[key]?.result;
  }

  recordIdempotency(key: string, result: any) {
    this.data.idempotencyKeys[key] = {
      processedAt: new Date().toISOString(),
      result
    };
    this.persist();
  }
}

export const db = new Store();
