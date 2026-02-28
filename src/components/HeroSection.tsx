import { ArrowRight, Star, Clock, DollarSign, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const BrowserMockup = () => (
  <div className="mx-auto mt-12 sm:mt-16 max-w-3xl w-full animate-float">
    {/* Browser chrome */}
    <div className="rounded-xl border border-card-border bg-card/80 shadow-2xl shadow-primary/10 backdrop-blur-sm overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-card-border px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-destructive/60" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
          <div className="h-3 w-3 rounded-full bg-primary/40" />
        </div>
        <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md bg-secondary/80 px-3">
          <span className="text-[10px] text-muted-foreground">yourwebsite.com</span>
        </div>
      </div>

      {/* Page content */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Nav skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 rounded bg-primary/20" />
          <div className="flex gap-3">
            <div className="h-3 w-12 rounded bg-muted/60" />
            <div className="h-3 w-12 rounded bg-muted/60" />
            <div className="h-3 w-12 rounded bg-muted/60" />
          </div>
        </div>

        {/* Hero skeleton */}
        <div className="py-6 space-y-3 text-center">
          <div className="mx-auto h-5 w-48 rounded bg-foreground/10" />
          <div className="mx-auto h-3 w-64 rounded bg-muted-foreground/15" />
          <div className="mx-auto mt-3 h-8 w-28 rounded-lg bg-primary/30" />
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-lg border border-card-border bg-secondary/40 p-3 space-y-2">
              <div className="h-6 w-6 rounded bg-primary/20" />
              <div className="h-3 w-full rounded bg-foreground/8" />
              <div className="h-2 w-3/4 rounded bg-muted-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const trustBadges = [
  { icon: DollarSign, label: "From $249" },
  { icon: Clock, label: <>Live in {"<"} 7 days</> },
  { icon: ShieldCheck, label: "No commitment" },
];

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* CSS Gradient Background */}
      <div className="hero-gradient-bg absolute inset-0" />
      <div className="hero-grid absolute inset-0" />
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12 sm:py-16 lg:px-8 lg:py-20 text-center">
        <div className="animate-fade-in-up max-w-3xl">
          {/* Badge */}
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Clock size={14} className="text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Sites Live in Under 7 Days</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Your New Website,{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Live in 7 Days</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 sm:mt-8 mx-auto max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            We design, build, and launch your new website in under 7 days so you can start growing your business online without delay.
            There are no bloated timelines or inflated budgets — just a beautiful, high-performance website that goes live fast, starting at just <span className="font-semibold text-foreground">$249</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button variant="hero" size="lg" className="gap-2 w-full sm:w-auto" onClick={onGetStarted}>
              Start Your Project <ArrowRight size={18} />
            </Button>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                See Our Work
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs sm:text-sm text-muted-foreground"
              >
                <badge.icon size={14} className="text-primary" />
                {badge.label}
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                  "https://randomuser.me/api/portraits/men/75.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy client"
                    loading="lazy"
                    width={40}
                    height={40}
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">200+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
              <span className="ml-1 text-sm text-muted-foreground">4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Browser Mockup */}
        <BrowserMockup />
      </div>
    </section>
  );
};

export default HeroSection;
