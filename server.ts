import express, { Request, Response } from 'express';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { db } from './server/db';
import { paymentEngine } from './server/paymentEngine';
import { Order, Payment } from './src/types';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper to extract or generate customer token (Ownership & Session)
function getCustomerUserId(req: Request, res: Response): string {
  let userId = (req.headers['x-customer-token'] as string) || '';
  if (!userId || userId.length < 8) {
    userId = `usr_${crypto.randomBytes(10).toString('hex')}`;
    res.setHeader('X-Customer-Token', userId);
  }
  return userId;
}

function getBaseUrl(req: Request): string {
  if (process.env.APP_URL) {
    return process.env.APP_URL.replace(/\/+$/, '');
  }
  const host = req.get('host') || `localhost:${PORT}`;
  const protocol = req.protocol === 'https' || req.get('x-forwarded-proto') === 'https' ? 'https' : 'http';
  return `${protocol}://${host}`;
}

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

/* =========================================================================
   1. PACKAGES API (Authoritative Server-Side Pricing)
   ========================================================================= */
app.get('/api/packages', (req: Request, res: Response) => {
  const packages = db.getPackages();
  res.json({ packages });
});

/* =========================================================================
   2. DRAFT INVITATION API
   ========================================================================= */
app.post('/api/invitations/draft', (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { templateId, templateVersion, data } = req.body;

    if (!templateId || !data) {
      return res.status(400).json({ error: 'templateId and wedding data are required' });
    }

    const draft = db.createDraftInvitation({
      userId,
      templateId,
      templateVersion: templateVersion || '1.0.0',
      data
    });

    res.status(201).json({
      success: true,
      draftId: draft.id,
      invitation: draft,
      userId
    });
  } catch (err: any) {
    console.error('[API /api/invitations/draft] Error:', err);
    res.status(500).json({ error: 'Failed to create draft invitation' });
  }
});

app.put('/api/invitations/draft/:id', (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { id } = req.params;
    const { data, templateId } = req.body;

    const existing = db.getInvitationById(id);
    if (!existing) {
      return res.status(404).json({ error: 'Invitation not found' });
    }

    // Check ownership
    if (existing.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized to modify this draft' });
    }

    const updated = db.updateDraftInvitation(id, data, templateId);
    res.json({ success: true, invitation: updated });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update draft' });
  }
});

app.get('/api/invitations/draft/:id', (req: Request, res: Response) => {
  const userId = getCustomerUserId(req, res);
  const { id } = req.params;

  const inv = db.getInvitationById(id);
  if (!inv) {
    return res.status(404).json({ error: 'Draft not found' });
  }

  // Ownership verification
  if (inv.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
    return res.status(403).json({ error: 'Unauthorized access to this draft' });
  }

  res.json({ invitation: inv });
});

/* =========================================================================
   3. ORDERS API (Strict Server-Side Price Calculation)
   ========================================================================= */
