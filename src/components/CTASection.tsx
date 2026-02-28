import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTASectionProps {
  onGetStarted: () => void;
}

const CTASection = ({ onGetStarted }: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className="glass-card rounded-2xl p-8 sm:p-12 lg:p-16 mx-auto max-w-2xl text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Ready to Launch Your{" "}
            <br className="hidden sm:block" />
            Dream Website?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
            Stop waiting months for a website that never seems to launch — tell us your vision and we'll design, build, and deliver your new website live in under 7 days, starting at just $249.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              variant="hero"
              className="gap-2 w-full sm:w-auto"
              onClick={onGetStarted}
            >
              Launch Your Website <ArrowRight size={18} />
            </Button>
            <a href="/#pricing" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="hero-outline"
                className="w-full sm:w-auto"
              >
                See Pricing
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
