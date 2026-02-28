import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const quickLinks = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

const serviceLinks = [
  { label: "Web Design", href: "/#services" },
  { label: "Web Development", href: "/#services" },
  { label: "Branding", href: "/#services" },
  { label: "SEO Optimization", href: "/#services" },
  { label: "Rapid Prototyping", href: "/#services" },
];


interface FooterProps {
  onGetStarted: () => void;
}

const Footer = ({ onGetStarted }: FooterProps) => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-10 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cape Fear Web Co. builds stunning, high-performance websites that drive results — fast and affordable.
            </p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground/70">
              Based in Wilmington, NC — serving the Cape Fear region and beyond.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-display font-semibold text-foreground">Services</p>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-semibold text-foreground">Quick Links</p>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onGetStarted}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-semibold text-foreground">Get in Touch</p>
            <div className="mt-4 space-y-3">
              <a
                href="tel:+14702631395"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone size={16} className="text-primary" />
                (470) 263-1395
              </a>
              <a
                href="mailto:contact@capefearweb.co"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail size={16} className="text-primary" />
                contact@capefearweb.co
              </a>
            </div>
            <Button
              variant="hero"
              size="default"
              className="mt-6 w-full gap-2"
              onClick={onGetStarted}
            >
              Contact Us <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
          <p className="text-sm text-muted-foreground">
            © 2026 Cape Fear Web Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