app.post('/api/orders', (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { 
      invitationId, 
      packageId, 
      templateId, 
      templateVersion, 
      customerName, 
      customerEmail, 
      customerPhone 
    } = req.body;

    if (!invitationId || !packageId) {
      return res.status(400).json({ error: 'invitationId and packageId are required' });
    }

    const invitation = db.getInvitationById(invitationId);
    if (!invitation) {
      return res.status(404).json({ error: 'Invitation draft not found' });
    }

    // Ownership check
    if (invitation.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized: invitation belongs to another user' });
    }

    // CRITICAL SECURITY RULE: Find authoritative package price on the server!
    // NEVER accept 'amount' from client request body!
    const pkg = db.getPackageById(packageId);
    if (!pkg) {
      return res.status(400).json({ error: 'Invalid or inactive package selected' });
    }

    const subtotal = pkg.price;
    const discount = 0; // Discount calculation engine hook
    const tax = 0;      // Tax calculation hook
    const total = subtotal - discount + tax;

    const order = db.createOrder({
      userId,
      templateId: templateId || invitation.templateId,
      templateVersion: templateVersion || invitation.templateVersion || '1.0.0',
      packageId: pkg.id,
      invitationId: invitation.id,
      subtotal,
      discount,
      tax,
      amount: total,
      currency: pkg.currency || 'JOD',
      customerName: customerName || '',
      customerEmail: customerEmail || '',
      customerPhone: customerPhone || '',
      packageSnapshot: {
        name: pkg.name,
        description: pkg.description,
        features: pkg.features
      }
    });

    res.status(201).json({
      success: true,
      orderId: order.id,
      order,
      userId
    });
  } catch (err: any) {
    console.error('[API /api/orders] Error:', err);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.get('/api/orders/:orderId', (req: Request, res: Response) => {
  const userId = getCustomerUserId(req, res);
  const { orderId } = req.params;

  const order = db.getOrderById(orderId);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  // Ownership verification
  if (order.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
    return res.status(403).json({ error: 'Unauthorized to view this order' });
  }

  const payments = db.getPaymentsByOrderId(orderId);
  const invitation = db.getInvitationById(order.invitationId);

  res.json({
    order,
    payments,
    invitation: order.paymentStatus === 'SUCCEEDED' ? invitation : null,
    isPaid: order.paymentStatus === 'SUCCEEDED'
  });
});

/* =========================================================================
   4. CHECKOUT INITIATION & PAYMENT ENGINE
   ========================================================================= */
app.post('/api/orders/:orderId/checkout', async (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { orderId } = req.params;
    const { customerName, customerEmail, customerPhone } = req.body;

    const order = db.getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Ownership check
    if (order.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized to checkout this order' });
    }

    if (order.paymentStatus === 'SUCCEEDED') {
      return res.json({
        alreadyPaid: true,
        order,
        checkoutUrl: `/payment/success?orderId=${order.id}`
      });
    }

    // Re-verify package price on server
    const pkg = db.getPackageById(order.packageId);
    if (!pkg) {
      return res.status(400).json({ error: 'Selected package is no longer available' });
    }

    // Update customer info if provided
    if (customerName || customerEmail || customerPhone) {
      db.updateOrder(order.id, {
        customerName: customerName || order.customerName,
        customerEmail: customerEmail || order.customerEmail,
        customerPhone: customerPhone || order.customerPhone
      });
    }

    // Create a new Payment attempt record (keeps history of all attempts)
    const provider = paymentEngine.getProvider();
    const tempProviderPaymentId = `init_${Date.now()}`;
    const payment = db.createPayment({
      orderId: order.id,
      provider: provider.name,
      providerPaymentId: tempProviderPaymentId,
      amount: order.amount,
      currency: order.currency
    });

    db.updateOrder(order.id, {
      status: 'PAYMENT_PROCESSING'
    });

    const baseUrl = getBaseUrl(req);
    const returnUrl = `${baseUrl}/payment/success?orderId=${order.id}&paymentId=${payment.id}`;
    const cancelUrl = `${baseUrl}/checkout?orderId=${order.id}&cancelled=1`;
    const webhookUrl = `${baseUrl}/api/payments/webhook`;

    // Invoke Payment Engine
    const checkoutResult = await paymentEngine.createCheckout(order, payment, {
      customerName: customerName || order.customerName,
      customerEmail: customerEmail || order.customerEmail,
      customerPhone: customerPhone || order.customerPhone,
      returnUrl,
      cancelUrl,
      webhookUrl
    });

    // Save real provider payment ID
    db.updatePayment(payment.id, {
      providerPaymentId: checkoutResult.providerPaymentId,
      metadata: checkoutResult.metadata
    });

    res.json({
      success: true,
      orderId: order.id,
      paymentId: payment.id,
      checkoutUrl: checkoutResult.checkoutUrl,
      providerPaymentId: checkoutResult.providerPaymentId
    });
  } catch (err: any) {
    console.error('[API Checkout] Error:', err);
    res.status(500).json({ error: err.message || 'Failed to initiate checkout' });
  }
});

/* =========================================================================
   5. WEBHOOK HANDLER (Server-Side Source of Truth & Idempotency)
   ========================================================================= */
app.post('/api/payments/webhook', async (req: Request, res: Response) => {
  try {
    const rawHeaders = req.headers;
    const webhookResult = await paymentEngine.handleWebhook(req.body, rawHeaders);

    if (!webhookResult.isValid) {
      console.warn('[Webhook] Invalid webhook signature or payload:', webhookResult.error);
      return res.status(400).json({ error: webhookResult.error || 'Invalid signature' });
    }

    const { orderId, providerPaymentId, status, amount, currency, idempotencyKey } = webhookResult;

    // IDEMPOTENCY CHECK: Prevent duplicate processing of the same event!
    if (idempotencyKey && db.isIdempotencyProcessed(idempotencyKey)) {
      console.log(`[Webhook] Duplicate event ${idempotencyKey} received; returning idempotent OK.`);
      return res.status(200).json({ received: true, message: 'Already processed' });
    }

    if (!orderId) {
      return res.status(400).json({ error: 'orderId missing in webhook' });
    }

    const order = db.getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ error: `Order ${orderId} not found` });
    }

    // Verify amount and currency
    if (amount !== undefined && Math.abs(amount - order.amount) > 0.01) {
      console.error(`[Webhook] Amount mismatch for order ${orderId}: got ${amount}, expected ${order.amount}`);
      return res.status(400).json({ error: 'Amount mismatch' });
    }

    // Find payment attempt
    let payment = providerPaymentId ? db.getPaymentByProviderId(providerPaymentId) : undefined;
    if (!payment) {
      const attempts = db.getPaymentsByOrderId(orderId);
      payment = attempts[0];
    }

    if (status === 'SUCCEEDED') {
      if (payment) {
        db.updatePayment(payment.id, { status: 'SUCCEEDED' });
      }

      db.updateOrder(order.id, {
        status: 'PAID',
        paymentStatus: 'SUCCEEDED'
      });

      // ACTIVATION OF THE INVITATION ONLY UPON VERIFIED PAYMENT!
      const baseUrl = getBaseUrl(req);
      const activated = await db.activateInvitation(order.invitationId, baseUrl);

      console.log(`[Webhook] Order ${order.id} PAID! Invitation ${order.invitationId} ACTIVATED with publicId: ${activated.publicId}`);
    } else if (status === 'FAILED' || status === 'CANCELLED') {
      if (payment) {
        db.updatePayment(payment.id, { status });
      }
      db.updateOrder(order.id, {
        status: status === 'FAILED' ? 'FAILED' : 'CANCELLED',
        paymentStatus: status
      });
    }

    if (idempotencyKey) {
      db.recordIdempotency(idempotencyKey, { processed: true, status });
    }

    res.status(200).json({ received: true, status });
  } catch (err: any) {
    console.error('[Webhook] Exception:', err);
    res.status(500).json({ error: 'Internal webhook processing error' });
  }
});

