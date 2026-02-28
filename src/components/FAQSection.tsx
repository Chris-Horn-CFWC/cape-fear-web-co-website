import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const faqs = [
  {
    question: "How can you build a website in just 7 days?",
    answer:
      "We use a streamlined process with modern frameworks and a focused team. By cutting out unnecessary back-and-forth and working from proven design systems, we deliver production-ready sites fast without sacrificing quality.",
  },
  {
    question: "What if I need changes after the site launches?",
    answer:
      "All plans include a revision period before launch. After launch, we offer affordable maintenance packages, or you can make changes yourself — we build on platforms you can manage.",
  },
  {
    question: "Do you handle hosting and domains?",
    answer:
      "Yes! We handle domain registration, DNS setup, SSL certificates, and hosting. Everything is included so you don't have to worry about the technical details.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with modern frameworks like React, Next.js, and Tailwind CSS. For content management, we integrate with headless CMS platforms like Sanity or WordPress depending on your needs.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Absolutely! Reach out to us and we'll share our portfolio with case studies and live examples across different industries including e-commerce, real estate, restaurants, and more.",
  },
  {
    question: "What's included in the pricing?",
    answer:
      "Our prices are all-inclusive: design, development, mobile responsiveness, basic SEO, contact forms, and launch setup. No hidden fees or surprise invoices — what you see is what you pay.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we offer monthly maintenance and support packages starting at $49/month. This covers updates, security patches, performance monitoring, and priority support for any changes you need.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="faq" ref={ref} className="relative py-16 sm:py-24 lg:py-32">
      

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
            <span className="text-xs sm:text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Got questions about getting your new website live in 7 days? We've got answers — here are the most common things people ask before they launch their website with us.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="mx-auto mt-10 sm:mt-16 max-w-3xl transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "200ms",
          }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl border-none px-5 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline sm:text-base py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
