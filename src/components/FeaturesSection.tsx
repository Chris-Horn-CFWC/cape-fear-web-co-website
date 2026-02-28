import { useState } from "react";
import { Palette, Code, Globe, Video, Camera, Zap, ArrowRight } from "lucide-react";
import ServiceDetailDialog, { type ServiceData } from "@/components/ServiceDetailDialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services: ServiceData[] = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with your users in mind. From wireframes to polished mockups.",
    iconBg: "bg-primary/15 text-primary",
    tagline: "Convert more visitors with intuitive interfaces",
    longDescription:
      "Great design isn't just about aesthetics — it's about creating experiences that guide users naturally toward their goals. Our UI/UX design process starts with deep user research and competitive analysis to understand what your audience truly needs. We then craft wireframes, interactive prototypes, and pixel-perfect mockups that are tested and refined through usability sessions. The result is a digital experience that feels effortless, keeps visitors engaged, and drives measurable conversions.",
    includes: [
      "User research & persona development",
      "Wireframes & information architecture",
      "High-fidelity mockups & design systems",
      "Interactive prototyping & user flow mapping",
      "Usability testing & iterative refinement",
    ],
    perfectFor:
      "Businesses looking to increase conversions and reduce bounce rates with a professional, user-centered digital experience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built with modern technologies like React, Next.js, and more.",
    iconBg: "bg-emerald-600/15 text-emerald-500 dark:bg-emerald-400/15 dark:text-emerald-400",
    tagline: "Scalable sites that grow with your business",
    longDescription:
      "We build websites that aren't just visually stunning — they're engineered for speed, scalability, and long-term maintainability. Using modern frameworks like React and Next.js, we deliver responsive, SEO-friendly builds with clean code architecture. Whether you need a marketing site, a complex web application, or a headless CMS integration, our development process ensures your site performs flawlessly across all devices and scales effortlessly as your business grows.",
    includes: [
      "Custom React & Next.js development",
      "Responsive design across all devices",
      "CMS integration (WordPress, Sanity, Strapi)",
      "Performance optimization & lazy loading",
      "API integrations & third-party services",
    ],
    perfectFor:
      "Growing companies that need a fast, reliable web presence built on modern technology with room to scale.",
  },
  {
    icon: Globe,
    title: "SEO & Performance",
    description:
      "Optimize your site for search engines and speed. We ensure your website ranks and loads instantly.",
    iconBg: "bg-teal-600/15 text-teal-600 dark:bg-teal-400/15 dark:text-teal-400",
    tagline: "Get found by customers and load instantly",
    longDescription:
      "Visibility is everything online. Our SEO and performance optimization service ensures your website ranks for the keywords that matter most to your business while delivering lightning-fast load times. We conduct comprehensive technical audits, optimize Core Web Vitals, implement structured data markup, and develop keyword strategies that drive qualified organic traffic. Faster sites rank higher, convert better, and keep visitors coming back.",
    includes: [
      "Technical SEO audit & implementation",
      "Core Web Vitals & page speed optimization",
      "Schema markup & structured data",
      "Keyword research & content strategy",
      "Performance monitoring & reporting",
    ],
    perfectFor:
      "Businesses that want to rank higher on Google, reduce page load times, and attract more organic traffic.",
  },
  {
    icon: Video,
    title: "Motion & Animation",
    description:
      "Bring your brand to life with stunning animations, micro-interactions, and video content.",
    iconBg: "bg-green-600/15 text-green-600 dark:bg-green-400/15 dark:text-green-400",
    tagline: "Make your brand unforgettable with motion",
    longDescription:
      "Motion design transforms static interfaces into dynamic, memorable experiences. From subtle micro-interactions that delight users to full-scale scroll animations and promotional video content, we use motion to communicate your brand personality and guide user attention. Every animation is purposeful — enhancing usability, telling your story, and creating moments that stick with visitors long after they leave your site.",
    includes: [
      "Micro-interactions & hover effects",
      "Scroll-triggered animations",
      "Lottie & SVG animations",
      "Promotional video production",
      "Loading states & transition design",
    ],
    perfectFor:
      "Brands that want to stand out with polished, professional motion design that enhances engagement and recall.",
  },
  {
    icon: Camera,
    title: "Brand Identity",
    description:
      "Logos, color systems, and visual guidelines that make your brand instantly recognizable.",
    iconBg: "bg-lime-600/15 text-lime-600 dark:bg-lime-400/15 dark:text-lime-400",
    tagline: "Build instant recognition and trust",
    longDescription:
      "Your brand is more than a logo — it's the complete visual language that communicates who you are, what you stand for, and why customers should trust you. We develop comprehensive brand identity systems that include logo design, color palettes, typography selections, and detailed brand guidelines. The result is a cohesive visual identity that works seamlessly across every touchpoint, from your website to social media to print collateral.",
    includes: [
      "Logo design & variations",
      "Color palette & typography system",
      "Brand guidelines document",
      "Social media templates & assets",
      "Business card & stationery design",
    ],
    perfectFor:
      "New businesses launching their brand or established companies ready for a professional rebrand that builds credibility.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "Go from idea to interactive prototype in days. Test, iterate, and validate before committing to code.",
    iconBg: "bg-cyan-600/15 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-400",
    tagline: "Validate ideas before investing in development",
    longDescription:
      "The fastest way to reduce risk is to test your ideas before building them. Our rapid prototyping service takes your concept from rough sketch to interactive, clickable prototype in days — not weeks. We run focused design sprints, build realistic prototypes, and conduct user testing sessions so you can gather real feedback, iterate quickly, and move into development with confidence that you're building the right thing.",
    includes: [
      "Design sprint facilitation",
      "Interactive clickable prototypes",
      "User testing & feedback sessions",
      "Rapid iteration & refinement",
      "Development-ready specifications",
    ],
    perfectFor:
      "Startups validating product ideas or teams exploring new features who want to test before investing in full development.",
  },
];