/* =========================================================================
   6. PAYMENT STATUS VERIFICATION API (Queried by /payment/success)
   ========================================================================= */
app.post('/api/payments/verify', async (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { orderId, paymentId } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: 'orderId is required' });
    }

    const order = db.getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Ownership check
    if (order.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized to verify this order' });
    }

    // If order already marked PAID in DB (via webhook)
    if (order.paymentStatus === 'SUCCEEDED') {
      const invitation = db.getInvitationById(order.invitationId);
      return res.json({
        isPaid: true,
        order,
        invitation: invitation && invitation.status === 'ACTIVE' ? invitation : null
      });
    }

    // If still pending, trigger provider verification
    const payments = db.getPaymentsByOrderId(order.id);
    const targetPayment = paymentId ? db.getPaymentById(paymentId) : payments[0];

    if (targetPayment && targetPayment.providerPaymentId) {
      const verifyResult = await paymentEngine.verifyPayment(
        targetPayment.providerPaymentId,
        order.id
      );

      if (verifyResult.status === 'SUCCEEDED') {
        db.updatePayment(targetPayment.id, { status: 'SUCCEEDED' });
        db.updateOrder(order.id, { status: 'PAID', paymentStatus: 'SUCCEEDED' });

        const baseUrl = getBaseUrl(req);
        await db.activateInvitation(order.invitationId, baseUrl);
        const invitation = db.getInvitationById(order.invitationId);

        return res.json({
          isPaid: true,
          order: db.getOrderById(order.id),
          invitation
        });
      } else if (verifyResult.status === 'FAILED') {
        db.updatePayment(targetPayment.id, { status: 'FAILED' });
        db.updateOrder(order.id, { status: 'FAILED', paymentStatus: 'FAILED' });
      }
    }

    res.json({
      isPaid: false,
      status: order.status,
      paymentStatus: order.paymentStatus,
      order
    });
  } catch (err: any) {
    console.error('[API /api/payments/verify] Error:', err);
    res.status(500).json({ error: 'Verification failed' });
  }
});

/* =========================================================================
   7. SECURITY GATEWAY: PUBLIC INVITATION VIEW
   (Strictly prevents bypass of payment! Returns 403 if not paid!)
   ========================================================================= */
