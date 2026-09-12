export interface WeddingData {
  groomName: string;
  brideName: string;
  groomFamily: string;
  brideFamily: string;
  weddingDateGregorian: string; // YYYY-MM-DD
  weddingDateHijri: string;
  weddingDayArabic: string;
  weddingTime?: string;
  venueName: string;
  hallName: string;
  city: string;
  address: string;
  googleMapsUrl: string;
  wazeUrl?: string;
  appleMapsUrl?: string;
  instagramUrl: string;
  instagramHandle: string;
  whatsappNumber?: string;
  quranVerse: string;
  verseSurah: string;
  welcomeMessage: string;
  dressCode: string;
  themeId?: string;
  themeName?: string;
  musicTrack?: 'oud' | 'piano' | 'violin' | 'zaffah';
  fontFamily?: 'amiri' | 'cairo' | 'tajawal' | 'marcellus';
  language?: 'ar' | 'en';
  particlesEffect?: 'gold' | 'petals' | 'mix' | 'off';
  openingStyle?: 'envelope' | 'gate'; // Halaheel style: Envelope vs "باب الفرح"
  eventType?: 'wedding' | 'engagement' | 'henna' | 'reception' | 'graduation';
  showVipTicket?: boolean;
  showCalendarSync?: boolean;
  showGiftRegistry?: boolean;
  showPhotoMemories?: boolean;
  showDressCodePalette?: boolean;
  guestName?: string;
  guestSeat?: string;
  guestCount?: number;
  bankInfo?: {
    bankName: string;
    accountHolder: string;
    iban: string;
    accountNumber?: string;
    note?: string;
  };
  dressCodePalette?: {
    name: string;
    hex: string;
    nameEn?: string;
  }[];
  photos?: {
    id: string;
    url: string;
    caption: string;
  }[];
  notes: {
    icon: string;
    title: string;
    description: string;
  }[];
  timeline: {
    time: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export type MealPreference = 'lamb' | 'chicken' | 'vegetarian' | 'gluten_free';

export interface GuestRecord {
  id: string;
  name: string;
  phone?: string;
  status: 'confirmed' | 'declined' | 'pending';
  companions: number; // count including main guest
  table: string;
  seat?: string;
  mealPreference?: MealPreference;
  allergiesNote?: string;
  wishesNote?: string;
  isCheckedIn?: boolean;
  checkInTime?: string;
  invitationSent?: boolean;
  notes?: string;
}

export type SiteNavTab = 
  | 'home'
  | 'dynamic-templates'
  | 'templates'
  | 'studio'
  | 'guest-manager'
  | 'live-demo'
  | 'packages'
  | 'wishes'
  | 'faq'
  | 'checkout'
  | 'payment-success'
  | 'my-orders'
  | 'admin';

export interface CommercePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  active: boolean;
  popular?: boolean;
  originalPrice?: number;
  deliveryTime?: string;
  badge?: string;
}

export type OrderStatus = 'PENDING' | 'PAYMENT_PROCESSING' | 'PAID' | 'FAILED' | 'CANCELLED' | 'REFUNDED';
export type PaymentStatus = 'PENDING' | 'PROCESSING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | 'REFUNDED';
export type InvitationStatus = 'DRAFT' | 'ACTIVE' | 'ARCHIVED';

export interface Order {
  id: string;
  userId: string;
  templateId: string;
  templateVersion: string;
  packageId: string;
  invitationId: string;
  subtotal: number;
  discount: number;
  tax: number;
  amount: number;
  currency: string; // default 'JOD'
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  updatedAt: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  packageSnapshot?: {
    name: string;
    description: string;
    features: string[];
  };
}

export interface Payment {
  id: string;
  orderId: string;
  provider: string;
  providerPaymentId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, any>;
}

export interface InvitationRecord {
  id: string;
  userId: string;
  status: InvitationStatus;
  templateId: string;
  templateVersion: string;
  data: WeddingData;
  publicId?: string; // Unguessable secure URL token generated ONLY after successful payment
  qrCodeData?: string; // QR code generated ONLY after successful payment
  createdAt: string;
  updatedAt: string;
}

export interface InvitationTemplate {
  id: string;
  title: string;
  tagline: string;
  category: 'royal-dark' | 'modern-minimal' | 'classic-gold' | 'emerald-luxury' | 'rose-gold';
  categoryLabel: string;
  badge?: string;
  bgGradient: string;
  accentColor: string;
  textColor: string;
  previewImageAlt: string;
  isFeatured?: boolean;
  sampleGroom: string;
  sampleBride: string;
  sampleVenue: string;
  features: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  popular?: boolean;
  price: string;
  period: string;
  originalPrice?: string;
  description: string;
  features: string[];
  ctaText: string;
  deliveryTime: string;
}

export interface Testimonial {
  id: string;
  coupleNames: string;
  weddingDate: string;
  city: string;
  rating: number;
  reviewText: string;
  templateUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'customization' | 'rsvp' | 'technical';
}

export interface GuestbookWish {
  id: string;
  senderName: string;
  relation: string;
  message: string;
  timestamp: string;
  likes: number;
  likedByMe?: boolean;
  badge?: string;
}
