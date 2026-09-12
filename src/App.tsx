import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { initialWeddingData } from './data/weddingData';
import { WeddingData, SiteNavTab, InvitationTemplate } from './types';
import { SiteNavbar } from './components/SiteNavbar';
import { SiteHero } from './components/SiteHero';
import { TemplatesGallery } from './components/TemplatesGallery';
import { InvitationStudio } from './components/InvitationStudio';
import { FeaturesSection } from './components/FeaturesSection';
import { PackagesSection } from './components/PackagesSection';
import { GuestbookWishes } from './components/GuestbookWishes';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { SiteFooter } from './components/SiteFooter';
import { InvitationLiveDemo } from './components/InvitationLiveDemo';
import { CustomizeModal } from './components/CustomizeModal';
import { ShareModal } from './components/ShareModal';
import { HostGuestDashboard } from './components/HostGuestDashboard';
import { DraftPreviewModal } from './components/DraftPreviewModal';
import { CheckoutPage } from './components/CheckoutPage';
import { PaymentSuccessPage } from './components/PaymentSuccessPage';
import { MyOrdersDashboard } from './components/MyOrdersDashboard';
import { PublicInvitationView } from './components/PublicInvitationView';
import { api } from './services/api';

export default function App() {
  const [weddingData, setWeddingData] = useState<WeddingData>(() => {
    try {
      const saved = localStorage.getItem('luxury_wedding_invitation_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return initialWeddingData;
  });

  const [currentTab, setCurrentTab] = useState<SiteNavTab>('home');
  const [selectedStudioTemplate, setSelectedStudioTemplate] = useState<InvitationTemplate | undefined>(undefined);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = useState<boolean>(false);
  const [isCreatingOrder, setIsCreatingOrder] = useState<boolean>(false);

  // Commercial state
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
  const [activePaymentId, setActivePaymentId] = useState<string | null>(null);
  const [activePublicId, setActivePublicId] = useState<string | null>(null);

  // Detect Public Invitation URL (/i/:publicId) or Payment Callback (?orderId=...&payment_status=...)
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;

      const pathname = window.location.pathname;
      const searchParams = new URLSearchParams(window.location.search);

      // Check if URL is public invitation link: /i/:publicId or query param ?i=...
      if (pathname.startsWith('/i/')) {
        const publicSlug = pathname.replace('/i/', '').trim();
        if (publicSlug) {
          setActivePublicId(publicSlug);
          return;
        }
      } else if (searchParams.get('invitation') || searchParams.get('i')) {
        const publicSlug = searchParams.get('invitation') || searchParams.get('i');
        if (publicSlug) {
          setActivePublicId(publicSlug);
          return;
        }
      }

      // Check if URL is payment gateway callback return
      const urlOrderId = searchParams.get('orderId');
      const paymentStatus = searchParams.get('payment_status');
      const paymentId = searchParams.get('paymentId');

      if (urlOrderId) {
        setActiveOrderId(urlOrderId);
        if (paymentId) setActivePaymentId(paymentId);
        setCurrentTab('payment-success');
        return;
      }

      // Guest RSVP direct link params
      const guestParam = searchParams.get('guest');
      const seatParam = searchParams.get('seat');
      const tableParam = searchParams.get('table');
      const plusParam = searchParams.get('plus');

      if (guestParam) {
        const formattedSeat = tableParam 
          ? (seatParam ? `${tableParam} (${seatParam})` : tableParam)
          : (seatParam || 'طاولة كبار الشخصيات');
        
        setWeddingData((prev) => ({
          ...prev,
          guestName: guestParam,
          guestSeat: formattedSeat,
          guestCount: plusParam ? Math.max(1, parseInt(plusParam, 10)) : (prev.guestCount || 2),
        }));

        setCurrentTab('live-demo');
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSaveData = (newData: WeddingData) => {
    setWeddingData(newData);
    try {
      localStorage.setItem('luxury_wedding_invitation_data', JSON.stringify(newData));
    } catch {
      // ignore
    }
  };

  const handleSelectTemplateForStudio = (template: InvitationTemplate) => {
    setSelectedStudioTemplate(template);
    setWeddingData((prev) => ({
      ...prev,
      themeId: template.id,
      themeName: template.title
    }));
    setCurrentTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLiveDemo = () => {
    setCurrentTab('live-demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLiveDemoWithTemplate = (templateId: string) => {
    setWeddingData((prev) => ({
      ...prev,
      themeId: templateId
    }));
    setCurrentTab('live-demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Draft Modal to pick package and start checkout
  const handleOpenDraftPreview = () => {
    setIsDraftModalOpen(true);
  };

  // Commercial Checkout Order Generation (Strict server-side pricing)
  const handleProceedToCheckout = async (packageId: string) => {
    try {
      setIsCreatingOrder(true);
      const templateId = selectedStudioTemplate?.id || weddingData.themeId || 'teatro-royal';

      // 1. Save draft invitation in authoritative backend
      const draft = await api.createDraftInvitation(
        templateId,
        weddingData
      );

      // 2. Create authoritative Order in backend (server calculates exact price in JOD)
      const orderRes = await api.createOrder({
        invitationId: draft.draftId,
        packageId,
        templateId
      });

      // 3. Save order ID to customer's localStorage list for tracking
      try {
        const savedIds: string[] = JSON.parse(localStorage.getItem('da3wtak_order_ids') || '[]');
        if (!savedIds.includes(orderRes.order.id)) {
          savedIds.unshift(orderRes.order.id);
          localStorage.setItem('da3wtak_order_ids', JSON.stringify(savedIds));
        }
      } catch {
        // ignore
      }

      setActiveOrderId(orderRes.order.id);
      setIsDraftModalOpen(false);
      setCurrentTab('checkout');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error('[Order creation error]:', err);
      alert(err.message || 'حدث خطأ أثناء تجهيز الطلب، يرجى المحاولة ثانية');
    } finally {
      setIsCreatingOrder(false);
    }
  };

  // If viewing a public invitation (/i/:publicId), render the standalone verified invitation view
  if (activePublicId) {
    return (
      <div className="font-cairo selection:bg-[#d4af37]/30 selection:text-[#f8f5ee]">
        <PublicInvitationView
          publicId={activePublicId}
          onGoHome={() => {
            setActivePublicId(null);
            if (typeof window !== 'undefined') {
              window.history.pushState({}, '', '/');
            }
            setCurrentTab('home');
          }}
        />
      </div>
    );
  }

  // If currently in live 3D demo view, show the full immersive experience
  if (currentTab === 'live-demo') {
    return (
      <div className="font-cairo selection:bg-[#d4af37]/30 selection:text-[#f8f5ee]">
        <InvitationLiveDemo
          weddingData={weddingData}
          onBackToSite={() => {
            setCurrentTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenStudio={() => {
            setCurrentTab('studio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenGuestManager={() => {
            setCurrentTab('guest-manager');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenShareModal={() => setIsShareOpen(true)}
        />

        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          weddingData={weddingData}
        />
      </div>
    );
  }

  // Full Website Platform View
  return (
    <div className="min-h-screen bg-[#080a0f] text-[#e8e4dc] font-cairo selection:bg-[#d4af37]/30 selection:text-[#f8f5ee] relative flex flex-col justify-between">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.06),rgba(255,255,255,0))] pointer-events-none z-0" />

      {/* Website Navigation Header */}
      <SiteNavbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLiveDemo={handleOpenLiveDemo}
        instagramUrl={weddingData.instagramUrl}
      />

      {/* Main Page Router */}
      <main className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Tab: HOME */}
            {currentTab === 'home' && (
              <>
                <SiteHero
                  onOpenLiveDemo={handleOpenLiveDemo}
                  onExploreTemplates={() => {
                    setCurrentTab('templates');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onOpenStudio={() => {
                    setCurrentTab('studio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  instagramUrl={weddingData.instagramUrl}
                />

                <FeaturesSection />

                <TemplatesGallery
                  onSelectTemplateForStudio={handleSelectTemplateForStudio}
                  onOpenLiveDemoWithTemplate={handleOpenLiveDemoWithTemplate}
                  instagramUrl={weddingData.instagramUrl}
                />

                <PackagesSection 
                  instagramUrl={weddingData.instagramUrl}
                  onSelectPackage={() => {
                    setCurrentTab('studio');
                    handleOpenDraftPreview();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />

                <GuestbookWishes coupleNames={`${weddingData.groomName} & ${weddingData.brideName}`} />

                <TestimonialsSection />

                <FaqSection />
              </>
            )}

            {/* Tab: TEMPLATES (Catalogue) */}
            {currentTab === 'templates' && (
              <>
                <div className="pt-8">
                  <TemplatesGallery
                    onSelectTemplateForStudio={handleSelectTemplateForStudio}
                    onOpenLiveDemoWithTemplate={handleOpenLiveDemoWithTemplate}
                    instagramUrl={weddingData.instagramUrl}
                  />
                </div>
                <PackagesSection 
                  instagramUrl={weddingData.instagramUrl}
                  onSelectPackage={() => {
                    setCurrentTab('studio');
                    handleOpenDraftPreview();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </>
            )}

            {/* Tab: STUDIO (Customizer) */}
            {currentTab === 'studio' && (
              <InvitationStudio
                weddingData={weddingData}
                onUpdateWeddingData={handleSaveData}
                onOpenLiveDemo={handleOpenLiveDemo}
                onOpenShareModal={() => setIsShareOpen(true)}
                selectedTemplate={selectedStudioTemplate}
                onOpenDraftPreview={handleOpenDraftPreview}
              />
            )}

            {/* Tab: CHECKOUT */}
            {currentTab === 'checkout' && activeOrderId && (
              <CheckoutPage
                orderId={activeOrderId}
                onBackToStudio={() => {
                  setCurrentTab('studio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onPaymentSuccess={(ordId, payId) => {
                  setActiveOrderId(ordId);
                  if (payId) setActivePaymentId(payId);
                  setCurrentTab('payment-success');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {/* Tab: PAYMENT SUCCESS & ACTIVATION */}
            {currentTab === 'payment-success' && activeOrderId && (
              <PaymentSuccessPage
                orderId={activeOrderId}
                paymentId={activePaymentId || undefined}
                onOpenLiveDemo={handleOpenLiveDemo}
                onGoToMyOrders={() => {
                  setCurrentTab('my-orders');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onRetryPayment={() => {
                  setCurrentTab('checkout');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenPublicInvitation={(pubId) => {
                  setActivePublicId(pubId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {/* Tab: MY ORDERS & INVITATIONS */}
            {currentTab === 'my-orders' && (
              <MyOrdersDashboard
                onContinuePayment={(orderId) => {
                  setActiveOrderId(orderId);
                  setCurrentTab('checkout');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenPublicInvitation={(pubId) => {
                  setActivePublicId(pubId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onStartNewInvitation={() => {
                  setCurrentTab('studio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {/* Tab: GUEST MANAGER & RSVP */}
            {currentTab === 'guest-manager' && (
              <div className="pt-4">
                <HostGuestDashboard
                  weddingData={weddingData}
                  onOpenLiveDemo={handleOpenLiveDemo}
                  onOpenStudio={() => {
                    setCurrentTab('studio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            )}

            {/* Tab: PACKAGES */}
            {currentTab === 'packages' && (
              <div className="pt-8">
                <PackagesSection 
                  instagramUrl={weddingData.instagramUrl}
                  onSelectPackage={() => {
                    setCurrentTab('studio');
                    handleOpenDraftPreview();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
                <FaqSection />
              </div>
            )}

            {/* Tab: FAQ */}
            {currentTab === 'faq' && (
              <div className="pt-8">
                <FaqSection />
                <PackagesSection 
                  instagramUrl={weddingData.instagramUrl}
                  onSelectPackage={() => {
                    setCurrentTab('studio');
                    handleOpenDraftPreview();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Website Footer */}
      <SiteFooter
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLiveDemo={handleOpenLiveDemo}
        instagramUrl={weddingData.instagramUrl}
      />

      {/* Modals */}
      <DraftPreviewModal
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
        weddingData={weddingData}
        templateId={selectedStudioTemplate?.id || weddingData.themeId}
        onProceedToCheckout={handleProceedToCheckout}
        isSubmitting={isCreatingOrder}
      />

      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        data={weddingData}
        onSave={handleSaveData}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        weddingData={weddingData}
      />

    </div>
  );
}
