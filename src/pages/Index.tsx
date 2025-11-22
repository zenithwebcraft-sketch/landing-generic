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

type CheckoutMode = 'embedded' | 'hotmart';

const Index = () => {
  const defaultPaymentMode = (import.meta.env.VITE_DEFAULT_PAYMENT_MODE as CheckoutMode) || 'embedded';
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
        <CheckoutSection />
        <CheckoutSection defaultMode={defaultPaymentMode} />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
