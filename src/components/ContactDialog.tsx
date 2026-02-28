import { useState } from "react";
import { ArrowRight, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const PROJECT_TYPES = ["Landing Page", "E-Commerce", "SaaS App", "Branding", "UI/UX"];

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      toast.error("Please enter your name.");
      return;
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvzbzzdg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: phone.trim(),
          projectType: selectedType,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.success("Thanks! We'll be in touch within 24 hours.");
      setName("");
      setEmail("");
      setPhone("");
      setSelectedType(null);
      onOpenChange(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-card-border bg-card sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
              <Send size={18} className="text-primary" />
            </div>
            <div>
              <DialogTitle className="font-display text-foreground">
                Get Your Site Started
              </DialogTitle>
              <DialogDescription>
                We'll get back to you within 24 hours.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            aria-label="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="email"
            placeholder="you@company.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="tel"
            placeholder="Phone number (optional)"
            aria-label="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={20}
            className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />

          {/* Project Type */}
          <div>
            <span className="text-xs text-muted-foreground">What do you need?</span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {PROJECT_TYPES.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedType(selectedType === tag ? null : tag)}
                  className={`cursor-pointer rounded-full border px-2.5 py-1 text-xs transition-colors ${
                    selectedType === tag
                      ? "border-primary bg-primary/20 text-primary font-medium"
                      : "border-border bg-secondary text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="default"
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Get Started"} <ArrowRight size={16} />
          </Button>
        </form>

        {/* Call CTA */}
        <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-3">
          <Phone size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">Or call us directly:</span>
          <a
            href="tel:+14702631395"
            className="text-sm font-semibold text-primary hover:underline"
          >
            (470) 263-1395
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