interface FeaturesSectionProps {
  onGetStarted: () => void;
}

const FeaturesSection = ({ onGetStarted }: FeaturesSectionProps) => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="relative py-16 sm:py-24 lg:py-32">
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
            <span className="text-xs sm:text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-gradient">Launch & Grow</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a full suite of digital services designed to take your brand from concept to a live website in just 7 days, giving you everything you need to launch with confidence and grow your online presence from day one.
          </p>
        </div>

        {/* Mobile Accordion */}
        <div className="mt-10 sm:hidden">
          <Accordion type="single" collapsible className="glass-card rounded-2xl overflow-hidden">
            {services.map((service, i) => (
              <AccordionItem key={service.title} value={service.title} className="border-b border-border/50 last:border-b-0 px-4">
                <AccordionTrigger className="py-3 hover:no-underline gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${service.iconBg}`}>
                      <service.icon size={16} />
                    </div>
                    <span className="font-display text-sm font-semibold text-foreground">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-3">{service.description}</p>
                  <button
                    type="button"
                    onClick={() => setActiveService(i)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary"
                  >
                    Explore {service.title} <ArrowRight size={12} />
                  </button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop Bento Grid */}
        <div className="mt-10 sm:mt-16 hidden sm:grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <button
              key={service.title}
              type="button"
              onClick={() => setActiveService(i)}
            className="glass-card group cursor-pointer rounded-2xl p-4 sm:p-6 text-left transition-all duration-300 hover:scale-[1.02]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${200 + i * 100}ms`,
                transitionProperty: "opacity, transform, border-color, box-shadow",
                transitionDuration: "700ms",
              }}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}
              >
                <service.icon size={22} />
              </div>
              <p className="font-display text-lg font-semibold text-foreground">
                {service.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-100 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100">
                Explore {service.title} <ArrowRight size={12} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Service Detail Dialog */}
      <ServiceDetailDialog
        service={activeService !== null ? services[activeService] : null}
        open={activeService !== null}
        onOpenChange={(open) => {
          if (!open) setActiveService(null);
        }}
        onGetStarted={onGetStarted}
      />
    </section>
  );
};

export default FeaturesSection;
