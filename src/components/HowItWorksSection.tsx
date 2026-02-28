import { MessageSquare, PenTool, RefreshCw, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const steps = [
  {
    icon: MessageSquare,
    title: "Tell Us Your Vision",
    description:
      "Fill out our quick form or schedule a call so we can learn about your business, your goals, and exactly what you need from your new website.",
  },
  {
    icon: PenTool,
    title: "We Design & Build",
    description:
      "Our team crafts a stunning, custom website tailored to your brand using modern frameworks, ensuring it looks great and performs flawlessly on every device.",
  },
  {
    icon: RefreshCw,
    title: "Review & Refine",
    description:
      "You get to review the website in detail and request any changes you'd like, because we iterate until you're completely satisfied with every page.",
  },
  {
    icon: Rocket,
    title: "Launch in 7 Days",
    description:
      "Your new website goes live within 7 days, and we handle hosting, domain setup, SSL certificates, and everything in between so you don't have to worry about the technical details.",
  },
];

interface HowItWorksSectionProps {
  onGetStarted: () => void;
}

const HowItWorksSection = ({ onGetStarted }: HowItWorksSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="how-it-works" ref={ref} className="relative py-16 sm:py-24 lg:py-32">
      

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
            <span className="text-xs sm:text-sm font-medium text-primary">How It Works</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-5xl">
            From Idea to Launch in{" "}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've streamlined every step of the process so you can focus on running your business while we design, build, and launch your new website — all within 7 days from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${200 + i * 150}ms`,
              }}
            >
              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute right-0 top-10 hidden h-px w-[calc(50%-1.5rem)] bg-border lg:block"
                />
              )}
              {i > 0 && (
                <div
                  className="absolute left-0 top-10 hidden h-px w-[calc(50%-1.5rem)] bg-border lg:block"
                />
              )}

              {/* Step Number + Icon */}
              <div
                className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/10" />
                <div className="relative flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Step {i + 1}
                  </span>
                  <step.icon size={28} className="mt-1 text-primary" />
                </div>
              </div>

              <p className="font-display text-lg font-semibold text-foreground">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <Button
            variant="hero"
            size="lg"
            className="gap-2"
            onClick={onGetStarted}
          >
            Begin Your Website Journey <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
