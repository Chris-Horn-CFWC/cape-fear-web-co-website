import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";

const SITE_URL = "https://www.capefearweb.co";

const PrivacyPolicy = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  useEffect(() => {
    document.title = "Privacy Policy | Cape Fear Web Co.";
    const desc = "Privacy Policy for Cape Fear Web Co. Learn how we collect, use, and protect your information.";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", "Privacy Policy | Cape Fear Web Co.");
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:url"]', "content", `${SITE_URL}/privacy`);
    setMeta('link[rel="canonical"]', "href", `${SITE_URL}/privacy`);

    return () => {
      document.title = "Web Design Wilmington NC | Cape Fear Web Co.";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar onGetStarted={openContact} />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: February 15, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>When you use our website or contact us, we may collect the following information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, and phone number you provide through our contact form.</li>
                <li><strong className="text-foreground">Project Details:</strong> Information about your project type and requirements submitted via our inquiry form.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Anonymous analytics data such as pages visited, time spent on site, browser type, and referring URL.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiries and provide quotes for our web design and development services.</li>
                <li>Communicate with you about your project, including updates and deliverables.</li>
                <li>Improve our website and services based on usage patterns.</li>
                <li>Send occasional updates about our services (only if you opt in).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Cookies & Tracking</h2>
              <p>Our website may use cookies and similar technologies to enhance your browsing experience. These include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-foreground">Essential Cookies:</strong> Required for basic site functionality such as theme preferences.</li>
                <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our site so we can improve it.</li>
              </ul>
              <p className="mt-2">You can disable cookies through your browser settings, though some site features may not function properly.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Third-Party Services</h2>
              <p>We may use third-party services to process form submissions (such as Formspree) and analyze site traffic. These services have their own privacy policies governing the use of your information. We do not sell, trade, or rent your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
              <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, contact us using the information below.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none mt-2 space-y-1">
                <li>Email: <a href="mailto:contact@capefearweb.co" className="text-primary hover:underline">contact@capefearweb.co</a></li>
                <li>Phone: <a href="tel:+14702631395" className="text-primary hover:underline">(470) 263-1395</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer onGetStarted={openContact} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default PrivacyPolicy;
