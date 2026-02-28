import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#portfolio" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
];

interface NavbarProps {
  onGetStarted: () => void;
}

const Navbar = ({ onGetStarted }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 sm:h-[4.5rem] items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Logo size="md" />

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
          ))}
          <button
            onClick={onGetStarted}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button variant="hero" size="default" onClick={onGetStarted}>
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-t border-border bg-background/95 backdrop-blur-xl lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-2 px-4 py-3">
          {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onGetStarted();
            }}
            className="rounded-md px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Contact
          </button>
          <div className="flex items-center gap-2 pt-2">
            <ThemeToggle />
            <Button
              variant="hero"
              size="default"
              className="flex-1"
              onClick={() => {
                setMobileOpen(false);
                onGetStarted();
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
