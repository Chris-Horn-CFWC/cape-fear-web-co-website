import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TechBadgesSection from "@/components/TechBadgesSection";
import PortfolioSection from "@/components/PortfolioSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";


const SITE_URL = "https://www.capefearweb.co";

const Index = () => {
  useEffect(() => {
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    setMeta('link[rel="canonical"]', "href", SITE_URL);
  }, []);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onGetStarted={openContact} />
      <main>
        <HeroSection onGetStarted={openContact} />
        <FeaturesSection onGetStarted={openContact} />
        <StatsSection />
        <TechBadgesSection />
        <PortfolioSection />
        <HowItWorksSection onGetStarted={openContact} />
        <TestimonialsSection />
        
        <PricingSection onGetStarted={openContact} />
        <FAQSection />
        <CTASection onGetStarted={openContact} />
      </main>
      <Footer onGetStarted={openContact} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Index;
