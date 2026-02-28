import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";

const NotFound = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar onGetStarted={openContact} />

      <main className="flex-1 flex items-center justify-center pt-16">
        <div className="text-center px-4">
          <h1 className="font-display text-7xl sm:text-9xl font-bold text-gradient mb-4">
            404
          </h1>
          <p className="text-xl sm:text-2xl text-foreground font-semibold mb-2">
            Page Not Found
          </p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg" className="gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer onGetStarted={openContact} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default NotFound;