app.get('/api/invitations/public/:publicId', (req: Request, res: Response) => {
  const { publicId } = req.params;

  if (!publicId || publicId.length < 5) {
    return res.status(400).json({ error: 'Invalid invitation token' });
  }

  const invitation = db.getInvitationByPublicId(publicId);
  if (!invitation) {
    return res.status(404).json({ error: 'Invitation not found or invalid link' });
  }

  // STRICT SERVER-SIDE ENFORCEMENT:
  // Must have status === 'ACTIVE'
  if (invitation.status !== 'ACTIVE') {
    return res.status(403).json({
      error: 'هذه الدعوة ما زالت في وضع المسودة (Draft) ولم يتم تفعيلها بعد.',
      code: 'INVITATION_NOT_ACTIVE'
    });
  }

  // Confirm that an order with paymentStatus === 'SUCCEEDED' exists for this invitation
  const allOrders = db.getAllOrders().orders;
  const associatedOrder = allOrders.find(
    o => o.invitationId === invitation.id && o.paymentStatus === 'SUCCEEDED'
  );

  if (!associatedOrder) {
    return res.status(403).json({
      error: 'لا يمكن عرض هذه الدعوة قبل التحقق من سداد الرسوم.',
      code: 'PAYMENT_REQUIRED'
    });
  }

  res.json({
    success: true,
    invitation: {
      publicId: invitation.publicId,
      templateId: invitation.templateId,
      templateVersion: invitation.templateVersion,
      data: invitation.data,
      qrCodeData: invitation.qrCodeData,
      status: invitation.status,
      packageName: associatedOrder.packageSnapshot?.name || 'الباقة الملكية'
    }
  });
});

/* =========================================================================
   8. CUSTOMER & ADMIN DASHBOARDS
   ========================================================================= */
app.get('/api/my-orders', (req: Request, res: Response) => {
  const userId = getCustomerUserId(req, res);
  const orders = db.getOrdersByUserId(userId);
  
  // Attach invitation records
  const enriched = orders.map(order => {
    const inv = db.getInvitationById(order.invitationId);
    return {
      ...order,
      invitation: inv ? {
        id: inv.id,
        status: inv.status,
        publicId: inv.publicId,
        qrCodeData: inv.qrCodeData,
        groomName: inv.data.groomName,
        brideName: inv.data.brideName,
        weddingDateGregorian: inv.data.weddingDateGregorian
      } : null
    };
  });

  res.json({ orders: enriched });
});

app.get('/api/admin/orders', (req: Request, res: Response) => {
  const adminSecret = req.headers['x-admin-secret'] || req.query.secret;
  if (adminSecret !== process.env.ADMIN_SECRET_KEY && process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Unauthorized: Admin secret required' });
  }

  const { orders, payments } = db.getAllOrders();
  res.json({
    totalOrders: orders.length,
    paidOrders: orders.filter(o => o.paymentStatus === 'SUCCEEDED').length,
    orders,
    payments
  });
});

/* =========================================================================
   9. HOSTED JORDAN GATEWAY TEST/SANDBOX CHECKOUT UI
   (Allows testing full payment lifecycle with JOD, Click, & Cards)
   ========================================================================= */
