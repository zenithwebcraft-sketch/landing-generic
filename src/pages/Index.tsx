import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContentSection from "@/components/ContentSection";
import BonusesSection from "@/components/BonusesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CheckoutSection from '@/components/CheckoutSection';
import Footer from "@/components/Footer";
import { integrationsConfig } from "@/config/integrations.config";

type CheckoutMode = 'embedded' | 'hotmart';

const Index = () => {
  // Usar defaultMode de integrations.config.ts
  const defaultPaymentMode: CheckoutMode = integrationsConfig.hotmart.defaultMode;
  
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <div className="pt-10">
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContentSection />
        <BonusesSection />
        <CTASection />
        <FAQSection />
        <CheckoutSection defaultMode={defaultPaymentMode} />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
