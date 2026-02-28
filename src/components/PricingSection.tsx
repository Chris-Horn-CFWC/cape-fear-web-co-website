import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const tiers = [
  {
    name: "Starter",
    price: "$249",
    description: "Perfect if you need a simple, professional landing page or single-page website that goes live in under a week.",
    features: [
      "Custom single-page design",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form integration",
      "Live in 5-7 days",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$499",
    description: "A multi-page business website with custom features, built and launched within 7 days to help your brand stand out online.",
    features: [
      "Up to 5 custom pages",
      "Advanced animations & interactions",
      "SEO optimization",
      "Analytics integration",
      "Live in 5-7 days",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$999+",
    description: "Ideal for e-commerce stores, web applications, or complex builds that need advanced functionality and a polished launch.",
    features: [
      "Unlimited pages",
      "E-commerce or app functionality",
      "Custom integrations & APIs",
      "Priority support & revisions",
      "Live in 7-14 days",
    ],
    highlighted: false,
  },
];

interface PricingSectionProps {
  onGetStarted: () => void;
}

const PricingSection = ({ onGetStarted }: PricingSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="pricing" ref={ref} className="relative py-16 sm:py-24 lg:py-32">
      

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          className="mx-auto max-w-2xl text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="mb-3 sm:mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 sm:px-4 sm:py-1.5">
            <span className="text-xs sm:text-sm font-medium text-primary">Pricing</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-5xl">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            There are no hidden fees and no surprise invoices — just pick the plan that fits your needs and we'll have your new website designed, built, and live within 7 days.
          </p>
        </div>

        {/* Tiers */}
        <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-700 ${
                tier.highlighted
                  ? "border border-primary bg-primary/5"
                  : "glass-card"
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${200 + i * 150}ms`,
              }}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {tier.badge}
                  </span>
                </div>
              )}

              <p className="font-display text-xl font-bold text-foreground">
                {tier.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {tier.description}
              </p>

              <div className="mt-6">
                <span className="font-display text-4xl font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="ml-1 text-sm text-muted-foreground">one-time</span>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "hero" : "hero-outline"}
                size="lg"
                className="mt-8 w-full gap-2"
                onClick={onGetStarted}
              >
                Choose {tier.name} <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