app.get('/gateway/hosted-checkout', (req: Request, res: Response) => {
  const { orderId, paymentId, providerPaymentId, amount, currency, customerName, returnUrl, cancelUrl } = req.query;

  res.send(`
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>بوابة الدفع الإلكتروني المعتمدة | المملكة الأردنية الهاشمية</title>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Tajawal', sans-serif; }
        body { background: #0c1017; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
        .card { background: #131926; border: 1px solid #d4af3740; border-radius: 24px; width: 100%; max-width: 480px; padding: 32px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
        .header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; margin-bottom: 24px; }
        .badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.3); border-radius: 999px; color: #f5e7a9; font-size: 11px; font-weight: 700; margin-bottom: 12px; }
        .title { font-size: 20px; font-weight: 800; color: #ffffff; }
        .merchant { font-size: 13px; color: #94a3b8; margin-top: 4px; }
        .amount-box { background: rgba(212,175,55,0.08); border: 1px dashed rgba(212,175,55,0.4); border-radius: 16px; padding: 18px; text-align: center; margin-bottom: 24px; }
        .amount-label { font-size: 12px; color: #cbd5e1; }
        .amount-val { font-size: 32px; font-weight: 900; color: #f5e7a9; margin-top: 2px; }
        .details-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px; }
        .details-row span:first-child { color: #94a3b8; }
        .details-row span:last-child { font-weight: 700; color: #ffffff; }
        .methods { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 20px 0; }
        .method-btn { background: #1c2436; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 12px; text-align: center; color: #ffffff; font-size: 12px; font-weight: 700; }
        .method-btn.active { border-color: #d4af37; background: rgba(212,175,55,0.12); color: #f5e7a9; }
        .btn-pay { width: 100%; background: linear-gradient(135deg, #d4af37, #aa8010); color: #0b0e14; border: none; padding: 16px; border-radius: 14px; font-size: 16px; font-weight: 800; cursor: pointer; transition: all 0.2s; margin-top: 16px; }
        .btn-pay:hover { filter: brightness(1.1); transform: translateY(-1px); }
        .btn-cancel { display: block; text-align: center; color: #94a3b8; text-decoration: none; font-size: 13px; margin-top: 14px; }
        .security-notice { font-size: 11px; color: #64748b; text-align: center; margin-top: 18px; display: flex; align-items: center; justify-content: center; gap: 6px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="badge">🇯🇴 بوابة الدفع الآمنة • المملكة الأردنية</div>
          <h1 class="title">إتمام الدفع الإلكتروني</h1>
          <p class="merchant">التاجر: منصة «دعوتك» لدعوات الزفاف الرقمية</p>
        </div>

        <div class="amount-box">
          <div class="amount-label">المبلغ الإجمالي المستحق</div>
          <div class="amount-val">${amount} ${currency || 'JOD'}</div>
        </div>

        <div class="details-row">
          <span>رقم الطلب:</span>
          <span>${orderId}</span>
        </div>
        <div class="details-row">
          <span>اسم العميل:</span>
          <span>${customerName || 'عميل منصة دعوتك'}</span>
        </div>
        <div class="details-row">
          <span>معرّف المعاملة:</span>
          <span style="font-family: monospace; font-size: 11px;">${providerPaymentId}</span>
        </div>

        <div class="methods">
          <div class="method-btn active">💳 فيزا / ماستركارد</div>
          <div class="method-btn active">⚡ كليك (CliQ) الأردن</div>
        </div>

        <form method="POST" action="/gateway/process-payment">
          <input type="hidden" name="orderId" value="${orderId}" />
          <input type="hidden" name="paymentId" value="${paymentId}" />
          <input type="hidden" name="providerPaymentId" value="${providerPaymentId}" />
          <input type="hidden" name="amount" value="${amount}" />
          <input type="hidden" name="currency" value="${currency || 'JOD'}" />
          <input type="hidden" name="returnUrl" value="${returnUrl}" />
          <input type="hidden" name="decision" value="success" />

          <button type="submit" class="btn-pay">
            تأكيد الدفع الآن (${amount} ${currency || 'JOD'})
          </button>
        </form>

        <form method="POST" action="/gateway/process-payment" style="margin-top: 8px;">
          <input type="hidden" name="orderId" value="${orderId}" />
          <input type="hidden" name="paymentId" value="${paymentId}" />
          <input type="hidden" name="providerPaymentId" value="${providerPaymentId}" />
          <input type="hidden" name="amount" value="${amount}" />
          <input type="hidden" name="currency" value="${currency || 'JOD'}" />
          <input type="hidden" name="returnUrl" value="${returnUrl}" />
          <input type="hidden" name="decision" value="fail" />

          <button type="submit" style="width: 100%; background: transparent; border: 1px solid rgba(239,68,68,0.3); color: #ef4444; padding: 10px; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
            محاكاة فشل المعاملة (اختبار الرفض)
          </button>
        </form>

        <a href="${cancelUrl || '/'}" class="btn-cancel">إلغاء والعودة لصفحة الطلب</a>

        <div class="security-notice">
          🔒 معالجة مشفّرة بتقنية SSL 256-bit وفق معايير البنك المركزي الأردني
        </div>
      </div>
    </body>
    </html>
  `);
});

app.post('/gateway/process-payment', async (req: Request, res: Response) => {
  const { orderId, paymentId, providerPaymentId, amount, currency, returnUrl, decision } = req.body;
  const isSuccess = decision === 'success';

  // Trigger internal server webhook
  try {
    const webhookPayload = {
      event: isSuccess ? 'payment.succeeded' : 'payment.failed',
      order_id: orderId,
      payment_id: providerPaymentId,
      amount: parseFloat(amount || '0'),
      currency: currency || 'JOD',
      status: isSuccess ? 'SUCCEEDED' : 'FAILED',
      event_id: `evt_${providerPaymentId}_${decision}`
    };

    const baseUrl = getBaseUrl(req);
    await fetch(`${baseUrl}/api/payments/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-gateway-signature': 'test_sandbox_signature'
      },
      body: JSON.stringify(webhookPayload)
    });
  } catch (err) {
    console.error('[Gateway Test] Failed to trigger internal webhook:', err);
  }

  // Redirect to success / return url
  const redirectTarget = returnUrl || `/payment/success?orderId=${orderId}&paymentId=${paymentId}`;
  res.redirect(redirectTarget);
});

/* =========================================================================
   10. VITE MIDDLEWARE (Dev) / STATIC FILES (Production)
   ========================================================================= */
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Da3wtak Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
