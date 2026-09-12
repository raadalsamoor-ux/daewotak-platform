import { 
  CommercePackage, 
  Order, 
  Payment, 
  InvitationRecord, 
  WeddingData 
} from '../types';

const TOKEN_KEY = 'luxury_customer_token';

export function getCustomerToken(): string {
  try {
    let token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      token = `usr_${Math.random().toString(36).substring(2, 12)}_${Date.now().toString(36)}`;
      localStorage.setItem(TOKEN_KEY, token);
    }
    return token;
  } catch {
    return 'usr_guest_session';
  }
}

function getHeaders(): HeadersInit {
  return {
    'Content-Type': 'application/json',
    'X-Customer-Token': getCustomerToken()
  };
}

export const api = {
  // 1. Packages
  async getPackages(): Promise<CommercePackage[]> {
    const res = await fetch('/api/packages');
    if (!res.ok) throw new Error('فشل جلب باقات الأسعار');
    const data = await res.json();
    return data.packages;
  },

  // 2. Draft Invitations
  async createDraftInvitation(
    templateId: string,
    weddingData: WeddingData,
    templateVersion = '1.0.0'
  ): Promise<{ draftId: string; invitation: InvitationRecord }> {
    const res = await fetch('/api/invitations/draft', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        templateId,
        templateVersion,
        data: weddingData
      })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'فشل حفظ مسودة الدعوة');
    }
    return res.json();
  },

  async updateDraftInvitation(
    draftId: string,
    weddingData: Partial<WeddingData>,
    templateId?: string
  ): Promise<{ invitation: InvitationRecord }> {
    const res = await fetch(`/api/invitations/draft/${draftId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({
        data: weddingData,
        templateId
      })
    });
    if (!res.ok) throw new Error('فشل تحديث المسودة');
    return res.json();
  },

  async getDraftInvitation(draftId: string): Promise<InvitationRecord> {
    const res = await fetch(`/api/invitations/draft/${draftId}`, {
      headers: getHeaders()
    });
    if (!res.ok) throw new Error('لم يتم العثور على المسودة');
    const data = await res.json();
    return data.invitation;
  },

  // 3. Orders (Server-Side Price Calculation)
  async createOrder(params: {
    invitationId: string;
    packageId: string;
    templateId: string;
    templateVersion?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
  }): Promise<{ orderId: string; order: Order }> {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(params)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'فشل إنشاء الطلب');
    }
    return res.json();
  },

  async getOrder(orderId: string): Promise<{
    order: Order;
    payments: Payment[];
    invitation: InvitationRecord | null;
    isPaid: boolean;
  }> {
    const res = await fetch(`/api/orders/${orderId}`, {
      headers: getHeaders()
    });
    if (!res.ok) throw new Error('لم يتم العثور على الطلب');
    return res.json();
  },

  // 4. Checkout
  async checkoutOrder(
    orderId: string,
    customerInfo?: {
      customerName?: string;
      customerEmail?: string;
      customerPhone?: string;
    }
  ): Promise<{
    success: boolean;
    checkoutUrl: string;
    paymentId: string;
    providerPaymentId: string;
    alreadyPaid?: boolean;
  }> {
    const res = await fetch(`/api/orders/${orderId}/checkout`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(customerInfo || {})
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'فشل بدء عملية الدفع');
    }
    return res.json();
  },

  // 5. Verify Payment
  async verifyPayment(orderId: string, paymentId?: string): Promise<{
    isPaid: boolean;
    order: Order;
    invitation: InvitationRecord | null;
  }> {
    const res = await fetch('/api/payments/verify', {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ orderId, paymentId })
    });
    if (!res.ok) throw new Error('فشل التحقق من حالة الدفع');
    return res.json();
  },

  // 6. Security Gateway: Public Invitation (Strictly checks active & paid)
  async getPublicInvitation(publicId: string): Promise<{
    success: boolean;
    invitation: {
      publicId: string;
      templateId: string;
      templateVersion: string;
      data: WeddingData;
      qrCodeData?: string;
      status: string;
      packageName: string;
    };
  }> {
    const res = await fetch(`/api/invitations/public/${publicId}`);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      const errorMsg = err.error || 'هذه الدعوة غير مفعلة أو غير موجودة';
      const customErr: any = new Error(errorMsg);
      customErr.status = res.status;
      customErr.code = err.code;
      throw customErr;
    }
    return res.json();
  },

  // 7. Customer Dashboard
  async getMyOrders(): Promise<{ orders: (Order & { invitation: any })[] }> {
    const res = await fetch('/api/my-orders', {
      headers: getHeaders()
    });
    if (!res.ok) throw new Error('فشل جلب الطلبات');
    return res.json();
  },

  // 8. Admin Dashboard
  async getAdminOrders(adminSecret?: string): Promise<{
    totalOrders: number;
    paidOrders: number;
    orders: Order[];
    payments: Payment[];
  }> {
    const headers: HeadersInit = {
      ...getHeaders()
    };
    if (adminSecret) {
      (headers as any)['x-admin-secret'] = adminSecret;
    }
    const res = await fetch('/api/admin/orders', { headers });
    if (!res.ok) throw new Error('غير مصرح لك بدخول لوحة الإدارة');
    return res.json();
  }
};
