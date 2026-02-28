import { ExternalLink, Globe, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import novaScreenshot from "@/assets/nova-screenshot.png";

const projects = [
  {
    name: "Nova Automotive Restorations",
    industry: "Automotive",
    url: "https://novaautomotiverestorations.com",
    domain: "novaautomotiverestorations.com",
    description:
      "A full-service automotive restoration shop needed a bold online presence to match their craft. We delivered a high-impact site that showcases their work and drives inquiries — live in under a week.",
  },
];

const BrowserFrame = ({ domain }: { domain: string }) => (
    <div className="rounded-xl border border-card-border bg-card/80 shadow-2xl shadow-primary/10 shadow-lg backdrop-blur-sm overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-card-border px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-destructive/60" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
          <div className="h-3 w-3 rounded-full bg-primary/40" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-[280px] items-center justify-center rounded-md bg-secondary/80 px-3">
        <Globe size={10} className="mr-1.5 text-muted-foreground shrink-0" />
        <span className="text-[10px] text-muted-foreground truncate">{domain}</span>
      </div>
    </div>

    {/* Screenshot */}
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
      <img
        src={novaScreenshot}
        alt={`Screenshot of ${domain}`}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  </div>
);

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const project = projects[0];

  return (
    <section id="portfolio" ref={ref} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, hsl(150 70% 50% / 0.04) 0%, transparent 70%)' }} />
      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          className="mx-auto max-w-2xl text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 sm:px-4 sm:py-1.5">
            <Wrench size={14} className="text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-5xl">
            Real Sites for{" "}
            <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what we've built — live, launched, and driving results.
          </p>
        </div>

        {/* Project showcase */}
        <div
          className="mt-10 sm:mt-16 grid gap-10 lg:gap-12 lg:grid-cols-2 lg:items-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "200ms",
          }}
        >
          {/* Details */}
          <div className="order-2 lg:order-1 glass-card rounded-xl p-6 sm:p-8">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {project.industry}
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {project.name}
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="mt-6 border-t border-card-border pt-6">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="gap-2">
                  Visit Live Site <ExternalLink size={16} />
                </Button>
              </a>
            </div>
          </div>

          {/* Browser mockup */}
          <div className="order-1 lg:order-2">
            <BrowserFrame domain={project.domain} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
