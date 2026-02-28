import { Star, Quote, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote:
      "I desperately needed a website for my detailing business and Cape Fear made that happen. Due to them designing my website for me, I've seen such a high increase in business and I cannot be more grateful for this company & how they have helped my business improve!",
    name: "Connor Andrews",
    initials: "CA",
    color: "bg-emerald-500",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Fast and reliable service with stunning visuals. Brought my yoga business back to life in just under a week. Couldn't be happier with the end product!",
    name: "Annabelle M",
    initials: "AM",
    color: "bg-violet-500",
    rating: 5,
    featured: false,
  },
  {
    quote:
      "Cape Fear did a great job on my site. Was skeptical about a 7 day or under timeframe but they delivered. Would recommend.",
    name: "Cam Clark",
    initials: "CC",
    color: "bg-sky-500",
    rating: 5,
    featured: false,
  },
  {
    quote:
      "Amazing experience top to bottom. Brought my vision alive using graphics, coding, and providing account management you don't quite find every where else",
    name: "Adrian London",
    initials: "AL",
    color: "bg-amber-500",
    rating: 5,
    featured: false,
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="testimonials" ref={ref} className="relative py-16 sm:py-24 lg:py-32">
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
            <GoogleIcon />
            <span className="text-xs sm:text-sm font-medium text-primary">Google Reviews</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-5xl">
            Real Results from{" "}
            <span className="text-gradient">Real Clients</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it — hear directly from the businesses we've helped launch in 7 days or less.
          </p>
        </div>

        {/* Cards — featured spans full on top, 3 below */}
        <div className="mt-10 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative rounded-2xl border border-transparent p-6 sm:p-8 transition-all duration-700 glass-card ${
                t.featured ? "sm:col-span-2 lg:col-span-3 lg:flex lg:items-start lg:gap-8" : ""
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${200 + i * 150}ms`,
              }}
            >
              {/* Gradient border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                background: "linear-gradient(135deg, hsl(150 70% 50% / 0.15), hsl(170 60% 45% / 0.15))",
              }} />

              {/* Decorative quote */}
              <Quote
                size={t.featured ? 56 : 40}
                className="absolute top-4 right-4 text-primary/10"
              />

              {/* Avatar + Google badge — side layout for featured */}
              <div className={`relative z-10 flex items-center gap-3 ${t.featured ? "lg:flex-col lg:items-center lg:min-w-[140px] lg:pt-2" : "mb-5"}`}>
                <div className={`${t.color} flex items-center justify-center rounded-full text-white font-bold shrink-0 ${t.featured ? "h-14 w-14 text-lg" : "h-10 w-10 text-sm"}`}>
                  {t.initials}
                </div>
                <div className={t.featured ? "lg:text-center" : ""}>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <GoogleIcon />
                    <span className="text-[11px] text-muted-foreground">Google Review</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                {/* Stars */}
                <div className={`flex gap-0.5 ${t.featured ? "" : "mt-0"}`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote text */}
                <p className={`mt-3 leading-relaxed text-muted-foreground ${t.featured ? "text-base sm:text-lg" : "text-sm"}`}>
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See all reviews link */}
        <div
          className="mt-8 text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transitionDelay: "800ms",
          }}
        >
          <a
            href="https://share.google/gNnWNkNfRQmJtOQeX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            <GoogleIcon />
            See all reviews on Google
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
