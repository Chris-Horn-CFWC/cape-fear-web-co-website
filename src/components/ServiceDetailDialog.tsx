import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  tagline: string;
  longDescription: string;
  includes: string[];
  perfectFor: string;
}

interface ServiceDetailDialogProps {
  service: ServiceData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGetStarted: () => void;
}

const ServiceDetailDialog = ({
  service,
  open,
  onOpenChange,
  onGetStarted,
}: ServiceDetailDialogProps) => {
  if (!service) return null;

  const Icon = service.icon;

  const handleGetStarted = () => {
    onOpenChange(false);
    // Small delay so the close animation finishes before the contact dialog opens
    setTimeout(onGetStarted, 150);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-card-border bg-card sm:max-w-md max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${service.iconBg}`}
            >
              <Icon size={18} />
            </div>
            <div>
              <DialogTitle className="font-display text-foreground">
                {service.title}
              </DialogTitle>
              <DialogDescription>{service.tagline}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Detailed description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.longDescription}
        </p>

        {/* What's Included */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">
            What's Included
          </h4>
          <ul className="space-y-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Perfect For */}
        <div className="rounded-lg border border-border bg-secondary/50 px-4 py-3">
          <span className="text-xs font-medium text-muted-foreground">
            Perfect For:
          </span>
          <p className="mt-0.5 text-sm text-foreground">{service.perfectFor}</p>
        </div>

        {/* CTA */}
        <Button
          variant="hero"
          size="default"
          className="w-full gap-2"
          onClick={handleGetStarted}
        >
          Request This Service <ArrowRight size={16} />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;
